// eslint-disable-next-line unicorn/prevent-abbreviations
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('node:zlib');
const CopyPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line max-len
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common');
const paths = require('./paths');

const productionConfig = {
  plugins: [
    new ESBuildMinifyPlugin({
      target: 'es2015',
      css: true,
    }),
    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /.*\.woff2?$/,
          attributes: { as: 'font', type: 'font/woff2', crossorigin: true },
        },
        {
          match: /.[\da-z-]*.css$/,
          attributes: { as: 'style' },
        },
      ],
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
          enforce: true,
        },
        common: {
          name: 'commons',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);
