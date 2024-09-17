// tenis.js
import tenisData from '../API/tenisData.js';

const crearTenis = () => {
  const tenisHTML = tenisData.map(product => `
    <div class="item" data-id="${product.id}"> <figure>
        <img src="${product.img}" alt="${product.title}">
      </figure>
      <div class="info-product">
        <h2>${product.title}</h2>
        <p class="price">${product.price}</p>
        <button class="btn-add-cart">Añadir a carrito</button>
      </div>
    </div>
  `).join('');

  return `
    <h1 class="title__arti"> Tenis </h1>
    <div class="container-items">
      ${tenisHTML}
    </div>
  `;
};

const tenisContainer = document.querySelector('.tenis');
tenisContainer.innerHTML = crearTenis();