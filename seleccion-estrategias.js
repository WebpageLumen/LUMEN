/* =====================================================
   ELEMENTOS DEL HTML
===================================================== */

const tituloEstrategia =
    document.getElementById("tituloEstrategia");

const numeroEstrategia =
    document.getElementById("numeroEstrategia");

const contenidoEstrategia =
    document.getElementById("contenidoEstrategia");


/* =====================================================
   SELECTOR DE IDIOMA
===================================================== */

const languageDropdown =
    document.getElementById("languageDropdown");

const languageButton =
    document.getElementById("languageButton");

const opcionES =
    document.getElementById("opcionES");

const opcionEN =
    document.getElementById("opcionEN");

const banderaActual =
    document.getElementById("banderaActual");

const codigoIdioma =
    document.getElementById("codigoIdioma");


/* =====================================================
   LEER ESTRATEGIA DESDE LA URL
===================================================== */

const parametros =
    new URLSearchParams(window.location.search);

const estrategia =
    parametros.get("estrategia");


/* =====================================================
   IDIOMA GUARDADO
===================================================== */

let idiomaActual =
    localStorage.getItem("idioma") || "es";


/* =====================================================
   INFORMACIÓN DE LAS ESTRATEGIAS
===================================================== */

const estrategias = {


    /* =================================================
       1. GROUNDING
    ================================================= */

    grounding: {

        numero: "1",

        es: {

            titulo: "Técnica 5-4-3-2-1 (Grounding)",

            contenido: `

                <div class="grounding-layout">

                    <div class="grounding-contenedor">


                        <!-- 5 -->

                        <div class="grounding-fila grounding-5">

                            <div class="grounding-numero">
                                5
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Cosas que puedes ver
                                </h2>

                                <p>
                                    Mira a tu alrededor e identifica
                                    cinco cosas que puedas ver.
                                </p>

                            </div>

                        </div>


                        <!-- 4 -->

                        <div class="grounding-fila grounding-4">

                            <div class="grounding-numero">
                                4
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Cosas que puedes tocar
                                </h2>

                                <p>
                                    Siente cuatro objetos o superficies
                                    que tengas cerca.
                                </p>

                            </div>

                        </div>


                        <!-- 3 -->

                        <div class="grounding-fila grounding-3">

                            <div class="grounding-numero">
                                3
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Cosas que puedes escuchar
                                </h2>

                                <p>
                                    Presta atención e identifica
                                    tres sonidos.
                                </p>

                            </div>

                        </div>


                        <!-- 2 -->

                        <div class="grounding-fila grounding-2">

                            <div class="grounding-numero">
                                2
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Cosas que puedes oler
                                </h2>

                                <p>
                                    Identifica dos olores
                                    que puedas percibir.
                                </p>

                            </div>

                        </div>


                        <!-- 1 -->

                        <div class="grounding-fila grounding-1">

                            <div class="grounding-numero">
                                1
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Cosa que puedes saborear
                                </h2>

                                <p>
                                    Presta atención a un sabor
                                    que puedas notar.
                                </p>

                            </div>

                        </div>


                    </div>


                    <div class="grounding-personaje">

                        <img
                            src="estrategias/seleccion-estrategias/niño-grounding.png"
                            alt="Niño realizando grounding"
                        >

                    </div>

                </div>


                <div class="mensaje-grounding">

                    Hazlo despacio.
                    No tienes que hacerlo perfecto.

                </div>

            `

        },


        en: {

            titulo: "5-4-3-2-1 Grounding Technique",

            contenido: `

                <div class="grounding-layout">

                    <div class="grounding-contenedor">


                        <!-- 5 -->

                        <div class="grounding-fila grounding-5">

                            <div class="grounding-numero">
                                5
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Things you can see
                                </h2>

                                <p>
                                    Look around you and identify
                                    five things you can see.
                                </p>

                            </div>

                        </div>


                        <!-- 4 -->

                        <div class="grounding-fila grounding-4">

                            <div class="grounding-numero">
                                4
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Things you can touch
                                </h2>

                                <p>
                                    Feel four objects or surfaces
                                    that are near you.
                                </p>

                            </div>

                        </div>


                        <!-- 3 -->

                        <div class="grounding-fila grounding-3">

                            <div class="grounding-numero">
                                3
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Things you can hear
                                </h2>

                                <p>
                                    Pay attention and identify
                                    three sounds.
                                </p>

                            </div>

                        </div>


                        <!-- 2 -->

                        <div class="grounding-fila grounding-2">

                            <div class="grounding-numero">
                                2
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    Things you can smell
                                </h2>

                                <p>
                                    Identify two smells
                                    that you can notice.
                                </p>

                            </div>

                        </div>


                        <!-- 1 -->

                        <div class="grounding-fila grounding-1">

                            <div class="grounding-numero">
                                1
                            </div>

                            <div class="grounding-texto">

                                <h2>
                                    One thing you can taste
                                </h2>

                                <p>
                                    Pay attention to a taste
                                    that you can notice.
                                </p>

                            </div>

                        </div>


                    </div>


                    <div class="grounding-personaje">

                        <img
                            src="estrategias/seleccion-estrategias/niño-grounding.png"
                            alt="Child doing grounding"
                        >

                    </div>

                </div>


                <div class="mensaje-grounding">

                    Take it slowly.
                    You don't have to do it perfectly.

                </div>

            `

        }

    },


    /* =================================================
       2. OBJETOS DE REGULACIÓN
    ================================================= */

    objetos: {

        numero: "2",

        es: {

            titulo: "Objetos de regulación",

            contenido: `

                <div class="objetos-grid">


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Pelota antiestrés
                        </h2>

                        <p>
                            Apretarla puede ayudar a liberar
                            tensión y mantener las manos ocupadas.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/pelota-antiestres.png"
                            alt="Pelota antiestrés"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-azul"
                    >

                        <h2>
                            Pop-it
                        </h2>

                        <p>
                            Presionar las burbujas puede ayudarte
                            a concentrarte y mantener tus manos ocupadas.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/pop-it.png"
                            alt="Pop-it"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-amarilla"
                    >

                        <h2>
                            Manta con peso
                        </h2>

                        <p>
                            La presión suave puede ayudarte
                            a sentirte cómodo y tranquilo.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/manta-con-peso.png"
                            alt="Manta con peso"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Peluche favorito
                        </h2>

                        <p>
                            Tener un peluche contigo puede
                            darte seguridad y acompañamiento.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/peluche-favorito.png"
                            alt="Peluche favorito"
                        >

                    </article>


                </div>


                <div class="mensaje-final">

                    Elige un objeto que te haga sentir cómodo
                    y úsalo de la manera que te resulte agradable.

                </div>

            `

        },


        en: {

            titulo: "Regulation Objects",

            contenido: `

                <div class="objetos-grid">


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Stress ball
                        </h2>

                        <p>
                            Squeezing it can help release
                            tension and keep your hands busy.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/pelota-antiestres.png"
                            alt="Stress ball"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-azul"
                    >

                        <h2>
                            Pop-it
                        </h2>

                        <p>
                            Pressing the bubbles can help you
                            concentrate and keep your hands busy.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/pop-it.png"
                            alt="Pop-it"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-amarilla"
                    >

                        <h2>
                            Weighted blanket
                        </h2>

                        <p>
                            Gentle pressure can help you
                            feel comfortable and calm.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/manta-con-peso.png"
                            alt="Weighted blanket"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Favorite stuffed animal
                        </h2>

                        <p>
                            Having a stuffed animal with you can
                            provide comfort and a sense of security.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/peluche-favorito.png"
                            alt="Favorite stuffed animal"
                        >

                    </article>


                </div>


                <div class="mensaje-final">

                    Choose an object that makes you feel comfortable
                    and use it in a way that feels pleasant to you.

                </div>

            `

        }

    },


    /* =================================================
       3. EXPRESA TU EMOCIÓN
    ================================================= */

    expresa: {

        numero: "3",

        es: {

            titulo: "Expresa tu emoción",

            contenido: `

                <div class="expresa-grid">


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Dibujar
                        </h2>

                        <p>
                            Dibuja lo que estás sintiendo.
                            No necesitas hacerlo perfecto.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/dibujar.png"
                            alt="Dibujar"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-azul"
                    >

                        <h2>
                            Pintar
                        </h2>

                        <p>
                            Usa colores, formas y trazos
                            para expresar cómo te sientes.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/pintar.png"
                            alt="Pintar"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-amarilla"
                    >

                        <h2>
                            Escribir
                        </h2>

                        <p>
                            Escribe lo que pasa por tu mente
                            para organizar tus pensamientos.
                        </p>

                        <img
                            id="imagenEscribir"
                            src="estrategias/seleccion-estrategias/escribir.png"
                            alt="Escribir"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Escribir palabras
                        </h2>

                        <p>
                            Describe con palabras aquello
                            que estás sintiendo.
                        </p>

                        <img
                            id="imagenPalabras"
                            src="estrategias/seleccion-estrategias/palabras.png"
                            alt="Escribir palabras"
                        >

                    </article>


                </div>


                <div class="mensaje-final">

                    No existe una forma correcta o incorrecta
                    de expresar lo que sientes.

                </div>

            `

        },


        en: {

            titulo: "Express Your Emotion",

            contenido: `

                <div class="expresa-grid">


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Drawing
                        </h2>

                        <p>
                            Draw what you are feeling.
                            You don't have to make it perfect.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/dibujar.png"
                            alt="Drawing"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-azul"
                    >

                        <h2>
                            Painting
                        </h2>

                        <p>
                            Use colors, shapes and strokes
                            to express how you feel.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/pintar.png"
                            alt="Painting"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-amarilla"
                    >

                        <h2>
                            Write
                        </h2>

                        <p>
                            Write what is on your mind
                            to organize your thoughts.
                        </p>

                        <img
                            id="imagenEscribir"
                            src="estrategias/seleccion-estrategias/write.png"
                            alt="Write"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Words
                        </h2>

                        <p>
                            Describe with words what
                            you are feeling.
                        </p>

                        <img
                            id="imagenPalabras"
                            src="estrategias/seleccion-estrategias/words.png"
                            alt="Words"
                        >

                    </article>


                </div>


                <div class="mensaje-final">

                    There is no right or wrong way
                    to express what you feel.

                </div>

            `

        }

    },


    /* =================================================
       4. CAMBIA EL AMBIENTE
    ================================================= */

    ambiente: {

        numero: "4",

        es: {

            titulo: "Cambia el ambiente",

            contenido: `

                <div class="ambiente-grid">


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Bajar el brillo
                            de la pantalla
                        </h2>

                        <p>
                            Menos luz brillante puede ayudarte
                            a sentirte más cómodo.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/brillo.png"
                            alt="Bajar el brillo de la pantalla"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-azul"
                    >

                        <h2>
                            Usar audífonos
                            con cancelación de ruido
                        </h2>

                        <p>
                            Pueden ayudar a reducir los sonidos
                            fuertes o molestos.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/audifonos.png"
                            alt="Audífonos con cancelación de ruido"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-amarilla"
                    >

                        <h2>
                            Alejarse de
                            lugares concurridos
                        </h2>

                        <p>
                            Tomar distancia de muchas personas
                            puede ayudarte a sentirte más tranquilo.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/alejarse.png"
                            alt="Alejarse de lugares concurridos"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Buscar una
                            habitación tranquila
                        </h2>

                        <p>
                            Un espacio tranquilo puede ayudarte
                            a relajarte y recuperar energía.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/habitacion.png"
                            alt="Habitación tranquila"
                        >

                    </article>


                </div>


                <div class="mensaje-final">

                    Si el ambiente te resulta incómodo,
                    busca pequeños cambios que puedan ayudarte
                    a sentirte más tranquilo.

                </div>

            `

        },


        en: {

            titulo: "Change Your Environment",

            contenido: `

                <div class="ambiente-grid">


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Lower the screen
                            brightness
                        </h2>

                        <p>
                            Less bright light can help you
                            feel more comfortable.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/brillo.png"
                            alt="Lower the screen brightness"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-azul"
                    >

                        <h2>
                            Use noise-canceling
                            headphones
                        </h2>

                        <p>
                            They can help reduce
                            loud or unpleasant sounds.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/audifonos.png"
                            alt="Noise-canceling headphones"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-amarilla"
                    >

                        <h2>
                            Move away from
                            crowded places
                        </h2>

                        <p>
                            Taking some distance from many people
                            can help you feel calmer.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/alejarse.png"
                            alt="Moving away from crowded places"
                        >

                    </article>


                    <article
                        class="tarjeta-informativa tarjeta-rosa"
                    >

                        <h2>
                            Find a
                            quiet room
                        </h2>

                        <p>
                            A quiet space can help you
                            relax and regain energy.
                        </p>

                        <img
                            src="estrategias/seleccion-estrategias/habitacion.png"
                            alt="Quiet room"
                        >

                    </article>


                </div>


                <div class="mensaje-final">

                    If the environment feels uncomfortable,
                    look for small changes that can help
                    you feel calmer.

                </div>

            `

        }

    }

};


