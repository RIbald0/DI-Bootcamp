const _ = require('lodash');
const {add, multi} = require('./math.js');

console.log(add(4, 2));
console.log(multi(4, 2));

const numbers = [4, 6, 8, 10]
_.fill(numbers, 'a');
console.log(numbers);