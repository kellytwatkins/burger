var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burgers: data });

  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?)", [req.body.burger], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.delete("/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.put("/", function(req, res) {

  connection.query("UPDATE burgers SET burger_name = ?, devoured = true WHERE id = ?", [
    req.body.burger, req.body.id
  ], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.listen(port);
