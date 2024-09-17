// cart.js
import productsData from "../API/products.js";
import tenisData from "../API/tenisData.js";

const initCart = () => {
  const btnCart = document.querySelector('.container-cart-icon');
  const containerCartProducts = document.querySelector('.container-cart-products');
  const rowProduct = document.querySelector('.row-product');
  // Combinar los datos de productos y tenis
  const allProductsData = [...productsData, ...tenisData];
  let allProducts = []; // Array para almacenar los productos en el carrito
  const valorTotal = document.querySelector('.total-pagar');
  const countProducts = document.querySelector('#contador-productos');
  const cartEmpty = document.querySelector('.cart-empty');
  const cartTotal = document.querySelector('.cart-total');

  btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
  });

  // Manejar clics en los botones "Añadir a carrito"
  document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
      const productElement = e.target.closest('.item'); // Encontrar el elemento .item más cercano
      const productId = parseInt(productElement.dataset.id); // Obtener el ID del producto

      const product = allProductsData.find(p => p.id === productId);

      if (product) {
        const infoProduct = {
          id: product.id,
          quantity: 1,
          title: product.title,
          price: product.price,
        };

        const existingProductIndex = allProducts.findIndex(p => p.id === productId);

        if (existingProductIndex !== -1) {
          allProducts[existingProductIndex].quantity++;
        } else {
          allProducts.push(infoProduct);
        }

        showHTML();
      }
    }
  });

  rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
      const productElement = e.target.closest('.cart-product'); // Encontrar el elemento .cart-product más cercano
      const productId = parseInt(productElement.dataset.id); // Obtener el ID del producto

      allProducts = allProducts.filter(p => p.id !== productId);
      showHTML();
    }
  });

  const showHTML = () => {
    if (!allProducts.length) {
      cartEmpty.classList.remove('hidden');
      rowProduct.classList.add('hidden');
      cartTotal.classList.add('hidden');
    } else {
      cartEmpty.classList.add('hidden');
      rowProduct.classList.remove('hidden');
      cartTotal.classList.remove('hidden');
    }

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
      const containerProduct = document.createElement('div');
      containerProduct.classList.add('cart-product');
      containerProduct.dataset.id = product.id; // Añadir el ID del producto al elemento

      containerProduct.innerHTML = `
        <div class="info-cart-product">
          <span class="cantidad-producto-carrito">${product.quantity}</span>
          <p class="titulo-producto-carrito">${product.title}</p>
          <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      `;

      rowProduct.append(containerProduct);

      total = total + parseInt(product.quantity * product.price.slice(1));
      totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
  };
};

// Exportar la función initCart
export default initCart;