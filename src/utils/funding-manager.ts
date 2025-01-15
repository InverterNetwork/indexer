import {
  BondingCurve_t,
  Swap_t,
  FeeClaim_t,
} from 'generated/src/db/Entities.gen'
import { eventLog, handlerContext } from 'generated'
import { uintToFloat } from '../utils'

export const getQtyAndPrice = async (
  iss: bigint,
  coll: bigint,
  bc: BondingCurve_t
) => {
  const issuanceAmount = uintToFloat(
    iss,
    parseInt(bc!.issuanceTokenDecimals!.toString())
  )

  const collateralAmount = uintToFloat(
    coll,
    parseInt(bc!.collateralTokenDecimals!.toString())
  )

  const priceInCol = parseFloat((collateralAmount / issuanceAmount).toFixed(4))

  return { issuanceAmount, collateralAmount, priceInCol }
}

export const updateBondingCurve = async ({
  event,
  context,
  properties = {
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
  },
  workflow_id,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<BondingCurve_t, 'id' | 'chainId' | 'workflow_id'>>
  workflow_id?: string
}) => {
  const { chainId, srcAddress: id } = event

  let currentEntity: BondingCurve_t | null = null

  if (!workflow_id) {
    currentEntity = (await context.BondingCurve.get(event.srcAddress)) ?? null
  }

  if (currentEntity) {
    // Update scenario
    context.BondingCurve.set({
      ...currentEntity,
      ...properties,
    })
  } else if (typeof workflow_id === 'string' && properties.bcType) {
    // Create scenario
    context.BondingCurve.set({
      id,
      chainId,
      workflow_id,
      ...(properties as Required<typeof properties>),
    })
  }
}

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
  })
}

export const createFeeClaim = async (
  context: handlerContext,
  id: string,
  chainId: number,
  properties: Omit<FeeClaim_t, 'id' | 'chainId'>
) => {
  context.FeeClaim.set({
    id,
    chainId,
    ...properties,
  })
}
