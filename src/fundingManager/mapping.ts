import { FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1 } from 'generated';
import { bondingCurve, swap } from './schema';
import { Swap_t } from 'generated/src/db/Entities.gen';

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const mandatoryParams = {
      bcType:
        event.params.moduleTitle ===
        'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1'
          ? 'RESTRICTED'
          : 'OPEN',
      orchestrator: event.params.parentOrchestrator,
      id: event.srcAddress,
    };
    const newBc = { ...bondingCurve, ...mandatoryParams };

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

// Collateral Token

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.CollateralTokenSet.handler(
  async ({ event, context }) => {
    const currentEntity = await context.BondingCurve.get(
      event.srcAddress
    );
    context.BondingCurve.set({
      ...currentEntity!,
      collateralToken: event.params.token,
    });
  }
);

/*
  SWAPS
*/

// buy
FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.TokensBought.handler(
  async ({ event, context }) => {
    const mandatoryParams = {
      id: event.transactionIndex + '-' + event.transactionHash,
      swapType: 'BUY',
      bondingCurve_id: event.srcAddress,
      issuanceAmount: event.params.receivedAmount,
      collateralAmount: event.params.depositAmount,
      buyer: event.params.buyer,
      recipient: event.params.receiver,
    };
    const newBuy = {
      ...swap,
      ...mandatoryParams,
    } as unknown as Swap_t;

    context.Swap.set(newBuy);
  }
);
