import { BigDecimal, eventLog, handlerContext } from 'generated'
import { BondingCurve_t } from 'generated/src/db/Entities.gen'
import { Writable } from 'type-fest'
import { ZERO_BD } from '../constants'
import { getPublicClient } from '../rpc'
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

const midTermColPriceCache = new CacheContainer(new MemoryStorage())

export const updateBondingCurve = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<BondingCurve_t, 'id'>>
  prevData?: BondingCurve_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${chainId}-${address}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.BondingCurve.get(id)) as Writable<BondingCurve_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      address,

      workflow_id: properties?.workflow_id!,

      issuanceToken_id: properties?.issuanceToken_id!,
      collateralToken_id: properties?.collateralToken_id!,

      bcType: undefined,
      buyFee: 0n,
      sellFee: 0n,

      virtualCOL: ZERO_BD,
      virtualISS: ZERO_BD,

      buyReserveRatio: 0n,
      sellReserveRatio: 0n,

      reserveCOL: ZERO_BD,
      reserveUSD: ZERO_BD,

      ...properties,
    } satisfies BondingCurve_t)

  // If required fields are present, update the bonding curve
  if (data.workflow_id && data.collateralToken_id && data.issuanceToken_id) {
    context.BondingCurve.set({
      ...data,
      ...properties,
    })
  }
}

/**
 * Retrieves the static price of the collateral token in BigDecimal
 * @param event - The event that triggered the update
 * @returns The static price of the collateral token in BigDecimal
 */
export const getStaticPriceCOL = async ({
  event,
}: {
  event: eventLog<any>
}) => {
  const address = event.srcAddress as `0x${string}`
  const chainId = event.chainId

  const cacheKey = `${chainId}-${address}`

  const cachedPrice = await midTermColPriceCache.getItem<string>(cacheKey)

  if (cachedPrice) return BigDecimal(cachedPrice)

  const publicClient = getPublicClient(chainId)

  if (!publicClient) return ZERO_BD

  const getStaticPriceForBuyingAbi = [
    {
      type: 'function',
      name: 'getStaticPriceForBuying',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
  ] as const

  const staticPriceForBuyingInPPM = await publicClient.readContract({
    address,
    abi: getStaticPriceForBuyingAbi,
    functionName: 'getStaticPriceForBuying',
  })

  const priceCOL = BigDecimal(`${staticPriceForBuyingInPPM}`).div(1000000)

  await midTermColPriceCache.setItem(cacheKey, priceCOL.toString(), {
    ttl: 2 * 60, // 2 minutes
  })

  return priceCOL
}
