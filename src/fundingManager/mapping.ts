import { BondingCurve, IssuanceToken_v1 } from 'generated';

import {
  updateBondingCurve,
  getQtyAndPrice,
  createSwap,
  createBondingCurve,
  createFeeClaim,
  createIssuanceTokenHolder,
} from './utils';
import { uintToFloat } from '../utils';
import { addressZero } from '../constants';

BondingCurve.ModuleInitialized.handler(async ({ event, context }) => {
  await createBondingCurve(
    context,
    event.srcAddress,
    event.chainId,
    event.params.parentOrchestrator,
    {
      bcType:
        event.params.metadata[3] ===
        'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1'
          ? 'RESTRICTED'
          : 'OPEN',
    }
  );
});

// Fees

BondingCurve.BuyFeeUpdated.handler(async ({ event, context }) => {
  await updateBondingCurve(context, event.srcAddress, {
    buyFee: event.params.newBuyFee,
  });
});

BondingCurve.SellFeeUpdated.handler(async ({ event, context }) => {
  await updateBondingCurve(context, event.srcAddress, {
    sellFee: event.params.newSellFee,
  });
});

// Reserve Ratios

BondingCurve.BuyReserveRatioSet.handler(
  async ({ event, context }) => {
    await updateBondingCurve(context, event.srcAddress, {
      buyReserveRatio: event.params.newBuyReserveRatio,
    });
  }
);

BondingCurve.SellReserveRatioSet.handler(
  async ({ event, context }) => {
    await updateBondingCurve(context, event.srcAddress, {
      sellReserveRatio: event.params.newSellReserveRatio,
    });
  }
);

// Issuance Token

BondingCurve.IssuanceTokenSet.contractRegister(
  ({ event, context }) => {
    context.addIssuanceToken_v1(event.params.issuanceToken);
  }
);

BondingCurve.IssuanceTokenSet.handler(async ({ event, context }) => {
  await updateBondingCurve(context, event.srcAddress, {
    issuanceToken: event.params.issuanceToken,
    issuanceTokenDecimals: Number(event.params.decimals),
  });
});

IssuanceToken_v1.Transfer.handler(async ({ event, context }) => {
  if (event.params.to !== addressZero) {
    const id = event.srcAddress + '-' + event.params.to;
    const to = await context.IssuanceTokenHolder.get(id);
    if (to) {
      context.IssuanceTokenHolder.set({
        ...to!,
        balance: to.balance + event.params.value,
      });
    } else {
      await createIssuanceTokenHolder(context, id, event.chainId, {
        balance: event.params.value,
        token: event.srcAddress,
        address: event.params.to,
      });
    }
  }

  if (event.params.from !== addressZero) {
    const id = event.srcAddress + '-' + event.params.from;
    const from = await context.IssuanceTokenHolder.get(id);
    if (from) {
      context.IssuanceTokenHolder.set({
        ...from!,
        balance: from.balance + event.params.value,
      });
    } else {
      await createIssuanceTokenHolder(context, id, event.chainId, {
        balance: event.params.value,
        token: event.srcAddress,
        address: event.params.from,
      });
    }
  }
});

// Collateral Token

BondingCurve.OrchestratorTokenSet.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { virtualCollateralRaw } = bc!;
    const virtualCollateral = uintToFloat(
      virtualCollateralRaw!,
      Number(event.params.decimals)
    );
    await updateBondingCurve(context, event.srcAddress, {
      collateralToken: event.params.token,
      collateralTokenDecimals: Number(event.params.decimals),
      virtualCollateral,
    });
  }
);

// Virtual Issuance Supply

BondingCurve.VirtualIssuanceSupplySet.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { issuanceTokenDecimals } = bc!;
    const virtualIssuance = uintToFloat(
      event.params.newSupply,
      Number(issuanceTokenDecimals)
    );
    updateBondingCurve(context, event.srcAddress, {
      virtualIssuance,
    });
  }
);

BondingCurve.VirtualIssuanceAmountAdded.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { issuanceTokenDecimals } = bc!;
    const virtualIssuance = uintToFloat(
      event.params.newSupply,
      Number(issuanceTokenDecimals)
    );
    updateBondingCurve(context, event.srcAddress, {
      virtualIssuance,
    });
  }
);

