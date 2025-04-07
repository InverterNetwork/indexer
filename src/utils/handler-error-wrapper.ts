import { eventLog, handlerContext } from 'generated'
import { logger } from './logger'
import chalk from 'chalk'

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
      logger.error(
        `Error in handler: ${JSON.stringify({
          transaction: chalk.bold(event.transaction.hash),
          logIndex: chalk.bold(event.logIndex),
          srcAddress: chalk.bold(event.srcAddress),
          chainId: chalk.bold(event.chainId),
        })}`,
        error
      )
    }
  }
