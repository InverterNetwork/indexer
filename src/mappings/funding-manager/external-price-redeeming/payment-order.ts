import { FM_PC_ExternalPrice_Redeeming_v1, BigDecimal } from 'generated'
import { updatePaymentOrder } from '../../../utils'

FM_PC_ExternalPrice_Redeeming_v1.PaymentOrderAdded.handler(
  async ({ event, context }) => {
    if (event.params.data.length == 0) {
      context.log.error(`Invalid payment order data`)
      return
    }

    const orderId = event.params.data.at(0)!.toString()

    await updatePaymentOrder({
      event,
      context,
      properties: {
        orderId: BigInt(orderId),
        client: event.srcAddress,
        originChainId: event.chainId,
        targetChainId: event.params.targetChainId,
        recipient: event.params.recipient,
        amount: BigDecimal(event.params.amount.toString()),

        data: event.params.data,
        flags: event.params.flags,

        paymentProcessor_id: undefined,
        paymentToken: '',
        timestamp: event.block.timestamp,
      },
    })
  }
)
