/* =========================================================
   TRADUCCIONES Y SISTEMA DE IDIOMA (SITIO)
========================================================= */
const TRANSLATIONS = {
  es: {
    nav_home: "Inicio", nav_info: "Información general", nav_shop: "Lumen Shop",
    nav_centers: "Centros", nav_tours: "Giras inclusivas", nav_pros: "Profesionales", nav_about: "Sobre nosotros",
    drop_autism: "¿Qué es el autismo?", drop_causes: "Causas del autismo", drop_levels: "Niveles de autismo",
    drop_signs: "Señales de alerta", drop_girls: "Autismo en niñas y...", drop_conditions: "Condiciones asociadas...",
    drop_who: "¿Quiénes somos?", drop_mission: "Misión y visión", drop_contact: "Contacto",
    footer_copy: "2026 Lumen. Todos los derechos reservados.", footer_access: "Accesos rápidos",
    footer_community: "¡Visita nuestra comunidad!", footer_contact: "Contáctanos", footer_email_label: "Correo electrónico:",
    game_title: "Lenguaje Figurado",
    game_scene1: "Juan escucha un chiste.",
    game_scene2: "Alguien dice: ¡Me muero de risa!",
    game_scene2_short: "¡Me muero de risa!",
    game_scene3: "Juan se preocupa.",
    game_scene4: "Luego entiende que significa que es muy gracioso.",
    game_q1: "¿Qué significa \"me muero de risa\"?",
    game_q1_opt1: "Estar muy enfermo",
    game_q1_opt2: "Que algo es muy gracioso",
    game_q1_opt3: "Estar muy triste",
    game_q2: "¿Cómo se sentía Juan al principio?",
    game_q2_opt1: "Feliz",
    game_q2_opt2: "Tranquilo",
    game_q2_opt3: "Preocupado",
    game_q3: "¿Qué hizo Juan al final?",
    game_q3_opt1: "Se fue.",
    game_q3_opt2: "Entendió el significado.",
    game_q3_opt3: "Se rió tranquilo y feliz.",
    game_retry_text: "Puedes intentarlo otra vez.",
    game_retry_btn: "Intentar otra vez"
  },
  en: {
    nav_home: "Home", nav_info: "General information", nav_shop: "Lumen Shop",
    nav_centers: "Centers", nav_tours: "Inclusive tours", nav_pros: "Professionals", nav_about: "About us",
    drop_autism: "What is autism?", drop_causes: "Causes of autism", drop_levels: "Levels of autism",
    drop_signs: "Warning signs", drop_girls: "Autism in girls...", drop_conditions: "Associated conditions...",
    drop_who: "Who are we?", drop_mission: "Mission and vision", drop_contact: "Contact",
    footer_copy: "2026 Lumen. All rights reserved.", footer_access: "Quick access",
    footer_community: "Visit our community!", footer_contact: "Contact us", footer_email_label: "Email:",
    game_title: "Figurative Language",
    game_scene1: "Juan hears a joke.",
    game_scene2: "Someone says: I'm dying of laughter!",
    game_scene2_short: "I'm dying of laughter!",
    game_scene3: "Juan gets worried.",
    game_scene4: "Then he understands that it means it's very funny.",
    game_q1: "What does \"dying of laughter\" mean?",
    game_q1_opt1: "To be very sick",
    game_q1_opt2: "That something is very funny",
    game_q1_opt3: "To be very sad",
    game_q2: "How did Juan feel at the beginning?",
    game_q2_opt1: "Happy",
    game_q2_opt2: "Calm",
    game_q2_opt3: "Worried",
    game_q3: "What did Juan do in the end?",
    game_q3_opt1: "He left.",
    game_q3_opt2: "He understood the meaning.",
    game_q3_opt3: "He laughed calm and happy.",
    game_retry_text: "You can try again.",
    game_retry_btn: "Try again"
  }
};

const LANG_META = {
  es: { label: "ES", flagSrc: "https://flagcdn.com/w80/es.png", htmlLang: "es" },
  en: { label: "EN", flagSrc: "https://flagcdn.com/w80/gb.png", htmlLang: "en" }
};

/* =========================================================
   SISTEMA DE IMÁGENES POR IDIOMA
========================================================= */
const IMAGES_EN = {
  'Imagenes/deco-nube-1.png':         'Imagenes/en/deco-nube-1.png',
  'Imagenes/deco-nube-2.png':         'Imagenes/en/deco-nube-2.png',
  'Imagenes/deco-nube-3.png':         'Imagenes/en/deco-nube-3.png',
  'Imagenes/deco-mancha-1.png':       'Imagenes/en/deco-mancha-1.png',
  'Imagenes/deco-mancha-2.png':       'Imagenes/en/deco-mancha-2.png',
  'Imagenes/juan-escucha-chiste.png': 'Imagenes/juan-escucha-chiste.png',
  'Imagenes/me-muero-de-risa.png':    'Imagenes/me-muero-de-risa.png',
  'Imagenes/juan-se-preocupa.png':    'Imagenes/juan-se-preocupa.png',
  'Imagenes/juan-entiende-gracioso.png':'Imagenes/juan-entiende-gracioso.png',
  'Imagenes/mascota.png':             'Imagenes/mascota.png',
  'Imagenes/feliz.png':               'Imagenes/feliz.png',
  'Imagenes/tranquilo.png':           'Imagenes/tranquilo.png',
  'Imagenes/preocupado.png':          'Imagenes/preocupado.png',
  'Imagenes/se-fue.png':              'Imagenes/se-fue.png',
  'Imagenes/enterdio-chiste.png':     'Imagenes/enterdio-chiste.png',
  'Imagenes/se-rio-tranquilo.png':    'Imagenes/se-rio-tranquilo.png',
  'Imagenes/numa2.0.png':             'Imagenes/numa2.0.png'
};

