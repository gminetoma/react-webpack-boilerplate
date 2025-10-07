import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { Router } from 'express'
import helmet from 'helmet'

import morganRouter from './morgan'

const middlewareRouter = Router()

middlewareRouter.use(helmet())
middlewareRouter.use(cors())
middlewareRouter.use(compression())
middlewareRouter.use(cookieParser())
middlewareRouter.use(morganRouter)

export default middlewareRouter
