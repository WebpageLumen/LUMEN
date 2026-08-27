/* =========================================================
   NAVBAR.JS – LUMEN
   Contiene: sistema de traducciones (ES/EN) y el
   comportamiento de los dropdowns del navbar.

   NOTA IMPORTANTE:
   El objeto TRANSLATIONS de aquí abajo está recortado para
   incluir SOLO las claves que usa el navbar (nav_*, drop_*)
   más las claves del footer (footer_*), ya que footer.html
   también usa data-i18n y depende de este mismo sistema
   (applyTranslations/switchLanguage). Si vas a usar el
   navbar SIN el footer, puedes borrar las claves footer_*.
   Si tu página tiene más textos con data-i18n (hero, cards,
   etc.), agrégalos aquí o ese texto no se traducirá.
========================================================= */
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

    footer_copy:      "2026 Lumen. Todos los derechos reservados.",
    footer_access:    "Accesos rápidos",
    footer_community: "¡Visita nuestra comunidad!",
    footer_contact:   "Contáctanos",
    footer_email_label: "Correo electrónico:",

    games_hero_title:   "Juegos educativos",
    games_hero_tagline: "Aquí encontrarás juegos que te ayudarán en diferentes áreas, organizados en varias categorías para que disfrutes aprendiendo y explorando a tu ritmo.",

    games_calm_label: "Modo calma",
    games_ver_menos:  "Ver menos",
    games_ver_todo:   "Ver todo",

    games_cat_atencion:     "Atención",
    games_cat_logica:       "Lógica",
    games_cat_lenguaje:     "Lenguaje",
    games_cat_coordinacion: "Coordinación",

    games_card_dif_title:    "Encuentra las diferencias",
    games_card_dif_desc:     "¿Qué cambió?",
    games_card_memo_title:   "Memorama",
    games_card_memo_desc:    "Encuentra los pares",
    games_card_recall_title: "Recuerda",
    games_card_recall_desc:  "Memoriza y repite",
    games_card_point_title:  "Señala",
    games_card_point_desc:   "Toca lo que se pide",

    games_card_patterns_title: "Patrones",
    games_card_patterns_desc:  "¿Qué sigue?",
    games_card_fit_title:      "Encajar",
    games_card_fit_desc:       "Completa el puzzle",
    games_card_sort_title:     "Ordenar",
    games_card_sort_desc:      "De menor a mayor",
    games_card_discover_title: "Descubre",
    games_card_discover_desc:  "Resuelve el misterio",

    games_card_match_title:    "Pareo",
    games_card_match_desc:     "Une lo que va junto",
    games_card_describe_title: "Describir",
    games_card_describe_desc:  "¿Qué ves?",
    games_card_organize_title: "Organizar",
    games_card_organize_desc:  "Pon en orden la historia",
    games_card_letters_title:  "Letras",
    games_card_letters_desc:   "Forma palabras",

    games_card_drag_title:   "Arrastra y suelta",
    games_card_drag_desc:    "Mueve al lugar correcto",
    games_card_trace_title:  "Traza el camino",
    games_card_trace_desc:   "Sigue la ruta",
    games_card_choose_title: "Elige lo correcto",
    games_card_choose_desc:  "Selecciona la respuesta",
    games_card_tap_title:    "Pulsa",
    games_card_tap_desc:     "Toca en el momento justo",
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

    footer_copy:      "2026 Lumen. All rights reserved.",
    footer_access:    "Quick access",
    footer_community: "Visit our community!",
    footer_contact:   "Contact us",
    footer_email_label: "Email:",

    games_hero_title:   "Educational games",
    games_hero_tagline: "Here you'll find games that will help you in different areas, organized into several categories so you can enjoy learning and exploring at your own pace.",

    games_calm_label: "Calm mode",
    games_ver_menos:  "See less",
    games_ver_todo:   "See all",

    games_cat_atencion:     "Attention",
    games_cat_logica:       "Logic",
    games_cat_lenguaje:     "Language",
    games_cat_coordinacion: "Coordination",

    games_card_dif_title:    "Find the differences",
    games_card_dif_desc:     "What changed?",
    games_card_memo_title:   "Memory",
    games_card_memo_desc:    "Find the pairs",
    games_card_recall_title: "Remember",
    games_card_recall_desc:  "Memorize and repeat",
    games_card_point_title:  "Point",
    games_card_point_desc:   "Touch what's asked",

    games_card_patterns_title: "Patterns",
    games_card_patterns_desc:  "What comes next?",
    games_card_fit_title:      "Fit together",
    games_card_fit_desc:       "Complete the puzzle",
    games_card_sort_title:     "Sort",
    games_card_sort_desc:      "From smallest to largest",
    games_card_discover_title: "Discover",
    games_card_discover_desc:  "Solve the mystery",

    games_card_match_title:    "Matching",
    games_card_match_desc:     "Join what goes together",
    games_card_describe_title: "Describe",
    games_card_describe_desc:  "What do you see?",
    games_card_organize_title: "Organize",
    games_card_organize_desc:  "Put the story in order",
    games_card_letters_title:  "Letters",
    games_card_letters_desc:   "Form words",

    games_card_drag_title:   "Drag and drop",
    games_card_drag_desc:    "Move to the right place",
    games_card_trace_title:  "Trace the path",
    games_card_trace_desc:   "Follow the route",
    games_card_choose_title: "Choose the right one",
    games_card_choose_desc:  "Select the answer",
    games_card_tap_title:    "Tap",
    games_card_tap_desc:     "Touch at the right moment",
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
   Recorre TODO el documento buscando [data-i18n], por eso
   funciona igual para navbar y footer si ambos están
   presentes en la misma página.
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
   TEXTO DEL BOTÓN "VER MENOS" / "VER TODO"
   Se define acá (y consulta el DOM directamente en vez de
   depender de las const declaradas más abajo) porque
   switchLanguage() se ejecuta durante la inicialización,
   antes de que existan esas const.
