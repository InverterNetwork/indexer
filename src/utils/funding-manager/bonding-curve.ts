import { eventLog, handlerContext } from 'generated'
import { BondingCurve_t } from 'generated/src/db/Entities.gen'
import { Writable } from 'type-fest'
import { ZERO_BD } from '../constants'

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

  const id = `${chainId}-${address}`

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
