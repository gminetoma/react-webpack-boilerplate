import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'

const perfectionistConfig = defineConfig([
  {
    name: 'perfectionist/recommended-natural',
    ...eslintPluginPerfectionist.configs['recommended-natural'],
  },
])

export default perfectionistConfig
