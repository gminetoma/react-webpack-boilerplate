import type {
  Externals,
  LibraryOptions,
  WebpackOptionsNormalized,
} from 'webpack'

import nodeExternals from 'webpack-node-externals'
import { isProdEnv } from '~config/env'
import {
  APP_PATH,
  CONFIG_PATH,
  ROOT_PATH,
  SERVER_PATH,
  SHARED_PATH,
  TOOLS_PATH,
} from '~config/paths'

import { getPlugins } from './plugins'
import { asset, babelLoader } from './rules/index'

export type ConfigOptions = {
  buildPath: string
  codeSplitting?: boolean
  context: string
  /** https://webpack.js.org/configuration/devtool/ */
  devtool?: 'cheap-module-source-map' | 'inline-source-map' | 'source-map'
  entry: string
  hot?: boolean
  name: string
  publicPath?: string
  target: 'node' | 'web'
}

const createConfig = (options: ConfigOptions) => {
  const {
    buildPath,
    codeSplitting,
    context,
    devtool,
    entry,
    hot,
    name,
    publicPath,
    target,
  } = options

  const isNode = target === 'node'

  const externals: Externals = []
  if (isNode) externals.push(nodeExternals())

  const entryImport = [`./${entry}`]
  if (hot) entryImport.unshift('webpack-hot-middleware/client?reload=true')

  let library: LibraryOptions = { name, type: 'var' }
  if (isNode) library = { type: 'commonjs2' }

  const config: WebpackOptionsNormalized = {
    bail: true,
    cache: { type: 'memory' },
    context,
    ...(devtool && { devtool }),
    entry: { [name]: { import: entryImport } },
    experiments: {},
    externals,
    externalsPresets: {},
    infrastructureLogging: {},
    mode: isProdEnv() ? 'production' : 'development',
    module: {
      defaultRules: [],
      generator: {},
      parser: {},
      rules: [!isNode && asset, babelLoader(options)],
    },
    name,
    node: {},
    optimization: {},
    output: {
      ...(codeSplitting && { chunkFilename: '[name].chunk.js' }),
      enabledChunkLoadingTypes: isNode ? ['async-node', 'require'] : ['jsonp'],
      enabledLibraryTypes: ['commonjs2', 'var'],
      enabledWasmLoadingTypes: [],
      environment: {},
      filename: '[name].js',
      library,
      path: buildPath,
      publicPath: publicPath || '',
    },
    plugins: getPlugins(options),
    resolve: {
      alias: {
        '~app': APP_PATH,
        '~config': CONFIG_PATH,
        '~server': SERVER_PATH,
        '~shared': SHARED_PATH,
        '~tools': TOOLS_PATH,
      },
      extensionAlias: {
        '.js': ['.ts', '.mts', '.cts', '.tsx', '.js'],
      },
      extensions: [
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.cts',
        '.cjs',
        '.mts',
        '.mjs',
      ],
      modules: [ROOT_PATH, 'node_modules'],
    },
    resolveLoader: {},
    snapshot: {},
    stats: 'errors-warnings',
    target,
    watchOptions: {},
  }

  return config
}

export default createConfig
