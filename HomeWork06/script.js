
const menuActive = document.querySelector('.menu_wrapper' );
const menuHeader = document.querySelector('.menu_btn' );
const menuClose = document.querySelector('.menu_close' );

function toggleMenu() {
menuActive.classList.toggle('hidden');
}

menuHeader.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);