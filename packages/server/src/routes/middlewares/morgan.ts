import type { StreamOptions } from 'morgan'

import { Router } from 'express'
import morgan from 'morgan'
import { isProdEnv } from '~config/env'
import { getLogger } from '~server/src/utils/logger'

const morganRouter = Router()

const logger = getLogger({ label: 'morgan' })

const stream: StreamOptions = {
  write: (message) => {
    logger.error(message)
  },
}

morganRouter.use(
  morgan(isProdEnv() ? 'combined' : 'dev', {
    skip: (_req, res) => res.statusCode < 400,
    stream,
  }),
)

export default morganRouter
