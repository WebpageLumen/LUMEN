(function() {
  // =========================================================
  //   1. LÓGICA DE NAVEGACIÓN DE TARJETAS
  // =========================================================

  const ACTIVITY_DESTINATIONS = {
    'historias-sociales': 'historias.html', // Asegúrate de que este sea el archivo correcto
    'expresiones-faciales': 'Proyecto web lumen/Final.html',
    'mas-alla-palabras': 'mas-alla-palabras.html',
    'juego-turnos': 'juego-turnos.html'
  };

  function initializeActivityCards() {
    const activityCards = document.querySelectorAll('.actividad-card[data-activity]');
    activityCards.forEach(card => {
      // Evitar duplicar event listeners
      if (card.dataset.initialized) return;
      
      card.addEventListener('click', function(event) {
        const activityId = this.dataset.activity;
        const destination = ACTIVITY_DESTINATIONS[activityId];
        
        // Efecto visual de click
        this.classList.add('card-clicked');
        setTimeout(() => this.classList.remove('card-clicked'), 200);
        
        // Redirección
        if (destination) {
          window.location.href = destination;
        }
      });
      
      card.dataset.initialized = 'true';
    });
  }

  // Ejecutar inmediatamente y también en DOMContentLoaded por seguridad
  initializeActivityCards();
  document.addEventListener('DOMContentLoaded', initializeActivityCards);

  // =========================================================
  //   2. SISTEMA DE IDIOMAS
  // =========================================================

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

      act_title: "Actividades sociales",
      act_desc: "En esta pantalla encontrarás actividades diseñadas para fortalecer tus habilidades sociales y mejorar la forma en que te comunicas y conectas con otras personas.",
      act_card1: "Historias sociales",
      act_card2: "Reconocer expresiones faciales",
      act_card3: "Más allá de las palabras",
      act_card4: "Juego de turnos",
      
      act_ben_title: "¿Qué beneficios tiene practicar habilidades sociales?",
      act_ben1: "Mejora la comunicación: ayuda a expresar ideas y sentimientos de forma clara y a entender mejor a los demás.",
      act_ben2: "Fortalece las relaciones: facilita hacer y mantener amistades y vínculos más sanos.",
      act_ben3: "Aumenta la confianza: mejora la seguridad personal al interactuar con otras personas.",
      act_ben4: "Reduce conflictos: enseña a resolver problemas y desacuerdos de manera pacífica.",
      act_msg_final: "Lumen te apoya y te<br>acompaña en cada paso.",

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

      act_title: "Social activities",
      act_desc: "On this screen you will find activities designed to strengthen your social skills and improve the way you communicate and connect with other people.",
      act_card1: "Social stories",
      act_card2: "Recognize facial expressions",
      act_card3: "Beyond words",
      act_card4: "Turn taking game",
      
      act_ben_title: "What are the benefits of practicing social skills?",
      act_ben1: "Improves communication: helps express ideas and feelings clearly and understand others better.",
      act_ben2: "Strengthens relationships: makes it easier to make and maintain friendships and healthier bonds.",
      act_ben3: "Increases confidence: improves personal security when interacting with other people.",
      act_ben4: "Reduces conflicts: teaches how to solve problems and disagreements peacefully.",
      act_msg_final: "Lumen supports you and<br>accompanies you every step of the way.",

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
    const langLabel = document.getElementById("langLabel");
    const langFlag = document.getElementById("langFlag");
    if (langLabel) langLabel.textContent = LANG_META[lang].label;
    if (langFlag) langFlag.src = LANG_META[lang].flagSrc;

    document.querySelectorAll(".lang-option").forEach(opt => {
      opt.classList.toggle("selected", opt.dataset.lang === lang);
    });
    applyTranslations(lang);
    closeLangDropdown();
  }

  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");

  function closeLangDropdown() {
    if (langDropdown) langDropdown.classList.remove("open");
    if (langBtn) langBtn.setAttribute("aria-expanded", "false");
  }

  if (langBtn) {
    langBtn.addEventListener("click", e => {
      e.stopPropagation();
      if (langDropdown.classList.contains("open")) {
        closeLangDropdown();
      } else {
        langDropdown.classList.add("open");
        langBtn.setAttribute("aria-expanded", "true");
      }
    });
  }

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.addEventListener("click", () => switchLanguage(opt.dataset.lang));
  });

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
      }, 350);
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest('.lang-wrapper') && !e.target.closest('.nav-item')) {
      closeLangDropdown();
      document.querySelectorAll(".nav-dropdown.show").forEach(d => d.classList.remove("show"));
    }
  });

  // =========================================================
  //   3. SISTEMA DE IMÁGENES POR IDIOMA
  // =========================================================
  const IMAGES_EN = {
    // Agrega aquí las imágenes de actividades traducidas si las tienes
    // Ejemplo: 'Imagenes/niñoos.png': 'Imagenes/en/niñoos.png',
    'Imagenes/numa2.0.png': 'Imagenes/en/numa2.0.png'
  };

  function applyImageTranslations(lang) {
    document.querySelectorAll('img').forEach(img => {
      // Excluir logos y banderas
      if (img.classList.contains('logo-img') || 
          img.classList.contains('footer-logo-img') || 
          img.classList.contains('flag') ||
          img.id === 'langFlag') {
        return; 
      }
      
      if (!img.dataset.defaultSrc) {
        img.dataset.defaultSrc = img.getAttribute('src');
      }
      
      const defaultSrc = img.dataset.defaultSrc;
      
      if (lang === 'en' && IMAGES_EN[defaultSrc]) {
        img.setAttribute('src', IMAGES_EN[defaultSrc]);
      } else {
        img.setAttribute('src', defaultSrc);
      }
    });
  }

  // =========================================================
  //   4. SISTEMA DE TEMA (MODO CALMA)
  // =========================================================

  const themeBtn = document.getElementById("themeBtn");
  const themeIcon = document.getElementById("themeIcon");

  const THEME_ICONS = { normal: "☀️", calm: "🌙" };
  const THEME_LABELS = { normal: "Modo calma", calm: "Modo normal" };

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) themeIcon.textContent = THEME_ICONS[theme];

    const labelEl = document.getElementById("themeLabel");
    if (labelEl) labelEl.textContent = THEME_LABELS[theme];

    if (themeBtn) {
      themeBtn.setAttribute(
        "aria-label",
        theme === "normal" ? "Activar modo calma" : "Volver al modo normal"
      );
    }

    localStorage.setItem("lumen-theme", theme);
  }

  function getInitialTheme() {
    return localStorage.getItem("lumen-theme") || "normal";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const temaActual = document.documentElement.getAttribute("data-theme") || "normal";
      applyTheme(temaActual === "normal" ? "calm" : "normal");
    });
  }

  // =========================================================
  //   5. INICIALIZACIÓN AL CARGAR LA PÁGINA
  // =========================================================
  
  applyTheme(getInitialTheme());
  applyTranslations(currentLang);
  applyImageTranslations(currentLang); // <- Se agregó esta línea
  
  if (document.getElementById("langLabel")) {
    document.getElementById("langLabel").textContent = LANG_META[currentLang].label;
    document.getElementById("langFlag").src = LANG_META[currentLang].flagSrc;
  }
  
  // Seleccionar la opción correcta en el dropdown de idioma al cargar
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("selected", opt.dataset.lang === currentLang);
  });

})();