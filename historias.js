/* =========================================================
   TRADUCCIONES
========================================================= */
const TRANSLATIONS = {
  es: {
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
    hist_title: "Historias<br>sociales",
    hist_subtitle: "Historias sociales para aprender, comprender y practicar situaciones cotidianas de una manera sencilla y visual.",
    all_stories: "Todas las historias",
    story1_title: "Saludar a alguien",
    story1_desc: "Aprendo diferentes formas de saludar y ser amable.",
    story1_diff: "Fácil",
    story1_time: "3-4 min",
    story2_title: "Pedir ayuda",
    story2_desc: "Aprendo a pedir ayuda cuando la necesito.",
    story2_diff: "Medio",
    story2_time: "3-4 min",
    story3_title: "En la tienda",
    story3_desc: "Aprendo cómo comportarme en la tienda.",
    story3_diff: "Medio",
    story3_time: "3-4 min",
    story4_title: "Probar alimentos nuevos",
    story4_desc: "Aprendo a probar alimentos nuevos paso a paso.",
    story4_diff: "Medio",
    story4_time: "3-4 min",
    footer_copy: "2026 Lumen. Todos los derechos reservados.",
    footer_access: "Accesos rápidos",
    footer_community: "¡Visita nuestra comunidad!",
    footer_contact: "Contáctanos",
    footer_email_label: "Correo electrónico:",
    cat_figurative: "Lenguaje Figurado",
    cat_home: "Hogar",
    cat_school: "Escuela",
    cat_places: "Lugares",
    cat_hygiene: "Higiene",
    cat_transitions: "Cambios y Transiciones",
  },
  en: {
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
    hist_title: "Social<br>stories",
    hist_subtitle: "Social stories to learn, understand and practice everyday situations in a simple and visual way.",
    all_stories: "All stories",
    story1_title: "Greeting someone",
    story1_desc: "I learn different ways to greet and be kind.",
    story1_diff: "Easy",
    story1_time: "3-4 min",
    story2_title: "Asking for help",
    story2_desc: "I learn to ask for help when I need it.",
    story2_diff: "Medium",
    story2_time: "3-4 min",
    story3_title: "At the store",
    story3_desc: "I learn how to behave at the store.",
    story3_diff: "Medium",
    story3_time: "3-4 min",
    story4_title: "Trying new foods",
    story4_desc: "I learn to try new foods step by step.",
    story4_diff: "Medium",
    story4_time: "3-4 min",
    footer_copy: "2026 Lumen. All rights reserved.",
    footer_access: "Quick access",
    footer_community: "Visit our community!",
    footer_contact: "Contact us",
    footer_email_label: "Email:",
    cat_figurative: "Figurative Language",
    cat_home: "Home",
    cat_school: "School",
    cat_places: "Places",
    cat_hygiene: "Hygiene",
    cat_transitions: "Changes and Transitions",
  }
};
/* =========================================================
   METADATOS DE IDIOMA
========================================================= */
const LANG_META = {
  es: { label: "ES", flagSrc: "https://flagcdn.com/w80/es.png", htmlLang: "es" },
  en: { label: "EN", flagSrc: "https://flagcdn.com/w80/gb.png", htmlLang: "en" },
};
let currentLang = localStorage.getItem("lumen-lang") || "es";
/* =========================================================
   APLICAR TRADUCCIONES
========================================================= */
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = LANG_META[lang].htmlLang;
}
/* =========================================================
   CAMBIO DE IDIOMA
========================================================= */
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lumen-lang", lang);
  document.getElementById("langLabel").textContent = LANG_META[lang].label;
  document.getElementById("langFlag").src = LANG_META[lang].flagSrc;
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("selected", opt.dataset.lang === lang);
  });
  applyTranslations(lang);
  closeLangDropdown();
}
/* =========================================================
   DROPDOWN DE IDIOMA
========================================================= */
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");
function openLangDropdown() {
  langDropdown.classList.add("open");
  langBtn.setAttribute("aria-expanded", "true");
}
function closeLangDropdown() {
  langDropdown.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
}
function toggleLangDropdown() {
  langDropdown.classList.contains("open") ? closeLangDropdown() : openLangDropdown();
}
langBtn.addEventListener("click", e => {
  e.stopPropagation();
  toggleLangDropdown();
});
document.querySelectorAll(".lang-option").forEach(opt => {
  opt.addEventListener("click", () => switchLanguage(opt.dataset.lang));
  opt.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      switchLanguage(opt.dataset.lang);
    }
  });
});
/* =========================================================
   DROPDOWN DE NAVEGACIÓN
========================================================= */
document.querySelectorAll(".nav-item").forEach(item => {
  const dropdown = item.querySelector(".nav-dropdown");
  if (!dropdown) return;
  let hideTimeout;
  item.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    dropdown.classList.add("show");
    item.classList.add("open");
  });
  item.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      dropdown.classList.remove("show");
      item.classList.remove("open");
    }, 350);
  });
});
/* =========================================================
   CERRAR DROPDOWNS AL HACER CLIC FUERA
========================================================= */
document.addEventListener("click", () => {
  closeLangDropdown();
  document.querySelectorAll(".nav-item.open").forEach(i => i.classList.remove("open"));
  document.querySelectorAll(".nav-dropdown.show").forEach(d => d.classList.remove("show"));
});
/* =========================================================
   SISTEMA DE MODO CALMA (NO TOCAR)
========================================================= */
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const THEME_ICONS = {
  normal: "🌙",
  calm: "☀️"
};
function getInitialTheme() {
  return localStorage.getItem("lumen-theme") || "normal";
}
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.textContent = THEME_ICONS[theme];
  localStorage.setItem("lumen-theme", theme);
}
themeBtn.addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("data-theme") || "normal";
  applyTheme(temaActual === "normal" ? "calm" : "normal");
});
/* =========================================================
   FAVORITOS DE HISTORIAS
========================================================= */
document.querySelectorAll(".story-heart").forEach(heart => {
  heart.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const active = heart.getAttribute("aria-pressed") === "true";
    heart.setAttribute("aria-pressed", String(!active));
    heart.setAttribute("aria-label", !active ? "Quitar de favoritos" : "Agregar a favoritos");
  });
});

/* =========================================================
   CATEGORÍAS DE HISTORIAS
========================================================= */
const categoryMenu = document.getElementById("storyCategoryMenu");
const categoryTriggers = document.querySelectorAll(".sidebar-label, .sidebar-arrow");
const categoryItems = document.querySelectorAll(".story-category-item");

function setCategoryMenu(open) {
  categoryMenu.classList.toggle("show", open);
  categoryMenu.setAttribute("aria-hidden", String(!open));
  categoryTriggers.forEach(trigger => trigger.setAttribute("aria-expanded", String(open)));
}

categoryTriggers.forEach(trigger => {
  trigger.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    setCategoryMenu(!categoryMenu.classList.contains("show"));
  });
});

categoryItems.forEach(item => {
  item.setAttribute("aria-pressed", "false");
  item.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    categoryItems.forEach(other => {
      other.classList.remove("active");
      other.setAttribute("aria-pressed", "false");
    });
    item.classList.add("active");
    item.setAttribute("aria-pressed", "true");
  });
});

categoryMenu.addEventListener("click", event => event.stopPropagation());

document.addEventListener("click", () => setCategoryMenu(false));

/* =========================================================
   INICIALIZACIÓN
========================================================= */
applyTheme(getInitialTheme());
switchLanguage(currentLang);