/* VARIABLES */

/* FUNCTIONS */

function toggleMenu() {
    nav.classList.toggle('nav--active');
    burgerMenu.classList.toggle('burger--active');
}

/* EVENT LISTENERS */

burgerMenu.addEventListener('click', toggleMenu);

/* MAIN */