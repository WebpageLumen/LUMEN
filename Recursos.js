const TRANSLATIONS = {
  es: {
    nav_home:    "Inicio",
    nav_info:    "Información general",
    nav_shop:    "Lumen Shop",
    nav_centers: "Centros",
    nav_tours:   "Giras inclusivas",
    nav_pros:    "Profesionales",
    nav_about:   "Sobre nosotros",

    drop_autism:      "¿Qué es el autismo?",
    drop_causes:      "Causas del autismo",
    drop_levels:      "Niveles de autismo",
    drop_signs:       "Señales de alerta",
    drop_girls:       "Autismo en niñas y...",
    drop_conditions:  "Condiciones asociadas...",

    drop_who:         "¿Quiénes somos?",
    drop_mission:     "Misión y visión",
    drop_contact:     "Contacto",

    recursos_title:   "Recursos extras",
    recursos_mat_title: "Materiales<br>imprimibles",
    recursos_mat_desc:  "Encuentra actividades y recursos para descargar e imprimir.",
    recursos_mus_title: "Música",
    recursos_mus_desc:  "Música relajante, sonidos suaves y recursos auditivos para diferentes momentos del día.",

    footer_copy:      "2026 Lumen. Todos los derechos reservados.",
    footer_access:    "Accesos rápidos",
    footer_community: "¡Visita nuestra comunidad!",
    footer_contact:   "Contáctanos",
    footer_email_label: "Correo electrónico:",
  },

  en: {
    nav_home:    "Home",
    nav_info:    "General information",
    nav_shop:    "Lumen Shop",
    nav_centers: "Centers",
    nav_tours:   "Inclusive tours",
    nav_pros:    "Professionals",
    nav_about:   "About us",

    drop_autism:      "What is autism?",
    drop_causes:      "Causes of autism",
    drop_levels:      "Levels of autism",
    drop_signs:       "Warning signs",
    drop_girls:       "Autism in girls...",
    drop_conditions:  "Associated conditions...",

    drop_who:         "Who are we?",
    drop_mission:     "Mission and vision",
    drop_contact:     "Contact",

    recursos_title:   "Extra Resources",
    recursos_mat_title: "Printable<br>materials",
    recursos_mat_desc:  "Find activities and resources to download and print.",
    recursos_mus_title: "Music",
    recursos_mus_desc:  "Relaxing music, soft sounds and auditory resources for different moments of the day.",

    footer_copy:      "2026 Lumen. All rights reserved.",
    footer_access:    "Quick access",
    footer_community: "Visit our community!",
    footer_contact:   "Contact us",
    footer_email_label: "Email:",
  }
};

const LANG_META = {
  es: { label: "ES", flagSrc: "https://flagcdn.com/w80/es.png", htmlLang: "es" },
  en: { label: "EN", flagSrc: "https://flagcdn.com/w80/gb.png", htmlLang: "en" },
};

let currentLang = localStorage.getItem("lumen-lang") || "es";

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = LANG_META[lang].htmlLang;
}

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

document.querySelectorAll(".nav-item").forEach(item => {
  const dropdown = item.querySelector(".nav-dropdown");
  if (!dropdown) return;
  let closeTimeout;
  function abrir() { clearTimeout(closeTimeout); dropdown.classList.add("show"); }
  function cerrar() { closeTimeout = setTimeout(() => dropdown.classList.remove("show"), 500); }
  item.addEventListener("mouseenter", abrir);
  item.addEventListener("mouseleave", cerrar);
  dropdown.addEventListener("mouseenter", abrir);
  dropdown.addEventListener("mouseleave", cerrar);
});

document.addEventListener("click", () => {
  closeLangDropdown();
  document.querySelectorAll(".nav-item.open").forEach(i => i.classList.remove("open"));
});

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

const THEME_ICONS = { normal: "☀️", calm: "🌙" };
const THEME_LABELS = { normal: "Modo calma", calm: "Modo normal" };

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.textContent = THEME_ICONS[theme];

  const labelEl = document.getElementById("themeLabel");
  if (labelEl) labelEl.textContent = THEME_LABELS[theme];

  themeBtn.setAttribute(
    "aria-label",
    theme === "normal" ? "Activar modo calma" : "Volver al modo normal"
  );

  localStorage.setItem("lumen-theme", theme);
}

function getInitialTheme() {
  return localStorage.getItem("lumen-theme") || "normal";
}

themeBtn.addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("data-theme") || "normal";
  applyTheme(temaActual === "normal" ? "calm" : "normal");
});

applyTheme(getInitialTheme());
switchLanguage(currentLang);