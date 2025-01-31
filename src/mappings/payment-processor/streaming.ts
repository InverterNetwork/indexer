import { BigDecimal, PP_Streaming_v1 } from 'generated'
import { formatUnitsToBD } from '../../utils'

// ============================================================================
// Module Initialization Handler
// ============================================================================

PP_Streaming_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const address = event.srcAddress
  const chainId = event.chainId
  const id = `${chainId}-${address}`
  const workflow_id = `${chainId}-${event.params.parentOrchestrator}`

  context.StreamingPaymentProcessor.set({
    id,
    chainId,
    address,

    workflow_id,
  })
})

// ============================================================================
// Streaming Payment Added Handler
// ============================================================================

PP_Streaming_v1.StreamingPaymentAdded.handler(async ({ event, context }) => {
  const streamingPaymentProcessor_id = `${event.chainId}-${event.srcAddress}`

  const id = `${streamingPaymentProcessor_id}-${event.params.streamId}`

  const token_id = `${event.chainId}-${event.params.paymentToken}`
  const token = await context.Token.get(token_id)

  const amount = formatUnitsToBD(event.params.amount, token?.decimals)

  context.LinearVesting.set({
    id,
    chainId: event.chainId,
    timestamp: event.block.timestamp,
    status: 'ACTIVE',

    token_id,

    streamingPaymentProcessor_id,

    amount,

    recipient: event.params.recipient,

    // Vesting schedule parameters
    start: event.params.start,
    cliff: event.params.cliff,
    end: event.params.end,
  })
})
