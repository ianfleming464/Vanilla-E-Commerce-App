import { initialize } from './initialize.js';

const viewCartButton = document.getElementById('view-cart-button');
const cartElement = document.getElementById('cart');
const closeCartButton = document.getElementById('close-cart');
// alert('index loaded');
// console.log('index loaded');
initialize();

viewCartButton.addEventListener('click', () => {
  cartElement.style.transform = 'translateX(0)';
  // alert('view cart button clicked');
});

closeCartButton.addEventListener('click', () => {
  cartElement.style.transform = 'translateX(100%)';
});

document.body.addEventListener('click', event => {
  if (
    event.target !== cartElement &&
    !cartElement.contains(event.target) &&
    event.target !== viewCartButton
  ) {
    if (cart.length > 0) {
      cartElement.style.transform = 'translateX(100%)';
    }
  }
});

// 21.08.2023
// To do : add a quantity calculation to the cart
