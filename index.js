module.exports = {
  extends: [
    'eslint-config-gandalf-lint'
  ].map(require.resolve),
  plugins: [
    'eslint-plugin-react',
    'sort-imports-es6-autofix'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
    'class-methods-use-this': 0
  }
};
