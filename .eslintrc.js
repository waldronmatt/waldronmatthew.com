module.exports = {
  ignorePatterns: ['dist/**', 'public/sw.js'],
  extends: '@waldronmatt/eslint-config',
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
};
