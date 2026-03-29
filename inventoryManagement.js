// Write your code here
const products = ['Laptop', 'Phone', 'Headphones', 'Monitor', 'Keyboard']; {

function logFirstProduct(products) {
  console.log(products[0]);
}
function updateProductName(products) {
  products.push('Mouse');
  console.log(products);
}
function removeLastProduct(products) {
  products.pop();
  console.log(products);
}
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
