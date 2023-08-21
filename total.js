import { formatPrice } from './helpers.js';

const totalElement = document.getElementById('total');
let totalAmount = 0;

export function updateTotal(itemPrice) {
  totalAmount += itemPrice;
  totalElement.textContent = `Total: ${formatPrice(totalAmount)}`;
}
