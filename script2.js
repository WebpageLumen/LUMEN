/* =========================================================
   TRADUCCIONES
   Objeto con todos los textos del sitio en cada idioma.
   Para agregar un idioma nuevo: duplica el bloque "es"
   con su código (ej: "fr") y traduce cada valor.
========================================================= */
const TRANSLATIONS = {
 
  es: {
    /* Navegación */
    nav_home:    "Inicio",
    nav_info:    "Información general",
    nav_shop:    "Lumen Shop",
    nav_centers: "Centros",
    nav_tours:   "Giras inclusivas",
    nav_pros:    "Profesionales",
    nav_about:   "Sobre nosotros",
 
    /* Submenú: Información general */
    drop_autism:      "¿Qué es el autismo?",
    drop_causes:      "Causas del autismo",
    drop_levels:      "Niveles de autismo",
    drop_signs:       "Señales de alerta",
    drop_girls:       "Autismo en niñas y...",
    drop_conditions:  "Condiciones asociadas...",
 
    /* Submenú: Sobre nosotros */
    drop_who:         "¿Quiénes somos?",
    drop_mission:     "Misión y visión",
    drop_contact:     "Contacto",
 
    /* Hero */
    hero_title_1:         "Un espacio pensado<br>para acompañarte<br>en ",
    hero_title_highlight: "cada paso",
    hero_desc:            "Lumen acompaña a niños, niñas y jóvenes en su desarrollo, brindando herramientas, actividades y experiencias inclusivas que promueven su bienestar y autonomía.",
 
    /* Sección principal */
    sections_title:   "¿Qué encuentras en Lumen?",
    card_juegos:      "Juegos<br>educativos",
    card_actividades: "Actividades<br>sociales",
    card_regulacion:  "Regulación<br>emocional",
    card_recursos:    "Recursos<br>extras",
 
    /* Giras inclusivas */
    tours_title:  "Giras inclusivas",
    tours_desc:   "Experiencias reales, lugares increíbles y recuerdos que iluminan.",
    tours_btn:    "Ver todas las giras →",
    tour1_name:   "Explora",
    tour1_tag:    "Educativa",
    tour2_name:   "Crea",
    tour2_tag:    "Recreativa",
    tour3_name:   "Descubre",
    tour3_tag:    "Explorativa",
 
    /* Lumen Shop */
    shop_label:   "Lumen Shop",
    shop_title:   "Lumen Shop",
    shop_desc:    "Productos pensados para acompañar el bienestar emocional, sensorial y reforzar conocimientos.",
    shop_btn:     "Ir a la tienda →",
    prod1:        "Spinner<br>Cromado",
    prod2:        "Cubo<br>Antiestres",
    prod3:        "Pop it<br>Arcoiris",
    prod4:        "Pelota<br>Antiestres",
 
    /* Footer */
    footer_copy:    "2026 Lumen. Todos los derechos reservados.",
    footer_access:  "Accesos rápidos",
    footer_contact: "Contáctanos al:",
  },
 
  en: {
    /* Navegación */
    nav_home:    "Home",
    nav_info:    "General information",
    nav_shop:    "Lumen Shop",
    nav_centers: "Centers",
    nav_tours:   "Inclusive tours",
    nav_pros:    "Professionals",
    nav_about:   "About us",
 
    /* Submenú: General information */
    drop_autism:      "What is autism?",
    drop_causes:      "Causes of autism",
    drop_levels:      "Levels of autism",
    drop_signs:       "Warning signs",
    drop_girls:       "Autism in girls...",
    drop_conditions:  "Associated conditions...",
 
    /* Submenú: About us */
    drop_who:         "Who are we?",
    drop_mission:     "Mission and vision",
    drop_contact:     "Contact",
 
    /* Hero */
    hero_title_1:         "A space designed<br>to support you<br>at ",
    hero_title_highlight: "every step",
    hero_desc:            "Lumen accompanies children and young people in their development, providing inclusive tools, activities, and experiences that promote their well-being and autonomy.",
 
    /* Sección principal */
    sections_title:   "What do you find at Lumen?",
    card_juegos:      "Educational<br>games",
    card_actividades: "Social<br>activities",
    card_regulacion:  "Emotional<br>regulation",
    card_recursos:    "Extra<br>resources",
 
    /* Giras inclusivas */
    tours_title:  "Inclusive tours",
    tours_desc:   "Real experiences, incredible places and memories that light the way.",
    tours_btn:    "See all tours →",
    tour1_name:   "Explore",
    tour1_tag:    "Educational",
    tour2_name:   "Create",
    tour2_tag:    "Recreational",
    tour3_name:   "Discover",
    tour3_tag:    "Exploratory",
 
    /* Lumen Shop */
    shop_label:   "Lumen Shop",
    shop_title:   "Lumen Shop",
    shop_desc:    "Products designed to support emotional and sensory well-being and reinforce learning.",
    shop_btn:     "Go to the store →",
    prod1:        "Chrome<br>Spinner",
    prod2:        "Anti-stress<br>Cube",
    prod3:        "Rainbow<br>Pop it",
    prod4:        "Anti-stress<br>Ball",
 
    /* Footer */
    footer_copy:    "2026 Lumen. All rights reserved.",
    footer_access:  "Quick access",
    footer_contact: "Contact us:",
  }
 
};
 
