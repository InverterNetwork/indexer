import { BigDecimal } from 'generated'
import { getPublicClient } from '../rpc'
import { ZERO_BD, formatUnitsToBD } from '..'
import { parseAbiItem } from 'viem'

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
  let totalSupply: bigint

  if (!client) return ZERO_BD

  const totalSupplyAbi = [
    parseAbiItem('function totalSupply() external view returns (uint256)'),
  ]

  try {
    // Attempt to read total supply from contract
    totalSupply = await client.readContract({
      address: address as `0x${string}`,
      abi: totalSupplyAbi,
      functionName: 'totalSupply',
    })
  } catch (error: any) {
    console.error(
      `Failed to get total supply for ${address} at ${chainId}:`,
      error?.message ?? error?.cause ?? error
    )
    return ZERO_BD
  }

  // Format the total supply with correct decimals
  const formattedTotalSupply = formatUnitsToBD(totalSupply, decimals)

  return formattedTotalSupply
}
