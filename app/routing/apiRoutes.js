// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var friendsData = require("../data/friends");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API GET Requests
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    app.post('/api/friends', function(req, res) {
        console.log(req.body)
        
        var newUserData = req.body;
        var differences = [];

        // Compare new user responses to potential friends
        friendsData.forEach(function(user) {
            var totalDifference = 0;

            // Get the total score difference
            for (var i = 0; i < newUserData['scores'].length; i++) {
                var otherAnswer = user['scores'][i];
                var thisAnswer = newUserData['scores'][i];
                var difference = +otherAnswer - +thisAnswer;
                totalDifference += Math.abs(difference);
            }

            // Push differences of each survey to array
            differences.push(totalDifference);
        });

        // Find the minimum difference score
        var minimumDifference = Math.min.apply(null, differences);

        // Create an array for scores with minimum difference
        var bestMatches = [];

        // Add friends with minimum score differences to best matches array
        for (var i = 0; i < differences.length; i++) {
            if (differences[i] === minimumDifference) {
                bestMatches.push(friendsData[i]);
            }
        }

        // Display the first friend in best matches array
        res.json(bestMatches[0]);

        // Add new user to friends data
        friendsData.push(newUserData);

    });
}

// Clear table
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendsData = [];

//     console.log(friendsData);
//   });