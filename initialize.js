import { getProducts } from './api.js';
import { appendProduct } from './product.js';
import { loadCartFromLocalStorage } from './storage.js';
import { renderCart } from './cart.js';

export function initialize() {
  const container = document.getElementById('container');
  const cart = loadCartFromLocalStorage();

  renderCart(cart);

  getProducts()
    .then(products => {
      products.forEach(item => {
        appendProduct(container, item);
      });
      // alert('products fetched');
      // console.log('products fetched :', products);
    })
    .catch(error => {
      console.log(error);
    });
}
