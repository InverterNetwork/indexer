import { formatUnits } from 'viem';

import { BondingCurve_t } from 'generated/src/db/Entities.gen';
import { OptionalBondingCurveProperties } from './types';
import { optionalParams } from './schema';
import { handlerContext } from 'generated';

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
    parseFloat(collateralAmount) / parseFloat(issuanceAmount)
  ).toFixed(4);

  return { issuanceAmount, collateralAmount, priceInCol };
};

export const updateOrSetBondingCurve = async (
  context: handlerContext,
  srcAddress: string,
  properties: OptionalBondingCurveProperties
) => {
  const currentEntity = await context.BondingCurve.get(srcAddress);
  if (currentEntity) {
    await updateBondingCurve(context, srcAddress, properties);
  } else {
    await createBondingCurve(context, srcAddress, properties);
  }
};

export const updateBondingCurve = async (
  context: handlerContext,
  srcAddress: string,
  properties: OptionalBondingCurveProperties
) => {
  const currentEntity = await context.BondingCurve.get(srcAddress);
  context.BondingCurve.set({
    ...currentEntity!,
    ...properties,
  });
};

export const createBondingCurve = async (
  context: handlerContext,
  srcAddress: string,
  properties: OptionalBondingCurveProperties
) => {
  context.BondingCurve.set({
    ...optionalParams,
    ...properties,
    id: srcAddress,
  });
};

export const uintToFloat = (amount: bigint, decimals: number) => {
  return parseFloat(formatUnits(amount, decimals));
};
