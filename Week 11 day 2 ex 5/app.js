// app.js
const _ = require('lodash');
const math = require('./math');

const numbers = [1, 2, 3, 4, 5];

const sum = _.sum(numbers);
const product = math.multiply(3, 4);

console.log('Sum:', sum);
console.log('Product:', product);
