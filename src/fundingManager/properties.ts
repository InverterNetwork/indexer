import { BondingCurve_t } from 'generated/src/db/Entities.gen';

export const optionalBondingCurveProperties: Omit<
  BondingCurve_t,
  'id' | 'chainId'
> = {
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
