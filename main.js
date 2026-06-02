var menu = document.getElementById("menu");

function openMenu(e){
    e.preventDefault();
    menu.classList.toggle("show");
}

function closeMenu(){
    menu.classList.remove("show");
}