import { PP_Queue_ManualExecution_v1 } from 'generated'
import {
  deriveSourceTokenType,
  formatUnitsToBD,
  updateRedemptionPaymentOrder,
} from '../../utils'
import { RedemptionState_t } from 'generated/src/db/Enums.gen'

PP_Queue_ManualExecution_v1.PaymentOrderStateChanged.handler(
  async ({ event, context }) => {
    const orderId = event.params.orderId_
    const oraclePriceFM_id = `${event.chainId}-${event.params.client_}`

    context.log.warn(`orderId: ${orderId}, state: ${event.params.state_}`)

    let state: RedemptionState_t
    switch (event.params.state_) {
      case 0n: {
        state = 'PROCESSED'
        break
      }
      case 1n: {
        state = 'CANCELLED'
        break
      }
      case 2n: {
        state = 'PENDING'
        break
      }
      case 3n: {
        state = 'FAILED'
        break
      }
      default: {
        state = 'PENDING'
      }
    }

    context.log.warn(`orderId: ${orderId}, state: ${state}`)

    // const state = RedemptionState[event.params.state_]
    const isProcessed = state == 'PROCESSED'

    await updateRedemptionPaymentOrder({
      event,
      context,
      properties: {
        orderId: orderId,
        oraclePriceFM_id,
        state,
        executedBy: event.params.executedBy_,
        executedTimestamp: isProcessed ? event.block.timestamp : 0,
      },
    })
  }
)

PP_Queue_ManualExecution_v1.PaymentOrderQueued.handler(
  async ({ event, context }) => {
    const chainId = event.chainId
    const orderId = event.params.orderId_
    const oraclePriceFM_id = `${chainId}-${event.params.client_}`

    const token = (await context.Token.get(
      `${chainId}-${event.params.token_}`
    ))!

    const source = await deriveSourceTokenType({
      address: token.address,
      chainId: chainId,
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
  }
)
