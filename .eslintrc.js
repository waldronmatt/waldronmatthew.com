module.exports = {
  ignorePatterns: ['dist/**', 'public/sw.js'],
  extends: '@waldronmatt/eslint-config',
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2020,
  },
  rules: {
    'unicorn/no-array-for-each': 0,
  },
  env: {
    browser: true,
  },
};
