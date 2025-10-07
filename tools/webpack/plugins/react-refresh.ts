import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import type { ConfigOptions } from '../createConfig'

const reactRefresh = ({ hot }: ConfigOptions) => {
  if (!hot) return null

  return new ReactRefreshWebpackPlugin({
    overlay: { sockIntegration: 'whm' },
  })
}

export default reactRefresh
