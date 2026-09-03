window.onload = function () {

    /* =========================
       EMOCIONES
    ========================= */

    const emociones = {

        feliz: {
            mensajeES: "¡Qué bonito que hoy te sientas feliz! 💜 Sigue disfrutando este momento. Las emociones positivas también merecen celebrarse.",
            mensajeEN: "How wonderful that you're feeling happy today! 💜 Keep enjoying this moment. Positive emotions deserve to be celebrated too.",

            altES: "Feliz",
            altEN: "Happy",

            imagenES: "img/emociones/feliz.png",
            imagenEN: "img/emociones/happy.png",

            numa: "img/numa/numa-alegre.png"
        },

        contento: {
            mensajeES: "¡Me alegra saber que estás contento/a! Sigue disfrutando tu día y recuerda celebrar tus logros, por pequeños que sean.",
            mensajeEN: "I'm glad to know you're feeling good! Keep enjoying your day and remember to celebrate your achievements, no matter how small they may be.",

            altES: "Contento",
            altEN: "Feeling good",

            imagenES: "img/emociones/contento.png",
            imagenEN: "img/emociones/glad.png",

            numa: "img/numa/numa-contenta.png"
        },

        tranquilo: {
            mensajeES: "¡Qué bonito encontrar un momento de calma! Disfrútalo y recuerda que siempre puedes volver aquí cuando lo necesites.",
            mensajeEN: "It's wonderful to find a moment of calm! Enjoy it, and remember that you can always come back here whenever you need it.",

            altES: "Tranquilo",
            altEN: "Calm",

            imagenES: "img/emociones/tranquilo.png",
            imagenEN: "img/emociones/calm.png",

            numa: "img/numa/numa-tranquila.png"
        },

        triste: {
            mensajeES: "Está bien sentirse triste algunas veces. Tómate tu tiempo y, cuando estés listo, descubre algunas herramientas que hemos preparado para acompañarte.",
            mensajeEN: "It's okay to feel sad sometimes. Take your time, and when you're ready, explore some tools we've prepared to support you.",

            altES: "Triste",
            altEN: "Sad",

            imagenES: "img/emociones/triste.png",
            imagenEN: "img/emociones/sad.png",

            numa: "img/numa/numa-triste.png"
        },

        enojado: {
            mensajeES: "No tienes que resolverlo todo de inmediato. Tómate un momento y descubre algunas opciones que podrían ayudarte.",
            mensajeEN: "You don't have to solve everything right away. Take a moment and explore some options that might help.",

            altES: "Enojado",
            altEN: "Angry",

            imagenES: "img/emociones/enojado.png",
            imagenEN: "img/emociones/angry.png",

            numa: "img/numa/numa-enojada.png"
        }

    };


    /* =========================
       IDIOMA ACTUAL
    ========================= */

    let idiomaActual =
        localStorage.getItem("idioma") || "es";


    /* =========================
       TRADUCCIONES
    ========================= */

    const traducciones = {

        es: {

            regulacion: "Regulación emocional",

            descripcion:
                "Aquí encontrarás actividades y recursos diseñados para ayudarte a identificar, comprender y gestionar tus emociones, promoviendo el bienestar y el equilibrio emocional a tu propio ritmo.",

            emocionDia: "Emoción del día",

            coregulacion: "Co-regulación",

            coregulacionTexto:
                "Aprende estrategias para acompañar y apoyar el manejo de las emociones.",

            respiracion: "Respiración guiada",

            estiramientos: "Estiramientos",

            empezar: "Empezar",

            autoconciencia: "Autoconciencia",

            estrategias: "Estrategias"

        },

        en: {

            regulacion: "Emotional regulation",

            descripcion:
                "Here you will find activities and resources designed to help you identify, understand and manage your emotions, promoting well-being and emotional balance at your own pace.",

            emocionDia: "Emotion of the day",

            coregulacion: "Co-regulation",

            coregulacionTexto:
                "Learn strategies to support and help manage emotions.",

            respiracion: "Guided breathing",

            estiramientos: "Stretching",

            empezar: "Start",

            autoconciencia: "Self-awareness",

            estrategias: "Strategies"

        }

    };


    /* =========================
       ELEMENTOS DEL HTML
    ========================= */

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

    const textoRegulacion =
        document.getElementById("textoRegulacion");

    const descripcionRegulacion =
        document.getElementById("descripcionRegulacion");

    const textoEmocionDia =
        document.getElementById("textoEmocionDia");

    const modoCalma =
        document.getElementById("modoCalma");

    const textoCoregulacion =
        document.getElementById("textoCoregulacion");

    const textoCoregulacionDescripcion =
        document.getElementById("textoCoregulacionDescripcion");

    const textoRespiracion =
        document.getElementById("textoRespiracion");

    const textoEstiramientos =
        document.getElementById("textoEstiramientos");

    const textoAutoconciencia =
        document.getElementById("textoAutoconciencia");

    const textoEstrategias =
        document.getElementById("textoEstrategias");

    const botonesEmpezar =
        document.querySelectorAll(".btn-empezar");

    const banner =
        document.getElementById("bannerPrincipal");


    /* =========================
       ESTADO DEL MODO CALMA
    ========================= */

    let modoCalmaActivo =
        localStorage.getItem("modoCalma") === "activo";


    /* =========================
       ACTUALIZAR ICONO
    ========================= */

    function actualizarIconoModoCalma() {

        if (modoCalmaActivo) {

            modoCalma.textContent = "🌙";

            modoCalma.setAttribute(
                "aria-label",
                "Desactivar modo calma"
            );

        } else {

            modoCalma.textContent = "☀️";

            modoCalma.setAttribute(
                "aria-label",
                "Activar modo calma"
            );

        }

    }


    /* =========================
       APLICAR MODO CALMA
    ========================= */

    function aplicarModoCalma() {

        if (modoCalmaActivo) {

            document.body.classList.add(
                "modo-calma"
            );

            if (banner) {

                banner.src =
                    "img/banner-calma.png";

            }

        } else {

            document.body.classList.remove(
                "modo-calma"
            );

            if (banner) {

                banner.src =
                    "img/Banner.png";

            }

        }

        actualizarIconoModoCalma();

    }


    /* =========================
       CAMBIAR TEXTOS
    ========================= */

    function actualizarTextos() {

        const t =
            traducciones[idiomaActual];

        textoRegulacion.textContent =
            t.regulacion;

        descripcionRegulacion.textContent =
            t.descripcion;

        textoEmocionDia.textContent =
            t.emocionDia;

        textoCoregulacion.textContent =
            t.coregulacion;

        textoCoregulacionDescripcion.textContent =
            t.coregulacionTexto;

        textoRespiracion.textContent =
            t.respiracion;

        textoEstiramientos.textContent =
            t.estiramientos;

        textoAutoconciencia.textContent =
            t.autoconciencia;

        textoEstrategias.textContent =
            t.estrategias;

        botonesEmpezar.forEach(function (boton) {

            boton.textContent =
                t.empezar;

        });

        actualizarIconoModoCalma();

    }


    /* =========================
       CAMBIAR IMÁGENES
    ========================= */

    function actualizarImagenesEmociones() {

        const tarjetas =
            document.querySelectorAll(
                ".tarjeta-emocion"
            );

        tarjetas.forEach(function (tarjeta) {

            const emocion =
                tarjeta.dataset.emocion;

            const imagen =
                tarjeta.querySelector(
                    ".imagen-emocion"
                );

            if (
                !imagen ||
                !emociones[emocion]
            ) {
                return;
            }

            if (idiomaActual === "es") {

                imagen.src =
                    emociones[emocion].imagenES;

                imagen.alt =
                    emociones[emocion].altES;

            } else {

                imagen.src =
                    emociones[emocion].imagenEN;

                imagen.alt =
                    emociones[emocion].altEN;

            }

        });

    }


    /* =========================
       ACTUALIZAR SELECTOR
    ========================= */

    function actualizarSelectorIdioma() {

        if (idiomaActual === "es") {

            banderaActual.src =
                "img/español.webp";

            banderaActual.alt =
                "Español";

            codigoIdioma.textContent =
                "ES";

            opcionES.classList.add("active");

            opcionEN.classList.remove("active");

        } else {

            banderaActual.src =
                "img/ingles.png";

            banderaActual.alt =
                "English";

            codigoIdioma.textContent =
                "EN";

            opcionEN.classList.add("active");

            opcionES.classList.remove("active");

        }

    }


    /* =========================
       CAMBIAR IDIOMA
    ========================= */

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

        actualizarTextos();

        actualizarImagenesEmociones();

        actualizarSelectorIdioma();

        document.documentElement.lang =
            idioma;

        languageDropdown.classList.remove(
            "active"
        );

    }


    /* =========================
       DROPDOWN
    ========================= */

    languageButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            languageDropdown.classList.toggle(
                "active"
            );

        }
    );


    opcionES.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            cambiarIdioma("es");

        }
    );


    opcionEN.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            cambiarIdioma("en");

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            if (
                !languageDropdown.contains(
                    event.target
                )
            ) {

                languageDropdown.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =========================
       TARJETAS DE EMOCIONES
    ========================= */

    const tarjetas =
        document.querySelectorAll(
            ".tarjeta-emocion"
        );


    tarjetas.forEach(function (tarjeta) {

        tarjeta.addEventListener(
            "click",
            function () {

                const emocion =
                    this.dataset.emocion;

                const datos =
                    emociones[emocion];

                if (!datos) {
                    return;
                }

                if (idiomaActual === "es") {

                    document.getElementById(
                        "textoNuma"
                    ).textContent =
                        datos.mensajeES;

                    document.getElementById(
                        "imagenNuma"
                    ).alt =
                        datos.altES;

                } else {

                    document.getElementById(
                        "textoNuma"
                    ).textContent =
                        datos.mensajeEN;

                    document.getElementById(
                        "imagenNuma"
                    ).alt =
                        datos.altEN;

                }

                document.getElementById(
                    "imagenNuma"
                ).src =
                    datos.numa;

                document.getElementById(
                    "modalNuma"
                ).style.display =
                    "flex";

            }
        );

    });


    /* =========================
       MODO CALMA
    ========================= */

    modoCalma.addEventListener(
        "click",
        function () {

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


    /* =========================
       INICIAR PÁGINA
    ========================= */

    document.documentElement.lang =
        idiomaActual;

    actualizarTextos();

    actualizarImagenesEmociones();

    actualizarSelectorIdioma();

    aplicarModoCalma();

};


/* =========================
   CERRAR MODAL
========================= */

function cerrarModal() {

    document.getElementById(
        "modalNuma"
    ).style.display =
        "none";

}