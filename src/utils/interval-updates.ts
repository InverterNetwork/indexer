import {
  BigDecimal,
  eventLog,
  handlerContext,
  IssuanceTokenDayData,
  IssuanceTokenHourData,
} from 'generated'

import { Writable } from 'type-fest'
import { ZERO_BD } from './constants'
import {
  getDayID,
  getDayStartTimestamp,
  getHourIndex,
  getHourStartUnix,
} from '.'

type Properties = Partial<{
  address: string
  priceInCol: BigDecimal
  collateralAmount: BigDecimal
  issuanceAmount: BigDecimal
  projectFeeInCol: BigDecimal
  protocolFeeInCol: BigDecimal
  protocolFeeInIssuance: BigDecimal
}>

type Params = {
  event: eventLog<any>
  context: handlerContext
  properties: Properties
}

export async function updateIssuanceTokenDayData({
  event,
  context,
  properties: {
    address,
    priceInCol,
    collateralAmount,
    issuanceAmount,
    projectFeeInCol,
    protocolFeeInCol,
    protocolFeeInIssuance,
  },
}: Params): Promise<IssuanceTokenDayData> {
  // Step 1: Calculate time-based IDs
  const timestamp = event.block.timestamp
  const dayID = getDayID(timestamp)
  const dayStartTimestamp = getDayStartTimestamp(dayID)

  // Step 2: Generate unique identifiers
  const token_id = `${address}-${event.chainId}`
  const tokenDayID = `${token_id}-${dayID}`

  const nonNullPriceInCol = priceInCol || ZERO_BD

  // Step 3: Fetch existing data or create new entry
  const tokenDayData = ((await context.IssuanceTokenDayData.get(
    tokenDayID
  )) as Writable<IssuanceTokenDayData>) || {
    id: tokenDayID,
    chainId: event.chainId,

    date: dayStartTimestamp,
    token_id,

    volumeInCol: ZERO_BD,
    volumeInIssuance: ZERO_BD,

    projectFeeInCol: ZERO_BD,
    protocolFeeInCol: ZERO_BD,
    protocolFeeInIssuance: ZERO_BD,

    priceInCol: nonNullPriceInCol,

    openInCol: nonNullPriceInCol,
    highInCol: nonNullPriceInCol,
    lowInCol: nonNullPriceInCol,
    closeInCol: nonNullPriceInCol,
  }

  // Step 4: Update price-related data
  if (priceInCol) {
    // If price is greater than the high, update the high
    if (priceInCol.gt(tokenDayData.highInCol)) {
      tokenDayData.highInCol = priceInCol
    }

    // If price is less than the low, update the low
    if (priceInCol.lt(tokenDayData.lowInCol)) {
      tokenDayData.lowInCol = priceInCol
    }

    // Update the close and price
    tokenDayData.closeInCol = priceInCol
    tokenDayData.priceInCol = priceInCol
  }

  // Step 5: Update volume
  if (collateralAmount)
    tokenDayData.volumeInCol = tokenDayData.volumeInCol.plus(collateralAmount)

  if (issuanceAmount)
    tokenDayData.volumeInIssuance =
      tokenDayData.volumeInIssuance.plus(issuanceAmount)

  // Step 6: Update fee data
  if (projectFeeInCol) {
    tokenDayData.projectFeeInCol =
      tokenDayData.projectFeeInCol.plus(projectFeeInCol)
  }

  if (protocolFeeInCol) {
    tokenDayData.protocolFeeInCol =
      tokenDayData.protocolFeeInCol.plus(protocolFeeInCol)
  }

  if (protocolFeeInIssuance) {
    tokenDayData.protocolFeeInIssuance =
      tokenDayData.protocolFeeInIssuance.plus(protocolFeeInIssuance)
  }

  // Step 7: Save and return updated data
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
    protocolFeeInCol,
    protocolFeeInIssuance,
  },
}: Params): Promise<IssuanceTokenHourData> {
  // Step 1: Calculate time-based IDs
  const timestamp = event.block.timestamp
  const hourIndex = getHourIndex(timestamp)
  const hourStartUnix = getHourStartUnix(hourIndex)

  // Step 2: Generate unique identifiers
  const token_id = `${address}-${event.chainId}`
  const tokenHourID = `${token_id}-${hourIndex}`

  const nonNullPriceInCol = priceInCol || ZERO_BD

  // Step 3: Fetch existing data or create new entry
  const tokenHourData = ((await context.IssuanceTokenHourData.get(
    tokenHourID
  )) as Writable<IssuanceTokenHourData>) || {
    id: tokenHourID,
    chainId: event.chainId,

    periodStartUnix: hourStartUnix,
    token_id,

    volumeInCol: ZERO_BD,
    volumeInIssuance: ZERO_BD,

    projectFeeInCol: ZERO_BD,
    protocolFeeInCol: ZERO_BD,
    protocolFeeInIssuance: ZERO_BD,

    priceInCol: nonNullPriceInCol,

    openInCol: nonNullPriceInCol,
    highInCol: nonNullPriceInCol,
    lowInCol: nonNullPriceInCol,
    closeInCol: nonNullPriceInCol,
  }

  // Step 4: Update price-related data
  if (priceInCol) {
    // If price is greater than the high, update the high
    if (priceInCol.gt(tokenHourData.highInCol)) {
      tokenHourData.highInCol = priceInCol
    }

    // If price is less than the low, update the low
    if (priceInCol.lt(tokenHourData.lowInCol)) {
      tokenHourData.lowInCol = priceInCol
    }

    // Update the close and price
    tokenHourData.closeInCol = priceInCol
    tokenHourData.priceInCol = priceInCol
  }

  // Step 5: Update volume
  if (collateralAmount) {
    tokenHourData.volumeInCol = tokenHourData.volumeInCol.plus(collateralAmount)
  }

  if (issuanceAmount)
    tokenHourData.volumeInIssuance =
      tokenHourData.volumeInIssuance.plus(issuanceAmount)

  // Step 6: Update fee data
  if (projectFeeInCol) {
    tokenHourData.projectFeeInCol =
      tokenHourData.projectFeeInCol.plus(projectFeeInCol)
  }

  if (protocolFeeInCol) {
    tokenHourData.protocolFeeInCol =
      tokenHourData.protocolFeeInCol.plus(protocolFeeInCol)
  }

  if (protocolFeeInIssuance) {
    tokenHourData.protocolFeeInIssuance =
      tokenHourData.protocolFeeInIssuance.plus(protocolFeeInIssuance)
  }

  // Step 7: Save and return updated data
  context.IssuanceTokenHourData.set(tokenHourData)

  return tokenHourData
}
