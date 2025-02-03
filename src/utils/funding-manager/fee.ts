import { handlerContext, eventLog } from 'generated'
import { ProjectFee_t, ProtocolFee_t } from 'generated/src/db/Entities.gen'

export const createProjectFee = async ({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Omit<ProjectFee_t, 'id' | 'chainId'>
}) => {
  const chainId = event.chainId
  const id = `${chainId}-${event.transaction.hash}`

  const projectFee = { id, chainId, ...properties }

  context.ProjectFee.set(projectFee)

  return projectFee
}

export const createProtocolFee = async ({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Omit<ProtocolFee_t, 'id' | 'chainId'>
}) => {
  const chainId = event.chainId
  const id = `${chainId}-${event.transaction.hash}-${properties.source}`

  const protocolFee = { id, chainId, ...properties }

  context.ProtocolFee.set(protocolFee)

  return protocolFee
}