========================================================= */
function updateVerMenosText() {
  const dict = TRANSLATIONS[currentLang];
  const btn = document.getElementById("verMenosBtn");
  if (!btn) return;
  const textSpan = btn.querySelector(".ver-menos-text");
  if (!textSpan) return;
  const gamesPageEl = document.getElementById("gamesPage");
  const compacta = gamesPageEl && gamesPageEl.classList.contains("vista-compacta");
  textSpan.textContent = compacta ? dict.games_ver_todo : dict.games_ver_menos;
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
  updateVerMenosText();
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
   CERRAR DROPDOWNS AL HACER CLIC FUERA
========================================================= */
document.addEventListener("click", () => {
  closeLangDropdown();
  document.querySelectorAll(".nav-item.open").forEach(i => i.classList.remove("open"));
});

/* =========================================================
   DROPDOWN DE NAVEGACIÓN (Información general / Sobre nosotros)
   NOTA: en script2.js original hay DOS bloques que hacen algo
   parecido: uno agrega/quita la clase "open" al .nav-item, y
   otro agrega/quita la clase "show" al .nav-dropdown. Ambos
   quedaron en el archivo original (parece código duplicado/
   remanente de una iteración anterior). Se conservan tal cual
   para que el comportamiento visual sea IDÉNTICO al original.
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

// Delay para todos los dropdowns del navbar (clase "show")
document.querySelectorAll('.nav-item').forEach(item => {
  const dropdown = item.querySelector('.nav-dropdown');
  if (!dropdown) return;

  let hideTimeout;

  item.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dropdown.classList.add('show');
  });

  item.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      dropdown.classList.remove('show');
    }, 350); // mismo tiempo que el delay del CSS
  });
});

/* =========================================================
   ALTO REAL DE LA NAVBAR (fixed) → separación con el Hero
   La navbar es position:fixed, por eso el contenido de abajo
   necesita un padding-top igual a su alto real; si no, el Hero
   queda tapado. Esto se recalcula en resize porque en pantallas
   angostas los links de la navbar pueden pasar a una segunda
   línea y cambiar su altura.
========================================================= */
function setNavbarHeightVar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  document.documentElement.style.setProperty("--navbar-h", nav.offsetHeight + "px");
}

setNavbarHeightVar();
window.addEventListener("resize", setNavbarHeightVar);
window.addEventListener("load", setNavbarHeightVar);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(setNavbarHeightVar);
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */
switchLanguage(currentLang);

/* ══════════════════════════════════════════════════════════════
   LUMEN · JUEGOS EDUCATIVOS — LÓGICA
═══════════════════════════════════════════════════════════════ */

const calmSwitch    = document.getElementById("calmSwitch");
const verMenosBtn   = document.getElementById("verMenosBtn");
const gamesPage      = document.getElementById("gamesPage");
const categoriaTabs  = document.querySelectorAll(".categoria-tab");
const categorias     = document.querySelectorAll(".categoria");

/* ---------------------------------------------------------------
   Modo calma: solo agrega/quita la clase "modo-calma" en <body>.
   Es puramente visual (colores/saturación): no toca estructura,
   tamaños, espaciado ni la navegación. Todo el comportamiento
   visual vive en styles.css.
--------------------------------------------------------------- */
calmSwitch.addEventListener("change", () => {
  document.body.classList.toggle("modo-calma", calmSwitch.checked);
});

/* ---------------------------------------------------------------
   Activa una categoría: muestra su sección y resalta su pestaña.
   Se usa tanto al entrar en vista compacta como al cambiar de
   pestaña dentro de ella.
--------------------------------------------------------------- */
function activarCategoria(cat) {
  categorias.forEach((sec) => {
    sec.classList.toggle("activa", sec.dataset.cat === cat);
  });
  categoriaTabs.forEach((tab) => {
    tab.classList.toggle("activa", tab.dataset.cat === cat);
  });
}

categoriaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activarCategoria(tab.dataset.cat);

    // En modo normal todas las categorías están visibles, así que
    // el clic navega (scroll) hasta la categoría elegida. En vista
    // compacta esto no hace falta: el filtrado por CSS ya deja esa
    // categoría a la vista.
    if (!gamesPage.classList.contains("vista-compacta")) {
      const destino = document.querySelector(`.categoria[data-cat="${tab.dataset.cat}"]`);
      if (destino) destino.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ---------------------------------------------------------------
   CONEXIÓN: NAVEGACIÓN EXISTENTE ("Ver menos")
   Esta función controla el cambio a la vista compacta: agrega/quita
   "vista-compacta" en #gamesPage, lo que hace que styles.css muestre
   las pestañas de categoría y oculte todas las categorías salvo la
   activa. Cuando integres tu navegación real, podés reemplazar el
   manejo de pestañas de arriba (activarCategoria / listeners de
   categoriaTabs) por tu propio sistema, sin tocar el resto de la
   estructura de la página.
--------------------------------------------------------------- */
function toggleSectionNavigation() {
  const activando = !gamesPage.classList.contains("vista-compacta");
  gamesPage.classList.toggle("vista-compacta", activando);

  if (activando) {
    // Si ninguna categoría está activa todavía, activa la primera
    const yaActiva = document.querySelector(".categoria.activa");
    if (!yaActiva && categorias.length) {
      activarCategoria(categorias[0].dataset.cat);
    }
  }

  updateVerMenosText();
}

verMenosBtn.addEventListener("click", () => {
  toggleSectionNavigation();
});
