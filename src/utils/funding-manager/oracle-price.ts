import {
  OraclePriceFM_t,
  OraclePriceOrder_t,
} from 'generated/src/db/Entities.gen'
import { SourceTokenType_t } from 'generated/src/db/Enums.gen'

import { eventLog, handlerContext } from 'generated'
import { Writable, SetOptional } from 'type-fest'
import { ZERO_BD } from '..'
import d from 'debug'

const debug = d('utils:funding-manager:oracle-price')

export const updateOraclePrice = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<OraclePriceFM_t, 'id'>>
  prevData?: OraclePriceFM_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${chainId}-${address}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.OraclePriceFM.get(id)) as Writable<OraclePriceFM_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      address,

      workflow_id: properties?.workflow_id!,

      treasury: properties?.treasury! ?? '',

      issuanceToken_id: properties?.issuanceToken_id!,
      collateralToken_id: properties?.collateralToken_id!,
      externalPriceSetter_id: properties?.externalPriceSetter_id!,

      maxBuyFee: properties?.maxBuyFee ?? 0n,
      maxSellFee: properties?.maxSellFee ?? 0n,

      buyFee: 0n,
      sellFee: 0n,

      pendingRedemptionCOL: ZERO_BD,
      pendingRedemptionUSD: ZERO_BD,

      reserveCOL: ZERO_BD,
      reserveUSD: ZERO_BD,

      ...properties,
    } satisfies OraclePriceFM_t)

  // If required fields are present, update the bonding curve
  if (data.workflow_id && data.collateralToken_id && data.issuanceToken_id) {
    context.OraclePriceFM.set({
      ...data,
      ...properties,
    })
  }
}

export const createOraclePriceOrder = async ({
  event,
  context,
  properties,
  id,
}: {
  event: eventLog<any>
  context: handlerContext
  id: string
  properties: Omit<
    SetOptional<
      OraclePriceOrder_t,
      | 'executedBy'
      | 'executedTimestamp'
      | 'orderId'
      | 'orderType'
      | 'targetChainId'
      | 'state'
    > & {
      protocolFeeType: SourceTokenType_t
    },
    'id' | 'chainId' | 'projectFee_id' | 'protocolFee_id' | 'txHash'
  >
}) => {
  const chainId = event.chainId
  const txHash = event.transaction.hash

  const projectFee_id = `${chainId}-${event.transaction.hash}`
  const protocolFee_id = `${chainId}-${event.transaction.hash}-${properties.protocolFeeType}`

  const data = {
    id,
    chainId,
    txHash,
    projectFee_id,
    protocolFee_id,
    executedBy: undefined,
    executedTimestamp: undefined,
    orderId: 0n,
    orderType: undefined,
    targetChainId: undefined,
    state: undefined,
    ...properties,
  }

  context.OraclePriceOrder.set(data)

  return data
}

export const updateOraclePriceOrder = async ({
  context,
  properties,
  id,
}: {
  event: eventLog<any>
  context: handlerContext
  id: string
  properties: Omit<Partial<OraclePriceOrder_t>, 'swapType'>
}) => {
  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    (await context.OraclePriceOrder.get(id)) as Writable<OraclePriceOrder_t>

  if (!data?.id) {
    debug(
      `updateOraclePriceOrder: was called before createOraclePriceOrder ID: ${id} }`,
      { data, properties }
    )
  }

  context.OraclePriceOrder.set({ ...data, ...properties })

  return data
}
