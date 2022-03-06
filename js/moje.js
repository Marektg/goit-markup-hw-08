var menuBg = document.getElementById('header__menu__navi-mobile');
var closeBnt = document.getElementById('mobile__closeBnt');


function showMobileMenu() {
   
    menuBg.setAttribute('class', 'mobile__menu-show');
   
    closeBnt.setAttribute('onclick', 'closeMobileMenu()');
}
function closeMobileMenu() {
    menuBg.setAttribute('class', 'mobile__menu-is-hidden');
}