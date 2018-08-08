// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    // Search for Specific Character (or all characters) then provides JSON

    // If a user sends data to add a new character...
    app.post("/api/new", function (req, res) {

        // Take the request...
        var skills = req.body;
        console.log(skills);

        // Create a routeName

        // Using a RegEx Pattern to remove spaces from character.name
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        var routeName = skills.name.replace(/\s+/g, "").toLowerCase();

        // Then add the character to the database using sequelize
        Skills.create({
            weekNumber: req.body.weekNumber,
            gitlabLink: req.body.gitlabLink,
            skill: req.body.skill,
            webReference: req.body.webReference
        })
    });
};
