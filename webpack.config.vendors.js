var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: {
    vendors: [
      "react",
      "react-dom",
      "normalize.css",
      "./vendors/font-awesome-4.6.3/css/font-awesome.min.css",
    ],
  },
  output: {
    path: path.join(__dirname, "_dist"),
    filename: "[name].bundle.[chunkhash].js",
    library: "[name]_[chunkhash]",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, "_dist", "[name]-manifest.json"),
      name: "[name]_[chunkhash]",
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css?-autoprefixer!postcss",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
        loader: "url?limit=10000&name=vendors-assets/[name].[hash].[ext]",
      },
    ],
  },
  postcss() {
    return [require("autoprefixer")]
  },
}
