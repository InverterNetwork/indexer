import { parseAbiItem } from 'viem'
import { getPublicClient } from '../rpc'
import { CacheContainer } from 'node-ts-cache'
import { NodeFsStorage } from 'node-ts-cache-storage-node-fs'
import { createDirIfNotExists } from '../base'
import { TOKEN_DEBUG } from '../debug'
import { SourceTokenType_t } from 'generated/src/db/Enums.gen'

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
  // VARIABLES
  // --------------------------------------------------------------------------

  let tokenAddress = address as `0x${string}`
  let derivedType = derivesTo

  // CONSTANTS
  // --------------------------------------------------------------------------

  const issuanceTokenAbi = [
    parseAbiItem('function issuanceToken() view returns (address)'),
  ]
  const getIssuanceTokenAbi = [
    parseAbiItem('function getIssuanceToken() view returns (address)'),
  ]
  const tokenAbi = [parseAbiItem('function token() view returns (address)')]

  // HANDLERS
  // --------------------------------------------------------------------------

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
      let possibleWrappedIssuanceToken = address as `0x${string}`

      // Try to get issuance token from the funding manager
      possibleWrappedIssuanceToken = await client.readContract({
        address: address as `0x${string}`,
        abi: getIssuanceTokenAbi,
        functionName: 'getIssuanceToken',
      })

      try {
        // Try to unwrap the issuance token
        possibleWrappedIssuanceToken = await client.readContract({
          address: possibleWrappedIssuanceToken as `0x${string}`,
          abi: issuanceTokenAbi,
          functionName: 'issuanceToken',
        })
      } catch (error) {
        TOKEN_DEBUG()(`Try unwrapping issuance token failed`)
      }

      // Return the fmIssuanceToken if it exists, else return the address
      return possibleWrappedIssuanceToken
    })()

    await longTermDerivedTokenAddressesCache.setItem(cacheKey, result, {
      isCachedForever: true,
    })

    return result
  }

  // EXECUTE
  // --------------------------------------------------------------------------

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
    } catch (error: any) {
      TOKEN_DEBUG()(
        `Failed to derive @ derivesTo: ${derivesTo}, chainId: ${chainId}, address: ${address}`,
        error?.message ?? error?.cause ?? error
      )
    }
  }

  if (!derivesTo) {
    try {
      tokenAddress = await handleToken()
      derivedType = 'token'
    } catch (error) {
      TOKEN_DEBUG()(`@ auto-derive collateral token address failed`, error)
      try {
        tokenAddress = await handleIssuance()
        derivedType = 'issuance'
      } catch (error) {
        TOKEN_DEBUG()(
          `Failed to derive @ auto-derive collateral & issuance token address: chainId: ${chainId}, address: ${address}`,
          error
        )
      }
    }
  }

  // RETURN
  // --------------------------------------------------------------------------
  return {
    derivedAddress: tokenAddress,
    derivedType: derivedType ?? null,
  }
}

export async function deriveSourceTokenType({
  address,
  chainId,
}: {
  address: string
  chainId: number
}): Promise<SourceTokenType_t> {
  let sourceType: SourceTokenType_t = 'ISSUANCE'

  const collateralTokenCacheKey = `${address.toLowerCase()}-${chainId}-token`
  const issuanceTokenCacheKey = `${address.toLowerCase()}-${chainId}-issuance`

  const cachedCollateralToken =
    await longTermDerivedTokenAddressesCache.getItem<`0x${string}`>(
      collateralTokenCacheKey
    )
  const cachedIssuanceToken =
    await longTermDerivedTokenAddressesCache.getItem<`0x${string}`>(
      issuanceTokenCacheKey
    )

  if (cachedCollateralToken) {
    sourceType = 'COLLATERAL'
  }

  if (cachedIssuanceToken) {
    sourceType = 'ISSUANCE'
  }

  return sourceType
}
