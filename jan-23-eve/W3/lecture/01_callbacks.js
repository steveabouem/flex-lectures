const calculate = (callback) => {
    console.log('Result for the number 1', callback(1));
    console.log('Result for the number 2', callback(2));
    console.log('Result for the number 3', callback(3));
}

const plusOne = (number) => {
    if (typeof number !== 'number') {
        throw new Error('its not a number');
    }
    return number + 1;
}

const minusOne = (number) => {
    return number - 1;
}

try {

    executeUnknownFunction(); // ===> moves immediately to the catch block, skips 
    // all other lines  in the try block
    calculate(plusOne);
} catch(error) {
    console.log(error);
}
// CODE BELOW STILL RUNS EVEN IN CASE OF ERROR
calculate(plusOne);

