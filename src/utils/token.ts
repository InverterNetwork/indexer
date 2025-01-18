import { eventLog, handlerContext, BigDecimal } from 'generated'
import { formatUnits, hexToString, parseAbiItem } from 'viem'
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'
import { NodeFsStorage } from 'node-ts-cache-storage-node-fs'
import {
  getERC20BytesContract,
  getERC20Contract,
  getPublicClient,
  ZERO_BD,
} from '.'
import {
  coinGeckoChainIds,
  setGeckotermAPIConfig,
  getSimpleNetworksByNetworkTokenPriceByAddresses,
} from 'geckoterm'

import { createDirIfNotExists } from './base'

setGeckotermAPIConfig({
  baseUrl: 'https://api.geckoterminal.com/api/v2',
  // Replace with your API key / if you have one
  headers: {
    Authorization: `Bearer ${process.env.GECKOTERM_API_KEY}`,
  },
})

const shortTermTotalSupplyCache = new CacheContainer(new MemoryStorage())
const shortTermUsdPriceCache = new CacheContainer(new MemoryStorage())

// If dir .cache/token-details does not exist, create it
const longTermCacheDir = createDirIfNotExists('.cache')

const longTermTokenDetailsCache = new CacheContainer(
  new NodeFsStorage(`${longTermCacheDir}/token-details.json`)
)

const longTermDerivedTokenAddressesCache = new CacheContainer(
  new NodeFsStorage(`${longTermCacheDir}/derived-token-addresses.json`)
)

/**
 * Updates or creates a token entity with the latest information
 * @param event - The event that triggered the update
 * @param context - The handler context for database operations
 * @param properties - Token properties including address
 * @param triggerTotalSupply - Flag to force total supply update
 * @returns The token's unique identifier
 */
export async function updateToken({
  event,
  context,
  properties,
  triggerTotalSupply = false,
  singleType,
}: {
  event: eventLog<any>
  context: handlerContext
  triggerTotalSupply?: boolean
  singleType?: 'issuance' | 'token'
  properties: {
    address: string
  }
}) {
  const { address, ...rest } = properties
  // Generate unique identifier for the token
  const chainId = event.chainId

  const derivedAddress = await deriveTokenAddress({
    address,
    chainId,
    singleType,
  })

  const id = `${derivedAddress}-${chainId}`
  const currentEntity = await context.Token.get(id)

  let tokenDetails = {} as Awaited<ReturnType<typeof getTokenDetails>>
  // Check if we need to fetch token details
  const tokenDetailsKeys = ['name', 'symbol', 'decimals', 'address']
  if (!tokenDetailsKeys.every((key) => key in (currentEntity || {}))) {
    tokenDetails = await getTokenDetails({
      address: derivedAddress,
      chainId,
    })
  }

  // Initialize or update total supply
  let totalSupply: BigDecimal = currentEntity?.totalSupply || ZERO_BD
  if (triggerTotalSupply || !currentEntity?.totalSupply) {
    totalSupply = await getTotalSupply({
      address: derivedAddress,
      chainId,
      decimals: tokenDetails.decimals,
    })
  }

  // Merge all token data
  const token = {
    ...currentEntity,
    ...properties,
    ...tokenDetails,
    address: derivedAddress,
    chainId,
    id,
    totalSupply,
  }

  context.Token.set(token)
  return id
}

/**
 * Fetches the total supply of a token
 * @param address - Token contract address
 * @param chainId - Network chain ID
 * @param decimals - Token decimals
 * @returns Formatted total supply as BigDecimal
 */
export async function getTotalSupply({
  address,
  chainId,
  decimals,
  client = getPublicClient(chainId),
}: {
  address: string
  chainId: number
  decimals: number
  client?: ReturnType<typeof getPublicClient>
}): Promise<BigDecimal> {
  // Return zero if no client is available
  if (!client) {
    return ZERO_BD
  }

  let totalSupply: bigint

  const cacheKey = `${address}-${chainId}`

  const cachedTotalSupply =
    await shortTermTotalSupplyCache.getItem<bigint>(cacheKey)

  if (cachedTotalSupply) {
    return BigDecimal(formatUnits(cachedTotalSupply, decimals))
  }

  const erc20Contract = getERC20Contract(address as `0x${string}`)

  try {
    // Attempt to read total supply from contract
    totalSupply = await client.readContract({
      ...erc20Contract,
      functionName: 'totalSupply',
    })
  } catch (firstError) {
    try {
      totalSupply = await client.readContract({
        ...erc20Contract,
        functionName: 'totalSupply',
      })
    } catch (secondError) {
      console.error(
        `Failed to get total supply for ${address} at ${
          firstError ? 'primary' : 'secondary'
        } method:`,
        firstError || secondError
      )
      return ZERO_BD
    }
  }

  await shortTermTotalSupplyCache.setItem(cacheKey, totalSupply, {
    ttl: 1 * 1000, // 1 seconds
  })

  // Format the total supply with correct decimals
  const formattedTotalSupply = BigDecimal(formatUnits(totalSupply, decimals))
  return formattedTotalSupply
}

