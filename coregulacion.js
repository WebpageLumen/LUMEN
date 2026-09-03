/* =====================================================
   IDIOMA ACTUAL
===================================================== */

let idiomaActual =
    localStorage.getItem("idioma") || "es";


/* =====================================================
   TRADUCCIONES
===================================================== */

const traducciones = {

    es: {

        encabezado: "Co-regulación",

        descripcion:
            "La co-regulación es cuando otra persona te ayuda a sentir tranquilo cuando tus emociones son muy fuertes.",

        entendido: "Entendido",

        cerrar: "Cerrar",

        tarjetas: {

            1: {
                titulo: "Escuchar sin juzgar",
                texto:
                    "Presta atención a lo que la persona expresa sin interrumpir ni criticar. A veces, sentirse escuchado puede ayudar a recuperar la calma."
            },

            2: {
                titulo: "Dar tiempo para responder",
                texto:
                    "Cada persona necesita su propio tiempo para organizar lo que siente y piensa. Evita presionar y permite que pueda responder cuando esté preparada."
            },

            3: {
                titulo: "Hablar con un tono de voz tranquilo",
                texto:
                    "Utiliza una voz suave y tranquila. Un tono calmado puede ayudar a que la otra persona se sienta segura y pueda regular mejor sus emociones."
            },

            4: {
                titulo: "Acompañar a un lugar tranquilo",
                texto:
                    "Si el entorno resulta abrumador, puedes acompañar a la persona a un lugar con menos ruido, personas o estímulos."
            },

            5: {
                titulo: "Hacer preguntas sencillas",
                texto:
                    "Haz preguntas cortas y fáciles de responder. Esto puede ayudar a la persona a expresar lo que necesita sin sentirse presionada."
            },

            6: {
                titulo: "Validar la emoción",
                texto:
                    "Reconoce lo que la persona está sintiendo sin minimizarlo. Puedes demostrarle que entiendes que esa emoción es importante para ella."
            },

            7: {
                titulo: "Recordar estrategias que ya funcionan",
                texto:
                    "Recuerda aquellas estrategias que anteriormente le han ayudado a sentirse tranquila. Utilizar algo que ya conoce puede darle seguridad."
            },

            8: {
                titulo: "Tu presencia hace la diferencia",
                texto:
                    "Estar ahí, con paciencia y cariño, es un apoyo poderoso. No se trata de tener todas las respuestas, sino de caminar juntos."
            }

        }

    },


    en: {

        encabezado: "Co-regulation",

        descripcion:
            "Co-regulation is when another person helps you feel calm when your emotions are very strong.",

        entendido: "Got it",

        cerrar: "Close",

        tarjetas: {

            1: {
                titulo: "Listen without judging",
                texto:
                    "Pay attention to what the person is expressing without interrupting or criticizing. Sometimes, feeling heard can help them regain their calm."
            },

            2: {
                titulo: "Give time to respond",
                texto:
                    "Everyone needs their own time to organize what they feel and think. Avoid putting pressure on them and allow them to respond when they are ready."
            },

            3: {
                titulo: "Speak in a calm tone of voice",
                texto:
                    "Use a soft and calm voice. A calm tone can help the other person feel safe and better regulate their emotions."
            },

            4: {
                titulo: "Go to a quiet place",
                texto:
                    "If the environment feels overwhelming, you can accompany the person to a place with less noise, fewer people, or fewer stimuli."
            },

            5: {
                titulo: "Ask simple questions",
                texto:
                    "Ask short and easy-to-answer questions. This can help the person express what they need without feeling pressured."
            },

            6: {
                titulo: "Validate the emotion",
                texto:
                    "Recognize what the person is feeling without minimizing it. You can show them that you understand that their emotion is important to them."
            },

            7: {
                titulo: "Remember strategies that already work",
                texto:
                    "Remember the strategies that have helped the person feel calm before. Using something they already know can make them feel more secure."
            },

            8: {
                titulo: "Your presence makes a difference",
                texto:
                    "Being there with patience and care is powerful support. You do not need to have all the answers; you can simply walk alongside them."
            }

        }

    }

};


/* =====================================================
   ELEMENTOS
===================================================== */

const tarjetas =
    document.querySelectorAll(".tarjeta");

const modal =
    document.getElementById("modal");

const cerrarModal =
    document.getElementById("cerrarModal");

const botonEntendido =
    document.getElementById("botonEntendido");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalTexto =
    document.getElementById("modalTexto");

const modalImagen =
    document.getElementById("modalImagen");


/* =====================================================
   SELECTOR DE IDIOMA
===================================================== */

const languageDropdown =
    document.getElementById("languageDropdown");

const languageButton =
    document.getElementById("languageButton");

const banderaActual =
    document.getElementById("banderaActual");

const codigoIdioma =
    document.getElementById("codigoIdioma");

const opcionES =
    document.getElementById("opcionES");

const opcionEN =
    document.getElementById("opcionEN");


/* =====================================================
   ENCABEZADO
===================================================== */

const encabezado =
    document.querySelector(".encabezado-texto h1");

const descripcion =
    document.querySelector(".encabezado-texto p");


/* =====================================================
   TARJETA SELECCIONADA
===================================================== */

let tarjetaSeleccionada = null;


