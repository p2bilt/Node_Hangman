const fs = require("fs");

//Random movie title is selected and exported
var text = fs.readFileSync("./movies.txt").toString('utf-8');

var movieArray = text.split(",");

answerMovie = movieArray[Math.floor(Math.random() * movieArray.length)];

exports.answerMovie = answerMovie;