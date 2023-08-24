export function loadCartFromLocalStorage() {
  const cartJson = localStorage.getItem('cart');
  return cartJson ? JSON.parse(cartJson) : {};
}

export function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
