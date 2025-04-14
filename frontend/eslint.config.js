import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "indent": [
        "error",
        4
      ],
      "max-depth": [
        "error",
        4
      ],
      "max-lines": [
        "error",
        300
      ],
      "max-nested-callbacks": [
        "error",
        3
      ],
      "max-params": [
        "error",
        3
      ],
      "max-statements": [
        "error",
        10
      ],
      "complexity": [
        "error",
        5
      ],
      "object-curly-newline": [
        "error",
        {
          "multiline": true,
          "minProperties": 3,
          "consistent": true
        }
      ],
      "object-curly-spacing": [
        "error",
        "always"
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
