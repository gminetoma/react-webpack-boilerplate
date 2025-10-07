import type { RuleSetRule } from 'webpack'

const asset: RuleSetRule = {
  test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  type: 'asset/resource',
}

export default asset
