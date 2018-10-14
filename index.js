module.exports = {
  extends: [
    'eslint-config-gandalf-lint'
  ].map(require.resolve),
  plugins: [
    'eslint-plugin-react'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
