const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: 'tableschema.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    stats: {
        loggingDebug: ["babel-loader"]
    },
});
