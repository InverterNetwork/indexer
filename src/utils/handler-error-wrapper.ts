import { eventLog, handlerContext } from 'generated'
import { logger } from './logger'

export const handlerErrorWrapper =
  <T>(
    handler: ({
      event,
      context,
    }: {
      event: eventLog<T>
      context: handlerContext
    }) => Promise<any>
  ) =>
  async ({
    event,
    context,
  }: {
    event: eventLog<T>
    context: handlerContext
  }) => {
    try {
      return await handler({ event, context })
    } catch (error) {
      logger.error(`Error in handler`, event, error)
      return
    }
  }
