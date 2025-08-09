import { loadOrderModal, toggleModal } from './js/order-modal.js';

// Завантажуємо модалку при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  loadOrderModal();

  //  відкрити модалку по кліку на кнопку (якщо є)
  const openModalBtn = document.querySelector('[data-modal-open]');
  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => toggleModal(true));
  }
});
