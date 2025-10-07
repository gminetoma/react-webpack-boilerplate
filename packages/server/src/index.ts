import express from 'express'
import { NODE_ENV, SERVER_PORT } from '~config/env'

import routesRouter from './routes'
import { getLogger } from './utils/logger'

const main = () => {
  const logger = getLogger({ label: 'server' })
  logger.info(`Node environment: ${NODE_ENV}`)

  const server = express()
  server.use(routesRouter)

  server.listen(SERVER_PORT, () => {
    logger.info(`Server is running on port ${SERVER_PORT}`)
  })
}

main()
