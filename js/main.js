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

// toggles the big image to enlarge and shrink back
const image = document.getElementById("my-image");
image.addEventListener("click", function() {
    image.classList.toggle("scale");
});

const image1 = document.getElementById("my-image1");
image1.addEventListener("click", function() {
    image1.classList.toggle("scale");
});

const image2 = document.getElementById("my-image2");
image2.addEventListener("click", function() {
    image2.classList.toggle("scale");
});

const image3 = document.getElementById("my-image3");
image3.addEventListener("click", function() {
    image3.classList.toggle("scale");
});

// slide show for the big photo 
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
    var slides = document.getElementsByClassName("showSlide");
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