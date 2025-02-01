import { OrchestratorFactory_v1, Orchestrator_v1 } from 'generated'

// contract register

OrchestratorFactory_v1.OrchestratorCreated.contractRegister(
  ({ event, context }) => {
    context.addOrchestrator_v1(event.params.orchestratorAddress)
  }
)

Orchestrator_v1.OrchestratorInitialized.handler(async ({ event, context }) => {
  const address = event.srcAddress
  const id = `${event.chainId}-${address}`

  const orchestrator = event.params.orchestratorId_.toString()

  const fundingManager_id = `${event.chainId}-${event.params.fundingManager}`
  const authorizer_id = `${event.chainId}-${event.params.authorizer}`
  const paymentProcessor_id = `${event.chainId}-${event.params.paymentProcessor}`

  context.Workflow.set({
    id,
    chainId: event.chainId,
    address,

    orchestrator,
    fundingManager_id,
    authorizer_id,
    paymentProcessor_id,
    optionalModules: event.params.modules,
  })
})
