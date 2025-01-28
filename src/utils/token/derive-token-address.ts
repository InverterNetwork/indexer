import { parseAbiItem } from 'viem'
import { getPublicClient } from '../rpc'
import { CacheContainer } from 'node-ts-cache'
import { NodeFsStorage } from 'node-ts-cache-storage-node-fs'
import { createDirIfNotExists } from '../base'

const longTermCacheDir = createDirIfNotExists('.cache')

const longTermDerivedTokenAddressesCache = new CacheContainer(
  new NodeFsStorage(`${longTermCacheDir}/derived-token-addresses.json`)
)

export async function deriveTokenAddress({
  address,
  chainId,
  client = getPublicClient(chainId)!,
  derivesTo,
}: {
  address: string
  chainId: number
  client?: NonNullable<ReturnType<typeof getPublicClient>>
  derivesTo?: 'issuance' | 'token'
}): Promise<{
  derivedAddress: string
  derivedType: 'issuance' | 'token' | null
}> {
  let tokenAddress = address as `0x${string}`
  let derivedType = derivesTo

  const issuanceTokenAbi = [
    parseAbiItem('function issuanceToken() view returns (address)'),
  ]
  const getIssuanceTokenAbi = [
    parseAbiItem('function getIssuanceToken() view returns (address)'),
  ]
  const tokenAbi = [parseAbiItem('function token() view returns (address)')]

  const handleToken = async () => {
    const cacheKey = `${address.toLowerCase()}-${chainId}-token`

    const cached =
      await longTermDerivedTokenAddressesCache.getItem<`0x${string}`>(cacheKey)

    if (cached) {
      return cached
    }

    const result = await client.readContract({
      address: address as `0x${string}`,
      abi: tokenAbi,
      functionName: 'token',
    })

    await longTermDerivedTokenAddressesCache.setItem(cacheKey, result, {
      isCachedForever: true,
    })

    return result
  }

  const handleIssuance = async () => {
    const cacheKey = `${address.toLowerCase()}-${chainId}-issuance`

    const cached =
      await longTermDerivedTokenAddressesCache.getItem<`0x${string}`>(cacheKey)

    if (cached) {
      return cached
    }

    const result = await (async () => {
      try {
        // 1. Try to get issuance token from wrapped token, if it exists return it else throw and continue
        return await client.readContract({
          address: address as `0x${string}`,
          abi: issuanceTokenAbi,
          functionName: 'issuanceToken',
        })
      } catch {
        let fmIssuanceToken: `0x${string}` | null = null

        try {
          // 2. Try to get issuance token from the funding manager, set it if it exists else throw and continue
          fmIssuanceToken = await client.readContract({
            address: address as `0x${string}`,
            abi: getIssuanceTokenAbi,
            functionName: 'getIssuanceToken',
          })
        } catch {}

        try {
          // 3. If fmIssuanceToken exists, try to unwrap it
          if (fmIssuanceToken)
            fmIssuanceToken = await client.readContract({
              address: fmIssuanceToken,
              abi: issuanceTokenAbi,
              functionName: 'issuanceToken',
            })
        } catch {}

        // 4. Return the fmIssuanceToken if it exists, else return the address
        return (fmIssuanceToken ?? address) as `0x${string}`
      }
    })()

    await longTermDerivedTokenAddressesCache.setItem(cacheKey, result, {
      isCachedForever: true,
    })

    return result
  }

  if (!!derivesTo) {
    try {
      switch (derivesTo) {
        case 'issuance':
          tokenAddress = await handleIssuance()
          break
        case 'token':
          tokenAddress = await handleToken()
          break
      }
    } catch {}
  } else {
    try {
      tokenAddress = await handleToken()
      derivedType = 'token'
    } catch {
      try {
        tokenAddress = await handleIssuance()
        derivedType = 'issuance'
      } catch {}
    }
  }

  return {
    derivedAddress: tokenAddress,
    derivedType: derivedType ?? null,
  }
}
