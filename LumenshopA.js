document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // INICIALIZAR SISTEMA CENTRAL DE IDIOMAS
  // =========================================================
  if (window.I18n) {
    I18n.init('aprendizaje');
  }

  // =========================================================
  // DATOS DE PRODUCTOS
  // =========================================================
  const PRODUCTS = {
    p41: { img: 'Imagenes/abaco.png', titleKey: 'p41_title', descKey: 'p41_desc', precio: 26.99 },
    p42: { img: 'Imagenes/Regletas.png', titleKey: 'p42_title', descKey: 'p42_desc', precio: 31.99 },
    p43: { img: 'Imagenes/Tangram.png', titleKey: 'p43_title', descKey: 'p43_desc', precio: 18.99 },
    p44: { img: 'Imagenes/Letras magnéticas.png', titleKey: 'p44_title', descKey: 'p44_desc', precio: 22.99 },
    p45: { img: 'Imagenes/Dados de historias.png', titleKey: 'p45_title', descKey: 'p45_desc', precio: 16.99 },
    p46: { img: 'Imagenes/Busy Board.png', titleKey: 'p46_title', descKey: 'p46_desc', precio: 45.99 },
    p47: { img: 'Imagenes/Cuentos de emociones.png', titleKey: 'p47_title', descKey: 'p47_desc', precio: 21.99 },
    p48: { img: 'Imagenes/Libros interactivos.png', titleKey: 'p48_title', descKey: 'p48_desc', precio: 24.99 }
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
      menu_learning_stories: 'Cuentos',
      menu_art_playdough: 'Plastilina',
      menu_art_notebooks: 'Libretas',
      menu_art_markers: 'Marcadores',
      menu_art_pencils: 'Lápices de colores',
      kit4_title: 'Pequeños matemáticos',
      kit4_desc: 'Fortalece la calma, el autocontrol y la expresión saludable de las emociones.',
      kit5_title: 'Conociendo el lenguaje',
      kit5_desc: 'Fortalece la comunicación, el lenguaje y la comprensión de manera dinámica.',
      kit6_title: 'Hacia la Autonomía',
      kit6_desc: 'Fomenta la independencia y el desarrollo de habilidades para la vida diaria.',
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
      p41_title: 'Ábaco',
      p41_desc: 'Herramienta para aprender conteo y operaciones.',
      p42_title: 'Regletas',
      p42_desc: 'Material para comprender cantidades y operaciones.',
      p43_title: 'Tangram',
      p43_desc: 'Rompecabezas geométrico que desarrolla pensamiento espacial.',
      p44_title: 'Letras magnéticas',
      p44_desc: 'Facilitan el aprendizaje del alfabeto y palabras.',
      p45_title: 'Dados de historias',
      p45_desc: 'Estimulan la expresión oral y creatividad.',
      p46_title: 'Busy Board',
      p46_desc: 'Tablero con actividades de la vida diaria.',
      p47_title: 'Cuentos de emociones',
      p47_desc: 'Enseñan a reconocer y expresar emociones.',
      p48_title: 'Libros interactivos',
      p48_desc: 'Incorporan texturas o sonidos para motivar la lectura.'
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
      menu_learning_stories: 'Stories',
      menu_art_playdough: 'Play dough',
      menu_art_notebooks: 'Notebooks',
      menu_art_markers: 'Markers',
      menu_art_pencils: 'Colored pencils',
      kit4_title: 'Little mathematicians',
      kit4_desc: 'Builds calm, self-control and healthy emotional expression.',
      kit5_title: 'Discovering language',
      kit5_desc: 'Strengthens communication, language and comprehension in a dynamic way.',
      kit6_title: 'Towards Independence',
      kit6_desc: 'Promotes independence and the development of daily life skills.',
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
      p41_title: 'Abacus',
      p41_desc: 'Tool for learning counting and operations.',
      p42_title: 'Number Rods',
      p42_desc: 'Material to understand quantities and operations.',
      p43_title: 'Tangram',
      p43_desc: 'Geometric puzzle that develops spatial thinking.',
      p44_title: 'Magnetic Letters',
      p44_desc: 'Facilitate learning the alphabet and words.',
      p45_title: 'Story Dice',
      p45_desc: 'Stimulate oral expression and creativity.',
      p46_title: 'Busy Board',
      p46_desc: 'Board with daily life activities.',
      p47_title: 'Emotion Stories',
      p47_desc: 'Teach to recognize and express emotions.',
      p48_title: 'Interactive Books',
      p48_desc: 'Incorporate textures or sounds to motivate reading.'
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
  // CARRUSEL
  // =========================================================
  const track = document.getElementById('carouselTrack');
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');

  function scrollByCard(dir) {
    if (!track) return;
    const card = track.querySelector('.kit-card');
    const gap = 36;
    const amount = card ? (card.offsetWidth + gap) : 300;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }

  if (arrowLeft) arrowLeft.addEventListener('click', () => scrollByCard(-1));
  if (arrowRight) arrowRight.addEventListener('click', () => scrollByCard(1));

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

  console.log('✅ Lumen Shop Aprendizaje inicializado');
});