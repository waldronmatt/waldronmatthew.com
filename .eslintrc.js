module.exports = {
  ignorePatterns: ['dist/**', 'bin/www', 'public/sw.js'],
  extends: '@waldronmatt/eslint-config',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'unicorn/no-array-for-each': 0,
  },
  env: {
    browser: true,
  },
};
