import { defineConfig, globalIgnores } from 'eslint/config'

import jsConfig from './plugins/js'
import perfectionistConfig from './plugins/perfectionist'
import prettierConfig from './plugins/prettier'
import reactConfig from './plugins/react'
import reactHooksConfig from './plugins/react-hooks'
import typescriptConfig from './plugins/typescript'

const config = defineConfig([
  globalIgnores(['**/dist/', '**/node_modules/']),
  ...jsConfig,
  ...typescriptConfig,
  ...perfectionistConfig,
  ...reactConfig,
  ...reactHooksConfig,
  ...prettierConfig,
])

export default config
