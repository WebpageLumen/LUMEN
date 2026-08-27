// ============================================================
// PRODUCTOS UNIFICADOS - LUMENSHOP
// Todos los productos (p1 - p56) con categorías, precios y traducciones
// ============================================================

// ============================================================
// 1. LISTA COMPLETA DE PRODUCTOS (formato OBJETO)
// ============================================================
const PRODUCTOS = {
    // ===== SENSORIAL =====
    p1: { img: 'Imagenes/pelotaantiestres.png', categoria: 'sensorial', precio: 12.99, titleKey: 'p1_title', descKey: 'p1_desc' },
    p2: { img: 'Imagenes/popit.png', categoria: 'sensorial', precio: 9.99, titleKey: 'p2_title', descKey: 'p2_desc' },
    p8: { img: 'Imagenes/tengles.png', categoria: 'sensorial', precio: 14.50, titleKey: 'p8_title', descKey: 'p8_desc' },
    p9: { img: 'Imagenes/Pop Tubes.png', categoria: 'sensorial', precio: 11.99, titleKey: 'p9_title', descKey: 'p9_desc' },
    p10: { img: 'Imagenes/Cubo Infinito.png', categoria: 'sensorial', precio: 15.99, titleKey: 'p10_title', descKey: 'p10_desc' },
    p11: { img: 'Imagenes/Pelotas Sensoriales.png', categoria: 'sensorial', precio: 13.50, titleKey: 'p11_title', descKey: 'p11_desc' },
    p12: { img: 'Imagenes/Fidget Spinners.png', categoria: 'sensorial', precio: 7.99, titleKey: 'p12_title', descKey: 'p12_desc' },
    p13: { img: 'Imagenes/Anillos Antiestrés.png', categoria: 'sensorial', precio: 6.99, titleKey: 'p13_title', descKey: 'p13_desc' },
    p14: { img: 'Imagenes/Pop It.png', categoria: 'sensorial', precio: 9.99, titleKey: 'p14_title', descKey: 'p14_desc' },
    p15: { img: 'Imagenes/Cubo Antiestrés.png', categoria: 'sensorial', precio: 16.99, titleKey: 'p15_title', descKey: 'p15_desc' },
    p16: { img: 'Imagenes/pelotassensoriales (2).png', categoria: 'sensorial', precio: 13.99, titleKey: 'p16_title', descKey: 'p16_desc' },
    p17: { img: 'Imagenes/Squishy.png', categoria: 'sensorial', precio: 8.50, titleKey: 'p17_title', descKey: 'p17_desc' },
    p18: { img: 'Imagenes/Masa Terapéutica.png', categoria: 'sensorial', precio: 19.99, titleKey: 'p18_title', descKey: 'p18_desc' },

    // ===== CAUSA Y EFECTO =====
    p3: { img: 'Imagenes/juguetecausaefecto.png', categoria: 'causaefecto', precio: 22.50, titleKey: 'p3_title', descKey: 'p3_desc' },
    p4: { img: 'Imagenes/pistadeautos.png', categoria: 'causaefecto', precio: 29.99, titleKey: 'p4_title', descKey: 'p4_desc' },

    // ===== ARTE =====
    p5: { img: 'Imagenes/marcadoreslavables.png', categoria: 'arte', precio: 18.99, titleKey: 'p5_title', descKey: 'p5_desc' },
    p7: { img: 'Imagenes/lapicesdecolores.png', categoria: 'arte', precio: 14.99, titleKey: 'p7_title', descKey: 'p7_desc' },
    p24: { img: 'Imagenes/Instrumento Musical Sensorial.png', categoria: 'arte', precio: 25.99, titleKey: 'p24_title', descKey: 'p24_desc' },
    p49: { img: 'Imagenes/Plastilina clásica.png', categoria: 'arte', precio: 11.99, titleKey: 'p49_title', descKey: 'p49_desc' },
    p50: { img: 'Imagenes/Arcilla ligera.png', categoria: 'arte', precio: 15.99, titleKey: 'p50_title', descKey: 'p50_desc' },
    p51: { img: 'Imagenes/Cuaderno de dibujo.png', categoria: 'arte', precio: 9.99, titleKey: 'p51_title', descKey: 'p51_desc' },
    p52: { img: 'Imagenes/Libro de actividades.png', categoria: 'arte', precio: 16.99, titleKey: 'p52_title', descKey: 'p52_desc' },
    p53: { img: 'Imagenes/Lavables.png', categoria: 'arte', precio: 17.99, titleKey: 'p53_title', descKey: 'p53_desc' },
    p54: { img: 'Imagenes/Doble punta.png', categoria: 'arte', precio: 19.99, titleKey: 'p54_title', descKey: 'p54_desc' },
    p55: { img: 'Imagenes/Triangulares.png', categoria: 'arte', precio: 14.50, titleKey: 'p55_title', descKey: 'p55_desc' },
    p56: { img: 'Imagenes/Acuareables.png', categoria: 'arte', precio: 16.99, titleKey: 'p56_title', descKey: 'p56_desc' },

    // ===== CONSTRUCCIÓN =====
    p6: { img: 'Imagenes/Bloques magnéticos.png', categoria: 'construccion', precio: 34.99, titleKey: 'p6_title', descKey: 'p6_desc' },
    p19: { img: 'Imagenes/Rompecabezas.png', categoria: 'construccion', precio: 22.99, titleKey: 'p19_title', descKey: 'p19_desc' },
    p20: { img: 'Imagenes/Bloques de Construcción.png', categoria: 'construccion', precio: 29.99, titleKey: 'p20_title', descKey: 'p20_desc' },

    // ===== APRENDIZAJE =====
    p21: { img: 'Imagenes/Juego de Clasificación.png', categoria: 'aprendizaje', precio: 24.99, titleKey: 'p21_title', descKey: 'p21_desc' },
    p22: { img: 'Imagenes/Tarjetas de Emociones.png', categoria: 'aprendizaje', precio: 19.99, titleKey: 'p22_title', descKey: 'p22_desc' },
    p23: { img: 'Imagenes/Tablero de Comunicación.png', categoria: 'aprendizaje', precio: 34.50, titleKey: 'p23_title', descKey: 'p23_desc' },
    p26: { img: 'Imagenes/Cuentos Educativos.png', categoria: 'aprendizaje', precio: 20.99, titleKey: 'p26_title', descKey: 'p26_desc' },
    p41: { img: 'Imagenes/abaco.png', categoria: 'aprendizaje', precio: 26.99, titleKey: 'p41_title', descKey: 'p41_desc' },
    p42: { img: 'Imagenes/Regletas.png', categoria: 'aprendizaje', precio: 31.99, titleKey: 'p42_title', descKey: 'p42_desc' },
    p43: { img: 'Imagenes/Tangram.png', categoria: 'aprendizaje', precio: 18.99, titleKey: 'p43_title', descKey: 'p43_desc' },
    p44: { img: 'Imagenes/Letras magnéticas.png', categoria: 'aprendizaje', precio: 22.99, titleKey: 'p44_title', descKey: 'p44_desc' },
    p45: { img: 'Imagenes/Dados de historias.png', categoria: 'aprendizaje', precio: 16.99, titleKey: 'p45_title', descKey: 'p45_desc' },
    p46: { img: 'Imagenes/Busy Board.png', categoria: 'aprendizaje', precio: 45.99, titleKey: 'p46_title', descKey: 'p46_desc' },
    p47: { img: 'Imagenes/Cuentos de emociones.png', categoria: 'aprendizaje', precio: 21.99, titleKey: 'p47_title', descKey: 'p47_desc' },
    p48: { img: 'Imagenes/Libros interactivos.png', categoria: 'aprendizaje', precio: 24.99, titleKey: 'p48_title', descKey: 'p48_desc' },

    // ===== BIENESTAR =====
    p25: { img: 'Imagenes/Manta con Peso.png', categoria: 'bienestar', precio: 59.99, titleKey: 'p25_title', descKey: 'p25_desc' },

    // ===== NUEVOS SENSORIALES (p27-p40) =====
    p27: { img: 'Imagenes/pelotassensoriales (2).png', categoria: 'sensorial', precio: 13.99, titleKey: 'p27_title', descKey: 'p27_desc' },
    p28: { img: 'Imagenes/tubossensoriales.png', categoria: 'sensorial', precio: 17.99, titleKey: 'p28_title', descKey: 'p28_desc' },
    p29: { img: 'Imagenes/Fidgets.png', categoria: 'sensorial', precio: 12.99, titleKey: 'p29_title', descKey: 'p29_desc' },
    p30: { img: 'Imagenes/popit.png', categoria: 'sensorial', precio: 9.99, titleKey: 'p30_title', descKey: 'p30_desc' },
    p31: { img: 'Imagenes/Arenacinética.png', categoria: 'sensorial', precio: 23.99, titleKey: 'p31_title', descKey: 'p31_desc' },
    p32: { img: 'Imagenes/juguetesconbotones.png', categoria: 'sensorial', precio: 19.99, titleKey: 'p32_title', descKey: 'p32_desc' },
    p33: { img: 'Imagenes/torresdebolas.png', categoria: 'sensorial', precio: 27.99, titleKey: 'p33_title', descKey: 'p33_desc' },
    p34: { img: 'Imagenes/Juguetespop-up.png', categoria: 'sensorial', precio: 21.99, titleKey: 'p34_title', descKey: 'p34_desc' },
    p35: { img: 'Imagenes/Bloques de madera.png', categoria: 'sensorial', precio: 32.99, titleKey: 'p35_title', descKey: 'p35_desc' },
    p36: { img: 'Imagenes/bloquesmagneticos.png', categoria: 'sensorial', precio: 34.99, titleKey: 'p36_title', descKey: 'p36_desc' },
    p37: { img: 'Imagenes/Engranajes.png', categoria: 'sensorial', precio: 24.99, titleKey: 'p37_title', descKey: 'p37_desc' },
    p38: { img: 'Imagenes/Memoria.png', categoria: 'sensorial', precio: 19.99, titleKey: 'p38_title', descKey: 'p38_desc' },
    p39: { img: 'Imagenes/Dominó.png', categoria: 'sensorial', precio: 22.99, titleKey: 'p39_title', descKey: 'p39_desc' },
    p40: { img: 'Imagenes/Bingo educativo.png', categoria: 'sensorial', precio: 26.99, titleKey: 'p40_title', descKey: 'p40_desc' }
};

