import { eventLog, handlerContext } from 'generated'

export async function updateToken(
  event: eventLog<any>,
  context: handlerContext,
  properties: {
    address: string
    decimals?: number
  }
) {
  const chainId = event.chainId
  const id = `${chainId}-${properties.address}`
  const currentEntity = await context.Token.get(id)
  context.Token.set({
    ...currentEntity!,
    ...properties,
    chainId,
    id,
  })
}
