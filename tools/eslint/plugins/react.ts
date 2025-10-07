import eslintPluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

const eslintPluginReactRecommended =
  eslintPluginReact.configs.flat.recommended || {}

const reactConfig = defineConfig([
  {
    name: 'react/recommended',
    ...eslintPluginReactRecommended,
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])

export default reactConfig
