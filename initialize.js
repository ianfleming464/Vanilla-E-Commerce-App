import { getProducts } from './api.js';
import { appendProduct } from './product.js';
import { loadCartFromLocalStorage } from './storage.js';
import { renderCart } from './cart.js';
import { updateTotal } from './total.js';

export function initialize() {
  const container = document.getElementById('container');
  const cart = loadCartFromLocalStorage();

  let total = 0;
  for (const itemId in cart) {
    const item = cart[itemId];
    total += item.price * item.quantity;
  }

  updateTotal(total);

  getProducts()
    .then(products => {
      products.forEach(item => {
        appendProduct(container, item);
      });
      renderCart(cart);
      // alert('products fetched');
      // console.log('products fetched :', products);
    })
    .catch(error => {
      console.log(error);
    });
}
