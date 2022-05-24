module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
  },
};
