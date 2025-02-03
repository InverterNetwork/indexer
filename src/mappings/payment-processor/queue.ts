import { PP_Queue_v1, RedemptionState } from 'generated'
import { updateOraclePriceOrder } from '../../utils'

PP_Queue_v1.PaymentOrderQueued.handler(async ({ event, context }) => {
  const chainId = event.chainId
  const orderId = event.params.orderId_
  const oraclePriceFM_id = `${chainId}-${event.params.client_}`

  const oraclePriceOrfer_id = `${oraclePriceFM_id}-${orderId}`

  await updateOraclePriceOrder({
    event,
    context,
    id: oraclePriceOrfer_id,
    properties: {
      orderType: 'QUEUED',
    },
  })
})

PP_Queue_v1.PaymentOrderStateChanged.handler(async ({ event, context }) => {
  const orderId = event.params.orderId_
  const oraclePriceFM_id = `${event.chainId}-${event.params.client_}`
  const state = RedemptionState[event.params.state_]

  const oraclePriceOrfer_id = `${oraclePriceFM_id}-${orderId}`

  await updateOraclePriceOrder({
    event,
    context,
    id: oraclePriceOrfer_id,
    properties: {
      state,
    },
  })
})
