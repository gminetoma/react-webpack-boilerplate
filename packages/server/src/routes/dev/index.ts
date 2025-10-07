import { Router } from 'express'

import errorhandlerRouter from '../middlewares/errorhandler'
import webpackRouter from '../middlewares/webpack'

const devRouter = Router()

devRouter.use(webpackRouter)
devRouter.use(errorhandlerRouter)

export default devRouter
