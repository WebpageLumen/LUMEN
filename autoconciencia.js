/* =====================================================
   IDIOMA
===================================================== */



let idiomaActual = localStorage.getItem("idioma") || "es";

function cambiarIdioma(idioma) {

    idiomaActual = idioma;

    localStorage.setItem("idioma", idioma);

    /* Cambiar idioma del documento */
    document.documentElement.lang = idioma;


    /* =================================================
       CAMBIAR TODOS LOS TEXTOS
    ================================================= */

    document.querySelectorAll("[data-es][data-en]").forEach(elemento => {

        if (idioma === "en") {
            elemento.innerHTML = elemento.getAttribute("data-en");
        } else {
            elemento.innerHTML = elemento.getAttribute("data-es");
        }

    });


    /* =================================================
       CAMBIAR TEXTOS ALTERNATIVOS DE IMÁGENES
    ================================================= */

    document.querySelectorAll("[data-alt-es][data-alt-en]").forEach(elemento => {

        if (idioma === "en") {

            elemento.alt =
                elemento.getAttribute("data-alt-en");

        } else {

            elemento.alt =
                elemento.getAttribute("data-alt-es");

        }

    });


    /* =================================================
       ACTUALIZAR BOTÓN DEL IDIOMA
    ================================================= */

    const banderaIdioma =
        document.getElementById("banderaIdioma");

    const codigoIdioma =
        document.getElementById("codigoIdioma");


    if (idioma === "en") {

        if (banderaIdioma) {

            banderaIdioma.src =
                "ingles.png";

            banderaIdioma.alt =
                "English";

        }

        if (codigoIdioma) {

            codigoIdioma.textContent =
                "EN";

        }

    } else {

        if (banderaIdioma) {

            banderaIdioma.src =
                "español.webp";

            banderaIdioma.alt =
                "Español";

        }

        if (codigoIdioma) {

            codigoIdioma.textContent =
                "ES";

        }

    }


    /* =================================================
       ACTUALIZAR CONTENIDO DINÁMICO
    ================================================= */

    if (typeof actualizarIdiomaDinamico === "function") {

        actualizarIdiomaDinamico();

    }

}


