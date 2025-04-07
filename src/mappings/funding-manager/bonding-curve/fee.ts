import { BondingCurve } from 'generated'

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
  formatUnitsToBD,
  handlerErrorWrapper,
} from '../../../utils'

// ============================================================================
// Fee Configuration Handlers
// ============================================================================

BondingCurve.BuyFeeUpdated.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    await updateBondingCurve({
      context,
      event,
      properties: {
        buyFee: event.params.newBuyFee,
      },
    })
  })
)

BondingCurve.SellFeeUpdated.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    await updateBondingCurve({
      context,
      event,
      properties: {
        sellFee: event.params.newSellFee,
      },
    })
  })
)

// ============================================================================
// Fee Management Handlers
// ============================================================================

// Project Fee Claims
// ============================================================================

BondingCurve.ProjectCollateralFeeWithdrawn.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const bc = (await context.BondingCurve.get(id))!

    const module_id = bc.id
    const collateralToken_id = bc.collateralToken_id
    const issuanceToken_id = bc.issuanceToken_id

    const collateralToken = await context.Token.get(collateralToken_id)

    const projectFeeCOL = formatUnitsToBD(
      event.params.amount,
      collateralToken?.decimals
    )

    const projectFeeUSD = projectFeeCOL.times(collateralToken!.priceUSD)

    await createProjectFee({
      event,
      context,
      properties: {
        module_id,
        token_id: collateralToken_id,
        timestamp: event.block.timestamp,

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

    await updateCurveDayData(updateTimeDataParams)
    await updateCurveHourData(updateTimeDataParams)
  })
)

// Protocol Fee Generation
// ============================================================================

// ISSUANCE FEE
BondingCurve.ProtocolFeeMinted.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const bc = (await context.BondingCurve.get(id))!

    const module_id = bc.id
    const collateralToken_id = bc.collateralToken_id
    const issuanceToken_id = bc.issuanceToken_id

    const issuanceToken = await context.Token.get(issuanceToken_id)

    const protocolFeeISS = formatUnitsToBD(
      event.params.feeAmount,
      issuanceToken?.decimals
    )

    // Update virtual issuance, since this is a mint
    const virtualISS = bc!.virtualISS!.plus(protocolFeeISS)

    const protocolFeeUSD = protocolFeeISS.times(issuanceToken!.priceUSD)

    await createProtocolFee({
      context,
      event,
      properties: {
        source: 'ISSUANCE',
        module_id,
        timestamp: event.block.timestamp,

        token_id: issuanceToken_id,

        treasury: event.params.treasury,

        amount: protocolFeeISS,
        amountUSD: protocolFeeUSD,
      },
    })

    await updateBondingCurve({
      context,
      event,
      prevData: bc,
      properties: {
        virtualISS,
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
)

// COLLATERAL FEE
BondingCurve.ProtocolFeeTransferred.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const bc = (await context.BondingCurve.get(id))!

    const module_id = bc.id
    const collateralToken_id = bc.collateralToken_id
    const issuanceToken_id = bc.issuanceToken_id

    const collateralToken = await context.Token.get(collateralToken_id)

    const protocolFeeCOL = formatUnitsToBD(
      event.params.feeAmount,
      collateralToken?.decimals
    )
    const protocolFeeUSD = protocolFeeCOL.times(collateralToken!.priceUSD)

    await createProtocolFee({
      context,
      event,
      properties: {
        source: 'COLLATERAL',
        module_id,
        timestamp: event.block.timestamp,

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
)
