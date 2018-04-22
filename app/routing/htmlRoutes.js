// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    // Route that sends user to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });
  
    // Route that sends user to the survey page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });
  };
  



