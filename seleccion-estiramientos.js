/* ==========================
   INFORMACIÓN DE LOS
   ESTIRAMIENTOS
========================== */

const ejercicios = {

    brazos: {
        carpeta: "est-brazos",
        es: {
            titulo: "BRAZOS",
            descripcion: "Este estiramiento ayuda a relajar tus brazos y hombros.",
            tip: "Tip de Numa: Estira suavemente y evita forzar los brazos. Respira profundo mientras mantienes la posición.",
            pasos: [
                { titulo: "Extiende un brazo hacia el frente.", descripcion: "Llévalo recto frente a tu pecho." },
                { titulo: "Sostén el brazo por el codo.", descripcion: "Siente suavemente el estiramiento." },
                { titulo: "Mantén la posición y respira.", descripcion: "Relájate y suelta lentamente." }
            ]
        },
        en: {
            titulo: "ARMS",
            descripcion: "This stretch helps relax your arms and shoulders.",
            tip: "Numa's tip: Stretch gently and avoid forcing your arms. Take a deep breath while holding the position.",
            pasos: [
                { titulo: "Extend one arm forward.", descripcion: "Keep it straight in front of your chest." },
                { titulo: "Hold your arm by the elbow.", descripcion: "Gently feel the stretch." },
                { titulo: "Hold the position and breathe.", descripcion: "Relax and slowly release." }
            ]
        }
    },

    cuello: {
        carpeta: "est-cuello",
        es: {
            titulo: "CUELLO",
            descripcion: "Este estiramiento ayuda a relajar el cuello y liberar la tensión.",
            tip: "Tip de Numa: Mueve el cuello lentamente y respira con calma. Evita hacer movimientos bruscos.",
            pasos: [
                { titulo: "Inclina la cabeza hacia un lado.", descripcion: "Acerca suavemente la oreja al hombro." },
                { titulo: "Mantén la posición.", descripcion: "Respira lento y siente cómo se relaja el cuello." },
                { titulo: "Cambia de lado.", descripcion: "Realiza el movimiento con suavidad." }
            ]
        },
        en: {
            titulo: "NECK",
            descripcion: "This stretch helps relax your neck and release tension.",
            tip: "Numa's tip: Move your neck slowly and breathe calmly. Avoid sudden movements.",
            pasos: [
                { titulo: "Tilt your head to one side.", descripcion: "Gently bring your ear toward your shoulder." },
                { titulo: "Hold the position.", descripcion: "Breathe slowly and feel your neck relax." },
                { titulo: "Switch sides.", descripcion: "Perform the movement gently." }
            ]
        }
    },

    espalda: {
        carpeta: "est-espalda",
        es: {
            titulo: "ESPALDA",
            descripcion: "Este estiramiento ayuda a liberar la tensión y relajar la espalda.",
            tip: "Tip de Numa: Mantén la espalda relajada y evita estirarte con demasiada fuerza. Respira lentamente.",
            pasos: [
                { titulo: "Lleva los brazos hacia el frente.", descripcion: "Entrelaza las manos y estira suavemente." },
                { titulo: "Empuja las manos hacia adelante.", descripcion: "Siente cómo se estira la parte superior de la espalda." },
                { titulo: "Mantén la posición y respira.", descripcion: "Relaja los hombros y vuelve lentamente." }
            ]
        },
        en: {
            titulo: "BACK",
            descripcion: "This stretch helps release tension and relax your back.",
            tip: "Numa's tip: Keep your back relaxed and avoid stretching too forcefully. Breathe slowly.",
            pasos: [
                { titulo: "Bring your arms forward.", descripcion: "Interlace your hands and stretch gently." },
                { titulo: "Push your hands forward.", descripcion: "Feel the stretch in your upper back." },
                { titulo: "Hold the position and breathe.", descripcion: "Relax your shoulders and slowly return." }
            ]
        }
    },

    piernas: {
        carpeta: "est-piernas",
        es: {
            titulo: "PIERNAS",
            descripcion: "Este estiramiento ayuda a relajar las piernas y mejorar la flexibilidad.",
            tip: "Tip de Numa: Estira lentamente y no fuerces las piernas. Mantén una respiración tranquila.",
            pasos: [
                { titulo: "Extiende una pierna hacia el frente.", descripcion: "Mantén la pierna cómoda y relajada." },
                { titulo: "Inclina el cuerpo suavemente.", descripcion: "Acércate poco a poco hacia la pierna." },
                { titulo: "Mantén la posición y respira.", descripcion: "Vuelve lentamente y cambia de pierna." }
            ]
        },
        en: {
            titulo: "LEGS",
            descripcion: "This stretch helps relax your legs and improve flexibility.",
            tip: "Numa's tip: Stretch slowly and do not force your legs. Keep a calm and steady breath.",
            pasos: [
                { titulo: "Extend one leg forward.", descripcion: "Keep your leg comfortable and relaxed." },
                { titulo: "Lean your body gently.", descripcion: "Slowly move closer toward your leg." },
                { titulo: "Hold the position and breathe.", descripcion: "Slowly return and switch legs." }
            ]
        }
    },

    "cuerpo-completo": {
        carpeta: "est-cuerpocompleto",
        es: {
            titulo: "CUERPO COMPLETO",
            descripcion: "Este estiramiento ayuda a activar y relajar todo tu cuerpo.",
            tip: "Tip de Numa: Muévete con suavidad, respira profundo y escucha a tu cuerpo mientras te estiras.",
            pasos: [
                { titulo: "Levanta los brazos hacia arriba.", descripcion: "Estira el cuerpo suavemente hacia el techo." },
                { titulo: "Alarga todo el cuerpo.", descripcion: "Mantén los hombros relajados y respira." },
                { titulo: "Mantén la posición y suelta.", descripcion: "Baja los brazos lentamente y relájate." }
            ]
        },
        en: {
            titulo: "FULL BODY",
            descripcion: "This stretch helps activate and relax your whole body.",
            tip: "Numa's tip: Move gently, take deep breaths, and listen to your body as you stretch.",
            pasos: [
                { titulo: "Raise your arms upward.", descripcion: "Gently stretch your body toward the ceiling." },
                { titulo: "Lengthen your whole body.", descripcion: "Keep your shoulders relaxed and breathe." },
                { titulo: "Hold the position and release.", descripcion: "Lower your arms slowly and relax." }
            ]
        }
    }
};


