/* =========================================================
   NAVBAR + FOOTER (Extraído de script2.js)
========================================================= */

/* =========================
   TRADUCCIONES
========================= */
const TRANSLATIONS = {
  es: {
    // Navbar
    nav_home: "Inicio",
    nav_info: "Información general",
    nav_shop: "Lumen Shop",
    nav_centers: "Centros",
    nav_tours: "Giras inclusivas",
    nav_pros: "Profesionales",
    nav_about: "Sobre nosotros",

    drop_autism: "¿Qué es el autismo?",
    drop_causes: "Causas del autismo",
    drop_levels: "Niveles de autismo",
    drop_signs: "Señales de alerta",
    drop_girls: "Autismo en niñas y...",
    drop_conditions: "Condiciones asociadas...",

    drop_who: "¿Quiénes somos?",
    drop_mission: "Misión y visión",
    drop_contact: "Contacto",

    // Hero
    hero_title: "Álbum de fotos",
    hero_desc: "Revive los momentos más especiales de nuestra comunidad. Aquí encontrarás fotos de eventos, giras inclusivas, talleres y actividades que hemos compartido juntos. Cada imagen refleja nuestro compromiso con la inclusión y el bienestar.",

    // Section
    section_title: "Nuestros recuerdos",
    section_desc: "Explora nuestra galería de momentos inolvidables compartidos con la comunidad Lumen.",

    // Filters
    filter_all: "Todos",
    filter_events: "Eventos",
    filter_tours: "Giras",
    filter_workshops: "Talleres",
    filter_community: "Comunidad",

    // Categories
    category_event: "Evento",
    category_tour: "Gira",
    category_workshop: "Taller",
    category_community: "Comunidad",

    // Event titles & descriptions
    event_title_1: "Celebración del Día de la Inclusión",
    event_desc_1: "Un día lleno de alegría y aprendizaje compartido.",
    event_title_2: "Feria de la Inclusión",
    event_desc_2: "Un espacio para visibilizar y celebrar la diversidad.",
    event_title_3: "Celebración de Fin de Año",
    event_desc_3: "Cerrando el año con gratitud y esperanza.",

    // Tour titles & descriptions
    tour_title_1: "Gira al Museo Interactivo",
    tour_desc_1: "Explorando el mundo a través de experiencias sensoriales.",
    tour_title_2: "Visita al Parque Natural",
    tour_desc_2: "Conectando con la naturaleza y la comunidad.",

    // Workshop titles & descriptions
    workshop_title_1: "Taller de Arte y Expresión",
    workshop_desc_1: "Creatividad sin límites para todas las edades.",
    workshop_title_2: "Taller de Música y Movimiento",
    workshop_desc_2: "Explorando la expresión a través del ritmo.",

    // Community titles & descriptions
    community_title_1: "Encuentro de Familias",
    community_desc_1: "Compartiendo experiencias y fortaleciendo lazos.",
    community_title_2: "Día de Convivencia",
    community_desc_2: "Fortaleciendo vínculos entre todos los miembros.",

    // Share section
    share_title: "¿Tienes fotos para compartir?",
    share_desc: "Queremos ver tus momentos especiales. Comparte tus fotos de eventos, giras o actividades inclusivas con nuestra comunidad.",
    share_btn: "Subir foto",

    // Load more
    load_more_btn: "Cargar más fotos",

    // Footer
    footer_copy: "2026 Lumen. Todos los derechos reservados.",
    footer_access: "Accesos rápidos",
    footer_community: "¡Visita nuestra comunidad!",
    footer_contact: "Contáctanos",
    footer_email_label: "Correo electrónico:"
  },

  en: {
    // Navbar
    nav_home: "Home",
    nav_info: "General information",
    nav_shop: "Lumen Shop",
    nav_centers: "Centers",
    nav_tours: "Inclusive tours",
    nav_pros: "Professionals",
    nav_about: "About us",

    drop_autism: "What is autism?",
    drop_causes: "Causes of autism",
    drop_levels: "Levels of autism",
    drop_signs: "Warning signs",
    drop_girls: "Autism in girls...",
    drop_conditions: "Associated conditions...",

    drop_who: "Who are we?",
    drop_mission: "Mission and vision",
    drop_contact: "Contact",

    // Hero
    hero_title: "Photo Album",
    hero_desc: "Relive the most special moments of our community. Here you will find photos of events, inclusive tours, workshops and activities we have shared together. Each image reflects our commitment to inclusion and well-being.",

    // Section
    section_title: "Our memories",
    section_desc: "Explore our gallery of unforgettable moments shared with the Lumen community.",

    // Filters
    filter_all: "All",
    filter_events: "Events",
    filter_tours: "Tours",
    filter_workshops: "Workshops",
    filter_community: "Community",

    // Categories
    category_event: "Event",
    category_tour: "Tour",
    category_workshop: "Workshop",
    category_community: "Community",

    // Event titles & descriptions
    event_title_1: "Inclusion Day Celebration",
    event_desc_1: "A day full of joy and shared learning.",
    event_title_2: "Inclusion Fair",
    event_desc_2: "A space to make diversity visible and celebrate it.",
    event_title_3: "Year-End Celebration",
    event_desc_3: "Closing the year with gratitude and hope.",

    // Tour titles & descriptions
    tour_title_1: "Tour to the Interactive Museum",
    tour_desc_1: "Exploring the world through sensory experiences.",
    tour_title_2: "Visit to the Natural Park",
    tour_desc_2: "Connecting with nature and the community.",

    // Workshop titles & descriptions
    workshop_title_1: "Art and Expression Workshop",
    workshop_desc_1: "Creativity without limits for all ages.",
    workshop_title_2: "Music and Movement Workshop",
    workshop_desc_2: "Exploring expression through rhythm.",

    // Community titles & descriptions
    community_title_1: "Family Gathering",
    community_desc_1: "Sharing experiences and strengthening bonds.",
    community_title_2: "Community Day",
    community_desc_2: "Strengthening ties among all members.",

    // Share section
    share_title: "Do you have photos to share?",
    share_desc: "We want to see your special moments. Share your photos of events, tours or inclusive activities with our community.",
    share_btn: "Upload photo",

    // Load more
    load_more_btn: "Load more photos",

    // Footer
    footer_copy: "2026 Lumen. All rights reserved.",
    footer_access: "Quick access",
    footer_community: "Visit our community!",
    footer_contact: "Contact us",
    footer_email_label: "Email:"
  }
};

