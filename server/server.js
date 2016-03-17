var express = require('express');
var app = express();

var mongoose = require('mongoose');
var model = require('./models/index.js');

var path = require('path');

var devMode = process.env.NODE_ENV;

app.set("views", path.join(__dirname + "views"));
app.set("view engine", "jade");

app.get("/", function(req, res){
	res.sendFile("./views/index.jade");
})

app.get('/init', function(req, res) {
	var user = new User({
		email: 'ronghua@gmail.com',
		name: 'Rosie'
	});
	user.save();
	res.send('Data inited');
});

app.get('/users', function(req, res) {
	User.find(function(err, doc) {
		res.json(doc);
	});
});

app.use(router);

module.exports = app;