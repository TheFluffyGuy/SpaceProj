// MENU-BTN

function myFunction(x) {
    x.classList.toggle("change");


    let b = document.querySelector(".container");
    let g = document.querySelector("nav-side");


    if (g.style.display === "none") {

        g.style.display = "flex";
    } else {

        g.style.display = "none";
    }

}