BondingCurve.VirtualIssuanceAmountSubtracted.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { issuanceTokenDecimals } = bc!;
    const virtualIssuance = uintToFloat(
      event.params.newSupply,
      Number(issuanceTokenDecimals)
    );
    updateBondingCurve(context, event.srcAddress, {
      virtualIssuance,
    });
  }
);

// Virtual Collateral Supply

BondingCurve.VirtualCollateralSupplySet.handler(
  async ({ event, context }) => {
    updateBondingCurve(context, event.srcAddress, {
      virtualCollateralRaw: event.params.newSupply,
    });
  }
);

BondingCurve.VirtualCollateralAmountAdded.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { collateralTokenDecimals } = bc!;
    const virtualCollateral = uintToFloat(
      event.params.newSupply,
      Number(collateralTokenDecimals)
    );
    updateBondingCurve(context, event.srcAddress, {
      virtualCollateral,
    });
  }
);

BondingCurve.VirtualCollateralAmountSubtracted.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress);
    const { collateralTokenDecimals } = bc!;
    const virtualCollateral = uintToFloat(
      event.params.newSupply,
      Number(collateralTokenDecimals)
    );
    updateBondingCurve(context, event.srcAddress, {
      virtualCollateral,
    });
  }
);

/*
  SWAPS
*/

// buy
BondingCurve.TokensBought.handler(async ({ event, context }) => {
  const bondingCurve = await context.BondingCurve.get(
    event.srcAddress
  );
  const { issuanceAmount, collateralAmount, priceInCol } =
    await getQtyAndPrice(
      event.params.receivedAmount,
      event.params.depositAmount,
      bondingCurve!
    );

  await createSwap(
    context,
    event.block.hash + '-' + event.logIndex,
    event.chainId,
    {
      swapType: 'BUY',
      bondingCurve_id: event.srcAddress,
      collateralToken: bondingCurve!.collateralToken!,
      issuanceToken: bondingCurve!.issuanceToken!,
      collateralAmount,
      issuanceAmount,
      initiator: event.params.buyer,
      recipient: event.params.receiver,
      priceInCol,
      blockTimestamp: event.block.timestamp,
    }
  );
});

// sell
BondingCurve.TokensSold.handler(async ({ event, context }) => {
  const bondingCurve = await context.BondingCurve.get(
    event.srcAddress
  );

  const { issuanceAmount, collateralAmount, priceInCol } =
    await getQtyAndPrice(
      event.params.depositAmount,
      event.params.receivedAmount,
      bondingCurve!
    );

  await createSwap(
    context,
    event.block.hash + '-' + event.logIndex,
    event.chainId,
    {
      swapType: 'SELL',
      bondingCurve_id: event.srcAddress,
      collateralToken: bondingCurve!.collateralToken!,
      issuanceToken: bondingCurve!.issuanceToken!,
      collateralAmount,
      issuanceAmount,
      initiator: event.params.seller,
      recipient: event.params.receiver,
      priceInCol,
      blockTimestamp: event.block.timestamp,
    }
  );
});

/*
  FEES
*/

// claim
BondingCurve.ProjectCollateralFeeWithdrawn.handler(
  async ({ event, context }) => {
    const bondingCurve = await context.BondingCurve.get(
      event.srcAddress
    );

    await createFeeClaim(
      context,
      event.block.hash + '-' + event.logIndex,
      event.chainId,
      {
        bondingCurve_id: event.srcAddress,
        amount: uintToFloat(
          event.params.amount,
          bondingCurve!.collateralTokenDecimals!
        ),
        blockTimestamp: event.block.timestamp,
        recipient: event.params.receiver,
      }
    );
  }
);

// protocol fee generation
BondingCurve.ProtocolFeeMinted.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress);
  const { issuanceTokenDecimals } = bc!;
  const mintedProtocolFee = uintToFloat(
    event.params.feeAmount,
    Number(issuanceTokenDecimals)
  );

  await updateBondingCurve(context, event.srcAddress, {
    virtualIssuance: bc!.virtualIssuance! + mintedProtocolFee,
  });
});
