import { updateTotal } from './total.js';

let cart = [];

export function addToCart(itemId) {
  const item = getItemById(itemId);
  cart.push(item);
  updateTotal();
}