const BG_IMAGES_EN = {
  'Imagenes/portada-bg.png': 'Imagenes/portada-bg-en.png',
  'Imagenes/LF (bien).png':  'Imagenes/en/LF (bien).png'
};

let currentStep = 0;

function applyImageTranslations(lang) {
  document.querySelectorAll('img').forEach(img => {
    if (img.closest('.lang-wrapper') || img.closest('.lang-dropdown')) return;
    if (img.classList.contains('logo-img') || img.classList.contains('footer-logo-img')) return;

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

function updateStageBackground() {
  const stage = document.getElementById('stage');
  if (!stage) return;

  if (currentStep === 0) {
    stage.style.backgroundImage = currentLang === 'en' 
      ? `url('${BG_IMAGES_EN['Imagenes/portada-bg.png']}')` 
      : `url('Imagenes/portada-bg.png')`;
  } else if (currentStep === 5) {
    stage.style.backgroundImage = currentLang === 'en' 
      ? `url('${BG_IMAGES_EN['Imagenes/LF (bien).png']}')` 
      : `url('Imagenes/LF (bien).png')`;
  } else {
    stage.style.backgroundImage = '';
  }
}

/* =========================================================
   APLICAR TRADUCCIONES DE TEXTO
========================================================= */
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
  const langFlag  = document.getElementById("langFlag");
  if (langLabel) langLabel.textContent = LANG_META[lang].label;
  if (langFlag)  langFlag.src = LANG_META[lang].flagSrc;

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("selected", opt.dataset.lang === lang);
  });

  applyTranslations(lang);
  applyImageTranslations(lang);   
  updateStageBackground(); 
  closeLangDropdown();
}

/* =========================================================
   DROPDOWN DE IDIOMA Y NAVBAR
========================================================= */
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
    hideTimeout = setTimeout(() => dropdown.classList.remove('show'), 350);
  });
});

document.addEventListener("click", e => {
  if (!e.target.closest('.lang-wrapper') && !e.target.closest('.nav-item')) {
    closeLangDropdown();
    document.querySelectorAll(".nav-dropdown.show").forEach(d => d.classList.remove("show"));
  }
});

/* =========================================================
   INICIALIZACIÓN AL CARGAR
========================================================= */
applyTranslations(currentLang);
applyImageTranslations(currentLang);

if (document.getElementById("langLabel")) {
  document.getElementById("langLabel").textContent = LANG_META[currentLang].label;
  document.getElementById("langFlag").src  = LANG_META[currentLang].flagSrc;
}
document.querySelectorAll(".lang-option").forEach(opt => {
  opt.classList.toggle("selected", opt.dataset.lang === currentLang);
});

/* =========================================================
   LÓGICA DEL JUEGO 
========================================================= */
const stageEl = document.getElementById('stage');
const totalSteps = 6;
const progressPill = document.getElementById('progress-pill');

for (let i = 0; i < totalSteps; i++) {
  const d = document.createElement('button');
  d.className = 'dot';
  d.id = 'dot-' + i;
  d.type = 'button';
  d.setAttribute('aria-label', 'Ir al paso ' + (i + 1));
  d.addEventListener('click', () => goToStep(i));
  progressPill.appendChild(d);
}

const pillLabel = document.getElementById('pill-label');

function goToStep(step) {
  currentStep = step;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('step-' + step).classList.add('active');

  document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
  document.getElementById('dot-' + step).classList.add('active');

  stageEl.classList.toggle('bg-step0', step === 0);
  stageEl.classList.toggle('bg-step5', step === 5);
  
  updateStageBackground();

  if (pillLabel) pillLabel.classList.toggle('dark', step === 0 || step === 5);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuestion(prefix) {
  const options = document.getElementById(prefix + '-options');
  options.querySelectorAll('button').forEach(b => {
    b.classList.remove('correct', 'wrong-picked');
    b.disabled = false;
    const badge = b.querySelector('.check-icon, .check-badge');
    if (badge) badge.style.display = 'none';
  });
  document.getElementById(prefix + '-retry').classList.remove('show');
}

function answer(prefix, btn, isCorrect) {
  const options = document.getElementById(prefix + '-options');
  options.querySelectorAll('button').forEach(b => b.disabled = true);
  const retryBox = document.getElementById(prefix + '-retry');

  if (isCorrect) {
    btn.classList.add('correct');
    let mark = btn.querySelector('.check-badge');
    if (mark) { mark.style.display = 'flex'; }
    else {
      const span = document.createElement('span');
      span.className = 'check-icon';
      span.textContent = '✔';
      btn.appendChild(span);
    }
    retryBox.classList.remove('show');
  } else {
    btn.classList.add('wrong-picked');
    retryBox.classList.add('show');
  }
}

goToStep(0);