import { getProducts } from './api.js';
import { appendProduct } from './product.js';

export function initialize() {
  const container = document.getElementById('container');
  getProducts().then(products => {
    products.forEach(item => {
      appendProduct(container, item);
    });
  });
}