/* ==========================
   IDIOMA
========================== */

let idiomaActual = localStorage.getItem("idioma") || "es";


/* ==========================
   OBTENER ESTIRAMIENTO
========================== */

function obtenerEstiramientoSeleccionado() {
    const claves = ["estiramientoSeleccionado", "ejercicioSeleccionado", "estiramiento", "ejercicio"];

    for (let i = 0; i < claves.length; i++) {
        const valor = localStorage.getItem(claves[i]);

        if (valor) {
            if (ejercicios[valor]) {
                return valor;
            }

            try {
                const objeto = JSON.parse(valor);

                if (objeto && objeto.estiramiento && ejercicios[objeto.estiramiento]) {
                    return objeto.estiramiento;
                }

                if (objeto && objeto.ejercicio && ejercicios[objeto.ejercicio]) {
                    return objeto.ejercicio;
                }
            } catch (error) {
                // Silenciar error de parseo
            }
        }
    }

    const parametros = new URLSearchParams(window.location.search);
    const ejercicioURL = parametros.get("ejercicio");

    if (ejercicioURL && ejercicios[ejercicioURL]) {
        return ejercicioURL;
    }

    return "brazos";
}

const ejercicioSeleccionado = obtenerEstiramientoSeleccionado();
const ejercicioActual = ejercicios[ejercicioSeleccionado];


/* ==========================
   ELEMENTOS DEL HTML
========================== */

const languageDropdown = document.getElementById("languageDropdown");
const languageButton = document.getElementById("languageButton");
const banderaActual = document.getElementById("banderaActual");
const codigoIdioma = document.getElementById("codigoIdioma");
const opcionES = document.getElementById("opcionES");
const opcionEN = document.getElementById("opcionEN");
const botonCalma = document.getElementById("modoCalma");
const tituloEjercicio = document.getElementById("tituloEjercicio");
const descripcionEjercicio = document.getElementById("descripcionEjercicio");
const textoDuracion = document.getElementById("textoDuracion");
const tiempoEjercicio = document.getElementById("tiempoEjercicio");
const tipEjercicio = document.getElementById("tipEjercicio");
const botonEmpezar = document.getElementById("btnEmpezar");
const botonPausa = document.getElementById("btnPausa");
const botonReiniciar = document.getElementById("btnReiniciar");
const controlesEjercicio = document.querySelector(".controles-ejercicio");


