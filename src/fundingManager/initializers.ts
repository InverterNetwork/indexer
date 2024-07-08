interface MandatoryBcParams {
  id: string;
  name: string;
  orchestrator: string;
}

export const initBondingCurve = (
  mandatoryParams: MandatoryBcParams
) => {
  const { id, name, orchestrator } = mandatoryParams;
  return {
    id,
    bcType:
      name === 'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1'
        ? 'restricted'
        : 'open',
    orchestrator,
    buyFee: undefined,
    sellFee: undefined,
    virtualCollateral: undefined,
    virtualIssuance: undefined,
    buyReserveRatio: undefined,
    sellReserveRatio: undefined,
    issuanceToken: undefined,
  };
};
