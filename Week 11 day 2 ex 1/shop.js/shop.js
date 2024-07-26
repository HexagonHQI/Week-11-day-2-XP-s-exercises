// shop.js
const products = require('./products');

function findProductByName(productName) {
  return products.find(product => product.name === productName);
}

// Example usage:
const laptop = findProductByName('Laptop');
console.log(laptop);

const tShirt = findProductByName('T-Shirt');
console.log(tShirt);
