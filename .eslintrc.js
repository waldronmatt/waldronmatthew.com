module.exports = {
  ignorePatterns: ['dist/**'],
  extends: '@waldronmatt/eslint-config',
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
};
