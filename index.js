var getMovie = require("./getmovie.js");
var wordCons = require("./wordy.js");
var letterCons = require("./lettery.js");
var inquirer = require("inquirer");
var answerMovie = getMovie.answerMovie;
var letterGuessed;

exports.letter;

var myTitle = new wordCons.wordCons(getMovie.answerMovie);

var maxGuesses = 15;

function takeAGuess() {

    console.log(myTitle.toString());

    if (myTitle.guessesMade.length >= maxGuesses) {
        console.log('You have no more guesses. Very sad.\n');
        console.log('\nIn fact, the title of your movie was:\n' + getMovie.answerMovie + '.\n');
        return; //Game over
    }
    inquirer.prompt([{

        name: 'letter',
        type: 'text',
        message: '\nEnter a letter:',
        validate: function(str) {

            //			validate user input
            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            return regEx.test(str);

        }

    }]).then(function(letterInput) {

        //Game control. Log the user input, and check agains hidden letters. 
        var letter = letterInput.letter;
        myTitle.findLetter(letter);

        //Check is the entire movie title guessed?
        if (myTitle.isComplete()) {

            console.log('\nYes! The title of your movie was:\n' + getMovie.answerMovie + ' !!\n');

            gameAgain();

            // return; 
            //Winner winner chicken dinner
        } else {
		//If we are here the game did not end. Next guess.
        console.log('___________________________________________________\n'); 
        console.log('You have ' + (maxGuesses - myTitle.guessesMade.length) + ' guesses left.');
        console.log('Letters already guessed: '+myTitle.guessesMade.replace(/\B/g, ", ")+'\n');
        //Recursive call
        takeAGuess(); 
    }
    });
}

console.log('\n**************************************************************************');
console.log('                     Welcome to Hollywood Hangman                         ')
console.log('**************************************************************************');
console.log('                        Guess the Movie Title                            \n\n');

takeAGuess(); //Start Game

function gameAgain() {


    inquirer.prompt([{
        type: "confirm",
        name: "startAgain",
        message: "Would You Like to Play again??"
    }]).then(function(answer) {

        if (answer.startAgain) {

myTitle = new wordCons.wordCons(getMovie.answerMovie);
            answerMovie = getMovie.answerMovie;
            console.log("new movie?"+answerMovie);
            takeAGuess();

        }
        return;

    });


}
