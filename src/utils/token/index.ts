import { eventLog, handlerContext, BigDecimal } from 'generated'
import { getPublicClient, ZERO_BD } from '..'

import { getPriceUSD } from './get-price-usd'
import { getTotalSupply } from './get-total-supply'
import { getTokenDetails } from './get-token-details'

export * from './derive-token-address'
export * from './get-price-usd'
export * from './get-total-supply'
export * from './get-token-details'

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
  derivedType,
}: {
  event: eventLog<any>
  context: handlerContext
  triggerTotalSupply?: boolean
  derivedType?: 'issuance' | 'token'
  properties: {
    address: string
    /* Can be passed down in the case of issuance tokens
     * since they rely on the price of the underlying token
     */
    priceUSD?: BigDecimal
  }
}) {
  const { address, priceUSD: _priceUSD } = properties

  // Generate unique identifier for the token
  const chainId = event.chainId

  const client = getPublicClient(chainId)

  const id = `${address}-${chainId}`
  const currentEntity = await context.Token.get(id)

  let tokenDetails = {} as Awaited<ReturnType<typeof getTokenDetails>>
  // Check if we need to fetch token details
  const tokenDetailsKeys = ['name', 'symbol', 'decimals', 'address']
  if (!tokenDetailsKeys.every((key) => key in (currentEntity || {}))) {
    tokenDetails = await getTokenDetails({
      address,
      chainId,
      client,
    })
  }

  // Initialize or update total supply
  let totalSupply: BigDecimal = currentEntity?.totalSupply || ZERO_BD
  if (triggerTotalSupply || !currentEntity?.totalSupply) {
    totalSupply = await getTotalSupply({
      address,
      chainId,
      decimals: tokenDetails.decimals,
      client,
    })
  }

  let priceUSD = _priceUSD ?? ZERO_BD
  if (derivedType === 'token') {
    priceUSD = await getPriceUSD({
      address,
      chainId,
      client,
    })
  }
  if (priceUSD.isNaN()) priceUSD = ZERO_BD

  // Merge all token data
  const token = {
    ...currentEntity,
    ...properties,
    ...tokenDetails,
    address,
    chainId,
    id,
    totalSupply,
    priceUSD,
  }

  // Save and return
  context.Token.set(token)
  return token
}
