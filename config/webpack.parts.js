const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const parts = () => {
  module.exports.loadPages = () => ({
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        title: 'Matthew Waldron, Front-End Developer',
        template: `${paths.src}/index.html`,
        meta: {
          description: 'A front-end developer building the next cigna.com.',
          keywords: 'front-end, development, web, programming',
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
    ],
  });
};

module.exports = parts;
