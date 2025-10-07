import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

const prettierConfig = defineConfig([
  {
    name: 'config-prettier',
    ...eslintConfigPrettier,
  },
  eslintPluginPrettierRecommended,
])

export default prettierConfig
