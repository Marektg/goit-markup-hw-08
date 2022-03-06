var screenWidth = screen.width;
console.log(screenWidth);
var whatwedo = document.getElementById('whatwedo');
var menu = document.getElementById('header__menu__navi');
var mobile = document.getElementById('header__menu__navi-mobile');
window.onload = checkScreen();
function checkScreen() {
    if (screenWidth < 1200) {
        
        whatwedo.setAttribute('display', 'none');
        whatwedo.classList.toggle('is-hidden');
      
        menu.classList.toggle('is-hidden');
    }
    else {
        whatwedo.classList.toggle('is-hidden');

        menu.classList.toggle('is-hidden');
        mobile.classList.toggle('is-hidden');
    }
}