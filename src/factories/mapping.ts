import { OrchestratorFactory_v1, ModuleFactory_v1 } from 'generated';

import { getMetadataId, registerModule, storeModule } from './utils';
import { moduleGroups } from '../constants';
import { initBondingCurve } from '../fundingManager/initializers';

// contract register

OrchestratorFactory_v1.OrchestratorCreated.contractRegister(
  ({ event, context }) => {
    context.addOrchestrator_v1(event.params.orchestratorAddress);
  }
);

ModuleFactory_v1.ModuleCreated.contractRegister(
  ({ event, context }) => {
    const [, , , name] = event.params.metadata;
    registerModule(context, name, event);
  }
);

// event handlers

ModuleFactory_v1.MetadataRegistered.handler(
  async ({ event, context }) => {
    const [majorVersion, minorVersion, url, name] =
      event.params.metadata;
    const newModuleType = {
      id: getMetadataId(event.params.metadata),
      majorVersion,
      minorVersion,
      url,
      name,
      beacon: event.params.beacon,
    };
    context.WorkflowModuleType.set(newModuleType);
  }
);