/* ==========================
   IMÁGENES
========================== */

const imagenEjercicio = document.getElementById("imagenEjercicio");
const imagenPaso1 = document.getElementById("imagenPaso1");
const imagenPaso2 = document.getElementById("imagenPaso2");
const imagenPaso3 = document.getElementById("imagenPaso3");
const imagenNumaTip = document.querySelector(".numa-tip");


/* ==========================
   PASOS
========================== */

const pasos = [
    document.getElementById("paso1"),
    document.getElementById("paso2"),
    document.getElementById("paso3")
];


/* ==========================
   VARIABLES
========================== */

let temporizador = null;
let tiempoRestante = 20;
let ejercicioEnProceso = false;
let ejercicioPausado = false;


/* ==========================
   IMÁGENES
========================== */

function actualizarImagenes() {
    if (!ejercicioActual) {
        return;
    }

    document.body.classList.remove("estiramiento-piernas", "estiramiento-cuerpo-completo");

    if (ejercicioSeleccionado === "piernas") {
        document.body.classList.add("estiramiento-piernas");
    }

    if (ejercicioSeleccionado === "cuerpo-completo") {
        document.body.classList.add("estiramiento-cuerpo-completo");
    }

    const carpeta = ejercicioActual.carpeta;

    // RUTA: Imagenes/[carpeta]/
    const rutaBase = "Imagenes/" + carpeta + "/";

    imagenEjercicio.src = rutaBase + "central.png";
    imagenPaso1.src = rutaBase + "paso1.png";
    imagenPaso2.src = rutaBase + "paso2.png";
    imagenPaso3.src = rutaBase + "paso3.png";

    imagenNumaTip.src = "Imagenes/tip.png";
}


/* ==========================
   MOSTRAR INFORMACIÓN
========================== */

function mostrarEjercicio() {
    if (!ejercicioActual) {
        return;
    }

    actualizarImagenes();

    const datos = ejercicioActual[idiomaActual];

    tituloEjercicio.textContent = datos.titulo;
    descripcionEjercicio.textContent = datos.descripcion;

    textoDuracion.textContent = idiomaActual === "es" ? "Duración" : "Duration";

    if (!ejercicioEnProceso) {
        tiempoEjercicio.textContent = idiomaActual === "es" ? "20 segundos" : "20 seconds";
    }

    tipEjercicio.textContent = datos.tip;

    document.getElementById("tituloPaso1").textContent = datos.pasos[0].titulo;
    document.getElementById("descripcionPaso1").textContent = datos.pasos[0].descripcion;

    document.getElementById("tituloPaso2").textContent = datos.pasos[1].titulo;
    document.getElementById("descripcionPaso2").textContent = datos.pasos[1].descripcion;

    document.getElementById("tituloPaso3").textContent = datos.pasos[2].titulo;
    document.getElementById("descripcionPaso3").textContent = datos.pasos[2].descripcion;
}


/* ==========================
   CONTROLES
========================== */

function actualizarControles() {
    if (!ejercicioEnProceso) {
        botonEmpezar.textContent = idiomaActual === "es" ? "▶ Empezar" : "▶ Start";
    } else {
        botonEmpezar.textContent = idiomaActual === "es" ? "⏳ En progreso..." : "⏳ In progress...";
    }

    textoDuracion.textContent = idiomaActual === "es" ? "Duración" : "Duration";

    if (!ejercicioEnProceso) {
        tiempoEjercicio.textContent = idiomaActual === "es" ? "20 segundos" : "20 seconds";
    }
}


/* ==========================
   SELECTOR IDIOMA
========================== */

function actualizarSelector() {
    if (idiomaActual === "es") {
        banderaActual.src = "Imagenes/español.webp";
        banderaActual.alt = "Español";
        codigoIdioma.textContent = "ES";

        opcionES.classList.add("active");
        opcionEN.classList.remove("active");
    } else {
        banderaActual.src = "Imagenes/ingles.png";
        banderaActual.alt = "English";
        codigoIdioma.textContent = "EN";

        opcionEN.classList.add("active");
        opcionES.classList.remove("active");
    }
}


/* ==========================
   CAMBIAR IDIOMA
========================== */

function cambiarIdioma(idioma) {
    idiomaActual = idioma;

    localStorage.setItem("idioma", idiomaActual);

    document.documentElement.lang = idiomaActual;

    mostrarEjercicio();
    actualizarControles();
    actualizarSelector();

    languageDropdown.classList.remove("active");
}


