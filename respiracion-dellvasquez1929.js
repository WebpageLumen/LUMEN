// =====================================================
// CONFIGURACIÓN DE RESPIRACIONES
// =====================================================

const respiraciones = {

    normal: {
        inhalar: 4,
        mantener: 2,
        soltar: 4
    },

    lenta: {
        inhalar: 6,
        mantener: 3,
        soltar: 6
    },

    profunda: {
        inhalar: 5,
        mantener: 5,
        soltar: 7
    },

    cuadrada: {
        inhalar: 4,
        mantener: 4,
        soltar: 4
    }

};


// =====================================================
// VARIABLES
// =====================================================

let respiracionActual = "normal";

let respirando = false;


// =====================================================
// ELEMENTOS
// =====================================================

const tarjetas =
    document.querySelectorAll(".tarjeta-respiracion");

const tiempoInhalar =
    document.getElementById("tiempoInhalar");

const tiempoMantener =
    document.getElementById("tiempoMantener");

const tiempoSoltar =
    document.getElementById("tiempoSoltar");

const botonEmpezar =
    document.getElementById("botonEmpezar");

const circulo =
    document.getElementById("circulo");

const pasos =
    document.querySelectorAll(".paso");

const gruposPuntos =
    document.querySelectorAll(".puntos");

const puntosInhalar =
    gruposPuntos[0].querySelectorAll("span");

const puntosSoltar =
    gruposPuntos[1].querySelectorAll("span");

const notificacion =
    document.getElementById("notificacionRespiracion");

const tituloNotificacion =
    document.getElementById("tituloNotificacion");

const textoNotificacion =
    document.getElementById("textoNotificacion");

const botonModoCalma =
    document.getElementById("modoCalma");


// =====================================================
// SELECTOR DE IDIOMA
// =====================================================

const languageButton =
    document.getElementById("languageButton");

const languageOptions =
    document.getElementById("languageOptions");

const banderaActual =
    document.getElementById("banderaActual");

const codigoIdioma =
    document.getElementById("codigoIdioma");

const opcionES =
    document.getElementById("opcionES");

const opcionEN =
    document.getElementById("opcionEN");


// =====================================================
// ELEMENTOS DE TEXTO
// =====================================================

const respNormal =
    document.getElementById("respNormal");

const respLenta =
    document.getElementById("respLenta");

const respProfunda =
    document.getElementById("respProfunda");

const respCuadrada =
    document.getElementById("respCuadrada");

const tituloGuia =
    document.getElementById("tituloGuia");

const textoGuia =
    document.getElementById("textoGuia");

const textoModoCalma =
    document.getElementById("textoModoCalma");

const tituloRespira =
    document.getElementById("tituloRespira");

const textoInhalar =
    document.getElementById("textoInhalar");

const textoMantener =
    document.getElementById("textoMantener");

const textoSoltar =
    document.getElementById("textoSoltar");

const textoEmpezar =
    document.getElementById("textoEmpezar");


// =====================================================
// IDIOMA GUARDADO
// =====================================================

let idiomaActual =
    localStorage.getItem("idioma") || "es";


// =====================================================
// MODO CALMA GUARDADO
// =====================================================

let modoCalmaActivo =
    localStorage.getItem("modoCalma") === "activo";


// =====================================================
// TRADUCCIONES
// =====================================================

const traducciones = {

    es: {

        normal:
            "respiración normal",

        normalMensaje:
            "Una forma tranquila de comenzar. Respira a tu propio ritmo y disfruta el momento. 💙",

        lenta:
            "respiración lenta",

        lentaMensaje:
            "Baja el ritmo poco a poco. Deja que cada respiración te ayude a sentir más calma. 💜",

        profunda:
            "respiración profunda",

        profundaMensaje:
            "Tómate un momento para respirar profundamente y conectar contigo. ✨",

        cuadrada:
            "respiración uniforme",

        cuadradaMensaje:
            "Mantén un ritmo constante y encuentra tu equilibrio, respiración a respiración. 🌈",

        segundos:
            "segundos",

        tarjetaNormal:
            "Respiración<br>Normal",

        tarjetaLenta:
            "Respiración<br>Lenta",

        tarjetaProfunda:
            "Respiración<br>Profunda",

        tarjetaCuadrada:
            "Respiración<br>uniforme",

        tituloGuia:
            "Sigue el círculo",

        textoGuia:
            "Él te mostrará cuándo inhalar, mantener el aire y soltarlo.",

        tituloRespira:
            "Respira conmigo",

        inhalar:
            "Inhala",

        mantener:
            "Mantén",

        soltar:
            "Suelta",

        empezar:
            "Empezar",

        hasElegido:
            "Has elegido "

    },


    en: {

        normal:
            "normal breathing",

        normalMensaje:
            "A calm way to begin. Breathe at your own pace and enjoy the moment. 💙",

        lenta:
            "slow breathing",

        lentaMensaje:
            "Slow down little by little. Let each breath help you feel calmer. 💜",

        profunda:
            "deep breathing",

        profundaMensaje:
            "Take a moment to breathe deeply and connect with yourself. ✨",

        cuadrada:
            "steady breathing",

        cuadradaMensaje:
            "Keep a steady rhythm and find your balance, one breath at a time. 🌈",

        segundos:
            "seconds",

        tarjetaNormal:
            "Normal<br>Breathing",

        tarjetaLenta:
            "Slow<br>Breathing",

        tarjetaProfunda:
            "Deep<br>Breathing",

        tarjetaCuadrada:
            "Steady<br>Breathing",

        tituloGuia:
            "Follow the circle",

        textoGuia:
            "It will show you when to inhale, hold your breath, and exhale.",

        tituloRespira:
            "Breathe with me",

        inhalar:
            "Inhale",

        mantener:
            "Hold",

        soltar:
            "Exhale",

        empezar:
            "Start",

        hasElegido:
            "You chose "

    }

};


