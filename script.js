let cart = JSON.parse(localStorage.getItem("zelytourCart")) || [];

updateCart();

function saveCart() {
    localStorage.setItem("zelytourCart", JSON.stringify(cart));
}

function addTour(name, price, image) {

    const item = cart.find(tour => tour.name === name);

    if (item) {
        item.count++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            count: 1
        });
    }

    saveCart();
    updateCart();

    alert("✅ Экскурсия добавлена в корзину!");
}

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const total = document.getElementById("cart-total");

    if (!cartItems || !cartCount || !total) return;

    cartItems.innerHTML = "";

    let sum = 0;
    let count = 0;

    cart.forEach((item, index) => {

        sum += item.price * item.count;
        count += item.count;

        cartItems.innerHTML += `
        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>${item.price} ₽</p>

                <div class="cart-controls">

                    <button onclick="minusItem(${index})">−</button>

                    <span>${item.count}</span>

                    <button onclick="plusItem(${index})">+</button>

                </div>

            </div>

            <button class="delete-btn"
            onclick="removeItem(${index})">

            🗑

            </button>

        </div>
        `;
    });

    cartCount.innerText = count;
    total.innerText = "Итого: " + sum + " ₽";
}

function plusItem(index) {

    cart[index].count++;

    saveCart();

    updateCart();

}

function minusItem(index) {

    cart[index].count--;

    if (cart[index].count <= 0) {

        cart.splice(index, 1);

    }

    saveCart();

    updateCart();

}

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}

function openCart() {

    document.getElementById("cart-panel").classList.add("active");

}

function closeCart() {

    document.getElementById("cart-panel").classList.remove("active");

}

function searchTours() {

    let value = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}
function callToOrder() {
    window.location.href = "tel:+79913825202";
}