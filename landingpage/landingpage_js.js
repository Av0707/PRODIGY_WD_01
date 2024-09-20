

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#333';
    }
});
const mobileMenu = document.getElementById("mobile-menu");
const menu = document.querySelector(".menu");

mobileMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});
