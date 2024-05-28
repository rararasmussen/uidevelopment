
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
    if(a>0){
    a--;
    number.innerText = a;
    }
   
})