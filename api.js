// api call to get products for display

export async function getProducts() {
  alert('getProducts called');
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  alert('products successfully fetched');
  console.log('products fetched : ', products);
  return products;
}