/* =========================
   METADATOS DE IDIOMA
========================= */
const LANG_META = {
  es: {
    label: "ES",
    flagSrc: "https://flagcdn.com/w80/es.png",
    htmlLang: "es"
  },
  en: {
    label: "EN",
    flagSrc: "https://flagcdn.com/w80/gb.png",
    htmlLang: "en"
  }
};

let currentLang = localStorage.getItem("lumen-lang") || "es";

/* =========================
   APLICAR TRADUCCIONES
========================= */
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (dict[key] !== undefined) {
      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
        if (el.children.length > 0) {
          const textNodes = [];
          const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
          let node;
          while (node = walker.nextNode()) {
            if (node.parentNode === el) {
              textNodes.push(node);
            }
          }
          if (textNodes.length > 0) {
            textNodes[0].textContent = dict[key];
          } else {
            el.textContent = dict[key];
          }
        } else {
          el.textContent = dict[key];
        }
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  document.documentElement.lang = LANG_META[lang].htmlLang;

  applyImageTranslations(lang);
}

/* =========================
   TRADUCCIÓN DE IMÁGENES
   Solo cambia la imagen si existe
   una versión en inglés (data-img-en).
   Si no la tiene, se queda con la
   imagen original en español.
========================= */
function applyImageTranslations(lang) {
  document.querySelectorAll("img[data-img-es]").forEach(img => {
    const esSrc = img.dataset.imgEs;
    const enSrc = img.dataset.imgEn;

    if (lang === "en" && enSrc) {
      img.src = enSrc;
    } else if (esSrc) {
      img.src = esSrc;
    }
  });
}

/* =========================
   AJUSTE DINÁMICO DEL NAVBAR
   Mide el alto real del navbar
   (puede variar si el texto envuelve
   en varias líneas, en móvil, o al
   cambiar de idioma) y lo guarda en
   una variable CSS para que el hero
   nunca quede tapado.
========================= */
function updateNavbarHeight() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const height = navbar.offsetHeight;
  document.documentElement.style.setProperty("--navbar-height", `${height}px`);
}

window.addEventListener("load", updateNavbarHeight);
window.addEventListener("resize", updateNavbarHeight);

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateNavbarHeight);
}

// ResizeObserver: detecta CUALQUIER cambio de altura del navbar
// (idioma, envolvido de texto, zoom, etc.) al instante, sin
// depender de que se disparen los eventos load/resize.
const navbarEl = document.querySelector(".navbar");
if (navbarEl && window.ResizeObserver) {
  new ResizeObserver(updateNavbarHeight).observe(navbarEl);
}

