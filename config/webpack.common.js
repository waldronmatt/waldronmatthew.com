const path = require('node:path');
const { merge } = require('webpack-merge');
const { baseParts } = require('@waldronmatt/webpack-config');
const paths = require('./paths');
const parts = require('./webpack.parts');

const commonConfig = isProduction => {
  // pass `isProduction` environment variable into your parts file
  parts(isProduction);

  return merge([
    {
      entry: {
        main: [`${paths.src}/js/index.js`],
        animation: [`${paths.src}/js/animation.js`],
      },
      output: {
        path: paths.build,
        publicPath: paths.publicPath,
      },
      resolve: {
        modules: [paths.src, 'node_modules'],
        alias: {
          '@': paths.src,
        },
      },
    },
    baseParts.loadJS({
      include: [path.resolve(__dirname, `${paths.src}/js/`)],
    }),
    baseParts.setScriptOutputPath({}),
    baseParts.loadSCSS({
      include: [path.resolve(__dirname, `${paths.src}/scss/`)],
    }),
    baseParts.setStyleOutputPath({}),
    baseParts.loadFonts({
      path: 'fonts/',
    }),
    parts.loadPages(),
  ]);
};

module.exports = commonConfig;
