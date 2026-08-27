// ============================================================
// i18n-central.js - SISTEMA ÚNICO DE IDIOMAS PARA LUMENSHOP
// ============================================================

(function() {
    'use strict';

    // =========================================================
    // 1. CONFIGURACIÓN
    // =========================================================
    const CONFIG = {
        defaultLang: 'es',
        storageKey: 'lumen_lang'
    };

    // =========================================================
    // 2. DICCIONARIO COMPLETO (ESPAÑOL/INGLÉS)
    // =========================================================
    const DICT = {
        es: {
            // ===== NAVEGACIÓN =====
            search_placeholder: 'Buscar',
            nav_all: 'Todo',
            nav_toys: 'Juguetes',
            nav_learning: 'Aprendizaje',
            nav_art: 'Arte',
            nav_home: 'Inicio',
            nav_about: 'Sobre nosotros',
            nav_main: 'Principal',
            nav_info: 'Información general',
            nav_shop: 'Lumen Shop',
            nav_centers: 'Centros',
            nav_tours: 'Giras inclusivas',
            nav_pros: 'Profesionales',

            // ===== MENÚ =====
            menu_title: 'Categorías',
            menu_toys_sensory: 'Sensoriales',
            menu_toys_emotional: 'Causa y efecto',
            menu_toys_causeeffect: 'Construcción',
            menu_toys_boardgames: 'Juegos de mesa',
            menu_learning_numbers: 'Matemática',
            menu_learning_language: 'Lenguaje',
            menu_learning_creativity: 'Autonomía',
            menu_learning_stories: 'Cuentos',
            menu_art_playdough: 'Plastilina',
            menu_art_notebooks: 'Libretas',
            menu_art_markers: 'Marcadores',
            menu_art_pencils: 'Lápices de colores',

            // ===== KITS =====
            kit1_title: 'Kit emocional',
            kit1_desc: 'Fortalece la calma, el autocontrol y la expresión saludable de las emociones.',
            kit2_title: 'Kit creatividad y expresión',
            kit2_desc: 'Estimula la imaginación, la creatividad y la libre expresión de ideas y emociones.',
            kit3_title: 'Kit descanso y bienestar',
            kit3_desc: 'Promueve la relajación y el descanso para favorecer un sueño más tranquilo y reparador.',
            kit4_title: 'Pequeños matemáticos',
            kit4_desc: 'Fortalece la calma, el autocontrol y la expresión saludable de las emociones.',
            kit5_title: 'Conociendo el lenguaje',
            kit5_desc: 'Fortalece la comunicación, el lenguaje y la comprensión de manera dinámica.',
            kit6_title: 'Hacia la Autonomía',
            kit6_desc: 'Fomenta la independencia y el desarrollo de habilidades para la vida diaria.',

            // ===== PRODUCTOS =====
            section_title: 'Recomendados para ti',
            price_label: 'Precio',
            add_btn: 'Agregar al carrito',

            // ===== CARRITO =====
            cart_title: 'Tu carrito',
            cart_empty: 'Tu carrito está vacío',
            cart_remove: 'Quitar',
            cart_qty_prefix: 'Cantidad: ',

            // ===== FOOTER =====
            footer_copy: '2026 Lumen. Todos los derechos reservados.',
            footer_access: 'Accesos rápidos',
            footer_info: 'Información general',
            footer_community: '¡Visita nuestra comunidad!',
            footer_contact: 'Contáctanos',
            footer_email_label: 'Correo electrónico:',

            // ===== TODOS LOS PRODUCTOS (p1 - p56) =====
            p1_title: 'Pelota Antiestrés',
            p1_desc: 'Pelota suave y flexible diseñada para apretar y liberar tensión.',
            p2_title: 'Pop It',
            p2_desc: 'Juguete suave y flexible diseñado para presionar sus burbujas.',
            p3_title: 'Juguete Causa-Efecto',
            p3_desc: 'Juguete interactivo diseñado para que los pequeños descubran la relación causa-efecto.',
            p4_title: 'Pista de Autos',
            p4_desc: 'Juguete educativo donde los autos descienden por rampas y tubos.',
            p5_title: 'Marcadores Lavables',
            p5_desc: 'Set de marcadores con colores intensos y punta fina, fáciles de limpiar.',
            p6_title: 'Bloques Magnéticos',
            p6_desc: 'Set de construcción con piezas magnéticas de colores para crear figuras y estructuras.',
            p7_title: 'Lápices de Colores',
            p7_desc: 'Set de lápices de colores con mina extra suave que ofrece trazos intensos.',
            p8_title: 'Tangles',
            p8_desc: 'Juguete sensorial flexible diseñado para doblar, girar y manipular.',
            p9_title: 'Pop Tubes',
            p9_desc: 'Tubos de plástico corrugado que se pueden estirar, doblar y unir.',
            p10_title: 'Cubo Infinito',
            p10_desc: 'Pequeño dispositivo plegable que permite manipularlo sin fin.',
            p11_title: 'Pelotas Sensoriales',
            p11_desc: 'Bolas blandas rellenas de gel o bolitas de colores.',
            p12_title: 'Fidget Spinners',
            p12_desc: 'El clásico spinner giratorio o cubos con botones, interruptores y ruedas.',
            p13_title: 'Anillos Antiestrés',
            p13_desc: 'Pequeños anillos texturizados que se colocan en los dedos.',
            p14_title: 'Pop It',
            p14_desc: 'Juguete sensorial de silicona con burbujas que se presionan repetidamente.',
            p15_title: 'Cubo Antiestrés',
            p15_desc: 'Cubo con diferentes botones, interruptores y superficies táctiles.',
            p16_title: 'Pelota Sensorial',
            p16_desc: 'Pelota con textura suave o puntiaguda que estimula el tacto.',
            p17_title: 'Squishy',
            p17_desc: 'Figura de espuma viscoelástica que puede comprimirse y recuperar su forma lentamente.',
            p18_title: 'Masa Terapéutica',
            p18_desc: 'Masa moldeable utilizada para fortalecer las manos y mejorar la coordinación.',
            p19_title: 'Rompecabezas',
            p19_desc: 'Juego de piezas que deben ensamblarse para formar una imagen o figura.',
            p20_title: 'Bloques de Construcción',
            p20_desc: 'Piezas encajables que permiten crear estructuras.',
            p21_title: 'Juego de Clasificación',
            p21_desc: 'Material educativo para agrupar objetos por color, forma, tamaño o categoría.',
            p22_title: 'Tarjetas de Emociones',
            p22_desc: 'Tarjetas ilustradas con expresiones faciales que ayudan a reconocer emociones.',
            p23_title: 'Tablero de Comunicación',
            p23_desc: 'Herramienta visual con pictogramas o símbolos que facilita la comunicación.',
            p24_title: 'Instrumento Musical Sensorial',
            p24_desc: 'Instrumento de sonido suave diseñado para estimular la percepción auditiva.',
            p25_title: 'Manta con Peso',
            p25_desc: 'Manta terapéutica que aplica presión profunda para promover la calma.',
            p26_title: 'Cuentos Educativos',
            p26_desc: 'Experiencias sensoriales agradables con una enseñanza positiva.',
            p27_title: 'Pelotas sensoriales',
            p27_desc: 'Pelotas con diferentes texturas que estimulan el tacto y la motricidad fina.',
            p28_title: 'Tubos sensoriales',
            p28_desc: 'Tubos transparentes con elementos visuales para fomentar la atención.',
            p29_title: 'Fidgets',
            p29_desc: 'Juguetes manipulativos para mejorar la concentración.',
            p30_title: 'Pop It',
            p30_desc: 'Juguete de silicona con burbujas reutilizables para estimulación táctil.',
            p31_title: 'Arena cinética',
            p31_desc: 'Arena moldeable que desarrolla creatividad y percepción táctil.',
            p32_title: 'Juguetes con botones',
            p32_desc: 'Al presionar un botón generan una respuesta como luz o sonido.',
            p33_title: 'Torres de bolas',
            p33_desc: 'Las bolas descienden por rampas enseñando secuencias.',
            p34_title: 'Juguetes pop-up',
            p34_desc: 'Al activar un mecanismo aparecen figuras.',
            p35_title: 'Bloques de madera',
            p35_desc: 'Piezas para construir fortaleciendo lógica y creatividad.',
            p36_title: 'Bloques magnéticos',
            p36_desc: 'Piezas imantadas para crear estructuras.',
            p37_title: 'Engranajes',
            p37_desc: 'Piezas que enseñan movimiento mecánico básico.',
            p38_title: 'Memoria',
            p38_desc: 'Desarrolla atención y memoria visual.',
            p39_title: 'Dominó',
            p39_desc: 'Favorece lógica y reconocimiento de patrones.',
            p40_title: 'Bingo educativo',
            p40_desc: 'Refuerza vocabulario, números o imágenes.',
            p41_title: 'Ábaco',
            p41_desc: 'Herramienta para aprender conteo y operaciones básicas.',
            p42_title: 'Regletas',
            p42_desc: 'Material para comprender cantidades y operaciones matemáticas.',
            p43_title: 'Tangram',
            p43_desc: 'Rompecabezas geométrico que desarrolla pensamiento espacial.',
            p44_title: 'Letras magnéticas',
            p44_desc: 'Facilitan el aprendizaje del alfabeto y formación de palabras.',
            p45_title: 'Dados de historias',
            p45_desc: 'Estimulan la expresión oral y creatividad.',
            p46_title: 'Busy Board',
            p46_desc: 'Tablero con actividades de la vida diaria para desarrollar autonomía.',
            p47_title: 'Cuentos de emociones',
            p47_desc: 'Enseñan a reconocer y expresar emociones.',
            p48_title: 'Libros interactivos',
            p48_desc: 'Incorporan texturas o sonidos para motivar la lectura.',
            p49_title: 'Plastilina clásica',
            p49_desc: 'Material para modelar y fortalecer la motricidad fina.',
            p50_title: 'Arcilla ligera',
            p50_desc: 'Permite crear figuras que endurecen al secar.',
            p51_title: 'Cuaderno de dibujo',
            p51_desc: 'Espacio para ilustrar y desarrollar creatividad.',
            p52_title: 'Libro de actividades',
            p52_desc: 'Incluye ejercicios de aprendizaje y entretenimiento.',
            p53_title: 'Marcadores Lavables',
            p53_desc: 'Fáciles de limpiar, ideales para niños.',
            p54_title: 'Marcadores Doble punta',
            p54_desc: 'Permiten trazos finos y gruesos.',
            p55_title: 'Lápices Triangulares',
            p55_desc: 'Diseño ergonómico para un mejor agarre.',
            p56_title: 'Lápices Acuarelables',
            p56_desc: 'Pueden mezclarse con agua para efectos de pintura.'
        },
        en: {
            // ===== NAVEGACIÓN =====
            search_placeholder: 'Search',
            nav_all: 'All',
            nav_toys: 'Toys',
            nav_learning: 'Learning',
            nav_art: 'Art',
            nav_home: 'Home',
            nav_about: 'About us',
            nav_main: 'Main',
            nav_info: 'Overview',
            nav_shop: 'Lumen Shop',
            nav_centers: 'Centers',
            nav_tours: 'Inclusive tours',
            nav_pros: 'Professionals',

            // ===== MENÚ =====
            menu_title: 'Categories',
            menu_toys_sensory: 'Sensory',
            menu_toys_emotional: 'Cause and effect',
            menu_toys_causeeffect: 'Building',
            menu_toys_boardgames: 'Board games',
            menu_learning_numbers: 'Math',
            menu_learning_language: 'Language',
            menu_learning_creativity: 'Independence',
            menu_learning_stories: 'Stories',
            menu_art_playdough: 'Play dough',
            menu_art_notebooks: 'Notebooks',
            menu_art_markers: 'Markers',
            menu_art_pencils: 'Colored pencils',

            // ===== KITS =====
            kit1_title: 'Emotional Kit',
            kit1_desc: 'Builds calm, self-control and healthy emotional expression.',
            kit2_title: 'Creativity & Expression Kit',
            kit2_desc: 'Sparks imagination, creativity and free expression of ideas and feelings.',
            kit3_title: 'Rest and well-being kit',
            kit3_desc: 'Promotes relaxation and rest to promote calmer and more restful sleep.',
            kit4_title: 'Little mathematicians',
            kit4_desc: 'Builds calm, self-control and healthy emotional expression.',
            kit5_title: 'Discovering language',
            kit5_desc: 'Strengthens communication, language and comprehension in a dynamic way.',
            kit6_title: 'Towards Independence',
            kit6_desc: 'Promotes independence and the development of daily life skills.',

            // ===== PRODUCTOS =====
            section_title: 'Recommended for you',
            price_label: 'Price',
            add_btn: 'Add to cart',

            // ===== CARRITO =====
            cart_title: 'Your cart',
            cart_empty: 'Your cart is empty',
            cart_remove: 'Remove',
            cart_qty_prefix: 'Qty: ',

            // ===== FOOTER =====
            footer_copy: '2026 Lumen. All rights reserved.',
            footer_access: 'Quick links',
            footer_info: 'Overview',
            footer_community: 'Visit our community!',
            footer_contact: 'Contact us',
            footer_email_label: 'Email:',

            // ===== TODOS LOS PRODUCTOS (p1 - p56) =====
            p1_title: 'Anti-Stress Ball',
            p1_desc: 'Soft, flexible ball designed to squeeze and release tension.',
            p2_title: 'Pop It',
            p2_desc: 'Soft, flexible toy designed to press its bubbles.',
            p3_title: 'Cause-and-Effect Toy',
            p3_desc: 'Interactive toy designed to help little ones discover cause and effect.',
            p4_title: 'Car Track',
            p4_desc: 'Educational toy where cars roll down ramps and tubes.',
            p5_title: 'Washable Markers',
            p5_desc: 'Set of markers with vivid colors and a fine tip, easy to clean.',
            p6_title: 'Magnetic Blocks',
            p6_desc: 'Construction set with colorful magnetic pieces for building shapes and structures.',
            p7_title: 'Colored Pencils',
            p7_desc: 'Set of colored pencils with an extra-soft lead that gives bold strokes.',
            p8_title: 'Tangles',
            p8_desc: 'Flexible sensory toy designed to bend, twist and manipulate.',
            p9_title: 'Pop Tubes',
            p9_desc: 'Corrugated plastic tubes that can be stretched, bent and connected.',
            p10_title: 'Infinity Cube',
            p10_desc: 'Small foldable device that can be manipulated endlessly.',
            p11_title: 'Sensory Balls',
            p11_desc: 'Soft balls filled with gel or colorful beads.',
            p12_title: 'Fidget Spinners',
            p12_desc: 'The classic spinning fidget or cubes with buttons, switches and wheels.',
            p13_title: 'Anti-Stress Rings',
            p13_desc: 'Small textured rings worn on the fingers.',
            p14_title: 'Pop It',
            p14_desc: 'Silicone sensory toy with bubbles that are repeatedly pressed.',
            p15_title: 'Stress Cube',
            p15_desc: 'Cube with different buttons, switches and tactile surfaces.',
            p16_title: 'Sensory Ball',
            p16_desc: 'Ball with a soft or spiky texture that stimulates touch.',
            p17_title: 'Squishy',
            p17_desc: 'Viscoelastic foam figure that can be compressed and slowly returns to shape.',
            p18_title: 'Therapy Dough',
            p18_desc: 'Moldable dough used to strengthen hands and improve coordination.',
            p19_title: 'Puzzle',
            p19_desc: 'A set of pieces that must be assembled to form an image or figure.',
            p20_title: 'Building Blocks',
            p20_desc: 'Interlocking pieces for building structures.',
            p21_title: 'Sorting Game',
            p21_desc: 'Educational material for grouping objects by color, shape, size or category.',
            p22_title: 'Emotion Cards',
            p22_desc: 'Illustrated cards with facial expressions that help recognize emotions.',
            p23_title: 'Communication Board',
            p23_desc: 'Visual tool with pictograms or symbols that facilitates communication.',
            p24_title: 'Sensory Musical Instrument',
            p24_desc: 'Soft-sound instrument designed to stimulate auditory perception.',
            p25_title: 'Weighted Blanket',
            p25_desc: 'Therapeutic blanket that applies deep pressure to promote calm.',
            p26_title: 'Educational Storybooks',
            p26_desc: 'Pleasant sensory experiences with a positive lesson.',
            p27_title: 'Sensory balls',
            p27_desc: 'Balls with different textures that stimulate touch and fine motor skills.',
            p28_title: 'Sensory tubes',
            p28_desc: 'Transparent tubes with visual elements to encourage attention.',
            p29_title: 'Fidgets',
            p29_desc: 'Manipulative toys to improve concentration.',
            p30_title: 'Pop It',
            p30_desc: 'Silicone toy with reusable bubbles for tactile stimulation.',
            p31_title: 'Kinetic sand',
            p31_desc: 'Moldable sand that develops creativity and tactile perception.',
            p32_title: 'Button toys',
            p32_desc: 'Pressing a button generates a response like light or sound.',
            p33_title: 'Ball towers',
            p33_desc: 'Balls descend through ramps teaching sequences.',
            p34_title: 'Pop-up toys',
            p34_desc: 'Activating a mechanism makes figures appear.',
            p35_title: 'Wooden blocks',
            p35_desc: 'Pieces to build strengthening logic and creativity.',
            p36_title: 'Magnetic blocks',
            p36_desc: 'Magnetic pieces to create structures.',
            p37_title: 'Gears',
            p37_desc: 'Pieces that teach basic mechanical movement.',
            p38_title: 'Memory',
            p38_desc: 'Develops attention and visual memory.',
            p39_title: 'Dominoes',
            p39_desc: 'Promotes logic and pattern recognition.',
            p40_title: 'Educational Bingo',
            p40_desc: 'Reinforces vocabulary, numbers or images.',
            p41_title: 'Abacus',
            p41_desc: 'Tool for learning counting and basic operations.',
            p42_title: 'Number Rods',
            p42_desc: 'Material to understand quantities and mathematical operations.',
            p43_title: 'Tangram',
            p43_desc: 'Geometric puzzle that develops spatial thinking.',
            p44_title: 'Magnetic Letters',
            p44_desc: 'Facilitate learning the alphabet and word formation.',
            p45_title: 'Story Dice',
            p45_desc: 'Stimulate oral expression and creativity.',
            p46_title: 'Busy Board',
            p46_desc: 'Board with daily life activities to develop independence.',
            p47_title: 'Emotion Stories',
            p47_desc: 'Teach to recognize and express emotions.',
            p48_title: 'Interactive Books',
            p48_desc: 'Incorporate textures or sounds to motivate reading.',
            p49_title: 'Classic Play Dough',
            p49_desc: 'Material for modeling and strengthening fine motor skills.',
            p50_title: 'Light Clay',
            p50_desc: 'Allows you to create figures that harden when drying.',
            p51_title: 'Drawing Notebook',
            p51_desc: 'Space to illustrate and develop creativity.',
            p52_title: 'Activity Book',
            p52_desc: 'Includes learning and entertainment exercises.',
            p53_title: 'Washable Markers',
            p53_desc: 'Easy to clean, ideal for children.',
            p54_title: 'Dual Tip Markers',
            p54_desc: 'Allow fine and thick strokes.',
            p55_title: 'Triangular Pencils',
            p55_desc: 'Ergonomic design for better grip.',
            p56_title: 'Watercolor Pencils',
            p56_desc: 'Can be mixed with water for painting effects.'
        }
    };

    // =========================================================
    // 3. PRODUCTOS POR PÁGINA (solo imágenes)
    // =========================================================
    const PAGE_PRODUCTS = {
        juguetes: {
            p1: { img: 'Imagenes/pelotaantiestres.png' },
            p2: { img: 'Imagenes/popit.png' },
            p3: { img: 'Imagenes/juguetecausaefecto.png' },
            p4: { img: 'Imagenes/pistadeautos.png' },
            p5: { img: 'Imagenes/marcadoreslavables.png' },
            p6: { img: 'Imagenes/Bloques magnéticos.png' },
            p7: { img: 'Imagenes/lapicesdecolores.png' },
            p8: { img: 'Imagenes/tengles.png' },
            p9: { img: 'Imagenes/Pop Tubes.png' },
            p10: { img: 'Imagenes/Cubo Infinito.png' },
            p11: { img: 'Imagenes/Pelotas Sensoriales.png' },
            p12: { img: 'Imagenes/Fidget Spinners.png' },
            p13: { img: 'Imagenes/Anillos Antiestrés.png' },
            p14: { img: 'Imagenes/Pop It.png' },
            p15: { img: 'Imagenes/Cubo Antiestrés.png' },
            p16: { img: 'Imagenes/pelotassensoriales (2).png' },
            p17: { img: 'Imagenes/Squishy.png' },
            p18: { img: 'Imagenes/Masa Terapéutica.png' },
            p19: { img: 'Imagenes/Rompecabezas.png' },
            p20: { img: 'Imagenes/Bloques de Construcción.png' },
            p21: { img: 'Imagenes/Juego de Clasificación.png' },
            p22: { img: 'Imagenes/Tarjetas de Emociones.png' },
            p23: { img: 'Imagenes/Tablero de Comunicación.png' },
            p24: { img: 'Imagenes/Instrumento Musical Sensorial.png' },
            p25: { img: 'Imagenes/Manta con Peso.png' },
            p26: { img: 'Imagenes/Cuentos Educativos.png' }
        },
        aprendizaje: {
            p41: { img: 'Imagenes/abaco.png' },
            p42: { img: 'Imagenes/Regletas.png' },
            p43: { img: 'Imagenes/Tangram.png' },
            p44: { img: 'Imagenes/Letras magnéticas.png' },
            p45: { img: 'Imagenes/Dados de historias.png' },
            p46: { img: 'Imagenes/Busy Board.png' },
            p47: { img: 'Imagenes/Cuentos de emociones.png' },
            p48: { img: 'Imagenes/Libros interactivos.png' }
        },
        arte: {
            p49: { img: 'Imagenes/Plastilina clásica.png' },
            p50: { img: 'Imagenes/Arcilla ligera.png' },
            p51: { img: 'Imagenes/Cuaderno de dibujo.png' },
            p52: { img: 'Imagenes/Libro de actividades.png' },
            p53: { img: 'Imagenes/Lavables.png' },
            p54: { img: 'Imagenes/Doble punta.png' },
            p55: { img: 'Imagenes/Triangulares.png' },
            p56: { img: 'Imagenes/Acuareables.png' }
        },
        sensoriales: {
            p27: { img: 'Imagenes/pelotassensoriales (2).png' },
            p28: { img: 'Imagenes/tubossensoriales.png' },
            p29: { img: 'Imagenes/Fidgets.png' },
            p30: { img: 'Imagenes/popit.png' },
            p31: { img: 'Imagenes/Arenacinética.png' },
            p32: { img: 'Imagenes/juguetesconbotones.png' },
            p33: { img: 'Imagenes/torresdebolas.png' },
            p34: { img: 'Imagenes/Juguetespop-up.png' },
            p35: { img: 'Imagenes/Bloques de madera.png' },
            p36: { img: 'Imagenes/bloquesmagneticos.png' },
            p37: { img: 'Imagenes/Engranajes.png' },
            p38: { img: 'Imagenes/Memoria.png' },
            p39: { img: 'Imagenes/Dominó.png' },
            p40: { img: 'Imagenes/Bingo educativo.png' }
        }
    };

    // =========================================================
    // 4. SISTEMA PRINCIPAL
    // =========================================================
    const I18n = {
        currentLang: CONFIG.defaultLang,
        products: {},

        // ----- TRADUCCIÓN -----
        t(key) {
            const dict = DICT[this.currentLang] || DICT.es;
            return dict[key] !== undefined ? dict[key] : key;
        },

        // ----- OBTENER PRODUCTO CON TRADUCCIÓN -----
        getProduct(id) {
            const product = this.products[id];
            if (!product) return null;
            return {
                id: id,
                title: this.t(id + '_title'),
                desc: this.t(id + '_desc'),
                img: product.img,
                precio: product.precio || 0
            };
        },

        // ----- APLICAR TRADUCCIONES AL HTML -----
        applyTranslations() {
            const dict = DICT[this.currentLang] || DICT.es;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key] !== undefined) {
                    el.textContent = dict[key];
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (dict[key] !== undefined) {
                    el.setAttribute('placeholder', dict[key]);
                }
            });

            document.documentElement.lang = this.currentLang;
        },

        // ----- CAMBIAR IDIOMA -----
        setLanguage(lang) {
            if (!DICT[lang]) return;
            this.currentLang = lang;
            localStorage.setItem(CONFIG.storageKey, lang);
            
            this.updateUI(lang);
            this.applyTranslations();

            // Actualizar carrito si existe
            if (window.Cart && typeof Cart.render === 'function') {
                Cart.render();
            }

            console.log('🌐 Idioma cambiado a:', lang);
        },

        // ----- ACTUALIZAR SELECTOR VISUAL -----
        updateUI(lang) {
            const flag = document.getElementById('langFlag');
            const label = document.getElementById('langLabel');
            const options = document.querySelectorAll('.lang-option');

            if (flag) {
                flag.src = lang === 'es' 
                    ? 'https://flagcdn.com/w40/es.png' 
                    : 'https://flagcdn.com/w40/gb.png';
            }
            if (label) {
                label.textContent = lang.toUpperCase();
            }
            options.forEach(o => {
                o.classList.toggle('selected', o.getAttribute('data-lang') === lang);
            });
        },

        // ----- SELECTOR DE IDIOMA (EVENTOS) -----
        setupLanguageSelector() {
            const toggle = document.getElementById('langToggle');
            const dropdown = document.getElementById('langDropdown');
            const options = document.querySelectorAll('.lang-option');

            if (!toggle || !dropdown) return;

            // Remover event listeners duplicados clonando
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);

            newToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('open');
                newToggle.setAttribute('aria-expanded', dropdown.classList.contains('open'));
            });

            document.addEventListener('click', (e) => {
                const wrapper = document.querySelector('.lang-wrapper');
                if (wrapper && !wrapper.contains(e.target) && dropdown.classList.contains('open')) {
                    dropdown.classList.remove('open');
                    newToggle.setAttribute('aria-expanded', 'false');
                }
            });

            options.forEach(opt => {
                const newOpt = opt.cloneNode(true);
                opt.parentNode.replaceChild(newOpt, opt);
                
                newOpt.addEventListener('click', () => {
                    const lang = newOpt.getAttribute('data-lang');
                    if (lang) {
                        this.setLanguage(lang);
                        dropdown.classList.remove('open');
                        newToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            });

            // Actualizar visual inicial
            this.updateUI(this.currentLang);
        },

        // =========================================================
        // 5. INICIALIZAR
        // =========================================================
        init(pageType) {
            // Cargar idioma guardado
            const saved = localStorage.getItem(CONFIG.storageKey);
            if (saved === 'es' || saved === 'en') {
                this.currentLang = saved;
            } else {
                const browserLang = navigator.language.split('-')[0];
                if (DICT[browserLang]) {
                    this.currentLang = browserLang;
                }
            }

            // Cargar productos de esta página
            this.products = PAGE_PRODUCTS[pageType] || {};

            // Configurar selector de idioma
            this.setupLanguageSelector();

            // Aplicar traducciones
            this.applyTranslations();

            // Exponer funciones globales
            window.t = (key) => this.t(key);
            window.getProduct = (id) => this.getProduct(id);

            console.log('✅ I18n iniciado en:', pageType, '| Idioma:', this.currentLang);
        }
    };

    // =========================================================
    // 6. EXPONER GLOBALMENTE
    // =========================================================
    window.I18n = I18n;

})();