/* =====================================================
   MOSTRAR LA ESTRATEGIA
===================================================== */

function mostrarEstrategia() {

    const datos =
        estrategias[estrategia];


    /* =============================================
       SI NO EXISTE
    ============================================== */

    if (!datos) {

        tituloEstrategia.textContent =
            idiomaActual === "en"
                ? "Strategy not found"
                : "Estrategia no encontrada";

        numeroEstrategia.textContent =
            "?";


        contenidoEstrategia.innerHTML = `

            <div class="error-estrategia">

                ${
                    idiomaActual === "en"
                        ? "We could not find this strategy."
                        : "No encontramos esta estrategia."
                }

                <br><br>

                ${
                    idiomaActual === "en"
                        ? "Go back to the Strategies section and select an option."
                        : "Regresa a la sección de Estrategias y selecciona una opción."
                }

            </div>

        `;

        return;
    }


    /* =============================================
       DATOS DEL IDIOMA ACTUAL
    ============================================== */

    const idioma =
        datos[idiomaActual];


    /* =============================================
       TÍTULO
    ============================================== */

    tituloEstrategia.textContent =
        idioma.titulo;


    /* =============================================
       NÚMERO
    ============================================== */

    numeroEstrategia.textContent =
        datos.numero;


    /* =============================================
       CONTENIDO
    ============================================== */

    contenidoEstrategia.innerHTML =
        idioma.contenido;

}


