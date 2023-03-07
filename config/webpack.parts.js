const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const parts = () => {
  module.exports.loadPages = () => ({
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        title: 'Matthew Waldron, Full Stack Developer',
        template: `${paths.src}/index.html`,
        meta: {
          description: 'Matthew Waldron, Full Stack Developer',
          keywords: 'full stack, development',
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
    ],
  });
};

module.exports = parts;
