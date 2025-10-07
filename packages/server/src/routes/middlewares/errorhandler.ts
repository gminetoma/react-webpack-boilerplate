import type { LoggingCallback } from 'errorhandler'

import errorhandler from 'errorhandler'
import { Router } from 'express'
import { getLogger } from '~server/src/utils/logger'

const errorhandlerRouter = Router()

const logger = getLogger({ label: 'server-middlewares' })

const log: LoggingCallback = (error) => {
  logger.error(error.stack)
}

const errorHandler = errorhandler({ log })

errorhandlerRouter.use(errorHandler)

export default errorhandlerRouter
