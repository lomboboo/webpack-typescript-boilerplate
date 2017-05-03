const webpackMerge = require('webpack-merge');

const help = require("./helper");
const webpackCommon = require('../webpack.common.config');

module.exports = function () {
  return webpackMerge(webpackCommon(), {

    devServer: {
      port: 8000,
      //stats: 'minimal',
      contentBase: help.root('src'),
      compress: true
    },

    devtool: "inline-source-map"

  })
};
