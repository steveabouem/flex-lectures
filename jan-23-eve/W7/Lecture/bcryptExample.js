var bcrypt = require('bcryptjs');

var password = '123';
var salt = bcrypt.genSaltSync(10);

var hash = bcrypt.hashSync(password, salt);
console.log('CURRENT HASH: ', hash);
const validatePWD = bcrypt.compareSync('456', hash); // false
const validatePWD2 = bcrypt.compareSync('123', hash); // true

// console.log('456 matches? ', validatePWD);
// console.log('123 matches? ', validatePWD2);
