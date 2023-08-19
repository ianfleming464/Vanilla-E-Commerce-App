import { formatPrice } from './helpers.js';

const totalElement = document.getElementById('total');
let totalAmount = 0;

export function updateTotal() {
  totalElement.textContent = `Total: ${formatPrice(totalAmount)}`;
}
