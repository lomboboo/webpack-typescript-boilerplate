var webpackConfig = require('./webpack.test.config')();
var helper = require('./helper');
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      helper.root('src/app/**/*.test.ts')
    ],

    exclude: [
      'node_modules'
    ],

    preprocessors: {
      './src/app/**/*.ts': ['webpack']
    },

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      stats: webpackConfig.stats
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    reporters: [ 'progress', 'coverage' ],

    coverageReporter: {

      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' }
      ]
    },

    port: 9876,

    colors: true,

    logLevel: 'ERROR',

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
};
