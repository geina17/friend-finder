// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {

    // HTML GET Requests
    // Route that sends user to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // All other routes send user to the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
};
  



