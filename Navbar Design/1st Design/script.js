const home = document.querySelector(".home");
const contact = document.querySelector(".contacts");
const search = document.querySelector(".search");
const settings = document.querySelector(".settings");
const searchBox = document.querySelector(".search-box");
const items = document.querySelectorAll(".nav-items")
const box = document.querySelector(".box");

var color = "palegoldenrod";


home.addEventListener("click", (e) => {
    box.style.background = "palegoldenrod";
    color = "palegoldenrod";
})

contact.addEventListener("click", (e) => {
    box.style.background = "pink";
    color = "pink";
})

search.addEventListener("click", (e) => {
    items[2].classList.add("special");
    searchBox.style.display = 'flex';
    searchBox.style.width = "80px";
    searchBox.style.height = "25px";
    
})

search.addEventListener("mouseleave",(e)=>{
    items[2].classList.remove("special");
    searchBox.style.display = 'none';
})

settings.addEventListener("click", (e) => {
    box.style.background = "chocolate";
    color = "chocolate";
})

items.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        item.style.background = color;
    })
    item.addEventListener("mouseleave", (e) => {
        item.style.background = "white";
    })
})