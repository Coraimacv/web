function updateCartCount() {
  const count = localStorage.getItem("cartCount") || 0;
  document.getElementById("cartCount").textContent = count;
}

function addToCart(productName, price) {
  let count = parseInt(localStorage.getItem("cartCount") || "0");
  count++;
  localStorage.setItem("cartCount", count);

  let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
  cart.push({ name: productName, price: price });
  localStorage.setItem("cartProducts", JSON.stringify(cart));

  updateCartCount();
}

updateCartCount();

addToCart('New era x Bad Bunny', 100)
addToCart('Adidas X Bad Bunny', 400)
addToCart('Sudadera Un Verano Sin Ti', 100)
addToCart('Polo Boxy Un Verano Sin Ti', 100)
addToCart('Adidas X Bad Bunny', 400)
