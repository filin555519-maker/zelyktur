let cart = [];


/* ДОБАВЛЕНИЕ В КОРЗИНУ */

function addTour(name, price, image){

    cart.push({
        name: name,
        price: price,
        image: image
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


    let mobileCount = document.getElementById("mobile-cart-count");

    if(mobileCount){
        mobileCount.innerHTML = count;
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



    let totalBlock = document.getElementById("cart-total");

    if(totalBlock){

        totalBlock.innerHTML =
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

    let cartPanel = document.getElementById("cart-panel");

    if(cartPanel){

        cartPanel.classList.add("active");

    }

}



/* ЗАКРЫТЬ */

function closeCart(){

    let cartPanel = document.getElementById("cart-panel");

    if(cartPanel){

        cartPanel.classList.remove("active");

    }

}




/* ЗАКАЗ */

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




/* ТЁМНАЯ ТЕМА */

function toggleTheme(){

    document.body.classList.toggle("dark");


    let button = document.querySelector(".theme-button");


    if(document.body.classList.contains("dark")){

        button.innerHTML="☀️";

        localStorage.setItem("theme","dark");

    }
    else{

        button.innerHTML="🌙";

        localStorage.setItem("theme","light");

    }

}




/* ЗАГРУЗКА ТЕМЫ */

window.onload=function(){


    updateCart();


    if(localStorage.getItem("theme") === "dark"){


        document.body.classList.add("dark");


        let button=document.querySelector(".theme-button");


        if(button){

            button.innerHTML="☀️";

        }

    }

};





/* ПОИСК */

function searchTours(){


    let input=document
    .getElementById("searchInput")
    .value
    .toLowerCase();



    let cards=document.querySelectorAll(".card");



    cards.forEach(card=>{


        let text=card.innerText.toLowerCase();



        if(text.includes(input)){

            card.style.display="block";

        }
        else{

            card.style.display="none";

        }


    });


}