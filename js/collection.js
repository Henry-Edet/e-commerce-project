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

// for slide show
var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slider");
    if (n > slides.length) {slide_index = 1}
    if (n < 1) {slide_index = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}

// auto play of images
window.setInterval(function() {
    nextSlide(1);
}, 6000);


var slide_index = 1;
DisplaySlides(slide_index);

function NextSlide(n) {
    DisplaySlides(slide_index += n);
}

function currentSlide(n) {
    DisplaySlides(slide_index = n);
}

function DisplaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("Sliding");
    if (n > slides.length) {slide_index = 1}
    if (n < 1) {slide_index = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}

// auto play of images
window.setInterval(function() {
    NextSlide(1);
}, 6000);

// logout button
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', ()=> {
    window.location.href = '../pages/LoginPage.html';
})