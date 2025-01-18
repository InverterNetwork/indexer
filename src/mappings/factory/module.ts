import { ModuleFactory_v1 } from 'generated'

import { getMetadataId, registerModule } from '../../utils'

// contract register

ModuleFactory_v1.ModuleCreated.contractRegister(({ event, context }) => {
  const [, , , , name] = event.params.metadata
  registerModule(context, name, event)
})

// Register when new modules are registered

ModuleFactory_v1.MetadataRegistered.handler(async ({ event, context }) => {
  const [majorVersion, minorVersion, patchVersion, url, name] =
    event.params.metadata
  context.WorkflowModuleType.set({
    id: getMetadataId(majorVersion, url, name),
    majorVersion,
    minorVersion,
    patchVersion,
    url,
    name,
    beacon: event.params.beacon,
    chainId: event.chainId,
  })
})

ModuleFactory_v1.ModuleCreated.handler(async ({ event, context }) => {
  const chainId = event.chainId
  const address = event.params.m.toString()
  const id = `${address}-${chainId}`

  const [majorVersion, , , url, name] = event.params.metadata
  const moduleType_id = getMetadataId(majorVersion, url, name)

  context.WorkflowModule.set({
    id,
    chainId: event.chainId,
    address,

    orchestrator: event.params.orchestrator,
    moduleType_id,
  })
})
