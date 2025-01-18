import { PP_Streaming_v1 } from 'generated'

// Initialize the Streaming Payment Processor module
// Maps the processor address to its workflow for system tracking
PP_Streaming_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const id = `${event.srcAddress}-${event.chainId}`

  context.StreamingPaymentProcessor.set({
    id,
    chainId: event.chainId,
    workflow_id: event.params.parentOrchestrator,
  })
})

// Handle creation of new streaming payments (linear vesting)
// Creates a unique record for each streaming payment with recipient and schedule details
PP_Streaming_v1.StreamingPaymentAdded.handler(async ({ event, context }) => {
  const streamingPaymentProcessor_id = `${event.srcAddress}-${event.chainId}`
  const id = `${streamingPaymentProcessor_id}-${event.params.streamId}`

  context.LinearVesting.set({
    id,
    streamingPaymentProcessor_id,
    token: event.params.paymentToken,
    amountRaw: event.params.amount,
    recipient: event.params.recipient,
    // Vesting schedule parameters
    start: event.params.start,
    cliff: event.params.cliff,
    end: event.params.end,
    status: 'ACTIVE',
    // Metadata
    blockTimestamp: event.block.timestamp,
    chainId: event.chainId,
  })
})
