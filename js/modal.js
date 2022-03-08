(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalWindow: document.querySelector('[data-modal-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', widhtScreen);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', widhtScreen);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function widhtScreen() {
    var szerokosc = screen.width;
    
    if (szerokosc < 1200) {
      refs.modalWindow.classList.toggle('mobile');
    }
    else {
      refs.modalWindow.classList.toggle('desktop');
    }
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




