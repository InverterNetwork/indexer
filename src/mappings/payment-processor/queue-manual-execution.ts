import { PP_Queue_ManualExecution_v1 } from 'generated'
import { updateOraclePriceOrder, RedemptionState } from '../../utils'

PP_Queue_ManualExecution_v1.PaymentOrderStateChanged.handler(
  async ({ event, context }) => {
    const orderId = event.params.orderId_
    const oraclePriceFM_id = `${event.chainId}-${event.params.client_}`

    const state = RedemptionState[Number(event.params.state_)] as any

    // const state = RedemptionState[event.params.state_]
    const isProcessed = state == 'PROCESSED'

    const oraclePriceOrfer_id = `${oraclePriceFM_id}-${orderId}`

    await updateOraclePriceOrder({
      event,
      context,
      id: oraclePriceOrfer_id,
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
    const oraclePriceOrfer_id = `${oraclePriceFM_id}-${orderId}`

    await updateOraclePriceOrder({
      event,
      context,
      id: oraclePriceOrfer_id,
      properties: {
        orderId: orderId,
        oraclePriceFM_id,

        orderType: 'QUEUED',

        recipient: event.params.recipient_,
      },
    })
  }
)
