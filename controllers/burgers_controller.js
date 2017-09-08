var express = require("express");
var db = require("../models/burger.js");

module.exports = function(app) {
    
    // GET route for getting all of the todos
    app.get("/", function(req, res) {
        db.selectAll(function(data) {
            var burger = {
                burgers: data
            };
        res.render('index', burger);
        });
    });
    
    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/", function(req, res) {
        db.insertOne(
        )
    });
    
    // DELETE route for deleting todos. You can access the todo's id in req.params.id
    app.delete("/api/todos/:id", function(req, res) {
    });
    
    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/todos", function(req, res) {
    });
};