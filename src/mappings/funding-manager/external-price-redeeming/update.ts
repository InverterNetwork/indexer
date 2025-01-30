import {
  ExternalPriceFundingManager_t,
  RedemptionOrder_t,
} from 'generated/src/db/Entities.gen'

import { eventLog, handlerContext } from 'generated'
import { Writable } from 'type-fest'
import { ZERO_BD } from '../../../utils'

export const updateExternalPriceFundingManager = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<ExternalPriceFundingManager_t, 'id'>>
  prevData?: ExternalPriceFundingManager_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${address}-${chainId}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.ExternalPriceFundingManager.get(
      id
    )) as Writable<ExternalPriceFundingManager_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      address,

      workflow_id: properties?.workflow_id!,

      issuanceToken_id: properties?.issuanceToken_id!,
      collateralToken_id: properties?.collateralToken_id!,

      buyFee: 0n,
      sellFee: 0n,

      redemptionAmount: ZERO_BD,

      ...properties,
    } satisfies ExternalPriceFundingManager_t)

  // If required fields are present, update the bonding curve
  if (data.workflow_id && data.collateralToken_id && data.issuanceToken_id) {
    context.ExternalPriceFundingManager.set({
      ...data,
      ...properties,
    })
  }
}

export const updateRedemptionOrder = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<RedemptionOrder_t, 'id'>>
  prevData?: RedemptionOrder_t
}) => {
  const {
    chainId,
    srcAddress: address,
    params: { orderId_ },
  } = event

  const id = `${address}-${chainId}-${orderId_}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.RedemptionOrder.get(id)) as Writable<RedemptionOrder_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      paymentOrderId: orderId_,
      fundingManager_id: properties?.fundingManager_id!,
      collateralToken_id: properties?.collateralToken_id!,
      finalRedemptionAmount: ZERO_BD,
      exchangeRate: ZERO_BD,
      feePercentage: ZERO_BD,
      feeAmount: ZERO_BD,
      sellAmount: ZERO_BD,
      receiver: '',
      seller: '',
      executedTimestamp: 0,
      redemptionTimestamp: 0,
      state: 'PENDING',

      ...properties,
    } satisfies RedemptionOrder_t)

  // If required fields are present, update the bonding curve
  if (
    data.paymentOrderId &&
    data.collateralToken_id &&
    data.fundingManager_id
  ) {
    context.RedemptionOrder.set({
      ...data,
      ...properties,
    })
  }
}
