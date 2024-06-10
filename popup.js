
// To enable access to ShowButton element 
let showbtn = document.getElementById("showbtn");

// Same acccess for CloseButton element 
let closebtn = document.getElementById("closebtn");

// Get the popup element
let popup = document.querySelector (".popup");

let overlay = document.querySelector (".overlay");

// Show the popup on click 
showbtn.addEventListener ("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block"; //shows overlay
    document.documentElement.style.backgroundColor = "#848189"; //Background for the whole document
});

// Close popup on click with cross
closebtn.addEventListener ("click", () => {
    popup.style.display = "none";
    showbtn.style.display = "block";
    overlay.style.display = "none"; //hides overlay
})