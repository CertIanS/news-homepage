var menu = document.getElementById("menu");

function openMenu(){
    //e.preventDefault();
    document.querySelector("header").style.filter = "brightness(50%)";
    document.getElementById("newSection").style.filter = "brightness(50%)";
    document.getElementById("bottomSection").style.filter = "brightness(50%)";
    
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    menu.classList.add("show");
}

function closeMenu(){
    menu.classList.remove("show");
    document.body.style.backgroundColor = "white";
    document.querySelector("header").style.filter = "brightness(100%)";
    document.getElementById("newSection").style.filter = "brightness(100%)";
    document.getElementById("bottomSection").style.filter = "brightness(100%)";
}