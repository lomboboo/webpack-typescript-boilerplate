const webpackMerge = require( 'webpack-merge' );
const fs = require( 'fs' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const help = require( './helper' );
const webpackCommon = require( '../webpack.common.config' );

let port = null;
try {
  let pingue_cli_config = JSON.parse(fs.readFileSync( help.root( 'pingue_cli.json' ), 'utf8' ));
  port = pingue_cli_config.port;
} catch ( e ) {
  console.log( "No pingue_cli.json" );
}

module.exports = function () {
  return webpackMerge( webpackCommon(), {

    devServer: {
      port: port || 8000,
      //stats: 'minimal',
      contentBase: help.root( 'build' ),
      compress: true,

      quiet: false,
      noInfo: false,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    },


    output: {
      filename: 'js/[name].js'
    },

    plugins: [
      new ExtractTextPlugin( { filename: 'css/[name].css' } ),
    ],

    devtool: 'inline-source-map'

  } )
};
