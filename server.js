var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")

var config = require("./webpack.config")

var port = 8080
var compiler = webpack(config)

new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {colors: true},
}).listen(port, "localhost", function(err, result) {
  if(err) console.log(err)
  console.log("listening at localhost: " + port)
})