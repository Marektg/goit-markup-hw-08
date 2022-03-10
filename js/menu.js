(() => {
    const refs = {
        openMobileMenuBtn: document.querySelector('[data-mobileMenu-open]'),
        closeMobileMenuBtn: document.querySelector('[data-mobileMenu-close]'),
        mobileMenu: document.querySelector('[data-mobileMenu]'),
    };

    refs.openMobileMenuBtn.addEventListener('click', toggleMobile);

    refs.closeMobileMenuBtn.addEventListener('click', toggleMobile);

    function toggleMobile() {
        refs.mobileMenu.classList.toggle('is-hidden');
    }
})();