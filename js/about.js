// js to control the dropdown of the cart 
let offCart = document.getElementById("cart_click");
let dropCart = document.querySelector(".drop_down_cart");

function clickable() {
    dropCart.classList.toggle('flex');
}


// avatar image drop down
let offAvatar = document.getElementById("avatar_img");
let logDrop = document.querySelector(".avatar_drop_down");

function avatar_click() {
    logDrop.classList.toggle('flex');
}

// this open the my account dropdown inside the avatar dropdown
let offAccount = document.getElementById('accountOpen');
let overView = document.querySelector(".acctOverview");

let constant = 1

function myAccount() {
    if (constant === 1) {
        overView.style.display = "block";
    } 
}



// this function is to control the click events of any drop down on the page, making sure anywhere u click it'll turn off any dropdown
window.addEventListener('click', function (e) {
    const eventTarget = e.target.id ?? '';
    if (eventTarget != 'cart_click') {
        dropCart.classList.remove('flex')
    }
    if (eventTarget != 'avatar_img') {
        logDrop.classList.remove('flex')
    }
})

// toggles the close button for acct page of user
closeButton.addEventListener('click', function() {
    overView.style.display = 'none';
})