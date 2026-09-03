/**
 * Lumen Shop - JavaScript Principal
 * 
 * Este archivo maneja:
 * - Menú lateral (hamburguesa)
 * - Carrito de compras
 * - Selector de idioma
 * - Modal de productos
 * - Carrusel de kits
 * - Filtro por categoría
 * - Buscador de productos
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================
  // INICIALIZAR SISTEMA CENTRAL DE IDIOMAS
  // =========================================================
  if (window.I18n) {
    I18n.init('juguetes');
  }

  // =========================================================
  // VARIABLE GLOBAL PARA CONTROL DE DUPLICADOS
  // =========================================================
  window._addingToCart = false;
  window._lastAddedProduct = null;
  window._lastAddTime = 0;

  // =========================================================
  // DATOS DE PRODUCTOS (fuente única de verdad)
  // =========================================================
  const PRODUCTS = {
    p1:  { img: 'Imagenes/pelotaantiestres.png', titleKey: 'p1_title', descKey: 'p1_desc', categoria: 'sensorial', precio: 12.99 },
    p2:  { img: 'Imagenes/popit.png', titleKey: 'p2_title', descKey: 'p2_desc', categoria: 'sensorial', precio: 9.99 },
    p3:  { img: 'Imagenes/juguetecausaefecto.png', titleKey: 'p3_title', descKey: 'p3_desc', categoria: 'causaefecto', precio: 22.50 },
    p4:  { img: 'Imagenes/pistadeautos.png', titleKey: 'p4_title', descKey: 'p4_desc', categoria: 'causaefecto', precio: 29.99 },
    p5:  { img: 'Imagenes/marcadoreslavables.png', titleKey: 'p5_title', descKey: 'p5_desc', categoria: 'arte', precio: 18.99 },
    p6:  { img: 'Imagenes/Bloques magnéticos.png', titleKey: 'p6_title', descKey: 'p6_desc', categoria: 'construccion', precio: 34.99 },
    p7:  { img: 'Imagenes/lapicesdecolores.png', titleKey: 'p7_title', descKey: 'p7_desc', categoria: 'arte', precio: 14.99 },
    p8:  { img: 'Imagenes/tengles.png', titleKey: 'p8_title', descKey: 'p8_desc', categoria: 'sensorial', precio: 14.50 },
    p9:  { img: 'Imagenes/Pop Tubes.png', titleKey: 'p9_title', descKey: 'p9_desc', categoria: 'sensorial', precio: 11.99 },
    p10: { img: 'Imagenes/Cubo Infinito.png', titleKey: 'p10_title', descKey: 'p10_desc', categoria: 'sensorial', precio: 15.99 },
    p11: { img: 'Imagenes/Pelotas Sensoriales.png', titleKey: 'p11_title', descKey: 'p11_desc', categoria: 'sensorial', precio: 13.50 },
    p12: { img: 'Imagenes/Fidget Spinners.png', titleKey: 'p12_title', descKey: 'p12_desc', categoria: 'sensorial', precio: 7.99 },
    p13: { img: 'Imagenes/Anillos Antiestrés.png', titleKey: 'p13_title', descKey: 'p13_desc', categoria: 'sensorial', precio: 6.99 },
    p14: { img: 'Imagenes/Pop It.png', titleKey: 'p14_title', descKey: 'p14_desc', categoria: 'sensorial', precio: 9.99 },
    p15: { img: 'Imagenes/Cubo Antiestrés.png', titleKey: 'p15_title', descKey: 'p15_desc', categoria: 'sensorial', precio: 16.99 },
    p16: { img: 'Imagenes/pelotassensoriales (2).png', titleKey: 'p16_title', descKey: 'p16_desc', categoria: 'sensorial', precio: 13.99 },
    p17: { img: 'Imagenes/Squishy.png', titleKey: 'p17_title', descKey: 'p17_desc', categoria: 'sensorial', precio: 8.50 },
    p18: { img: 'Imagenes/Masa Terapéutica.png', titleKey: 'p18_title', descKey: 'p18_desc', categoria: 'sensorial', precio: 19.99 },
    p19: { img: 'Imagenes/Rompecabezas.png', titleKey: 'p19_title', descKey: 'p19_desc', categoria: 'construccion', precio: 22.99 },
    p20: { img: 'Imagenes/Bloques de Construcción.png', titleKey: 'p20_title', descKey: 'p20_desc', categoria: 'construccion', precio: 29.99 },
    p21: { img: 'Imagenes/Juego de Clasificación.png', titleKey: 'p21_title', descKey: 'p21_desc', categoria: 'aprendizaje', precio: 24.99 },
    p22: { img: 'Imagenes/Tarjetas de Emociones.png', titleKey: 'p22_title', descKey: 'p22_desc', categoria: 'aprendizaje', precio: 19.99 },
    p23: { img: 'Imagenes/Tablero de Comunicación.png', titleKey: 'p23_title', descKey: 'p23_desc', categoria: 'aprendizaje', precio: 34.50 },
    p24: { img: 'Imagenes/Instrumento Musical Sensorial.png', titleKey: 'p24_title', descKey: 'p24_desc', categoria: 'arte', precio: 25.99 },
    p25: { img: 'Imagenes/Manta con Peso.png', titleKey: 'p25_title', descKey: 'p25_desc', categoria: 'bienestar', precio: 59.99 },
    p26: { img: 'Imagenes/Cuentos Educativos.png', titleKey: 'p26_title', descKey: 'p26_desc', categoria: 'aprendizaje', precio: 20.99 }
  };

  // =========================================================
  // DICCIONARIO I18N (ES/EN) - PARA FALLBACK
  // =========================================================
  const I18N = {
    es: {
      search_placeholder: 'Buscar',
      nav_all: 'Todo', 
      nav_toys: 'Juguetes', 
      nav_learning: 'Aprendizaje', 
      nav_art: 'Arte',
      nav_main: 'Principal',
      nav_toys_sensory: 'Sensoriales', 
      nav_toys_emotional: 'Causa y efecto',
      nav_toys_construccion: 'Construcción',
      nav_toys_boardgames: 'Juegos de mesa',
      menu_title: 'Categorías',
      menu_toys_sensory: 'Sensoriales', 
      menu_toys_emotional: 'Causa y efecto', 
      menu_toys_construccion: 'Construcción',
      menu_toys_boardgames: 'Juegos de mesa',
      menu_learning_numbers: 'Matemática', 
      menu_learning_language: 'Lenguaje', 
      menu_learning_creativity: 'Autonomía',
      menu_learning_stories: 'Cuentos',
      menu_art_playdough: 'Plastilina', 
      menu_art_notebooks: 'Libretas', 
      menu_art_markers: 'Marcadores', 
      menu_art_pencils: 'Lápices de colores',
      kit1_title: 'Kit emocional',
      kit1_desc: 'Fortalece la calma, el autocontrol y la expresión saludable de las emociones.',
      kit2_title: 'Kit creatividad y expresión',
      kit2_desc: 'Estimula la imaginación, la creatividad y la libre expresión de ideas y emociones.',
      kit3_title: 'Kit descanso y bienestar',
      kit3_desc: 'Promueve la relajación y el descanso para favorecer un sueño más tranquilo y reparador.',
      section_title: 'Recomendados para ti',
      price_label: 'Precio', 
      add_btn: 'Agregar al carrito',
      cart_title: 'Tu carrito', 
      cart_empty: 'Tu carrito está vacío', 
      cart_remove: 'Quitar', 
      cart_qty_prefix: 'Cantidad: ',
      nav_home: 'Inicio', 
      nav_about: 'Sobre nosotros',
      footer_copy: '2026 Lumen. Todos los derechos reservados.',
      footer_access: 'Accesos rápidos', 
      footer_info: 'Información general',
      nav_info: 'Información general', 
      nav_shop: 'Lumen Shop', 
      nav_centers: 'Centros', 
      nav_tours: 'Giras inclusivas', 
      nav_pros: 'Profesionales',
      footer_community: '¡Visita nuestra comunidad!', 
      footer_contact: 'Contáctanos', 
      footer_email_label: 'Correo electrónico:',
      p1_title: 'Pelota Antiestrés',
      p1_desc: 'Pelota suave y flexible diseñada para apretar y liberar tensión.',
      p2_title: 'Pop It',
      p2_desc: 'Juguete suave y flexible diseñado para presionar sus burbujas.',
      p3_title: 'Juguete Causa-Efecto',
      p3_desc: 'Juguete interactivo diseñado para que los pequeños descubran...',
      p4_title: 'Pista de Autos',
      p4_desc: 'Juguete educativo diseñado para que los pequeños disfruten viendo los autos descender por...',
      p5_title: 'Marcadores Lavables',
      p5_desc: 'Set de marcadores con colores intensos y punta fina, ideales para dibujar, colorear y realizar...',
      p6_title: 'Bloques Magnéticos',
      p6_desc: 'Set de construcción con piezas magnéticas de colores que permite crear figuras, estructuras y...',
      p7_title: 'Lápices de Colores',
      p7_desc: 'Set de lápices de colores con mina extra suave que ofrece trazos intensos.',
      p8_title: 'Tangles',
      p8_desc: 'Juguete sensorial flexible diseñado para doblar, girar y manipular de diferentes formas.',
      p9_title: 'Pop Tubes',
      p9_desc: 'Tubos de plástico corrugado que se pueden estirar, doblar y unir.',
      p10_title: 'Cubo Infinito',
      p10_desc: 'Pequeño dispositivo plegable que permite manipularlo sin fin.',
      p11_title: 'Pelotas Sensoriales',
      p11_desc: 'Bolas blandas rellenas de gel o bolitas de colores.',
      p12_title: 'Fidget Spinners',
      p12_desc: 'El clásico spinner giratorio o los cubos con botones, interruptores y ruedas.',
      p13_title: 'Anillos Antiestrés',
      p13_desc: 'Pequeños anillos texturizados que se colocan en los dedos.',
      p14_title: 'Pop It',
      p14_desc: 'Juguete sensorial de silicona con burbujas que se presionan repetidamente.',
      p15_title: 'Cubo Antiestrés',
      p15_desc: 'Cubo con diferentes botones, interruptores y superficies táctiles.',
      p16_title: 'Pelota Sensorial',
      p16_desc: 'Pelota con textura suave o puntiaguda que estimula el tacto.',
      p17_title: 'Squishy',
      p17_desc: 'Figura de espuma viscoelástica que puede comprimirse y recuperar su forma lentamente.',
      p18_title: 'Masa Terapéutica',
      p18_desc: 'Masa moldeable utilizada para fortalecer las manos.',
      p19_title: 'Rompecabezas',
      p19_desc: 'Juego de piezas que deben ensamblarse para formar una imagen o figura.',
      p20_title: 'Bloques de Construcción',
      p20_desc: 'Piezas encajables que permiten crear estructuras.',
      p21_title: 'Juego de Clasificación',
      p21_desc: 'Material educativo para agrupar objetos por color, forma, tamaño o categoría.',
      p22_title: 'Tarjetas de Emociones',
      p22_desc: 'Tarjetas ilustradas con expresiones faciales que ayudan a reconocer emociones.',
      p23_title: 'Tablero de Comunicación',
      p23_desc: 'Herramienta visual con pictogramas o símbolos que facilita la comunicación.',
      p24_title: 'Instrumento Musical Sensorial',
      p24_desc: 'Instrumento de sonido suave diseñado para estimular la percepción auditiva.',
      p25_title: 'Manta con Peso',
      p25_desc: 'Manta terapéutica que aplica presión profunda para promover la calma.',
      p26_title: 'Cuentos Educativos',
      p26_desc: 'Experiencias sensoriales agradables con una enseñanza positiva.'
    },
    en: {
      search_placeholder: 'Search',
      nav_all: 'All', 
      nav_toys: 'Toys', 
      nav_learning: 'Learning', 
      nav_art: 'Art',
      nav_main: 'Main',
      nav_toys_sensory: 'Sensory', 
      nav_toys_emotional: 'Cause and effect',
      nav_toys_construccion: 'Building',
      nav_toys_boardgames: 'Board games',
      menu_title: 'Categories',
      menu_toys_sensory: 'Sensory', 
      menu_toys_emotional: 'Cause and effect', 
      menu_toys_construccion: 'Building',
      menu_toys_boardgames: 'Board games',
      menu_learning_numbers: 'Math', 
      menu_learning_language: 'Language', 
      menu_learning_creativity: 'Independence',
      menu_learning_stories: 'Stories',
      menu_art_playdough: 'Play dough', 
      menu_art_notebooks: 'Notebooks', 
      menu_art_markers: 'Markers', 
      menu_art_pencils: 'Colored pencils',
      kit1_title: 'Emotional Kit',
      kit1_desc: 'Builds calm, self-control and healthy emotional expression.',
      kit2_title: 'Creativity & Expression Kit',
      kit2_desc: 'Sparks imagination, creativity and free expression of ideas and feelings.',
      kit3_title: 'Rest and well-being kit',
      kit3_desc: 'Promotes relaxation and rest to promote calmer and more restful sleep.',
      section_title: 'Recommended for you',
      price_label: 'Price', 
      add_btn: 'Add to cart',
      cart_title: 'Your cart', 
      cart_empty: 'Your cart is empty', 
      cart_remove: 'Remove', 
      cart_qty_prefix: 'Qty: ',
      nav_home: 'Home', 
      nav_about: 'About us',
      footer_copy: '2026 Lumen. All rights reserved.',
      footer_access: 'Quick links', 
      footer_info: 'Overview',
      nav_info: 'Overview', 
      nav_shop: 'Lumen Shop', 
      nav_centers: 'Centers', 
      nav_tours: 'Inclusive tours', 
      nav_pros: 'Professionals',
      footer_community: 'Visit our community!', 
      footer_contact: 'Contact us', 
      footer_email_label: 'Email:',
      p1_title: 'Anti-Stress Ball',
      p1_desc: 'Soft, flexible ball designed to squeeze and release tension.',
      p2_title: 'Pop It',
      p2_desc: 'Soft, flexible toy designed to press its bubbles.',
      p3_title: 'Cause-and-Effect Toy',
      p3_desc: 'Interactive toy designed to help little ones discover...',
      p4_title: 'Car Track',
      p4_desc: 'Educational toy designed for little ones to enjoy watching cars roll down...',
      p5_title: 'Washable Markers',
      p5_desc: 'Set of markers with vivid colors and a fine tip, great for drawing, coloring...',
      p6_title: 'Magnetic Blocks',
      p6_desc: 'Construction set with colorful magnetic pieces for building shapes...',
      p7_title: 'Colored Pencils',
      p7_desc: 'Set of colored pencils with an extra-soft lead that gives bold strokes.',
      p8_title: 'Tangles',
      p8_desc: 'Flexible sensory toy designed to bend, twist and manipulate.',
      p9_title: 'Pop Tubes',
      p9_desc: 'Corrugated plastic tubes that can be stretched, bent and connected.',
      p10_title: 'Infinity Cube',
      p10_desc: 'Small foldable device that can be manipulated endlessly.',
      p11_title: 'Sensory Balls',
      p11_desc: 'Soft balls filled with gel or colorful beads.',
      p12_title: 'Fidget Spinners',
      p12_desc: 'The classic spinning fidget or cubes with buttons, switches and wheels.',
      p13_title: 'Anti-Stress Rings',
      p13_desc: 'Small textured rings worn on the fingers.',
      p14_title: 'Pop It',
      p14_desc: 'Silicone sensory toy with bubbles that are repeatedly pressed.',
      p15_title: 'Stress Cube',
      p15_desc: 'Cube with different buttons, switches and tactile surfaces.',
      p16_title: 'Sensory Ball',
      p16_desc: 'Ball with a soft or spiky texture that stimulates touch.',
      p17_title: 'Squishy',
      p17_desc: 'Viscoelastic foam figure that can be compressed and slowly returns to shape.',
      p18_title: 'Therapy Dough',
      p18_desc: 'Moldable dough used to strengthen hands and improve coordination.',
      p19_title: 'Puzzle',
      p19_desc: 'A set of pieces that must be assembled to form an image or figure.',
      p20_title: 'Building Blocks',
      p20_desc: 'Interlocking pieces for building structures.',
      p21_title: 'Sorting Game',
      p21_desc: 'Educational material for grouping objects by color, shape, size or category.',
      p22_title: 'Emotion Cards',
      p22_desc: 'Illustrated cards with facial expressions that help recognize emotions.',
      p23_title: 'Communication Board',
      p23_desc: 'Visual tool with pictograms or symbols that facilitates communication.',
      p24_title: 'Sensory Musical Instrument',
      p24_desc: 'Soft-sound instrument designed to stimulate auditory perception.',
      p25_title: 'Weighted Blanket',
      p25_desc: 'Therapeutic blanket that applies deep pressure to promote calm.',
      p26_title: 'Educational Storybooks',
      p26_desc: 'Pleasant sensory experiences with a positive lesson.'
    }
  };

  // =========================================================
  // FUNCIÓN DE TRADUCCIÓN (usa I18n central si existe)
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
  // APLICAR TRADUCCIONES AL DOM
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

  // =========================================================
  // SELECCIONAR IDIOMA (SINCRONIZADO CON I18n central)
  // =========================================================
  function selectLanguage(lang) {
    if (!lang || !I18N[lang]) return;
    
    localStorage.setItem('lumen_lang', lang);
    
    const langFlag = document.getElementById('langFlag');
    const langLabel = document.getElementById('langLabel');
    const langOptions = document.querySelectorAll('.lang-option');
    const FLAGS = {
      es: 'https://flagcdn.com/w40/es.png',
      en: 'https://flagcdn.com/w40/gb.png'
    };
    
    if (langFlag) langFlag.src = FLAGS[lang] || FLAGS.es;
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    langOptions.forEach(o => {
      o.classList.toggle('selected', o.getAttribute('data-lang') === lang);
    });
    
    applyTranslations();
    
    if (window.I18n && typeof I18n.setLanguage === 'function') {
      I18n.setLanguage(lang);
    }
    
    if (typeof Cart !== 'undefined' && Cart.render) Cart.render();
    if (activeProductId) renderModal(activeProductId);
    
    console.log('🌐 Idioma cambiado a:', lang);
  }

  // =========================================================
  // INICIALIZAR IDIOMA DESDE localStorage
  // =========================================================
  const savedLang = localStorage.getItem('lumen_lang') || 'es';
  applyTranslations();

  // =========================================================
  // SELECTOR DE IDIOMA (EVENTOS)
  // =========================================================
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  function toggleLangDropdown(show) {
    if (show === undefined) {
      langDropdown.classList.toggle('open');
    } else if (show) {
      langDropdown.classList.add('open');
    } else {
      langDropdown.classList.remove('open');
    }
    if (langToggle) {
      langToggle.setAttribute('aria-expanded', langDropdown.classList.contains('open'));
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      toggleLangDropdown();
    });
  }

  document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.lang-wrapper');
    if (wrapper && !wrapper.contains(e.target) && langDropdown && langDropdown.classList.contains('open')) {
      toggleLangDropdown(false);
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && langDropdown && langDropdown.classList.contains('open')) {
      toggleLangDropdown(false);
    }
  });

  langOptions.forEach(opt => {
    opt.addEventListener('click', function(e) {
      e.stopPropagation();
      const lang = this.getAttribute('data-lang');
      if (lang) {
        selectLanguage(lang);
        toggleLangDropdown(false);
      }
    });
  });

  // =========================================================
  // MENÚ LATERAL
  // =========================================================
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const sideMenu = document.getElementById('sideMenu');
  const overlayBg = document.getElementById('overlayBg');

  function openMenu() {
    if (sideMenu) sideMenu.classList.add('open');
    if (overlayBg) overlayBg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (sideMenu) sideMenu.classList.remove('open');
    if (overlayBg) overlayBg.classList.remove('open');
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
  } else {
    console.warn('⚠️ Cart no está disponible');
  }

  // =========================================================
  // EVENTO PARA ABRIR EL CARRITO (DESDE EL HEADER)
  // =========================================================
  const cartToggle = document.getElementById('cartToggle');
  const cartDropdown = document.getElementById('cartDropdown');

  if (cartToggle && cartDropdown) {
    const newCartToggle = cartToggle.cloneNode(true);
    cartToggle.parentNode.replaceChild(newCartToggle, cartToggle);
    
    newCartToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      cartDropdown.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
      if (!newCartToggle.contains(e.target) && !cartDropdown.contains(e.target)) {
        cartDropdown.classList.remove('open');
      }
    });
  }

  // =========================================================
  // MODAL DE PRODUCTO
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
  if (modalImg) {
    modalImg.src = product.img;
    modalImg.alt = t(product.titleKey);
  }
  if (modalTitle) modalTitle.textContent = t(product.titleKey);
  if (modalDesc) modalDesc.textContent = t(product.descKey);
  // 🔥 AGREGAR PRECIO
  const modalPrice = document.getElementById('modalPrice');
  if (modalPrice) {
    modalPrice.textContent = '$' + (product.precio || 0).toFixed(2);
  }
}

  function openProductModal(productId) {
    if (!PRODUCTS[productId]) return;
    activeProductId = productId;
    renderModal(productId);
    if (productModalBg) productModalBg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    if (productModalBg) productModalBg.classList.remove('open');
    activeProductId = null;
    document.body.style.overflow = '';
  }

  window.openProductModal = openProductModal;
  window.closeProductModal = closeProductModal;
  window.PRODUCTS = PRODUCTS;
  window.t = t;
  window.Cart = Cart;

  // =========================================================
  // FUNCIÓN UNIFICADA PARA AGREGAR AL CARRITO CON CONTROL DE DUPLICADOS
  // =========================================================
  function addToCartUnified(productId, btnElement) {
    if (window._addingToCart) {
      return false;
    }
    const now = Date.now();
    if (window._lastAddedProduct === productId && (now - window._lastAddTime) < 1000) {
      return false;
    }
    if (!productId) {
      return false;
    }

    window._addingToCart = true;
    window._lastAddedProduct = productId;
    window._lastAddTime = now;

    try {
      if (typeof Cart !== 'undefined' && Cart.add) {
        Cart.add(productId);
        
        if (typeof Cart.render === 'function') {
          Cart.render();
        }
        
        const cartCount = document.getElementById('cartCount');
        if (cartCount && typeof Cart.count === 'function') {
          cartCount.textContent = Cart.count();
          cartCount.classList.remove('bump');
          void cartCount.offsetWidth;
          cartCount.classList.add('bump');
        }
        
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
          setTimeout(() => {
            window._addingToCart = false;
          }, 500);
        }
        return true;
      } else {
        window._addingToCart = false;
        return false;
      }
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      window._addingToCart = false;
      return false;
    }
  }

  // =========================================================
  // EVENTOS DE PRODUCTOS (CON DELEGACIÓN DE EVENTOS)
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
      if (!productId) return;
      addToCartUnified(productId, addBtn);
    });
  }

  // =========================================================
  // EVENTOS DEL MODAL
  // =========================================================
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (productModalBg) {
    productModalBg.addEventListener('click', function(e) {
      if (e.target === productModalBg) closeProductModal();
    });
  }

  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (activeProductId) {
        addToCartUnified(activeProductId, modalAddBtn);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeMenu();
      if (cartDropdown) cartDropdown.classList.remove('open');
    }
  });

  // =========================================================
  // CARRUSEL DE KITS
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
  // FILTRO POR CATEGORÍA (DESDE URL)
  // =========================================================
  const params = new URLSearchParams(window.location.search);
  const categoriaURL = params.get('cat');

  if (categoriaURL) {
    document.querySelectorAll('.product-card').forEach(card => {
      const categoriaProducto = card.dataset.categoria;
      card.style.display = (categoriaProducto === categoriaURL) ? '' : 'none';
    });
  }

  // =========================================================
  // BUSCADOR INTEGRADO
  // =========================================================
  function buscarProductos() {
    const input = document.getElementById('buscadorInput');
    if (!input) return;
    const texto = input.value.toLowerCase().trim();
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.product-card');
    let resultados = 0;
    cards.forEach(card => {
      const productId = card.dataset.productId;
      const product = PRODUCTS[productId];
      if (!product) return;
      const titulo = t(product.titleKey).toLowerCase();
      const descripcion = t(product.descKey).toLowerCase();
      if (texto === '' || titulo.includes(texto) || descripcion.includes(texto)) {
        card.style.display = '';
        resultados++;
      } else {
        card.style.display = 'none';
      }
    });
    let noResults = document.getElementById('noResults');
    if (!noResults) {
      noResults = document.createElement('p');
      noResults.id = 'noResults';
      noResults.className = 'no-results-msg';
      noResults.style.textAlign = 'center';
      noResults.style.padding = '40px 0';
      noResults.style.color = '#999';
      noResults.style.fontSize = '18px';
      grid.parentNode.insertBefore(noResults, grid.nextSibling);
    }
    if (texto !== '' && resultados === 0) {
      noResults.textContent = `😕 No encontramos "${texto}"`;
      noResults.style.display = '';
    } else {
      noResults.style.display = 'none';
    }
  }

  const buscadorInput = document.getElementById('buscadorInput');
  const btnBuscar = document.getElementById('btnBuscar');
  
  if (buscadorInput) {
    buscadorInput.addEventListener('input', buscarProductos);
    buscadorInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') buscarProductos();
    });
  }
  
  if (btnBuscar) {
    btnBuscar.addEventListener('click', buscarProductos);
  }

  console.log('✅ Lumen Shop inicializado correctamente');
  console.log('🌐 Idioma actual:', localStorage.getItem('lumen_lang') || 'es');
});
