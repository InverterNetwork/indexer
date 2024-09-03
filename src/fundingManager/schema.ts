import { BondingCurve_t } from 'generated/src/db/Entities.gen';

export const optionalParams: Omit<BondingCurve_t, 'id'> = {
  bcType: undefined,
  orchestrator: undefined,
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
};

export const swap = {
  id: undefined,
  swapType: undefined,
  bondingCurve_id: undefined,
  issuanceAmount: undefined,
  issuanceToken: undefined,
  collateralAmount: undefined,
  collateralToken: undefined,
  initiator: undefined,
  recipient: undefined,
  priceInCol: undefined,
  blockTimestamp: undefined,
};
