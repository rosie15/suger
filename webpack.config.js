var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: {
    app: ["webpack-dev-server/client?http://0.0.0.0:8080", "webpack/hot/only-dev-server", "./app.jsx"],
    vendors: ["jquery", "datatables"],
  },

  output: {
    path: __dirname + "/dev",
    publicPath: "/assets/",
    filename: "[name].js",
    chunkFilename: "[name][chunkhash].chunk.js",
  },

  resolve: {
    extensions: ["", ".jsx", ".js", ".styl", ".json"],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ["react-hot", "babel"],
        // query: {
        //   cacheDirectory: true,
        //   presets: ["es2015", "stage-0", "react"],
        // },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ["es2015"],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.styl$/,
        loader: "style!css!stylus",
      },
    ],
  },
}