// =====================================================
// ACTUALIZAR ICONO DEL MODO CALMA
// =====================================================

function actualizarIconoModoCalma() {

    if (modoCalmaActivo) {

        botonModoCalma.textContent =
            "🌙";

        botonModoCalma.setAttribute(
            "aria-label",
            "Desactivar modo calma"
        );

    } else {

        botonModoCalma.textContent =
            "☀️";

        botonModoCalma.setAttribute(
            "aria-label",
            "Activar modo calma"
        );

    }

}


// =====================================================
// APLICAR MODO CALMA
// =====================================================

function aplicarModoCalma() {

    if (modoCalmaActivo) {

        document.body.classList.add(
            "modo-calma"
        );

    } else {

        document.body.classList.remove(
            "modo-calma"
        );

    }

    actualizarIconoModoCalma();

}


// =====================================================
// CAMBIAR RESPIRACIÓN
// =====================================================

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        if (respirando) {
            return;
        }

        tarjetas.forEach(t => {

            t.classList.remove("activa");

        });

        tarjeta.classList.add("activa");

        respiracionActual =
            tarjeta.dataset.respiracion;

        actualizarPanel();

        const t =
            traducciones[idiomaActual];

        if (respiracionActual === "normal") {

            mostrarNotificacion(
                t.normal,
                t.normalMensaje
            );

        }

        if (respiracionActual === "lenta") {

            mostrarNotificacion(
                t.lenta,
                t.lentaMensaje
            );

        }

        if (respiracionActual === "profunda") {

            mostrarNotificacion(
                t.profunda,
                t.profundaMensaje
            );

        }

        if (respiracionActual === "cuadrada") {

            mostrarNotificacion(
                t.cuadrada,
                t.cuadradaMensaje
            );

        }

    });

});


// =====================================================
// ACTUALIZAR PANEL
// =====================================================

function actualizarPanel() {

    const datos =
        respiraciones[respiracionActual];

    const segundos =
        traducciones[idiomaActual].segundos;

    tiempoInhalar.textContent =
        datos.inhalar + " " + segundos;

    tiempoMantener.textContent =
        datos.mantener + " " + segundos;

    tiempoSoltar.textContent =
        datos.soltar + " " + segundos;

}


// =====================================================
// ACTUALIZAR TODOS LOS TEXTOS
// =====================================================

function actualizarTextos() {

    const t =
        traducciones[idiomaActual];

    respNormal.innerHTML =
        t.tarjetaNormal;

    respLenta.innerHTML =
        t.tarjetaLenta;

    respProfunda.innerHTML =
        t.tarjetaProfunda;

    respCuadrada.innerHTML =
        t.tarjetaCuadrada;

    tituloGuia.textContent =
        t.tituloGuia;

    textoGuia.textContent =
        t.textoGuia;

    tituloRespira.textContent =
        t.tituloRespira;

    textoInhalar.textContent =
        t.inhalar;

    textoMantener.textContent =
        t.mantener;

    textoSoltar.textContent =
        t.soltar;

    textoEmpezar.textContent =
        t.empezar;

    actualizarPanel();

    actualizarIconoModoCalma();

}


// =====================================================
// MODO CALMA
// =====================================================

botonModoCalma.addEventListener(
    "click",
    () => {

        modoCalmaActivo =
            !modoCalmaActivo;

        localStorage.setItem(
            "modoCalma",
            modoCalmaActivo
                ? "activo"
                : "inactivo"
        );

        aplicarModoCalma();

    }
);


// =====================================================
// NOTIFICACIÓN
// =====================================================

