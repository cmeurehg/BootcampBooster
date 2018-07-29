// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var skill = {
  all: function(cb) {
    orm.all("skills", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("skills", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("skills", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("skills", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (skillsController.js).
module.exports = skill;
