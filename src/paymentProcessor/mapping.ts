import { PP_Streaming_v1 } from 'generated';

PP_Streaming_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    console.log('EVENT: PP_Streaming_v1.ModuleInitialized');
    context.StreamingPaymentProcessor.set({
      id: event.srcAddress,
      chainId: event.chainId,
      workflow_id: event.params.parentOrchestrator,
    });
  }
);

PP_Streaming_v1.StreamingPaymentAdded.handler(
  async ({ event, context }) => {
    context.LinearVesting.set({
      id:
        event.params.recipient +
        '-' +
        event.params.streamId.toString(),
      streamingPaymentProcessor_id: event.srcAddress,
      token: event.params.paymentToken,
      amountRaw: event.params.amount,
      recipient: event.params.recipient,
      start: event.params.start,
      cliff: event.params.cliff,
      end: event.params.end,
      status: 'ACTIVE',
      blockTimestamp: event.blockTimestamp,
      chainId: event.chainId,
    });
  }
);
