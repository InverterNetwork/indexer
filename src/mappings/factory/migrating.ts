import { Migrating_PIM_Factory_v1 } from 'generated'
import { formatUnitsToBD, updateToken } from '../../utils'

Migrating_PIM_Factory_v1.PIMWorkflowCreated.handler(
  async ({ event, context }) => {
    const chainId = event.chainId
    const workflow_id = `${chainId}-${event.params.orchestrator}`
    const workflow = await context.Workflow.get(workflow_id)

    if (!workflow) {
      throw new Error('Workflow not found')
    }

    const id = workflow.fundingManager_id

    const collateralToken = await updateToken({
      context,
      event,
      properties: {
        address: event.params.collateralToken,
      },
      derivedType: 'token',
    })

    const migrationThreshold = formatUnitsToBD(
      event.params.migrationConfig_[1],
      collateralToken.decimals
    )

    context.MigrationConfig.set({
      id,
      isImmutable: event.params.migrationConfig_[0],
      migrationThreshold,
      dexAdapter: event.params.migrationConfig_[2],
      lpTokenRecipient: event.params.migrationConfig_[3],
    })

    context.MigratingPIM.set({
      id,
      chainId,
      address: event.srcAddress,

      workflow_id,

      issuanceToken_id: `${event.chainId}-${event.params.issuanceToken}`,
      collateralToken_id: `${event.chainId}-${event.params.collateralToken}`,

      deployer: event.params.deployer,
      initiator: event.params.initiator,

      migrationConfig_id: id,
      graduation_id: id,
    })
  }
)

Migrating_PIM_Factory_v1.Graduation.handler(async ({ event, context }) => {
  const chainId = event.chainId
  const workflow_id = `${chainId}-${event.params.orchestrator}`
  const workflow = await context.Workflow.get(workflow_id)

  if (!workflow) {
    throw new Error('Workflow not found')
  }

  const id = workflow.fundingManager_id

  const migratingPim = (await context.MigratingPIM.get(id))!
  const issuanceToken = (await context.Token.get(
    migratingPim.issuanceToken_id
  ))!
  const collateralToken = (await context.Token.get(
    migratingPim.collateralToken_id
  ))!

  const issuanceTokenAmount = formatUnitsToBD(
    event.params.issuanceTokenAmount,
    issuanceToken.decimals
  )

  const collateralTokenAmount = formatUnitsToBD(
    event.params.collateralTokenAmount,
    collateralToken.decimals
  )

  context.Graduation.set({
    id,

    issuanceTokenAmount,
    collateralTokenAmount,
    pool: event.params.pool,

    timestamp: event.block.timestamp,
    txHash: event.transaction.hash,
  })
})