/* =========================================================
   METADATOS DE IDIOMA
   Define bandera, etiqueta visible y atributo lang del HTML
   para cada idioma disponible en el sitio.
========================================================= */
const LANG_META = {
  es: { label: "ES", flagSrc: "https://flagcdn.com/w80/es.png", htmlLang: "es" },
  en: { label: "EN", flagSrc: "https://flagcdn.com/w80/gb.png", htmlLang: "en" },
};
 
//recupera el idioma guardado, si no hay usa español
let currentLang = localStorage.getItem("lumen-lang") || "es";
 
/* =========================================================
   APLICAR TRADUCCIONES
   Recorre todos los elementos con [data-i18n] y reemplaza
   su contenido innerHTML con el texto del idioma activo.
   Se usa innerHTML (no textContent) para permitir <br>.
========================================================= */
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;
 
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
 
  // Actualiza el atributo lang del HTML para accesibilidad y SEO
  document.documentElement.lang = LANG_META[lang].htmlLang;
}
 
/* =========================================================
   CAMBIO DE IDIOMA
   Actualiza la bandera, la etiqueta y aplica las traducciones.
   También marca visualmente la opción seleccionada en el dropdown.
========================================================= */
function switchLanguage(lang) {
  currentLang = lang;

  // Guarda el idioma elegido para recordarlo al recargar
  localStorage.setItem("lumen-lang", lang);
  // Actualiza la imagen de la bandera y el texto del código
  document.getElementById("langLabel").textContent = LANG_META[lang].label;
  document.getElementById("langFlag").src          = LANG_META[lang].flagSrc;
 
  // Resalta la opción activa en el dropdown de idioma
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("selected", opt.dataset.lang === lang);
  });
 
  applyTranslations(lang);
  closeLangDropdown();
}
 
/* =========================================================
   DROPDOWN DE IDIOMA – abrir / cerrar
   Controla la visibilidad del panel de selección de idioma.
========================================================= */
const langBtn      = document.getElementById("langBtn");
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
 
// Abre o cierra al hacer clic en el botón de idioma
langBtn.addEventListener("click", e => {
  e.stopPropagation(); // Evita que el clic llegue al document y lo cierre inmediatamente
  toggleLangDropdown();
});
 
// Cambia el idioma al seleccionar una opción
document.querySelectorAll(".lang-option").forEach(opt => {
  opt.addEventListener("click", () => switchLanguage(opt.dataset.lang));
  // Soporte de teclado: Enter o Espacio activan la opción
  opt.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      switchLanguage(opt.dataset.lang);
    }
  });
});
 
