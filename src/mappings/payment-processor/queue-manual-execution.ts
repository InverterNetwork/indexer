import { PP_Queue_ManualExecution_v1, RedemptionState } from 'generated'
import { updatePaymentOrder } from '../../utils'

PP_Queue_ManualExecution_v1.PaymentOrderStateChanged.handler(
  async ({ event, context }) => {
    const orderId = event.params.orderId_
    const oraclePriceFM_id = event.params.client_
    const state = RedemptionState[event.params.state_]
    const isProcessed = state == 'PROCESSED'

    await updatePaymentOrder({
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
  }
)

PP_Queue_ManualExecution_v1.PaymentOrderQueued.handler(
  async ({ event, context }) => {
    const orderId = event.params.orderId_
    const oraclePriceFM_id = event.params.client_

    await updatePaymentOrder({
      event,
      context,
      properties: {
        orderId: orderId,
        oraclePriceFM_id,
        orderType: 'QUEUED',
      },
    })
  }
)
