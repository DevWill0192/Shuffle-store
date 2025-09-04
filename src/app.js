// Import SCSS styles
import './styles.scss';

// SHUFFLE STORE - Cart System and UI Interactions
class ShuffleStore {
  constructor() {
    this.cart = this.loadCart();
    this.products = [];
    this.init();
  }

  init() {
    this.loadProducts();
    this.bindEvents();
    this.updateCartUI();
    this.initScrollEffects();
    this.initViewAllProducts();
  }

  // Load products from the server
  async loadProducts() {
    try {
      const response = await fetch('/data/products.json');
      this.products = await response.json();
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  // Cart Management
  loadCart() {
    try {
      const cartData = localStorage.getItem('shuffle-cart');
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('shuffle-cart', JSON.stringify(this.cart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }

  addToCart(productId, variant = null) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
      id: productId,
      variant: variant || product.variants[0],
      name: product.title,
      price: variant ? variant.price : product.price,
      image: product.image,
      quantity: 1
    };

    const existingItem = this.cart.find(item => 
      item.id === productId && item.variant.id === cartItem.variant.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push(cartItem);
    }

    this.saveCart();
    this.updateCartUI();
    this.showAddToCartAnimation();
    this.dispatchCartEvent('cart:item-added', cartItem);
  }

  removeFromCart(productId, variantId) {
    this.cart = this.cart.filter(item => 
      !(item.id === productId && item.variant.id === variantId)
    );
    this.saveCart();
    this.updateCartUI();
    this.dispatchCartEvent('cart:item-removed', { productId, variantId });
  }

  updateQuantity(productId, variantId, quantity) {
    const item = this.cart.find(item => 
      item.id === productId && item.variant.id === variantId
    );

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId, variantId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartUI();
        this.dispatchCartEvent('cart:updated', item);
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartUI();
    this.dispatchCartEvent('cart:cleared');
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  // UI Updates
  updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartContent = document.getElementById('cart-content');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');

    if (cartCount) {
      cartCount.textContent = this.getCartItemCount();
    }

    if (cartTotal) {
      cartTotal.textContent = this.getCartTotal().toFixed(2);
    }

    if (cartContent && cartEmpty && cartFooter) {
      if (this.cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        cartContent.innerHTML = '';
        cartContent.appendChild(cartEmpty);
      } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';
        this.renderCartItems(cartContent);
      }
    }
  }

  renderCartItems(container) {
    container.innerHTML = '';
    
    this.cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item__image">
          <img src="/assets/${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item__info">
          <h4 class="cart-item__name">${item.name}</h4>
          <p class="cart-item__variant">${item.variant.name}</p>
          <p class="cart-item__price">$${item.price.toFixed(2)}</p>
        </div>
        <div class="cart-item__controls">
          <button class="cart-item__quantity-btn" data-action="decrease" data-product-id="${item.id}" data-variant-id="${item.variant.id}">-</button>
          <span class="cart-item__quantity">${item.quantity}</span>
          <button class="cart-item__quantity-btn" data-action="increase" data-product-id="${item.id}" data-variant-id="${item.variant.id}">+</button>
        </div>
        <button class="cart-item__remove" data-product-id="${item.id}" data-variant-id="${item.variant.id}">×</button>
      `;
      container.appendChild(cartItem);
    });
  }

  showAddToCartAnimation() {
    const cartIcon = document.querySelector('.header__cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('shake');
      setTimeout(() => {
        cartIcon.classList.remove('shake');
      }, 500);
    }
  }

  // Event Handling
  bindEvents() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('.product-card__add-to-cart') || e.target.closest('.product-card__add-to-cart')) {
        e.preventDefault();
        const button = e.target.closest('.product-card__add-to-cart');
        const productId = parseInt(button.dataset.productId);
        this.addToCart(productId);
      }
    });

    // Cart toggle
    const cartToggle = document.getElementById('cart-toggle');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartClose = document.getElementById('cart-close');

    if (cartToggle && cartDropdown) {
      cartToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        cartDropdown.classList.toggle('active');
      });
    }

    if (cartClose && cartDropdown) {
      cartClose.addEventListener('click', () => {
        cartDropdown.classList.remove('active');
      });
    }

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
      if (cartDropdown && !cartDropdown.contains(e.target) && !cartToggle.contains(e.target)) {
        cartDropdown.classList.remove('active');
      }
    });

    // Cart item controls
    document.addEventListener('click', (e) => {
      if (e.target.matches('.cart-item__quantity-btn')) {
        const action = e.target.dataset.action;
        const productId = parseInt(e.target.dataset.productId);
        const variantId = e.target.dataset.variantId;
        const item = this.cart.find(item => item.id === productId && item.variant.id === variantId);
        
        if (item) {
          const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          this.updateQuantity(productId, variantId, newQuantity);
        }
      }

      if (e.target.matches('.cart-item__remove')) {
        const productId = parseInt(e.target.dataset.productId);
        const variantId = e.target.dataset.variantId;
        this.removeFromCart(productId, variantId);
      }
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        this.handleNewsletterSignup(email);
      });
    }
  }

  // View All Products functionality
  initViewAllProducts() {
    const viewAllBtn = document.getElementById('view-all-btn');
    const hiddenProducts = document.getElementById('hidden-products');
    
    if (viewAllBtn && hiddenProducts) {
      viewAllBtn.addEventListener('click', () => {
        if (hiddenProducts.style.display === 'none') {
          hiddenProducts.style.display = 'grid';
          viewAllBtn.textContent = 'SHOW LESS';
        } else {
          hiddenProducts.style.display = 'none';
          viewAllBtn.textContent = 'VIEW ALL';
        }
      });
    }
  }

  // Scroll effects
  initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Newsletter signup
  handleNewsletterSignup(email) {
    // Simulate newsletter signup
    console.log('Newsletter signup:', email);
    alert('Thanks for subscribing to our newsletter!');
  }

  // Event dispatching
  dispatchCartEvent(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.shuffleStore = new ShuffleStore();
  console.log('SHUFFLE STORE is online! 🛍️');
});

// Export for potential module usage
export default ShuffleStore;
