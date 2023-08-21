import { updateTotal } from './total.js';
import { formatPrice } from './helpers.js';

let cart = [];

export function addToCart(item) {
  console.log('Adding item to cart:', item.title);
  cart.push(item);
  console.log(cart);

  // Update the total
  const itemPrice = item.price;
  updateTotal(itemPrice);

  // Update cart contents
  updateCart();
}

export function updateCart() {
  const cartContent = document.querySelector('#cart .cart-content');
  cartContent.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('flex', 'justify-between', 'items-center', 'px-4', 'py-2', 'border-b');
    const title = document.createElement('h3');
    title.textContent = item.title;
    const price = document.createElement('div');
    price.textContent = formatPrice(item.price);
    cartItem.appendChild(title);
    cartItem.appendChild(price);
    cartContent.appendChild(cartItem);
  });
}
