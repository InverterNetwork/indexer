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

// -----------------------------------------
// TYPES
// -----------------------------------------

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

export function updateIssuanceTokenDayData({
  context,
  ...params
}: Params): Promise<IssuanceTokenDayData> {
  return handleIntervalData<IssuanceTokenDayData>({
    ...params,
    intervalType: 'day',
    store: context.IssuanceTokenDayData,
  })
}

export function updateIssuanceTokenHourData({
  context,
  ...params
}: Params): Promise<IssuanceTokenHourData> {
  return handleIntervalData<IssuanceTokenHourData>({
    ...params,
    intervalType: 'hour',
    store: context.IssuanceTokenHourData,
  })
}

export function updateIssuanceTokenTotalData({
  context,
  ...params
}: Params): Promise<IssuanceTokenDayData> {
  return handleIntervalData<IssuanceTokenDayData>({
    ...params,
    intervalType: 'total',
    store: context.IssuanceTokenDayData,
  })
}

// -----------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------

type IntervalData = IssuanceTokenDayData | IssuanceTokenHourData
type IntervalType = 'hour' | 'day' | 'total'

interface IntervalParams<T> extends Omit<Params, 'context'> {
  intervalType: IntervalType
  store: {
    get: (id: string) => Promise<T | undefined>
    set: (data: T) => void
  }
}

async function handleIntervalData<T extends IntervalData>({
  event,
  properties,
  intervalType,
  store,
}: IntervalParams<T>): Promise<Writable<T>> {
  const timestamp = event.block.timestamp
  const {
    address,
    priceInCol,
    collateralAmount,
    issuanceAmount,
    projectFeeInCol,
    protocolFeeInCol,
    protocolFeeInIssuance,
  } = properties

  // Calculate interval-specific values
  let intervalData: { id: string | number; startTime: number }

  switch (intervalType) {
    case 'total':
      intervalData = {
        id: 'total',
        startTime: 0,
      }
      break
    case 'day':
      intervalData = {
        id: getDayID(timestamp),
        startTime: getDayStartTimestamp(getDayID(timestamp)),
      }
      break
    case 'hour':
      intervalData = {
        id: getHourIndex(timestamp),
        startTime: getHourStartUnix(getHourIndex(timestamp)),
      }
      break
    default:
      throw new Error(`Invalid interval type: ${intervalType}`)
  }

  const token_id = `${address}-${event.chainId}`
  const intervalID =
    intervalType === 'total' ? token_id : `${token_id}-${intervalData.id}`
  const nonNullPriceInCol = priceInCol || ZERO_BD

  // Fetch or create new entry
  const data = ((await store.get(intervalID)) as Writable<T>) || {
    id: intervalID,
    chainId: event.chainId,
    [intervalType === 'day' ? 'date' : 'periodStartUnix']:
      intervalData.startTime,
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

  // Update price data
  if (priceInCol) {
    if (priceInCol.gt(data.highInCol)) data.highInCol = priceInCol
    if (priceInCol.lt(data.lowInCol)) data.lowInCol = priceInCol
    data.closeInCol = priceInCol
    data.priceInCol = priceInCol
  }

  // Update volumes
  if (collateralAmount)
    data.volumeInCol = data.volumeInCol.plus(collateralAmount)
  if (issuanceAmount)
    data.volumeInIssuance = data.volumeInIssuance.plus(issuanceAmount)

  // Update fees
  if (projectFeeInCol)
    data.projectFeeInCol = data.projectFeeInCol.plus(projectFeeInCol)
  if (protocolFeeInCol)
    data.protocolFeeInCol = data.protocolFeeInCol.plus(protocolFeeInCol)
  if (protocolFeeInIssuance)
    data.protocolFeeInIssuance = data.protocolFeeInIssuance.plus(
      protocolFeeInIssuance
    )

  // Save and return
  store.set(data as T)
  return data
}
