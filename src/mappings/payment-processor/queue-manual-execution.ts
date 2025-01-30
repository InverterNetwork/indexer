import {
  PP_Queue_ManualExecution_v1,
  BigDecimal,
  RedemptionState,
} from 'generated'
import { updatePaymentOrder } from '../../utils'

PP_Queue_ManualExecution_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const workflow_id = `${event.params.parentOrchestrator}-${event.chainId}`

    //   context.QueuePaymentProcessor.set({
    //     id,
    //     chainId: event.chainId,
    //     workflow_id
    //   })
  }
)

PP_Queue_ManualExecution_v1.PaymentOrderStateChanged.handler(
  async ({ event, context }) => {
    const orderId = event.params.orderId_
    const client = event.params.client_
    const state = RedemptionState[event.params.state_]
    const isProcessed = state == 'PROCESSED'

    await updatePaymentOrder({
      event,
      context,
      properties: {
        orderId: orderId,
        client: client,
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
    const client = event.params.client_

    await updatePaymentOrder({
      event,
      context,
      properties: {
        orderId: orderId,
        client: client,
        isQueued: true,
      },
    })
  }
)
