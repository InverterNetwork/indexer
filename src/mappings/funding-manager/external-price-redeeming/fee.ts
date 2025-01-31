import { BigDecimal, FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'
import { formatUnits } from 'viem'

import {
  updateIssuanceTokenHourData,
  updateIssuanceTokenDayData,
  IssuanceTokenIntervalProperties,
  createProtocolFee,
  createProjectFee,
  CurveIntervalProperties,
  updateCurveDayData,
  updateCurveHourData,
} from '../../../utils'

import { updateExternalPriceFundingManager } from './update'

// ============================================================================
// Fee Configuration Handlers
// ============================================================================

FM_PC_ExternalPrice_Redeeming_v1.BuyFeeUpdated.handler(
  async ({ event, context }) => {
    await updateExternalPriceFundingManager({
      context,
      event,
      properties: {
        buyFee: event.params.newBuyFee,
      },
    })
  }
)

FM_PC_ExternalPrice_Redeeming_v1.SellFeeUpdated.handler(
  async ({ event, context }) => {
    await updateExternalPriceFundingManager({
      context,
      event,
      properties: {
        sellFee: event.params.newSellFee,
      },
    })
  }
)

// ============================================================================
// Fee Management Handlers
// ============================================================================

// Project Fee Claims
// ============================================================================

FM_PC_ExternalPrice_Redeeming_v1.ProjectCollateralFeeWithdrawn.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const bc = (await context.OraclePriceFM.get(id))!

    const module_id = bc.id
    const collateralToken_id = bc.collateralToken_id
    const issuanceToken_id = bc.issuanceToken_id

    const collateralToken = await context.Token.get(collateralToken_id)

    const projectFeeCOL = BigDecimal(
      formatUnits(event.params.amount, collateralToken!.decimals)
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
  }
)

// Protocol Fee Generation
// ============================================================================

// ISSUANCE FEE
FM_PC_ExternalPrice_Redeeming_v1.ProtocolFeeMinted.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const bc = (await context.OraclePriceFM.get(id))!

    const module_id = bc.id
    const collateralToken_id = bc.collateralToken_id
    const issuanceToken_id = bc.issuanceToken_id

    const issuanceToken = await context.Token.get(issuanceToken_id)

    const mintedFeeISS = BigDecimal(
      formatUnits(event.params.feeAmount, issuanceToken?.decimals ?? 18)
    )

    // Update virtual issuance, since this is a mint
    // const virtualISS = bc!.virtualISS!.plus(mintedFeeISS)

    const protocolFeeISS = BigDecimal(
      formatUnits(event.params.feeAmount, Number(issuanceToken!.decimals))
    )
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

    // await updateBondingCurve({
    //   context,
    //   event,
    //   prevData: bc,
    //   properties: {
    //     // virtualISS,
    //   },
    // })

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
  }
)

// COLLATERAL FEE
FM_PC_ExternalPrice_Redeeming_v1.ProtocolFeeTransferred.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const bc = (await context.OraclePriceFM.get(id))!

    const module_id = bc.id
    const collateralToken_id = bc.collateralToken_id
    const issuanceToken_id = bc.issuanceToken_id

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
  }
)
