/* Write a program that takes in an unlimited number of command line arguments
 and prints out the sum of them.If any argument is not a whole number, skip it.
 Do not support negative numbers.*/

// 1- cleanup the array (remove the default strings)

// FOllowing steps not in chronological order
// 2 - Exclude any decimal number

// 3 - Exclude any non numeric value (string)

// 4 -Exclude any number that is negative



// STEP 1: cleanup arguments array
const argList = process.argv;
// console.log('argList', argList);

const cleanedUpArgs = argList.slice(2);
// console.log('Cleaned up', cleanedUpArgs);

let total = 0;
for (const arg of cleanedUpArgs) {
  // STEP 2 AND 3:  Only keep whole numbers
  const numberArg = Number(arg);
  // STEP 4 - Exclude any number that is negative
  if (Number.isInteger(numberArg) && numberArg > 0) {
    total += numberArg; // :)
  }
}

console.log('TOTAL: ', total);



