import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

const reactHooksConfig = defineConfig([
  {
    extends: ['react-hooks/recommended'],
    name: 'react-hooks',
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
  },
])

export default reactHooksConfig
