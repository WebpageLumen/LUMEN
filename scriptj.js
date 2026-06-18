/* ═══════════════════════════════════════════
   scriptj.js  —  LUMEN Juegos Educativos
═══════════════════════════════════════════ */

/* ════════════════════════════
   TRADUCCIONES
   — claves del index principal
   integradas para navbar y footer
════════════════════════════ */
const TRANSLATIONS = {
  es: {
    /* Navbar (claves del index principal) */
    'nav_home':    'Inicio',
    'nav_info':    'Información general',
    'nav_shop':    'Lumen Shop',
    'nav_centers': 'Centros',
    'nav_tours':   'Giras inclusivas',
    'nav_pros':    'Profesionales',
    'nav_about':   'Sobre nosotros',

    /* Submenú: Información general (claves del index principal) */
    'drop_autism':     '¿Qué es el autismo?',
    'drop_causes':     'Causas del autismo',
    'drop_levels':     'Niveles de autismo',
    'drop_signs':      'Señales de alerta',
    'drop_girls':      'Autismo en niñas y...',
    'drop_conditions': 'Condiciones asociadas...',

    /* Submenú: Sobre nosotros (claves del index principal) */
    'drop_who':     '¿Quiénes somos?',
    'drop_mission': 'Misión y visión',
    'drop_contact': 'Contacto',

    /* Footer (claves del index principal) */
    'footer_copy':    '2026 Lumen. Todos los derechos reservados.',
    'footer_access':  'Accesos rápidos',
    'footer_contact': 'Contáctanos al:',

    /* Hero */
    'hero.title':   'Juegos educativos',
    'hero.tagline': 'Aquí encontrarás juegos que te ayudarán en diferentes áreas, organizados en varias categorías para que disfrutes aprendiendo explorando a tu ritmo.',

    /* Controles */
    'ctrl.color':     'Color',
    'ctrl.verMenos':  'Ver menos',
    'ctrl.verMas':    'Ver más',
    'ctrl.selectCat': 'Seleccionar categoría…',

    /* Categorías */
    'cat.atencion': 'Atención',
    'cat.logica':   'Lógica',
    'cat.lenguaje': 'Lenguaje',
    'cat.coord':    'Coordinación',
  },

  en: {
    /* Navbar (claves del index principal) */
    'nav_home':    'Home',
    'nav_info':    'General information',
    'nav_shop':    'Lumen Shop',
    'nav_centers': 'Centers',
    'nav_tours':   'Inclusive tours',
    'nav_pros':    'Professionals',
    'nav_about':   'About us',

    /* Submenú: General information (claves del index principal) */
    'drop_autism':     'What is autism?',
    'drop_causes':     'Causes of autism',
    'drop_levels':     'Levels of autism',
    'drop_signs':      'Warning signs',
    'drop_girls':      'Autism in girls...',
    'drop_conditions': 'Associated conditions...',

    /* Submenú: About us (claves del index principal) */
    'drop_who':     'Who are we?',
    'drop_mission': 'Mission and vision',
    'drop_contact': 'Contact',

    /* Footer (claves del index principal) */
    'footer_copy':    '2026 Lumen. All rights reserved.',
    'footer_access':  'Quick access',
    'footer_contact': 'Contact us:',

    /* Hero */
    'hero.title':   'Educational games',
    'hero.tagline': 'Here you will find games that will help you in different areas, organized into several categories so you can enjoy learning at your own pace.',

    /* Controls */
    'ctrl.color':     'Color',
    'ctrl.verMenos':  'Show less',
    'ctrl.verMas':    'Show more',
    'ctrl.selectCat': 'Select category…',

    /* Categories */
    'cat.atencion': 'Attention',
    'cat.logica':   'Logic',
    'cat.lenguaje': 'Language',
    'cat.coord':    'Coordination',
  }
};

/* Categorías con soporte bilingüe */
const CATS = {
  atencion: { es: 'Atención',     en: 'Attention',    icon: '', corner: '', row: 'row-atencion', cards: ['','','',''] },
  logica:   { es: 'Lógica',       en: 'Logic',        icon: '', corner: '', row: 'row-logica',   cards: ['','','',''] },
  lenguaje: { es: 'Lenguaje',     en: 'Language',     icon: '', corner: '', row: 'row-lenguaje', cards: ['','','',''] },
  coord:    { es: 'Coordinación', en: 'Coordination', icon: '', corner: '', row: 'row-coord',    cards: ['','','',''] }
};

/* ── Metadatos de idioma para bandera y etiqueta ── */
const LANG_META = {
  es: { label: 'ES', flagSrc: 'https://flagcdn.com/w80/es.png', htmlLang: 'es' },
  en: { label: 'EN', flagSrc: 'https://flagcdn.com/w80/gb.png', htmlLang: 'en' },
};

