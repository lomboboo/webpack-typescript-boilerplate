const path = require( "path" );
const webpack = require( 'webpack' );
const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

console.log( "==============================DEVELOPMENT================================" );

module.exports = {
  entry: {
    app: [ "./src/main.ts" ]
  },

  output: {
    path: path.resolve( __dirname, "build" ),
    publicPath: "/build",
    filename: "bundle.js"
  },

  resolve: {
    extensions: [ '.ts', '.js', '.json', '.css', '.less', '.html' ]
  },

  module: {

    rules: [
      {
        test: /\.ts$/,
        loaders: [ 'awesome-typescript-loader' ],
        exclude: [ /\.(spec)\.ts$/, /(node_modules)/ ]
      },
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
        use: [ {
          loader: 'babel-loader',
          options: { presets: [ 'es2015' ] }
        } ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader'
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
                plugins: function () {
                  return [
                    require( 'autoprefixer' )
                  ];
                }
              }
            },
            'less-loader',
          ]
        } )
      }
    ]

  },

  plugins: [
    new ExtractTextPlugin( { filename: '[name].css' } )
  ],

  devServer: {
    port: 8000,
    contentBase: "./src",
    compress: true
  },

  devtool: "inline-source-map"
};
