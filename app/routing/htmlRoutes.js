
var path = require("path");


module.exports = function(app) {

    // Route should display the survey page
    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    //Route should default to the home page regardless of input
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};