/* ==========================
   DROPDOWN
========================== */

languageButton.addEventListener("click", function(event) {
    event.stopPropagation();
    languageDropdown.classList.toggle("active");
});

opcionES.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    cambiarIdioma("es");
});

opcionEN.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    cambiarIdioma("en");
});

document.addEventListener("click", function() {
    languageDropdown.classList.remove("active");
});


/* ==========================
   MODO CALMA
========================== */

function actualizarModoCalma() {
    const modoCalmaActivado = localStorage.getItem("modoCalma") === "true";

    if (modoCalmaActivado) {
        document.body.classList.add("modo-calma");
    } else {
        document.body.classList.remove("modo-calma");
    }

    if (botonCalma) {
        botonCalma.textContent = modoCalmaActivado ? "🌙" : "☀️";
    }
}

if (botonCalma) {
    botonCalma.addEventListener("click", function() {
        const activado = document.body.classList.toggle("modo-calma");

        localStorage.setItem("modoCalma", activado);

        botonCalma.textContent = activado ? "🌙" : "☀️";
    });
}


/* ==========================
   INICIAR EJERCICIO
========================== */

botonEmpezar.addEventListener("click", function() {
    if (ejercicioEnProceso) {
        return;
    }

    ejercicioEnProceso = true;
    ejercicioPausado = false;
    tiempoRestante = 20;

    botonEmpezar.textContent = idiomaActual === "es" ? "⏳ En progreso..." : "⏳ In progress...";

    textoDuracion.style.display = "none";
    tiempoEjercicio.textContent = tiempoRestante + " s";
    controlesEjercicio.style.display = "flex";
    botonPausa.textContent = "⏸";

    pasos.forEach(function(paso) {
        paso.classList.remove("activo");
    }
);


/* ==========================
   TEMPORIZADOR
========================== */

function iniciarTemporizador() {
    clearInterval(temporizador);

    temporizador = setInterval(function() {
        tiempoRestante--;

        tiempoEjercicio.textContent = tiempoRestante + " s";

        if (tiempoRestante === 13) {
            pasos[0].classList.remove("activo");
            pasos[1].classList.add("activo");
        }

        if (tiempoRestante === 6) {
            pasos[1].classList.remove("activo");
            pasos[2].classList.add("activo");
        }

        if (tiempoRestante <= 0) {
            terminarEjercicio();
        }
    }, 1000);
}


/* ==========================
   PAUSAR / CONTINUAR
========================== */

botonPausa.addEventListener("click", function() {
    if (!ejercicioPausado) {
        clearInterval(temporizador);
        ejercicioPausado = true;
        botonPausa.textContent = "▶";
    } else {
        ejercicioPausado = false;
        botonPausa.textContent = "⏸";
        iniciarTemporizador();
    }
});


/* ==========================
   REINICIAR
========================== */

botonReiniciar.addEventListener("click", function() {
    clearInterval(temporizador);

    tiempoRestante = 20;
    ejercicioEnProceso = false;
    ejercicioPausado = false;

    botonEmpezar.textContent = idiomaActual === "es" ? "▶ Empezar" : "▶ Start";

    textoDuracion.style.display = "block";
    tiempoEjercicio.textContent = idiomaActual === "es" ? "20 segundos" : "20 seconds";
    controlesEjercicio.style.display = "none";

    pasos.forEach(function(paso) {
        paso.classList.remove("activo");
    });
});


/* ==========================
   TERMINAR EJERCICIO
========================== */

function terminarEjercicio() {
    clearInterval(temporizador);

    ejercicioEnProceso = false;
    ejercicioPausado = false;

    pasos.forEach(function(paso) {
        paso.classList.remove("activo");
    });

    botonEmpezar.textContent = idiomaActual === "es" ? "▶ Empezar" : "▶ Start";

    textoDuracion.style.display = "block";
    tiempoEjercicio.textContent = idiomaActual === "es" ? "20 segundos" : "20 seconds";
    controlesEjercicio.style.display = "none";

    tiempoRestante = 20;
}


/* ==========================
   INICIAR PÁGINA
========================== */

document.documentElement.lang = idiomaActual;

mostrarEjercicio();
actualizarSelector();
actualizarControles();
actualizarModoCalma();
