//Check the letters guessed versus the random word selected
var letterCons = require("./lettery.js");

function word(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new letterCons.letter(this.value[i]));
	}
}

// is the entire movie title guessed? (are all the flags on the letters set to show=true)
word.prototype.isComplete = function(){

	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].show) return false;
	}
	return true;
};

// convert guesses to lower case; check them against a record of guesses already made.
// if it's already been guessed, throw up an alert. if it hasn't, record the guess - 
// then check against our title-in-an-array, change the flags on any correctly matched letters.
word.prototype.findLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		console.log("\nYou already guessed '" + lowerLetter + "'! Try again.");
		return "Duplicate";
	} 

	this.guessesMade += lowerLetter; //Record the guess


	for(var i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].show = true;
		}
	}
};

word.prototype.toString = function(){
  var output = "";
  for(var i=0; i<this.letters.length; i++){
    output += this.letters[i].printInfo();
  }
  return output;
};

exports.wordCons = word;