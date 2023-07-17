module.exports = {
  extends: [require.resolve('./index.cjs')],
  globals: {
    JSX: true,
  },
  rules: {
    'vue/max-attributes-per-line': ['error', {
      multiline: {
        max: 1,
      },
      singleline: {
        max: 10,
      },
    }],
  },
}