/* =====================================================
   DROPDOWN DE IDIOMA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const languageButton =
        document.getElementById("languageButton");

    const languageDropdown =
        document.getElementById("languageDropdown");

    const opcionES =
        document.getElementById("opcionES");

    const opcionEN =
        document.getElementById("opcionEN");


    /* =================================================
       ABRIR / CERRAR MENÚ
    ================================================= */

    if (languageButton && languageDropdown) {

        languageButton.addEventListener(
            "click",
            function (evento) {

                evento.stopPropagation();

                languageDropdown.classList.toggle("active");

            }
        );

    }


    /* =================================================
       ESPAÑOL
    ================================================= */

    if (opcionES) {

        opcionES.addEventListener(
            "click",
            function (evento) {

                evento.preventDefault();
                evento.stopPropagation();

                cambiarIdioma("es");

                if (languageDropdown) {

                    languageDropdown.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =================================================
       INGLÉS
    ================================================= */

    if (opcionEN) {

        opcionEN.addEventListener(
            "click",
            function (evento) {

                evento.preventDefault();
                evento.stopPropagation();

                cambiarIdioma("en");

                if (languageDropdown) {

                    languageDropdown.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =================================================
       CERRAR AL HACER CLICK FUERA
    ================================================= */

    document.addEventListener(
        "click",
        function (evento) {

            if (
                languageDropdown &&
                !languageDropdown.contains(
                    evento.target
                )
            ) {

                languageDropdown.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =================================================
       IDIOMA INICIAL
    ================================================= */

cambiarIdioma(idiomaActual);

});


/* =====================================================
   ELEMENTOS PRINCIPALES
===================================================== */

const tarjetas =
    document.querySelectorAll(
        ".tarjeta-autoconciencia"
    );


const panel =
    document.getElementById(
        "panelAutoconciencia"
    );


const cerrarPanel =
    document.getElementById(
        "cerrarPanel"
    );


/* =====================================================
   PANELES
===================================================== */

const panelSientes =
    document.getElementById(
        "panelSientes"
    );


const panelNecesitas =
    document.getElementById(
        "panelNecesitas"
    );


const panelControl =
    document.getElementById(
        "panelControl"
    );


const panelRueda =
    document.getElementById(
        "panelRueda"
    );


/* =====================================================
   ELEMENTOS ¿QUÉ SIENTES?
===================================================== */

const sientesInicial =
    document.getElementById(
        "sientesInicial"
    );


const sientesInfo =
    document.getElementById(
        "sientesInfo"
    );


const sientesTitulo =
    document.getElementById(
        "sientesTitulo"
    );


const sientesEtiquetas =
    document.getElementById(
        "sientesEtiquetas"
    );


const sientesTexto =
    document.getElementById(
        "sientesTexto"
    );


const sientesConsejos =
    document.getElementById(
        "sientesConsejos"
    );


const imagenZona =
    document.getElementById(
        "imagenZona"
    );


const puntosCuerpo =
    document.querySelectorAll(
        ".punto-cuerpo"
    );


/* =====================================================
   INFORMACIÓN DE LAS ZONAS
===================================================== */

const informacionSientes = {

    cabeza: {

        titulo: {
            es: "Cabeza",
            en: "Head"
        },

        imagen:
            "Autoconciencia/emocion-cuerpo/cabeza.png",

        etiquetas: {

            es: [
                "Presión",
                "Mareo",
                "Dolor de cabeza"
            ],

            en: [
                "Pressure",
                "Dizziness",
                "Headache"
            ]

        },

        texto: {

            es: [
                "Estás preocupado.",
                "Estás cansado.",
                "Has tenido muchas cosas en mente."
            ],

            en: [
                "You are worried.",
                "You are tired.",
                "You have had many things on your mind."
            ]

        },

        consejos: {

            es: [
                "Tomar agua.",
                "Descansar en un lugar tranquilo.",
                "Respirar profundamente."
            ],

            en: [
                "Drink some water.",
                "Rest in a quiet place.",
                "Take deep breaths."
            ]

        }

    },


    garganta: {

        titulo: {
            es: "Garganta",
            en: "Throat"
        },

        imagen:
            "Autoconciencia/emocion-cuerpo/garganta.png",

        etiquetas: {

            es: [
                "Nudo",
                "Tensión",
                "Sensación extraña"
            ],

            en: [
                "Lump",
                "Tension",
                "Strange sensation"
            ]

        },

        texto: {

            es: [
                "Estás nervioso.",
                "Quieres expresar algo.",
                "Estás sintiendo una emoción intensa."
            ],

            en: [
                "You are nervous.",
                "You want to express something.",
                "You are feeling an intense emotion."
            ]

        },

        consejos: {

            es: [
                "Hablar con alguien de confianza.",
                "Respirar lentamente.",
                "Intentar poner en palabras lo que sientes."
            ],

            en: [
                "Talk to someone you trust.",
                "Breathe slowly.",
                "Try to put what you feel into words."
            ]

        }

    },


    pecho: {

        titulo: {
            es: "Pecho",
            en: "Chest"
        },

        imagen:
            "Autoconciencia/emocion-cuerpo/pecho.png",

        etiquetas: {

            es: [
                "Presión",
                "Nervios",
                "Corazón acelerado"
            ],

            en: [
                "Pressure",
                "Nervousness",
                "Fast heartbeat"
            ]

        },

        texto: {

            es: [
                "Algo te preocupa.",
                "Estás nervioso.",
                "Tu cuerpo está reaccionando a una situación."
            ],

            en: [
                "Something is worrying you.",
                "You are nervous.",
                "Your body is reacting to a situation."
            ]

        },

        consejos: {

            es: [
                "Respirar lentamente.",
                "Sentarte en un lugar tranquilo.",
                "Pedir ayuda si lo necesitas."
            ],

            en: [
                "Breathe slowly.",
                "Sit in a quiet place.",
                "Ask for help if you need it."
            ]

        }

    },


    estomago: {

        titulo: {
            es: "Estómago",
            en: "Stomach"
        },

        imagen:
            "Autoconciencia/emocion-cuerpo/estomago.png",

        etiquetas: {

            es: [
                "Mariposas",
                "Nudo",
                "Tensión"
            ],

            en: [
                "Butterflies",
                "Lump",
                "Tension"
            ]

        },

        texto: {

            es: [
                "Estás nervioso.",
                "Algo te preocupa.",
                "Estás sintiendo una emoción intensa."
            ],

            en: [
                "You are nervous.",
                "Something is worrying you.",
                "You are feeling an intense emotion."
            ]

        },

        consejos: {

            es: [
                "Respirar profundamente.",
                "Tomar un descanso.",
                "Hablar sobre lo que te preocupa."
            ],

            en: [
                "Take deep breaths.",
                "Take a break.",
                "Talk about what is worrying you."
            ]

        }

    },


    mano: {

        titulo: {
            es: "Manos",
            en: "Hands"
        },

        imagen:
            "Autoconciencia/emocion-cuerpo/manos.png",

        etiquetas: {

            es: [
                "Temblor",
                "Tensión",
                "Calor"
            ],

            en: [
                "Shaking",
                "Tension",
                "Warmth"
            ]

        },

        texto: {

            es: [
                "Estás nervioso.",
                "Estás emocionado.",
                "Tu cuerpo está reaccionando a una situación."
            ],

            en: [
                "You are nervous.",
                "You are excited.",
                "Your body is reacting to a situation."
            ]

        },

        consejos: {

            es: [
                "Mover suavemente las manos.",
                "Apretar un objeto suave.",
                "Hacer movimientos lentos."
            ],

            en: [
                "Move your hands gently.",
                "Squeeze a soft object.",
                "Make slow movements."
            ]

        }

    },


    pie: {

        titulo: {
            es: "Pie",
            en: "Foot"
        },

        imagen:
            "Autoconciencia/emocion-cuerpo/pie.png",

        etiquetas: {

            es: [
                "Inquietud",
                "Tensión",
                "Necesidad de moverte"
            ],

            en: [
                "Restlessness",
                "Tension",
                "Need to move"
            ]

        },

        texto: {

            es: [
                "Tienes mucha energía.",
                "Necesitas moverte un poco.",
                "Estás sintiendo inquietud."
            ],

            en: [
                "You have a lot of energy.",
                "You need to move a little.",
                "You are feeling restless."
            ]

        },

        consejos: {

            es: [
                "Caminar un poco.",
                "Estirar las piernas.",
                "Hacer una pausa para moverte."
            ],

            en: [
                "Walk a little.",
                "Stretch your legs.",
                "Take a break to move."
            ]

        }

    }

};


/* =====================================================
   OCULTAR TODOS LOS PANELES
===================================================== */

function ocultarTodosLosPaneles() {

    if (panelSientes)
        panelSientes.classList.remove("activo");

    if (panelNecesitas)
        panelNecesitas.classList.remove("activo");

    if (panelControl)
        panelControl.classList.remove("activo");

    if (panelRueda)
        panelRueda.classList.remove("activo");

}


/* =====================================================
   QUITAR TARJETAS ACTIVAS
===================================================== */

function quitarTarjetasActivas() {

    tarjetas.forEach(tarjeta => {

        tarjeta.classList.remove("activa");

    });

}


/* =====================================================
   REINICIAR ¿QUÉ SIENTES?
===================================================== */

function reiniciarSientes() {

    if (sientesInicial)
        sientesInicial.style.display = "flex";

    if (sientesInfo)
        sientesInfo.className = "sientes-info";

    puntosCuerpo.forEach(punto => {

        punto.classList.remove("activo");

    });

}


/* =====================================================
   ELEMENTOS ¿QUÉ NECESITAS?
===================================================== */

const emocionesNecesidad =
    document.querySelectorAll(
        ".opcion-necesidad-emocion"
    );


const necesitasPaso =
    document.getElementById(
        "necesitasPaso"
    );


const necesidadesOpciones =
    document.getElementById(
        "necesidadesOpciones"
    );


const resultadoNecesidad =
    document.getElementById(
        "resultadoNecesidad"
    );


const emocionElegida =
    document.getElementById(
        "emocionElegida"
    );


const necesidadElegida =
    document.getElementById(
        "necesidadElegida"
    );


const estrategiaIcono =
    document.getElementById(
        "estrategiaIcono"
    );


const estrategiaTitulo =
    document.getElementById(
        "estrategiaTitulo"
    );


const estrategiaDescripcion =
    document.getElementById(
        "estrategiaDescripcion"
    );


const btnNuevaEleccion =
    document.getElementById(
        "btnNuevaEleccion"
    );


/* =====================================================
   VARIABLES DE SELECCIÓN
===================================================== */

let emocionSeleccionadaNecesidad = "";

let necesidadSeleccionadaNecesidad = "";

/*
   Guardamos la tarjeta de emoción completa.
   Así podemos obtener su traducción cuando
   el usuario cambie de idioma.
*/

let opcionEmocionSeleccionadaNecesidad = null;


/* =====================================================
   ESTRATEGIAS
===================================================== */

const estrategiasNecesidad = {

    "Hablar": {

        icono: "🗣️",

        titulo: {
            es: "Hablar con alguien",
            en: "Talk to someone"
        },

        descripcion: {

            es: "Puedes buscar a una persona de confianza y contarle cómo te sientes. Hablar puede ayudarte a expresar lo que está pasando y sentirte acompañado.",

            en: "You can find someone you trust and tell them how you feel. Talking can help you express what is happening and feel supported."

        }

    },


    "Calmarme": {

        icono: "🌬️",

        titulo: {
            es: "Calmar tu cuerpo",
            en: "Calm your body"
        },

        descripcion: {

            es: "Puedes probar una respiración guiada, respirar lentamente o tomarte unos momentos para ayudar a tu cuerpo a relajarse.",

            en: "You can try guided breathing, breathe slowly, or take a few moments to help your body relax."

        }

    },


    "Algo que me ayude": {

        icono: "🧸",

        titulo: {
            es: "Usar algo que te ayude",
            en: "Use something that helps you"
        },

        descripcion: {

            es: "Puedes elegir un objeto sensorial o algo que te resulte agradable y cómodo para ayudarte a regular lo que estás sintiendo.",

            en: "You can choose a sensory object or something pleasant and comfortable to help you regulate what you are feeling."

        }

    },


    "Tomar una pausa": {

        icono: "⏸️",

        titulo: {
            es: "Tomar una pausa",
            en: "Take a break"
        },

        descripcion: {

            es: "Puedes alejarte por un momento de lo que está pasando y darte un poco de espacio antes de continuar.",

            en: "You can step away from what is happening for a moment and give yourself some space before continuing."

        }

    },


    "Pedir ayuda": {

        icono: "🤝",

        titulo: {
            es: "Pedir ayuda",
            en: "Ask for help"
        },

        descripcion: {

            es: "Puedes acercarte a una persona de confianza y decirle que necesitas apoyo. Pedir ayuda también es una forma de cuidarte.",

            en: "You can approach someone you trust and tell them you need support. Asking for help is also a way to take care of yourself."

        }

    },


    "Descansar un momento": {

        icono: "💧",

        titulo: {
            es: "Descansar un momento",
            en: "Rest for a moment"
        },

        descripcion: {

            es: "Puedes buscar un lugar tranquilo y darte unos minutos para descansar y recuperar energía.",

            en: "You can find a quiet place and give yourself a few minutes to rest and regain energy."

        }

    }

};


/* =====================================================
   REINICIAR ¿QUÉ NECESITAS?
===================================================== */

function reiniciarNecesitas() {

    emocionSeleccionadaNecesidad = "";

    necesidadSeleccionadaNecesidad = "";

    opcionEmocionSeleccionadaNecesidad = null;


    if (necesitasPaso)
        necesitasPaso.style.display = "block";


    if (necesidadesOpciones)
        necesidadesOpciones.style.display = "none";


    if (resultadoNecesidad)
        resultadoNecesidad.style.display = "none";


    if (emocionElegida)
        emocionElegida.textContent = "";


    if (necesidadElegida)
        necesidadElegida.textContent = "";

}


/* =====================================================
   MOSTRAR SECCIÓN
===================================================== */

function mostrarSeccion(
    seccion,
    tarjetaSeleccionada
) {

    if (!panel) return;

    panel.classList.add("visible");

    ocultarTodosLosPaneles();

    quitarTarjetasActivas();


    if (tarjetaSeleccionada) {

        tarjetaSeleccionada.classList.add("activa");

    }


    if (seccion === "sientes") {

        reiniciarSientes();

        if (panelSientes)
            panelSientes.classList.add("activo");

    }


    if (seccion === "necesitas") {

        reiniciarNecesitas();

        if (panelNecesitas)
            panelNecesitas.classList.add("activo");

    }


    if (seccion === "control") {

        if (panelControl)
            panelControl.classList.add("activo");

    }


    if (seccion === "rueda") {

        if (panelRueda)
            panelRueda.classList.add("activo");

        reiniciarRueda();

    }

}


/* =====================================================
   CLICK EN TARJETAS
===================================================== */

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        const seccion =
            tarjeta.dataset.seccion;

        mostrarSeccion(
            seccion,
            tarjeta
        );

    });

});


/* =====================================================
   CERRAR PANEL
===================================================== */

if (cerrarPanel) {

    cerrarPanel.addEventListener("click", () => {

        if (panel)
            panel.classList.remove("visible");

        ocultarTodosLosPaneles();

        quitarTarjetasActivas();

        reiniciarSientes();

        reiniciarNecesitas();

        reiniciarRueda();

    });

}


/* =====================================================
   CLICK EN LOS PUNTOS DEL CUERPO
===================================================== */

puntosCuerpo.forEach(punto => {

    punto.addEventListener("click", () => {

        const zona =
            punto.dataset.zona;

        const datos =
            informacionSientes[zona];

        if (!datos) return;


        puntosCuerpo.forEach(otroPunto => {

            otroPunto.classList.remove("activo");

        });


        punto.classList.add("activo");


        if (sientesInicial)
            sientesInicial.style.display = "none";


        if (sientesInfo) {

            sientesInfo.className =
                "sientes-info visible " + zona;

        }


        if (imagenZona) {

            imagenZona.src =
                datos.imagen;

            imagenZona.alt =
                datos.titulo[idiomaActual];

        }


        if (sientesTitulo)
            sientesTitulo.textContent =
                datos.titulo[idiomaActual];


        if (sientesEtiquetas) {

            crearInformacionSientes(
                sientesEtiquetas,
                datos.etiquetas[idiomaActual],
                "span"
            );

        }


        if (sientesTexto) {

            crearInformacionSientes(
                sientesTexto,
                datos.texto[idiomaActual],
                "li"
            );

        }


        if (sientesConsejos) {

            crearInformacionSientes(
                sientesConsejos,
                datos.consejos[idiomaActual],
                "li"
            );

        }

    });

});


/* =====================================================
   SELECCIONAR EMOCIÓN
===================================================== */

emocionesNecesidad.forEach(opcion => {

    opcion.addEventListener("click", () => {

        /*
           Guardamos la opción completa, no solamente
           el texto en el idioma actual.
        */

        opcionEmocionSeleccionadaNecesidad =
            opcion;


        /*
           Guardamos también el texto actual.
        */

        emocionSeleccionadaNecesidad =
            idiomaActual === "es"
                ? opcion.dataset.emocionEs
                : opcion.dataset.emocionEn;


        if (necesitasPaso)
            necesitasPaso.style.display = "none";


        if (necesidadesOpciones)
            necesidadesOpciones.style.display = "block";

    });

});


/* =====================================================
   SELECCIONAR NECESIDAD
===================================================== */

const opcionesNecesidad =
    document.querySelectorAll(
        ".opcion-necesidad"
    );


opcionesNecesidad.forEach(opcion => {

    opcion.addEventListener("click", () => {

        const claveNecesidad =
            opcion.dataset.necesidadEs;


        /*
           Guardar la opción seleccionada.
           Esto permite traducirla después.
        */

        necesidadSeleccionadaNecesidad =
            claveNecesidad;


        const necesidadSeleccionada =
            idiomaActual === "es"
                ? opcion.dataset.necesidadEs
                : opcion.dataset.necesidadEn;


        const estrategia =
            estrategiasNecesidad[claveNecesidad];


        if (!estrategia) return;


        /* =================================================
           EMOCIÓN SELECCIONADA
        ================================================= */

        if (
            emocionElegida &&
            opcionEmocionSeleccionadaNecesidad
        ) {

            emocionElegida.textContent =
                idiomaActual === "es"
                    ? opcionEmocionSeleccionadaNecesidad.dataset.emocionEs
                    : opcionEmocionSeleccionadaNecesidad.dataset.emocionEn;

        }


        /* =================================================
           NECESIDAD SELECCIONADA
        ================================================= */

        if (necesidadElegida)
            necesidadElegida.textContent =
                necesidadSeleccionada;


        /* =================================================
           ESTRATEGIA
        ================================================= */

        if (estrategiaIcono)
            estrategiaIcono.textContent =
                estrategia.icono;


        if (estrategiaTitulo)
            estrategiaTitulo.textContent =
                estrategia.titulo[idiomaActual];


        if (estrategiaDescripcion)
            estrategiaDescripcion.textContent =
                estrategia.descripcion[idiomaActual];


        if (necesidadesOpciones)
            necesidadesOpciones.style.display = "none";


        if (resultadoNecesidad)
            resultadoNecesidad.style.display = "block";

    });

});


/* =====================================================
   ELEGIR NUEVAMENTE
===================================================== */

if (btnNuevaEleccion) {

    btnNuevaEleccion.addEventListener("click", () => {

        reiniciarNecesitas();

    });

}


/* =====================================================
   CONTROL
===================================================== */

const preguntasControl = [

    {

        pregunta: {

            es: "Lo que otras personas piensan de mí",

            en: "What other people think about me"

        },

        correcta: "no",

        mensaje: {

            es: "Correcto. No podemos controlar lo que otras personas piensan, pero sí podemos decidir cómo reaccionar.",

            en: "Correct. We cannot control what other people think, but we can decide how to react."

        }

    },


    {

        pregunta: {

            es: "Lo que digo",

            en: "What I say"

        },

        correcta: "si",

        mensaje: {

            es: "Correcto. Podemos elegir nuestras palabras y pensar antes de hablar.",

            en: "Correct. We can choose our words and think before we speak."

        }

    },


    {

        pregunta: {

            es: "Cómo reacciono ante una situación",

            en: "How I react to a situation"

        },

        correcta: "si",

        mensaje: {

            es: "Correcto. No siempre podemos controlar lo que sentimos, pero podemos aprender a controlar cómo actuamos.",

            en: "Correct. We cannot always control what we feel, but we can learn to control how we act."

        }

    },


    {

        pregunta: {

            es: "Si otra persona cambia de opinión",

            en: "If another person changes their mind"

        },

        correcta: "influir",

        mensaje: {

            es: "Correcto. Puedes influir hablando o explicando tu punto de vista, pero no controlar completamente la decisión de otra persona.",

            en: "Correct. You can influence someone by talking or explaining your point of view, but you cannot completely control another person's decision."

        }

    }

];


let indiceControl = 0;

let controlBloqueado = false;


const controlPregunta =
    document.getElementById(
        "controlPregunta"
    );


const resultadoControl =
    document.getElementById(
        "resultadoControl"
    );


const respuestasControl =
    document.querySelectorAll(
        ".respuesta-control"
    );


function mostrarPreguntaControl() {

    if (!controlPregunta) return;

    controlPregunta.textContent =
        preguntasControl[indiceControl]
            .pregunta[idiomaActual];

}


respuestasControl.forEach(boton => {

    boton.addEventListener("click", () => {

        if (controlBloqueado)
            return;


        const respuesta =
            boton.dataset.respuesta;


        const preguntaActual =
            preguntasControl[indiceControl];


        if (
            respuesta ===
            preguntaActual.correcta
        ) {

            if (resultadoControl) {

                resultadoControl.textContent =
                    preguntaActual.mensaje[idiomaActual];

            }


            controlBloqueado = true;


            setTimeout(() => {

                indiceControl++;


                if (
                    indiceControl >=
                    preguntasControl.length
                ) {

                    indiceControl = 0;

                }


                mostrarPreguntaControl();


                if (resultadoControl) {

                    resultadoControl.textContent = "";

                }


                controlBloqueado = false;

            }, 1800);

        } else {

            if (resultadoControl) {

                resultadoControl.textContent =
                    idiomaActual === "es"
                        ? "Inténtalo otra vez. Piensa si puedes controlarlo completamente."
                        : "Try again. Think about whether you can completely control it.";

            }

        }

    });

});


mostrarPreguntaControl();


/* =====================================================
   RUEDA DE EMOCIONES
===================================================== */

const ruedaEmociones =
    document.getElementById(
        "ruedaEmociones"
    );


const btnGirarRueda =
    document.getElementById(
        "btnGirarRueda"
    );


const resultadoRueda =
    document.getElementById(
        "resultadoRueda"
    );


const emojiEmocion =
    document.getElementById(
        "resultadoEmoji"
    );


const tituloEmocion =
    document.getElementById(
        "tituloEmocion"
    );


const causasEmocion =
    document.getElementById(
        "causasEmocion"
    );


const cuerpoEmocion =
    document.getElementById(
        "cuerpoEmocion"
    );


const necesidadesEmocion =
    document.getElementById(
        "necesidadesEmocion"
    );


const mensajeFinalRueda =
    document.getElementById(
        "mensajeFinalRueda"
    );


/* =====================================================
   INFORMACIÓN DE LAS EMOCIONES
===================================================== */

const informacionEmociones = {

    Frustrado: {

        nombre: {
            es: "Frustrado",
            en: "Frustrated"
        },

        emoji: "😣",

        causas: {

            es: [
                "Algo no sale como esperaba",
                "No le entienden",
                "No puede hacer algo todavía"
            ],

            en: [
                "Something does not go as expected",
                "People do not understand them",
                "They cannot do something yet"
            ]

        },

        cuerpo: {

            es: [
                "Puede sentir tensión en el cuerpo",
                "Puede apretar la mandíbula",
                "Puede sentir necesidad de moverse"
            ],

            en: [
                "They may feel tension in their body",
                "They may clench their jaw",
                "They may feel the need to move"
            ]

        },

        necesidades: {

            es: [
                "Podría necesitar tomar una pausa",
                "Podría necesitar pedir ayuda",
                "Podría intentar hacerlo de otra manera"
            ],

            en: [
                "They might need to take a break",
                "They might need to ask for help",
                "They could try doing it another way"
            ]

        }

    },


    Feliz: {

        nombre: {
            es: "Feliz",
            en: "Happy"
        },

        emoji: "😊",

        causas: {

            es: [
                "Algo salió bien",
                "Está con alguien que quiere",
                "Hizo algo que disfruta"
            ],

            en: [
                "Something went well",
                "They are with someone they care about",
                "They did something they enjoy"
            ]

        },

        cuerpo: {

            es: [
                "Puede sonreír",
                "Puede sentir energía",
                "Puede sentir el cuerpo relajado"
            ],

            en: [
                "They may smile",
                "They may feel energetic",
                "They may feel their body relaxed"
            ]

        },

        necesidades: {

            es: [
                "Podría querer compartir su alegría",
                "Podría querer disfrutar el momento",
                "Podría querer guardar un buen recuerdo"
            ],

            en: [
                "They might want to share their happiness",
                "They might want to enjoy the moment",
                "They might want to keep a good memory"
            ]

        }

    },


    Triste: {

        nombre: {
            es: "Triste",
            en: "Sad"
        },

        emoji: "😢",

        causas: {

            es: [
                "Perdió algo importante",
                "Extraña a alguien",
                "Algo no salió bien"
            ],

            en: [
                "They lost something important",
                "They miss someone",
                "Something did not go well"
            ]

        },

        cuerpo: {

            es: [
                "Puede tener pocas ganas de moverse",
                "Puede sentir cansancio",
                "Puede sentir lágrimas o un nudo en la garganta"
            ],

            en: [
                "They may not feel like moving",
                "They may feel tired",
                "They may feel tears or a lump in their throat"
            ]

        },

        necesidades: {

            es: [
                "Podría necesitar hablar con alguien",
                "Podría necesitar sentirse acompañado",
                "Podría necesitar tomar un momento tranquilo"
            ],

            en: [
                "They might need to talk to someone",
                "They might need to feel supported",
                "They might need to take a quiet moment"
            ]

        }

    },


    Enojado: {

        nombre: {
            es: "Enojado",
            en: "Angry"
        },

        emoji: "😡",

        causas: {

            es: [
                "Algo le pareció injusto",
                "No le escucharon",
                "Algo no salió como quería"
            ],

            en: [
                "Something seemed unfair to them",
                "People did not listen to them",
                "Something did not go as they wanted"
            ]

        },

        cuerpo: {

            es: [
                "Puede sentir calor en el cuerpo",
                "Puede sentir tensión muscular",
                "Puede sentir el corazón acelerado"
            ],

            en: [
                "They may feel warmth in their body",
                "They may feel muscle tension",
                "They may feel their heart beating faster"
            ]

        },

        necesidades: {

            es: [
                "Podría necesitar tomar una pausa",
                "Podría necesitar calmar su cuerpo",
                "Podría necesitar expresar lo que siente"
            ],

            en: [
                "They might need to take a break",
                "They might need to calm their body",
                "They might need to express what they feel"
            ]

        }

    },


    Ansioso: {

        nombre: {
            es: "Ansioso",
            en: "Anxious"
        },

        emoji: "😟",

        causas: {

            es: [
                "No sabe qué va a pasar",
                "Tiene muchas cosas que hacer",
                "Está pensando demasiado"
            ],

            en: [
                "They do not know what will happen",
                "They have many things to do",
                "They are thinking too much"
            ]

        },

        cuerpo: {

            es: [
                "Puede sentir mariposas en el estómago",
                "Puede sentir el corazón acelerado",
                "Puede sentir tensión o inquietud"
            ],

            en: [
                "They may feel butterflies in their stomach",
                "They may feel their heart beating faster",
                "They may feel tension or restlessness"
            ]

        },

        necesidades: {

            es: [
                "Podría necesitar respirar",
                "Podría necesitar organizar sus pensamientos",
                "Podría necesitar hablar con alguien"
            ],

            en: [
                "They might need to breathe",
                "They might need to organize their thoughts",
                "They might need to talk to someone"
            ]

        }

    },


    Asustado: {

        nombre: {
            es: "Asustado",
            en: "Scared"
        },

        emoji: "😨",

        causas: {

            es: [
                "No conoce lo que va a pasar",
                "Algo le sorprendió",
                "Una situación le hizo sentir inseguro"
            ],

            en: [
                "They do not know what will happen",
                "Something surprised them",
                "A situation made them feel unsafe"
            ]

        },

        cuerpo: {

            es: [
                "Puede sentir el corazón acelerado",
                "Puede sentir tensión en el cuerpo",
                "Puede sentir ganas de alejarse"
            ],

            en: [
                "They may feel their heart beating faster",
                "They may feel tension in their body",
                "They may feel like moving away"
            ]

        },

        necesidades: {

            es: [
                "Podría necesitar sentirse seguro",
                "Podría necesitar estar con alguien de confianza",
                "Podría necesitar pedir ayuda"
            ],

            en: [
                "They might need to feel safe",
                "They might need to be with someone they trust",
                "They might need to ask for help"
            ]

        }

    }

};


/* =====================================================
   ORDEN DE LAS EMOCIONES
===================================================== */

const emocionesDisponibles = [

    "Frustrado",
    "Feliz",
    "Triste",
    "Enojado",
    "Ansioso",
    "Asustado"

];


/* =====================================================
   VARIABLES DE LA RUEDA
===================================================== */

let rotacionActualRueda = 0;

let ruedaGirando = false;

let emocionActualRueda = null;


/* =====================================================
   CREAR INFORMACIÓN
===================================================== */

function crearInformacion(
    contenedor,
    opciones
) {

    if (!contenedor) return;

    contenedor.innerHTML = "";


    opciones.forEach(opcion => {

        const elemento =
            document.createElement("li");


        elemento.textContent =
            opcion;


        contenedor.appendChild(
            elemento
        );

    });

}


/* =====================================================
   MOSTRAR EMOCIÓN
===================================================== */

function mostrarEmocion(nombre) {

    const datos =
        informacionEmociones[nombre];


    if (!datos) return;


    emocionActualRueda =
        nombre;


    if (emojiEmocion) {

        emojiEmocion.textContent =
            datos.emoji;

    }


    if (tituloEmocion) {

        tituloEmocion.textContent =
            datos.nombre[idiomaActual];

    }


    crearInformacion(
        causasEmocion,
        datos.causas[idiomaActual]
    );


    crearInformacion(
        cuerpoEmocion,
        datos.cuerpo[idiomaActual]
    );


    crearInformacion(
        necesidadesEmocion,
        datos.necesidades[idiomaActual]
    );


    if (mensajeFinalRueda) {

        mensajeFinalRueda.textContent =
            idiomaActual === "es"
                ? "Reconocer lo que una persona siente es un primer paso para entender qué necesita."
                : "Recognizing what a person feels is a first step toward understanding what they need.";

    }


    if (resultadoRueda) {

        resultadoRueda.classList.add("visible");


        setTimeout(() => {

            resultadoRueda.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 200);

    }

}


/* =====================================================
   REINICIAR RUEDA
===================================================== */

function reiniciarRueda() {

    ruedaGirando = false;

    emocionActualRueda = null;


    if (btnGirarRueda) {

        btnGirarRueda.disabled = false;

    }


    if (resultadoRueda) {

        resultadoRueda.classList.remove(
            "visible"
        );

    }


    if (ruedaEmociones) {

        ruedaEmociones.style.transition =
            "none";

        ruedaEmociones.style.transform =
            "rotate(0deg)";

    }


    rotacionActualRueda = 0;


    if (ruedaEmociones) {

        ruedaEmociones.offsetHeight;

        ruedaEmociones.style.transition =
            "transform 4s cubic-bezier(.17,.67,.12,.99)";

    }

}


/* =====================================================
   GIRAR RUEDA
===================================================== */

if (btnGirarRueda) {

    btnGirarRueda.addEventListener("click", () => {

        if (ruedaGirando)
            return;


        if (!ruedaEmociones)
            return;


        ruedaGirando = true;

        btnGirarRueda.disabled = true;


        const indice =
            Math.floor(
                Math.random() *
                emocionesDisponibles.length
            );


        const emocionSeleccionada =
            emocionesDisponibles[indice];


        const gradosPorEmocion = 60;


        const centroSeccion =
            indice *
            gradosPorEmocion +
            gradosPorEmocion / 2;


        const rotacionNormalizada =
            (
                (
                    rotacionActualRueda % 360
                ) + 360
            ) % 360;


        let giroNecesario =
            360 -
            centroSeccion -
            rotacionNormalizada;


        if (giroNecesario < 0) {

            giroNecesario += 360;

        }


        const vueltas = 5;


        const nuevaRotacion =
            rotacionActualRueda +
            vueltas * 360 +
            giroNecesario;


        rotacionActualRueda =
            nuevaRotacion;


        ruedaEmociones.style.transition =
            "transform 4s cubic-bezier(.17,.67,.12,.99)";


        ruedaEmociones.style.transform =
            `rotate(${nuevaRotacion}deg)`;


        setTimeout(() => {

            mostrarEmocion(
                emocionSeleccionada
            );


            ruedaGirando = false;

            btnGirarRueda.disabled = false;

        }, 4200);

    });

}


/* =====================================================
   ACTUALIZAR ELEMENTOS DINÁMICOS
   AL CAMBIAR IDIOMA
===================================================== */

function actualizarIdiomaDinamico() {

    /* =================================================
       CONTROL
    ================================================= */

    mostrarPreguntaControl();


    /* =================================================
       ACTUALIZAR ¿QUÉ SIENTES?
    ================================================= */

    const puntoActivo =
        document.querySelector(
            ".punto-cuerpo.activo"
        );


    if (puntoActivo) {

        const zona =
            puntoActivo.dataset.zona;


        const datos =
            informacionSientes[zona];


        if (datos) {

            if (imagenZona)
                imagenZona.alt =
                    datos.titulo[idiomaActual];


            if (sientesTitulo)
                sientesTitulo.textContent =
                    datos.titulo[idiomaActual];


            if (sientesEtiquetas) {

                crearInformacionSientes(
                    sientesEtiquetas,
                    datos.etiquetas[idiomaActual],
                    "span"
                );

            }


            if (sientesTexto) {

                crearInformacionSientes(
                    sientesTexto,
                    datos.texto[idiomaActual],
                    "li"
                );

            }


            if (sientesConsejos) {

                crearInformacionSientes(
                    sientesConsejos,
                    datos.consejos[idiomaActual],
                    "li"
                );

            }

        }

    }


    /* =================================================
       ACTUALIZAR RESULTADO DE ¿QUÉ NECESITAS?
    ================================================= */

    if (
        resultadoNecesidad &&
        resultadoNecesidad.style.display !== "none" &&
        necesidadSeleccionadaNecesidad
    ) {

        const estrategia =
            estrategiasNecesidad[
                necesidadSeleccionadaNecesidad
            ];


        if (estrategia) {

            /* -----------------------------------------
               ACTUALIZAR EMOCIÓN
            ----------------------------------------- */

            if (
                emocionElegida &&
                opcionEmocionSeleccionadaNecesidad
            ) {

                emocionElegida.textContent =
                    idiomaActual === "es"
                        ? opcionEmocionSeleccionadaNecesidad.dataset.emocionEs
                        : opcionEmocionSeleccionadaNecesidad.dataset.emocionEn;

            }


            /* -----------------------------------------
               ACTUALIZAR NECESIDAD
            ----------------------------------------- */

            if (necesidadElegida) {

                const opcionNecesidad =
                    document.querySelector(
                        `.opcion-necesidad[data-necesidad-es="${necesidadSeleccionadaNecesidad}"]`
                    );


                if (opcionNecesidad) {

                    necesidadElegida.textContent =
                        idiomaActual === "es"
                            ? opcionNecesidad.dataset.necesidadEs
                            : opcionNecesidad.dataset.necesidadEn;

                }

            }


            /* -----------------------------------------
               ACTUALIZAR TARJETA DERECHA
            ----------------------------------------- */

            if (estrategiaTitulo) {

                estrategiaTitulo.textContent =
                    estrategia.titulo[idiomaActual];

            }


            if (estrategiaDescripcion) {

                estrategiaDescripcion.textContent =
                    estrategia.descripcion[idiomaActual];

            }

        }

    }


    /* =================================================
       ACTUALIZAR RESULTADO DE LA RUEDA
    ================================================= */

    if (
        resultadoRueda &&
        resultadoRueda.classList.contains("visible") &&
        emocionActualRueda
    ) {

        mostrarEmocion(
            emocionActualRueda
        );

    }

}


/* =====================================================
   CREAR INFORMACIÓN DE SIENTES
===================================================== */

function crearInformacionSientes(
    contenedor,
    opciones,
    tipo
) {

    if (!contenedor) return;


    contenedor.innerHTML = "";


    opciones.forEach(opcion => {

        const elemento =
            document.createElement(tipo);


        elemento.textContent =
            opcion;


        if (tipo === "span") {

            elemento.className =
                "sientes-etiqueta";

        }


        contenedor.appendChild(
            elemento
        );

    });

}