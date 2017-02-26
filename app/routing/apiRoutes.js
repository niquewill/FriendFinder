var db = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {

        res.json(db);
    });
    
// This will create my homies from another file
    app.post("/api/friends", function(req, res) {

//Connect made
var lilHomies = require("../data/friends");

//Routing
module.exports = function(app) {
//Go GET it from the API
    app.get("/api/friends",
            function(req, res) {res.json(lilHomies);
                             });

// API POSTting
post("/api/friends", function(req, res) {
    
//Create a spot to house the alias, mugshot, and negatives.
    var bestHomie = {
        alias: "",
        mugshot: "",
        negatives: 1000
    };
        
//Start POSTting and Parsing data
    var userData = req.body;
    var userScores = userData.scores;

//Determing the overall differences of each and compare
    var bottomLines = 0;   
 
//Create a loop that will compare each user to each other
          for (var i=0; i<lilHomies.alias; i++){
              console.log(lilHomies[i].alias);
              
//Define what is the lowest difference that can be attained              
            bottomLines = 0;

//Loop again recomparing the least differences              
              for (var j = 0; j < lilHomies[i].scores[j]; j++) {

//Compare the scores and overall bottomLines to determine best possible
                bottomLines += Math.abs(parseInt(userScores[j]) - parseInt(lilHomies[i].scores[j]));

//Create over rule that IF the difference is less that the best homie
                    if (bottomLines <= bestHomie.negatives) {

//Reset to a new friend
          bestHomie.alias = 
          bestHomie.mugshot = 
          bestHomie.negatives = bottomLines;
        }
      }
    }
//Then PUSH the users data to the database
            lilHomies.push(userData);

//Return a JSON object the the users overall bestHomie pick
            res.json(bestHomie)
                }); //Closes the API posting
            };//Closes model.exports routing
        });//Closes the app POSTing    
}; //Closes model.exports
