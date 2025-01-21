import './init'
import './swap'
import './fee'
import './virtual-supply'

import { BondingCurve } from 'generated'
import { updateBondingCurve } from '../../../utils'

// ============================================================================
// Reserve Ratio Configuration Handlers
// ============================================================================

BondingCurve.BuyReserveRatioSet.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      buyReserveRatio: event.params.newBuyReserveRatio,
    },
  })
})

BondingCurve.SellReserveRatioSet.handler(async ({ event, context }) => {
  await updateBondingCurve({
    context,
    event,
    properties: {
      sellReserveRatio: event.params.newSellReserveRatio,
    },
  })
})

// ============================================================================
// Token Configuration Handlers
// ============================================================================

// Issuance Token Setup // Nothing to do here for now
// BondingCurve.IssuanceTokenSet.handler(async ({ event, context }) => {})

// Collateral Token Setup // Nothing to do here for now
// BondingCurve.OrchestratorTokenSet.handler(async ({ event, context }) => {})
