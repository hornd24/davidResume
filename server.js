//Require NPM packages needed to create a server
var express = require("express");
var bodyParser = require("body-parser");

var exphbs = require("express-handlebars");

//hash passwords




var app = express();
var PORT = process.env.PORT || 5000;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.json());
//parses urlencoded bodies 
app.use(bodyParser.urlencoded({ extended: true}));
//parses text 
app.use(bodyParser.text());


app.use(express.static("public/assets"));



require("./controller/api-routes.js")(app);
// require("./controller/html-routes.js")(app);


    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
 