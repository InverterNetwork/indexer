import { AUT_Roles_v1 } from 'generated'
import { updateRole } from '../../utils/authorizer'

// ============================================================================
// Module Initialization
// ============================================================================

AUT_Roles_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const id = `${event.srcAddress}-${event.chainId}`
  const workflow_id = `${event.params.parentOrchestrator}-${event.chainId}`

  context.AutRoles.set({
    id,
    address: event.srcAddress,
    chainId: event.chainId,

    workflow_id,
  })
})

// Grant / Revoke Role

AUT_Roles_v1.RoleGranted.handler(async ({ event, context }) => {
  const module_id = `${event.srcAddress}-${event.chainId}`

  const role = event.params.role
  const recipient = event.params.account
  const initiator = event.params.sender

  updateRole({
    event,
    context,
    properties: {
      module_id,
      status: 'GRANTED',
      role,
      recipient,
      initiator,
    },
  })
})

AUT_Roles_v1.RoleRevoked.handler(async ({ event, context }) => {
  const module_id = `${event.srcAddress}-${event.chainId}`
  const role = event.params.role

  updateRole({
    event,
    context,
    properties: {
      module_id,
      status: 'REVOKED',
      role,
    },
  })
})
