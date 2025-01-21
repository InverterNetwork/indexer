import { BigDecimal, BondingCurve } from 'generated'
import { formatUnits } from 'viem'

import {
  updateBondingCurve,
  updateIssuanceTokenHourData,
  updateIssuanceTokenDayData,
  IssuanceTokenIntervalProperties,
  createProtocolFee,
  createProjectFee,
  CurveIntervalProperties,
  updateCurveDayData,
  updateCurveHourData,
} from '../../../utils'

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
// Fee Management Handlers
// ============================================================================

// Project Fee Claims
// ============================================================================

BondingCurve.ProjectCollateralFeeWithdrawn.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const bc = await context.BondingCurve.get(id)

    const collateralToken_id = bc!.collateralToken_id!
    const issuanceToken_id = bc!.issuanceToken_id!

    const collateralToken = await context.Token.get(collateralToken_id)

    const projectFeeCOL = BigDecimal(
      formatUnits(event.params.amount, collateralToken!.decimals)
    )
    const projectFeeUSD = projectFeeCOL.times(collateralToken!.priceUSD)

    await createProjectFee({
      event,
      context,
      properties: {
        bondingCurve_id: event.srcAddress,
        blockTimestamp: event.block.timestamp,

        amount: projectFeeCOL,
        amountUSD: projectFeeUSD,

        recipient: event.params.receiver,
      },
    })

    const updateTimeDataParams = {
      context,
      event,
      properties: {
        id,

        collateralToken_id,
        issuanceToken_id,

        projectFeeCOL,
        projectFeeUSD,
      } satisfies IssuanceTokenIntervalProperties & CurveIntervalProperties,
    }

    await updateIssuanceTokenHourData(updateTimeDataParams)
    await updateIssuanceTokenDayData(updateTimeDataParams)
  }
)

// Protocol Fee Generation
// ============================================================================

// ISSUANCE FEE
BondingCurve.ProtocolFeeMinted.handler(async ({ event, context }) => {
  const id = `${event.srcAddress}-${event.chainId}`
  const bc = await context.BondingCurve.get(id)

  const collateralToken_id = bc!.collateralToken_id!
  const issuanceToken_id = bc!.issuanceToken_id!

  const issuanceToken = await context.Token.get(issuanceToken_id)

  const mintedFeeISS = BigDecimal(
    formatUnits(event.params.feeAmount, issuanceToken?.decimals ?? 18)
  )

  // Update virtual issuance, since this is a mint
  const virtualISS = bc!.virtualISS!.plus(mintedFeeISS)
  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualISS,
    },
  })

  const protocolFeeISS = BigDecimal(
    formatUnits(event.params.feeAmount, Number(issuanceToken!.decimals))
  )
  const protocolFeeUSD = protocolFeeISS.times(issuanceToken!.priceUSD)

  await createProtocolFee({
    context,
    event,
    properties: {
      source: 'ISSUANCE',
      bondingCurve_id: id,
      treasury: event.params.treasury,

      token_id: issuanceToken_id,

      amount: protocolFeeISS,
      amountUSD: protocolFeeUSD,
    },
  })

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      id,

      collateralToken_id,
      issuanceToken_id,

      protocolFeeISS,
      protocolFeeUSD,
    } satisfies IssuanceTokenIntervalProperties & CurveIntervalProperties,
  }

  await updateCurveDayData(updateTimeDataParams)
  await updateCurveHourData(updateTimeDataParams)

  await updateIssuanceTokenHourData(updateTimeDataParams)
  await updateIssuanceTokenDayData(updateTimeDataParams)
})

// COLLATERAL FEE
BondingCurve.ProtocolFeeTransferred.handler(async ({ event, context }) => {
  const id = `${event.srcAddress}-${event.chainId}`
  const bc = await context.BondingCurve.get(id)

  const collateralToken_id = bc!.collateralToken_id!
  const issuanceToken_id = bc!.issuanceToken_id!

  const collateralToken = await context.Token.get(collateralToken_id)

  const protocolFeeCOL = BigDecimal(
    formatUnits(event.params.feeAmount, Number(collateralToken!.decimals))
  )
  const protocolFeeUSD = protocolFeeCOL.times(collateralToken!.priceUSD)

  await createProtocolFee({
    context,
    event,
    properties: {
      source: 'COLLATERAL',
      bondingCurve_id: id,
      token_id: collateralToken_id,
      treasury: event.params.treasury,

      amount: protocolFeeCOL,
      amountUSD: protocolFeeUSD,
    },
  })

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      id,

      collateralToken_id,
      issuanceToken_id,

      protocolFeeCOL,
      protocolFeeUSD,
    } satisfies IssuanceTokenIntervalProperties & CurveIntervalProperties,
  }

  await updateCurveDayData(updateTimeDataParams)
  await updateCurveHourData(updateTimeDataParams)

  await updateIssuanceTokenHourData(updateTimeDataParams)
  await updateIssuanceTokenDayData(updateTimeDataParams)
})
