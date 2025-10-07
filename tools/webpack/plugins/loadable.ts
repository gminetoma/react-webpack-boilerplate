import type { WebpackPluginInstance } from 'webpack'

import LoadablePlugin from '@loadable/webpack-plugin'

import type { ConfigOptions } from '../createConfig'

export const getStatsFileName = (name?: string) => {
  return `${name}-loadable-stats.json`
}

const loadable = ({ codeSplitting, name }: ConfigOptions) => {
  if (!codeSplitting) return null

  return new LoadablePlugin({
    filename: getStatsFileName(name),
  }) as WebpackPluginInstance
}

export default loadable
