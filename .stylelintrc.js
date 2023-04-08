module.exports = {
  ignoreFiles: ['dist/**'],
  extends: '@waldronmatt/stylelint-config/scss',
  rules: {
    'max-nesting-depth': null,
    'selector-max-compound-selectors': null,
    'selector-class-pattern': null,
    'a11y/media-prefers-reduced-motion': null,
    'no-descending-specificity': null,
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignore: 'paint-properties',
      },
    ],
  },
};
