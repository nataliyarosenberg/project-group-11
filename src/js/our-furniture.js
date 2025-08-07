import axios from 'axios';
const categoryImages = [`all`, `sofa`, `wardrobe`, `bed`, `table`, `chairs`, `kitchen`, `children-room`, `office`, `entryway`, `bathroom`, `outdoor`, `decor`];

const categoriesListContainer = document.querySelector(".categories-list");
const furnituresListContainer = document.querySelector(".furniture-list");

async function fetchCategories(){
    try {
        const response = await axios('https://furniture-store.b.goit.study/api/categories');
        const categories = response.data;

        categories.unshift({ _id: "0", name: "Всі товари" })
        renderCategories(categories);
        
    } catch (error) {
        console.log(error.message);
    }
}

function renderCategories(categories) {
    const markup = categories.map((category, index) => {
        const imageName = categoryImages[index];
        return `
        <li
  class="category-card"
  style="
  background-image: -webkit-image-set(
    url('./src/images/our-furniture/${imageName}@1x.png') 1x,
    url('./src/images/our-furniture/${imageName}@2x.png') 2x
  );
  background-image: image-set(
    url('./src/images/our-furniture/${imageName}@1x.png') 1x,
    url('./src/images/our-furniture/${imageName}@2x.png') 2x
  );
"
>
  <p class="category-title">${category.name}</p>
</li>`
    }).join(``);

    categoriesListContainer.insertAdjacentHTML(`beforeend`, markup);
}


async function fetchProducts() {
  try {
    const response = await axios('https://furniture-store.b.goit.study/api/furnitures?limit=8');
    const productsObject = response.data;
    renderProducts(productsObject);
  } catch (error) {
    console.log(error.message);
  }
}

function renderProducts(obj) {
  const furnitures = obj.furnitures;
// зміни
  window.allFurnitures = furnitures;
// зміни
  const markup = furnitures.map(product => {
    const { _id, name, description, price, images } = product;
    return `
    <li class="furniture-card" data-id="${_id}"> 
  <img src="${images[0]}" alt="${description}" class="furniture-image" />
  <p class="furniture-name">${name}</p>
  <div class="color-wrap">
    <span class="grey-color"></span>
    <span class="beige-color"></span>
    <span class="black-color"></span>
  </div>
  <p class="furniture-price">${price} грн</p>
  <button class="details-btn" type="button">Детальніше</button>
</li>`
  }).join("");

  furnituresListContainer.insertAdjacentHTML('beforeend', markup);
}




fetchCategories();
fetchProducts();
