// Global variables

const container = document.getElementById('container');
const total = document.getElementById('total');
let totalAmount = 0;
let cart = [];

// Function to format the price as a string with two decimal places
function formatPrice(price) {
  return `$ ${price.toFixed(2)}`;
}

// Function to append a product item to the container and update the total amount
function appendProduct(item) {
  const card = document.createElement('div');
  card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'flex', 'flex-col', 'gap-2');

  const id = item.id;

  const title = document.createElement('h3');
  title.textContent = item.title;
  title.classList.add('text-lg', 'font-semibold', 'truncate', 'text-center');

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

  const description = document.createElement('p');
  description.textContent = item.description;
  description.classList.add('text-sm', 'text-gray-600', 'text-justify');

  const price = document.createElement('button');
  price.textContent = formatPrice(item.price);
  price.classList.add(
    'bg-blue-100',
    'text-black',
    'rounded-md',
    'px-2',
    'py-1',
    'text-sm',
    'mt-auto',
  );

  price.addEventListener('click', () => {
    totalAmount += item.price;
    total.textContent = `Total: ${formatPrice(totalAmount)}`;
    addToCart(item);
  });

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(description);
  card.appendChild(price);

  container.appendChild(card);
}

// Function to intialise the app

function initialize() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      products.forEach(item => {
        appendProduct(item);
      });
    });
}

// Call the initialize function to start the app
initialize();

// TO DO:
// Figure out the shopping cart. A hidden div that appears upon clicking the View Cart button?
// Each element is created upon initialization. When we click the price button, we want to add the item to the cart array, and
// then append it to the DOM and display it in the panel. We also want to update the total amount.
// Next step should be remove the View Cart listener, ignore the functionality of this button for now.
// What needs to happen, is:
// 1. When we click the price button, we want to add the item to the cart array.
// 2. We want to append the item to the DOM and display it in the panel.
// 3. We want to update the total amount.
