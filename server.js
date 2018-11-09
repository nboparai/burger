var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// Import routes and give the server access to them.
var routes = require(path.join(__dirname, "/controllers/burger_controller.js"));

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
// Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});