import {
  BondingCurve_t,
  Swap_t,
  ProjectFee_t,
  Token_t,
  ProtocolFee_t,
} from 'generated/src/db/Entities.gen'
import { BigDecimal, eventLog, handlerContext } from 'generated'
import { formatUnits } from 'viem'
import { Writable } from 'type-fest'

export const getQtyAndPrice = (
  iss: bigint,
  coll: bigint,

  issuanceToken?: Token_t,
  collateralToken?: Token_t
) => {
  const cDecimals = collateralToken?.decimals ?? 18
  const iDecimals = issuanceToken?.decimals ?? 18

  const amountCOL = BigDecimal(formatUnits(coll, cDecimals))
  const amountISS = BigDecimal(formatUnits(iss, iDecimals))

  const priceCOL = amountCOL.div(amountISS)

  return { amountISS, amountCOL, priceCOL }
}

export const updateBondingCurve = async ({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<BondingCurve_t, 'id'>>
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${address}-${chainId}`

  const data =
    ((await context.BondingCurve.get(id)) as Writable<BondingCurve_t>) ||
    ({
      id,
      chainId,
      address,

      workflow_id: properties?.workflow_id!,

      issuanceToken_id: properties?.issuanceToken_id!,
      collateralToken_id: properties?.collateralToken_id!,

      bcType: undefined,
      buyFee: undefined,
      sellFee: undefined,

      virtualCOL: undefined,
      virtualISS: undefined,

      buyReserveRatio: undefined,
      sellReserveRatio: undefined,

      ...properties,
    } satisfies BondingCurve_t)

  if (data.workflow_id && data.collateralToken_id && data.issuanceToken_id) {
    context.BondingCurve.set(data)
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

  context.Swap.set({
    id,
    chainId,
    ...properties,
  })
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

  context.ProjectFee.set({
    id,
    chainId,
    ...properties,
  })
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

  context.ProtocolFee.set({ id, chainId, ...properties })
}
