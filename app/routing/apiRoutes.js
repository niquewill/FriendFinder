'use strict'

var db = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {

        res.json(db);
    });
    
    // Create New Characters - takes in JSON input
    app.post("/api/friends", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
         // We then add the json the user sent to the character array
//Grabbed from solution
//
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    // Note the code here. Our "server" will respond to a user"s survey result
    // Then compare those results against every user in the database.
    // It will then calculate the difference between each of the numbers and the user"s numbers.
    // It will then choose the user with the least differences as the "best friend match."
    // In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user to the database.

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestHomie = {
      name: "",
      photo: "",
      homieDif: 1000
    };
        
        
        //console.log(db);
          var array = [];
          var clientAlgor= req.body;
          var lowest = 0;

          //calculate the difference of scores by using user's score minus others' score 
          //and save in scoreArray
          for (var i=0; i<friends.length; i++){

                var totalDif = 0;
              for (var j=0; j< friends[i].scores[j]; j++){
                 var sum = Math.abs(parseInt(clientAlgor[j])- parseInt(otherscore[j]));
                 totalDif += sum;
              };
             if, (totalDif <= bestHomie.homieDif) {
                 bestHomie.name = friends[i].photo;
                 bestHomie.homieDif = totalDif;
             }
              };   
          };
           
        //console.log(db);
          res.json(bestHomie);
        });
};