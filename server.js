var express = require("express");
var bodyParser = require("body-parser");
var db = require('./models');
var path = require('path');

var router = require('./routes');


var PORT = process.env.PORT || 8080;

var app = express();

// app.get("/", function(req, res) {
//   // res.static('/',express(path.join(__dirname, "/views/index.html")));

//   // res.send('<h1>it works !</h1>')
// });

app.use('/', express.static(__dirname + '/public'));

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // parse application/json
// app.use(bodyParser.json());

// Set Handlebars.
//var exphbs = require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./controllers/skillsController.js");

//app.use(routes);

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});
