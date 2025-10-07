import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const typescriptConfig = defineConfig([
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    name: 'typescript/language-options',
  },
  {
    files: ['**/*.{cjs,mjs,js}'],
    name: 'typescript/js/rules',
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/*.{cts,mts,tsx,ts}'],
    name: 'typescript/ts/rules',
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'all', argsIgnorePattern: '^_' }, // Flag unused parameters unless prefixed with "_"
      ],
    },
  },
])

export default typescriptConfig
