import { PP_Queue_v1, RedemptionState } from 'generated'
import {
  formatUnitsToBD,
  deriveSourceTokenType,
  updateRedemptionPaymentOrder,
} from '../../utils'

PP_Queue_v1.PaymentOrderQueued.handler(async ({ event, context }) => {
  const chainId = event.chainId
  const orderId = event.params.orderId_
  const oraclePriceFM_id = `${event.chainId}-${event.params.client_}`

  const token = (await context.Token.get(`${chainId}-${event.params.token_}`))!

  const source = await deriveSourceTokenType({
    address: token.address,
    chainId: token.chainId,
  })

  const amount = formatUnitsToBD(event.params.amount_, token.decimals)
  const amountUSD = amount.times(token.priceUSD)

  await updateRedemptionPaymentOrder({
    event,
    context,
    properties: {
      orderId: orderId,
      oraclePriceFM_id,

      orderType: 'QUEUED',

      amount,
      amountUSD,

      recipient: event.params.recipient_,
    },
  })
})

PP_Queue_v1.PaymentOrderStateChanged.handler(async ({ event, context }) => {
  const orderId = event.params.orderId_
  const oraclePriceFM_id = `${event.chainId}-${event.params.client_}`
  const state = RedemptionState[event.params.state_]
  const isProcessed = state == 'PROCESSED'

  await updateRedemptionPaymentOrder({
    event,
    context,
    properties: {
      orderId: orderId,
      oraclePriceFM_id,
      state: state,
      executedBy: event.params.executedBy_,
      executedTimestamp: isProcessed ? event.block.timestamp : 0,
    },
  })
})
