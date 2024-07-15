import { formatUnits } from 'viem';

import { BondingCurve_t } from 'generated/src/db/Entities.gen';

export const getQtyAndPrice = async (
  iss: bigint,
  coll: bigint,
  bc: BondingCurve_t
) => {
  const issuanceAmount = formatUnits(
    iss,
    parseInt(bc!.issuanceTokenDecimals!.toString())
  );

  const collateralAmount = formatUnits(
    coll,
    parseInt(bc!.collateralTokenDecimals!.toString())
  );

  const priceInCol = (
    parseFloat(issuanceAmount) / parseFloat(collateralAmount)
  ).toFixed(4);

  return { issuanceAmount, collateralAmount, priceInCol };
};
