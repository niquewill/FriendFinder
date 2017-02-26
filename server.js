//Dependancies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//Express configuration
var app = express();

//Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
//app.use(express.static('app'));

//http://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
var PORT = process.env.PORT || 3000;

//Router
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

//// This gives us access to the folders here for static applications.
//app.use(express.static(__dirname + "/app/public"));

//Listener

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})