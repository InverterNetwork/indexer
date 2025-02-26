import {
  BondingCurve,
  handlerContext,
  BondingCurve_VirtualIssuanceSupplySet_event,
  BondingCurve_VirtualIssuanceAmountAdded_event,
  BondingCurve_VirtualIssuanceAmountSubtracted_event,
  BondingCurve_VirtualCollateralSupplySet_event,
  BondingCurve_VirtualCollateralAmountAdded_event,
  BondingCurve_VirtualCollateralAmountSubtracted_event,
} from 'generated'

import { formatUnitsToBD, updateBondingCurve } from '../../../utils'

// ============================================================================
// Virtual Supply Management Handlers
// ============================================================================

// ISSUANCE TOKEN
// ----------------------------------------------------------------------------

/**
 * Handles the virtual issuance supply set, added, and subtracted events.
 * @param event
 * @param context
 */
const handleVirtualIssuanceSupply = async ({
  event,
  context,
}: {
  event:
    | BondingCurve_VirtualIssuanceSupplySet_event
    | BondingCurve_VirtualIssuanceAmountAdded_event
    | BondingCurve_VirtualIssuanceAmountSubtracted_event

  context: handlerContext
}) => {
  const id = `${event.chainId}-${event.srcAddress}`
  const bc = await context.BondingCurve.get(id)

  const issuanceToken_id = bc!.issuanceToken_id
  const issuanceToken = await context.Token.get(issuanceToken_id)

  const virtualISS = formatUnitsToBD(
    event.params.newSupply,
    issuanceToken?.decimals
  )

  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualISS,
    },
  })
}

BondingCurve.VirtualIssuanceSupplySet.handler(handleVirtualIssuanceSupply)

BondingCurve.VirtualIssuanceAmountAdded.handler(handleVirtualIssuanceSupply)

BondingCurve.VirtualIssuanceAmountSubtracted.handler(
  handleVirtualIssuanceSupply
)

// COLLATERAL TOKEN
// ----------------------------------------------------------------------------

/**
 * Handles the virtual collateral supply set, added, and subtracted events.
 * @param event
 * @param context
 */
const handleVirtualCollateralSupply = async ({
  event,
  context,
}: {
  event:
    | BondingCurve_VirtualCollateralSupplySet_event
    | BondingCurve_VirtualCollateralAmountAdded_event
    | BondingCurve_VirtualCollateralAmountSubtracted_event

  context: handlerContext
}) => {
  const id = `${event.chainId}-${event.srcAddress}`
  const bc = await context.BondingCurve.get(id)

  const collateralToken_id = bc!.collateralToken_id
  const collateralToken = await context.Token.get(collateralToken_id)

  const virtualCOL = formatUnitsToBD(
    event.params.newSupply,
    collateralToken?.decimals
  )

  await updateBondingCurve({
    context,
    event,
    properties: {
      virtualCOL,
    },
  })
}

BondingCurve.VirtualCollateralSupplySet.handler(handleVirtualCollateralSupply)

BondingCurve.VirtualCollateralAmountAdded.handler(handleVirtualCollateralSupply)

BondingCurve.VirtualCollateralAmountSubtracted.handler(
  handleVirtualCollateralSupply
)
