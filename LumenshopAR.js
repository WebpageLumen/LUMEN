document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // INICIALIZAR SISTEMA CENTRAL DE IDIOMAS
  // =========================================================
  if (window.I18n) {
    I18n.init('arte');
  }

  // =========================================================
  // DATOS DE PRODUCTOS
  // =========================================================
  const PRODUCTS = {
    p49: { img: 'Imagenes/Plastilina clásica.png', titleKey: 'p49_title', descKey: 'p49_desc', precio: 11.99 },
    p50: { img: 'Imagenes/Arcilla ligera.png', titleKey: 'p50_title', descKey: 'p50_desc', precio: 15.99 },
    p51: { img: 'Imagenes/Cuaderno de dibujo.png', titleKey: 'p51_title', descKey: 'p51_desc', precio: 9.99 },
    p52: { img: 'Imagenes/Libro de actividades.png', titleKey: 'p52_title', descKey: 'p52_desc', precio: 16.99 },
    p53: { img: 'Imagenes/Lavables.png', titleKey: 'p53_title', descKey: 'p53_desc', precio: 17.99 },
    p54: { img: 'Imagenes/Doble punta.png', titleKey: 'p54_title', descKey: 'p54_desc', precio: 19.99 },
    p55: { img: 'Imagenes/Triangulares.png', titleKey: 'p55_title', descKey: 'p55_desc', precio: 14.50 },
    p56: { img: 'Imagenes/Acuareables.png', titleKey: 'p56_title', descKey: 'p56_desc', precio: 16.99 }
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
      p49_title: 'Plastilina clásica',
      p49_desc: 'Material para modelar y fortalecer la motricidad fina.',
      p50_title: 'Arcilla ligera',
      p50_desc: 'Permite crear figuras que endurecen al secar.',
      p51_title: 'Cuaderno de dibujo',
      p51_desc: 'Espacio para ilustrar y desarrollar creatividad.',
      p52_title: 'Libro de actividades',
      p52_desc: 'Incluye ejercicios de aprendizaje y entretenimiento.',
      p53_title: 'Marcadores Lavables',
      p53_desc: 'Fáciles de limpiar, ideales para niños.',
      p54_title: 'Marcadores Doble punta',
      p54_desc: 'Permiten trazos finos y gruesos.',
      p55_title: 'Lápices Triangulares',
      p55_desc: 'Diseño ergonómico para un mejor agarre.',
      p56_title: 'Lápices Acuarelables',
      p56_desc: 'Pueden mezclarse con agua para efectos de pintura.'
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
      p49_title: 'Classic Play Dough',
      p49_desc: 'Material for modeling and strengthening fine motor skills.',
      p50_title: 'Light Clay',
      p50_desc: 'Allows you to create figures that harden when drying.',
      p51_title: 'Drawing Notebook',
      p51_desc: 'Space to illustrate and develop creativity.',
      p52_title: 'Activity Book',
      p52_desc: 'Includes learning and entertainment exercises.',
      p53_title: 'Washable Markers',
      p53_desc: 'Easy to clean, ideal for children.',
      p54_title: 'Dual Tip Markers',
      p54_desc: 'Allow fine and thick strokes.',
      p55_title: 'Triangular Pencils',
      p55_desc: 'Ergonomic design for better grip.',
      p56_title: 'Watercolor Pencils',
      p56_desc: 'Can be mixed with water for painting effects.'
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

  console.log('✅ Lumen Shop Arte inicializado');
});