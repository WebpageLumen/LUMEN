/* =========================================================
   LUMEN - MATERIALES IMPRIMIBLES
========================================================= */


/* =========================================================
   TRADUCCIONES
========================================================= */

const translations = {

    es: {

        nav_home: "Inicio",
        nav_info: "Información general",
        nav_shop: "Lumen Shop",
        nav_centers: "Centros",
        nav_tours: "Giras inclusivas",
        nav_pros: "Profesionales",
        nav_about: "Sobre nosotros",

        print_title: "Materiales",
        print_title_2: "imprimibles",

        print_subtitle:
            "Explora nuestros materiales imprimibles y descarga los recursos que necesites para aprender y practicar.",

        download: "Descargar",

        footer_copy:
            "2026 Lumen. Todos los derechos reservados.",

        footer_access:
            "Accesos rápidos",

        loading:
            "Cargando vista previa...",

        error:
            "No se pudo cargar la vista previa."

    },

    en: {

        nav_home: "Home",
        nav_info: "General Information",
        nav_shop: "Lumen Shop",
        nav_centers: "Centers",
        nav_tours: "Inclusive Tours",
        nav_pros: "Professionals",
        nav_about: "About Us",

        print_title: "Printable",
        print_title_2: "Materials",

        print_subtitle:
            "Explore our printable materials and download the resources you need to learn and practice.",

        download: "Download",

        footer_copy:
            "2026 Lumen. All rights reserved.",

        footer_access:
            "Quick Access",

        loading:
            "Loading preview...",

        error:
            "The preview could not be loaded."

    }

};


/* =========================================================
   VARIABLES
========================================================= */

let currentLanguage = "es";

let pdfObserver = null;

let resizeTimer = null;


/* =========================================================
   CONFIGURACIÓN PDF.JS
========================================================= */

if (typeof pdfjsLib !== "undefined") {

    pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

}


/* =========================================================
   CREAR LOS 20 MATERIALES
========================================================= */

function createMaterials() {

    const grid =
        document.getElementById(
            "materialsGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    for (
        let number = 1;
        number <= 20;
        number++
    ) {

        const article =
            document.createElement(
                "article"
            );

        article.className =
            "material-card";


        /* =================================================
           WRAPPER PDF
        ================================================= */

        const imageWrapper =
            document.createElement(
                "div"
            );

        imageWrapper.className =
            "material-image-wrapper";


        /* =================================================
           CANVAS
        ================================================= */

        const canvas =
            document.createElement(
                "canvas"
            );

        canvas.className =
            "material-pdf";


        canvas.dataset.material =
            number;


        canvas.dataset.pdfEs =
            `materiales/DES ${number} es.pdf`;


        canvas.dataset.pdfEn =
            `materiales/DES ${number} en.pdf`;


        canvas.dataset.loaded =
            "false";


        canvas.dataset.rendered =
            "false";


        canvas.title =
            `Material imprimible ${number}`;


        /* =================================================
           CARGANDO
        ================================================= */

        const loading =
            document.createElement(
                "div"
            );

        loading.className =
            "pdf-loading";


        loading.textContent =
            translations[
                currentLanguage
            ].loading;


        /* =================================================
           ERROR
        ================================================= */

        const error =
            document.createElement(
                "div"
            );

        error.className =
            "pdf-error hidden";


        error.textContent =
            translations[
                currentLanguage
            ].error;


        imageWrapper.appendChild(
            canvas
        );


        imageWrapper.appendChild(
            loading
        );


        imageWrapper.appendChild(
            error
        );


        /* =================================================
           INFORMACIÓN
        ================================================= */

        const info =
            document.createElement(
                "div"
            );

        info.className =
            "material-info";


        const textContainer =
            document.createElement(
                "div"
            );


        const numberText =
            document.createElement(
                "p"
            );

        numberText.className =
            "material-number";


        numberText.textContent =
            `Material ${String(number).padStart(2, "0")}`;


        const nameText =
            document.createElement(
                "h2"
            );

        nameText.className =
            "material-name";


        nameText.textContent =
            `Material ${String(number).padStart(2, "0")}`;


        textContainer.appendChild(
            numberText
        );


        textContainer.appendChild(
            nameText
        );


        /* =================================================
           BOTÓN DESCARGA
        ================================================= */

        const downloadButton =
            document.createElement(
                "a"
            );

        downloadButton.className =
            "download-btn";


        downloadButton.dataset.download =
            number;


        downloadButton.dataset.hrefEs =
            `materiales/DES ${number} es.pdf`;


        downloadButton.dataset.hrefEn =
            `materiales/DES ${number} en.pdf`;


        downloadButton.dataset.nameEs =
            `DES ${number} es.pdf`;


        downloadButton.dataset.nameEn =
            `DES ${number} en.pdf`;


        downloadButton.href =
            `materiales/DES ${number} es.pdf`;


        downloadButton.download =
            `DES ${number} es.pdf`;


        downloadButton.innerHTML = `

            <svg
                class="download-icon"
                viewBox="0 0 24 24"
                fill="none">

                <path
                    d="M12 3v12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"/>

                <path
                    d="m7 10 5 5 5-5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>

                <path
                    d="M5 21h14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"/>

            </svg>

            <span data-i18n="download">
                ${translations[currentLanguage].download}
            </span>

        `;


        info.appendChild(
            textContainer
        );


        info.appendChild(
            downloadButton
        );


        article.appendChild(
            imageWrapper
        );


        article.appendChild(
            info
        );


        grid.appendChild(
            article
        );

    }

}


