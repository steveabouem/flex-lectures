/**
 * Primitives
 * 
 * Immutable / Passed By-Value
 * 
 * - string
 * - number (integer / float)
 * - bigint
 * - boolean
 * - null
 * - undefined
 * - symbol
 */
let string1 = 'original string'; // separate reference in memory
let string3 = string1;
string3 = 'hello world';

// console.log(string1, '\n', string3);
/**
 * More Complex Data Structures
 * 
 * Mutable / Passed By-Reference
 * 
 * - object (array)
 * - function
 */

const array1 = [1, 2, 3];
const array2 = array1;
// const newArr = JSON.parse(JSON.stringify(array1));
// newArr.push('ANOTHER TEST');

// newArr.push('test');
// console.log(array1, '\n', array2, '\n', newArr);
