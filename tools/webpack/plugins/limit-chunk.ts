import webpack, { type WebpackPluginInstance } from 'webpack'

import type { ConfigOptions } from '../createConfig'

const limitChunk = ({ codeSplitting }: ConfigOptions) => {
  if (codeSplitting) return null

  return new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1,
  }) as WebpackPluginInstance
}

export default limitChunk
