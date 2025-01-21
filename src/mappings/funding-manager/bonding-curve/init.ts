import { BondingCurve } from 'generated'

import { updateBondingCurve, updateToken } from '../../../utils'

// ============================================================================
// Module Initialization
// ============================================================================

BondingCurve.ModuleInitialized.handler(async ({ event, context }) => {
  const address = event.srcAddress
  const workflow_id = `${event.params.parentOrchestrator}-${event.chainId}`

  const { id: collateralToken_id } = await updateToken({
    event,
    context,
    properties: {
      address,
    },
    singleType: 'token',
  })

  const { id: issuanceToken_id } = await updateToken({
    event,
    context,
    properties: {
      address,
    },
    singleType: 'issuance',
  })

  const bcType =
    event.params.metadata[3] ===
    'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1'
      ? 'RESTRICTED'
      : 'OPEN'

  await updateBondingCurve({
    context,
    event,
    properties: {
      workflow_id,
      collateralToken_id,
      issuanceToken_id,

      bcType,
    },
  })
})
