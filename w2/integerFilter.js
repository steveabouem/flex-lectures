// PROBLEM
// Write a callback function that 
// 1 - checks if the value at a specific index of an array is a number
// 2 - returns a message indicating if the element is and even or and odd number
// 3 - lists the elements of the array that are not numbers
// Bonus: use the built in filter method

let arr = [1, 2, 3, 4, 5, 'string', 'other', 'third', NaN];

const intLoop = (arrayParam, cbFunc) => {
    cbFunc(arrayParam);
};

const callBack = (param) => {
    // array of integers
    let integersArray = param.filter((el) => {
        return Number.isInteger(el);
    });

    // array of non integers
    let nonIntegersArray = param.filter((el) => {
        return !Number.isInteger(el);
    });

    // step1: loop through array
    for (let i = 0; i < integersArray.length; i++) {

        let elementValue = integersArray[i];

        // step2: find out if element is a number
        if (elementValue % 2 == 0) {
            console.log(`Element ${elementValue} IS AN EVEN INTEGER \n`);

        } else if (Math.abs(elementValue % 2) === 1) {
            console.log(`Element ${elementValue} IS AN ODD INTEGER \n`);
        }
    }

    console.log(`Non integer elements  ${nonIntegersArray}`);
};

intLoop(arr, callBack);