/* =========================================================
   TRADUCCIONES
========================================================= */

function updateTranslations(lang) {

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            element => {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                if (
                    translations[lang] &&
                    translations[lang][key]
                ) {

                    element.textContent =
                        translations[lang][key];

                }

            }
        );

}


/* =========================================================
   ACTUALIZAR MATERIALES
========================================================= */

function updateMaterials(lang) {

    const canvases =
        document.querySelectorAll(
            ".material-pdf"
        );


    canvases.forEach(
        canvas => {

            const path =
                lang === "en"
                    ? canvas.dataset.pdfEn
                    : canvas.dataset.pdfEs;


            if (!path) {
                return;
            }


            canvas.dataset.currentPdf =
                path;


            /*
             * Si ya estaba cargado,
             * volver a dibujar con el nuevo idioma.
             */

            if (
                canvas.dataset.loaded ===
                "true"
            ) {

                canvas.dataset.rendered =
                    "false";


                renderPDF(
                    canvas,
                    true
                );

            }

        }
    );


    /* =====================================================
       ACTUALIZAR DESCARGAS
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".download-btn"
        );


    buttons.forEach(
        button => {

            const href =
                lang === "en"
                    ? button.dataset.hrefEn
                    : button.dataset.hrefEs;


            const filename =
                lang === "en"
                    ? button.dataset.nameEn
                    : button.dataset.nameEs;


            if (!href) {
                return;
            }


            button.href =
                href;


            button.download =
                filename;


            button.dataset.currentHref =
                href;


            button.dataset.currentName =
                filename;

        }
    );

}


/* =========================================================
   MOSTRAR CARGANDO
========================================================= */

function showLoading(canvas) {

    const wrapper =
        canvas.closest(
            ".material-image-wrapper"
        );


    if (!wrapper) {
        return;
    }


    const loading =
        wrapper.querySelector(
            ".pdf-loading"
        );


    const error =
        wrapper.querySelector(
            ".pdf-error"
        );


    if (loading) {

        loading.classList.remove(
            "hidden"
        );


        loading.textContent =
            translations[
                currentLanguage
            ].loading;

    }


    if (error) {

        error.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   OCULTAR CARGANDO
========================================================= */

function hideLoading(canvas) {

    const wrapper =
        canvas.closest(
            ".material-image-wrapper"
        );


    if (!wrapper) {
        return;
    }


    const loading =
        wrapper.querySelector(
            ".pdf-loading"
        );


    if (loading) {

        loading.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   MOSTRAR ERROR
========================================================= */

function showPDFError(canvas) {

    const wrapper =
        canvas.closest(
            ".material-image-wrapper"
        );


    if (!wrapper) {
        return;
    }


    const loading =
        wrapper.querySelector(
            ".pdf-loading"
        );


    const error =
        wrapper.querySelector(
            ".pdf-error"
        );


    if (loading) {

        loading.classList.add(
            "hidden"
        );

    }


    if (error) {

        error.classList.remove(
            "hidden"
        );


        error.textContent =
            translations[
                currentLanguage
            ].error;

    }

}


/* =========================================================
   CARGAR Y DIBUJAR PDF
========================================================= */

async function renderPDF(
    canvas,
    forceReload = false
) {

    if (
        typeof pdfjsLib === "undefined"
    ) {

        console.error(
            "PDF.js no está disponible."
        );


        showPDFError(
            canvas
        );


        return;

    }


    const path =
        currentLanguage === "en"
            ? canvas.dataset.pdfEn
            : canvas.dataset.pdfEs;


    if (!path) {
        return;
    }


    /*
     * Evitar cargas innecesarias.
     */

    if (
        !forceReload &&
        canvas.dataset.rendered ===
        "true"
    ) {

        return;

    }


    showLoading(
        canvas
    );


    try {

        /*
         * Cargar PDF.
         */

        const loadingTask =
            pdfjsLib.getDocument({

                url: path,

                disableAutoFetch: true,

                disableStream: false

            });


        const pdf =
            await loadingTask.promise;


        /*
         * SOLO cargar la primera página.
         */

        const page =
            await pdf.getPage(1);


        /*
         * Obtener wrapper.
         */

        const wrapper =
            canvas.closest(
                ".material-image-wrapper"
            );


        if (!wrapper) {
            return;
        }


        /*
         * Dimensiones disponibles.
         */

        const availableWidth =
            wrapper.clientWidth;


        const availableHeight =
            wrapper.clientHeight;


        /*
         * Tamaño original del PDF.
         */

        const baseViewport =
            page.getViewport({
                scale: 1
            });


        /*
         * Calcular escala horizontal.
         */

        const scaleX =
            availableWidth /
            baseViewport.width;


        /*
         * Calcular escala vertical.
         */

        const scaleY =
            availableHeight /
            baseViewport.height;


        /*
         * Elegir la escala menor.
         *
         * Esto garantiza que el PDF
         * completo entre dentro del espacio.
         */

        let scale =
            Math.min(
                scaleX,
                scaleY
            );


        /*
         * Seguridad.
         */

        if (
            !isFinite(scale) ||
            scale <= 0
        ) {

            scale = 1;

        }


        /*
         * Crear viewport final.
         */

        const viewport =
            page.getViewport({
                scale: scale
            });


        /*
         * Resolución de pantalla.
         */

        const devicePixelRatio =
            window.devicePixelRatio ||
            1;


        /*
         * Tamaño interno del canvas.
         *
         * Esto mejora la nitidez.
         */

        canvas.width =
            Math.floor(
                viewport.width *
                devicePixelRatio
            );


        canvas.height =
            Math.floor(
                viewport.height *
                devicePixelRatio
            );


        /*
         * Tamaño visual.
         *
         * Conserva exactamente
         * la proporción del PDF.
         */

        canvas.style.width =
            `${viewport.width}px`;


        canvas.style.height =
            `${viewport.height}px`;


        /*
         * Obtener contexto.
         */

        const context =
            canvas.getContext(
                "2d"
            );


        /*
         * Limpiar canvas.
         */

        context.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        /*
         * Renderizar PDF.
         */

        await page.render({

            canvasContext:
                context,

            viewport:
                viewport,

            transform:
                devicePixelRatio !== 1
                    ? [
                        devicePixelRatio,
                        0,
                        0,
                        devicePixelRatio,
                        0,
                        0
                    ]
                    : null

        }).promise;


        /*
         * Marcar como cargado.
         */

        canvas.dataset.loaded =
            "true";


        canvas.dataset.rendered =
            "true";


        canvas.dataset.currentPdf =
            path;


        hideLoading(
            canvas
        );


    } catch (error) {

        console.error(
            `Error cargando ${path}:`,
            error
        );


        showPDFError(
            canvas
        );

    }

}


/* =========================================================
   CARGA DIFERIDA
========================================================= */

function setupLazyPDFs() {

    const pdfs =
        document.querySelectorAll(
            ".material-pdf"
        );


    if (!pdfs.length) {
        return;
    }


    /*
     * Desconectar observer anterior.
     */

    if (pdfObserver) {

        pdfObserver.disconnect();

    }


    /*
     * Fallback.
     */

    if (
        !("IntersectionObserver" in window)
    ) {

        if (pdfs[0]) {

            renderPDF(
                pdfs[0]
            );

        }


        return;

    }


    /*
     * Crear observer.
     */

    pdfObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const canvas =
                            entry.target;


                        renderPDF(
                            canvas
                        );


                        pdfObserver.unobserve(
                            canvas
                        );

                    }
                );

            },

            {

                /*
                 * Cargar antes de llegar
                 * a la pantalla.
                 */

                rootMargin:
                    "400px 0px 400px 0px",

                threshold:
                    0.01

            }

        );


    /*
     * Observar todos los canvas.
     */

    pdfs.forEach(
        canvas => {

            pdfObserver.observe(
                canvas
            );

        }
    );

}


/* =========================================================
   REDIBUJAR AL CAMBIAR TAMAÑO
========================================================= */

window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {

                    document
                        .querySelectorAll(
                            ".material-pdf"
                        )
                        .forEach(
                            canvas => {

                                if (
                                    canvas.dataset.loaded ===
                                    "true"
                                ) {

                                    canvas.dataset.rendered =
                                        "false";


                                    renderPDF(
                                        canvas,
                                        true
                                    );

                                }

                            }
                        );

                },
                250
            );

    }
);


