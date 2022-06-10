const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const parts = () => {
  module.exports.loadPages = () => ({
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        title: 'Matt Waldron',
        template: `${paths.src}/index.html`,
        favicon: `${paths.public}/favicon.png`,
        meta: {
          description: 'Front-End Developer',
          keywords: 'front-end, development, web, programming',
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
    ],
  });
};

module.exports = parts;
