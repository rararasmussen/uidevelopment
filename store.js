/* Wait until everything is done loading to perform any actions */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

/* Add event listeners */
function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-remove");
    for(var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    /* Post code shipping validation ***************************************************************/
    document.getElementById('shipping-form').addEventListener('submit', calculateShipping);

    /* Coupon code form validation ***************************************************************/
    document.getElementById('coupon-form').addEventListener('submit', applyCoupon);

    /* Incrementor button ************************************************************************/
    const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    number = document.querySelector(".number");

    let a = 1;

    plus.addEventListener("click", ()=> {
        a++;
        number.innerText = a;
    })
    minus.addEventListener("click", ()=> {
        if(a>1){
        a--;
        number.innerText = a;
        }
   
})
}

/* Removes an item from the cart */
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

/* Updates the cart total when an item is removed */
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

/* Validate the coupon code form */
function applyCoupon(event) {
    event.preventDefault();
    // get the entered coupon code
    const couponCode = document.getElementById('coupon-input').value;

    // display the message
    const messageElement = document.getElementById('coupon-message');
    messageElement.textContent = `Coupon code "${couponCode}" applied`;
}

/* Validate the calculate shipping form */
function calculateShipping(event) {
    // prevent default form submission
    event.preventDefault();
    
    // get the entered coupon code
    const postCode = document.getElementById('shipping-input').value;
    
    // display the message
    const messageElement = document.getElementById('shipping-message');
    messageElement.textContent = `Shipping to ${postCode} is $5.00`;
}