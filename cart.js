import { updateTotal } from './total.js';

let cart = [];

export function addToCart(itemId) {
  console.log('Adding item to cart:', itemId);

  // I am JUST passing along the id, should I pass along the whole object?

  cart.push(item);

  // Update the total
  updateTotal();

  // Log the cart
  console.log(cart);
}

export function logCart() {
  console.log('Cart : ', cart);
}
