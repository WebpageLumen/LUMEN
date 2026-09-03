/* ==============================
   IDIOMA ACTUAL
============================== */

let idiomaActual =
    localStorage.getItem("idioma") || "es";


/* ==============================
   TRADUCCIONES
============================== */

const traducciones = {

    es: {

        titulo: "ESTIRAMIENTOS",

        descripcion:
            "Muévete a tu ritmo y siente tu cuerpo mejor.",

        seleccion:
            "Elige un estiramiento",

        cuello:
            "CUELLO",

        brazos:
            "BRAZOS",

        espalda:
            "ESPALDA",

        piernas:
            "PIERNAS",

        cuerpo:
            "CUERPO COMPLETO",

        segundos:
            "20 Segundos",

        tip:
            "Tip: Estirarte cada día te ayuda a sentirte más relajado y con más energía."

    },


    en: {

        titulo:
            "STRETCHING",

        descripcion:
            "Move at your own pace and feel better in your body.",

        seleccion:
            "Choose a stretch",

        cuello:
            "NECK",

        brazos:
            "ARMS",

        espalda:
            "BACK",

        piernas:
            "LEGS",

        cuerpo:
            "FULL BODY",

        segundos:
            "20 Seconds",

        tip:
            "Tip: Stretching every day can help you feel more relaxed and energized."

    }

};


/* ==============================
   ELEMENTOS DEL HTML
============================== */

const languageButton =
    document.getElementById("languageButton");

const languageDropdown =
    document.getElementById("languageDropdown");

const banderaActual =
    document.getElementById("banderaActual");

const codigoIdioma =
    document.getElementById("codigoIdioma");

const opcionES =
    document.getElementById("opcionES");

const opcionEN =
    document.getElementById("opcionEN");


/* ==============================
   CAMBIAR TEXTOS
============================== */

function actualizarTextos() {

    const t =
        traducciones[idiomaActual];


    const titulo =
        document.getElementById(
            "tituloEstiramientos"
        );

    if (titulo) {

        titulo.textContent =
            t.titulo;

    }


    const descripcion =
        document.getElementById(
            "descripcionEstiramientos"
        );

    if (descripcion) {

        descripcion.textContent =
            t.descripcion;

    }


    const tituloSeleccion =
        document.getElementById(
            "tituloSeleccion"
        );

    if (tituloSeleccion) {

        tituloSeleccion.textContent =
            t.seleccion;

    }


    const nombreCuello =
        document.getElementById(
            "nombreCuello"
        );

    if (nombreCuello) {

        nombreCuello.textContent =
            t.cuello;

    }


    const nombreBrazos =
        document.getElementById(
            "nombreBrazos"
        );

    if (nombreBrazos) {

        nombreBrazos.textContent =
            t.brazos;

    }


    const nombreEspalda =
        document.getElementById(
            "nombreEspalda"
        );

    if (nombreEspalda) {

        nombreEspalda.textContent =
            t.espalda;

    }


    const nombrePiernas =
        document.getElementById(
            "nombrePiernas"
        );

    if (nombrePiernas) {

        nombrePiernas.textContent =
            t.piernas;

    }


    const nombreCuerpo =
        document.getElementById(
            "nombreCuerpo"
        );

    if (nombreCuerpo) {

        nombreCuerpo.textContent =
            t.cuerpo;

    }


    const tiempoCuello =
        document.getElementById(
            "tiempoCuello"
        );

    if (tiempoCuello) {

        tiempoCuello.textContent =
            t.segundos;

    }


    const tiempoBrazos =
        document.getElementById(
            "tiempoBrazos"
        );

    if (tiempoBrazos) {

        tiempoBrazos.textContent =
            t.segundos;

    }


    const tiempoEspalda =
        document.getElementById(
            "tiempoEspalda"
        );

    if (tiempoEspalda) {

        tiempoEspalda.textContent =
            t.segundos;

    }


    const tiempoPiernas =
        document.getElementById(
            "tiempoPiernas"
        );

    if (tiempoPiernas) {

        tiempoPiernas.textContent =
            t.segundos;

    }


    const tiempoCuerpo =
        document.getElementById(
            "tiempoCuerpo"
        );

    if (tiempoCuerpo) {

        tiempoCuerpo.textContent =
            t.segundos;

    }


    const textoTip =
        document.getElementById(
            "textoTip"
        );

    if (textoTip) {

        textoTip.textContent =
            t.tip;

    }


    document.documentElement.lang =
        idiomaActual;

}


