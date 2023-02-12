const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("activate")
})

// const link = document.querySelector(".nav__menu__item");

// link.addEventListener("click", () => {
//     navMenu.classList.toggle("activate")
// })