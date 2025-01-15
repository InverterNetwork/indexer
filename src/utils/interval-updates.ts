import {
  eventLog,
  handlerContext,
  IssuanceTokenDayData,
  IssuanceTokenHourData,
} from 'generated'

import { Writable } from 'type-fest'

export function getDayID(timestamp: number) {
  return Math.floor(timestamp / 86400) // rounded
}

export function getDayStartTimestamp(dayID: number) {
  return dayID * 86400
}

export function getHourIndex(timestamp: number) {
  return Math.floor(timestamp / 3600) // get unique hour within unix history
}

export function getHourStartUnix(hourIndex: number) {
  return hourIndex * 3600 // want the rounded effect
}

type Properties = Partial<{
  address: string
  priceInCol: number
  collateralAmount: number
  issuanceAmount: number
  projectFeeInCol: number
}>

export async function updateIssuanceTokenDayData({
  event,
  context,
  properties: {
    address,
    priceInCol,
    collateralAmount,
    issuanceAmount,
    projectFeeInCol,
  },
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Properties
}): Promise<IssuanceTokenDayData> {
  const timestamp = event.block.timestamp
  const dayID = getDayID(timestamp)
  const dayStartTimestamp = getDayStartTimestamp(dayID)

  const token_id = `${address}-${event.chainId}`
  const tokenDayID = `${token_id}-${dayID}`

  const tokenDayData = (structuredClone(
    await context.IssuanceTokenDayData.get(tokenDayID)
  ) as Writable<IssuanceTokenDayData>) || {
    id: tokenDayID,
    chainId: event.chainId,
    date: dayStartTimestamp,
    token_id,

    volumeInCol: 0,
    volumeInIssuance: 0,

    projectFeeInCol: 0,
    protocolFeeInCol: 0,
    projectFeeInIssuance: 0,

    openInCol: priceInCol,
    highInCol: priceInCol,
    lowInCol: priceInCol,
    closeInCol: priceInCol,
  }

  if (priceInCol) {
    if (priceInCol > tokenDayData.highInCol) {
      tokenDayData.highInCol = priceInCol
    }

    if (priceInCol < tokenDayData.lowInCol) {
      tokenDayData.lowInCol = priceInCol
    }

    tokenDayData.closeInCol = priceInCol
  }

  if (collateralAmount)
    tokenDayData.volumeInCol = tokenDayData.volumeInCol + collateralAmount

  if (issuanceAmount)
    tokenDayData.volumeInIssuance =
      tokenDayData.volumeInIssuance + issuanceAmount

  if (projectFeeInCol) {
    tokenDayData.projectFeeInCol =
      tokenDayData.projectFeeInCol + projectFeeInCol
  }

  context.IssuanceTokenDayData.set(tokenDayData)

  return tokenDayData
}

export async function updateIssuanceTokenHourData({
  event,
  context,
  properties: {
    address,
    priceInCol,
    collateralAmount,
    issuanceAmount,
    projectFeeInCol,
  },
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Properties
}): Promise<IssuanceTokenHourData> {
  const timestamp = event.block.timestamp
  const hourIndex = getHourIndex(timestamp)
  const hourStartUnix = getHourStartUnix(hourIndex)

  const token_id = `${address}-${event.chainId}`
  const tokenHourID = `${token_id}-${hourIndex}`

  const tokenHourData = (structuredClone(
    await context.IssuanceTokenHourData.get(tokenHourID)
  ) as Writable<IssuanceTokenHourData>) || {
    id: tokenHourID,
    chainId: event.chainId,

    periodStartUnix: hourStartUnix,
    token_id,

    volumeInCol: 0,
    volumeInIssuance: 0,

    projectFeeInCol: 0,
    protocolFeeInCol: 0,
    projectFeeInIssuance: 0,

    openInCol: priceInCol,
    highInCol: priceInCol,
    lowInCol: priceInCol,
    closeInCol: priceInCol,
  }

  if (priceInCol) {
    if (priceInCol > tokenHourData.highInCol) {
      tokenHourData.highInCol = priceInCol
    }

    if (priceInCol < tokenHourData.lowInCol) {
      tokenHourData.lowInCol = priceInCol
    }

    tokenHourData.closeInCol = priceInCol
  }

  if (collateralAmount)
    tokenHourData.volumeInCol = tokenHourData.volumeInCol + collateralAmount

  if (issuanceAmount)
    tokenHourData.volumeInIssuance =
      tokenHourData.volumeInIssuance + issuanceAmount

  if (projectFeeInCol) {
    tokenHourData.projectFeeInCol =
      tokenHourData.projectFeeInCol + projectFeeInCol
  }

  context.IssuanceTokenHourData.set(tokenHourData)

  return tokenHourData
}
