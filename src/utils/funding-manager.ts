import {
  BondingCurve_t,
  Swap_t,
  ProjectFee_t,
  Token_t,
  ProtocolFee_t,
} from 'generated/src/db/Entities.gen'
import { BigDecimal, eventLog, handlerContext } from 'generated'
import { formatUnits } from 'viem'

export const getQtyAndPrice = (
  iss: bigint,
  coll: bigint,

  issuanceToken?: Token_t,
  collateralToken?: Token_t
) => {
  const cDecimals = collateralToken?.decimals ?? 18
  const iDecimals = issuanceToken?.decimals ?? 18

  const collateralAmount = BigDecimal(formatUnits(coll, cDecimals))
  const issuanceAmount = BigDecimal(formatUnits(iss, iDecimals))

  const priceInCol = collateralAmount.div(issuanceAmount)

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
    issuanceToken_id: undefined,
    collateralToken_id: undefined,
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
