const crearFooter = () => {
    return `
      <div class="footer__info">
        <div class="title__footer">
          <a href="index.html">GOCHISKATE SHOP</a>
        </div>
        <p>Copyright 2024 - GochiSkateShop</p>
      </div>
    `;
  };
  
  // Agregar el footer al DOM
  const footerContainer = document.querySelector('.footer'); 
  footerContainer.innerHTML = crearFooter();