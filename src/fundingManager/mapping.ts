import { FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1 } from 'generated';
import { initBondingCurve } from './initializers';
import { getModuleTitleFromId } from '../utils';

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const moduleTitle = getModuleTitleFromId(
      event.params.moduleTitle as `0x${string}`
    );
    const newBc = initBondingCurve({
      id: event.srcAddress,
      name: moduleTitle!,
      orchestrator: event.params.parentOrchestrator,
    });
    context.BondingCurve.set(newBc);
  }
);

// Fees

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.BuyFeeUpdated.handler(
  async ({ event, context }) => {
    const currentEntity = await context.BondingCurve.get(
      event.srcAddress
    );
    context.BondingCurve.set({
      ...currentEntity!,
      buyFee: event.params.newBuyFee,
    });
  }
);

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.SellFeeUpdated.handler(
  async ({ event, context }) => {
    const currentEntity = await context.BondingCurve.get(
      event.srcAddress
    );
    context.BondingCurve.set({
      ...currentEntity!,
      sellFee: event.params.newSellFee,
    });
  }
);

// Reserve Ratios

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.BuyReserveRatioSet.handler(
  async ({ event, context }) => {
    const currentEntity = await context.BondingCurve.get(
      event.srcAddress
    );
    context.BondingCurve.set({
      ...currentEntity!,
      buyReserveRatio: event.params.newBuyReserveRatio,
    });
  }
);

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.SellReserveRatioSet.handler(
  async ({ event, context }) => {
    const currentEntity = await context.BondingCurve.get(
      event.srcAddress
    );
    context.BondingCurve.set({
      ...currentEntity!,
      sellReserveRatio: event.params.newSellReserveRatio,
    });
  }
);

// Issuance Token

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.IssuanceTokenUpdated.handler(
  async ({ event, context }) => {
    const currentEntity = await context.BondingCurve.get(
      event.srcAddress
    );
    context.BondingCurve.set({
      ...currentEntity!,
      issuanceToken: event.params.issuanceToken,
    });
  }
);
