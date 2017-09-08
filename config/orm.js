var connection = require("../config/connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
    },

    insertOne: function(table, cols, vals, cb) {
    },

    updateOne: function(table, objColVals, condition, cb) {
    }
};
  
  module.exports = orm;
  