import webpack from 'webpack'

import type { ConfigOptions } from '../createConfig'

const hmr = ({ hot }: ConfigOptions) => {
  if (!hot) return null

  return new webpack.HotModuleReplacementPlugin()
}

export default hmr
