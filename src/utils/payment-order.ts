import { eventLog, handlerContext } from 'generated'
import { Writable } from 'type-fest'
import { ZERO_BD } from './constants'
import { formatUnitsToBD } from './base'
import { PaymentOrder_t } from 'generated/src/db/Entities.gen'

export const updatePaymentOrder = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<PaymentOrder_t, 'id'>>
  prevData?: PaymentOrder_t
}) => {
  const { chainId, srcAddress: address } = event

  const client = properties.client
  const orderId = properties.orderId

  if (client === undefined) {
    context.log.error(`Invalid payment order client`)
    return
  }

  if (orderId === undefined) {
    context.log.error(`Invalid payment order ID`)
    return
  }

  const id = `${client}-${orderId}-${chainId}`
  const fundingManagerId = `${client}-${chainId}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.PaymentOrder.get(id)) as Writable<PaymentOrder_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      orderId,
      client,

      originChainId: chainId,
      targetChainId: 0n,

      fundingManager_id: fundingManagerId,

      recipient: '',
      amount: ZERO_BD,

      data: [],
      flags: '',

      // paymentProcessor_id: undefined,
      paymentToken_id: properties.paymentToken_id!,

      timestamp: 0,
      executedTimestamp: 0,
      executedBy: '',

      state: 'PENDING',

      isQueued: false,

      ...properties,
    } satisfies PaymentOrder_t)

  // If required fields are present, update the bonding curve
  if (data.recipient && data.originChainId && data.amount) {
    context.PaymentOrder.set({
      ...data,
      ...properties,
    })
  }
}
