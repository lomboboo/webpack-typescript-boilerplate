const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

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

    output: {
      filename: "js/[name].js"
    },

    plugins: [
      new ExtractTextPlugin( { filename: "css/[name].css", } ),
    ],

    devtool: "inline-source-map"

  })
};
