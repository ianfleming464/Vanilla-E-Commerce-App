import { updateTotal } from './total.js';

let cart = [];

export function addToCart(item) {
  console.log('Adding item to cart:', item);
  cart.push(item);

  // Update the total
  const itemPrice = item.price;
  updateTotal(itemPrice);
}
