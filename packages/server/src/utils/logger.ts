import path from 'path'
import { createLogger, format, transports } from 'winston'

const { colorize, combine, json, label, printf, timestamp } = format

type FormattedMessageInfo = {
  label: string
  level: string
  message: string
  timestamp: string
}

type LoggerOptions = {
  label?: string
}

const SERVER_LOG_PATH = path.resolve(import.meta.dirname, '..', 'server.log')

export const getLogger = (options?: LoggerOptions) => {
  const labelText = options?.label || 'undefined'

  const formattedMessage = printf((info) => {
    const { label, level, message, timestamp } = info as FormattedMessageInfo
    return `${timestamp} [${label}] ${level}: ${message}`
  })

  const consoleTransport = new transports.Console({
    format: combine(colorize({ all: true }), timestamp(), formattedMessage),
  })

  const fileTransport = new transports.File({
    filename: SERVER_LOG_PATH,
    format: combine(timestamp(), json()),
    maxFiles: 5,
    maxsize: 5 * 1024 * 1024, // 5 MB
  })

  const logger = createLogger({
    format: label({ label: labelText }),
    level: 'info',
    transports: [consoleTransport, fileTransport],
  })

  return logger
}
