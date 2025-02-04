import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'
import {
  createOraclePriceOrder,
  CurveIntervalProperties,
  formatUnitsToBD,
  getBalanceOf,
  getIssPriceFromCol,
  getQtyAndPrice,
  IssuanceTokenIntervalProperties,
  updateCurveDayData,
  updateCurveHourData,
  updateIssuanceTokenDayData,
  updateIssuanceTokenHourData,
  updateOraclePrice,
  updateToken,
  ZERO_BD,
} from '../../../utils'

// BUY OPERATIONS
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.TokensBought.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const op = (await context.OraclePriceFM.get(id))!

    const issuanceToken_id = op.issuanceToken_id
    const collateralToken_id = op.collateralToken_id

    const issuanceToken = (await context.Token.get(issuanceToken_id))!
    const collateralToken = (await context.Token.get(collateralToken_id))!

    const { amountISS, amountCOL, priceCOL } = getQtyAndPrice(
      event.params.receivedAmount,
      event.params.depositAmount,

      issuanceToken,
      collateralToken
    )

    const priceUSD = getIssPriceFromCol(priceCOL, collateralToken?.priceUSD)
    const amountUSD = amountISS.times(priceUSD)

    const oraclePriceOrder_id = `${event.chainId}-${event.transaction.hash}`

    await createOraclePriceOrder({
      context,
      event,
      id: oraclePriceOrder_id,
      properties: {
        oraclePriceFM_id: id,

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

        protocolFeeType: 'ISSUANCE',
      },
    })

    await updateToken({
      event,
      context,
      derivedType: 'issuance',
      properties: {
        address: issuanceToken.address,
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
      tokenAddress: collateralToken.address,
      address: op.address,
      chainId: op.chainId,
      decimals: collateralToken.decimals,
    })

    const reserveUSD = reserveCOL.times(collateralToken.priceUSD)

    await updateOraclePrice({
      context,
      event,
      prevData: op,
      properties: {
        reserveCOL,
        reserveUSD,
      },
    })
  }
)

// SELL OPERATIONS
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.PaymentOrderAdded.handler(
  async ({ event, context }) => {
    if (event.params.data.length == 0) {
      context.log.error(`Invalid payment order data`)
      return
    }

    const address = event.srcAddress
    const chainId = event.chainId
    const timestamp = event.block.timestamp
    const oraclePriceFM_id = `${chainId}-${address}`

    const oraclePriceFM = (await context.OraclePriceFM.get(oraclePriceFM_id))!
    const externalPriceSetter = (await context.ExternalPriceSetter.get(
      oraclePriceFM.externalPriceSetter_id!
    ))!

    if (!externalPriceSetter) {
      context.log.error(
        `ExternalPriceSetter not found. FM: ${oraclePriceFM_id}`
      )
      return
    }

    const orderId = Number(event.params.data.at(0)!.toString())
    const paymentTokenAddress = event.params.token
    const token_id = `${chainId}-${paymentTokenAddress}`

    const token = (await context.Token.get(token_id))!

    const priceISS = externalPriceSetter.priceISS
    const priceCOL = externalPriceSetter.priceCOL
    const priceUSD = getIssPriceFromCol(priceCOL, token.priceUSD)

    const amountCOL = formatUnitsToBD(event.params.amount, token.decimals)
    const amountUSD = amountCOL.times(token.priceUSD)
    let amountISS = amountCOL.div(priceCOL).times(priceISS)
    if (amountISS.isNaN()) amountISS = ZERO_BD

    const oraclePriceOrderId = `${oraclePriceFM_id}-${orderId}`

    await createOraclePriceOrder({
      event,
      context,
      id: oraclePriceOrderId,
      properties: {
        timestamp,
        orderId: BigInt(orderId),
        swapType: 'SELL',
        protocolFeeType: 'COLLATERAL',
        orderType: 'PAYMENT',
        state: 'PENDING',

        initiator: event.params.recipient,

        oraclePriceFM_id,

        targetChainId: Number(event.params.targetChainId),
        recipient: event.params.recipient,

        collateralToken_id: token_id,
        issuanceToken_id: oraclePriceFM.issuanceToken_id,

        priceCOL,
        priceUSD,

        amountCOL,
        amountISS,
        amountUSD,
      },
    })
  }
)

FM_PC_ExternalPrice_Redeeming_v1.TokensSold.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const op = (await context.OraclePriceFM.get(id))!

    const issuanceToken_id = op.issuanceToken_id
    const collateralToken_id = op.collateralToken_id

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
      address: op.address,
      chainId: op.chainId,
      decimals: collateralToken!.decimals,
    })

    const reserveUSD = reserveCOL.times(collateralToken!.priceUSD)

    await updateOraclePrice({
      context,
      event,
      prevData: op,
      properties: {
        reserveCOL,
        reserveUSD,
      },
    })
  }
)
