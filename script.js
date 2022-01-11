const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
const btn = document.querySelector('.nav-btn')

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})