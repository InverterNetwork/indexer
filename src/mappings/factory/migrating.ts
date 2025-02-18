import { Migrating_PIM_Factory_v1 } from 'generated'
import { formatUnitsToBD } from '../../utils'

Migrating_PIM_Factory_v1.PIMWorkflowCreated.handler(
  async ({ event, context }) => {
    const chainId = event.chainId
    const id = `${chainId}-${event.params.orchestrator}`

    context.MigrationConfig.set({
      id,
      isImmutable: event.params.migrationConfig_[0],
      migrationThreshold: event.params.migrationConfig_[1],
      dexAdapter: event.params.migrationConfig_[2],
      lpTokenRecipient: event.params.migrationConfig_[3],
    })

    context.MigratingPIM.set({
      id,
      chainId,
      address: event.srcAddress,

      workflow_id: `${chainId}-${event.params.orchestrator}`,

      issuanceToken_id: `${event.chainId}-${event.params.issuanceToken}`,
      collateralToken_id: `${event.chainId}-${event.params.collateralToken}`,

      deployer: event.params.deployer,
      initiator: event.params.initiator,

      migrationConfig_id: id,
    })
  }
)

Migrating_PIM_Factory_v1.Graduation.handler(async ({ event, context }) => {
  const chainId = event.chainId
  const id = `${chainId}-${event.params.orchestrator}`

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

    migratingPIM_id: id,

    issuanceTokenAmount,
    collateralTokenAmount,

    timestamp: event.block.timestamp,
    txHash: event.transaction.hash,
  })
})
