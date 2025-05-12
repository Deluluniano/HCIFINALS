
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            if (item && item.name && item.price && item.qty) {
                const div = document.createElement("div");
                div.className = "card mb-2 p-2";
                div.innerHTML = `<p><strong>${item.name}</strong> - ₱${item.price} x ${item.qty}</p>`;
                cartItems.appendChild(div);
                total += item.price * item.qty;
            }
        });
    }

    document.getElementById("total-price").textContent = total.toFixed(2);
});
