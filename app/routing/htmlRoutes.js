// Dependencies
var path = require("path");

//Routing
module.exports = function(app) {

// HTML GET Requests
app.get("/survey", function(req, res) {
      console.log('1');
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

//default to home
app.use(function(req, res) {
      console.log('2');
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
