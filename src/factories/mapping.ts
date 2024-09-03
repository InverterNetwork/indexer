import {
  OrchestratorFactory_v1,
  ModuleFactory_v1,
  Orchestrator_v1,
} from 'generated';

import { getMetadataId, registerModule } from './utils';
import { workflow } from './schema';

// contract register

OrchestratorFactory_v1.OrchestratorCreated.contractRegister(
  ({ event, context }) => {
    context.addOrchestrator_v1(event.params.orchestratorAddress);
  }
);

ModuleFactory_v1.ModuleCreated.contractRegister(
  ({ event, context }) => {
    const [, , , , name] = event.params.metadata;
    registerModule(context, name, event);
  }
);

// Register when new modules are registered

ModuleFactory_v1.MetadataRegistered.handler(
  async ({ event, context }) => {
    const [majorVersion, minorVersion, patchVersion, url, name] =
      event.params.metadata;
    const newModuleType = {
      id: getMetadataId(majorVersion, url, name),
      majorVersion,
      minorVersion,
      patchVersion,
      url,
      name,
      beacon: event.params.beacon,
    };
    context.WorkflowModuleType.set(newModuleType);
  }
);

ModuleFactory_v1.ModuleCreated.handler(async ({ event, context }) => {
  const [majorVersion, , , url, name] = event.params.metadata;
  const newModule = {
    ...module,
    id: event.params.m.toString(),
    orchestrator: event.params.orchestrator,
    moduleType_id: getMetadataId(majorVersion, url, name),
  };
  context.WorkflowModule.set(newModule);
});

Orchestrator_v1.OrchestratorInitialized.handler(
  async ({ event, context }) => {
    const newWorkflow = {
      ...workflow,
      id: event.srcAddress.toString(),
      orchestratorId: event.params.orchestratorId_,
      fundingManager_id: event.params.fundingManager,
      authorizer_id: event.params.authorizer,
      paymentProcessor_id: event.params.paymentProcessor,
      optionalModules: event.params.modules,
    };
    context.Workflow.set(newWorkflow);
  }
);
