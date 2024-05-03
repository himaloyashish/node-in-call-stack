/**
 * Little basic node application
 * Description : simple node application that print quotes per second interval.
 * Author : Himaloy Bala Ashsih
 * Date : 3 / 5 / 2024
 *
 */

// Dependency

const mathLibrary = require("./lib");
const QuoteLibrary = require("./lib");

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
  timeBetweenQuote: 1000,
};

app.printAQuote = function printAQuote() {
  // get all the quotes
  const allQuotes = "";
};

app.indefiniteLoop = function indefiniteLoop() {
    setInterval('', 1);
};

// app.indefiniteLoop();