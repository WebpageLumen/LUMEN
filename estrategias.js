/* =========================================
   SELECTOR DE IDIOMA
========================================= */

const languageButton = document.getElementById("languageButton");
const languageOptions = document.getElementById("languageOptions");
const languageOptionsButtons = document.querySelectorAll(".language-option");

const banderaIdioma = document.getElementById("banderaIdioma");
const codigoIdioma = document.getElementById("codigoIdioma");


/* =========================================
   ABRIR / CERRAR MENÚ DE IDIOMA
========================================= */

languageButton.addEventListener("click", function (evento) {

    evento.stopPropagation();

    languageOptions.classList.toggle("mostrar");

});


/* =========================================
   TEXTOS DE LOS IDIOMAS
========================================= */

const textos = {

    es: {

        codigo: "ES",

        bandera: "Imagenes/español.webp",

        titulo: "Estrategias",

        descripcion:
            "A veces, saber lo que sientes es el primer paso. Esta sección te muestra diferentes formas de afrontar esos momentos y recursos que pueden ayudarte a sentirte más tranquilo, cómodo y en control de la situación.",

        grounding: "Grounding",

        objetos: "Objetos de regulación",

        expresa: "Expresa tu emoción",

        ambiente: "Cambia el ambiente"

    },

    en: {

        codigo: "EN",

        bandera: "Imagenes/ingles.png",

        titulo: "Strategies",

        descripcion:
            "Sometimes, knowing what you feel is the first step. This section shows you different ways to cope with those moments and resources that can help you feel calmer, more comfortable, and in control of the situation.",

        grounding: "Grounding",

        objetos: "Regulation objects",

        expresa: "Express your emotion",

        ambiente: "Change your environment"

    }

};


/* =========================================
   CAMBIAR IDIOMA
========================================= */

function cambiarIdioma(idioma) {

    const texto = textos[idioma];

    if (!texto) {
        return;
    }


    banderaIdioma.src = texto.bandera;

    banderaIdioma.alt =
        idioma === "es"
            ? "Español"
            : "English";


    codigoIdioma.textContent =
        texto.codigo;


    document.getElementById("tituloEstrategias").textContent =
        texto.titulo;


    document.getElementById("descripcionEstrategias").textContent =
        texto.descripcion;


    document.getElementById("groundingTexto").textContent =
        texto.grounding;

    document.getElementById("objetosTexto").textContent =
        texto.objetos;

    document.getElementById("expresaTexto").textContent =
        texto.expresa;

    document.getElementById("ambienteTexto").textContent =
        texto.ambiente;


    document.documentElement.lang =
        idioma;


    /* =====================================
       GUARDAR IDIOMA UNIFICADO
    ===================================== */

    localStorage.setItem(
        "idioma",
        idioma
    );


    languageOptions.classList.remove("mostrar");

}


/* =========================================
   BOTONES DE IDIOMA
========================================= */

languageOptionsButtons.forEach(function (boton) {

    boton.addEventListener("click", function (evento) {

        evento.stopPropagation();

        const idioma =
            this.dataset.lang;

        cambiarIdioma(idioma);

    });

});


/* =========================================
   RECUPERAR IDIOMA GUARDADO
========================================= */

const idiomaGuardado =
    localStorage.getItem("idioma") || "es";

cambiarIdioma(idiomaGuardado);


/* =========================================
   CERRAR SI SE HACE CLICK AFUERA
========================================= */

document.addEventListener("click", function (evento) {

    const dropdown =
        document.getElementById("languageDropdown");

    if (
        dropdown &&
        !dropdown.contains(evento.target)
    ) {

        languageOptions.classList.remove("mostrar");

    }

});


/* =========================================
   SELECCIÓN DE ESTRATEGIA
========================================= */

const tarjetas =
    document.querySelectorAll(".tarjeta");


tarjetas.forEach(function (tarjeta) {

    tarjeta.addEventListener("click", function () {

        const estrategia =
            this.dataset.estrategia;


        localStorage.setItem(
            "estrategiaSeleccionada",
            estrategia
        );

    });

});
