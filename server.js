// NAME DEPENDENCIES
var express = require("express");
var mongojs = require("mongojs");
var request = require("request");
var cheerio = require("cheerio");

// INITIALIZE SERVER
var app = express();

//DATABASE
// Describe MongoDB's configuration. Name the dbURL and name the collections within an array.
var databaseUrl = "newsreader";
var collections = ["news"];
// Assign mongojs configuration to a variable called db
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

//MIDDLEWARE
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//VIEW ENGINE - HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTES
var routes = require("./controllers/controller.js");
app.use("/", routes);

//START SERVER
app.listen(3000, function() {
  console.log("App running on port 3000!");
});