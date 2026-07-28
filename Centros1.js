/* =========================================================
   DICCIONARIO DE TRADUCCIONES
========================================================= */
const translations = {
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

    hero_title: "Centros",
    hero_desc: "Explora centros y fundaciones que ofrecen apoyo y servicios para personas autistas y sus familias. Encuentra información sobre sus programas y ubicación en un solo lugar.",

    card1_title: "Fundación Soy Capaz",
    card1_desc: "Promueve la inclusión y el desarrollo de habilidades en personas con autismo, especialmente jóvenes y adultos.",

    card2_title: "Fundación Enséñame a vivir",
    card2_desc: "Brinda atención especializada, acompañamiento familiar y programas de apoyo para personas con TEA.",

    card3_title: "Centro Ann Sullivan Panamá",
    card3_desc: "Ofrece educación y capacitación para fomentar la autonomía e inclusión de personas con discapacidad y autismo.",

    card4_title: "Fundación Valórate",
    card4_desc: "Impulsa la inclusión y el acceso a servicios especializados para personas con necesidades de apoyo diversas.",

    card5_title: "CENTIR",
    card5_desc: "Apoya a personas con necesidades diversas a través de atención terapéutica y educativa integral.",

    card6_title: "IENDI",
    card6_desc: "Apoya a niños con trastornos del neurodesarrollo a través de atención especializada.",

    card_btn: "Ver ubicación",

    footer_copy: "2026 Lumen. Todos los derechos reservados.",
    footer_access: "Accesos rápidos",
    footer_contact: "Contáctanos al:",

    alert_location: "Aquí puedes agregar la ubicación de este centro."
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
    drop_girls: "Autism in girls and...",
    drop_conditions: "Associated conditions...",

    drop_who: "Who we are",
    drop_mission: "Mission and vision",
    drop_contact: "Contact",

    hero_title: "Centers",
    hero_desc: "Explore centers and foundations that offer support and services for autistic people and their families. Find information about their programs and location all in one place.",

    card1_title: "Soy Capaz Foundation",
    card1_desc: "Promotes inclusion and skill development for people with autism, especially young people and adults.",

    card2_title: "Enséñame a Vivir Foundation",
    card2_desc: "Provides specialized care, family support, and assistance programs for people with ASD.",

    card3_title: "Ann Sullivan Center Panama",
    card3_desc: "Offers education and training to foster autonomy and inclusion for people with disabilities and autism.",

    card4_title: "Valórate Foundation",
    card4_desc: "Drives inclusion and access to specialized services for people with diverse support needs.",

    card5_title: "CENTIR",
    card5_desc: "Supports people with diverse needs through comprehensive therapeutic and educational care.",

    card6_title: "IENDI",
    card6_desc: "Supports children with neurodevelopmental disorders through specialized care.",

    card_btn: "View location",

    footer_copy: "2026 Lumen. All rights reserved.",
    footer_access: "Quick links",
    footer_contact: "Contact us at:",

    alert_location: "You can add this center's location here."
  }
};

/* =========================================================
   ESTADO E IDIOMA GUARDADO
========================================================= */
let currentLang = localStorage.getItem("lumen_lang") || "es";

const flags = {
  es: "https://flagcdn.com/w80/es.png",
  en: "https://flagcdn.com/w80/gb.png"
};

/* =========================================================
   APLICAR TRADUCCIÓN A TODA LA PÁGINA
========================================================= */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.es;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.setAttribute("lang", lang);
}

/* =========================================================
   ACTUALIZAR EL BOTÓN DE IDIOMA (bandera + etiqueta)
========================================================= */
function updateLangButton(lang) {
  const langFlag = document.getElementById("langFlag");
  const langLabel = document.getElementById("langLabel");

  if (langFlag) langFlag.src = flags[lang];
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.classList.toggle("selected", opt.getAttribute("data-lang") === lang);
  });
}

/* =========================================================
   CAMBIAR IDIOMA
========================================================= */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("lumen_lang", lang);
  applyTranslations(lang);
  updateLangButton(lang);
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* --- Traducción inicial según idioma guardado --- */
  applyTranslations(currentLang);
  updateLangButton(currentLang);

  /* --- Dropdown de selección de idioma --- */
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");
  const langWrapper = document.getElementById("langWrapper");

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll(".lang-option").forEach((option) => {
      option.addEventListener("click", () => {
        const lang = option.getAttribute("data-lang");
        setLanguage(lang);
        langDropdown.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      });

      option.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          option.click();
        }
      });
    });

    /* Cerrar el dropdown al hacer click fuera */
    document.addEventListener("click", (e) => {
      if (langWrapper && !langWrapper.contains(e.target)) {
        langDropdown.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Botones "Ver ubicación" de cada tarjeta --- */
  const botones = document.querySelectorAll(".card button");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const dict = translations[currentLang] || translations.es;
      alert(dict.alert_location);
    });
  });

});
/* =========================================================
   PERSISTENCIA DE IDIOMA ENTRE PÁGINAS
========================================================= */

// 1) Al cargar la página, lee el idioma guardado (o "es" por defecto)
let currentLang = localStorage.getItem("lumen-lang") || "es";

// 2) Aplica las traducciones a los elementos [data-i18n] de ESA página
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.documentElement.lang = LANG_META[lang].htmlLang;
}

// 3) Cuando el usuario cambia de idioma (click en ES/EN), lo guarda
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lumen-lang", lang); // <-- ESTA línea es la clave

  applyTranslations(lang);
}

// 4) Al final del script, se aplica el idioma guardado apenas carga la página
applyTranslations(currentLang);
