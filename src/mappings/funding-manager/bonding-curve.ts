import { BigDecimal, BondingCurve } from 'generated'

import {
  updateBondingCurve,
  getQtyAndPrice,
  createSwap,
  createProjectFee,
  updateToken,
  updateIssuanceTokenHourData,
  updateIssuanceTokenDayData,
  createProtocolFee,
} from '../../utils'

import { formatUnits } from 'viem'

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

  await createSwap({
    context,
    event,
    properties: {
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
    },
  })

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      address: issuanceToken!.address,
      collateralAmount,
      issuanceAmount,
      priceInCol,
    },
  }

  await updateIssuanceTokenHourData(updateTimeDataParams)
  // await updateIssuanceTokenDayData(updateTimeDataParams)
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

  await createSwap({
    context,
    event,
    properties: {
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
    },
  })

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      address: issuanceToken!.address,
      collateralAmount,
      issuanceAmount,
      priceInCol,
    },
  }

  await updateIssuanceTokenHourData(updateTimeDataParams)
  await updateIssuanceTokenDayData(updateTimeDataParams)
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

  const virtualCollateral = BigDecimal(
    formatUnits(virtualCollateralRaw!, Number(event.params.decimals))
  )

  const collateralToken_id = await updateToken({
    event,
    context,
    properties: {
      address: event.params.token,
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

  const virtualIssuance = BigDecimal(
    formatUnits(event.params.newSupply, issuanceToken!.decimals)
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

  const virtualIssuance = BigDecimal(
    formatUnits(event.params.newSupply, issuanceToken!.decimals)
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

    const virtualIssuance = BigDecimal(
      formatUnits(event.params.newSupply, issuanceToken!.decimals)
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

    const virtualCollateral = BigDecimal(
      formatUnits(event.params.newSupply, collateralToken!.decimals)
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

    const virtualCollateral = BigDecimal(
      formatUnits(event.params.newSupply, collateralToken!.decimals)
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
    const issuanceTokenAddress = bc!.issuanceToken_id!.split('-')[0]

    const amount = BigDecimal(
      formatUnits(event.params.amount, collateralToken!.decimals)
    )

    await createProjectFee({
      event,
      context,
      properties: {
        bondingCurve_id: event.srcAddress,
        amount,
        blockTimestamp: event.block.timestamp,
        recipient: event.params.receiver,
      },
    })

    const updateTimeDataParams = {
      context,
      event,
      properties: {
        address: issuanceTokenAddress,
        projectFeeInCol: amount,
      },
    }

    await updateIssuanceTokenHourData(updateTimeDataParams)
    await updateIssuanceTokenDayData(updateTimeDataParams)
  }
)

// Protocol Fee Generation
BondingCurve.ProtocolFeeMinted.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)
  const issuanceToken = await context.Token.get(bc!.issuanceToken_id!)

  const mintedProtocolFee = BigDecimal(
    formatUnits(event.params.feeAmount, issuanceToken?.decimals ?? 18)
  )

  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualIssuance: bc!.virtualIssuance!.plus(mintedProtocolFee),
    },
  })

  const protocolFee = BigDecimal(
    formatUnits(event.params.feeAmount, Number(issuanceToken!.decimals))
  )

  await createProtocolFee({
    context,
    event,
    properties: {
      source: 'ISSUANCE',
      bondingCurve_id: event.srcAddress,
      token_id: issuanceToken!.id,
      amount: protocolFee,
      treasury: event.params.treasury,
    },
  })

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      address: issuanceToken!.address,
      protocolFeeInIssuance: protocolFee,
    },
  }

  await updateIssuanceTokenHourData(updateTimeDataParams)
  await updateIssuanceTokenDayData(updateTimeDataParams)
})

BondingCurve.ProtocolFeeTransferred.handler(async ({ event, context }) => {
  const bc = await context.BondingCurve.get(event.srcAddress)

  const collateralToken = await context.Token.get(bc!.collateralToken_id!)

  const protocolFee = BigDecimal(
    formatUnits(event.params.feeAmount, Number(collateralToken!.decimals))
  )

  await createProtocolFee({
    context,
    event,
    properties: {
      source: 'COLLATERAL',
      bondingCurve_id: event.srcAddress,
      token_id: collateralToken!.id,
      amount: protocolFee,
      treasury: event.params.treasury,
    },
  })

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      address: collateralToken!.address,
      protocolFeeInCol: protocolFee,
    },
  }

  await updateIssuanceTokenHourData(updateTimeDataParams)
  await updateIssuanceTokenDayData(updateTimeDataParams)
})
