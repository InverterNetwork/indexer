import { AUT_Roles_v1 } from 'generated'
import { updateRole } from '../../utils/authorizer'

// ============================================================================
// Module Initialization
// ============================================================================

AUT_Roles_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`
  const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`

  context.AutRoles.set({
    id,
    address: event.srcAddress,
    chainId: event.chainId,

    workflow_id,
  })
})

// Grant / Revoke Role

AUT_Roles_v1.RoleGranted.handler(async ({ event, context }) => {
  const module_id = `${event.chainId}-${event.srcAddress}`

  const roleGen = event.params.role
  const recipient = event.params.account
  const initiator = event.params.sender

  updateRole({
    event,
    context,
    properties: {
      module_id,
      status: 'GRANTED',
      roleGen,
      recipient,
      initiator,
      timestamp: event.block.timestamp,
      txHash: event.transaction.hash,
    },
  })
})

AUT_Roles_v1.RoleRevoked.handler(async ({ event, context }) => {
  const module_id = `${event.chainId}-${event.srcAddress}`

  const roleGen = event.params.role
  const recipient = event.params.account
  const initiator = event.params.sender

  updateRole({
    event,
    context,
    properties: {
      module_id,
      status: 'REVOKED',
      roleGen,
      recipient,
      initiator,
      timestamp: event.block.timestamp,
      txHash: event.transaction.hash,
    },
  })
})
