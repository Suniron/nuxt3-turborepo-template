/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['turbo', '@antfu'],
  plugins: ['sort-keys-fix'],
  rules: {

    // TODO: fix it
    '@typescript-eslint/consistent-type-assertions': 'off',

    // custom rules
    'antfu/top-level-function': 'off',

    'curly': ['error', 'all'],

    'max-statements-per-line': ['error', { max: 1 }],

    'no-console': 'warn',

    'sort-keys-fix/sort-keys-fix': 'error',
  },
}

module.exports = config
