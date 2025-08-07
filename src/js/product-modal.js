const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close');

const modalImg = document.querySelector('.modal_main-image img');
const modalTitle = document.querySelector('.modal_title');
const modalCategory = document.querySelector('.modal_category');
const modalPrice = document.querySelector('.modal_price');
const modalDescription = document.querySelector('.modal_description');
const modalRate = document.querySelector('.modal_rate');
const modalColors = document.querySelector('.color-checkboxes');
const modalSize = document.querySelector('.modal_sizes');
const orderBtn = document.querySelector('.modal_order-btn');
const thumbsContainer = document.querySelector('.modal_thumbnails');


document.querySelector('.furniture-list').addEventListener('click', event => {
  const btn = event.target.closest('.details-btn');
  if (!btn) return;

  const card = btn.closest('.furniture-card');
  if (!card) return;

  const id = card.dataset.id;
  if (!id || !window.allFurnitures) return;

  const product = window.allFurnitures.find(item => item._id === id);
  if (!product) return;

  openModal(product);
});


function openModal(product) {
  modalImg.src = product.images?.[0] || '';
  modalImg.alt = product.description || '';
  modalTitle.textContent = product.name || 'Без назви';
  modalCategory.textContent = product.type || 'Тип невідомий';
  modalPrice.textContent = `${product.price} грн` || 'Ціна невідома';
  modalDescription.textContent = product.description || 'Опис відсутній';


  if (modalRate) {
    modalRate.textContent = `★ ${product.rate?.toFixed(1) ?? '0.0'}`;
  }

  if (thumbsContainer && Array.isArray(product.images)) {
    thumbsContainer.innerHTML = product.images
      .slice(1) // зображення після головного
      .map(img => `<img src="${img}" alt="${product.name}" class="thumbnail-img" />`)
      .join('');
  }

 
  if (modalColors && Array.isArray(product.color)) {
    modalColors.innerHTML = product.color
      .map((color, i) => {
        const id = `color-${i}`;
        return `
          <input type="checkbox" id="${id}" name="color" />
          <label for="${id}" style="background-color: ${color}"></label>
        `;
      })
      .join('');
  }


  if (modalSize) {
    modalSize.textContent = `Розміри: ${product.sizes || 'невідомі'}`;
  }


  if (orderBtn) {
    orderBtn.dataset.id = product._id;
  }

  modal.classList.remove('visually-hidden');
}


closeModalBtn.addEventListener('click', () => {
  modal.classList.add('visually-hidden');
});