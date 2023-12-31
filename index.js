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
    cartElement.style.transform = 'translateX(100%)';
  }
});

// 23.08.2023
// To do tonight / tomorrow:
// // 1 - add a try catch to initialize - DONE
// // 2 - add a try catch to getProducts - DONE
// // 3 - make cart BIGGER (DONE )and style it a bit
// // 4 - fix off-cart click to close cart DONE
// // 5 - add a quantity calculation to the cart - see ChatGPT suggestion of using an object instead of an array?
// // 6 - minus after removing all items from cart?
// 7 - cart automatically closes once all items removed via the remove button?

// Once the Remove button is clicked, the cart automatically closes, whether or not it is empty. To fix this, we can add an if statement to the removeFromCart function to check if the cart is empty. If it is empty, we can keep the cart open??

// TO ASK BRIAN: HOW CAN I KEEP THE CART OPEN AFTER REMOVING ALL ITEMS FROM THE CART USING THE REMOVE BUTTON??
