const path = require( "path" );
const webpackMerge = require('webpack-merge');

const webpackCommon = require('./webpack.common.config');

module.exports = function () {
  return webpackMerge(webpackCommon(), {

    devServer: {
      port: 8000,
      stats: 'minimal',
      contentBase: path.join(__dirname, 'src'),
      compress: true
    },

    devtool: "inline-source-map"

  })
};
