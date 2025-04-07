import { parseAbiItem } from 'viem'
import { getPublicClient } from '../rpc'

export async function getOwner({
  tokenAddress,
  chainId,
  client = getPublicClient(chainId),
}: {
  tokenAddress: string
  chainId: number
  client?: ReturnType<typeof getPublicClient>
}) {
  let owner: string

  if (!client) return ''

  const ownerAbi = [
    parseAbiItem('function owner() external view returns (address)'),
  ]

  try {
    owner = await client.readContract({
      address: tokenAddress as `0x${string}`,
      abi: ownerAbi,
      functionName: 'owner',
      args: [],
    })
  } catch (error) {
    console.error(`Error getting owner of ${tokenAddress}`, error)
    return ''
  }

  return owner
}
