// CALLBACK: A FUNCTION PASSED as a PARAMETER to another function
/*** VARIABLE DEFINITIONS
 * 
 */
const anonymousIntroduction = function() {
    console.log('My name is Steve (anonymous)');
}

function namedIntroduction() {
    console.log('My name is Steve (named)');
}

const anonymousGreetings = function(name, otherFunction) {
    console.log('anonymous HI ' + name);
    otherFunction();
}

function namedGreetings(name, otherFunction) {
    console.log('named HI ' + name);
    otherFunction();
}

// const identify = function(name, )

/*** FUNCTION EXECUTIIONS/CALLS
 * 
 */
namedGreetings('SEAF', anonymousIntroduction);

console.log('named HI ' + name);
console.log('My name is Steve (anonymous)');