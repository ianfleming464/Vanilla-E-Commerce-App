import { updateTotal } from './total.js';

let cart = [];

export function addToCart(item) {
  console.log('Adding item to cart:', item);

  cart.push(item);

  // Update the total
  updateTotal();

  // Log the cart
  console.log(cart);
}

export function logCart() {
  console.log('Cart : ', cart);
}
