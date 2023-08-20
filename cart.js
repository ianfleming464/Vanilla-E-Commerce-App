import { updateTotal } from './total.js';

let cart = [];

export function addToCart(item) {
  console.log('Adding item to cart:', item);

  // I pass along the id, BUT perhaps I should push the whole object into the cart. Is this why it isn't working?

  cart.push(item);

  // Update the total
  updateTotal();

  // Log the cart
  console.log(cart);
}

export function logCart() {
  console.log('Cart : ', cart);
}
