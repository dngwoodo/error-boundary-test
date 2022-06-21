module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json"

  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    camelcase: 'off',
  },
};
