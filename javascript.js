
// This script is for the incremental-wrapper //
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

// let acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class*/
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     let panel = this.nextElementSibling;
//     panel = document.getElementById(acc[i].getAttribute("id") + "-text");
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

//Logic for accordions
let shipping = document.getElementById("shipping");
let faq = document.getElementById("faq");
let details = document.getElementById("details");
shipping.addEventListener("click", () => {
    shipping.classList.toggle("active");
    let panel = document.getElementById("shipping-text");
    panelLogic(panel);
});
faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    let panel = document.getElementById("faq-text");
    panelLogic(panel);
});
details.addEventListener("click", () => {
    details.classList.toggle("active");
    let panel = document.getElementById("details-text");
    panelLogic(panel);
});

function panelLogic(panel) {
    if (panel.style.display === "block") {
        collapsePanel(panel);
    } else {
        collapseAllPanels();
        expandPanel(panel);
    }
}
function collapsePanel(panel) {
    panel.style.display = "none";
}
function collapseAllPanels() {
    collapsePanel(document.getElementById("details-text"));
    collapsePanel(document.getElementById("shipping-text"));
    collapsePanel(document.getElementById("faq-text"));
}
function expandPanel(panel) {
    panel.style.display = "block";
}

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
