const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const help = require("./helper");
const webpackCommon = require('../webpack.common.config');

const pingue_cli_config = require(help.root('pingue_cli.json'));

module.exports = function () {
  return webpackMerge(webpackCommon(), {

    devServer: {
      port: pingue_cli_config.port || 8000,
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
