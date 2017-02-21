//Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express configuration
var app = express();
//http://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
var PORT = process.env.PORT || 3000;

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");


//// This gives us access to the folders here for static applications.
//app.use(express.static(__dirname + "/app/public"));


//Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api +json'}));
app.use(express.static('app'));

//Router
var api = require('./app/routing/apiRoutes.js');
var apiRoute = api.routesAPI;
var route = require('./app/routing/htmlRoutes.js');
var htmlRoute = route.public;

//app.use("/", htmlRoutes.home);
//app.use("/", htmlRoutes.survey);
//app.use("/", apiRoutes.posting);
//app.use("/", apiRoutes.route);
//Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})