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
    hero_title: "Donaciones",
    hero_desc: "Tu apoyo nos permite seguir desarrollando recursos y herramientas que promueven la inclusión y el bienestar de las personas dentro del espectro autista. Cada donación, sin importar su monto, contribuye a construir una comunidad más inclusiva.",

    // Section
    section_title: "Apoya nuestra misión",
    section_desc: "Con tu colaboración podemos seguir creando soluciones accesibles y herramientas que transforman vidas.",

    // Donation cards
    donation_one_title: "Donación única",
    donation_one_desc: "Realiza una donación única para apoyar nuestros proyectos y programas. Cada contribución nos acerca más a un mundo más inclusivo.",
    
    donation_monthly_title: "Donación mensual",
    donation_monthly_desc: "Conviértete en aliado de Lumen con una donación recurrente. Tu apoyo constante nos permite planificar a largo plazo y garantizar la continuidad de nuestros programas.",

    // Amounts
    amount_10: "$10",
    amount_25: "$25",
    amount_50: "$50",
    amount_100: "$100",
    amount_5: "$5/mes",
    amount_15: "$15/mes",
    amount_30: "$30/mes",
    amount_60: "$60/mes",
    amount_other: "Otro",

    // Buttons
    donate_btn: "Donar ahora",
    subscribe_btn: "Suscribirme",

    // Impact section
    impact_title: "El impacto de tu donación",
    impact_education: "Educación",
    impact_education_desc: "Desarrollamos recursos educativos accesibles para personas con autismo y sus familias.",
    impact_community: "Comunidad",
    impact_community_desc: "Fortalecemos espacios de encuentro y apoyo para familias y profesionales.",
    impact_technology: "Tecnología",
    impact_technology_desc: "Creamos herramientas digitales inclusivas que facilitan el aprendizaje y la comunicación.",
    impact_support: "Apoyo",
    impact_support_desc: "Brindamos acompañamiento y orientación a familias y cuidadores.",

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
    hero_title: "Donations",
    hero_desc: "Your support allows us to continue developing resources and tools that promote inclusion and well-being for people on the autism spectrum. Every donation, regardless of its amount, contributes to building a more inclusive community.",

    // Section
    section_title: "Support our mission",
    section_desc: "With your collaboration we can continue creating accessible solutions and tools that transform lives.",

    // Donation cards
    donation_one_title: "One-time donation",
    donation_one_desc: "Make a one-time donation to support our projects and programs. Every contribution brings us closer to a more inclusive world.",
    
    donation_monthly_title: "Monthly donation",
    donation_monthly_desc: "Become a Lumen ally with a recurring donation. Your constant support allows us to plan long-term and guarantee the continuity of our programs.",

    // Amounts
    amount_10: "$10",
    amount_25: "$25",
    amount_50: "$50",
    amount_100: "$100",
    amount_5: "$5/mo",
    amount_15: "$15/mo",
    amount_30: "$30/mo",
    amount_60: "$60/mo",
    amount_other: "Other",

    // Buttons
    donate_btn: "Donate now",
    subscribe_btn: "Subscribe",

    // Impact section
    impact_title: "The impact of your donation",
    impact_education: "Education",
    impact_education_desc: "We develop accessible educational resources for people with autism and their families.",
    impact_community: "Community",
    impact_community_desc: "We strengthen meeting and support spaces for families and professionals.",
    impact_technology: "Technology",
    impact_technology_desc: "We create inclusive digital tools that facilitate learning and communication.",
    impact_support: "Support",
    impact_support_desc: "We provide guidance and support to families and caregivers.",

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