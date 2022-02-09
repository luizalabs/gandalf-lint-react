module.exports = {
  extends: [
    "@softboxlab/eslint-config-gandalf-lint",
    "plugin:react/recommended"
  ],
  plugins: [
    "react-hooks",
    "react"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "id-length": "off",
    "react/require-default-props": ["error", {
      "forbidDefaultForRequired": true
    }],
    "react/default-props-match-prop-types": ["error", {
      "allowRequiredDefaults": false
    }],
    "max-lines": ["error", {
      "max": 200,
      "skipBlankLines": true,
      "skipComments": true
    }],
    "func-style": ["error", "declaration", {
      "allowArrowFunctions": true
    }]
  }
};
