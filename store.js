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