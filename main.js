var menu = document.getElementById("menu");

function openMenu(){
    document.querySelector("main").style.filter = "brightness(50%)";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    menu.classList.add("show");
}

function closeMenu(){
    menu.classList.remove("show");
    document.body.style.backgroundColor = "white";
    document.querySelector("main").style.filter = "brightness(100%)";
}