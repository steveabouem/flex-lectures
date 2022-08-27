// BCRYPT PLAYGROUND
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const password = '1234';

const hash = bcrypt.hashSync(password, salt);

console.log({password, hash: hash });