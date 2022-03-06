(() => {
    const refs = {
        openMobileMenuBtn: document.querySelector('[mobile-menu-open]'),
        closeMobileMenuBtn: document.querySelector('[mobile-menu-close]'),
        MobileMenu: document.querySelector('[mobile-menu]'),
    };

    refs.openMobileMenuBtn.addEventListener('click', toggleModal);
    refs.closeMobileMenuBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.MobileMenu.classList.toggle('is-hidden');
    }
})();
