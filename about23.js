/* =========================================================
   NAVBAR + FOOTER (script2.js)
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
    hero_title: "Sobre nosotros",
    hero_desc: "Conoce la historia de Lumen, nuestra misión, visión y el compromiso con el desarrollo de soluciones tecnológicas que promueven la inclusión y el bienestar de las personas dentro del espectro autista y otras condiciones.",

    // About section
    about_who: "¿Quiénes somos?",
    about_who_desc: "En Lumen, somos una empresa comprometida con el desarrollo de una plataforma tecnológica inclusiva diseñada para mejorar la calidad de vida de las personas dentro del espectro autista. Creemos que la tecnología puede ser una herramienta transformadora para promover el aprendizaje, la comunicación, la autonomía y la inclusión, brindando soluciones accesibles tanto para personas autistas como para sus familias, cuidadores y profesionales.",

    about_purpose: "Nuestro propósito",
    about_purpose_desc: "Aprovechar el potencial de la tecnología para reducir barreras, promover la autonomía y brindar herramientas que faciliten el aprendizaje, la comunicación, la interacción social y el acceso a experiencias adaptadas a las necesidades de cada usuario.",

    about_platform: "Una plataforma hecha para cada persona",
    about_platform_desc: "Creamos una plataforma educativa, social y de regulación emocional en un entorno accesible, dinámico y adaptado a las necesidades de cada usuario, junto con el apoyo a familias, educadores y profesionales.",

    // Values section
    values_title: "Creemos en:",
    value_inclusion: "Inclusión",
    value_inclusion_desc: "Promovemos la participación equitativa de todas las personas en la sociedad.",
    value_empathy: "Empatía",
    value_empathy_desc: "Escuchamos, comprendemos y acompañamos con respeto y sensibilidad.",
    value_innovation: "Innovación",
    value_innovation_desc: "Desarrollamos soluciones creativas que generan un impacto real.",
    value_equality: "Igualdad",
    value_equality_desc: "Creemos en un mundo con las mismas oportunidades para todos.",

    impact_title: "Impacto positivo en la sociedad",
    impact_desc: "En Lumen, entendemos que la verdadera innovación no solo consiste en desarrollar tecnología avanzada, sino también en generar un impacto positivo en la sociedad. Por ello, promovemos una cultura de respeto, aceptación y equidad, contribuyendo a la construcción de comunidades más inclusivas.",

    commitment_title: "Nuestro compromiso",
    commitment_desc: "Seguir fortaleciendo una plataforma que conecte la tecnología con el bienestar humano, creando oportunidades que favorezcan la independencia, el desarrollo personal y la inclusión social.",

    // Mission & Vision
    mission_title: "Misión",
    mission_desc: "Brindar una plataforma digital inclusiva que apoye el aprendizaje, desarrollo y bienestar de niños y jóvenes con autismo y otras necesidades de aprendizaje y desarrollo.",

    vision_title: "Visión",
    vision_desc: "Ser una plataforma de referencia en inclusión y apoyo al desarrollo infantil y juvenil.",

    // Community & Donation
    community_desc: "Encuentra experiencias de otras personas, recomendaciones útiles, consejos prácticos y un espacio seguro para compartir, aprender y conectar con personas que viven experiencias similares.",
    community_btn: "Ir a la comunidad",

    donation_desc: "Apoya nuestra misión. Cada aporte nos permite seguir desarrollando recursos para una comunidad más inclusiva.",
    donation_btn: "Hacer una donación",

    album_desc: "Revive nuestras actividades a través de un álbum con fotos de eventos, giras y momentos especiales compartidos con la comunidad.",
    album_btn: "Ver álbum",

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
    hero_title: "About us",
    hero_desc: "Learn about Lumen's story, our mission, vision and commitment to developing technological solutions that promote inclusion and well-being for people on the autism spectrum and other conditions.",

    // About section
    about_who: "Who are we?",
    about_who_desc: "At Lumen, we are a company committed to developing an inclusive technological platform designed to improve the quality of life for people on the autism spectrum. We believe that technology can be a transformative tool to promote learning, communication, autonomy and inclusion, providing accessible solutions for autistic people as well as their families, caregivers and professionals.",

    about_purpose: "Our purpose",
    about_purpose_desc: "To harness the potential of technology to reduce barriers, promote autonomy and provide tools that facilitate learning, communication, social interaction and access to experiences adapted to each user's needs.",

    about_platform: "A platform made for each person",
    about_platform_desc: "We create an educational, social and emotional regulation platform in an accessible, dynamic environment adapted to each user's needs, along with support for families, educators and professionals.",

    // Values section
    values_title: "We believe in:",
    value_inclusion: "Inclusion",
    value_inclusion_desc: "We promote equitable participation of all people in society.",
    value_empathy: "Empathy",
    value_empathy_desc: "We listen, understand and support with respect and sensitivity.",
    value_innovation: "Innovation",
    value_innovation_desc: "We develop creative solutions that generate real impact.",
    value_equality: "Equality",
    value_equality_desc: "We believe in a world with equal opportunities for everyone.",

    impact_title: "Positive impact on society",
    impact_desc: "At Lumen, we understand that true innovation is not only about developing advanced technology, but also about generating a positive impact on society. Therefore, we promote a culture of respect, acceptance and equity, contributing to building more inclusive communities.",

    commitment_title: "Our commitment",
    commitment_desc: "To continue strengthening a platform that connects technology with human well-being, creating opportunities that favor independence, personal development and social inclusion.",

    // Mission & Vision
    mission_title: "Mission",
    mission_desc: "To provide an inclusive digital platform that supports the learning, development and well-being of children and young people with autism and other learning and developmental needs.",

    vision_title: "Vision",
    vision_desc: "To be a reference platform in inclusion and support for child and youth development.",

    // Community & Donation
    community_desc: "Find experiences from other people, useful recommendations, practical tips and a safe space to share, learn and connect with people who live similar experiences.",
    community_btn: "Go to community",

    donation_desc: "Support our mission. Every contribution allows us to continue developing resources for a more inclusive community.",
    donation_btn: "Make a donation",

    album_desc: "Relive our activities through a photo album of events, tours and special moments shared with the community.",
    album_btn: "View album",

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
      if (['A', 'BUTTON', 'SPAN', 'P', 'H1', 'H2', 'H3'].includes(el.tagName)) {
        // Si el elemento tiene hijos, usamos textContent para no romper la estructura
        if (el.children.length > 0) {
          // Si tiene hijos, solo actualizamos el texto de los nodos de texto directos
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
   (bloque unificado - antes había dos bloques duplicados)
========================= */
document.querySelectorAll(".nav-item").forEach(item => {
  const dropdown = item.querySelector(".nav-dropdown");

  if (!dropdown) return;

  let hideTimeout;

  // Abrir al pasar el mouse (con protección contra el timer de cierre)
  item.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    dropdown.classList.add("show");
  });

  // Cerrar con pequeño delay para permitir mover el mouse al dropdown
  item.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      dropdown.classList.remove("show");
    }, 350);
  });
});

/* =========================
   CERRAR MENÚS AL HACER CLIC FUERA
========================= */
document.addEventListener("click", e => {
  // No cerrar si el clic fue dentro del selector de idioma
  if (!e.target.closest(".lang-wrapper")) {
    closeLangDropdown();
  }

  // Cerrar todos los dropdowns del navbar
  document
    .querySelectorAll(".nav-dropdown.show")
    .forEach(d => d.classList.remove("show"));
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