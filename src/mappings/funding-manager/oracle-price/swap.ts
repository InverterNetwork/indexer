import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'
import {
  createSwap,
  CurveIntervalProperties,
  getIssPriceFromCol,
  getQtyAndPrice,
  IssuanceTokenIntervalProperties,
  updateCurveDayData,
  updateCurveHourData,
  updateIssuanceTokenDayData,
  updateIssuanceTokenHourData,
  updateToken,
  updateOraclePrice,
  getBalanceOf,
} from '../../../utils'

// ============================================================================
// Swap Operation Handlers
// ============================================================================

// Buy Operations
FM_PC_ExternalPrice_Redeeming_v1.TokensBought.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const bc = await context.OraclePriceFM.get(id)

    const issuanceToken_id = bc!.issuanceToken_id!
    const collateralToken_id = bc!.collateralToken_id!

    const issuanceToken = await context.Token.get(issuanceToken_id)
    const collateralToken = await context.Token.get(collateralToken_id)

    const { amountISS, amountCOL, priceCOL } = getQtyAndPrice(
      event.params.receivedAmount,
      event.params.depositAmount,

      issuanceToken,
      collateralToken
    )

    const priceUSD = getIssPriceFromCol(priceCOL, collateralToken?.priceUSD)
    const amountUSD = amountISS.times(priceUSD)

    await createSwap({
      context,
      event,
      properties: {
        fundingManager_id: id,

        swapType: 'BUY',
        timestamp: event.block.timestamp,

        issuanceToken_id,
        collateralToken_id,

        priceCOL,
        priceUSD,

        amountCOL,
        amountISS,
        amountUSD,

        initiator: event.params.buyer,
        recipient: event.params.receiver,
      },
    })

    await updateToken({
      event,
      context,
      derivedType: 'issuance',
      properties: {
        address: issuanceToken!.address,
        priceUSD,
      },
      triggerTotalSupply: true,
    })

    const updateTimeDataParams = {
      context,
      event,
      properties: {
        id,

        collateralToken_id,
        issuanceToken_id,

        priceUSD,

        amountISS,
        amountCOL,
        amountUSD,
      } satisfies IssuanceTokenIntervalProperties & CurveIntervalProperties,
    }

    await updateCurveDayData(updateTimeDataParams)
    await updateCurveHourData(updateTimeDataParams)

    await updateIssuanceTokenHourData(updateTimeDataParams)
    await updateIssuanceTokenDayData(updateTimeDataParams)

    const reserveCOL = await getBalanceOf({
      tokenAddress: collateralToken!.address,
      address: bc!.address,
      chainId: bc!.chainId,
      decimals: collateralToken!.decimals,
    })

    const reserveUSD = reserveCOL.times(collateralToken!.priceUSD)

    await updateOraclePrice({
      context,
      event,
      properties: {
        reserveCOL,
        reserveUSD,
      },
    })
  }
)

// Sell Operations
FM_PC_ExternalPrice_Redeeming_v1.TokensSold.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const bc = (await context.OraclePriceFM.get(id))!

    const issuanceToken_id = bc.issuanceToken_id
    const collateralToken_id = bc.collateralToken_id

    const issuanceToken = await context.Token.get(issuanceToken_id)
    const collateralToken = await context.Token.get(collateralToken_id)

    const { amountISS, amountCOL, priceCOL } = getQtyAndPrice(
      event.params.depositAmount,
      event.params.receivedAmount,

      issuanceToken,
      collateralToken
    )

    const priceUSD = getIssPriceFromCol(priceCOL, collateralToken?.priceUSD)
    const amountUSD = amountISS.times(priceUSD)

    await createSwap({
      context,
      event,
      properties: {
        fundingManager_id: id,

        swapType: 'SELL',
        timestamp: event.block.timestamp,

        collateralToken_id,
        issuanceToken_id,

        priceCOL,
        priceUSD,

        amountCOL,
        amountISS,
        amountUSD,

        initiator: event.params.seller,
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

        priceCOL,
        priceUSD,

        amountCOL,
        amountISS,
        amountUSD,
      } satisfies IssuanceTokenIntervalProperties & CurveIntervalProperties,
    }

    await updateCurveDayData(updateTimeDataParams)
    await updateCurveHourData(updateTimeDataParams)

    await updateIssuanceTokenHourData(updateTimeDataParams)
    await updateIssuanceTokenDayData(updateTimeDataParams)

    await updateToken({
      event,
      context,
      derivedType: 'issuance',
      properties: {
        address: issuanceToken!.address,
        priceUSD,
      },
      triggerTotalSupply: true,
    })

    const reserveCOL = await getBalanceOf({
      tokenAddress: collateralToken!.address,
      address: bc.address,
      chainId: bc.chainId,
      decimals: collateralToken!.decimals,
    })

    const reserveUSD = reserveCOL.times(collateralToken!.priceUSD)

    await updateOraclePrice({
      context,
      event,
      properties: {
        reserveCOL,
        reserveUSD,
      },
    })
  }
)
