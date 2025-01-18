import { OrchestratorFactory_v1, Orchestrator_v1 } from 'generated'

// contract register

OrchestratorFactory_v1.OrchestratorCreated.contractRegister(
  ({ event, context }) => {
    context.addOrchestrator_v1(event.params.orchestratorAddress)
  }
)

Orchestrator_v1.OrchestratorInitialized.handler(async ({ event, context }) => {
  const orchestrator = event.params.orchestratorId_.toString()
  const id = `${orchestrator}-${event.chainId}`

  context.Workflow.set({
    id,
    chainId: event.chainId,

    orchestrator,
    fundingManager_id: event.params.fundingManager,
    authorizer_id: event.params.authorizer,
    paymentProcessor_id: event.params.paymentProcessor,
    optionalModules: event.params.modules,
  })
})
