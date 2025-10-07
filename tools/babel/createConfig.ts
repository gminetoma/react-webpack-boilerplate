import type { PluginItem, TransformOptions } from '@babel/core'

type ConfigOptions = {
  hot?: boolean
}

const createConfig = (options: ConfigOptions = {}): TransformOptions => {
  const { hot } = options
  const plugins: PluginItem[] = ['@loadable/babel-plugin']

  if (hot) plugins.push('react-refresh/babel')

  return {
    plugins,
    presets: [
      ['@babel/preset-env', { modules: false }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
  }
}

export default createConfig
