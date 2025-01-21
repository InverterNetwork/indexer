import {
  BigDecimal,
  CurveDayData,
  CurveHourData,
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

// -----------------------------------------
// TYPES
// -----------------------------------------
export type CurveIntervalProperties = {
  id: string
  collateralToken_id: string
  issuanceToken_id: string

  priceCOL?: BigDecimal
  priceUSD?: BigDecimal

  amountCOL?: BigDecimal
  amountISS?: BigDecimal
  amountUSD?: BigDecimal

  projectFeeCOL?: BigDecimal
  protocolFeeCOL?: BigDecimal
  protocolFeeISS?: BigDecimal
}

export type IssuanceTokenIntervalProperties = {
  issuanceToken_id: string

  priceUSD?: BigDecimal

  amountISS?: BigDecimal

  projectFeeUSD?: BigDecimal
  protocolFeeUSD?: BigDecimal
  protocolFeeISS?: BigDecimal
}

type IssuanceTokenIntervalData = IssuanceTokenDayData | IssuanceTokenHourData
type CurveIntervalData = CurveDayData | CurveHourData

type IntervalType = 'hour' | 'day'

type Params<T extends 'curve' | 'issuance'> = {
  event: eventLog<any>
  context: handlerContext
  properties: {
    curve: CurveIntervalProperties
    issuance: IssuanceTokenIntervalProperties
  }[T]
}

// -----------------------------------------
// MAIN FUNCTIONS
// -----------------------------------------

// CURVE
// -----------------------------------------

export function updateCurveDayData({ context, ...params }: Params<'curve'>) {
  return handleCurveIntervalData({
    ...params,
    intervalType: 'day',
    store: context.CurveDayData,
  })
}

export function updateCurveHourData({ context, ...params }: Params<'curve'>) {
  return handleCurveIntervalData({
    ...params,
    intervalType: 'hour',
    store: context.CurveHourData,
  })
}

// ISSUANCE TOKEN
// -----------------------------------------

export function updateIssuanceTokenDayData({
  context,
  ...params
}: Params<'issuance'>) {
  return handleIssuanceTokenIntervalData({
    ...params,
    intervalType: 'day',
    store: context.IssuanceTokenDayData,
  })
}

export function updateIssuanceTokenHourData({
  context,
  ...params
}: Params<'issuance'>) {
  return handleIssuanceTokenIntervalData({
    ...params,
    intervalType: 'hour',
    store: context.IssuanceTokenHourData,
  })
}

// -----------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------

type Store<T> = {
  get: (id: string) => Promise<T | undefined>
  set: (data: T) => void
}

// ISSUANCE TOKEN INTERVAL DATA
// -----------------------------------------

async function handleIssuanceTokenIntervalData<
  T extends IssuanceTokenIntervalData,
>({
  event,
  properties,
  intervalType,
  store,
}: Omit<Params<'issuance'>, 'context'> & {
  intervalType: IntervalType
  store: Store<T>
}): Promise<Writable<T>> {
  const timestamp = event.block.timestamp
  const {
    issuanceToken_id,

    priceUSD,
    amountISS,

    projectFeeUSD,

    protocolFeeUSD,
    protocolFeeISS,
  } = properties

  const intervalData = getIntervalData(intervalType, timestamp)

  const intervalID = `${issuanceToken_id}-${intervalData.id}`
  const nonNullPriceUSD = priceUSD || ZERO_BD
  const amountUSD = amountISS?.times(nonNullPriceUSD)

  const data =
    ((await store.get(intervalID)) as Writable<T>) ||
    ({
      id: intervalID,
      chainId: event.chainId,

      token_id: issuanceToken_id,

      volumeUSD: ZERO_BD,
      volumeISS: ZERO_BD,

      priceUSD: nonNullPriceUSD,

      openUSD: nonNullPriceUSD,
      closeUSD: nonNullPriceUSD,
      highUSD: nonNullPriceUSD,
      lowUSD: nonNullPriceUSD,

      projectFeeUSD: ZERO_BD,
      protocolFeeUSD: ZERO_BD,
      protocolFeeISS: ZERO_BD,
    } satisfies Writable<
      Omit<IssuanceTokenIntervalData, 'date' | 'periodStartUnix'>
    >)

  setStartTime(data, intervalType, intervalData.startTime)

  // Update price data
  if (priceUSD) {
    if (priceUSD.gt(data.highUSD)) data.highUSD = priceUSD
    if (priceUSD.lt(data.lowUSD)) data.lowUSD = priceUSD
    data.closeUSD = priceUSD
    data.priceUSD = priceUSD
  }

  // Update volumes
  if (amountISS) data.volumeISS = data.volumeISS.plus(amountISS)
  if (amountUSD) data.volumeUSD = data.volumeUSD.plus(amountUSD)

  // Update project fees
  if (projectFeeUSD) data.projectFeeUSD = data.projectFeeUSD.plus(projectFeeUSD)

  // Update protocol fees
  if (protocolFeeUSD)
    data.protocolFeeUSD = data.protocolFeeUSD.plus(protocolFeeUSD)
  if (protocolFeeISS)
    data.protocolFeeISS = data.protocolFeeISS.plus(protocolFeeISS)

  // Save and return
  store.set(data as T)
  return data
}

// CURVE INTERVAL DATA
// -----------------------------------------

async function handleCurveIntervalData<T extends CurveIntervalData>({
  event,
  properties,
  intervalType,
  store,
}: Omit<Params<'curve'>, 'context'> & {
  intervalType: IntervalType
  store: Store<T>
}): Promise<Writable<T>> {
  const timestamp = event.block.timestamp
  const {
    // Required
    id,
    collateralToken_id,
    issuanceToken_id,

    // Optional
    priceCOL,
    priceUSD,

    amountCOL,
    amountISS,
    amountUSD,

    projectFeeCOL,
    protocolFeeCOL,
    protocolFeeISS,
  } = properties

  // Calculate interval-specific values
  const intervalData = getIntervalData(intervalType, timestamp)

  const intervalID = `${id}-${intervalData.id}`
  const nonNullPriceCOL = priceCOL || ZERO_BD
  const nonNullPriceUSD = priceUSD || ZERO_BD

  // Fetch or create new entry
  const data =
    ((await store.get(intervalID)) as Writable<T>) ||
    ({
      id: intervalID,
      chainId: event.chainId,

      collateralToken_id,
      issuanceToken_id,

      volumeCOL: ZERO_BD,
      volumeUSD: ZERO_BD,
      volumeISS: ZERO_BD,

      projectFeeCOL: ZERO_BD,
      projectFeeUSD: ZERO_BD,

      protocolFeeUSD: ZERO_BD,
      protocolFeeCOL: ZERO_BD,
      protocolFeeISS: ZERO_BD,

      priceUSD: ZERO_BD,
      priceCOL: ZERO_BD,

      openCOL: nonNullPriceCOL,
      highCOL: nonNullPriceCOL,
      lowCOL: nonNullPriceCOL,
      closeCOL: nonNullPriceCOL,

      openUSD: nonNullPriceUSD,
      highUSD: nonNullPriceUSD,
      lowUSD: nonNullPriceUSD,
      closeUSD: nonNullPriceUSD,
    } satisfies Writable<Omit<CurveIntervalData, 'date' | 'periodStartUnix'>>)

  setStartTime(data, intervalType, intervalData.startTime)

  // Update price data
  if (priceCOL) {
    if (priceCOL.gt(data.highCOL)) data.highCOL = priceCOL
    if (priceCOL.lt(data.lowCOL)) data.lowCOL = priceCOL
    data.closeCOL = priceCOL
    data.priceCOL = priceCOL
  }

  // Update volumes
  if (amountCOL) data.volumeCOL = data.volumeCOL.plus(amountCOL)
  if (amountISS) data.volumeISS = data.volumeISS.plus(amountISS)
  if (amountUSD) data.volumeUSD = data.volumeUSD.plus(amountUSD)

  // Update fees
  if (projectFeeCOL) data.projectFeeCOL = data.projectFeeCOL.plus(projectFeeCOL)
  if (protocolFeeCOL)
    data.protocolFeeCOL = data.protocolFeeCOL.plus(protocolFeeCOL)
  if (protocolFeeISS)
    data.protocolFeeISS = data.protocolFeeISS.plus(protocolFeeISS)

  // Save and return
  store.set(data as T)
  return data
}

// HELPER FUNCTIONS
// -----------------------------------------

function setStartTime(
  data: Writable<any>,
  intervalType: IntervalType,
  timestamp: number
) {
  data[
    {
      day: 'date',
      hour: 'periodStartUnix',
    }[intervalType]
  ] = timestamp
}

function getIntervalData(intervalType: IntervalType, timestamp: number) {
  switch (intervalType) {
    case 'day':
      return {
        id: getDayID(timestamp),
        startTime: getDayStartTimestamp(getDayID(timestamp)),
      }
    case 'hour':
      return {
        id: getHourIndex(timestamp),
        startTime: getHourStartUnix(getHourIndex(timestamp)),
      }
    default:
      throw new Error(`Invalid interval type: ${intervalType}`)
  }
}