/* ==============================
   ACTUALIZAR SELECTOR IDIOMA
============================== */

function actualizarSelectorIdioma() {

    if (idiomaActual === "es") {

        if (banderaActual) {

            banderaActual.src =
                "español.webp";

            banderaActual.alt =
                "Español";

        }

        if (codigoIdioma) {

            codigoIdioma.textContent =
                "ES";

        }

        if (opcionES) {

            opcionES.classList.add(
                "active"
            );

        }

        if (opcionEN) {

            opcionEN.classList.remove(
                "active"
            );

        }

    }

    else {

        if (banderaActual) {

            banderaActual.src =
                "ingles.png";

            banderaActual.alt =
                "English";

        }

        if (codigoIdioma) {

            codigoIdioma.textContent =
                "EN";

        }

        if (opcionEN) {

            opcionEN.classList.add(
                "active"
            );

        }

        if (opcionES) {

            opcionES.classList.remove(
                "active"
            );

        }

    }

}


/* ==============================
   CAMBIAR IDIOMA
============================== */

function cambiarIdioma(idioma) {

    idiomaActual =
        idioma;

    localStorage.setItem(
        "idioma",
        idiomaActual
    );

    actualizarTextos();

    actualizarSelectorIdioma();

    if (languageDropdown) {

        languageDropdown.classList.remove(
            "active"
        );

    }

}


/* ==============================
   DROPDOWN IDIOMA
============================== */

if (languageButton) {

    languageButton.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            if (languageDropdown) {

                languageDropdown.classList.toggle(
                    "active"
                );

            }

        }
    );

}


if (opcionES) {

    opcionES.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            cambiarIdioma("es");

        }
    );

}


if (opcionEN) {

    opcionEN.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            cambiarIdioma("en");

        }
    );

}


document.addEventListener(
    "click",
    function() {

        if (languageDropdown) {

            languageDropdown.classList.remove(
                "active"
            );

        }

    }
);


/* ==============================
   MODO CALMA
============================== */

const botonCalma =
    document.getElementById("modoCalma");


function actualizarModoCalma() {

    const modoCalmaActivado =
        localStorage.getItem("modoCalma") === "true";


    if (modoCalmaActivado) {

        document.body.classList.add(
            "modo-calma"
        );

    }

    else {

        document.body.classList.remove(
            "modo-calma"
        );

    }


    if (botonCalma) {

        botonCalma.textContent =
            modoCalmaActivado
                ? "🌙"
                : "☀️";

    }

}


if (botonCalma) {

    botonCalma.addEventListener(
        "click",
        function() {

            const activado =
                document.body.classList.toggle(
                    "modo-calma"
                );


            localStorage.setItem(
                "modoCalma",
                activado
            );


            botonCalma.textContent =
                activado
                    ? "🌙"
                    : "☀️";

        }
    );

}


/* ==============================
   TARJETAS DE ESTIRAMIENTOS
============================== */

const tarjetas =
    document.querySelectorAll(
        ".tarjeta-estiramiento"
    );


tarjetas.forEach(
    function(tarjeta) {

        tarjeta.addEventListener(
            "click",
            function() {

                const ejercicio =
                    tarjeta.dataset.estiramiento;


                window.location.href =
                    "seleccion-estiramientos.html?ejercicio="
                    + ejercicio;

            }
        );

    }
);


/* ==============================
   INICIAR
============================== */

actualizarTextos();

actualizarSelectorIdioma();

actualizarModoCalma();