/* =========================================================
   CAMBIAR IDIOMA
========================================================= */

function setLanguage(lang) {

    if (
        lang !== "es" &&
        lang !== "en"
    ) {

        lang = "es";

    }


    currentLanguage =
        lang;


    document.documentElement.lang =
        lang;


    updateTranslations(
        lang
    );


    updateMaterials(
        lang
    );


    /* =====================================================
       SELECTOR
    ===================================================== */

    const langLabel =
        document.getElementById(
            "langLabel"
        );


    if (langLabel) {

        langLabel.textContent =
            lang.toUpperCase();

    }


    /* =====================================================
       BANDERA
    ===================================================== */

    const langFlag =
        document.getElementById(
            "langFlag"
        );


    if (langFlag) {

        langFlag.src =
            lang === "es"
                ? "https://flagcdn.com/w80/es.png"
                : "https://flagcdn.com/w80/gb.png";


        langFlag.alt =
            lang === "es"
                ? "Español"
                : "English";

    }


    /* =====================================================
       OPCIÓN SELECCIONADA
    ===================================================== */

    document
        .querySelectorAll(
            ".lang-option"
        )
        .forEach(
            option => {

                option.classList.toggle(

                    "selected",

                    option.dataset.lang ===
                    lang

                );

            }
        );


    /* =====================================================
       GUARDAR
    ===================================================== */

    localStorage.setItem(
        "lumen-language",
        lang
    );

}


