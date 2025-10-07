import type { MultiConfiguration } from 'webpack'

import path from 'path'
import {
  APP_DIST_PATH,
  APP_PATH,
  SERVER_DIST_PATH,
  SERVER_PATH,
} from '~config/paths'

import createConfig from '../createConfig'

export const CLIENT_NAME = 'client'
export const SERVER_NAME = 'server'

const APP_SRC_PATH = path.resolve(APP_PATH, 'src')
const APP_PUBLIC_PATH = '/static/'

const SERVER_SRC_PATH = path.resolve(SERVER_PATH, 'src')

const clientConfig = createConfig({
  buildPath: APP_DIST_PATH,
  codeSplitting: true,
  context: APP_SRC_PATH,
  devtool: 'source-map',
  entry: 'entry',
  hot: true,
  name: CLIENT_NAME,
  publicPath: APP_PUBLIC_PATH,
  target: 'web',
})

const serverConfig = createConfig({
  buildPath: SERVER_DIST_PATH,
  context: SERVER_SRC_PATH,
  devtool: 'source-map',
  entry: 'entry',
  name: SERVER_NAME,
  target: 'node',
})

const devConfig: MultiConfiguration = [clientConfig, serverConfig]

export default devConfig
