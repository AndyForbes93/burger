var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});

/* NOTES:
I cannot get this app to be functional. when changing a burger from eaten=0 to eaten=1 (To change the state) it reads as undefined in the val of the burger
I've tried but i cannot get this to work

When inputing a burger it tells me that the column name 'burger_name' cannot be null, I am sure that it should be taking the input from the for and 'burger_name' should not be null

I'm going to try and get the app working to full functionality with the sequelize HW, I think that I understand how to use that framework much better

*/