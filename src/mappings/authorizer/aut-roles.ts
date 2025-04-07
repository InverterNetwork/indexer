import { AUT_Roles_v1 } from 'generated'
import { updateRole } from '../../utils/authorizer'
import { handlerErrorWrapper } from '../../utils'

// ============================================================================
// Module Initialization
// ============================================================================

AUT_Roles_v1.ModuleInitialized.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`

    context.AutRoles.set({
      id,
      address: event.srcAddress,
      chainId: event.chainId,

      workflow_id,
    })
  })
)

// Grant / Revoke Role

AUT_Roles_v1.RoleGranted.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const module_id = `${event.chainId}-${event.srcAddress}`

    const roleGen = event.params.role
    const recipient = event.params.account
    const initiator = event.params.sender

    const id = `${module_id}-${roleGen}-${recipient}`

    await updateRole({
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

    const authRole = await context.AutRoles.get(module_id)!
    const role = (await context.Role.get(id))!

    const historicalId = `${module_id}-${event.transaction.hash}`
    context.HistoricalRole.set({
      id: historicalId,
      historyType: 'ROLE',
      relatedId: authRole?.workflow_id!,
      initiator,
      recipient,
      role: role?.roleName! || roleGen,
      status: 'GRANTED',
      timestamp: event.block.timestamp,
      txHash: event.block.hash,
    })
  })
)

AUT_Roles_v1.RoleRevoked.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const module_id = `${event.chainId}-${event.srcAddress}`

    const roleGen = event.params.role
    const recipient = event.params.account
    const initiator = event.params.sender

    await updateRole({
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

    const id = `${module_id}-${roleGen}-${recipient}`
    const authRole = await context.AutRoles.get(module_id)!
    const role = (await context.Role.get(id))!

    const historicalId = `${module_id}-${event.transaction.hash}`
    context.HistoricalRole.set({
      id: historicalId,
      historyType: 'ROLE',
      relatedId: authRole?.workflow_id!,
      initiator,
      recipient,
      role: role?.roleName! || roleGen,
      status: 'REVOKED',
      timestamp: event.block.timestamp,
      txHash: event.block.hash,
    })
  })
)