export async function getUsdPrice({
  address,
  chainId,
  client = getPublicClient(chainId),
}: {
  address: string
  chainId: number
  client?: ReturnType<typeof getPublicClient>
}): Promise<BigDecimal> {
  const cacheKey = `${address}-${chainId}`
  const chainLabel = coinGeckoChainIds?.[chainId]
  let usdPrice = ZERO_BD

  if (!client || !chainLabel || client.chain.testnet === true) {
    return usdPrice
  }

  const cachedUsdPrice = await shortTermUsdPriceCache.getItem<string>(cacheKey)

  if (cachedUsdPrice) {
    return BigDecimal(cachedUsdPrice)
  }

  try {
    const result = await getSimpleNetworksByNetworkTokenPriceByAddresses({
      path: {
        addresses: address,
        network: chainLabel,
      },
    })

    if (result.error) {
      throw result.error
    }

    const singleToken = result.data.data?.[0].attributes?.token_prices?.[
      address
    ] as string | undefined

    if (singleToken) {
      usdPrice = BigDecimal(singleToken)
    }
  } catch (error) {
    console.error(
      `Failed to get USD price for ${address} at ${chainLabel}:`,
      error
    )
  }

  await shortTermUsdPriceCache.setItem(cacheKey, usdPrice.toString(), {
    ttl: 1 * 60 * 1000, // 1 minute
  })

  return usdPrice
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
  const cacheKey = `${address}-${chainId}`

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

export async function deriveTokenAddress({
  address,
  chainId,
  client = getPublicClient(chainId)!,
  singleType,
}: {
  address: string
  chainId: number
  client?: NonNullable<ReturnType<typeof getPublicClient>>
  singleType?: 'issuance' | 'token'
}): Promise<string> {
  const issuanceTokenAbi = [
    parseAbiItem('function issuanceToken() view returns (address)'),
  ]
  const getIssuanceTokenAbi = [
    parseAbiItem('function getIssuanceToken() view returns (address)'),
  ]
  const tokenAbi = [parseAbiItem('function token() view returns (address)')]

  try {
    let tokenAddress: `0x${string}`

    const handleToken = async () => {
      const cacheKey = `${address}-${chainId}-token`

      const cached =
        await longTermDerivedTokenAddressesCache.getItem<`0x${string}`>(
          cacheKey
        )

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
      const cacheKey = `${address}-${chainId}-issuance`

      const cached =
        await longTermDerivedTokenAddressesCache.getItem<`0x${string}`>(
          cacheKey
        )

      if (cached) {
        return cached
      }

      const result = await (async () => {
        try {
          return await client.readContract({
            address: address as `0x${string}`,
            abi: issuanceTokenAbi,
            functionName: 'issuanceToken',
          })
        } catch {
          const wrapped = await client.readContract({
            address: address as `0x${string}`,
            abi: getIssuanceTokenAbi,
            functionName: 'getIssuanceToken',
          })

          try {
            return await client.readContract({
              address: wrapped,
              abi: issuanceTokenAbi,
              functionName: 'issuanceToken',
            })
          } catch {
            return wrapped
          }
        }
      })()

      await longTermDerivedTokenAddressesCache.setItem(cacheKey, result, {
        isCachedForever: true,
      })

      return result
    }

    if (!!singleType) {
      switch (singleType) {
        case 'issuance':
          tokenAddress = await handleIssuance()
          break
        case 'token':
          tokenAddress = await handleToken()
          break
      }
    } else {
      try {
        tokenAddress = await handleToken()
      } catch {
        tokenAddress = await handleIssuance()
      }
    }

    return tokenAddress
  } catch (error) {
    return address
  }
}
