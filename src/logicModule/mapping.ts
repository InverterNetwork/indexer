import { LM_PC_PaymentRouter_v1 } from 'generated';

LM_PC_PaymentRouter_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    console.log('EVENT: LM_PC_PaymentRouter_v1.ModuleInitialized');
  }
);
