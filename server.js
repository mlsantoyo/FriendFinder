// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static(__dirname + 'app/public'));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});