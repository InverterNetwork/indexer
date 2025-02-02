import { eventLog, handlerContext } from 'generated'
import { Writable } from 'type-fest'
import { ZERO_BD } from './constants'
import { RedemptionPaymentOrder_t } from 'generated/src/db/Entities.gen'

export const updateRedemptionPaymentOrder = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<RedemptionPaymentOrder_t, 'id' | 'chainId'>> &
    Pick<RedemptionPaymentOrder_t, 'oraclePriceFM_id' | 'orderId'>
  prevData?: RedemptionPaymentOrder_t
}) => {
  const { chainId } = event

  const oraclePriceFM_id = properties.oraclePriceFM_id
  const orderId = properties.orderId
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

      token_id: properties.token_id!,

      oraclePriceFM_id,

      recipient: '',
      seller: '',
      executedBy: '',

      exchangeRate: ZERO_BD,
      feePercentage: 0n,

      amount: ZERO_BD,
      amountUSD: ZERO_BD,

      fee: ZERO_BD,
      feeUSD: ZERO_BD,

      flags: '',
      data: [],
    } satisfies RedemptionPaymentOrder_t)

  // Set the payment order
  context.RedemptionPaymentOrder.set({
    ...data,
    ...properties,
  })

  return data
}
