import { BondingCurve } from 'generated'

import {
  uintToFloat,
  updateBondingCurve,
  getQtyAndPrice,
  createSwap,
  createFeeClaim,
  updateToken,
} from '../../utils'

// ============================================================================
// Module Initialization
// ============================================================================

BondingCurve.ModuleInitialized.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      bcType:
        event.params.metadata[3] ===
        'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1'
          ? 'RESTRICTED'
          : 'OPEN',
    },
    workflow_id: event.params.parentOrchestrator,
  })
})

// ============================================================================
// Fee Configuration Handlers
// ============================================================================

BondingCurve.BuyFeeUpdated.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      buyFee: event.params.newBuyFee,
    },
  })
})

BondingCurve.SellFeeUpdated.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      sellFee: event.params.newSellFee,
    },
  })
})

// ============================================================================
// Reserve Ratio Configuration Handlers
// ============================================================================

BondingCurve.BuyReserveRatioSet.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      buyReserveRatio: event.params.newBuyReserveRatio,
    },
  })
})

BondingCurve.SellReserveRatioSet.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      sellReserveRatio: event.params.newSellReserveRatio,
    },
  })
})

// ============================================================================
// Token Configuration Handlers
// ============================================================================

// Issuance Token Setup
BondingCurve.IssuanceTokenSet.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      issuanceToken: event.params.issuanceToken,
      issuanceTokenDecimals: Number(event.params.decimals),
    },
  })

  await updateToken(event, context, {
    address: event.params.issuanceToken,
    decimals: Number(event.params.decimals),
  })
})

// Collateral Token Setup
BondingCurve.OrchestratorTokenSet.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)
  const { virtualCollateralRaw } = bc!
  const virtualCollateral = uintToFloat(
    virtualCollateralRaw!,
    Number(event.params.decimals)
  )

  await updateBondingCurve({
    context,
    event,
    properties: {
      collateralToken: event.params.token,
      collateralTokenDecimals: Number(event.params.decimals),
      virtualCollateral,
    },
  })

  await updateToken(event, context, {
    address: event.params.token,
    decimals: Number(event.params.decimals),
  })
})

// ============================================================================
// Virtual Supply Management Handlers
// ============================================================================

// Virtual Issuance Supply
BondingCurve.VirtualIssuanceSupplySet.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)
  const { issuanceTokenDecimals } = bc!
  const virtualIssuance = uintToFloat(
    event.params.newSupply,
    Number(issuanceTokenDecimals)
  )

  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualIssuance,
    },
  })
})

BondingCurve.VirtualIssuanceAmountAdded.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)
  const { issuanceTokenDecimals } = bc!
  const virtualIssuance = uintToFloat(
    event.params.newSupply,
    Number(issuanceTokenDecimals)
  )
  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualIssuance,
    },
  })
})

BondingCurve.VirtualIssuanceAmountSubtracted.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress)
    const { issuanceTokenDecimals } = bc!
    const virtualIssuance = uintToFloat(
      event.params.newSupply,
      Number(issuanceTokenDecimals)
    )
    await updateBondingCurve({
      context,
      event,
      properties: {
        virtualIssuance,
      },
    })
  }
)

// Virtual Collateral Supply
BondingCurve.VirtualCollateralSupplySet.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualCollateralRaw: event.params.newSupply,
    },
  })
})

BondingCurve.VirtualCollateralAmountAdded.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress)
    const { collateralTokenDecimals } = bc!
    const virtualCollateral = uintToFloat(
      event.params.newSupply,
      Number(collateralTokenDecimals)
    )
    await updateBondingCurve({
      context,
      event,
      properties: {
        virtualCollateral,
      },
    })
  }
)

BondingCurve.VirtualCollateralAmountSubtracted.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress)
    const { collateralTokenDecimals } = bc!
    const virtualCollateral = uintToFloat(
      event.params.newSupply,
      Number(collateralTokenDecimals)
    )
    await updateBondingCurve({
      context,
      event,
      properties: {
        virtualCollateral,
      },
    })
  }
)

// ============================================================================
// Swap Operation Handlers
// ============================================================================

// Buy Operations
BondingCurve.TokensBought.handler(async ({ event, context }) => {
  const bondingCurve = await context.BondingCurve.get(event.srcAddress)
  const { issuanceAmount, collateralAmount, priceInCol } = await getQtyAndPrice(
    event.params.receivedAmount,
    event.params.depositAmount,
    bondingCurve!
  )

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
  )
})

// Sell Operations
BondingCurve.TokensSold.handler(async ({ event, context }) => {
  const bondingCurve = await context.BondingCurve.get(event.srcAddress)

  const { issuanceAmount, collateralAmount, priceInCol } = await getQtyAndPrice(
    event.params.depositAmount,
    event.params.receivedAmount,
    bondingCurve!
  )

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
  )
})

// ============================================================================
// Fee Management Handlers
// ============================================================================

// Fee Claims
BondingCurve.ProjectCollateralFeeWithdrawn.handler(
  async ({ event, context }) => {
    const bondingCurve = await context.BondingCurve.get(event.srcAddress)

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
    )
  }
)

// Protocol Fee Generation
BondingCurve.ProtocolFeeMinted.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)
  const { issuanceTokenDecimals } = bc!
  const mintedProtocolFee = uintToFloat(
    event.params.feeAmount,
    Number(issuanceTokenDecimals)
  )

  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualIssuance: bc!.virtualIssuance! + mintedProtocolFee,
    },
  })
})
