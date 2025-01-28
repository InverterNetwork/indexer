import {
  BondingCurve_t,
  Swap_t,
  ProjectFee_t,
  Token_t,
  ProtocolFee_t,
} from 'generated/src/db/Entities.gen'
import { eventLog, handlerContext } from 'generated'
import { Writable } from 'type-fest'
import { ZERO_BD } from './constants'
import { formatUnitsToBD } from './base'

export const getQtyAndPrice = (
  iss: bigint,
  coll: bigint,

  issuanceToken?: Token_t,
  collateralToken?: Token_t
) => {
  const cDecimals = collateralToken?.decimals
  const iDecimals = issuanceToken?.decimals

  const amountCOL = formatUnitsToBD(coll, cDecimals)
  const amountISS = formatUnitsToBD(iss, iDecimals)

  const priceCOL = amountCOL.div(amountISS)

  return { amountISS, amountCOL, priceCOL }
}

export const updateBondingCurve = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<BondingCurve_t, 'id'>>
  prevData?: BondingCurve_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${address}-${chainId}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.BondingCurve.get(id)) as Writable<BondingCurve_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      address,

      workflow_id: properties?.workflow_id!,

      issuanceToken_id: properties?.issuanceToken_id!,
      collateralToken_id: properties?.collateralToken_id!,

      bcType: undefined,
      buyFee: 0n,
      sellFee: 0n,

      virtualCOL: ZERO_BD,
      virtualISS: ZERO_BD,

      buyReserveRatio: 0n,
      sellReserveRatio: 0n,

      reserveCOL: ZERO_BD,
      reserveUSD: ZERO_BD,

      ...properties,
    } satisfies BondingCurve_t)

  // If required fields are present, update the bonding curve
  if (data.workflow_id && data.collateralToken_id && data.issuanceToken_id) {
    context.BondingCurve.set({
      ...data,
      ...properties,
    })
  }
}

export const createSwap = async ({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Omit<Swap_t, 'id' | 'chainId'>
}) => {
  const chainId = event.chainId
  const id = `${event.block.hash}-${event.logIndex}`

  const swap = { id, chainId, ...properties }

  context.Swap.set(swap)

  return swap
}

export const createProjectFee = async ({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Omit<ProjectFee_t, 'id' | 'chainId'>
}) => {
  const chainId = event.chainId
  const id = `${event.block.hash}-${event.logIndex}`

  const projectFee = { id, chainId, ...properties }

  context.ProjectFee.set(projectFee)

  return projectFee
}

export const createProtocolFee = async ({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Omit<ProtocolFee_t, 'id' | 'chainId'>
}) => {
  const chainId = event.chainId
  const id = `${event.block.hash}-${event.logIndex}`

  const protocolFee = { id, chainId, ...properties }

  context.ProtocolFee.set(protocolFee)

  return protocolFee
}