/* Recupera el idioma guardado, si no hay usa español */
let currentLang = localStorage.getItem('lumen-lang') || 'es';

/* ════════════════════════════
   APLICAR TRADUCCIONES
   — un único loop cubre toda
   la página gracias a data-i18n
════════════════════════════ */
function applyTranslations(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];

  /* Loop genérico: cubre navbar, dropdown, hero, controles,
     categorías, footer links, títulos y copyright */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Opciones del selector de categoría (texto dinámico con icono) */
  document.querySelectorAll('.cat-opt').forEach(opt => {
    const key = opt.dataset.cat;
    if (CATS[key]) opt.textContent = `${CATS[key].icon} ${CATS[key][lang]}`;
  });

  /* Botón selector si ya hay categoría activa */
  if (activeCat) {
    catSelectText.textContent = `${CATS[activeCat].icon} ${CATS[activeCat][lang]}`;
    renderMiniBlock(activeCat);
  } else {
    catSelectText.textContent = t['ctrl.selectCat'];
  }

  /* Label del toggle mini según estado */
  miniLabel.textContent = miniOn ? t['ctrl.verMas'] : t['ctrl.verMenos'];

  /* Actualiza la imagen de la bandera y el texto del código */
  document.getElementById('langLabel').textContent = LANG_META[lang].label;
  document.getElementById('langFlag').src          = LANG_META[lang].flagSrc;

  /* Resalta la opción activa en el dropdown de idioma */
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.lang === lang);
  });

  /* Actualiza el atributo lang del HTML para accesibilidad y SEO */
  document.documentElement.lang = LANG_META[lang].htmlLang;

  /* Guarda el idioma elegido para recordarlo al recargar */
  localStorage.setItem('lumen-lang', lang);
}

/* ── DOM ── */
const navbar           = document.getElementById('navbar');
const langBtn          = document.getElementById('langBtn');
const langDropdown     = document.getElementById('langDropdown');
const langWrapper      = document.getElementById('langWrapper');
const colorToggle      = document.getElementById('colorToggle');
const miniToggle       = document.getElementById('miniToggle');
const miniLabel        = document.getElementById('miniLabel');
const catSelectWrapper = document.getElementById('catSelectWrapper');
const catSelectBtn     = document.getElementById('catSelectBtn');
const catSelectText    = document.getElementById('catSelectText');
const catDropdown      = document.getElementById('catDropdown');
const miniSingleBlock  = document.getElementById('miniSingleBlock');

let colorOn  = false;
let miniOn   = false;
let activeCat = null;

/* ════════════════════════════
   1. NAVBAR scroll hide/show
   — compatible con navbar fijo del index principal
════════════════════════════ */
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.style.transform = (y > lastY && y > 80) ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
}, { passive: true });

/* ════════════════════════════
   2. DROPDOWN DE IDIOMA
   — abrir / cerrar (lógica del index principal)
════════════════════════════ */
function openLangDropdown() {
  langDropdown.classList.add('open');
  langBtn.setAttribute('aria-expanded', 'true');
}

function closeLangDropdown() {
  langDropdown.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
}

function toggleLangDropdown() {
  langDropdown.classList.contains('open') ? closeLangDropdown() : openLangDropdown();
}

/* Abre o cierra al hacer clic en el botón de idioma */
langBtn.addEventListener('click', e => {
  e.stopPropagation(); /* Evita que el clic llegue al document y lo cierre inmediatamente */
  toggleLangDropdown();
});

/* Cambia el idioma al seleccionar una opción */
document.querySelectorAll('.lang-option').forEach(opt => {
  opt.addEventListener('click', () => applyTranslations(opt.dataset.lang));
  /* Soporte de teclado: Enter o Espacio activan la opción */
  opt.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      applyTranslations(opt.dataset.lang);
    }
  });
});

/* ════════════════════════════
   3. DROPDOWN DE NAVEGACIÓN
   — lógica hover con delay del index principal
════════════════════════════ */
document.querySelectorAll('.nav-item').forEach(item => {
  const dropdown = item.querySelector('.nav-dropdown');

  let closeTimeout;

  function abrir() {
    clearTimeout(closeTimeout);
    item.classList.add('open');
  }

  function cerrar() {
    closeTimeout = setTimeout(() => {
      item.classList.remove('open');
    }, 500);
  }

  item.addEventListener('mouseenter', abrir);
  item.addEventListener('mouseleave', cerrar);

  dropdown.addEventListener('mouseenter', abrir);
  dropdown.addEventListener('mouseleave', cerrar);
});

