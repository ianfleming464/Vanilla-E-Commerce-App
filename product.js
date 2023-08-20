import { formatPrice } from './helpers.js';
import { addToCart } from './cart.js';
import { logCart } from './cart.js';

// Function to append a product to the DOM, add item to cart and update the total amount

export function appendProduct(container, item) {
  console.log('product.js loaded');
  // creates a reusable card for displaying the product
  const card = document.createElement('div');
  card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'flex', 'flex-col', 'gap-2');

  // creates a title for displaying the item title
  const title = document.createElement('h3');
  title.textContent = item.title;
  title.classList.add('text-lg', 'font-semibold', 'truncate', 'text-center');

  // creates an image for displaying the item image
  const image = document.createElement('img');
  image.src = item.image;
  image.classList.add(
    'w-full',
    'rounded-md',
    'mt-2',
    'object-scale-down',
    'h-52',
    'w-96',
    'border-2',
  );

  // creates a description for displaying the item description
  const description = document.createElement('p');
  description.textContent = item.description;
  description.classList.add('text-sm', 'text-gray-600', 'text-justify');

  // creates a price button for displaying the item price
  const priceButton = document.createElement('button');
  priceButton.textContent = formatPrice(item.price);
  priceButton.classList.add(
    'bg-blue-100',
    'text-black',
    'rounded-md',
    'px-2',
    'py-1',
    'text-sm',
    'mt-auto',
  );
  priceButton.dataset.id = item.id;

  /// HERE IS THE PROBLEM -- see also cart.js

  // adds an event listener to the price button to add the item to the cart
  priceButton.addEventListener('click', () => {
    addToCart(item.id);
    logCart();
  });

  // appends the title, image, description and price button to the card
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(description);
  card.appendChild(priceButton);

  // appends the card to the container
  container.appendChild(card);
}
