//FUNCTION PARAMETERS: AS YOU CREATE THE FUNCTION (ABSTRACT)
//FUNCTION ARGUMENTS: PASSED TO THE FUNCTION, BASDED ON THOSE ARGUMENTS (ACTUAL VALUE)

const anonymousGreetings = function(name) { // name here is a PARAMETER
    console.log('anonymous HI ' + name);
}

function namedGreetings(name) {
    console.log('named HI');
}


anonymousGreetings('JAMES'); // JAMES is the ARGUMENT for the name PARAMETER
// namedGreetings();