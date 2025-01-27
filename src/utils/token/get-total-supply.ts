import { BigDecimal } from 'generated'
import { getERC20Contract, getPublicClient } from '../rpc'
import { ZERO_BD, formatUnitsToBD } from '..'
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

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

  const cacheKey = `${address.toLowerCase()}-${chainId}`

  const cachedTotalSupply =
    await shortTermTotalSupplyCache.getItem<bigint>(cacheKey)

  if (cachedTotalSupply) {
    return formatUnitsToBD(cachedTotalSupply, decimals)
  }

  const erc20Contract = getERC20Contract(address as `0x${string}`)

  try {
    // Attempt to read total supply from contract
    totalSupply = await client.readContract({
      ...erc20Contract,
      functionName: 'totalSupply',
    })
  } catch (error: any) {
    console.error(
      `Failed to get total supply for ${address} at ${chainId}:`,
      error?.message ?? error?.cause ?? error
    )
    return ZERO_BD
  }

  await shortTermTotalSupplyCache.setItem(cacheKey, totalSupply, {
    ttl: 1 * 1000, // 1 seconds
  })

  // Format the total supply with correct decimals
  const formattedTotalSupply = formatUnitsToBD(totalSupply, decimals)
  return formattedTotalSupply
}
