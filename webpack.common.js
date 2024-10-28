const webpack = require('webpack');

// Base
module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'json',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: {
          and: [
            /node_modules/,
            /profiles/,
          ]
        },
        use: {
          loader: 'babel-loader',          
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
    ]
  },
  output: {
    library: 'tableschema',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    new webpack.DefinePlugin({'process.env.USER_ENV': JSON.stringify('browser')}),
      new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "fs": false// require.resolve("fs"),
    }
  },
  // target: ["web", "es6"]
}
