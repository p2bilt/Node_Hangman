// Contains a constructor, Letter. 
// `Letter.js` *should not* `require` any other files.
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
// **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`
// **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically 
// whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

const Letter = function() {
    // A string value to store the underlying character for the letter
    this.letterForReal = letterForReal;
    
    // A boolean value that stores whether that letter has been guessed yet
    var letterGuess = false;

    // A function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed

    // A function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly

    // A function that takes a character as an argument and calls the guess function on each letter object 
    // (the second function defined in `Letter.js`)

// }

var test = "Fart Brain Mungbutter";

testUnder = test.replace(/[a-z]/gi, '_ ');

console.log(testUnder);