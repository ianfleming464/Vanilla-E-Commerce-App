import { updateTotal } from './total.js';
import { formatPrice } from './helpers.js';

let cart = [];

// Function to add an item from the cart
export function addToCart(item) {
  console.log('Adding item to cart:', item.title);
  cart.push(item);
  console.log(cart);

  // Update the total
  const itemPrice = item.price;
  updateTotal(itemPrice);

  // Update DOM with cart contents
  updateCart();
}

// Function to remove an item from the cart
function removeFromCart(item) {
  cart = cart.filter(cartItem => cartItem !== item); // Remove item from cart array
  updateCart(); // Update the cart in the DOM

  // Update the total by subtracting the removed item's price
  const itemPrice = -item.price;
  updateTotal(itemPrice); // Update the total
}

// Function to append the cart contents to the DOM
function updateCart() {
  const cartContent = document.querySelector('#cart .cart-content');
  cartContent.innerHTML = '';

  cart.forEach(item => {
    // create a div for each item
    const cartItem = document.createElement('div');
    cartItem.classList.add('flex', 'justify-between', 'items-center', 'px-4', 'py-2', 'border-b');

    // create a title for each item
    const title = document.createElement('h3');
    title.textContent = item.title;

    // create a price for each item
    const price = document.createElement('div');
    price.textContent = formatPrice(item.price);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('bg-red-500', 'text-white', 'rounded-md', 'px-2', 'py-1', 'text-sm');
    removeButton.addEventListener('click', () => removeFromCart(item));

    cartItem.appendChild(title);
    cartItem.appendChild(price);
    cartItem.appendChild(removeButton);

    cartContent.appendChild(cartItem);
  });
}
