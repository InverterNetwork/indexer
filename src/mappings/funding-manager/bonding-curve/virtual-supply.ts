import { BondingCurve } from 'generated'

import {
  formatUnitsToBD,
  handlerErrorWrapper,
  updateBondingCurve,
} from '../../../utils'

// ============================================================================
// Virtual Supply Management Handlers
// ============================================================================

// ISSUANCE TOKEN
// ----------------------------------------------------------------------------

BondingCurve.VirtualIssuanceSupplySet.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)

BondingCurve.VirtualIssuanceAmountAdded.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)

BondingCurve.VirtualIssuanceAmountSubtracted.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)

// COLLATERAL TOKEN
// ----------------------------------------------------------------------------

BondingCurve.VirtualCollateralSupplySet.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)

BondingCurve.VirtualCollateralAmountAdded.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)

BondingCurve.VirtualCollateralAmountSubtracted.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)
