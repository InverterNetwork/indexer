import { FM_PC_ExternalPrice_Redeeming_v1, BigDecimal } from 'generated'
import {
  deriveSourceTokenType,
  formatUnitsToBD,
  updateRedemptionPaymentOrder,
} from '../../../utils'

FM_PC_ExternalPrice_Redeeming_v1.PaymentOrderAdded.handler(
  async ({ event, context }) => {
    if (event.params.data.length == 0) {
      context.log.error(`Invalid payment order data`)
      return
    }

    const address = event.srcAddress
    const chainId = event.chainId
    const oraclePriceFM_id = `${chainId}-${address}`

    const orderId = event.params.data.at(0)!.toString()
    const paymentTokenAddress = event.params.token
    const token_id = `${chainId}-${paymentTokenAddress}`

    const token = (await context.Token.get(token_id))!

    const amount = formatUnitsToBD(event.params.amount, token.decimals)

    const amountUSD = amount.times(token.priceUSD)

    await updateRedemptionPaymentOrder({
      event,
      context,
      properties: {
        orderId: BigInt(orderId),
        oraclePriceFM_id,

        originChainId: event.chainId,
        targetChainId: Number(event.params.targetChainId),
        recipient: event.params.recipient,

        amount,
        amountUSD,

        data: event.params.data,
        flags: event.params.flags,

        token_id,
        timestamp: event.block.timestamp,
      },
    })
  }
)
