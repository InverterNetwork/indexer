import { BigDecimal, PP_Streaming_v1 } from 'generated'
import { formatUnits } from 'viem'

// ============================================================================
// Module Initialization Handler
// ============================================================================

PP_Streaming_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const id = `${event.srcAddress}-${event.chainId}`

  context.StreamingPaymentProcessor.set({
    id,
    chainId: event.chainId,
    workflow_id: event.params.parentOrchestrator,
  })
})

// ============================================================================
// Streaming Payment Added Handler
// ============================================================================

PP_Streaming_v1.StreamingPaymentAdded.handler(async ({ event, context }) => {
  const streamingPaymentProcessor_id = `${event.srcAddress}-${event.chainId}`

  const id = `${streamingPaymentProcessor_id}-${event.params.streamId}`

  const token_id = `${event.params.paymentToken}-${event.chainId}`
  const token = await context.Token.get(token_id)

  const amount = BigDecimal(formatUnits(event.params.amount, token!.decimals))

  context.LinearVesting.set({
    id,
    chainId: event.chainId,
    blockTimestamp: event.block.timestamp,
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
