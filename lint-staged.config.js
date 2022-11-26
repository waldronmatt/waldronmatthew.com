const config = require('@waldronmatt/lint-staged-config');

module.exports = {
  // ignore prettier on unknown extensions
  '!(*.{md,js,jsx,ts,tsx,json,css,scss,yml,yaml})': [
    'prettier --cache --write --ignore-unknown',
  ],
  ...config,
  // lint and fix changed markdown files
  '*.md': ['prettier --cache --write', 'markdownlint'],
  // lint and fix changed css and scss files
  '*.{css,scss}': ['prettier --cache --write', 'stylelint --cache --fix'],
};
