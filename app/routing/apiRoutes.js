'use strict';

var db = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
     res.json(db);
});
                 
},{
// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
     // We then add the json the user sent to the character array

  var array = [];
      var clientAlgor= req.body.scores;
      var lowest = 0;
      
      //calculate the difference of scores by using user's score minus others' score 
      //and save in scoreArray
      for (var i=0; i<db.length; i++){
            var otherscore = db[i].scores;
            var totalDifference = 0;
          for (var j=0; j<clientAlgor.length; j++){
             var sum = Math.abs(parseInt(clientAlgor[j])- parseInt(otherscore[j]));
             totalDifference += sum;
          };
          array.push(totalDifference);
      };
      //find the lowest difference of friend scores and post this particular friend in html
      for (var i=0; i<array.length; i++){
          if (array[i]< array[lowest]){
            lowest = i;
          };   
      };
      res.json(db[lowest]);
    });
};