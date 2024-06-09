
// To enable access to ShowButton element 
let showbtn = document.getElementById("showbtn");

// Same acccess for CloseButton element 
let closebtn = document.getElementById("closebtn");

// Get the popup element
let popup = document.querySelector (".popup");

// Show the popup on click 
showbtn.addEventListener ("click", () => {
    popup.style.display = "block";
    // showbtn.style.display = "none";
    overlay.style.display = "block"; //shows overlay
    document.body.style.backgroundColor = "#9EA9B1";
});

// Close popup on click with cross
closebtn.addEventListener ("click", () => {
    popup.style.display = "none";
    showbtn.style.display = "block";
    overlay.style.display = "none"; //hides overlay
})