import { eventLog, handlerContext } from 'generated'

export async function updateToken({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: {
    address: string
    decimals?: number
  }
}) {
  const chainId = event.chainId
  const id = `${properties.address}-${chainId}`
  const currentEntity = await context.Token.get(id)

  context.Token.set({
    ...currentEntity!,
    ...properties,
    chainId,
    id,
  })

  return id
}
