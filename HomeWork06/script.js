const menuActive = document.querySelector( selectors: '.menu_wrapper' );
const menuHeader = document.querySelector(  selectors: '.menu_btn' );
const menuClose = document.querySelector( selectors: '.menu_close' );

function toggleMenu() {
menuActive.classList.toggle( token: 'hidden');
}

menuHeader.addEventListener( type: 'click', listener: toggleMenu);
menuClose.addEventListener( type: 'click', listener: toggleMenu);