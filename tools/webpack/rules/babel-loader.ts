import type { TransformOptions } from '@babel/core'
import type { RuleSetRule } from 'webpack'

import { ROOT_PATH } from '~config/paths'
import { clientDevConfig, serverDevConfig } from '~tools/babel/configs/dev'

import type { ConfigOptions } from '../createConfig'

const babelLoader = (options: ConfigOptions) => {
  const { context, target } = options

  const isNode = target === 'node'

  const config = isNode ? serverDevConfig : clientDevConfig

  const rule: RuleSetRule = {
    exclude: /node_modules/,
    include: [context, ROOT_PATH],
    test: /\.(?:js|mjs|cjs|jsx|ts|mts|cts|tsx)$/,
    use: {
      loader: 'babel-loader',
      options: {
        ...config,
      } satisfies TransformOptions,
    },
  }

  return rule
}

export default babelLoader
