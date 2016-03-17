var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.join(__dirname + '/client/app'),
	entry: {
		app: './index.js',
	},
	output: {
		path: path.join(__dirname + '/client/app'),
		filename: 'bundle.js'
	},
	module: {
	    loaders: [
	        {
	            test: /\.jsx?$/,
	            exclude: /node_modules/,
	            loader: "babel"
	        },
	        {
	            test: /\.css$/,
	            exclude: /node_modules/,
	            loader: "style!css"
	        },
	        {
	            test: /\.less$/,
	            loader: "style!css!less"
	        }
	    ]
	}
}