// ============================================================
// 2. DICCIONARIO DE TRADUCCIONES (ES/EN)
// ============================================================
const I18N_PRODUCTOS = {
    es: {
        // ===== SENSORIAL =====
        p1_title: 'Pelota Antiestrés',
        p1_desc: 'Pelota suave y flexible diseñada para apretar y liberar tensión.',
        p2_title: 'Pop It',
        p2_desc: 'Juguete suave y flexible diseñado para presionar sus burbujas.',
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

        // ===== CAUSA Y EFECTO =====
        p3_title: 'Juguete Causa-Efecto',
        p3_desc: 'Juguete interactivo diseñado para que los pequeños descubran la relación causa-efecto.',
        p4_title: 'Pista de Autos',
        p4_desc: 'Juguete educativo donde los autos descienden por rampas y tubos.',

        // ===== ARTE =====
        p5_title: 'Marcadores Lavables',
        p5_desc: 'Set de marcadores con colores intensos y punta fina, fáciles de limpiar.',
        p7_title: 'Lápices de Colores',
        p7_desc: 'Set de lápices de colores con mina extra suave que ofrece trazos intensos.',
        p24_title: 'Instrumento Musical Sensorial',
        p24_desc: 'Instrumento de sonido suave diseñado para estimular la percepción auditiva.',
        p49_title: 'Plastilina Clásica',
        p49_desc: 'Material para modelar y fortalecer la motricidad fina.',
        p50_title: 'Arcilla Ligera',
        p50_desc: 'Permite crear figuras que endurecen al secar.',
        p51_title: 'Cuaderno de Dibujo',
        p51_desc: 'Espacio para ilustrar y desarrollar creatividad.',
        p52_title: 'Libro de Actividades',
        p52_desc: 'Incluye ejercicios de aprendizaje y entretenimiento.',
        p53_title: 'Marcadores Lavables',
        p53_desc: 'Fáciles de limpiar, ideales para niños.',
        p54_title: 'Marcadores Doble Punta',
        p54_desc: 'Permiten trazos finos y gruesos.',
        p55_title: 'Lápices Triangulares',
        p55_desc: 'Diseño ergonómico para un mejor agarre.',
        p56_title: 'Lápices Acuarelables',
        p56_desc: 'Pueden mezclarse con agua para efectos de pintura.',

        // ===== CONSTRUCCIÓN =====
        p6_title: 'Bloques Magnéticos',
        p6_desc: 'Set de construcción con piezas magnéticas de colores para crear figuras y estructuras.',
        p19_title: 'Rompecabezas',
        p19_desc: 'Juego de piezas que deben ensamblarse para formar una imagen o figura.',
        p20_title: 'Bloques de Construcción',
        p20_desc: 'Piezas encajables que permiten crear estructuras.',

        // ===== APRENDIZAJE =====
        p21_title: 'Juego de Clasificación',
        p21_desc: 'Material educativo para agrupar objetos por color, forma, tamaño o categoría.',
        p22_title: 'Tarjetas de Emociones',
        p22_desc: 'Tarjetas ilustradas con expresiones faciales que ayudan a reconocer emociones.',
        p23_title: 'Tablero de Comunicación',
        p23_desc: 'Herramienta visual con pictogramas o símbolos que facilita la comunicación.',
        p26_title: 'Cuentos Educativos',
        p26_desc: 'Experiencias sensoriales agradables con una enseñanza positiva.',
        p41_title: 'Ábaco',
        p41_desc: 'Herramienta para aprender conteo y operaciones básicas.',
        p42_title: 'Regletas',
        p42_desc: 'Material para comprender cantidades y operaciones matemáticas.',
        p43_title: 'Tangram',
        p43_desc: 'Rompecabezas geométrico que desarrolla pensamiento espacial.',
        p44_title: 'Letras Magnéticas',
        p44_desc: 'Facilitan el aprendizaje del alfabeto y formación de palabras.',
        p45_title: 'Dados de Historias',
        p45_desc: 'Estimulan la expresión oral y creatividad.',
        p46_title: 'Busy Board',
        p46_desc: 'Tablero con actividades de la vida diaria para desarrollar autonomía.',
        p47_title: 'Cuentos de Emociones',
        p47_desc: 'Enseñan a reconocer y expresar emociones.',
        p48_title: 'Libros Interactivos',
        p48_desc: 'Incorporan texturas o sonidos para motivar la lectura.',

        // ===== BIENESTAR =====
        p25_title: 'Manta con Peso',
        p25_desc: 'Manta terapéutica que aplica presión profunda para promover la calma.',

        // ===== NUEVOS SENSORIALES (p27-p40) =====
        p27_title: 'Pelotas Sensoriales',
        p27_desc: 'Pelotas con diferentes texturas que estimulan el tacto y la motricidad fina.',
        p28_title: 'Tubos Sensoriales',
        p28_desc: 'Tubos transparentes con elementos visuales para fomentar la atención.',
        p29_title: 'Fidgets',
        p29_desc: 'Juguetes manipulativos para mejorar la concentración.',
        p30_title: 'Pop It',
        p30_desc: 'Juguete de silicona con burbujas reutilizables para estimulación táctil.',
        p31_title: 'Arena Cinética',
        p31_desc: 'Arena moldeable que desarrolla creatividad y percepción táctil.',
        p32_title: 'Juguetes con Botones',
        p32_desc: 'Al presionar un botón generan una respuesta como luz o sonido.',
        p33_title: 'Torres de Bolas',
        p33_desc: 'Las bolas descienden por rampas enseñando secuencias.',
        p34_title: 'Juguetes Pop-up',
        p34_desc: 'Al activar un mecanismo aparecen figuras.',
        p35_title: 'Bloques de Madera',
        p35_desc: 'Piezas para construir fortaleciendo lógica y creatividad.',
        p36_title: 'Bloques Magnéticos',
        p36_desc: 'Piezas imantadas para crear estructuras.',
        p37_title: 'Engranajes',
        p37_desc: 'Piezas que enseñan movimiento mecánico básico.',
        p38_title: 'Memoria',
        p38_desc: 'Desarrolla atención y memoria visual.',
        p39_title: 'Dominó',
        p39_desc: 'Favorece lógica y reconocimiento de patrones.',
        p40_title: 'Bingo Educativo',
        p40_desc: 'Refuerza vocabulario, números o imágenes.'
    },
    en: {
        // ===== SENSORIAL =====
        p1_title: 'Anti-Stress Ball',
        p1_desc: 'Soft, flexible ball designed to squeeze and release tension.',
        p2_title: 'Pop It',
        p2_desc: 'Soft, flexible toy designed to press its bubbles.',
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

        // ===== CAUSA Y EFECTO =====
        p3_title: 'Cause-and-Effect Toy',
        p3_desc: 'Interactive toy designed to help little ones discover cause and effect.',
        p4_title: 'Car Track',
        p4_desc: 'Educational toy where cars roll down ramps and tubes.',

        // ===== ARTE =====
        p5_title: 'Washable Markers',
        p5_desc: 'Set of markers with vivid colors and a fine tip, easy to clean.',
        p7_title: 'Colored Pencils',
        p7_desc: 'Set of colored pencils with an extra-soft lead that gives bold strokes.',
        p24_title: 'Sensory Musical Instrument',
        p24_desc: 'Soft-sound instrument designed to stimulate auditory perception.',
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
        p56_desc: 'Can be mixed with water for painting effects.',

        // ===== CONSTRUCCIÓN =====
        p6_title: 'Magnetic Blocks',
        p6_desc: 'Construction set with colorful magnetic pieces for building shapes and structures.',
        p19_title: 'Puzzle',
        p19_desc: 'A set of pieces that must be assembled to form an image or figure.',
        p20_title: 'Building Blocks',
        p20_desc: 'Interlocking pieces for building structures.',

        // ===== APRENDIZAJE =====
        p21_title: 'Sorting Game',
        p21_desc: 'Educational material for grouping objects by color, shape, size or category.',
        p22_title: 'Emotion Cards',
        p22_desc: 'Illustrated cards with facial expressions that help recognize emotions.',
        p23_title: 'Communication Board',
        p23_desc: 'Visual tool with pictograms or symbols that facilitates communication.',
        p26_title: 'Educational Storybooks',
        p26_desc: 'Pleasant sensory experiences with a positive lesson.',
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

        // ===== BIENESTAR =====
        p25_title: 'Weighted Blanket',
        p25_desc: 'Therapeutic blanket that applies deep pressure to promote calm.',

        // ===== NUEVOS SENSORIALES (p27-p40) =====
        p27_title: 'Sensory Balls',
        p27_desc: 'Balls with different textures that stimulate touch and fine motor skills.',
        p28_title: 'Sensory Tubes',
        p28_desc: 'Transparent tubes with visual elements to encourage attention.',
        p29_title: 'Fidgets',
        p29_desc: 'Manipulative toys to improve concentration.',
        p30_title: 'Pop It',
        p30_desc: 'Silicone toy with reusable bubbles for tactile stimulation.',
        p31_title: 'Kinetic Sand',
        p31_desc: 'Moldable sand that develops creativity and tactile perception.',
        p32_title: 'Button Toys',
        p32_desc: 'Pressing a button generates a response like light or sound.',
        p33_title: 'Ball Towers',
        p33_desc: 'Balls descend through ramps teaching sequences.',
        p34_title: 'Pop-up Toys',
        p34_desc: 'Activating a mechanism makes figures appear.',
        p35_title: 'Wooden Blocks',
        p35_desc: 'Pieces to build strengthening logic and creativity.',
        p36_title: 'Magnetic Blocks',
        p36_desc: 'Magnetic pieces to create structures.',
        p37_title: 'Gears',
        p37_desc: 'Pieces that teach basic mechanical movement.',
        p38_title: 'Memory',
        p38_desc: 'Develops attention and visual memory.',
        p39_title: 'Dominoes',
        p39_desc: 'Promotes logic and pattern recognition.',
        p40_title: 'Educational Bingo',
        p40_desc: 'Reinforces vocabulary, numbers or images.'
    }
};

