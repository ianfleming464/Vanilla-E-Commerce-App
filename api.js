// api call to get products for display

export async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  console.log('api.js loaded');
  return products;
}
