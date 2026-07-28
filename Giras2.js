/* =========================================================
   Giras2.js
   Sistema de idiomas (ES / EN) para la página de Giras.
   - Traduce todo texto marcado con data-i18n / data-i18n-html
   - Traduce atributos alt marcados con data-i18n-alt
   - Cambia la IMAGEN COMPLETA del hero según el idioma
     (busca en IMG_SRC["hero"][lang])
   - Guarda el idioma elegido en localStorage
========================================================= */

/* -----------------------------------------------------
   1) RUTAS DE IMÁGENES QUE CAMBIAN POR IDIOMA
   Agrega aquí cualquier otra imagen que también tenga
   texto incrustado y deba cambiar con el idioma.
------------------------------------------------------ */
const IMG_SRC = {
  hero: {
    es: "Imagenes/EncabezadoG2.png",
    en: "Imagenes/EncabezadoG2-EN.png" // <-- crea esta imagen (mismo tamaño, texto en inglés)
  }
};

/* -----------------------------------------------------
   2) DICCIONARIO DE TEXTOS
------------------------------------------------------ */
const translations = {
  // NAV
  nav_home:        { es: "Inicio", en: "Home" },
  nav_info:         { es: "Información general", en: "General Information" },
  drop_autism:      { es: "¿Qué es el autismo?", en: "What is autism?" },
  drop_causes:      { es: "Causas del autismo", en: "Causes of autism" },
  drop_levels:      { es: "Niveles de autismo", en: "Levels of autism" },
  drop_signs:       { es: "Señales de alerta", en: "Warning signs" },
  drop_girls:       { es: "Autismo en niñas y...", en: "Autism in girls and..." },
  drop_conditions:  { es: "Condiciones asociadas...", en: "Associated conditions..." },
  nav_shop:         { es: "Lumen Shop", en: "Lumen Shop" },
  nav_centers:      { es: "Centros", en: "Centers" },
  nav_tours:        { es: "Giras inclusivas", en: "Inclusive Tours" },
  nav_pros:         { es: "Profesionales", en: "Professionals" },
  nav_about:        { es: "Sobre nosotros", en: "About us" },
  drop_who:         { es: "¿Quiénes somos?", en: "Who we are" },
  drop_mission:     { es: "Misión y visión", en: "Mission and vision" },
  drop_contact:     { es: "Contacto", en: "Contact" },

  // FOOTER
  footer_copy:      { es: "2026 Lumen. Todos los derechos reservados.", en: "2026 Lumen. All rights reserved." },
  footer_access:    { es: "Accesos rápidos", en: "Quick links" },
  footer_contact:   { es: "Contáctanos al:", en: "Contact us at:" },

  // HERO
  hero_alt:          { es: "Conoce más sobre nuestras giras inclusivas", en: "Learn more about our inclusive tours" },
  hero_back_aria:    { es: "Volver a giras Inclusivas", en: "Back to Inclusive Tours" },

  // INFO SECTION
  info_title:        { es: "Información importante", en: "Important information" },
  info_before_title: { es: "Antes de la actividad", en: "Before the activity" },
  info_before_text:  {
    es: "Las familias recibirán un documento con toda la información necesaria para participar en la gira, incluyendo el itinerario, los horarios, el punto de encuentro y recomendaciones para que la experiencia sea segura y organizada.",
    en: "Families will receive a document with all the information needed to take part in the tour, including the itinerary, schedule, meeting point, and recommendations to make the experience safe and well organized."
  },
  info_after_title:  { es: "Después de confirmar la participación", en: "After confirming participation" },
  info_after_text:   {
    es: "Una vez confirmada la participación, las familias podrán seleccionar el refrigerio entre varias opciones disponibles. Esto nos permite adaptarnos a las preferencias y necesidades de cada participante, considerando posibles sensibilidades relacionadas con alimentos, texturas o sabores.",
    en: "Once participation is confirmed, families will be able to choose a snack from several available options. This allows us to adapt to each participant's preferences and needs, taking into account possible sensitivities related to food, textures, or flavors."
  },

  // GIRAS EDUCATIVAS
  sec_educativas_title: { es: "Giras Educativas", en: "Educational Tours" },
  sec_educativas_note:  {
    es: 'Las actividades educativas <b>NO</b> incluyen transporte, por lo que los participantes deberán trasladarse por sus propios medios al lugar indicado.',
    en: 'Educational activities <b>DO NOT</b> include transportation, so participants must make their own way to the indicated location.'
  },
  biomuseo_alt:   { es: "Biomuseo, Panamá", en: "Biomuseo, Panama" },
  biomuseo_title: { es: "Biomuseo", en: "Biomuseo" },
  biomuseo_desc:  {
    es: "Explora de forma divertida cómo Panamá se convirtió en un puente para la vida en el planeta. Los participantes recorrerán exhibiciones interactivas sobre biodiversidad, animales y naturaleza, fomentando la curiosidad y el aprendizaje en un entorno educativo y seguro.",
    en: "Discover in a fun way how Panama became a bridge for life on the planet. Participants will explore interactive exhibits about biodiversity, animals, and nature, encouraging curiosity and learning in a safe, educational environment."
  },
  biomuseo_price: { es: "Precio: B/. 25 por persona (incluye la participación del niño, un acompañante responsable y un refrigerio pequeño)", en: "Price: B/. 25 per person (includes the child's participation, one responsible companion, and a small snack)" },
  biomuseo_age:   { es: "👤 +7 años", en: "👤 +7 yrs" },

  biomuseo2_alt:   { es: "Explora Centro de Ciencias y Arte", en: "Explora Science and Art Center" },
  biomuseo2_title: { es: "Explora Centro de Ciencias y Arte", en: "Explora Science and Art Center" },
  biomuseo2_desc:  {
    es: "Descubre la ciencia de forma divertida mediante exhibiciones interactivas, experimentos y actividades que despiertan la curiosidad, la creatividad y el aprendizaje a través del juego.",
    en: "Discover science in a fun way through interactive exhibits, experiments, and activities that spark curiosity, creativity, and learning through play."
  },
  biomuseo2_price: { es: "Precio: B/. 15 por participante (incluye la participación del niño y un acompañante responsable)", en: "Price: B/. 15 per participant (includes the child's participation and one responsible companion)" },
  biomuseo2_age:   { es: "👤 6-18 años", en: "👤 6-18 yrs" },

  biomuseo3_alt:   { es: "Museo del Canal de Panamá", en: "Panama Canal Museum" },
  biomuseo3_title: { es: "Museo del Canal de Panamá", en: "Panama Canal Museum" },
  biomuseo3_desc:  {
    es: "Conoce la fascinante historia de la construcción del Canal de Panamá a través de exhibiciones interactivas, objetos históricos y experiencias educativas que permiten descubrir uno de los mayores logros de la ingeniería mundial.",
    en: "Learn the fascinating history of the construction of the Panama Canal through interactive exhibits, historical objects, and educational experiences that reveal one of the greatest achievements in world engineering."
  },
  biomuseo3_price: { es: "Precio: B/. 25 por participante (incluye la participación del niño y un acompañante responsable)", en: "Price: B/. 25 per participant (includes the child's participation and one responsible companion)" },
  biomuseo3_age:   { es: "👤 8-18 años", en: "👤 8-18 yrs" },

  // GIRAS RECREATIVAS
  sec_recreativas_title: { es: "Giras Recreativas", en: "Recreational Tours" },
  sec_recreativas_note:  {
    es: 'Las actividades recreativas <b>NO</b> incluyen transporte, por lo que los participantes deberán trasladarse por sus propios medios al lugar indicado.',
    en: 'Recreational activities <b>DO NOT</b> include transportation, so participants must make their own way to the indicated location.'
  },
  btesoro_alt:   { es: "Búsqueda del tesoro en el parque", en: "Treasure hunt in the park" },
  btesoro_title: { es: "Búsqueda del Tesoro", en: "Treasure Hunt" },
  btesoro_desc:  {
    es: "Los participantes deberán seguir pistas, resolver pequeños desafíos y encontrar diferentes elementos escondidos dentro del parque. La actividad fomenta la observación, la atención, el trabajo en equipo y la resolución de problemas de una forma divertida y dinámica.",
    en: "Participants will follow clues, solve small challenges, and find different items hidden within the park. The activity encourages observation, attention, teamwork, and problem-solving in a fun and dynamic way."
  },
  btesoro_price: { es: "B/.10 por participante (incluye al niño y un acompañante responsable)", en: "B/.10 per participant (includes the child and one responsible companion)" },
  btesoro_age:   { es: "👤 8-12 años", en: "👤 8-12 yrs" },

  btesoro2_alt:   { es: "Niños haciendo arte al aire libre", en: "Children doing outdoor art" },
  btesoro2_title: { es: "Arte al Aire Libre", en: "Outdoor Art" },
  btesoro2_desc:  {
    es: "Una experiencia creativa en la que cada participante elaborará una obra utilizando diferentes materiales artísticos. Al finalizar, cada niño tendrá la oportunidad de presentar su creación con el apoyo de su acompañante, fortaleciendo la expresión personal y la comunicación.",
    en: "A creative experience where each participant will create a piece using different art materials. At the end, each child will have the chance to present their creation with the support of their companion, strengthening personal expression and communication."
  },
  btesoro2_price: { es: "B/.15 por participante (incluye al niño y un acompañante responsable)", en: "B/.15 per participant (includes the child and one responsible companion)" },
  btesoro2_age:   { es: "👤 6-15 años", en: "👤 6-15 yrs" },

  btesoro3_alt:   { es: "Circuito de juegos y desafíos", en: "Games and challenges circuit" },
  btesoro3_title: { es: "Circuito de Juegos y Desafíos", en: "Games and Challenges Circuit" },
  btesoro3_desc:  {
    es: "Los participantes recorrerán distintas estaciones con actividades recreativas y cooperativas adaptadas a diferentes niveles. Cada desafío promoverá la participación, el movimiento y la colaboración en un ambiente seguro y divertido.",
    en: "Participants will move through different stations with recreational, cooperative activities adapted to different levels. Each challenge will encourage participation, movement, and collaboration in a safe and fun environment."
  },
  btesoro3_price: { es: "B/.10 por participante (incluye al niño y un acompañante responsable)", en: "B/.10 per participant (includes the child and one responsible companion)" },
  btesoro3_age:   { es: "👤 6-14 años", en: "👤 6-14 yrs" },

  // GIRAS EXPLORATORIAS
  sec_exploratorias_title: { es: "Giras Exploratorias", en: "Exploratory Tours" },
  sec_exploratorias_note:  {
    es: 'Las actividades exploratorias <b>incluyen</b> transporte de ida y regreso. Los detalles relacionados con los horarios de salida, puntos de encuentro y regreso serán especificados en el itinerario enviado previamente.',
    en: 'Exploratory activities <b>include</b> round-trip transportation. Details regarding departure times, meeting points, and return will be specified in the itinerary sent beforehand.'
  },
  sboquete_alt:   { es: "Sendero en Boquete", en: "Trail in Boquete" },
  sboquete_title: { es: "Sendero en Boquete", en: "Boquete Trail" },
  sboquete_desc:  {
    es: "Los participantes recorrerán distintas estaciones con actividades recreativas y cooperativas adaptadas a diferentes niveles. Cada desafío promoverá la participación, el movimiento y la colaboración en un ambiente seguro y divertido.",
    en: "Participants will move through different stations with recreational, cooperative activities adapted to different levels. Each challenge will encourage participation, movement, and collaboration in a safe and fun environment."
  },
  sboquete_price: { es: "B/.50 por participante (incluye al niño y un acompañante responsable)", en: "B/.50 per participant (includes the child and one responsible companion)" },
  sboquete_age:   { es: "👤 7-15 años", en: "👤 7-15 yrs" },

  sboquete2_alt:   { es: "Parque Municipal Summit", en: "Summit Municipal Park" },
  sboquete2_title: { es: "Exploración en el Parque Municipal Summit", en: "Exploring Summit Municipal Park" },
  sboquete2_desc:  {
    es: "Una jornada para recorrer el parque, observar diferentes animales y disfrutar de espacios naturales en compañía de otros participantes y sus familias. Una oportunidad para descubrir nuevas especies y pasar tiempo en un entorno diferente.",
    en: "A day to explore the park, observe different animals, and enjoy natural spaces together with other participants and their families. A chance to discover new species and spend time in a different environment."
  },
  sboquete2_price: { es: "B/.45 por participante (incluye al niño y un acompañante responsable)", en: "B/.45 per participant (includes the child and one responsible companion)" },
  sboquete2_age:   { es: "👤 7-15 años", en: "👤 7-15 yrs" },

  sboquete3_alt:   { es: "Jardín Botánico", en: "Botanical Garden" },
  sboquete3_title: { es: "Recorrido por un Jardín Botánico", en: "Botanical Garden Tour" },
  sboquete3_desc:  {
    es: "Un paseo entre jardines y senderos donde los participantes podrán observar una gran variedad de flores, árboles y plantas mientras disfrutan de un ambiente tranquilo y lleno de colores, aromas y formas diferentes.",
    en: "A walk through gardens and trails where participants can observe a wide variety of flowers, trees, and plants while enjoying a calm setting full of different colors, scents, and shapes."
  },
  sboquete3_price: { es: "B/.35 por participante (incluye al niño y un acompañante responsable)", en: "B/.35 per participant (includes the child and one responsible companion)" },
  sboquete3_age:   { es: "👤 7-15 años", en: "👤 7-15 yrs" },

  closing_l1:  { es: "Nuestro objetivo es brindar experiencias educativas,", en: "Our goal is to provide educational," },
  closing_l2:  { es: "recreativas y exploratorias", en: "recreational and exploratory experiences" },
  closing_mid: { es: "en un", en: "in a" },
  closing_l3:  { es: "entorno cómodo, seguro y agradable para todos", en: "comfortable, safe and pleasant environment for everyone" }
};

