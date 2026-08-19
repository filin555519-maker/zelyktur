let cart = [];


/* ДОБАВЛЕНИЕ В КОРЗИНУ */

function addTour(name, price, image){

    cart.push({
        name:name,
        price:price,
        image:image
    });

    updateCart();

}


/* ОБНОВЛЕНИЕ КОРЗИНЫ */

function updateCart(){

    let count = cart.length;


    let cartCount = document.getElementById("cart-count");

    if(cartCount){
        cartCount.innerHTML = count;
    }


    let mobile = document.getElementById("mobile-cart-count");

    if(mobile){
        mobile.innerHTML = count;
    }


    let items = document.getElementById("cart-items");

    if(!items) return;


    items.innerHTML = "";

    let total = 0;


    cart.forEach((item,index)=>{

        total += item.price;


        items.innerHTML += `

        <div class="cart-item">

            <h3>${item.name}</h3>

            <p>${item.price} ₽</p>

            <button onclick="removeItem(${index})">
                ❌ Удалить
            </button>

        </div>

        `;

    });



    let totalBox = document.getElementById("cart-total");

    if(totalBox){

        totalBox.innerHTML =
        "Итого: " + total + " ₽";

    }

}



/* УДАЛЕНИЕ */

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}



/* ОТКРЫТЬ КОРЗИНУ */

function openCart(){

    document
    .getElementById("cart-panel")
    .classList.add("active");

}



/* ЗАКРЫТЬ КОРЗИНУ */

function closeCart(){

    document
    .getElementById("cart-panel")
    .classList.remove("active");

}



/* ОФОРМЛЕНИЕ ЗАКАЗА */

function makeOrder(){

    if(cart.length === 0){

        alert("Корзина пустая");

        return;

    }


    document.getElementById("call-window").style.display="flex";

}



/* ЗАКРЫТЬ ОКНО ЗВОНКА */

function closeCallWindow(){

    document.getElementById("call-window").style.display="none";

}



/* ПОИСК */

function searchTours(){

    let input =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();



    let cards =
    document.querySelectorAll(".card");



    cards.forEach(card=>{


        let text =
        card.innerText.toLowerCase();


        if(text.includes(input)){

            card.style.display="block";

        }
        else{

            card.style.display="none";

        }


    });

}



/* ТЁМНАЯ ТЕМА */

function toggleTheme(){

    document.body.classList.toggle("dark");


    let button =
    document.querySelector(".theme-button");


    if(document.body.classList.contains("dark")){


        if(button){
            button.innerHTML="☀️";
        }


        localStorage.setItem(
            "theme",
            "dark"
        );


    }else{


        if(button){
            button.innerHTML="🌙";
        }


        localStorage.setItem(
            "theme",
            "light"
        );

    }

}




/* СОХРАНЕНИЕ ТЕМЫ */

window.addEventListener("load",function(){


    if(localStorage.getItem("theme") === "dark"){


        document.body.classList.add("dark");


        let button =
        document.querySelector(".theme-button");


        if(button){

            button.innerHTML="☀️";

        }


    }


});
/* =========================
   МОБИЛЬНАЯ ВЕРСИЯ ZELYKTUR
========================= */


@media (max-width: 768px) {


/* HEADER */

.header {

    padding:15px;

    flex-wrap:wrap;

}


.logo img {

    width:45px;
    height:45px;

}


.logo h1 {

    font-size:22px;

}


.logo p {

    font-size:11px;

}


/* скрываем обычное меню */

.header nav {

    display:none;

}



/* кнопки */

.theme-button,
.cart-button {

    width:42px;
    height:42px;

}


/* HERO */

.hero {

    min-height:520px;

}


.hero-content {

    padding:25px;

    text-align:center;

}


.hero h2 {

    font-size:30px;

}


.hero p {

    font-size:16px;

}



/* кнопки */

.hero-buttons {

    display:flex;

    flex-direction:column;

    gap:12px;

}


.btn-primary,
.btn-secondary {

    width:100%;

    text-align:center;

    padding:16px;

}



/* ПОИСК */

.search {

    padding:15px;

}


.search input {

    width:100%;

    height:50px;

    border-radius:20px;

}



/* КАРТОЧКИ */

.cards {

    display:flex;

    flex-direction:column;

    gap:20px;

    padding:15px;

}


.card {

    width:100%;

    border-radius:25px;

    overflow:hidden;

}



.card img {

    width:100%;

    height:220px;

    object-fit:cover;

}



.card-content {

    padding:20px;

}



.card h3 {

    font-size:24px;

}



/* кнопки карточки */

.buttons {

    display:flex;

    flex-direction:column;

    gap:10px;

}



.details-btn,
.cart-btn {

    width:100%;

    padding:15px;

    border-radius:15px;

}



/* ГАЛЕРЕЯ */

.gallery-grid {

    grid-template-columns:1fr 1fr;

    gap:10px;

}


.gallery-grid img {

    height:140px;

    object-fit:cover;

    border-radius:15px;

}



/* О НАС */

.advantages {

    display:flex;

    flex-direction:column;

    gap:15px;

}



.advantage {

    border-radius:20px;

    padding:20px;

}



/* КОНТАКТЫ */

.contact-card {

    margin:15px;

    padding:25px;

    border-radius:25px;

}


/* МОБИЛЬНАЯ НАВИГАЦИЯ */

.mobile-nav {

    position:fixed;

    bottom:0;

    left:0;

    right:0;

    height:75px;

    display:flex;

    justify-content:space-around;

    align-items:center;

    z-index:1000;

}



.mobile-nav a,
.mobile-nav button {

    font-size:12px;

}



.mobile-nav span {

    font-size:25px;

}



/* КОРЗИНА */

#cart-panel {

    width:100%;

    height:90%;

    bottom:0;

    top:auto;

    border-radius:30px 30px 0 0;

}


/* ОКНО ЗВОНКА */

.call-box {

    width:90%;

    border-radius:30px;

}



/* FOOTER */

footer {

    padding-bottom:100px;

}


}