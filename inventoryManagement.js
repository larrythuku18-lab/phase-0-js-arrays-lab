// Write your code here
const products = ['Laptop', 'Phone', 'Headphones', 'Monitor', 'Keyboard']; 

function logFirstProduct() {
  console.log(products[0]);
}
function updateProductName(Mouse) {
  products[6] = 'Mouse';
  console.log(products);
}
function removeLastProduct() {
  products.pop();
  console.log(products);
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
}