/* =====================================================
   ACTUALIZAR SELECTOR DE IDIOMA
===================================================== */

function actualizarSelectorIdioma() {

    if (idiomaActual === "en") {

        codigoIdioma.textContent =
            "EN";

        banderaActual.src =
            "ingles.png";

        banderaActual.alt =
            "English";

        opcionEN.classList.add("active");

        opcionES.classList.remove("active");

    } else {

        codigoIdioma.textContent =
            "ES";

        banderaActual.src =
            "español.webp";

        banderaActual.alt =
            "Español";

        opcionES.classList.add("active");

        opcionEN.classList.remove("active");

    }

}


/* =====================================================
   CAMBIAR IDIOMA
===================================================== */

function cambiarIdioma(idioma) {

    idiomaActual =
        idioma;


    /* GUARDAR EL IDIOMA */

    localStorage.setItem(
        "idioma",
        idioma
    );


    /* ACTUALIZAR LA PÁGINA */

    actualizarSelectorIdioma();

    mostrarEstrategia();

}


/* =====================================================
   ABRIR / CERRAR DROPDOWN
===================================================== */

languageButton.addEventListener(
    "click",
    function () {

        languageDropdown.classList.toggle(
            "active"
        );

    }
);


/* =====================================================
   ESPAÑOL
===================================================== */

opcionES.addEventListener(
    "click",
    function () {

        cambiarIdioma("es");

        languageDropdown.classList.remove(
            "active"
        );

    }
);


/* =====================================================
   INGLÉS
===================================================== */

opcionEN.addEventListener(
    "click",
    function () {

        cambiarIdioma("en");

        languageDropdown.classList.remove(
            "active"
        );

    }
);


/* =====================================================
   CERRAR DROPDOWN AL HACER CLICK AFUERA
===================================================== */

document.addEventListener(
    "click",
    function (evento) {

        if (
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


/* =====================================================
   INICIAR PÁGINA
===================================================== */

actualizarSelectorIdioma();

mostrarEstrategia();