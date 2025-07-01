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
    }) => Promise<any>,
    options?: {
      onError?: ({
        error,
        event,
        context,
      }: {
        error: unknown
        event: eventLog<T>
        context: handlerContext
      }) => void | Promise<void>
      onFinally?: ({
        event,
        context,
      }: {
        event: eventLog<T>
        context: handlerContext
      }) => void | Promise<void>
    }
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

      if (options?.onError) {
        try {
          await options.onError({ error, event, context })
        } catch (onErrorError) {
          logger.error(`Error in onError callback`, onErrorError)
        }
      }

      return
    } finally {
      if (options?.onFinally) {
        try {
          await options.onFinally({ event, context })
        } catch (onFinallyError) {
          logger.error(`Error in onFinally callback`, onFinallyError)
        }
      }
    }
  }
