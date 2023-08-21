import { initialize } from './initialize.js';

const viewCartButton = document.getElementById('view-cart-button');
const cartElement = document.getElementById('cart');
const closeCartButton = document.getElementById('close-cart');
// alert('index loaded');
// console.log('index loaded');
initialize();

viewCartButton.addEventListener('click', () => {
  cartElement.style.transform = 'translateX(0)';
  alert('view cart button clicked');
});

closeCartButton.addEventListener('click', () => {
  cartElement.style.transform = 'translateX(100%)';
});

// TO DO
// We want to now calculate the total based on the cart total, not on button clicks. Button click, add to cart, update total.
