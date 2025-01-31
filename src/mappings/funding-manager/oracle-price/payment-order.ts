import { FM_PC_ExternalPrice_Redeeming_v1, BigDecimal } from 'generated'
import {
  deriveTokenAddress,
  updatePaymentOrder,
  updateToken,
} from '../../../utils'

FM_PC_ExternalPrice_Redeeming_v1.PaymentOrderAdded.handler(
  async ({ event, context }) => {
    if (event.params.data.length == 0) {
      context.log.error(`Invalid payment order data`)
      return
    }

    const address = event.srcAddress
    const chainId = event.chainId

    const orderId = event.params.data.at(0)!.toString()

    const { derivedAddress: paymentTokenAddress } = await deriveTokenAddress({
      address,
      chainId,
      derivesTo: 'token',
    })

    const { id: token_id } = await updateToken({
      event,
      context,
      derivedType: 'token',
      properties: {
        address: paymentTokenAddress,
      },
      triggerTotalSupply: true,
    })

    await updatePaymentOrder({
      event,
      context,
      properties: {
        orderId: BigInt(orderId),
        oraclePriceFM_id: event.srcAddress,
        originChainId: event.chainId,
        targetChainId: Number(event.params.targetChainId),
        recipient: event.params.recipient,
        amount: BigDecimal(event.params.amount.toString()),

        data: event.params.data,
        flags: event.params.flags,

        token_id,
        timestamp: event.block.timestamp,
      },
    })
  }
)
