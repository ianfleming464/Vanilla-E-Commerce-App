import { getProducts } from './api.js';
import { appendProduct } from './product.js';

export function initialize() {
  alert('initialize called');
  const container = document.getElementById('container');
  getProducts().then(products => {
    products.forEach(item => {
      appendProduct(container, item);
    });
    alert('products fetched');
    console.log('products fetched :', products);
  });
}
