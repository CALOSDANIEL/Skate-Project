// articulos.js
import productsData from "../API/products.js";

const crearArticulos = async () => {
  // Esperar a que se complete la importación de productsData
  await productsData;

  const articulosHTML = productsData.map(product => `
    <div class="item" data-id="${product.id}"> 
      <figure>
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
    <h1 class="title__arti">Tablas</h1>
    <div class="container-items">
      ${articulosHTML}
    </div>
  `;
};

const articulosContainer = document.querySelector('.articulos');

// Ejecutar la función asíncrona y luego insertar el HTML
crearArticulos().then(html => {
  articulosContainer.innerHTML = html;
});