import { eventLog, handlerContext } from 'generated'
import { Writable } from 'type-fest'
import { ZERO_BD } from './constants'
import { formatUnitsToBD } from './base'
import { RedemptionPaymentOrder_t } from 'generated/src/db/Entities.gen'

export const updatePaymentOrder = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<RedemptionPaymentOrder_t, 'id'>>
  prevData?: RedemptionPaymentOrder_t
}) => {
  const { chainId } = event

  const oraclePriceFM_id = properties.oraclePriceFM_id
  const orderId = properties.orderId

  if (oraclePriceFM_id === undefined) {
    context.log.error(`Invalid payment order client`)
    return
  }

  if (orderId === undefined) {
    context.log.error(`Invalid payment order ID`)
    return
  }

  const id = `${oraclePriceFM_id}-${orderId}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.RedemptionPaymentOrder.get(
      id
    )) as Writable<RedemptionPaymentOrder_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,

      timestamp: 0,
      executedTimestamp: 0,

      orderId,

      originChainId: chainId,
      targetChainId: 0,

      orderType: 'PAYMENT',
      state: 'PENDING',

      source: 'ISSUANCE',
      token_id: properties.token_id!,

      oraclePriceFM_id,

      recipient: '',
      seller: '',
      executedBy: '',

      exchangeRate: ZERO_BD,

      amount: ZERO_BD,
      amountUSD: ZERO_BD,

      fee: ZERO_BD,
      feeUSD: ZERO_BD,
      feePercentage: ZERO_BD,

      flags: '',
      data: [],

      ...properties,
    } satisfies RedemptionPaymentOrder_t)

  // If required fields are present, update the bonding curve
  if (data.recipient && data.originChainId && data.amount) {
    context.RedemptionPaymentOrder.set({
      ...data,
      ...properties,
    })
  }
}
