import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'dev-dist'],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    globals: globals.browser,
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "error",
      "always"
    ],
    "camelcase": "error",
    "no-multiple-empty-lines": "error",
    "curly": "error",
//    "no-unused-vars": "error", //TODO specify types
    "no-duplicate-imports": "error"
  },
})
