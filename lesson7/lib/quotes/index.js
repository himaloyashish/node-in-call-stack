/**
 * Title : Quotes Library
 * Description : Utility library for getting a list of quotes
 * Author : Himaloy Bala Ashish
 * Date : 4 / 5/ 2024
 * 
*/


// Dependency
const fs = require('fs');

// Quotes object - module scaffolding
const quotes = {};


// Get all the quotes

quotes.allQuote = function allQuote () {

    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');
    
    // The string into array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array.
    return arrayOfQuotes ;

}

module.exports = quotes;