/* =========================================================
   DROPDOWN DE NAVEGACIÓN
   Mapea cada botón (por su data-i18n) con su submenú.
   Al hacer clic, abre el submenú correcto y cierra los demás.
   En móvil y escritorio funciona por clic (no por hover).
========================================================= */
 
// Botones que tienen submenú: su data-i18n como identificador
const NAV_DROPDOWNS = {
  "nav_info":  true,  // Información general
  "nav_about": true   // Sobre nosotros
};
 
/* =========================================================
   CONTROL DE DROPDOWNS DE NAVEGACIÓN
========================================================= */

document.querySelectorAll(".nav-item").forEach(item => {
    const dropdown = item.querySelector(".nav-dropdown");

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

/* =========================================================
   CERRAR DROPDOWNS AL HACER CLIC FUERA
   Cierra tanto el dropdown de idioma como los de navegación
   cuando el usuario hace clic en cualquier parte de la página.
========================================================= */
document.addEventListener("click", () => {
  // Cierra dropdown de idioma
  closeLangDropdown();
  // Cierra dropdowns de navegación
  document.querySelectorAll(".nav-item.open").forEach(i => i.classList.remove("open"));
});
 
/* =========================================================
   SISTEMA DE MODO OSCURO / CLARO
   Cómo funciona completo:
   1. Al cargar: lee localStorage para recuperar la preferencia guardada.
      Si no hay preferencia, detecta el tema del sistema operativo.
   2. La función applyTheme() agrega data-theme="dark" o "light" al <html>.
   3. Las variables CSS del modo oscuro en [data-theme="dark"] se activan.
   4. El ícono del botón cambia: luna (🌙) en claro, sol (☀️) en oscuro.
   5. Al hacer clic en el botón: se alterna el tema y se guarda en localStorage.
   Cómo se adaptan los elementos clave:
   - Navbar: usa var(--bg-navbar) que cambia de blanco a oscuro
   - Tarjetas: usan var(--bg-card) para fondo adaptable
   - Hero overlay: selector [data-theme="dark"] .hero::before oscurece el fondo
   - Dropdowns: usan var(--bg-card) y var(--border-card)
========================================================= */
 
const themeBtn  = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
 
// Íconos según el tema activo
const THEME_ICONS = {
  light: "🌙", // En modo claro se muestra luna (para ir a oscuro)
  dark:  "☀️"  // En modo oscuro se muestra sol (para ir a claro)
};
 
/* =========================================================
   INICIALIZACIÓN DEL TEMA
   Recupera el tema guardado en localStorage.
   Si no existe, detecta la preferencia del sistema operativo.
========================================================= */
function getInitialTheme() {
  const guardado = localStorage.getItem("lumen-theme");
  if (guardado) return guardado; // Usa el tema que el usuario eligió antes
 
  // Si no hay preferencia guardada, usa la del sistema operativo
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
 
/* =========================================================
   APLICAR TEMA
   Modifica el atributo data-theme del <html>.
   Esto activa automáticamente las variables CSS del modo oscuro.
   También actualiza el ícono del botón y guarda en localStorage.
========================================================= */
function applyTheme(theme) {
  // Aplica el atributo al <html>: activa los estilos CSS del tema
  document.documentElement.setAttribute("data-theme", theme);
 
  // Actualiza el ícono del botón según el tema activo
  themeIcon.textContent = THEME_ICONS[theme];
 
  // Guarda la preferencia para recordarla al recargar la página
  localStorage.setItem("lumen-theme", theme);
}
 
/* =========================================================
   EVENTO DEL BOTÓN DE TEMA
   Alterna entre modo claro y oscuro al hacer clic.
   Lee el tema actual del atributo data-theme del <html>
   y aplica el opuesto.
========================================================= */
themeBtn.addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(temaActual === "light" ? "dark" : "light");
});
 
/* =========================================================
   INICIALIZACIÓN GENERAL
   Se ejecuta al cargar la página:
   1. Aplica el tema guardado o detectado del sistema
   2. Aplica las traducciones del idioma por defecto
========================================================= */
applyTheme(getInitialTheme());
switchLanguage(currentLang);