/* ════════════════════════════
   4. CERRAR DROPDOWNS AL HACER CLIC FUERA
   Cierra tanto el dropdown de idioma como los de navegación
   cuando el usuario hace clic en cualquier parte de la página.
════════════════════════════ */
document.addEventListener('click', e => {
  /* Cierra dropdown de idioma */
  if (!langWrapper.contains(e.target)) {
    closeLangDropdown();
  }
  /* Cierra dropdowns de navegación */
  document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
  /* Cierra dropdown del selector de categoría */
  if (!catSelectBtn.contains(e.target) && !catDropdown.contains(e.target)) {
    catDropdown.classList.remove('open');
    catSelectBtn.classList.remove('open');
  }
});

/* ════════════════════════════
   5. SWITCH COLOR
════════════════════════════ */
colorToggle.closest('.switch-wrap').addEventListener('click', () => {
  colorOn = !colorOn;
  colorToggle.classList.toggle('on', colorOn);
  document.body.classList.toggle('color-off', colorOn);
});

/* ════════════════════════════
   6. SWITCH MINIMIZAR
════════════════════════════ */
miniToggle.closest('.switch-wrap').addEventListener('click', () => {
  miniOn = !miniOn;
  miniToggle.classList.toggle('on', miniOn);
  document.body.classList.toggle('mini-on', miniOn);

  const t = TRANSLATIONS[currentLang];

  if (miniOn) {
    miniLabel.textContent = t['ctrl.verMas'];
    catSelectWrapper.classList.remove('hidden');
  } else {
    miniLabel.textContent = t['ctrl.verMenos'];
    catSelectWrapper.classList.add('hidden');
    catSelectText.textContent = t['ctrl.selectCat'];
    catSelectBtn.classList.remove('open');
    catDropdown.classList.remove('open');
    miniSingleBlock.innerHTML = '';
    activeCat = null;
    document.querySelectorAll('.cat-opt').forEach(o => o.classList.remove('active'));

    document.querySelectorAll('.category-block').forEach(b => {
      b.classList.remove('visible');
      requestAnimationFrame(() => requestAnimationFrame(() => b.classList.add('visible')));
    });
  }
});

/* ════════════════════════════
   7. SELECTOR DE CATEGORÍA
════════════════════════════ */
catSelectBtn.addEventListener('click', e => {
  e.stopPropagation();
  const open = catDropdown.classList.toggle('open');
  catSelectBtn.classList.toggle('open', open);
});

document.querySelectorAll('.cat-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    const key = opt.dataset.cat;
    activeCat = key;

    catSelectText.textContent = `${CATS[key].icon} ${CATS[key][currentLang]}`;
    document.querySelectorAll('.cat-opt').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    catDropdown.classList.remove('open');
    catSelectBtn.classList.remove('open');

    renderMiniBlock(key);
  });
});

function renderMiniBlock(key) {
  const cat = CATS[key];
  const label = cat[currentLang];
  miniSingleBlock.innerHTML = `
    <div class="category-block visible" style="display:block">
      <div class="category-header">
        <div class="category-icon ${cat.cls}">${cat.icon}</div>
        <span class="category-label">${label}</span>
        <span class="category-corner">${cat.corner}</span>
      </div>
      <div class="cards-row ${cat.row}">
        ${cat.cards.map(c => `
          <a class="game-card" href="#">
            <div class="game-card-logo-slot">
              <span class="game-card-emoji">${c}</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  miniSingleBlock.querySelectorAll('.game-card').forEach(addRipple);
}

/* ════════════════════════════
   8. SCROLL REVEAL
════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.category-block').forEach(b => revealObs.observe(b));

/* ════════════════════════════
   9. RIPPLE
════════════════════════════ */
const rippleSt = document.createElement('style');
rippleSt.textContent = `@keyframes rippleAnim { to { transform:scale(3); opacity:0; } }`;
document.head.appendChild(rippleSt);

function addRipple(card) {
  card.addEventListener('click', function(e) {
    e.preventDefault();
    const size = Math.max(this.offsetWidth, this.offsetHeight);
    const r = document.createElement('span');
    r.style.cssText = `
      position:absolute;border-radius:50%;
      width:${size}px;height:${size}px;
      background:rgba(74,144,217,0.22);
      transform:scale(0);
      animation:rippleAnim .5s ease-out forwards;
      left:50%;top:50%;
      margin-left:-${size/2}px;margin-top:-${size/2}px;
      pointer-events:none;
    `;
    this.appendChild(r);
    setTimeout(() => r.remove(), 550);
  });
}
document.querySelectorAll('.game-card').forEach(addRipple);

/* ════════════════════════════
   INICIALIZACIÓN GENERAL
   Se ejecuta al cargar la página:
   1. Aplica las traducciones del idioma guardado o español por defecto
════════════════════════════ */
applyTranslations(currentLang);
