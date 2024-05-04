/**
 * Little basic node application
 * Description : simple node application that print quotes per second interval.
 * Author : Himaloy Bala Ashsih
 * Date : 3 / 5 / 2024
 *
 */

// Dependency

const mathLibrary = require("./lib/math");
const quoteLibrary = require("./lib/quotes");


// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
  timeBetweenQuote: 1000,
};

app.printAQuote = function printAQuote() {
  // get all the quotes
  const allQuotes = quoteLibrary.allQuote() ;

  // Get the length of the quote library.
  const numberOfQuotes = allQuotes.length;

  // Pick a random number between 6 and 1 
  const randomQuotes = mathLibrary.getRandomNumber(1, numberOfQuotes);
  
  // Get that quote at that position in the array ( One Minus )
  const selectQuote = allQuotes[randomQuotes - 1];

  console.log(selectQuote);

};

app.indefiniteLoop = function indefiniteLoop() {
    setInterval( app.printAQuote , app.config.timeBetweenQuote );
};

app.indefiniteLoop();