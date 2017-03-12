const webpackMerge = require( 'webpack-merge' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const webpack = require( 'webpack' );

const webpackCommon = require( './webpack.common.config' );


module.exports = function () {
  return webpackMerge( webpackCommon(), {

    plugins: [
      new OptimizeCssAssetsPlugin( {
        cssProcessorOptions: {
          discardComments: { removeAll: true }
        }
      } ),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      // Minify JS
      new webpack.optimize.UglifyJsPlugin( {
        compress: {
          warnings: false,
          drop_console: true,
          screw_ie8: true,
          unsafe: true
        },
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        comments: false
      } ),
    ],

    devtool: "source-map"

  } )
};
