// NAME DEPENDENCIES
var express = require("express");
var mongoose = require("mongoose");
var request = require("request");
var path = require('path');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars'), hbs;
var cheerio = require("cheerio");
var logger = require('morgan');
var errorHandler = require('errorhandler');
var userComms = require('./utilities/messages');
var config = require('./config/config');


// INITIALIZE SERVER
var app = express();
app.set("port", config[config.environment].application.port);

//VIEW ENGINE - HANDLEBARS
app.set("views", path.join(__dirname, "views"));
hbs = handlebars.create({defaultLayout: "main"});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
//HTTP request logger using morgan
app.use(logger("dev", {immediate: true }));
//Show errors in development
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(userComms.UserNotifications);

//ROUTES
require("./router")(app);

//START SERVER
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
