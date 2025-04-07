import chalk from 'chalk'

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

class Logger {
  private logWithLevel(level: LogLevel, message: string, ...args: any[]) {
    const timestamp = new Date().toISOString()
    const prefix = `[${timestamp}] ${level.toUpperCase()}`

    const color =
      level === 'debug'
        ? chalk.gray
        : level === 'info'
          ? chalk.blue
          : level === 'warn'
            ? chalk.yellow
            : chalk.red

    if (args.length > 0) {
      console[level](color(prefix), message, ...args)
    } else {
      console[level](color(prefix), message)
    }
  }

  debug(message: string, ...args: any[]) {
    this.logWithLevel('debug', message, ...args)
  }

  info(message: string, ...args: any[]) {
    this.logWithLevel('info', message, ...args)
  }

  warn(message: string, ...args: any[]) {
    this.logWithLevel('warn', message, ...args)
  }

  error(message: string, ...args: any[]) {
    this.logWithLevel('error', message, ...args)
  }
}

export const logger = new Logger()
