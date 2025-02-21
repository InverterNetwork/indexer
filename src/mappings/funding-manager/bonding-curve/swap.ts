import { BondingCurve } from 'generated'

import {
  createSwap,
  CurveIntervalProperties,
  getBalanceOf,
  getIssPriceFromCol,
  getQtyAndPrice,
  IssuanceTokenIntervalProperties,
  updateBondingCurve,
  updateCurveDayData,
  updateCurveHourData,
  updateIssuanceTokenDayData,
  updateIssuanceTokenHourData,
  updateToken,
} from '../../../utils'

// ============================================================================
// Swap Operation Handlers
// ============================================================================

// Buy Operations
BondingCurve.TokensBought.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`
  const bc = await context.BondingCurve.get(id)

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

  const updatedIssuanceToken = await updateToken({
    event,
    context,
    derivedType: 'issuance',
    properties: {
      address: issuanceToken!.address,
      priceUSD,
    },
    triggerTotalSupply: true,
  })

  const marketCapUSD = updatedIssuanceToken.marketCapUSD
  const marketCapCOL = priceCOL.times(updatedIssuanceToken.totalSupply)

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      id,

      collateralToken_id,
      issuanceToken_id,

      marketCapUSD,
      marketCapCOL,

      priceUSD,
      priceCOL,

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

  await updateBondingCurve({
    context,
    event,
    properties: {
      reserveCOL,
      reserveUSD,
    },
  })
})

// Sell Operations
BondingCurve.TokensSold.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`
  const bc = (await context.BondingCurve.get(id))!

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

  const updatedIssuanceToken = await updateToken({
    event,
    context,
    derivedType: 'issuance',
    properties: {
      address: issuanceToken!.address,
      priceUSD,
    },
    triggerTotalSupply: true,
  })

  const marketCapUSD = updatedIssuanceToken.marketCapUSD
  const marketCapCOL = priceCOL.times(updatedIssuanceToken.totalSupply)

  const updateTimeDataParams = {
    context,
    event,
    properties: {
      id,

      collateralToken_id,
      issuanceToken_id,

      marketCapUSD,
      marketCapCOL,

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

  const reserveCOL = await getBalanceOf({
    tokenAddress: collateralToken!.address,
    address: bc.address,
    chainId: bc.chainId,
    decimals: collateralToken!.decimals,
  })

  const reserveUSD = reserveCOL.times(collateralToken!.priceUSD)

  await updateBondingCurve({
    context,
    event,
    properties: {
      reserveCOL,
      reserveUSD,
    },
  })
})
