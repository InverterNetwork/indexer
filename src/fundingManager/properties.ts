import { OptionalBondingCurveProperties } from "./types";

export const optionalBondingCurveProperties = {
  bcType: undefined,
  buyFee: undefined,
  sellFee: undefined,
  virtualCollateral: undefined,
  virtualCollateralRaw: undefined,
  virtualIssuance: undefined,
  buyReserveRatio: undefined,
  sellReserveRatio: undefined,
  issuanceToken: undefined,
  issuanceTokenDecimals: undefined,
  collateralToken: undefined,
  collateralTokenDecimals: undefined,
} satisfies OptionalBondingCurveProperties;
