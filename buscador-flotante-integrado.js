// ============================================================
// BUSCADOR FLOTANTE CON SOPORTE BILINGÜE (ESPAÑOL/INGLÉS) - V5
// ============================================================

class BuscadorFlotanteIntegrado {
    constructor() {
        this.productos = [];
        this.ventanaAbierta = false;
        this.selectorInput = '#search-input, .search-input, [type="search"], input[placeholder*="Buscar"], input[placeholder*="Search"]';
        this.selectorBoton = '#search-btn, .search-btn, button[type="submit"], .btn-buscar';
        this.idiomaActual = 'es';
        this.inicializar();
    }

    inicializar() {
        this.cargarProductos();
        this.crearVentanaFlotante();
        this.agregarEstilos();
        this.configurarEventos();
        this.escucharCambiosIdioma();
        console.log('🔍 Buscador Flotante v5 - Bilingüe sin emojis');
    }

    // ============================================================
    // OBTENER TRADUCCIÓN (usa el sistema central I18n)
    // ============================================================
    t(key) {
        if (window.I18n && typeof I18n.t === 'function') {
            const result = I18n.t(key);
            if (result !== key) return result;
        }
        const dict = window.I18N_PRODUCTOS?.[this.idiomaActual] || window.I18N_PRODUCTOS?.es || {};
        return dict[key] || key;
    }

    // ============================================================
    // OBTENER TEXTO TRADUCIDO DEL BUSCADOR (SIN EMOJIS)
    // ============================================================
    getTextoBuscador(key) {
        const textos = {
            es: {
                titulo: 'Resultados de búsqueda',
                mensaje_inicial: 'Busca en español o inglés',
                sin_resultados: 'No se encontró',
                sin_resultados_sugerencia: 'Prueba en español o inglés',
                escribiendo: 'Escribe para buscar productos',
                resumen_resultados: 'resultado',
                resumen_resultados_plural: 'resultados',
                resumen_para: 'para',
                resumen_mostrando: 'Mostrando',
                resumen_productos: 'productos',
                btn_comprar: 'Comprar',
                btn_agregado: 'Agregado',
                notificacion_agregado: 'Producto agregado al carrito',
                buscar_placeholder: 'Buscar productos',
                categoria_general: 'General'
            },
            en: {
                titulo: 'Search results',
                mensaje_inicial: 'Search in Spanish or English',
                sin_resultados: 'No results found for',
                sin_resultados_sugerencia: 'Try in Spanish or English',
                escribiendo: 'Type to search for products',
                resumen_resultados: 'result',
                resumen_resultados_plural: 'results',
                resumen_para: 'for',
                resumen_mostrando: 'Showing',
                resumen_productos: 'products',
                btn_comprar: 'Buy',
                btn_agregado: 'Added',
                notificacion_agregado: 'Product added to cart',
                buscar_placeholder: 'Search products',
                categoria_general: 'General'
            }
        };
        
        const lang = this.idiomaActual || 'es';
        const dict = textos[lang] || textos.es;
        return dict[key] || key;
    }

    // ============================================================
    // OBTENER TRADUCCIÓN DE CATEGORÍA (SIN EMOJIS)
    // ============================================================
    getCategoriaTraducida(categoria) {
        const categorias = {
            es: {
                sensorial: 'Sensorial',
                sensoriales: 'Sensorial',
                causaefecto: 'Causa y efecto',
                construccion: 'Construcción',
                arte: 'Arte',
                aprendizaje: 'Aprendizaje',
                bienestar: 'Bienestar',
                juegosmesa: 'Juegos de mesa',
                matematica: 'Matemática',
                lenguaje: 'Lenguaje',
                autonomia: 'Autonomía',
                cuentos: 'Cuentos',
                plastilina: 'Plastilina',
                libretas: 'Libretas',
                marcadores: 'Marcadores',
                lapices: 'Lápices de colores'
            },
            en: {
                sensorial: 'Sensory',
                sensoriales: 'Sensory',
                causaefecto: 'Cause and effect',
                construccion: 'Building',
                arte: 'Art',
                aprendizaje: 'Learning',
                bienestar: 'Wellness',
                juegosmesa: 'Board games',
                matematica: 'Math',
                lenguaje: 'Language',
                autonomia: 'Independence',
                cuentos: 'Stories',
                plastilina: 'Play dough',
                libretas: 'Notebooks',
                marcadores: 'Markers',
                lapices: 'Colored pencils'
            }
        };
        
        const lang = this.idiomaActual || 'es';
        const dict = categorias[lang] || categorias.es;
        return dict[categoria] || this.getTextoBuscador('categoria_general');
    }

