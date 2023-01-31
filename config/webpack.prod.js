// eslint-disable-next-line unicorn/prevent-abbreviations
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('node:zlib');
const CopyPlugin = require('copy-webpack-plugin');
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common');
const paths = require('./paths');

const productionConfig = {
  plugins: [
    new ESBuildMinifyPlugin({
      target: 'es2015',
      css: true,
    }),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      test: /\.(js|css|html)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
    }),
    new CopyPlugin({
      patterns: [{ from: paths.public, to: paths.dist }],
    }),
  ],
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);
