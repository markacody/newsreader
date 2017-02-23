// NAME DEPENDENCIES
var express = require("express");
var mongoose = require("mongoose");
var request = require("request");
var path = require('path');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars'), hbs;
var cheerio = require("cheerio");

// INITIALIZE SERVER
var app = express();

//VIEW ENGINE - HANDLEBARS
app.set("views", path.join(__dirname, "views"));
hbs = handlebars.create({defaultLayout: "main"});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

//ROUTES
require("./router")(app);

//START SERVER
app.listen(3000, function() {
  console.log("App running on port 3000!");
});