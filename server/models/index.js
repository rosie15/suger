var mongoose = require('mongoose');
var User = require('./user.js');

mongoose.connect(mongodb://localhost/suger);

var db = mongoose.connection;

db.once("open", function() {
	console.log("database is successfully connected!")
});
