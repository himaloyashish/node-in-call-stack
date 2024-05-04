/**
 * Title : Math Library
 * Description : Utility Library for math related functions
 * Author: Himaloy Bala Ashish
 * Date : 3 / 4 / 2024
*/

// math object - module scaffolding

const math = {};

// Get a random tow integer between two integer

math.getRandomNumber = function getRandomNumber (min, max) {

    let minimum = min;
    let maximum = max;

    minimum = typeof minimum == 'number' ? minimum : 0;
    maximum = typeof maximum == 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)

};



// Export the library.
module.exports = math;