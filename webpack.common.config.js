const path = require( "path" );
const webpack = require( 'webpack' );
const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const ENV = process.env.NODE_ENV;
console.log( `ENVIRONMENT -------------------- ${ENV}` );

console.log( "==============================COMMON================================" );

module.exports = function () {
  return {
    context: path.resolve(__dirname, "src"),

    entry: {
      app: [ "./main.ts" ],
      vendor: [ "moment", "jquery", "lodash" ]
    },

    output: {
      path: path.resolve( __dirname, "build" ),
      publicPath: '',
      filename: "[name].[chunkhash].js"
    },

    resolve: {
      extensions: [ '.ts', '.js', '.json', '.css', '.less', '.html', '.hbs' ]
    },

    module: {
      noParse: /\/node_modules\/(jquery|lodash|moment)/,
      rules: [
        {
          test: /\.hbs$/,
          loaders: [ 'handlebars-loader' ]
        },
        {
          test: /\.ts$/,
          loaders: [ 'awesome-typescript-loader' ],
          include: path.resolve(__dirname, "src")
        },
        {
          test: /\.css$/,
          exclude: [
            path.resolve(__dirname, "src/public/font/font-awesome"),
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
          test: /\.less$/,
          exclude: [
            path.resolve(__dirname, "src/public/font/font-awesome"),
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
        }
      ]

    },

    plugins: [
      new HtmlWebpackPlugin( {
        template: path.join( __dirname, 'src/index.hbs' )
      } ),
      new ExtractTextPlugin( { filename:'[name]-[hash].css', } ),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: [ "vendor", 'manifest']
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(ENV)
        }
      }),
      new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /pl|en-gb/),
  ],

    devtool: "source-map"
  };

};