function mostrarNotificacion(nombre, mensaje) {

    const t =
        traducciones[idiomaActual];

    tituloNotificacion.textContent =
        "✓ " +
        t.hasElegido +
        nombre;

    textoNotificacion.textContent =
        mensaje;

    notificacion.classList.add(
        "mostrar"
    );

    setTimeout(() => {

        notificacion.classList.remove(
            "mostrar"
        );

    }, 4000);

}


// =====================================================
// BOTÓN EMPEZAR
// =====================================================

botonEmpezar.addEventListener(
    "click",
    () => {

        if (respirando) {
            return;
        }

        iniciarRespiracion();

    }
);


// =====================================================
// INICIAR RESPIRACIÓN
// =====================================================

async function iniciarRespiracion() {

    respirando = true;

    const datos =
        respiraciones[respiracionActual];

    await fase(
        0,
        datos.inhalar,
        "scale(1.25)"
    );

    await fase(
        1,
        datos.mantener,
        "scale(1.25)"
    );

    await fase(
        2,
        datos.soltar,
        "scale(1)"
    );

    limpiar();

    respirando = false;

}


// =====================================================
// FASE
// =====================================================

function fase(indice, duracion, escala) {

    return new Promise(resolve => {

        pasos.forEach(p => {

            p.classList.remove(
                "activo"
            );

        });

        pasos[indice].classList.add(
            "activo"
        );

        circulo.style.transition =
            "transform " +
            duracion +
            "s linear";

        circulo.style.transform =
            escala;

        animarPuntos(
            indice,
            duracion
        );

        setTimeout(
            resolve,
            duracion * 1000
        );

    });

}


// =====================================================
// LIMPIAR
// =====================================================

function limpiar() {

    pasos.forEach(p => {

        p.classList.remove(
            "activo"
        );

    });

    puntosInhalar.forEach(p => {

        p.style.background =
            "#d6d6d6";

    });

    puntosSoltar.forEach(p => {

        p.style.background =
            "#d6d6d6";

    });

}


// =====================================================
// ANIMAR PUNTOS
// =====================================================

function animarPuntos(indice, duracion) {

    let puntosActuales;

    if (indice === 0) {

        puntosActuales =
            puntosInhalar;

    } else if (indice === 2) {

        puntosActuales =
            puntosSoltar;

    } else {

        return;

    }

    const tiempo =
        (duracion * 1000) / 3;

    puntosActuales.forEach(p => {

        p.style.background =
            "#d6d6d6";

    });

    puntosActuales.forEach((punto, i) => {

        setTimeout(() => {

            punto.style.background =
                "#7A6EF6";

        }, tiempo * (i + 1));

    });

}


// =====================================================
// ACTUALIZAR SELECTOR DE IDIOMA
// =====================================================

function actualizarSelectorIdioma() {

    if (idiomaActual === "en") {

        banderaActual.src =
            "ingles.png";

        banderaActual.alt =
            "English";

        codigoIdioma.textContent =
            "EN";

        opcionEN.classList.add(
            "active"
        );

        opcionES.classList.remove(
            "active"
        );

    } else {

        banderaActual.src =
            "español.webp";

        banderaActual.alt =
            "Español";

        codigoIdioma.textContent =
            "ES";

        opcionES.classList.add(
            "active"
        );

        opcionEN.classList.remove(
            "active"
        );

    }

}


// =====================================================
// CAMBIAR IDIOMA
// =====================================================

function cambiarIdioma(idioma) {

    if (!traducciones[idioma]) {
        return;
    }

    idiomaActual =
        idioma;

    localStorage.setItem(
        "idioma",
        idioma
    );

    actualizarSelectorIdioma();

    actualizarTextos();

    if (
        notificacion.classList.contains(
            "mostrar"
        )
    ) {

        notificacion.classList.remove(
            "mostrar"
        );

    }

}


// =====================================================
// ABRIR / CERRAR DROPDOWN
// =====================================================

languageButton.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        languageOptions.classList.toggle(
            "active"
        );

    }
);


// =====================================================
// ESPAÑOL
// =====================================================

opcionES.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        cambiarIdioma("es");

        languageOptions.classList.remove(
            "active"
        );

    }
);


// =====================================================
// INGLÉS
// =====================================================

opcionEN.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        cambiarIdioma("en");

        languageOptions.classList.remove(
            "active"
        );

    }
);


// =====================================================
// CERRAR DROPDOWN AL HACER CLICK AFUERA
// =====================================================

document.addEventListener(
    "click",
    function(event) {

        if (
            !languageDropdown.contains(
                event.target
            )
        ) {

            languageOptions.classList.remove(
                "active"
            );

        }

    }
);


// =====================================================
// INICIAR PÁGINA
// =====================================================

actualizarSelectorIdioma();

actualizarTextos();

aplicarModoCalma();