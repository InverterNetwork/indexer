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
import fs from 'fs'
import path from 'path'

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
}: {
  event: eventLog<any>
  context: handlerContext
  triggerTotalSupply?: boolean
  properties: {
    address: string
  }
}) {
  // Generate unique identifier for the token
  const chainId = event.chainId
  const id = `${properties.address}-${chainId}`
  const currentEntity = await context.Token.get(id)

  let tokenDetails = {} as Awaited<ReturnType<typeof getTokenDetails>>

  // Check if we need to fetch token details
  const tokenDetailsKeys = ['name', 'symbol', 'decimals']
  if (!tokenDetailsKeys.every((key) => key in (currentEntity || {}))) {
    tokenDetails = await getTokenDetails({
      address: properties.address,
      chainId,
    })
  }

  // Initialize or update total supply
  let totalSupply: BigDecimal = currentEntity?.totalSupply || ZERO_BD
  if (triggerTotalSupply || !currentEntity?.totalSupply) {
    totalSupply = await getTotalSupply({
      address: properties.address,
      chainId,
      decimals: tokenDetails.decimals,
    })
  }

  // Merge all token data
  const token = {
    ...currentEntity,
    ...properties,
    ...tokenDetails,
    chainId,
    id,
    totalSupply,
  }

  context.Token.set(token)
  return id
}

export async function deriveTokenAddress({
  address,
  chainId,
  client = getPublicClient(chainId)!,
}: {
  address: string
  chainId: number
  client?: NonNullable<ReturnType<typeof getPublicClient>>
}): Promise<`0x${string}`> {
  const issuanceTokenAbi = [
    parseAbiItem('function issuanceToken() view returns (address)'),
  ]
  const tokenAbi = [parseAbiItem('function token() view returns (address)')]

  try {
    let tokenAddress: `0x${string}`

    try {
      tokenAddress = await client.readContract({
        address: address as `0x${string}`,
        abi: tokenAbi,
        functionName: 'token',
      })
    } catch {
      tokenAddress = await client.readContract({
        address: address as `0x${string}`,
        abi: issuanceTokenAbi,
        functionName: 'issuanceToken',
      })
    }

    return tokenAddress
  } catch (error) {
    return address as `0x${string}`
  }
}

const shortTermTotalSupplyCache = new CacheContainer(new MemoryStorage())

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
  erc20 = getERC20Contract(address as `0x${string}`),
}: {
  address: string
  chainId: number
  decimals: number
  client?: ReturnType<typeof getPublicClient>
  erc20?: ReturnType<typeof getERC20Contract>
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

  try {
    // Attempt to read total supply from contract
    totalSupply = await client.readContract({
      ...erc20,
      functionName: 'totalSupply',
    })
  } catch (firstError) {
    const tokenAddress = await deriveTokenAddress({
      address,
      chainId,
      client,
    })

    try {
      totalSupply = await client.readContract({
        ...getERC20Contract(tokenAddress),
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

// If dir .cache/token-details does not exist, create it
if (!fs.existsSync(path.join(__dirname, '..', '..', '.cache'))) {
  fs.mkdirSync(path.join(__dirname, '..', '..', '.cache'))
}

const longTermTokenDetailsCache = new CacheContainer(
  new NodeFsStorage(path.join(__dirname, '..', '..', '.cache', 'token-details'))
)

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
}: {
  address: string
  chainId: number
  client?: ReturnType<typeof getPublicClient>
  triggerTotalSupply?: boolean
}): Promise<{
  readonly name: string
  readonly symbol: string
  readonly decimals: number
}> {
  const cacheKey = `${address}-${chainId}`

  const cachedTokenDetails = await longTermTokenDetailsCache.getItem<{
    name: string
    symbol: string
    decimals: number
  }>(cacheKey)

  if (cachedTokenDetails) {
    return cachedTokenDetails
  }

  // Return default values if no client is available
  if (!client) {
    return {
      name: 'unknown',
      symbol: 'unknown',
      decimals: 0,
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
    results = await (async () => {
      try {
        return await firstAttempt(address as `0x${string}`)
      } catch {
        const tokenAddress = await deriveTokenAddress({
          address,
          chainId,
          client,
        })
        return await firstAttempt(tokenAddress as `0x${string}`)
      }
    })()
  } catch (error) {
    console.log('First multicall failed, trying alternate method')
    try {
      // Second attempt: Try bytes32 format
      const alternateResults = await (async () => {
        try {
          return await secondAttempt(address as `0x${string}`)
        } catch {
          const tokenAddress = await deriveTokenAddress({
            address,
            chainId,
            client,
          })

          return await secondAttempt(tokenAddress)
        }
      })()
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
  } as const

  await longTermTokenDetailsCache.setItem(cacheKey, entry, {
    isCachedForever: true,
  })

  return entry
}
