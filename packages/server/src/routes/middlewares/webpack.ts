import type { EntryOptions } from '~server/src/entry'

import { Router } from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import { getLogger } from '~server/src/utils/logger'
import devConfig, { CLIENT_NAME, SERVER_NAME } from '~tools/webpack/configs/dev'

import { NoClientCompilerException } from './exceptions/NoClientCompilerException'
import { NoMultiCompilerException } from './exceptions/NoMultiCompilerException'

const webpackRouter = Router()

const logger = getLogger({ label: 'server-middlewares' })

logger.info('Using webpack dev middlewares')

const applyMiddlewares = () => {
  const multiCompiler = webpack(devConfig)

  if (!multiCompiler) throw new NoMultiCompilerException()

  const clientCompiler = multiCompiler.compilers.find(
    ({ name }) => name === CLIENT_NAME,
  )

  if (!clientCompiler) throw new NoClientCompilerException()

  const devMiddleware = webpackDevMiddleware(multiCompiler, {
    serverSideRender: true,
    stats: 'errors-only',
  })

  const hotMiddleware = webpackHotMiddleware(clientCompiler, {
    log: (msg: string) => {
      const logger = getLogger({ label: 'webpack-hot-middleware' })
      logger.info(msg)
    },
  })

  const hotServerMiddleware = webpackHotServerMiddleware(multiCompiler, {
    chunkName: SERVER_NAME,
    serverRendererOptions: {
      entryPoint: CLIENT_NAME,
    } satisfies EntryOptions,
  })

  webpackRouter.use(devMiddleware)
  webpackRouter.use(hotMiddleware)
  webpackRouter.use(hotServerMiddleware)
}

try {
  applyMiddlewares()
} catch (err) {
  logger.error(err)
}

export default webpackRouter
