// 1. Store arguments to a new array
let args = process.argv;
let total = 0;

// 2. Splice the first 2 arguments. To remove the default strings. 
args.splice(0, 2);

// console.log('Step 2', args);

// 3. loop through the arguments of the formatted array

for (let i = 0; i < args.length; i++) {
    let valueAtIndex = Number(args[i]);

    // - Establish a condition to check if the arguments is a number
    // - Ignore any non number arguments.
    if (Number.isInteger(valueAtIndex)) {
        total += valueAtIndex;
        // console.log('Added up argument', total);
    } else {
        // console.log('');
        // console.log(`${valueAtIndex} is not an integer`);
    }
}

// 4. Log the result 
console.log('Integer arguments sum: ', total);