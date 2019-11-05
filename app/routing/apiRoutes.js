
var surveyData = require("../data/friends");

module.exports = function(app) {
//For display of all possible friends
app.get("/api/friends", function(req, res) {
    res.json(surveyData);
    })

//Post from incoming survey results
app.post("/api/friends", function(req, res) {
    res.json(surveyData);
    })
};