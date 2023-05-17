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



// this is to control auto switch of images on mens page
const imgBackground = document.querySelector('.retNike1');
const shoeName = document.querySelector('.atheleticNike');
const shoeWriteup = document.querySelector('.athleticTalk');
const writeUps = [["ATHLETIC NIKE", "Engineered for the strongest athletes. The retro Nike delivers a powerful combination of support, impact cushioning and balance."],
["NIKE 360", "The Nike 360 delivers a powerful combination of support, impact cushioning and  perfect balance."]];

const shoeColors = [
    'color1',
    'color2',
    'color3'
]

let counter = 0
const timer = setInterval(()=> {
    counter = counter === 2 ? 0 : counter
    console.log(counter)
    imgBackground.src = `../images/menBack_${counter}.png`;
    shoeName.innerHTML = `${writeUps[counter][0]}`
    shoeWriteup.innerHTML = `${writeUps[counter][1]}`
    counter += 1
}, 10000)
