
document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const name = this.getAttribute("data-name");
      const price = parseFloat(this.getAttribute("data-price"));

      if (!name || isNaN(price)) {
        alert("Invalid product data.");
        return;
      }

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} added to cart.`);
    });
  });
});
