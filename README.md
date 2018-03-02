# Node_Hangman

Node_Hangman ("Hollywood Hangman" edition) is a game that takes in letter guesses to see if it is part of a randomly chosen movie title.

## Process

This Hangman Game was created using JavaScript, Node.js and the Inquirer package.
The game was coded with the intention of using Function Constructors to implement
various objects. When a new gameObject is created, a random title is chosen from a
text file and is used to create a wordObject version of itself. Each letter of the word
is then transformed into a letterObject. Due to the asynchronized nature of the ("fs") package,
a custom promise was created to ensure that the gameObject did not contain an undefined word
when the game ran.

Basic error handling was done to prevent invalid input.

## Installation

Hangman-Node can be downloaded by cloning this repository `https://github.com/roverkim/Hangman-Node`

After installation, open node and run `npm install` in the local file location.

To run Hangman-Node, type `node index.js`

## Files

Instead of grouping all the code in one file, Hangman-Node has been split into multiple files.

1. `index.js` Starting Script that invokes the gameConstructor to create a new gameObject
2. `constructors/gameConstructor.js` Stores the logic of the gameConstructor. New wordObject is created within the gameObject.
3. `constructors/wordConstructor.js` Stores the logic of the wordConstructor. New letterObjects are created within the wordObject.
4. `constructors/letterConstructor.js` Stores the logic of the letterConstructor.
5. `assets/hangmanDrawings.js` Stores an Array of Hangman Figures used when displaying a wrong guess.
6. `assets/questions.js` Stores inquirer questions.
7. `assets/word.txt` Stores a list of words. Feel free to add your own words into the list. Each word / words needs to be on its own line.