// ============================================================
// 3. EXPORTAR PARA EL BUSCADOR FLOTANTE Y CARRITO
// ============================================================

// Exponer como window.PRODUCTOS para que sea compatible con Lumenshop.js
window.PRODUCTOS = PRODUCTOS;
window.I18N_PRODUCTOS = I18N_PRODUCTOS;

// También mantener compatibilidad con el buscador que espera un array
const productosArray = Object.keys(PRODUCTOS).map(key => {
    const p = PRODUCTOS[key];
    const traduccion = I18N_PRODUCTOS.es;
    return {
        id: key,
        nombre: traduccion[p.titleKey] || key,
        categoria: p.categoria,
        precio: p.precio,
        img: p.img,
        titleKey: p.titleKey,
        descKey: p.descKey
    };
});

window.productos = productosArray;
window.i18nProductos = I18N_PRODUCTOS;

// ============================================================
// 4. FUNCIÓN PARA OBTENER NOMBRE DEL PRODUCTO EN CUALQUIER IDIOMA
// ============================================================
window.getNombreProducto = function(producto, idioma) {
    if (!producto) return 'Sin nombre';
    
    const lang = idioma || localStorage.getItem('lumen_lang') || 'es';
    const traducciones = I18N_PRODUCTOS[lang] || I18N_PRODUCTOS.es;
    
    // Si tiene titleKey, usar traducción
    if (producto.titleKey) {
        const nombre = traducciones[producto.titleKey];
        if (nombre) return nombre;
    }
    
    // Si tiene nombre directo
    if (producto.nombre) return producto.nombre;
    
    // Si tiene id, buscar en I18N_PRODUCTOS
    if (producto.id) {
        const key = producto.id + '_title';
        const nombre = traducciones[key];
        if (nombre) return nombre;
    }
    
    return producto.id || 'Sin nombre';
};

