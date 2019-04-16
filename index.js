module.exports = {
  extends: [
    "@softboxlab/eslint-config-gandalf-lint",
    './rules/gandalf'
  ].map(require.resolve),
  plugins: [
    "eslint-plugin-react",
    "react-hooks"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
