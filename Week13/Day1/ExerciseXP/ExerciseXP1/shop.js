const products = require('./products.js');

const searchObject = (productName) => {
    const foundProduct = products.find(product => product.name === productName);
     if (foundProduct) {
        return foundProduct;
    } else {
        return 'The product is not available'
    }
};



console.log(searchObject('T-Shirt'));
console.log(searchObject('Keyboard'));
console.log(searchObject('Board'));
console.log(searchObject('TV'));
