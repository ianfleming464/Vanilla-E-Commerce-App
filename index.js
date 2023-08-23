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

// 23.08.2023
// To do tonight / tomorrow:
// 1 - add a try catch to initialize
// 2 - add a try catch to getProducts
// 3 - make cart BIGGER and style it a bit
// 4 - fix off-cart click to close cart
// 5 - add a quantity calculation to the cart - ee ChatGPT suggestion of using an object instead of an array?
// 6 - minus after removing all items from cart?
