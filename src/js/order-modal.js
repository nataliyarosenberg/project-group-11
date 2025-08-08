// Функція для завантаження HTML модалки
export async function loadOrderModal() {
  try {
    const response = await fetch('./partials/order-modal.html');
    const html = await response.text();
    document.body.insertAdjacentHTML('beforeend', html);

    // Додаємо обробники подій
    const backdrop = document.querySelector('.backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        backdrop.classList.remove('is-open');
      });
    }
  } catch (error) {
    console.error('Помилка завантаження модалки:', error);
  }
}

// Функція для відкриття/закриття модалки
export function toggleModal(open = true) {
  const backdrop = document.querySelector('.backdrop');
  if (backdrop) {
    backdrop.classList.toggle('is-open', open);
  }
}
