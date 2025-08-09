import iconSprite from '../img/icons.svg';

// Функція для завантаження HTML модалки
export async function loadOrderModal() {
  try {
    if (!document.getElementById('svg-sprite')) {
      const response = await fetch(iconSprite);
      const svgText = await response.text();
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.width = '0';
      div.style.height = '0';
      div.style.overflow = 'hidden';
      div.id = 'svg-sprite';
      div.innerHTML = svgText;
      document.body.prepend(div);
    }

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
