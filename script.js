'use strict'
/*Elements*/
const openIcon = document.querySelector(".open-menu");
const closeIcon = document.querySelector(".close-menu");
const overLay = document.querySelector(".overlay");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const headerBtn = document.querySelector(".header-action-btn");

// Open and close menu function
function checkWindow(){
    if(window.innerWidth < 800){
        headerBtn.classList.add("hidden");
        // remove the horizontal menu and buttons
        nav.classList.add("hidden");
        // display the open and close icons
        hamburger.classList.remove("hidden");
    } else{
        headerBtn.classList.remove("hidden");
        nav.classList.remove("hidden");
        hamburger.classList.add("hidden");
        overLay.classList.add("hidden");
    }
}


//Opening and closing menu
function openMenu(){
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    overLay.classList.remove("hidden");  
    nav.classList.remove("hidden"); 
}

function closeMenu(){
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    overLay.classList.add("hidden");
    nav.classList.add("hidden");
}

//Changing the navigation according to screen size
window.addEventListener("resize",checkWindow);

checkWindow();

openIcon.addEventListener("click",openMenu);

closeIcon.addEventListener("click",closeMenu);

