const path = require( "path" );
const webpack = require( 'webpack' );
const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const help = require("./config/helper");

const ENV = process.env.NODE_ENV;
const bootstraprcCustomLocation = "config/.bootstraprc-4";
const ENV_msg = ENV === 'prod' ? 'PRODUCTION' : ( ENV === 'dev' ? 'DEVELOPMENT' : 'TEST');

const pingue_cli_config = require(help.root('pingue_cli.json'));
const preprocessor = pingue_cli_config.preprocessor;

console.log( `--------------------------------------------------------------------------------------------------------------------` );
console.log( `----------------------------------------------------- ${ENV_msg} ---------------------------------------------------` );
console.log( `--------------------------------------------------------------------------------------------------------------------` );

module.exports = function () {
  return {
    context: help.root( "src/app" ),

    entry: {
      index: [ "./index.ts" ],
      about: [ "./about.ts" ],
      vendor: [ "moment", "jquery", "lodash", "rxjs" ],
      bootstrap: [ `bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath=${__dirname}/${bootstraprcCustomLocation}!bootstrap-loader/no-op.js` ]
    },

    output: {
      path: help.root( "build" ),
      publicPath: '/'
    },

    resolve: {
      extensions: [ '.ts', '.js', '.json', '.css', '.less', '.html', '.hbs', '.scss' ]
    },

    module: {
      noParse: /\/node_modules\/(jquery|lodash|moment)/,
      rules: [
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=100000000000" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000000000" },
        {
          test: /\.ts$/,
          loaders: [ 'awesome-typescript-loader' ],
          include: help.root( "src/app" )
        },
        {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            configFile: 'tslint.json',
            tsConfigFile: 'tsconfig.json'
          }
        },
        {
          test: /\.css$/,
          exclude: [
            help.root( "src/public/font/font-awesome" ),
          ],
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true, importLoaders: 1 }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: /\.(jp?g|png|gif|svg)$/,
          loaders: ["url-loader"]
        },
/*        {
          test: /\.less$/,
          exclude: [
            help.root( "src/public/font/font-awesome" ),
          ],
          use: ExtractTextPlugin.extract( {
            fallbackLoader: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true, importLoaders: 1 }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  map: true,
                  plugins: function () {
                    return [
                      require( 'autoprefixer' )
                    ];
                  }
                }
              },
              {
                loader: 'less-loader',
                options: { sourceMap: true }
              },
            ]
          } )
        },*/
        {
          test: !preprocessor ? "scss" : ( preprocessor==="scss" ? /\.scss$/ : /\.less$/ ),
          include: [
            help.root( "src/stylesheets" ),
          ],
          exclude: [
            help.root( "src/public/font/font-awesome" ),
          ],
          use: ExtractTextPlugin.extract( {
            fallbackLoader: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true, importLoaders: 1 }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  map: true,
                  plugins: function () {
                    return [
                      require( 'autoprefixer' )
                    ];
                  }
                }
              },
              {
                loader: !preprocessor ? "sass-loader" : ( preprocessor==="scss" ? 'sass-loader' : 'less-loader' ),
                options: { sourceMap: true }
              },
            ]
          } )
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin( {
        filename: 'index.html',
        chunks: [ "common", "vendor", "bootstrap", "manifest", "index" ],
        template: help.root( "src/index.html" )
      } ),
      new HtmlWebpackPlugin( {
        filename: 'about.html',
        chunks: [ "common", "vendor", "bootstrap", "manifest", "about" ],
        template: help.root( "src/about.html" )
      } ),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin( {
        name: [ "common", "vendor", "bootstrap", "manifest" ]
      } ),
      new webpack.DefinePlugin( {
        "process.env": {
          NODE_ENV: JSON.stringify( ENV )
        }
      } ),
      new webpack.ContextReplacementPlugin( /node_modules\/moment\/locale/, /pl|en-gb/ ),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Tether: "tether",
        "window.Tether": "tether",
        Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
        Button: "exports-loader?Button!bootstrap/js/dist/button",
        Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
        Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
        Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
        Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
        Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
        Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        Util: "exports-loader?Util!bootstrap/js/dist/util",
      }),
      new FaviconsWebpackPlugin({
        // Your source logo
        logo: help.root( 'src/public/meta/favicon.png' ),
        prefix: 'icons-[hash]/',
        emitStats: false,
        statsFilename: 'iconstats-[hash].json',
        persistentCache: true,
        inject: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      })
    ],

    devtool: "source-map"
  };

};
