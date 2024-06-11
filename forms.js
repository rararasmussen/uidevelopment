// Coupon code form validation
document.getElementById('coupon-form').addEventListener('submit', function(event) {
    console.log("Done");
    // prevent default form submission
    event.preventDefault();
    
    // get the entered coupon code
    const couponCode = document.getElementById('coupon-input').value;
    
    // display the message
    const messageElement = document.getElementById('coupon-message');
    messageElement.textContent = `Coupon code ${couponCode} applied`;
});

function applyCoupon(event) {
event.preventDefault();
// get the entered coupon code
const couponCode = document.getElementById('coupon-input').value;

// display the message
const messageElement = document.getElementById('coupon-message');
messageElement.textContent = `Coupon code "${couponCode}" applied`;
}

//Validation for form in checkout-details
const detailsForm = document.getElementById('details-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

detailsForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
});

function validateInput() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(firstNameValue == '') {
        setError(firstName, 'First name is required');
    } else {
        setSuccess();
    }
}

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}