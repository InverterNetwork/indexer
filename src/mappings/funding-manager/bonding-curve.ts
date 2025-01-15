import { BondingCurve } from 'generated'

import {
  uintToFloat,
  updateBondingCurve,
  getQtyAndPrice,
  createSwap,
  createFeeClaim,
  updateToken,
  updateIssuanceTokenHourData,
  updateIssuanceTokenDayData,
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
// Swap Operation Handlers
// ============================================================================

// Buy Operations
BondingCurve.TokensBought.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)

  const issuanceToken = await context.Token.get(bc!.issuanceToken_id!)
  const collateralToken = await context.Token.get(bc!.collateralToken_id!)

  const { issuanceAmount, collateralAmount, priceInCol } = getQtyAndPrice(
    event.params.receivedAmount,
    event.params.depositAmount,

    issuanceToken,
    collateralToken
  )

  await createSwap(
    context,
    event.block.hash + '-' + event.logIndex,
    event.chainId,
    {
      swapType: 'BUY',
      bondingCurve_id: event.srcAddress,
      issuanceToken_id: bc!.issuanceToken_id!,
      collateralToken_id: bc!.collateralToken_id!,
      collateralAmount,
      issuanceAmount,
      initiator: event.params.buyer,
      recipient: event.params.receiver,
      priceInCol,
      blockTimestamp: event.block.timestamp,
    }
  )

  await updateIssuanceTokenHourData({
    context,
    event,
    properties: {
      address: issuanceToken!.address,
      collateralAmount,
      issuanceAmount,
      priceInCol,
    },
  })
})

// Sell Operations
BondingCurve.TokensSold.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)

  const issuanceToken = await context.Token.get(bc!.issuanceToken_id!)
  const collateralToken = await context.Token.get(bc!.collateralToken_id!)

  const { issuanceAmount, collateralAmount, priceInCol } = getQtyAndPrice(
    event.params.depositAmount,
    event.params.receivedAmount,

    issuanceToken,
    collateralToken
  )

  await createSwap(
    context,
    event.block.hash + '-' + event.logIndex,
    event.chainId,
    {
      swapType: 'SELL',
      bondingCurve_id: event.srcAddress,
      collateralToken_id: bc!.collateralToken_id!,
      issuanceToken_id: bc!.issuanceToken_id!,
      collateralAmount,
      issuanceAmount,
      initiator: event.params.seller,
      recipient: event.params.receiver,
      priceInCol,
      blockTimestamp: event.block.timestamp,
    }
  )

  await updateIssuanceTokenHourData({
    context,
    event,
    properties: {
      address: issuanceToken!.address,
      collateralAmount,
      issuanceAmount,
      priceInCol,
    },
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
  const issuanceToken_id = await updateToken({
    event,
    context,
    properties: {
      address: event.params.issuanceToken,
      decimals: Number(event.params.decimals),
    },
  })

  await updateBondingCurve({
    context,
    event,
    properties: {
      issuanceToken_id,
    },
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

  const collateralToken_id = await updateToken({
    event,
    context,
    properties: {
      address: event.params.token,
      decimals: Number(event.params.decimals),
    },
  })

  await updateBondingCurve({
    context,
    event,
    properties: {
      collateralToken_id,
      virtualCollateral,
    },
  })
})

// ============================================================================
// Virtual Supply Management Handlers
// ============================================================================

// Virtual Issuance Supply
BondingCurve.VirtualIssuanceSupplySet.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)
  const issuanceToken = await context.Token.get(bc!.issuanceToken_id!)

  const virtualIssuance = uintToFloat(
    event.params.newSupply,
    Number(issuanceToken!.decimals)
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
  const issuanceToken = await context.Token.get(bc!.issuanceToken_id!)

  const virtualIssuance = uintToFloat(
    event.params.newSupply,
    Number(issuanceToken!.decimals)
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
    const issuanceToken = await context.Token.get(bc!.issuanceToken_id!)

    const virtualIssuance = uintToFloat(
      event.params.newSupply,
      Number(issuanceToken!.decimals)
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
    const collateralToken = await context.Token.get(bc!.collateralToken_id!)

    const virtualCollateral = uintToFloat(
      event.params.newSupply,
      Number(collateralToken!.decimals)
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
    const collateralToken = await context.Token.get(bc!.collateralToken_id!)

    const virtualCollateral = uintToFloat(
      event.params.newSupply,
      Number(collateralToken!.decimals)
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
// Fee Management Handlers
// ============================================================================

// Fee Claims
BondingCurve.ProjectCollateralFeeWithdrawn.handler(
  async ({ event, context }) => {
    const bc = await context.BondingCurve.get(event.srcAddress)
    const collateralToken = await context.Token.get(bc!.collateralToken_id!)

    await createFeeClaim(
      context,
      event.block.hash + '-' + event.logIndex,
      event.chainId,
      {
        bondingCurve_id: event.srcAddress,
        amount: uintToFloat(
          event.params.amount,
          collateralToken!.decimals ?? 18
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
  const issuanceToken = await context.Token.get(bc!.issuanceToken_id!)

  const mintedProtocolFee = uintToFloat(
    event.params.feeAmount,
    Number(issuanceToken?.decimals ?? 18)
  )

  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualIssuance: bc!.virtualIssuance! + mintedProtocolFee,
    },
  })
})
