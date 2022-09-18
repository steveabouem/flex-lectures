
// This is a STRETCH QUESTION.


// BASE QUESTION: 
// Convert an array of arrays into an object.

// This is the inverse of the previous question.

// Arrays will only have two elements: [key, value]

// To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

// Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.



// Let's revisit Question 01 which had us convert an array of arrays into an object.

// This time, make it support nested arrays.

// The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

// Non-array objects need NOT be supported/handled at all.

// Examples:

// - deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
// - deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
//   => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

const deepArrayToObject = function (arr) {
    const resultObject = {};

    arr.forEach(a => {
        if (Array.isArray(a[1])) {
            resultObject[a[0]] =  arrayCallback(a[1]);
        } else {
            resultObject[a[0]] = a[1];
        }
    });
    
    console.log(resultObject);
    return(resultObject);
};

const arrayCallback = (arr) => {
    //example:  [['d', 4]]
    // example: [['d', [['e', 5], ['f', 6]]]]] 
    const array = Object.fromEntries(arr);

    for (const el in array) {
        // ['d', 4], ['d', [['e', 5], ['f', 6], ['z', [...[]...[]]]]]]
        if (Array.isArray(array[el])) {
            array[el] =  deepArrayToObject(array[el]);
        }
    }

    return array;
};

//   => { a: 1, b: 2, c: { d: 4 } }
deepArrayToObject([
    ['a', 1], ['b', 2], ['c', [['d', 4]]]
]);