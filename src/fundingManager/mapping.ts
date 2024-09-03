import { FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1 } from 'generated';

import { parseUnits, formatUnits } from 'viem';

import { swap } from './schema';
import { Swap_t } from 'generated/src/db/Entities.gen';
import {
  updateOrSetBondingCurve,
  updateBondingCurve,
  getQtyAndPrice,
} from './utils';

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    await updateOrSetBondingCurve(context, event.srcAddress, {
      bcType:
        event.params.metadata[3] ===
        'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1'
          ? 'RESTRICTED'
          : 'OPEN',
      orchestrator: event.params.parentOrchestrator,
    });
  }
);

// // Fees

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.BuyFeeUpdated.handler(
  async ({ event, context }) => {
    await updateOrSetBondingCurve(context, event.srcAddress, {
      buyFee: event.params.newBuyFee,
    });
  }
);

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.SellFeeUpdated.handler(
  async ({ event, context }) => {
    await updateOrSetBondingCurve(context, event.srcAddress, {
      sellFee: event.params.newSellFee,
    });
  }
);

// Reserve Ratios

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.BuyReserveRatioSet.handler(
  async ({ event, context }) => {
    await updateOrSetBondingCurve(context, event.srcAddress, {
      buyReserveRatio: event.params.newBuyReserveRatio,
    });
  }
);

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.SellReserveRatioSet.handler(
  async ({ event, context }) => {
    await updateOrSetBondingCurve(context, event.srcAddress, {
      sellReserveRatio: event.params.newSellReserveRatio,
    });
  }
);

// // Issuance Token

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.IssuanceTokenSet.handler(
  async ({ event, context }) => {
    await updateOrSetBondingCurve(context, event.srcAddress, {
      issuanceToken: event.params.issuanceToken,
      issuanceTokenDecimals: Number(event.params.decimals),
    });
  }
);

// Collateral Token

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.OrchestratorTokenSet.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { virtualCollateralRaw } = bc!;
    const virtualCollateral = parseFloat(
      formatUnits(
        virtualCollateralRaw!,
        Number(event.params.decimals)
      )
    );
    await updateBondingCurve(context, event.srcAddress, {
      collateralToken: event.params.token,
      collateralTokenDecimals: Number(event.params.decimals),
      virtualCollateral,
    });
  }
);

// Virtual Issuance Supply

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.VirtualIssuanceSupplySet.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { issuanceTokenDecimals } = bc!;
    const virtualIssuance = parseFloat(
      formatUnits(
        event.params.newSupply,
        Number(issuanceTokenDecimals)
      )
    );
    updateBondingCurve(context, event.srcAddress, {
      virtualIssuance,
    });
  }
);

// Virtual Collateral Supply

FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.VirtualCollateralSupplySet.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { collateralTokenDecimals } = bc!;
    updateOrSetBondingCurve(context, event.srcAddress, {
      virtualCollateralRaw: event.params.newSupply,
    });
  }
);

// /*
//   SWAPS
// */

// buy
FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.TokensBought.handler(
  async ({ event, context }) => {
    const bondingCurve = await context.BondingCurve.get(
      event.srcAddress
    );
    const { issuanceAmount, collateralAmount, priceInCol } =
      await getQtyAndPrice(
        event.params.receivedAmount,
        event.params.depositAmount,
        bondingCurve!
      );

    const mandatoryParams = {
      id: event.transactionIndex + '-' + event.transactionHash,
      swapType: 'BUY',
      bondingCurve_id: event.srcAddress,
      collateralToken: bondingCurve!.collateralToken,
      issuanceToken: bondingCurve!.issuanceToken,
      collateralAmount,
      issuanceAmount,
      initiator: event.params.buyer,
      recipient: event.params.receiver,
      priceInCol,
      blockTimestamp: event.blockTimestamp,
    };

    const newBuy = {
      ...swap,
      ...mandatoryParams,
    } as unknown as Swap_t;

    context.Swap.set(newBuy);
  }
);

// sell
FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1.TokensSold.handler(
  async ({ event, context }) => {
    const bondingCurve = await context.BondingCurve.get(
      event.srcAddress
    );

    const { issuanceAmount, collateralAmount, priceInCol } =
      await getQtyAndPrice(
        event.params.depositAmount,
        event.params.receivedAmount,
        bondingCurve!
      );

    const mandatoryParams = {
      id: event.transactionIndex + '-' + event.transactionHash,
      swapType: 'SELL',
      bondingCurve_id: event.srcAddress,
      collateralToken: bondingCurve!.collateralToken,
      issuanceToken: bondingCurve!.issuanceToken,
      collateralAmount,
      issuanceAmount,
      initiator: event.params.seller,
      recipient: event.params.receiver,
      priceInCol,
      blockTimestamp: event.blockTimestamp,
    };

    const newSale = {
      ...swap,
      ...mandatoryParams,
    } as unknown as Swap_t;

    context.Swap.set(newSale);
  }
);