/* -----------------------------------------------------
   3) LÓGICA DE APLICACIÓN DEL IDIOMA
------------------------------------------------------ */
function applyLanguage(lang) {
  // Textos normales (textContent)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang] !== undefined) {
      el.textContent = translations[key][lang];
    }
  });

  // Textos que contienen HTML (ej. <b>) -> innerHTML
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[key] && translations[key][lang] !== undefined) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Atributos alt
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if (translations[key] && translations[key][lang] !== undefined) {
      el.setAttribute("alt", translations[key][lang]);
    }
  });

  // Atributos aria-label
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (translations[key] && translations[key][lang] !== undefined) {
      el.setAttribute("aria-label", translations[key][lang]);
    }
  });

  // Imagen del hero (y cualquier otra imagen marcada con data-i18n-img)
  document.querySelectorAll("[data-i18n-img]").forEach(img => {
    const key = img.getAttribute("data-i18n-img");
    const srcSet = IMG_SRC[key];
    if (srcSet && srcSet[lang]) {
      // pequeño fundido para que el cambio de imagen no se sienta brusco
      img.classList.add("fade");
      setTimeout(() => {
        img.src = srcSet[lang];
        img.classList.remove("fade");
      }, 150);
    }
  });

  // Actualiza <html lang="">
  document.documentElement.setAttribute("lang", lang);

  // Guarda preferencia
  localStorage.setItem("lumen_lang", lang);
}

