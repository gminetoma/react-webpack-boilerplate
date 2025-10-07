import { Router } from 'express'
import { isDevEnv, isProdEnv } from '~config/env'

import apiRouter from '../api'
import devRouter from './dev'
import middlewareRouter from './middlewares'
import prodRouter from './prod'

const routesRouter = Router()

routesRouter.use(middlewareRouter)
routesRouter.use('/api', apiRouter)
if (isProdEnv()) routesRouter.use(prodRouter)
if (isDevEnv()) routesRouter.use(devRouter)

export default routesRouter
