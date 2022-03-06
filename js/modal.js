(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openMobileMenulBtn: document.querySelector('[data-mobileMenu-open]'),
    closeMobileMenuBtn: document.querySelector('[data-mobileMenu-close]'),
    mobileMenu: document.querySelector('[data-mobileMenu]'),
  };

  refs.openMobileMenulBtn.addEventListener('click', toggleMobile);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobile);

  function toggleMobile() {
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();