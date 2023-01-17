module.exports = {
  ignoreFiles: ['dist/**'],
  extends: '@waldronmatt/stylelint-config/scss',
  rules: {
    'max-nesting-depth': null,
    'selector-max-compound-selectors': null,
  },
};
