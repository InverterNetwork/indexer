import {
  BondingCurve_t,
  Swap_t,
} from 'generated/src/db/Entities.gen';
import { OptionalBondingCurveProperties } from './types';
import { optionalBondingCurveProperties } from './properties';
import { handlerContext } from 'generated';
import { uintToFloat } from '../utils';

export const getQtyAndPrice = async (
  iss: bigint,
  coll: bigint,
  bc: BondingCurve_t
) => {
  const issuanceAmount = uintToFloat(
    iss,
    parseInt(bc!.issuanceTokenDecimals!.toString())
  );

  const collateralAmount = uintToFloat(
    coll,
    parseInt(bc!.collateralTokenDecimals!.toString())
  );

  const priceInCol = parseFloat(
    (collateralAmount / issuanceAmount).toFixed(4)
  );

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
  id: string,
  properties: OptionalBondingCurveProperties
) => {
  const currentEntity = await context.BondingCurve.get(id);
  context.BondingCurve.set({
    ...currentEntity!,
    ...properties,
  });
};

export const createBondingCurve = async (
  context: handlerContext,
  id: string,
  properties: OptionalBondingCurveProperties
) => {
  context.BondingCurve.set({
    id,
    ...optionalBondingCurveProperties,
    ...properties,
  });
};

export const createSwap = async (
  context: handlerContext,
  id: string,
  properties: Omit<Swap_t, 'id'>
) => {
  context.Swap.set({
    id,
    ...properties,
  });
};
