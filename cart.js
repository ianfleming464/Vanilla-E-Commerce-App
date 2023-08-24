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

  // If the cart is empty, after items have been remove using the Remove button, keep the cart open
  if (cart.length === 0) {
    const cartElement = document.getElementById('cart');
    cartElement.style.transform = 'translateX(0)';
  }
}

// Function to append the cart contents to the DOM
function updateCart() {
  const cartContent = document.querySelector('#cart .cart-content');
  cartContent.innerHTML = '';

  cart.forEach(item => {
    // create a div for each item
    const cartItem = document.createElement('div');
    cartItem.classList.add('flex', 'flex-col', 'px-4', 'py-2', 'border-b');

    // create a title for each item with a maximum of 4 words
    const title = document.createElement('div');
    title.textContent = item.title.split(' ').slice(0, 4).join(' '); // Limit to 4 words
    title.classList.add(
      'font-bold',
      'text-lg',
      'whitespace-nowrap',
      'overflow-ellipsis',
      'overflow-hidden',
    );

    // create a price for each item with a smaller font
    const price = document.createElement('div');
    price.textContent = formatPrice(item.price);
    price.classList.add('text-sm');

    // create a quantity field (initially blank)
    const quantity = document.createElement('div');
    quantity.textContent = 'Quantity: '; // You can update this with the actual quantity value

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('bg-red-500', 'text-white', 'rounded-md', 'px-2', 'py-1', 'text-sm');
    removeButton.addEventListener('click', () => removeFromCart(item));

    // Add the elements to the cart item
    cartItem.appendChild(title);
    cartItem.appendChild(price);
    cartItem.appendChild(quantity);
    cartItem.appendChild(removeButton);

    cartContent.appendChild(cartItem);
  });
}
