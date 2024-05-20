/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // eslint-disable-next-line no-useless-escape
        argsIgnorePattern: '^[_$]+',
        caughtErrorsIgnorePattern: '^_',
        // eslint-disable-next-line no-useless-escape
        varsIgnorePattern: '^[_$]+'
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
      'svelte-eslint-parser': ['.svelte']
    }
  }
};
