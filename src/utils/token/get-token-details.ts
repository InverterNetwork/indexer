import { BigDecimal } from 'generated'
import {
  getERC20BytesContract,
  getERC20Contract,
  getPublicClient,
  ZERO_BD,
} from '..'
import { CacheContainer } from 'node-ts-cache'
import { NodeFsStorage } from 'node-ts-cache-storage-node-fs'
import { hexToString } from 'viem'
import { createDirIfNotExists } from '../base'
export const longTermCacheDir = createDirIfNotExists('.cache')

const longTermTokenDetailsCache = new CacheContainer(
  new NodeFsStorage(`${longTermCacheDir}/token-details.json`)
)

/**
 * Retrieves the price of an issuance token in USD from the price of the underlying collateral token
 * @param priceCOL - The price of the underlying collateral token in USD
 * @param colPriceUSD - The price of the underlying collateral token in USD
 * @returns The price of the issuance token in USD
 */
export const getIssPriceFromCol = (
  priceCOL?: BigDecimal | number,
  colPriceUSD?: BigDecimal | number
) => {
  if (typeof priceCOL === 'number') {
    priceCOL = BigDecimal(priceCOL)
  }

  if (typeof colPriceUSD === 'number') {
    colPriceUSD = BigDecimal(colPriceUSD)
  }

  return (priceCOL ?? ZERO_BD).times(colPriceUSD ?? ZERO_BD)
}

/**
 * Retrieves token details (name, symbol, decimals) with caching
 * @param address - Token contract address
 * @param chainId - Network chain ID
 * @returns Object containing token details
 */
export async function getTokenDetails({
  address,
  chainId,
  client = getPublicClient(chainId),
  useCache = true,
}: {
  address: string
  chainId: number
  client?: ReturnType<typeof getPublicClient>
  useCache?: boolean
}): Promise<{
  readonly name: string
  readonly symbol: string
  readonly decimals: number
  readonly address: string
}> {
  const cacheKey = `${address.toLowerCase()}-${chainId}`

  const cachedTokenDetails = useCache
    ? await longTermTokenDetailsCache.getItem<{
        name: string
        symbol: string
        decimals: number
        address: string
      }>(cacheKey)
    : undefined

  if (cachedTokenDetails && useCache) {
    return cachedTokenDetails
  }

  // Return default values if no client is available
  if (!client) {
    return {
      name: 'unknown',
      symbol: 'unknown',
      decimals: 0,
      address,
    }
  }

  const firstAttempt = (add: `0x${string}`) => {
    const erc20 = getERC20Contract(add)
    return client.multicall({
      allowFailure: false,
      contracts: [
        {
          ...erc20,
          functionName: 'decimals',
        },
        {
          ...erc20,
          functionName: 'name',
        },
        {
          ...erc20,
          functionName: 'symbol',
        },
      ],
    })
  }

  const secondAttempt = (add: `0x${string}`) => {
    const erc20Bytes = getERC20BytesContract(add)
    return client.multicall({
      allowFailure: false,
      contracts: [
        {
          ...erc20Bytes,
          functionName: 'decimals',
        },
        {
          ...erc20Bytes,
          functionName: 'name',
        },
        {
          ...erc20Bytes,
          functionName: 'symbol',
        },
      ],
    })
  }

  let results: [number, string, string]
  try {
    // First attempt: Standard ERC20 calls
    results = await firstAttempt(address as `0x${string}`)
  } catch (error) {
    console.log('First multicall failed, trying alternate method')
    try {
      // Second attempt: Try bytes32 format
      const alternateResults = await secondAttempt(address as `0x${string}`)
      // Convert bytes32 results to strings and clean up null characters
      results = [
        alternateResults[0],
        hexToString(alternateResults[1]).replace(/\u0000/g, ''),
        hexToString(alternateResults[2]).replace(/\u0000/g, ''),
      ]
    } catch (alternateError) {
      console.error(`Alternate method failed for token ${address}:`)
      results = [0, 'unknown', 'unknown']
    }
  }

  const [decimals, name, symbol] = results

  console.log(
    `Got token details for ${address}: ${name} (${symbol}) with ${decimals} decimals`
  )

  // Prepare and cache the token details
  const entry = {
    name,
    symbol,
    decimals,
    address,
  } as const

  await longTermTokenDetailsCache.setItem(cacheKey, entry, {
    isCachedForever: true,
  })

  return entry
}
