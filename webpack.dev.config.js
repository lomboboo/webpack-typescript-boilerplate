const path              = require("path");

module.exports = {
  entry: {
    app: ["./src/main.js"]
  },

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
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

  devServer: {
    contentBase: __dirname + "/",
    port: 8000,
    hot: true
  },

  devtool: "source-map"
};
