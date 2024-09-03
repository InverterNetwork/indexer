import { PP_Streaming_v1 } from 'generated';

PP_Streaming_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    context.StreamingPaymentProcessor.set({
      id: event.srcAddress,
      workflow_id: event.params.parentOrchestrator,
    });
  }
);