/* =========================================================
   SELECTOR DE IDIOMA
========================================================= */

const langBtn =
    document.getElementById(
        "langBtn"
    );


const langDropdown =
    document.getElementById(
        "langDropdown"
    );


const langWrapper =
    document.getElementById(
        "langWrapper"
    );


if (
    langBtn &&
    langDropdown &&
    langWrapper
) {

    langBtn.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const isOpen =
                langDropdown.classList.toggle(
                    "open"
                );


            langBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    document
        .querySelectorAll(
            ".lang-option"
        )
        .forEach(
            option => {

                option.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        setLanguage(
                            option.dataset.lang
                        );


                        langDropdown.classList.remove(
                            "open"
                        );


                        langBtn.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );


    document.addEventListener(
        "click",
        event => {

            if (
                !langWrapper.contains(
                    event.target
                )
            ) {

                langDropdown.classList.remove(
                    "open"
                );


                langBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================================
   DROPDOWNS NAVBAR
========================================================= */

document
    .querySelectorAll(
        ".nav-item"
    )
    .forEach(
        item => {

            const dropdown =
                item.querySelector(
                    ".nav-dropdown"
                );


            const trigger =
                item.querySelector(
                    ".nav-btn"
                );


            if (
                !dropdown ||
                !trigger
            ) {

                return;

            }


            trigger.addEventListener(
                "click",
                event => {

                    /*
                     * Los enlaces siguen funcionando.
                     */

                    if (
                        trigger.tagName.toLowerCase() ===
                        "a"
                    ) {

                        return;

                    }


                    event.preventDefault();


                    dropdown.classList.toggle(
                        "show"
                    );

                }
            );

        }
    );


document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".nav-item"
            )
        ) {

            document
                .querySelectorAll(
                    ".nav-dropdown.show"
                )
                .forEach(
                    dropdown => {

                        dropdown.classList.remove(
                            "show"
                        );

                    }
                );

        }

    }
);


/* =========================================================
   DESCARGA DEL PDF
========================================================= */

function downloadPDF(button) {

    const href =
        button.dataset.currentHref ||
        button.href;


    const filename =
        button.dataset.currentName ||
        button.download;


    if (!href) {

        console.error(
            "No se encontró la ruta del PDF."
        );

        return;

    }


    /*
     * Evitar doble click.
     */

    if (
        button.dataset.downloading ===
        "true"
    ) {

        return;

    }


    button.dataset.downloading =
        "true";


    const text =
        button.querySelector(
            "[data-i18n='download']"
        );


    const originalText =
        text
            ? text.textContent
            : "";


    if (text) {

        text.textContent =
            currentLanguage === "en"
                ? "Downloading..."
                : "Descargando...";

    }


    /*
     * Crear enlace de descarga.
     */

    const downloadLink =
        document.createElement(
            "a"
        );


    downloadLink.href =
        href;


    downloadLink.download =
        filename ||
        "material-lumen.pdf";


    downloadLink.style.display =
        "none";


    document.body.appendChild(
        downloadLink
    );


    downloadLink.click();


    document.body.removeChild(
        downloadLink
    );


    /*
     * Restaurar botón.
     */

    setTimeout(
        () => {

            button.dataset.downloading =
                "false";


            if (text) {

                text.textContent =
                    translations[
                        currentLanguage
                    ].download;

            }

        },
        700
    );

}


/* =========================================================
   EVENTO DE DESCARGA
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".download-btn"
            );


        if (!button) {
            return;
        }


        event.preventDefault();

        event.stopPropagation();


        downloadPDF(
            button
        );

    }
);


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * Crear los 20 materiales.
         */

        createMaterials();


        /*
         * Recuperar idioma.
         */

        const savedLanguage =
            localStorage.getItem(
                "lumen-language"
            ) || "es";


        /*
         * Aplicar idioma.
         */

        setLanguage(
            savedLanguage
        );


        /*
         * Preparar carga diferida.
         */

        setupLazyPDFs();

    }
);