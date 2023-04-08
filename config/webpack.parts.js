const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const parts = () => {
  module.exports.loadPages = () => ({
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: `${paths.src}/html/index.html`,
        meta: {
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
    ],
  });
};

module.exports = parts;
