const path              = require("path");
const webpack           = require("webpack");

module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: 'style/useable!css?sourceMap!postcss-loader!less-loader?sourceMap=true'
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },

  plugins: [
    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      },
    }),

    //Eliminates duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin()
  ],

  devtool: "source-map"
};
