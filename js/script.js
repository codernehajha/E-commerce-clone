let cart = [];

function addToCart() {
    cart.push({ name: "Product Name", price: 20 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}

document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        li.classList.add("list-group-item");
        cartList.appendChild(li);
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
});
