document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // INICIALIZAR SISTEMA CENTRAL DE IDIOMAS
  // =========================================================
  if (window.I18n) {
    I18n.init('sensoriales');
  }

  // =========================================================
  // DATOS DE PRODUCTOS
  // =========================================================
  const PRODUCTS = {
    p27: { img: 'Imagenes/pelotassensoriales (2).png', titleKey: 'p27_title', descKey: 'p27_desc', precio: 13.99 },
    p28: { img: 'Imagenes/tubossensoriales.png', titleKey: 'p28_title', descKey: 'p28_desc', precio: 17.99 },
    p29: { img: 'Imagenes/Fidgets.png', titleKey: 'p29_title', descKey: 'p29_desc', precio: 12.99 },
    p30: { img: 'Imagenes/popit.png', titleKey: 'p30_title', descKey: 'p30_desc', precio: 9.99 },
    p31: { img: 'Imagenes/Arenacinética.png', titleKey: 'p31_title', descKey: 'p31_desc', precio: 23.99 },
    p32: { img: 'Imagenes/juguetesconbotones.png', titleKey: 'p32_title', descKey: 'p32_desc', precio: 19.99 },
    p33: { img: 'Imagenes/torresdebolas.png', titleKey: 'p33_title', descKey: 'p33_desc', precio: 27.99 },
    p34: { img: 'Imagenes/Juguetespop-up.png', titleKey: 'p34_title', descKey: 'p34_desc', precio: 21.99 },
    p35: { img: 'Imagenes/Bloques de madera.png', titleKey: 'p35_title', descKey: 'p35_desc', precio: 32.99 },
    p36: { img: 'Imagenes/bloquesmagneticos.png', titleKey: 'p36_title', descKey: 'p36_desc', precio: 34.99 },
    p37: { img: 'Imagenes/Engranajes.png', titleKey: 'p37_title', descKey: 'p37_desc', precio: 24.99 },
    p38: { img: 'Imagenes/Memoria.png', titleKey: 'p38_title', descKey: 'p38_desc', precio: 19.99 },
    p39: { img: 'Imagenes/Dominó.png', titleKey: 'p39_title', descKey: 'p39_desc', precio: 22.99 },
    p40: { img: 'Imagenes/Bingo educativo.png', titleKey: 'p40_title', descKey: 'p40_desc', precio: 26.99 }
  };

  // =========================================================
  // DICCIONARIO I18N LOCAL (FALLBACK)
  // =========================================================
  const I18N = {
    es: {
      search_placeholder: 'Buscar',
      nav_all: 'Todo',
      nav_toys: 'Juguetes',
      nav_learning: 'Aprendizaje',
      nav_art: 'Arte',
      nav_home: 'Inicio',
      nav_about: 'Sobre nosotros',
      nav_info: 'Información general',
      nav_shop: 'Lumen Shop',
      nav_centers: 'Centros',
      nav_tours: 'Giras inclusivas',
      nav_pros: 'Profesionales',
      menu_title: 'Categorías',
      menu_toys_sensory: 'Sensoriales',
      menu_toys_emotional: 'Causa y efecto',
      menu_toys_causeeffect: 'Construcción',
      menu_learning_numbers: 'Matemática',
      menu_learning_language: 'Lenguaje',
      menu_learning_creativity: 'Autonomía',
      menu_art_playdough: 'Plastilina',
      menu_art_notebooks: 'Libretas',
      menu_art_markers: 'Marcadores',
      menu_art_pencils: 'Lápices de colores',
      section_title: 'Recomendados para ti',
      price_label: 'Precio',
      add_btn: 'Agregar al carrito',
      cart_title: 'Tu carrito',
      cart_empty: 'Tu carrito está vacío',
      cart_remove: 'Quitar',
      cart_qty_prefix: 'Cantidad: ',
      footer_copy: '2026 Lumen. Todos los derechos reservados.',
      footer_access: 'Accesos rápidos',
      footer_community: '¡Visita nuestra comunidad!',
      footer_contact: 'Contáctanos',
      footer_email_label: 'Correo electrónico:',
      p27_title: 'Pelotas sensoriales',
      p27_desc: 'Pelotas con diferentes texturas que estimulan el tacto y la motricidad fina.',
      p28_title: 'Tubos sensoriales',
      p28_desc: 'Tubos transparentes con elementos visuales para fomentar la atención',
      p29_title: 'Fidgets',
      p29_desc: 'Juguetes manipulativos para mejorar la concentración.',
      p30_title: 'Pop It',
      p30_desc: 'Juguete de silicona con burbujas reutilizables para estimulación táctil.',
      p31_title: 'Arena cinética',
      p31_desc: 'Arena moldeable que desarrolla creatividad y percepción táctil.',
      p32_title: 'Juguetes con botones',
      p32_desc: 'Al presionar un botón generan una respuesta como luz o sonido.',
      p33_title: 'Torres de bolas',
      p33_desc: 'Las bolas descienden por rampas enseñando secuencias.',
      p34_title: 'Juguetes pop-up',
      p34_desc: 'Al activar un mecanismo aparecen figuras.',
      p35_title: 'Bloques de madera',
      p35_desc: 'Piezas para construir fortaleciendo lógica y creatividad.',
      p36_title: 'Bloques magnéticos',
      p36_desc: 'Piezas imantadas para crear estructuras.',
      p37_title: 'Engranajes',
      p37_desc: 'Piezas que enseñan movimiento mecánico básico.',
      p38_title: 'Memoria',
      p38_desc: 'Desarrolla atención y memoria visual.',
      p39_title: 'Dominó',
      p39_desc: 'Favorece lógica y reconocimiento de patrones.',
      p40_title: 'Bingo educativo',
      p40_desc: 'Refuerza vocabulario, números o imágenes.'
    },
    en: {
      search_placeholder: 'Search',
      nav_all: 'All',
      nav_toys: 'Toys',
      nav_learning: 'Learning',
      nav_art: 'Art',
      nav_home: 'Home',
      nav_about: 'About us',
      nav_info: 'Overview',
      nav_shop: 'Lumen Shop',
      nav_centers: 'Centers',
      nav_tours: 'Inclusive tours',
      nav_pros: 'Professionals',
      menu_title: 'Categories',
      menu_toys_sensory: 'Sensory',
      menu_toys_emotional: 'Cause and effect',
      menu_toys_causeeffect: 'Building',
      menu_learning_numbers: 'Math',
      menu_learning_language: 'Language',
      menu_learning_creativity: 'Independence',
      menu_art_playdough: 'Play dough',
      menu_art_notebooks: 'Notebooks',
      menu_art_markers: 'Markers',
      menu_art_pencils: 'Colored pencils',
      section_title: 'Recommended for you',
      price_label: 'Price',
      add_btn: 'Add to cart',
      cart_title: 'Your cart',
      cart_empty: 'Your cart is empty',
      cart_remove: 'Remove',
      cart_qty_prefix: 'Qty: ',
      footer_copy: '2026 Lumen. All rights reserved.',
      footer_access: 'Quick links',
      footer_community: 'Visit our community!',
      footer_contact: 'Contact us',
      footer_email_label: 'Email:',
      p27_title: 'Sensory balls',
      p27_desc: 'Balls with different textures that stimulate touch and fine motor skills.',
      p28_title: 'Sensory tubes',
      p28_desc: 'Transparent tubes with visual elements to encourage attention',
      p29_title: 'Fidgets',
      p29_desc: 'Manipulative toys to improve concentration.',
      p30_title: 'Pop It',
      p30_desc: 'Silicone toy with reusable bubbles for tactile stimulation.',
      p31_title: 'Kinetic sand',
      p31_desc: 'Moldable sand that develops creativity and tactile perception.',
      p32_title: 'Button toys',
      p32_desc: 'Pressing a button generates a response like light or sound.',
      p33_title: 'Ball towers',
      p33_desc: 'Balls descend through ramps teaching sequences.',
      p34_title: 'Pop-up toys',
      p34_desc: 'Activating a mechanism makes figures appear.',
      p35_title: 'Wooden blocks',
      p35_desc: 'Pieces to build strengthening logic and creativity.',
      p36_title: 'Magnetic blocks',
      p36_desc: 'Magnetic pieces to create structures.',
      p37_title: 'Gears',
      p37_desc: 'Pieces that teach basic mechanical movement.',
      p38_title: 'Memory',
      p38_desc: 'Develops attention and visual memory.',
      p39_title: 'Dominoes',
      p39_desc: 'Promotes logic and pattern recognition.',
      p40_title: 'Educational Bingo',
      p40_desc: 'Reinforces vocabulary, numbers or images.'
    }
  };

  // =========================================================
  // FUNCIÓN DE TRADUCCIÓN
  // =========================================================
  function t(key) {
    if (window.I18n && typeof I18n.t === 'function') {
      const result = I18n.t(key);
      if (result !== key) return result;
    }
    const lang = localStorage.getItem('lumen_lang') || 'es';
    const dict = I18N[lang] || I18N.es;
    return dict[key] !== undefined ? dict[key] : key;
  }

  // =========================================================
  // APLICAR TRADUCCIONES
  // =========================================================
  function applyTranslations() {
    const lang = localStorage.getItem('lumen_lang') || 'es';
    const dict = I18N[lang] || I18N.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.documentElement.lang = lang;
  }

  applyTranslations();

  // =========================================================
  // MENÚ LATERAL
  // =========================================================
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const sideMenu = document.getElementById('sideMenu');
  const overlayBg = document.getElementById('overlayBg');

  function openMenu() {
    sideMenu.classList.add('open');
    overlayBg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sideMenu.classList.remove('open');
    overlayBg.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openMenuBtn) openMenuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
  if (overlayBg) overlayBg.addEventListener('click', closeMenu);

  // =========================================================
  // CARRITO DE COMPRAS - ACTUALIZADO (USA PRODUCTOS GLOBALES)
  // =========================================================
  if (typeof Cart !== 'undefined' && Cart.init) {
    Cart.init({
      t: t,
      getProduct: (id) => {
        // 1. Intentar desde I18n central
        if (window.I18n && typeof I18n.getProduct === 'function') {
          const product = I18n.getProduct(id);
          if (product) return product;
        }
        
        // 2. Intentar desde PRODUCTOS global (todos los 56 productos)
        if (window.PRODUCTOS && window.PRODUCTOS[id]) {
          const p = window.PRODUCTOS[id];
          const lang = localStorage.getItem('lumen_lang') || 'es';
          const dict = window.I18N_PRODUCTOS?.[lang] || window.I18N_PRODUCTOS?.es || {};
          const title = dict[p.titleKey] || p.titleKey || id;
          return {
            title: title,
            img: p.img || '',
            precio: p.precio || 0
          };
        }
        
        // 3. Fallback: PRODUCTS local
        const product = PRODUCTS[id];
        if (!product) return null;
        return {
          title: t(product.titleKey),
          img: product.img,
          precio: product.precio
        };
      }
    });
    console.log('✅ Carrito inicializado con soporte para productos globales');
  }

  // =========================================================
  // MODAL
  // =========================================================
  const productModalBg = document.getElementById('productModalBg');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalAddBtn = document.getElementById('modalAddBtn');

  let activeProductId = null;

  function renderModal(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;
    modalImg.src = product.img;
    modalImg.alt = t(product.titleKey);
    modalTitle.textContent = t(product.titleKey);
    modalDesc.textContent = t(product.descKey);
  }

  function openProductModal(productId) {
    if (!PRODUCTS[productId]) return;
    activeProductId = productId;
    renderModal(productId);
    productModalBg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    productModalBg.classList.remove('open');
    activeProductId = null;
    document.body.style.overflow = '';
  }

  window.openProductModal = openProductModal;
  window.closeProductModal = closeProductModal;
  window.PRODUCTS = PRODUCTS;
  window.t = t;

  // =========================================================
  // AGREGAR AL CARRITO
  // =========================================================
  function addToCart(productId, btnElement) {
    if (window._addingToCart) return false;
    const now = Date.now();
    if (window._lastAddedProduct === productId && (now - window._lastAddTime) < 1000) return false;
    if (!productId) return false;

    window._addingToCart = true;
    window._lastAddedProduct = productId;
    window._lastAddTime = now;

    try {
      if (typeof Cart !== 'undefined' && Cart.add) {
        Cart.add(productId);
        if (btnElement) {
          const originalText = btnElement.textContent;
          btnElement.textContent = '✅ Agregado';
          btnElement.style.background = '#4CAF50';
          btnElement.style.color = 'white';
          btnElement.disabled = true;
          setTimeout(() => {
            btnElement.textContent = originalText;
            btnElement.style.background = '';
            btnElement.style.color = '';
            btnElement.disabled = false;
            window._addingToCart = false;
          }, 800);
        } else {
          setTimeout(() => { window._addingToCart = false; }, 500);
        }
        return true;
      }
    } catch (error) {
      console.error('Error:', error);
    }
    window._addingToCart = false;
    return false;
  }

  // =========================================================
  // EVENTOS DE PRODUCTOS
  // =========================================================
  const productGrid = document.getElementById('productGrid');

  if (productGrid) {
    productGrid.addEventListener('click', function(e) {
      if (e.target.closest('.add-btn')) return;
      const card = e.target.closest('.product-card');
      if (!card) return;
      const productId = card.getAttribute('data-product-id');
      if (productId) {
        e.preventDefault();
        openProductModal(productId);
      }
    });

    productGrid.addEventListener('click', function(e) {
      const addBtn = e.target.closest('.add-btn');
      if (!addBtn) return;
      e.stopPropagation();
      e.preventDefault();
      const card = addBtn.closest('.product-card');
      if (!card) return;
      const productId = card.getAttribute('data-product-id');
      if (productId) {
        addToCart(productId, addBtn);
      }
    });
  }

  // =========================================================
  // EVENTOS DEL MODAL
  // =========================================================
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (productModalBg) {
    productModalBg.addEventListener('click', function(e) {
      if (e.target === productModalBg) closeProductModal();
    });
  }
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (activeProductId) {
        addToCart(activeProductId, modalAddBtn);
      }
    });
  }

  // =========================================================
  // FILTRO POR CATEGORÍA
  // =========================================================
  const params = new URLSearchParams(window.location.search);
  const categoriaURL = params.get('categoria');

  if (categoriaURL) {
    document.querySelectorAll('.product-card').forEach(card => {
      const categoriaProducto = card.dataset.categoria;
      card.style.display = (categoriaProducto === categoriaURL) ? '' : 'none';
    });
  }

  // =========================================================
  // ESC
  // =========================================================
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeProductModal();
      closeMenu();
      const dropdown = document.getElementById('langDropdown');
      if (dropdown) dropdown.classList.remove('open');
      const cartDropdown = document.getElementById('cartDropdown');
      if (cartDropdown) cartDropdown.classList.remove('open');
    }
  });

  console.log('✅ Lumen Shop Juguetes inicializado');
});