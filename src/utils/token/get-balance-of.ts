import { parseAbiItem } from 'viem'
import { getPublicClient } from '../rpc'
import { ZERO_BD } from '../constants'
import { formatUnitsToBD } from '../base'

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
  let balance: bigint

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

  return formatUnitsToBD(balance, decimals)
}
