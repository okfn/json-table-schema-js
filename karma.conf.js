const webpackConfig = require('./webpack.dev.js')
delete webpackConfig.entry

// Base

const karmaConfig = (config) => {
  config.set({
    singleRun: true,
    browsers: ['jsdom'],
    frameworks: ['webpack', 'mocha', 'sinon-chai'],
    files: ['test/karma.opts'],
    reporters: ['spec'],
    preprocessors: {
      'test/karma.opts': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    client: {
      mocha: {
        opts: 'test/mocha.opts'
      }
    }
  })
}

// Module API

module.exports = karmaConfig