/* =====================================================
   ACTUALIZAR IDIOMA
===================================================== */

function actualizarIdioma() {

    const t =
        traducciones[idiomaActual];


    /* ENCABEZADO */

    if (encabezado) {
        encabezado.textContent =
            t.encabezado;
    }

    if (descripcion) {
        descripcion.textContent =
            t.descripcion;
    }


    /* BOTÓN ENTENDIDO */

    if (botonEntendido) {
        botonEntendido.textContent =
            t.entendido;
    }


    /* BOTÓN CERRAR */

    if (cerrarModal) {
        cerrarModal.setAttribute(
            "aria-label",
            t.cerrar
        );
    }


    /* TARJETAS */

    tarjetas.forEach(
        function(tarjeta, indice) {

            const numero =
                indice + 1;

            const datos =
                t.tarjetas[numero];

            if (!datos) {
                return;
            }

            const textoTarjeta =
                tarjeta.querySelector("span");

            if (textoTarjeta) {

                textoTarjeta.textContent =
                    datos.titulo;

            }

        }
    );


    /* MODAL ABIERTO */

    if (
        tarjetaSeleccionada &&
        modal &&
        modal.classList.contains("activo")
    ) {

        const numero =
            Array.from(tarjetas)
                .indexOf(tarjetaSeleccionada) + 1;

        const datos =
            t.tarjetas[numero];

        if (datos) {

            if (modalTitulo) {
                modalTitulo.textContent =
                    datos.titulo;
            }

            if (modalTexto) {
                modalTexto.textContent =
                    datos.texto;
            }

            if (modalImagen) {
                modalImagen.alt =
                    datos.titulo;
            }

        }

    }


    /* BANDERA */

    if (idiomaActual === "es") {

        if (banderaActual) {
            banderaActual.src =
                "img/español.webp";

            banderaActual.alt =
                "Español";
        }

        if (codigoIdioma) {
            codigoIdioma.textContent =
                "ES";
        }

        if (opcionES) {
            opcionES.classList.add("active");
        }

        if (opcionEN) {
            opcionEN.classList.remove("active");
        }

    } else {

        if (banderaActual) {
            banderaActual.src =
                "img/ingles.png";

            banderaActual.alt =
                "English";
        }

        if (codigoIdioma) {
            codigoIdioma.textContent =
                "EN";
        }

        if (opcionEN) {
            opcionEN.classList.add("active");
        }

        if (opcionES) {
            opcionES.classList.remove("active");
        }

    }


    /* LANG */

    document.documentElement.lang =
        idiomaActual;

}


/* =====================================================
   CAMBIAR IDIOMA
===================================================== */

function cambiarIdioma(idioma) {

    idiomaActual =
        idioma;


    /* GUARDAR IDIOMA */

    localStorage.setItem(
        "idioma",
        idiomaActual
    );


    actualizarIdioma();


    /* CERRAR DROPDOWN */

    if (languageDropdown) {
        languageDropdown.classList.remove(
            "active"
        );
    }

}


/* =====================================================
   ABRIR DROPDOWN
===================================================== */

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


/* =====================================================
   ESPAÑOL
===================================================== */

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


/* =====================================================
   INGLÉS
===================================================== */

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


/* =====================================================
   CERRAR DROPDOWN
===================================================== */

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


/* =====================================================
   ABRIR MODAL
===================================================== */

tarjetas.forEach(
    function(tarjeta, indice) {

        tarjeta.addEventListener(
            "click",
            function() {

                tarjetaSeleccionada =
                    tarjeta;


                const numero =
                    indice + 1;


                const datos =
                    traducciones[
                        idiomaActual
                    ].tarjetas[numero];


                if (!datos) {
                    return;
                }


                /* TÍTULO */

                if (modalTitulo) {
                    modalTitulo.textContent =
                        datos.titulo;
                }


                /* TEXTO */

                if (modalTexto) {
                    modalTexto.textContent =
                        datos.texto;
                }


                /* IMAGEN */

                const imagen =
                    tarjeta.dataset.imagen;


                if (
                    modalImagen &&
                    imagen &&
                    imagen.trim() !== ""
                ) {

                    modalImagen.src =
                        imagen;

                    modalImagen.alt =
                        datos.titulo;

                    modalImagen.style.display =
                        "block";

                } else if (modalImagen) {

                    modalImagen.removeAttribute(
                        "src"
                    );

                    modalImagen.style.display =
                        "none";

                }


                /* MOSTRAR MODAL */

                if (modal) {

                    modal.classList.add(
                        "activo"
                    );

                }

            }
        );

    }
);


/* =====================================================
   CERRAR MODAL
===================================================== */

function cerrarElModal() {

    if (modal) {

        modal.classList.remove(
            "activo"
        );

    }

    tarjetaSeleccionada = null;

}


/* BOTÓN X */

if (cerrarModal) {

    cerrarModal.addEventListener(
        "click",
        cerrarElModal
    );

}


/* BOTÓN ENTENDIDO */

if (botonEntendido) {

    botonEntendido.addEventListener(
        "click",
        cerrarElModal
    );

}


/* ESC */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            cerrarElModal();

        }

    }
);


/* =====================================================
   INICIAR
===================================================== */

actualizarIdioma();