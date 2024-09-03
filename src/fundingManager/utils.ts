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
  chainId: number,
  properties: OptionalBondingCurveProperties
) => {
  context.BondingCurve.set({
    id,
    chainId,
    ...optionalBondingCurveProperties,
    ...properties,
  });
};

export const createSwap = async (
  context: handlerContext,
  id: string,
  chainId: number,
  properties: Omit<Swap_t, 'id' | 'chainId'>
) => {
  context.Swap.set({
    id,
    chainId,
    ...properties,
  });
};
