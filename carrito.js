/* =========================================================
   CARRITO.JS - VERSIÓN DEFINITIVA (CON ACTUALIZACIÓN EN TIEMPO REAL)
   ========================================================= */

const Cart = (function () {

  const STORAGE_KEY = 'lumen_cart';

  let items = {};   // { productId: { id, title, img, cantidad } }

  let config = {
    t: (key) => key,
    getProduct: () => null,
    onChange: null
  };

  let cartToggle, cartDropdown, cartCount, cartList, cartEmpty;

  /* ---------- persistencia ---------- */
  function load() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      
      items = {};
      Object.keys(stored).forEach(key => {
        const value = stored[key];
        
        if (typeof value === 'number') {
          items[key] = value;
        } 
        else if (typeof value === 'object' && value !== null) {
          items[key] = value;
        }
      });
      
    } catch (e) {
      items = {};
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) { /* almacenamiento no disponible, seguimos en memoria */ }
  }

  /* ---------- Función auxiliar para obtener producto completo ---------- */
  function getCompleteProduct(productId) {
    if (items[productId] && typeof items[productId] === 'object') {
      return items[productId];
    }
    
    const productData = config.getProduct(productId);
    if (productData) {
      return {
        id: productId,
        title: productData.title || productId,
        img: productData.img || '',
        cantidad: typeof items[productId] === 'number' ? items[productId] : 1
      };
    }
    
    return {
      id: productId,
      title: productId,
      img: '',
      cantidad: typeof items[productId] === 'number' ? items[productId] : 1
    };
  }

  /* ---------- ACTUALIZAR CONTADOR (FUERZA LA ACTUALIZACIÓN) ---------- */
  function actualizarContador() {
    // Buscar el contador en el DOM directamente
    let cartCountElement = document.getElementById('cartCount');
    
    // Si no existe, buscarlo por clase
    if (!cartCountElement) {
      cartCountElement = document.querySelector('.cart-count');
    }
    
    if (cartCountElement) {
      const total = count();
      cartCountElement.textContent = total;
      
      // Efecto bump
      cartCountElement.classList.remove('bump');
      // Forzar reflow
      void cartCountElement.offsetWidth;
      cartCountElement.classList.add('bump');
    }
  }

  /* ---------- API pública ---------- */
  function init(userConfig) {
    config = Object.assign({}, config, userConfig || {});
    load();
    bindDOM();
    render();
    
    // Escuchar cambios de idioma para re-renderizar
    document.addEventListener('languageChanged', function() {
      render();
    });
    
    // Escuchar evento personalizado para actualizar el contador
    document.addEventListener('cartUpdated', function() {
      actualizarContador();
    });
  }

  function add(productId, qty = 1) {
    if (!productId) return;
    
    const productData = config.getProduct(productId);
    
    if (items[productId] && typeof items[productId] === 'object') {
      items[productId].cantidad = (items[productId].cantidad || 0) + qty;
    } else if (productData) {
      items[productId] = {
        id: productId,
        title: productData.title || productId,
        img: productData.img || '',
        cantidad: qty
      };
    } else {
      const currentQty = typeof items[productId] === 'number' ? items[productId] : 0;
      items[productId] = currentQty + qty;
    }
    
    save();
    render();
    
    // 🔥 FORZAR ACTUALIZACIÓN DEL CONTADOR
    setTimeout(actualizarContador, 10);
  }

  function remove(productId) {
    if (!productId) return;
    
    delete items[productId];
    save();
    render();
    
    // 🔥 FORZAR ACTUALIZACIÓN DEL CONTADOR INMEDIATAMENTE
    actualizarContador();
    
    // Y también con un pequeño retraso por si el DOM no se actualizó
    setTimeout(actualizarContador, 50);
  }

  function setQty(productId, qty) {
    if (qty <= 0) return remove(productId);
    
    if (items[productId] && typeof items[productId] === 'object') {
      items[productId].cantidad = qty;
    } else {
      const productData = config.getProduct(productId);
      items[productId] = {
        id: productId,
        title: productData?.title || productId,
        img: productData?.img || '',
        cantidad: qty
      };
    }
    
    save();
    render();
    actualizarContador();
  }

  function count() {
    let total = 0;
    Object.values(items).forEach(value => {
      if (typeof value === 'number') {
        total += value;
      } else if (typeof value === 'object' && value !== null) {
        total += (value.cantidad || 0);
      }
    });
    return total;
  }

  function getItems() {
    const result = [];
    Object.keys(items).forEach(key => {
      const value = items[key];
      if (typeof value === 'object' && value !== null) {
        result.push({ ...value });
      } else if (typeof value === 'number') {
        const productData = config.getProduct(key);
        result.push({
          id: key,
          title: productData?.title || key,
          img: productData?.img || '',
          cantidad: value
        });
      }
    });
    return result;
  }

  function clear() {
    items = {};
    save();
    render();
    actualizarContador();
  }

  /* ---------- dropdown ---------- */
  function openDropdown() {
    if (cartDropdown) cartDropdown.classList.add('open');
  }

  function closeDropdown() {
    if (cartDropdown) cartDropdown.classList.remove('open');
  }

  function toggleDropdown() {
    if (!cartDropdown) return;
    cartDropdown.classList.contains('open') ? closeDropdown() : openDropdown();
  }

  /* ---------- DOM ---------- */
  function bindDOM() {
    cartToggle   = document.getElementById('cartToggle');
    cartDropdown = document.getElementById('cartDropdown');
    cartCount    = document.getElementById('cartCount');
    cartList     = document.getElementById('cartList');
    cartEmpty    = document.getElementById('cartEmpty');

    if (cartToggle) {
      cartToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
      });
    }

    document.addEventListener('click', (e) => {
      if (
        cartDropdown && !cartDropdown.contains(e.target) &&
        cartToggle && !cartToggle.contains(e.target)
      ) {
        closeDropdown();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  /* ---------- render ---------- */
  function render() {
    // 🔥 ACTUALIZAR CONTADOR SIEMPRE
    actualizarContador();
    
    if (!cartList) return;

    cartList.innerHTML = '';
    const ids = Object.keys(items);

    if (ids.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'cart-empty';
      empty.id = 'cartEmpty';
      empty.textContent = config.t('cart_empty');
      cartList.appendChild(empty);
      if (typeof config.onChange === 'function') config.onChange();
      return;
    }

    ids.forEach((id) => {
      const item = getCompleteProduct(id);
      
      // Normalizar: si es un número, convertirlo a objeto
      if (typeof items[id] === 'number') {
        items[id] = {
          id: id,
          title: item.title || id,
          img: item.img || '',
          cantidad: items[id]
        };
        save();
      }

      const row = document.createElement('div');
      row.className = 'cart-item';
      
      const imgHtml = item.img ? `<img src="${item.img}" alt="${item.title}" class="cart-item-img">` : '';
      
      row.innerHTML = `
        <div class="cart-item-info">
          ${imgHtml}
          <div class="cart-item-details">
            <div class="cart-item-title">${item.title || id}</div>
            <div class="cart-item-qty">${config.t('cart_qty_prefix')}${item.cantidad || 1}</div>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${id}" type="button">${config.t('cart_remove')}</button>
      `;
      cartList.appendChild(row);
    });

    // 🔥 USAR DELEGACIÓN DE EVENTOS EN VEZ DE LISTENERS INDIVIDUALES
    // (Esto evita que se dupliquen eventos)
    if (cartList._removeListener) {
      cartList.removeEventListener('click', cartList._removeListener);
    }
    
    cartList._removeListener = function(e) {
      const btn = e.target.closest('.cart-item-remove');
      if (btn) {
        e.stopPropagation();
        const productId = btn.getAttribute('data-id');
        if (productId) {
          remove(productId);
        }
      }
    };
    
    cartList.addEventListener('click', cartList._removeListener);

    if (typeof config.onChange === 'function') config.onChange();
  }

  /* ---------- EXPORTAR ---------- */
  return {
    init,
    add,
    remove,
    setQty,
    clear,
    count,
    getItems,
    render,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    // Exponer función de actualización para uso externo
    actualizarContador
  };

})();