    // ============================================================
    // ESCUCHAR CAMBIOS DE IDIOMA
    // ============================================================
    escucharCambiosIdioma() {
        const self = this;
        
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function(key, value) {
            originalSetItem.apply(this, arguments);
            if (key === 'lumen_lang') {
                self.idiomaActual = value;
                self.actualizarTextosVentana();
                if (self.ventanaAbierta) {
                    const input = document.querySelector(self.selectorInput);
                    if (input) {
                        self.buscar(input.value.trim());
                    }
                }
            }
        };

        document.addEventListener('languageChanged', function(e) {
            if (e.detail && e.detail.lang) {
                self.idiomaActual = e.detail.lang;
                self.actualizarTextosVentana();
                if (self.ventanaAbierta) {
                    const input = document.querySelector(self.selectorInput);
                    if (input) {
                        self.buscar(input.value.trim());
                    }
                }
            }
        });

        const savedLang = localStorage.getItem('lumen_lang');
        if (savedLang === 'es' || savedLang === 'en') {
            this.idiomaActual = savedLang;
        } else {
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'es' || browserLang === 'en') {
                this.idiomaActual = browserLang;
            }
        }
        console.log('🌐 Idioma actual del buscador:', this.idiomaActual);
    }

    // ============================================================
    // ACTUALIZAR TEXTOS DE LA VENTANA
    // ============================================================
    actualizarTextosVentana() {
        const ventana = document.getElementById('buscador-flotante-integrado');
        if (!ventana) return;
        
        const titulo = ventana.querySelector('.bfi-titulo');
        if (titulo) titulo.textContent = this.getTextoBuscador('titulo');
        
        const mensajeInicial = ventana.querySelector('.bfi-mensaje-inicial');
        if (mensajeInicial) mensajeInicial.textContent = this.getTextoBuscador('mensaje_inicial');
        
        const inputs = document.querySelectorAll(this.selectorInput);
        inputs.forEach(input => {
            if (input && !input.hasAttribute('data-i18n-placeholder')) {
                input.placeholder = this.getTextoBuscador('buscar_placeholder');
            }
        });
    }

    // ============================================================
    // OBTENER NOMBRE DEL PRODUCTO EN EL IDIOMA ACTUAL
    // ============================================================
    getNombreProducto(producto) {
        if (!producto) return 'Sin nombre';
        
        if (producto.titleKey) {
            const nombre = this.t(producto.titleKey);
            if (nombre !== producto.titleKey) return nombre;
        }
        
        if (producto.nombre) return producto.nombre;
        
        if (producto.id && window.NOMBRES_PRODUCTOS?.[producto.id]) {
            return window.NOMBRES_PRODUCTOS[producto.id];
        }
        
        return producto.id || 'Sin nombre';
    }

    // ============================================================
    // OBTENER NOMBRE DEL PRODUCTO EN UN IDIOMA ESPECÍFICO
    // ============================================================
    getNombreProductoEnIdioma(producto, idioma) {
        if (!producto) return '';
        
        if (producto.titleKey) {
            if (window.I18N_PRODUCTOS && window.I18N_PRODUCTOS[idioma]) {
                const nombre = window.I18N_PRODUCTOS[idioma][producto.titleKey];
                if (nombre) return nombre;
            }
        }
        
        if (producto.nombre) return producto.nombre;
        return producto.id || 'Sin nombre';
    }

    // ============================================================
    // CARGAR PRODUCTOS
    // ============================================================
    cargarProductos() {
        if (typeof window.PRODUCTOS !== 'undefined' && typeof window.PRODUCTOS === 'object') {
            const productosTemp = Object.entries(window.PRODUCTOS).map(([id, data]) => ({
                id: id,
                titleKey: data.titleKey || id,
                nombre: data.nombre || data.title || data.titleKey || id,
                img: data.img || data.image || '',
                categoria: data.categoria || '',
                precio: data.precio || 0
            }));
            
            if (productosTemp.length > 0) {
                this.productos = productosTemp;
                console.log(`✅ ${this.productos.length} productos cargados desde window.PRODUCTOS`);
                return;
            }
        }

        if (typeof window.productos !== 'undefined' && Array.isArray(window.productos) && window.productos.length > 0) {
            this.productos = window.productos.map(p => ({
                id: p.id || p.titleKey || '',
                titleKey: p.titleKey || p.id || '',
                nombre: p.nombre || p.titleKey || p.id || 'Sin nombre',
                img: p.img || p.image || '',
                categoria: p.categoria || ''
            }));
            console.log(`✅ ${this.productos.length} productos cargados desde window.productos`);
            return;
        }

        this.productos = this.extraerDesdeDOM();
        if (this.productos.length > 0) {
            console.log(`✅ ${this.productos.length} productos cargados desde el DOM`);
            return;
        }

        console.warn('⚠️ No se encontraron productos');
        this.productos = [];
    }

    extraerDesdeDOM() {
        const productos = [];
        const cards = document.querySelectorAll('.product-card, .producto-item, [data-product-id], .producto');
        
        cards.forEach(card => {
            const id = card.dataset.productId || card.dataset.id || 
                      card.querySelector('[data-product-id]')?.dataset.productId;
            const img = card.querySelector('img')?.src || '';
            const nombre = card.querySelector('.product-title, .nombre, h3, .titulo')?.textContent?.trim() || 
                          card.textContent?.trim().substring(0, 50) || 'Sin nombre';
            const categoria = card.dataset.categoria || '';
            
            if (nombre !== 'Sin nombre' || id) {
                productos.push({ 
                    id: id || `prod_${Math.random().toString(36).substr(2, 9)}`,
                    titleKey: id || '',
                    nombre: nombre,
                    img: img,
                    categoria: categoria 
                });
            }
        });
        
        return productos;
    }

    // ============================================================
    // CREAR VENTANA FLOTANTE (SIN EMOJIS EN EL TÍTULO)
    // ============================================================
    crearVentanaFlotante() {
        const ventana = document.createElement('div');
        ventana.id = 'buscador-flotante-integrado';
        ventana.style.display = 'none';
        ventana.innerHTML = `
            <div class="bfi-overlay"></div>
            <div class="bfi-contenedor">
                <div class="bfi-header">
                    <span class="bfi-titulo">${this.getTextoBuscador('titulo')}</span>
                    <button class="bfi-cerrar">✕</button>
                </div>
                <div class="bfi-body">
                    <div id="bfi-resultados" class="bfi-resultados">
                        <p class="bfi-mensaje-inicial">${this.getTextoBuscador('mensaje_inicial')}</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(ventana);
    }

    agregarEstilos() {
        const estilos = document.createElement('style');
        estilos.id = 'bfi-estilos';
        estilos.textContent = `
            .bfi-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.4);
                backdrop-filter: blur(4px);
                z-index: 999998;
                animation: bfiFadeIn 0.25s ease;
            }
            @keyframes bfiFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes bfiSlideUp {
                from { opacity: 0; transform: translateY(30px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .bfi-contenedor {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
                max-width: 500px;
                max-height: 80vh;
                background: white;
                border-radius: 20px;
                box-shadow: 0 25px 80px rgba(0,0,0,0.35);
                z-index: 999999;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                animation: bfiSlideUp 0.3s ease;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .bfi-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background: var(--azul-nav, #1a365d);
                color: white;
                flex-shrink: 0;
            }
            .bfi-titulo {
                font-weight: 600;
                font-size: 16px;
            }
            .bfi-cerrar {
                background: rgba(255,255,255,0.15);
                border: none;
                color: white;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 18px;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .bfi-cerrar:hover {
                background: rgba(255,255,255,0.3);
                transform: rotate(90deg);
            }
            .bfi-body {
                padding: 16px 20px 20px;
                overflow-y: auto;
                flex: 1;
                max-height: 65vh;
            }
            .bfi-body::-webkit-scrollbar {
                width: 5px;
            }
            .bfi-body::-webkit-scrollbar-thumb {
                background: var(--azul-nav, #1a365d);
                border-radius: 10px;
            }
            .bfi-resultados {
                min-height: 60px;
                max-height: 400px;
                overflow-y: auto;
            }
            .bfi-resultados::-webkit-scrollbar {
                width: 4px;
            }
            .bfi-resultados::-webkit-scrollbar-thumb {
                background: var(--azul-nav, #1a365d);
                border-radius: 10px;
            }
            .bfi-mensaje-inicial {
                color: #a0aec0;
                text-align: center;
                padding: 40px 0;
                font-size: 15px;
            }
            .bfi-sin-resultados {
                text-align: center;
                padding: 40px 0;
                color: #a0aec0;
                font-size: 15px;
            }
            .bfi-sin-resultados .bfi-icono {
                font-size: 32px;
                display: block;
                margin-bottom: 10px;
            }
            .bfi-sin-resultados .bfi-sugerencia {
                font-size: 13px;
                color: #a0aec0;
                display: block;
                margin-top: 4px;
            }
            .bfi-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 12px;
                border-radius: 12px;
                background: #f7fafc;
                margin-bottom: 8px;
                transition: all 0.2s;
                border: 1px solid transparent;
            }
            .bfi-item:hover {
                background: #edf2f7;
                border-color: #e2e8f0;
                box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            }
            .bfi-item .bfi-imagen {
                width: 50px;
                height: 50px;
                border-radius: 10px;
                object-fit: cover;
                background: #edf2f7;
                flex-shrink: 0;
                border: 1px solid #e2e8f0;
            }
            .bfi-item .bfi-imagen-error {
                width: 50px;
                height: 50px;
                border-radius: 10px;
                background: #edf2f7;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                border: 1px solid #e2e8f0;
            }
            .bfi-item .bfi-info {
                display: flex;
                flex-direction: column;
                gap: 2px;
                flex: 1;
                min-width: 0;
            }
            .bfi-item .bfi-nombre {
                font-weight: 600;
                color: #2d3748;
                font-size: 14px;
            }
            .bfi-item .bfi-categoria-tag {
                font-size: 11px;
                color: #718096;
                background: #e2e8f0;
                padding: 2px 10px;
                border-radius: 12px;
                display: inline-block;
                width: fit-content;
            }
            .bfi-item .bfi-btn-comprar {
                padding: 6px 14px;
                background: #d69e2e !important;
                color: white !important;
                border: none !important;
                border-radius: 8px !important;
                cursor: pointer !important;
                font-weight: 600 !important;
                font-size: 12px !important;
                transition: all 0.2s !important;
                white-space: nowrap !important;
                flex-shrink: 0 !important;
            }
            .bfi-item .bfi-btn-comprar:hover {
                transform: scale(1.05) !important;
                box-shadow: 0 4px 12px rgba(214, 158, 46, 0.3) !important;
            }
            .bfi-item .bfi-btn-comprar.agregado {
                background: #a0aec0 !important;
                cursor: default !important;
            }
            .bfi-item .bfi-btn-comprar.agregado:hover {
                transform: none !important;
                box-shadow: none !important;
            }
            .bfi-notificacion {
                position: fixed;
                bottom: 100px;
                left: 50%;
                transform: translateX(-50%);
                background: #d69e2e;
                color: white;
                padding: 10px 20px;
                border-radius: 10px;
                font-weight: 600;
                font-size: 14px;
                z-index: 9999999;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                animation: bfiSlideUp 0.3s ease;
                max-width: 90%;
                text-align: center;
            }
            .bfi-resumen {
                font-size: 13px;
                color: #718096;
                padding: 8px 12px;
                background: #f7fafc;
                border-radius: 8px;
                margin-bottom: 12px;
            }
            @media (max-width: 640px) {
                .bfi-contenedor {
                    width: 95%;
                    max-height: 90vh;
                    top: 5%;
                    transform: translate(-50%, 0);
                    border-radius: 16px;
                }
                .bfi-body {
                    padding: 12px 14px 16px;
                    max-height: 70vh;
                }
                .bfi-header {
                    padding: 12px 16px;
                }
                .bfi-titulo {
                    font-size: 14px;
                }
                .bfi-item {
                    padding: 8px 10px;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .bfi-item .bfi-imagen {
                    width: 45px;
                    height: 45px;
                }
                .bfi-item .bfi-nombre {
                    font-size: 13px;
                }
                .bfi-item .bfi-btn-comprar {
                    padding: 5px 12px !important;
                    font-size: 11px !important;
                }
            }
        `;
        document.head.appendChild(estilos);
    }

    configurarEventos() {
        const ventana = document.getElementById('buscador-flotante-integrado');
        const overlay = ventana.querySelector('.bfi-overlay');
        const cerrar = ventana.querySelector('.bfi-cerrar');

        const buscarInputs = document.querySelectorAll(this.selectorInput);
        const buscarBotones = document.querySelectorAll(this.selectorBoton);
        
        let inputPrincipal = null;
        let botonPrincipal = null;

        buscarInputs.forEach(el => {
            if (el.offsetParent !== null && !inputPrincipal) {
                inputPrincipal = el;
            }
        });
        if (!inputPrincipal && buscarInputs.length > 0) {
            inputPrincipal = buscarInputs[0];
        }

        buscarBotones.forEach(el => {
            if (el.offsetParent !== null && !botonPrincipal) {
                botonPrincipal = el;
            }
        });
        if (!botonPrincipal && buscarBotones.length > 0) {
            botonPrincipal = buscarBotones[0];
        }

        if (inputPrincipal) {
            console.log('✅ Input de búsqueda encontrado');
            const newInput = inputPrincipal.cloneNode(true);
            inputPrincipal.parentNode.replaceChild(newInput, inputPrincipal);

            if (!newInput.hasAttribute('data-i18n-placeholder')) {
                newInput.placeholder = this.getTextoBuscador('buscar_placeholder');
            }

            newInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const termino = newInput.value.trim();
                    this.abrirVentana();
                    setTimeout(() => this.buscar(termino), 100);
                }
            });

            newInput.addEventListener('focus', () => {
                this.idiomaActual = localStorage.getItem('lumen_lang') || 'es';
            });

            if (botonPrincipal) {
                console.log('✅ Botón de búsqueda encontrado');
                const newBoton = botonPrincipal.cloneNode(true);
                botonPrincipal.parentNode.replaceChild(newBoton, botonPrincipal);

                newBoton.addEventListener('click', (e) => {
                    e.preventDefault();
                    const termino = newInput ? newInput.value.trim() : '';
                    this.abrirVentana();
                    setTimeout(() => this.buscar(termino), 100);
                });
            }
        } else {
            console.warn('⚠️ No se encontró input, creando botón flotante');
            this.crearBotonFlotante();
        }

        cerrar.addEventListener('click', () => this.cerrarVentana());
        overlay.addEventListener('click', () => this.cerrarVentana());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.ventanaAbierta) {
                this.cerrarVentana();
            }
        });
    }

    crearBotonFlotante() {
        const boton = document.createElement('button');
        boton.id = 'bfi-fallback-btn';
        boton.innerHTML = '🔍';
        boton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #1a365d;
            color: white;
            border: none;
            font-size: 26px;
            cursor: pointer;
            z-index: 999997;
            box-shadow: 0 4px 20px rgba(26,54,93,0.4);
            transition: all 0.3s;
        `;
        boton.title = this.getTextoBuscador('buscar_placeholder');
        boton.addEventListener('mouseenter', () => boton.style.transform = 'scale(1.1)');
        boton.addEventListener('mouseleave', () => boton.style.transform = 'scale(1)');
        boton.addEventListener('click', () => {
            this.abrirVentana();
            setTimeout(() => this.buscar(''), 100);
        });
        document.body.appendChild(boton);
        console.log('🔘 Botón de respaldo creado');
    }

    abrirVentana() {
        const ventana = document.getElementById('buscador-flotante-integrado');
        if (ventana) {
            ventana.style.display = 'block';
            this.ventanaAbierta = true;
            document.body.style.overflow = 'hidden';
            this.idiomaActual = localStorage.getItem('lumen_lang') || 'es';
            this.actualizarTextosVentana();
        }
    }

    cerrarVentana() {
        const ventana = document.getElementById('buscador-flotante-integrado');
        if (ventana) {
            ventana.style.display = 'none';
            this.ventanaAbierta = false;
            document.body.style.overflow = '';
        }
    }

    // ============================================================
    // AGREGAR AL CARRITO
    // ============================================================
    agregarAlCarritoDesdeBuscador(productId, btnElement) {
        if (window._addingToCart) return false;
        
        const now = Date.now();
        if (window._lastAddedProduct === productId && (now - window._lastAddTime) < 1000) return false;
        if (!productId) return false;
        
        window._addingToCart = true;
        window._lastAddedProduct = productId;
        window._lastAddTime = now;
        
        try {
            if (typeof Cart !== 'undefined' && typeof Cart.add === 'function') {
                Cart.add(productId);
                if (typeof Cart.render === 'function') Cart.render();
                
                if (btnElement) {
                    btnElement.textContent = this.getTextoBuscador('btn_agregado');
                    btnElement.classList.add('agregado');
                    btnElement.disabled = true;
                    
                    setTimeout(() => {
                        btnElement.textContent = this.getTextoBuscador('btn_comprar');
                        btnElement.classList.remove('agregado');
                        btnElement.disabled = false;
                        window._addingToCart = false;
                    }, 800);
                } else {
                    setTimeout(() => window._addingToCart = false, 500);
                }
                
                this.mostrarNotificacion(this.getTextoBuscador('notificacion_agregado'));
                return true;
            } else {
                window._addingToCart = false;
                return false;
            }
        } catch (error) {
            console.error('Error al agregar al carrito:', error);
            window._addingToCart = false;
            return false;
        }
    }

    // ============================================================
    // BÚSQUEDA BILINGÜE
    // ============================================================
    buscar(termino) {
        const resultadosDiv = document.getElementById('bfi-resultados');
        let resultados = this.productos;

        this.idiomaActual = localStorage.getItem('lumen_lang') || 'es';
        const esEspanol = this.idiomaActual === 'es';

        if (termino && termino.trim() !== '') {
            const terminoLower = termino.toLowerCase().trim();
            const palabras = terminoLower.split(/\s+/).filter(p => p.length > 0);
            
            const traducciones = {
                'sensorial': ['sensory', 'sensory', 'tactile', 'touch'],
                'causaefecto': ['cause', 'effect', 'cause-effect', 'causa', 'efecto'],
                'arte': ['art', 'craft', 'arte'],
                'construccion': ['construction', 'build', 'building', 'blocks', 'construcción'],
                'aprendizaje': ['learning', 'learn', 'education', 'educational', 'aprendizaje'],
                'bienestar': ['wellness', 'wellbeing', 'bienestar'],
                'pelota': ['ball', 'balls', 'pelota', 'pelotas'],
                'bloques': ['blocks', 'block', 'bloques', 'bloque'],
                'madera': ['wood', 'wooden', 'madera'],
                'magnetico': ['magnetic', 'magnético', 'magnetics'],
                'memoria': ['memory', 'memoria', 'memorama'],
                'domino': ['domino', 'dominó'],
                'bingo': ['bingo'],
                'pop it': ['pop it', 'popit', 'pop'],
                'fidget': ['fidget', 'fidgets', 'fidget toy'],
                'arena': ['sand', 'arena'],
                'cinetica': ['kinetic', 'cinética'],
                'tubos': ['tubes', 'tubos'],
                'torres': ['towers', 'torres'],
                'bolas': ['balls', 'bolas'],
                'engranajes': ['gears', 'engranajes'],
                'botones': ['buttons', 'botones'],
                'rompecabezas': ['puzzle', 'puzzles', 'rompecabezas'],
                'juguete': ['toy', 'toys', 'juguete', 'juguetes'],
                'musical': ['musical', 'music', 'musicales'],
                'libro': ['book', 'books', 'libro', 'libros'],
                'interactivo': ['interactive', 'interactivo'],
                'lapiz': ['pencil', 'pencils', 'lápiz', 'lápices'],
                'marcador': ['marker', 'markers', 'marcador', 'marcadores'],
                'plastilina': ['playdough', 'play-dough', 'clay', 'plastilina'],
                'arcilla': ['clay', 'arcilla'],
                'acuarelable': ['watercolor', 'watercolour', 'acuarela', 'acuarelable'],
                'triangular': ['triangular', 'triangulares'],
                'autonomia': ['autonomy', 'independence', 'autonomía'],
                'lenguaje': ['language', 'speech', 'lenguaje'],
                'matematica': ['math', 'mathematics', 'matemática', 'matemáticas'],
                'cuento': ['story', 'stories', 'cuento', 'cuentos'],
                'emocion': ['emotion', 'emotions', 'emociones'],
                'comunicacion': ['communication', 'comunicación'],
                'clasificacion': ['sorting', 'classification', 'clasificación'],
                'abaco': ['abacus', 'ábaco'],
                'regleta': ['rods', 'number rods', 'regleta', 'regletas'],
                'tangram': ['tangram'],
                'letras': ['letters', 'letras'],
                'dados': ['dice', 'dados'],
                'busy board': ['busy board'],
                'instrumento': ['instrument', 'instrumento'],
                'manta': ['blanket', 'manta'],
                'peso': ['weighted', 'weight', 'peso']
            };
            
            const self = this;
            
            function getPalabrasClave(producto) {
                const palabras = [];
                const idioma = self.idiomaActual || 'es';
                
                const nombre = self.getNombreProducto(producto).toLowerCase();
                palabras.push(nombre);
                
                const otroIdioma = idioma === 'es' ? 'en' : 'es';
                const otroNombre = self.getNombreProductoEnIdioma(producto, otroIdioma).toLowerCase();
                palabras.push(otroNombre);
                
                const titleKey = (producto.titleKey || '').toLowerCase();
                palabras.push(titleKey);
                const categoria = (producto.categoria || '').toLowerCase();
                palabras.push(categoria);
                
                const nombreParts = nombre.split(/\s+/);
                nombreParts.forEach(part => {
                    Object.keys(traducciones).forEach(key => {
                        if (traducciones[key].includes(part) || part.includes(key)) {
                            traducciones[key].forEach(t => {
                                palabras.push(t);
                            });
                        }
                    });
                });
                
                Object.keys(traducciones).forEach(key => {
                    if (categoria.includes(key) || traducciones[key].some(t => categoria.includes(t))) {
                        traducciones[key].forEach(t => {
                            palabras.push(t);
                        });
                    }
                });
                
                if (window.I18N_PRODUCTOS) {
                    const dict = window.I18N_PRODUCTOS[idioma] || window.I18N_PRODUCTOS.es;
                    const otroDict = window.I18N_PRODUCTOS[otroIdioma] || window.I18N_PRODUCTOS.en;
                    
                    if (producto.titleKey) {
                        const tituloEnOtro = otroDict[producto.titleKey] || '';
                        if (tituloEnOtro) palabras.push(tituloEnOtro.toLowerCase());
                    }
                    if (producto.descKey) {
                        const descEnOtro = otroDict[producto.descKey] || '';
                        if (descEnOtro) palabras.push(descEnOtro.toLowerCase());
                    }
                }
                
                return palabras.join(' ');
            }
            
            resultados = resultados.filter(p => {
                const textoCompleto = getPalabrasClave(p);
                return palabras.every(palabra => {
                    return textoCompleto.includes(palabra);
                });
            });
            
            resultados.sort((a, b) => {
                const nombreA = self.getNombreProducto(a).toLowerCase();
                const nombreB = self.getNombreProducto(b).toLowerCase();
                const exactA = nombreA === terminoLower ? 0 : 1;
                const exactB = nombreB === terminoLower ? 0 : 1;
                if (exactA !== exactB) return exactA - exactB;
                const startsA = nombreA.startsWith(terminoLower) ? 0 : 1;
                const startsB = nombreB.startsWith(terminoLower) ? 0 : 1;
                if (startsA !== startsB) return startsA - startsB;
                return nombreA.localeCompare(nombreB);
            });
        }

        if (resultados.length === 0) {
            const sinResultados = this.getTextoBuscador('sin_resultados');
            const sugerencia = this.getTextoBuscador('sin_resultados_sugerencia');
            const escribiendo = this.getTextoBuscador('escribiendo');
            
            resultadosDiv.innerHTML = `
                <div class="bfi-sin-resultados">
                    <span class="bfi-icono">🔍</span>
                    ${termino ? `${sinResultados} "<strong>${termino}</strong>"` : escribiendo}
                    <span class="bfi-sugerencia">${sugerencia}</span>
                </div>
            `;
        } else {
            const resumenResultados = this.getTextoBuscador('resumen_resultados');
            const resumenResultadosPlural = this.getTextoBuscador('resumen_resultados_plural');
            const resumenPara = this.getTextoBuscador('resumen_para');
            const resumenMostrando = this.getTextoBuscador('resumen_mostrando');
            const resumenProductos = this.getTextoBuscador('resumen_productos');
            const btnComprar = this.getTextoBuscador('btn_comprar');
            
            const textoResultado = resultados.length === 1 ? resumenResultados : resumenResultadosPlural;
            
            const mensaje = termino ? 
                `<div class="bfi-resumen"> ${resultados.length} ${textoResultado} ${resumenPara} "<strong>${termino}</strong>"</div>` :
                `<div class="bfi-resumen"> ${resumenMostrando} ${resultados.length} ${resumenProductos}</div>`;
            
            const self = this;
            resultadosDiv.innerHTML = mensaje + resultados.map((p, index) => {
                const nombreMostrar = self.getNombreProducto(p);
                // Usar la categoría traducida sin emojis
                const categoriaTraducida = self.getCategoriaTraducida(p.categoria);
                return `
                <div class="bfi-item" data-id="${p.id}" data-index="${index}">
                    <img class="bfi-imagen" src="${p.img || ''}" 
                         alt="${nombreMostrar}"
                         onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'bfi-imagen-error\\'>📦</div>' + this.parentElement.querySelector('.bfi-info').outerHTML + this.parentElement.querySelector('.bfi-btn-comprar').outerHTML;">
                    <div class="bfi-info">
                        <span class="bfi-nombre">${nombreMostrar}</span>
                        <span class="bfi-categoria-tag">${categoriaTraducida}</span>
                    </div>
                    <button class="bfi-btn-comprar" data-id="${p.id}">
                        ${btnComprar}
                    </button>
                </div>
            `}).join('');

            if (this._resultadosListener) {
                resultadosDiv.removeEventListener('click', this._resultadosListener);
            }
            
            this._resultadosListener = (e) => {
                const btn = e.target.closest('.bfi-btn-comprar');
                if (!btn) return;
                
                e.stopPropagation();
                e.preventDefault();
                
                const id = btn.dataset.id;
                if (!id) return;
                
                self.agregarAlCarritoDesdeBuscador(id, btn);
            };
            
            resultadosDiv.addEventListener('click', this._resultadosListener);
        }
    }

    mostrarNotificacion(mensaje) {
        const notifAnterior = document.querySelector('.bfi-notificacion');
        if (notifAnterior) notifAnterior.remove();

        const notif = document.createElement('div');
        notif.className = 'bfi-notificacion';
        notif.textContent = mensaje;
        document.body.appendChild(notif);

        setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transition = 'opacity 0.3s';
            setTimeout(() => notif.remove(), 300);
        }, 2500);
    }

    // ============================================================
    // OBTENER CATEGORÍA TRADUCIDA (SIN EMOJIS)
    // ============================================================
    getCategoriaLabel(categoria) {
        return this.getCategoriaTraducida(categoria);
    }
}

// ============================================================
// INICIALIZAR
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (typeof BuscadorFlotanteIntegrado !== 'undefined') {
            window.buscadorIntegrado = new BuscadorFlotanteIntegrado();
            console.log('✅ Buscador flotante inicializado');
        }
    }, 800);
});