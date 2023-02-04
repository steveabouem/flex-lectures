// HIGHER ORDER FUNCTION: A FUNCTION THAT RECEIVES ANOTHR FUNCTION AS ARGUMENT

// STEP 1:  DECLARE/DEFINE A FUNCTION
// const describe = function(name, height, weight) {
    // STEP 2: WRITE SOME LOGIC INSIDE YOUR FUNCTION
    // console.log("The subject's name is ", name);
    // console.log("The subject's height is ", height);
    // console.log("The subject's weight is ", weight);


    // STEP3:  YOU WANT A CHUNK OF LOGIC HANDLED OUTSIDE YOUR FUNCTION: USE A CALLBACK

// };
// STEP 4: PASS THE OTHER FUNCTION AS A PARAMETER, IN OUR CASE callbackFunction
const describe = function(name, height, weight, callbacFunction) {
//    STEP: 5 EXECUTE THE CALLBACK
callbacFunction(name, height, weight)
};

const listAttributes = function(name, height, weight) {
    console.log("The subject's name is ", name);
    console.log("The subject's height is ", height);
    console.log("The subject's weight is ", weight);
}

const compare = function(name, height, weight) {
    console.log("I am definitely NOT ", name);
    console.log("I am definitely NOT ", height);
    console.log("I am definitely NOT ", weight);
}
// describe here is the HIGHER ORDER function, and listAttributes & compare are the callbacks
describe('Ali', '6  ft', '180 lbs', listAttributes);
describe('Ali', '6  ft', '180 lbs', compare);