/* =========================
   CAMBIO DE IDIOMA
========================= */
function switchLanguage(lang) {
  currentLang = lang;

  localStorage.setItem("lumen-lang", lang);

  const label = document.getElementById("langLabel");
  const flag = document.getElementById("langFlag");

  if (label) {
    label.textContent = LANG_META[lang].label;
  }

  if (flag) {
    flag.src = LANG_META[lang].flagSrc;
  }

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle(
      "selected",
      opt.dataset.lang === lang
    );
  });

  applyTranslations(lang);
  closeLangDropdown();

  // El texto en otro idioma puede tener otro ancho y hacer
  // que el navbar envuelva distinto, así que recalculamos.
  updateNavbarHeight();
}

/* =========================
   DROPDOWN DE IDIOMA
========================= */
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");

function openLangDropdown() {
  if (!langDropdown || !langBtn) return;

  langDropdown.classList.add("open");
  langBtn.setAttribute("aria-expanded", "true");
}

function closeLangDropdown() {
  if (!langDropdown || !langBtn) return;

  langDropdown.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
}

function toggleLangDropdown() {
  if (!langDropdown) return;

  langDropdown.classList.contains("open")
    ? closeLangDropdown()
    : openLangDropdown();
}

if (langBtn) {
  langBtn.addEventListener("click", e => {
    e.stopPropagation();
    toggleLangDropdown();
  });
}

document.querySelectorAll(".lang-option").forEach(opt => {
  opt.addEventListener("click", () => {
    switchLanguage(opt.dataset.lang);
  });

  opt.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      switchLanguage(opt.dataset.lang);
    }
  });
});

/* =========================
   DROPDOWNS DEL NAVBAR
========================= */
document.querySelectorAll(".nav-item").forEach(item => {
  const dropdown = item.querySelector(".nav-dropdown");

  if (!dropdown) return;

  let closeTimeout;

  function abrir() {
    clearTimeout(closeTimeout);
    item.classList.add("open");
  }

  function cerrar() {
    closeTimeout = setTimeout(() => {
      item.classList.remove("open");
    }, 500);
  }

  item.addEventListener("mouseenter", abrir);
  item.addEventListener("mouseleave", cerrar);

  dropdown.addEventListener("mouseenter", abrir);
  dropdown.addEventListener("mouseleave", cerrar);
});

/* =========================
   CERRAR MENÚS AL HACER CLIC FUERA
========================= */
document.addEventListener("click", () => {
  closeLangDropdown();

  document
    .querySelectorAll(".nav-item.open")
    .forEach(item => item.classList.remove("open"));
});

/* =========================
   DELAY PARA DROPDOWNS
========================= */
document.querySelectorAll(".nav-item").forEach(item => {
  const dropdown = item.querySelector(".nav-dropdown");

  if (!dropdown) return;

  let hideTimeout;

  item.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    dropdown.classList.add("show");
  });

  item.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      dropdown.classList.remove("show");
    }, 350);
  });
});

/* =========================
   FILTROS DEL ÁLBUM
========================= */
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remover clase active de todos los filtros
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    // Agregar clase active al filtro clickeado
    this.classList.add('active');

    const filtro = this.dataset.filtro;
    const items = document.querySelectorAll('.foto-item');

    items.forEach(item => {
      if (filtro === 'todos' || item.dataset.categoria === filtro) {
        item.style.display = 'block';
        // Animación de entrada
        item.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Agregar animación fadeIn
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

/* =========================
   BOTÓN CARGAR MÁS
========================= */
document.querySelector('.btn-cargar')?.addEventListener('click', function() {
  // Simular carga de más fotos
  const originalText = this.innerHTML;
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
  this.disabled = true;

  setTimeout(() => {
    this.innerHTML = originalText;
    this.disabled = false;
    // Aquí se podrían agregar más fotos dinámicamente
    alert('¡Pronto habrá más fotos disponibles!');
  }, 1500);
});

/* =========================
   INICIALIZACIÓN
   Usa switchLanguage() (no solo applyTranslations)
   para que se apliquen también la bandera, la etiqueta
   y la opción seleccionada del selector de idioma.
   Como currentLang viene de localStorage("lumen-lang"),
   el idioma elegido en cualquier página del sitio se
   mantiene al navegar a esta página, y viceversa.
========================= */
switchLanguage(currentLang);
updateNavbarHeight();

// Forzar re-aplicación después de que la página esté completamente cargada
document.addEventListener('DOMContentLoaded', function() {
  switchLanguage(currentLang);
  updateNavbarHeight();
});

// También forzar después de un pequeño delay para asegurar que todo esté renderizado
setTimeout(() => {
  switchLanguage(currentLang);
  updateNavbarHeight();
}, 100);
