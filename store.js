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

    // Post code shipping validation
    document.getElementById('shipping-form').addEventListener('submit', calculateShipping);

    // Coupon code form validation
    document.getElementById('coupon-form').addEventListener('submit', applyCoupon);
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

function applyCoupon(event) {
    event.preventDefault();
    // get the entered coupon code
    const couponCode = document.getElementById('coupon-input').value;

    // display the message
    const messageElement = document.getElementById('coupon-message');
    messageElement.textContent = `Coupon code "${couponCode}" applied`;
}

function calculateShipping(event) {
    // prevent default form submission
    event.preventDefault();
    
    // get the entered coupon code
    const postCode = document.getElementById('shipping-input').value;
    
    // display the message
    const messageElement = document.getElementById('shipping-message');
    messageElement.textContent = `Shipping to ${postCode} is $5.00`;
}

// Coupon code form validation
document.getElementById('coupon-form').addEventListener('submit', applyCoupon);

function applyCoupon(event) {
    event.preventDefault();
    // get the entered coupon code
    const couponCode = document.getElementById('coupon-input').value;

    // display the message
    const messageElement = document.getElementById('coupon-message');
    messageElement.textContent = `Coupon code "${couponCode}" applied`;
}

// Post code shipping validation
document.getElementById('shipping-form').addEventListener('submit', calculateShipping);

function calculateShipping(event) {
    // prevent default form submission
    event.preventDefault();
    
    // get the entered coupon code
    const postCode = document.getElementById('shipping-input').value;
    
    // display the message
    const messageElement = document.getElementById('shipping-message');
    messageElement.textContent = `Shipping to ${postCode} is $5.00`;
}