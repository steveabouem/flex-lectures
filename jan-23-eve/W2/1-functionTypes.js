// ANONYMOUS AKA FUNCTION EXPRESSION
// NOT ACCESSIBLE BEFORE DEFINITION
const anonymousGreetings = function() {
    console.log('anonymous HI');
}

// FUNCTION DECLARATION AKA NAMED FUNCTION
// accessible on compilation,
// MEANING EVEN BEFORE DEFINITION
function namedGreetings() {
    console.log('named HI');
}


namedGreetings();
anonymousGreetings(); // this will break