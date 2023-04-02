let countEl = document.getElementById("count_el")
let addToCart = document.getElementById("btn-cart")
let cartCounter = document.getElementById("add_cart_counter")

let count = 0
let adder = 0

function addCart() {
    adder += count
    cartCounter.textContent = adder
    count = 0
    countEl.textContent = 0
}

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count > 0) {
        count -= 1
        countEl.textContent = count
    }

}


// js to control the dropdown of the cart 
// const body = document.querySelector("body");
let offCart = document.getElementById("cart_click");
let dropCart = document.querySelector(".drop_down_cart");
let click = 0

function clickable() {
    console.log(dropCart.classList)
    dropCart.classList.toggle('flex');
    // if (click === 1) {
    //     dropCart.style.display = "flex";
    //     click = 0
    // } else {
    //     dropCart.style.display = "none";
    //     click = 1
    // }
}


// avatar image drop down

let offAvatar = document.getElementById("avatar_img");
let logDrop = document.querySelector(".avatar_drop_down");

let change = 0

function avatar_click() {
    if (change === 1) {
        logDrop.style.display = "flex";
        change = 0
    } else {
        logDrop.style.display = "none";
        change = 1
    }
}

// this open the my account dropdown inside the avatar dropdown
let offAccount = document.getElementById('accountOpen');
let overView = document.querySelector(".acct_overview");

let constant = 0

function myAccount() {
    if (constant === 1) {
        overView.style.display = "block";
        constant = 0
    } else {
        overView.style.display = "none";
        constant = 1
    }
}

// this function is to control the click events of any drop down on the page, making sure anywhere u click it'll turn off any dropdown
window.addEventListener('click', function (e) {
    const eventTarget = e.target.id ?? '';
    if (eventTarget != 'cart_click') {
        dropCart.classList.remove('flex')
    }
})

