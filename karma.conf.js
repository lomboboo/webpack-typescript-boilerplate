var webpackConfig = require('./webpack.test.config')();
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'src/app/*.test.ts'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/app/*.ts': ['webpack', 'coverage']
    },

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },

    reporters: [ 'progress', 'coverage' ],

    coverageReporter: {

      dir: 'build/coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' },
        { type: 'text-summary' }
      ]
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
};
