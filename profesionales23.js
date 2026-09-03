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
    hero_title: "Profesionales",
    hero_desc: "En esta sección podrás encontrar profesionales especializados que brindan orientación, apoyo y recomendaciones a familias. Explora distintos perfiles, conoce sus áreas de experiencia y contacta a quienes mejor se adapten a tus necesidades. Todo desde un lugar, de forma accesible y segura.",

    // Sección
    section_title: "Nuestros Especialistas",
    section_desc: "Encuentra profesionales preparados para brindar apoyo a niños, adolescentes y familias.",

    // Botón contacto
    contact_btn: "Contactar",

    // Profesional 1
    pro1_name: "Dra. María González",
    pro1_title: "Psicóloga Infantil",
    pro1_desc: "Especialista en desarrollo infantil, habilidades sociales y acompañamiento familiar. Cuenta con más de 8 años de experiencia trabajando con niños y adolescentes.",
    pro1_specialties_label: "Especialidades:",
    pro1_specialties: "Regulación emocional, habilidades sociales y orientación familiar.",
    pro1_mode_label: "Modalidad:",
    pro1_mode: "Videollamada y chat.",
    pro1_languages_label: "Idiomas:",
    pro1_languages: "Español e Inglés.",
    pro1_availability_label: "Disponibilidad:",
    pro1_availability: "Lunes a viernes.",

    // Profesional 2
    pro2_name: "Lic. Carlos Mendoza",
    pro2_title: "Terapeuta Ocupacional",
    pro2_desc: "Especialista en integración sensorial, autonomía personal y estimulación temprana.",
    pro2_specialties_label: "Especialidades:",
    pro2_specialties: "Integración sensorial, habilidades motoras, autonomía.",
    pro2_mode_label: "Modalidad:",
    pro2_mode: "Presencial y virtual.",
    pro2_languages_label: "Idiomas:",
    pro2_languages: "Español.",
    pro2_availability_label: "Disponibilidad:",
    pro2_availability: "Lunes a sábado.",

    // Profesional 3
    pro3_name: "Dra. Ana Rodríguez",
    pro3_title: "Fonoaudióloga",
    pro3_desc: "Especialista en lenguaje, comunicación y desarrollo del habla.",
    pro3_specialties_label: "Especialidades:",
    pro3_specialties: "Lenguaje expresivo, comunicación alternativa, terapia del habla.",
    pro3_mode_label: "Modalidad:",
    pro3_mode: "Presencial y videollamada.",
    pro3_languages_label: "Idiomas:",
    pro3_languages: "Español.",
    pro3_availability_label: "Disponibilidad:",
    pro3_availability: "Martes a viernes.",

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
    hero_title: "Professionals",
    hero_desc: "In this section you will find specialized professionals who provide guidance, support and recommendations to families. Explore different profiles, learn about their areas of expertise and contact those who best suit your needs. All from one place, accessible and secure.",

    // Sección
    section_title: "Our Specialists",
    section_desc: "Find professionals prepared to provide support to children, adolescents and families.",

    // Botón contacto
    contact_btn: "Contact",

    // Profesional 1
    pro1_name: "Dr. María González",
    pro1_title: "Child Psychologist",
    pro1_desc: "Specialist in child development, social skills and family support. With more than 8 years of experience working with children and adolescents.",
    pro1_specialties_label: "Specialties:",
    pro1_specialties: "Emotional regulation, social skills and family guidance.",
    pro1_mode_label: "Mode:",
    pro1_mode: "Video call and chat.",
    pro1_languages_label: "Languages:",
    pro1_languages: "Spanish and English.",
    pro1_availability_label: "Availability:",
    pro1_availability: "Monday to Friday.",

    // Profesional 2
    pro2_name: "Lic. Carlos Mendoza",
    pro2_title: "Occupational Therapist",
    pro2_desc: "Specialist in sensory integration, personal autonomy and early stimulation.",
    pro2_specialties_label: "Specialties:",
    pro2_specialties: "Sensory integration, motor skills, autonomy.",
    pro2_mode_label: "Mode:",
    pro2_mode: "In-person and virtual.",
    pro2_languages_label: "Languages:",
    pro2_languages: "Spanish.",
    pro2_availability_label: "Availability:",
    pro2_availability: "Monday to Saturday.",

    // Profesional 3
    pro3_name: "Dr. Ana Rodríguez",
    pro3_title: "Speech Therapist",
    pro3_desc: "Specialist in language, communication and speech development.",
    pro3_specialties_label: "Specialties:",
    pro3_specialties: "Expressive language, alternative communication, speech therapy.",
    pro3_mode_label: "Mode:",
    pro3_mode: "In-person and video call.",
    pro3_languages_label: "Languages:",
    pro3_languages: "Spanish.",
    pro3_availability_label: "Availability:",
    pro3_availability: "Tuesday to Friday.",

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
      // Para elementos que pueden tener HTML interno o solo texto
      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
        // Si el elemento tiene hijos, usamos textContent para no romper la estructura
        if (el.children.length > 0) {
          // Si tiene hijos, solo actualizamos el texto de los nodos de texto
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
   INICIALIZACIÓN
========================= */
applyTranslations(currentLang);

const savedLang = currentLang || "es";

const label = document.getElementById("langLabel");
const flag = document.getElementById("langFlag");


if (label && flag) {

  label.textContent = LANG_META[savedLang].label;

  flag.src = LANG_META[savedLang].flagSrc;

}


document.querySelectorAll(".lang-option").forEach(opt => {

  opt.classList.toggle(
    "selected",
    opt.dataset.lang === savedLang
  );

});


closeLangDropdown();

// Forzar re-aplicación después de que la página esté completamente cargada
document.addEventListener('DOMContentLoaded', function() {
  applyTranslations(currentLang);
});

// También forzar después de un pequeño delay para asegurar que todo esté renderizado
setTimeout(() => {
  applyTranslations(currentLang);
}, 100);
