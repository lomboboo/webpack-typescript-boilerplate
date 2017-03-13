const path = require( "path" );
const webpack = require( 'webpack' );
const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

console.log( "==============================COMMON================================" );

module.exports = function () {
  return {
    entry: {
      app: [ "./src/main.ts" ]
    },

    output: {
      path: path.resolve( __dirname, "build" ),
      publicPath: '',
      filename: "bundle.js"
    },

    resolve: {
      extensions: [ '.ts', '.js', '.json', '.css', '.less', '.html', '.hbs' ]
    },

    module: {

      rules: [
        {
          test: /\.hbs$/,
          loaders: [ 'handlebars-loader' ]
        },
        {
          test: /\.ts$/,
          loaders: [ 'awesome-typescript-loader' ],
          exclude: [ /(node_modules)/ ]
        },
        {
          test: /\.css$/,
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
      new ExtractTextPlugin( { filename: '[name].css' } )
    ],

    devtool: "source-map"
  };

};