/* -----------------------------------------------------
   4) UI DEL SELECTOR DE IDIOMA (bandera + ES/EN)
------------------------------------------------------ */
function updateLangSwitcherUI(lang) {
  const langLabel = document.getElementById("langLabel");
  const langFlag  = document.getElementById("langFlag");
  const options   = document.querySelectorAll(".lang-option");

  const flags = {
    es: "https://flagcdn.com/w80/es.png",
    en: "https://flagcdn.com/w80/gb.png"
  };

  if (langLabel) langLabel.textContent = lang.toUpperCase();
  if (langFlag)  langFlag.src = flags[lang];

  options.forEach(opt => {
    opt.classList.toggle("selected", opt.getAttribute("data-lang") === lang);
  });
}

function setLanguage(lang) {
  applyLanguage(lang);
  updateLangSwitcherUI(lang);
}

/* -----------------------------------------------------
   5) INICIALIZACIÓN + EVENTOS
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const langBtn      = document.getElementById("langBtn");
  const langDropdown  = document.getElementById("langDropdown");
  const langWrapper   = document.getElementById("langWrapper");

  // Idioma guardado o español por defecto
  const savedLang = localStorage.getItem("lumen_lang") || "es";
  setLanguage(savedLang);

  // Abrir/cerrar el dropdown de idioma
  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (langWrapper && !langWrapper.contains(e.target)) {
        langDropdown.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Seleccionar idioma (clic o teclado)
  document.querySelectorAll(".lang-option").forEach(option => {
    const chooseLang = () => {
      const lang = option.getAttribute("data-lang");
      setLanguage(lang);
      langDropdown.classList.remove("open");
      langBtn.setAttribute("aria-expanded", "false");
    };

    option.addEventListener("click", chooseLang);
    option.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        chooseLang();
      }
    });
  });
});