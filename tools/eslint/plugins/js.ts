import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

const jsConfig = defineConfig([
  {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    name: 'js/recommended',
    plugins: { js },
  },
])

export default jsConfig