// ============================================================
// 5. FUNCIONES DE UTILIDAD
// ============================================================
window.getProductText = function(producto, campo, idioma = 'es') {
    const traducciones = I18N_PRODUCTOS[idioma] || I18N_PRODUCTOS.es;
    const key = campo === 'titulo' ? producto.titleKey : producto.descKey;
    return traducciones[key] || producto.id;
};

window.getProductosPorCategoria = function(categoria) {
    if (categoria === 'todos') return window.productos;
    return window.productos.filter(p => p.categoria === categoria);
};

window.buscarProductos = function(termino, idioma = 'es') {
    if (!termino || termino.trim() === '') return window.productos;
    
    const terminoLower = termino.toLowerCase().trim();
    const traducciones = I18N_PRODUCTOS[idioma] || I18N_PRODUCTOS.es;
    
    return window.productos.filter(p => {
        const titulo = traducciones[p.titleKey] || '';
        const desc = traducciones[p.descKey] || '';
        return titulo.toLowerCase().includes(terminoLower) || 
               desc.toLowerCase().includes(terminoLower) ||
               p.categoria.toLowerCase().includes(terminoLower);
    });
};

console.log(`✅ Productos cargados: ${Object.keys(PRODUCTOS).length}`);
console.log(`📂 Categorías: ${[...new Set(Object.values(PRODUCTOS).map(p => p.categoria))].join(', ')}`);