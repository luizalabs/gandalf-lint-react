module.exports = {
  extends: [
    "@softboxlab/eslint-config-gandalf-lint",
    "plugin:react/recommended"
  ],
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "id-length": "off",
    "react/require-default-props": ["error", {
      "forbidDefaultForRequired": true
    }],
    "react/default-props-match-prop-types": ["error", {
      "allowRequiredDefaults": true
    }]
  }
};
