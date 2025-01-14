import { eventLog, handlerContext } from "generated";

import { ZERO_BD } from "./constants";

export function updateIssuanceTokenDayData(
  event: eventLog<any>,
  context: handlerContext
): handlerContext["IssuanceTokenDayData"] {
  const timestamp = event.block.timestamp;
  const dayID = timestamp / 86400;
  const dayStartTimestamp = dayID * 86400;
  const tokenDayID = token.id.toString().concat("-").concat(dayID.toString());
  const tokenPrice = token.derivedETH.times(bundle.ethPriceUSD);

  let tokenDayData = context.IssuanceTokenDayData.get(tokenDayID);
  if (tokenDayData === null) {
    tokenDayData = new TokenDayData(tokenDayID);
    tokenDayData.date = dayStartTimestamp;
    tokenDayData.token = token.id;
    tokenDayData.volume = ZERO_BD;
    tokenDayData.volumeUSD = ZERO_BD;
    tokenDayData.feesUSD = ZERO_BD;
    tokenDayData.untrackedVolumeUSD = ZERO_BD;
    tokenDayData.open = tokenPrice;
    tokenDayData.high = tokenPrice;
    tokenDayData.low = tokenPrice;
    tokenDayData.close = tokenPrice;
  }

  if (tokenPrice.gt(tokenDayData.high)) {
    tokenDayData.high = tokenPrice;
  }

  if (tokenPrice.lt(tokenDayData.low)) {
    tokenDayData.low = tokenPrice;
  }

  tokenDayData.close = tokenPrice;
  tokenDayData.priceUSD = token.derivedETH.times(bundle.ethPriceUSD);
  tokenDayData.totalValueLocked = token.totalValueLocked;
  tokenDayData.totalValueLockedUSD = token.totalValueLockedUSD;
  tokenDayData.save();

  return tokenDayData;
}

export function updateTokenHourData(
  token: Token,
  event: ethereum.Event
): TokenHourData {
  const bundle = Bundle.load("1")!;
  const timestamp = event.block.timestamp.toI32();
  const hourIndex = timestamp / 3600; // get unique hour within unix history
  const hourStartUnix = hourIndex * 3600; // want the rounded effect
  const tokenHourID = token.id
    .toString()
    .concat("-")
    .concat(hourIndex.toString());
  let tokenHourData = TokenHourData.load(tokenHourID);
  const tokenPrice = token.derivedETH.times(bundle.ethPriceUSD);

  if (tokenHourData === null) {
    tokenHourData = new TokenHourData(tokenHourID);
    tokenHourData.periodStartUnix = hourStartUnix;
    tokenHourData.token = token.id;
    tokenHourData.volume = ZERO_BD;
    tokenHourData.volumeUSD = ZERO_BD;
    tokenHourData.untrackedVolumeUSD = ZERO_BD;
    tokenHourData.feesUSD = ZERO_BD;
    tokenHourData.open = tokenPrice;
    tokenHourData.high = tokenPrice;
    tokenHourData.low = tokenPrice;
    tokenHourData.close = tokenPrice;
  }

  if (tokenPrice.gt(tokenHourData.high)) {
    tokenHourData.high = tokenPrice;
  }

  if (tokenPrice.lt(tokenHourData.low)) {
    tokenHourData.low = tokenPrice;
  }

  tokenHourData.close = tokenPrice;
  tokenHourData.priceUSD = tokenPrice;
  tokenHourData.totalValueLocked = token.totalValueLocked;
  tokenHourData.totalValueLockedUSD = token.totalValueLockedUSD;
  tokenHourData.save();

  return tokenHourData as TokenHourData;
}
