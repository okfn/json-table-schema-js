const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

  module.exports = merge(common, {
    mode: "production",
    output: {
      filename: 'tableschema.min.js',
      path: path.resolve(__dirname, './dist'),
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // Strip all comments
          },
          compress: {
            drop_console: true, // Remove console logs
          },
        },
        extractComments: false,
      })],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  });

