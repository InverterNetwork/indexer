import { parseAbiItem } from 'viem'
import { getPublicClient } from '../rpc'
import { ZERO_BD } from '../constants'
import { formatUnitsToBD } from '../base'
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

const shortTermBalanceCache = new CacheContainer(new MemoryStorage())

export async function getBalanceOf({
  tokenAddress,
  chainId,
  address,
  decimals,
  client = getPublicClient(chainId),
}: {
  tokenAddress: string
  address: string
  chainId: number
  decimals: number
  client?: ReturnType<typeof getPublicClient>
}) {
  const cacheKey = `${tokenAddress}-${address}-${chainId}-${decimals}`

  let balance: bigint

  const cachedBalance = await shortTermBalanceCache.getItem<bigint>(cacheKey)

  if (cachedBalance) return formatUnitsToBD(cachedBalance, decimals)

  if (!client) return ZERO_BD

  const balanceOfAbi = [
    parseAbiItem('function balanceOf(address) external view returns (uint256)'),
  ]

  try {
    balance = await client.readContract({
      address: tokenAddress as `0x${string}`,
      abi: balanceOfAbi,
      functionName: 'balanceOf',
      args: [address as `0x${string}`],
    })
  } catch (error) {
    console.error(
      `Error getting balance of ${tokenAddress} for ${address}`,
      error
    )
    return ZERO_BD
  }

  await shortTermBalanceCache.setItem(cacheKey, balance, {
    ttl: 2 * 1000, // 2 seconds
  })

  return formatUnitsToBD(balance, decimals)
}
