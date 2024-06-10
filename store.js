if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-remove");
    for(var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('shopping-cart')[0];
    var cartItems = cartItemContainer.getElementsByClassName('cart-item');
    var total = 0;
    for(var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        // may need to change this given cart-price isn't a direct child
        var priceElement = cartItem.getElementsByClassName('cart-price')[0];
        var quantityElement = cartItem.getElementsByClassName('quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity = parseInt(quantityElement.innerText);
        total += (price * quantity);
    }
    document.getElementById('total-price').innerText = "TOTAL: $" + total;
}

/* Potential new code for incrementer button - 
Commented out because it doesn't work yet
// This script is for the incremental-wrapper //
var plusButtons = document.getElementsByClassName('plus');
var minusButtons = document.getElementsByClassName('minus');
var numberButtons = document.getElementsByClassName('number');
for(var i = 0; i < plusButtons.length; i++) {
    var plus = plusButtons[i];
    plus.addEventListener("click", ()=> {
        var number = numberButtons[i];
        number.innerText = parseInt(number.innerText)++;
        updateCartTotal();
    })
}
for(var i = 0; i < minusButtons.length; i++) {
    var minus = minusButtons[i];
    plus.addEventListener("click", ()=> {
        if(a > 1) {
            var number = numberButtons[i];
            number.innerText = parseInt(number.innerText)--;
            updateCartTotal();
        }
    })
}
*/


var addToCartButtons = document.getElementsByClassName("btn-add-to-cart");
for(var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCart);
}

function addToCart(event) {
    var button = event.target;
    var item = button.parentElement.parentElement.parentElement;
    var title = item.getElementsByClassName('item-title')[0].innerText;
    var price = item.getElementsByClassName('item-price')[0].innerText;
    var imageSrc = item.getElementsByClassName('item-image')[0].src;
}

function updateCart(title, price, imageSrc) {
    var cartRow = document.createElement('article');
    cartRow.classList.add('cart-item');
    var cartRowContents = `
        <div class="cart-image">
            <img src=${imageSrc}>
        </div>
        <div class="details+price">
            <p>${title}</p>
            <h4 class="cart-price">${price}</h4>
        </div>

        <div class="increment-wrapper-cart">
            <span class="minus">-</span>
            <span class="number quantity">1</span>
            <span class="plus">+</span>
        </div>

        <button class="btn-text btn-remove">Remove</button>
    `
    cartRow.innerHTML = cartRowContents;
    var cartItems = document.getElementsByClassName('shopping-cart')[0];
    cartItems.append(cartRow);

}