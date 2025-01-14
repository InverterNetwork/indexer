import {
  eventLog,
  handlerContext,
  IssuanceTokenDayData,
  IssuanceTokenHourData,
} from "generated";

import { ZERO_BD } from "./constants";
import { Writable } from "type-fest";

export async function updateIssuanceTokenDayData(
  event: eventLog<any>,
  context: handlerContext,
  address: string,
  priceInCol: bigint
): Promise<IssuanceTokenDayData> {
  const timestamp = event.block.timestamp;
  const dayID = timestamp / 86400;
  const dayStartTimestamp = dayID * 86400;

  const token = (await context.Token.get(address))!;

  const tokenDayID = `${token.address}-${dayID}`;

  const tokenDayData = (structuredClone(
    await context.IssuanceTokenDayData.get(tokenDayID)
  ) as Writable<IssuanceTokenDayData>) || {
    date: dayStartTimestamp,
    token_id: `${event.chainId}-${address}`,
    volumeInCol: ZERO_BD,
    volumeInUSD: ZERO_BD,
    feesInCol: ZERO_BD,
    untrackedVolumeInUSD: ZERO_BD,
    openInCol: priceInCol,
    highInCol: priceInCol,
    lowInCol: priceInCol,
    closeInCol: priceInCol,
  };

  if (priceInCol > tokenDayData.highInCol) {
    tokenDayData.highInCol = priceInCol;
  }

  if (priceInCol < tokenDayData.lowInCol) {
    tokenDayData.lowInCol = priceInCol;
  }

  tokenDayData.closeInCol = priceInCol;

  context.IssuanceTokenDayData.set(tokenDayData);

  return tokenDayData;
}

export async function updateTokenHourData(
  event: eventLog<any>,
  context: handlerContext,
  address: string,
  priceInCol: bigint
): Promise<IssuanceTokenHourData> {
  const timestamp = event.block.timestamp;
  const hourIndex = timestamp / 3600; // get unique hour within unix history
  const hourStartUnix = hourIndex * 3600; // want the rounded effect
  const tokenHourID = `${address}-${hourIndex}`;

  const tokenHourData = (structuredClone(
    await context.IssuanceTokenHourData.get(tokenHourID)
  ) as Writable<IssuanceTokenHourData>) || {
    periodStartUnix: hourStartUnix,
    token_id: `${event.chainId}-${address}`,
    volumeInCol: ZERO_BD,
    volumeInUSD: ZERO_BD,
    untrackedVolumeInUSD: ZERO_BD,
    feesInCol: ZERO_BD,
    openInCol: priceInCol,
    highInCol: priceInCol,
    lowInCol: priceInCol,
    closeInCol: priceInCol,
  };

  if (priceInCol > tokenHourData.highInCol) {
    tokenHourData.highInCol = priceInCol;
  }

  if (priceInCol < tokenHourData.lowInCol) {
    tokenHourData.lowInCol = priceInCol;
  }

  tokenHourData.closeInCol = priceInCol;

  context.IssuanceTokenHourData.set(tokenHourData);

  return tokenHourData;
}
