import type { WebpackPluginInstance } from 'webpack'

import type { ConfigOptions } from '../createConfig'

import hmr from './hmr'
import limitChunk from './limit-chunk'
import loadable from './loadable'
import reactRefresh from './react-refresh'

export const getPlugins = (options: ConfigOptions) => {
  return [
    hmr(options),
    limitChunk(options),
    loadable(options),
    reactRefresh(options),
  ].filter(Boolean) as WebpackPluginInstance[]
}

// Ref :: Learn more about plugins from https://webpack.js.org/configuration/plugins/
