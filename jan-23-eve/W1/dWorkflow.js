// Write a **node** program that takes in an **unlimited**
// number of command line arguments, goes through each 
// and prints out the sum of them.
// If any argument is not a whole number, skip it.
// Do support negative numbers though.

// what are the arguments that we receive from the c line?
// console.log('Array of c line arguments' , process.argv);

// returns 
// [
    //BY DEFAULT     '/home/steveabouem/.nvm/versions/node/v16.15.0/bin/node',
    //BY DEFAULT     '/home/steveabouem/flex-lectures/jan-23-eve/W1/dWorkflow.js',
    //   '1',
    //   '2',
    //   '3',
    //   '4',
    //   '5'
    //   ]
    
// How do we check that we a number argument?
// console.log('Is a number?', Number('1'));
// console.log('How about this one?', Number(1));

const cLineArguments = process.argv;


const getSumForArgs = function(argumentsArray) {
    let argumentSum = 0;

    for (const index of argumentsArray) {
        const numberIndex = Number(index); // NaN if string
        
        //check that we have a whole number (integer)
        if (Number.isInteger(numberIndex)){
            // if returns true, proceed to add to the sum
                argumentSum += Number(numberIndex);
        } 
    }
    // else do nothing
    
    return argumentSum;
};

console.log(getSumForArgs(cLineArguments));
// how to account for unlimited argumenst ?

