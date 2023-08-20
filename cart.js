import { updateTotal } from './total.js';

let cart = [];

export function addToCart(itemId) {
  console.log('Adding item to cart:', itemId);

  // I pass along the id, BUT perhaps I should push the whole object into the cart.Is this why it isn't working?

  cart.push(itemId);

  // Update the total
  updateTotal();

  // Log the cart
  console.log(cart);
}

export function logCart() {
  console.log('Cart : ', cart);
}
