// Basic route that sends the user first to the AJAX Page

// Route that sends user to the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

// Route that sends user to the survey page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });