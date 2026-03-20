// ============= PRODUCTS DATA =============
const products = [
    {
        id: 1,
        name: "Bánh Kem Dâu Tây",
        price: 350000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
        description: "Bánh kem mềm với dâu tây tươi, kem tươi thơm"
    },
    {
        id: 2,
        name: "Bánh Quy Chocolate",
        price: 120000,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80",
        description: "Bánh quy giòn với sô cô la đậm đà"
    },
    {
        id: 3,
        name: "Bánh Tiramisu",
        price: 280000,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=500&q=80",
        description: "Bánh Tiramisu kinh điển với hương vị châu Âu"
    },
    {
        id: 4,
        name: "Bánh Carrot Cake",
        price: 180000,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=500&q=80",
        description: "Bánh cà rốt mịn màng với kem cheese"
    },
    {
        id: 5,
        name: "Bánh Milano",
        price: 220000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
        description: "Bánh cream puff kiểu Ý sang trọng"
    },
    {
        id: 6,
        name: "Bánh Matcha",
        price: 260000,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80",
        description: "Bánh matcha Nhật Bản thơm mát độc đáo"
    }
];

// ============= CART MANAGEMENT =============
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(c => c.id === productId);
    
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} đã được thêm vào giỏ hàng`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(c => c.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;
    
    renderCartItems();
    calculateTotal();
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: #999;">Giỏ hàng trống</p>';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div style="color: #e91e63; font-weight: 600; margin-bottom: 8px;">${(item.price).toLocaleString('vi-VN')}đ</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">🗑️</button>
        </div>
    `).join('');
}

function calculateTotal() {
    const totalPrice = document.getElementById('totalPrice');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total.toLocaleString('vi-VN');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

// ============= CHECKOUT =============
function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartSummary = cart.map(item => `${item.name} x${item.quantity}`).join(', ');
    const message = `Xin chào! Tôi muốn đặt hàng:\n${cartSummary}\n\nTổng tiền: ${total.toLocaleString('vi-VN')}đ`;
    
    // Thay số điện thoại của bạn vào đây (bỏ ký tự + hoặc 0 ở đầu, thay bằng mã quốc gia)
    const phoneNumber = "84901234567"; // Ví dụ: 0901234567 -> 84901234567
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// ============= FORM SUBMISSION =============
function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.children[0].value;
    const email = form.children[1].value;
    const phone = form.children[2].value;
    const message = form.children[3].value;
    
    // Gửi qua WhatsApp
    const phoneNumber = "84901234567"; // Thay số điện thoại của bạn
    const text = `Liên hệ từ website:\n\nTên: ${name}\nEmail: ${email}\nSĐT: ${phone}\nTin nhắn: ${message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    
    showNotification('Cảm ơn bạn! Tin nhắn sẽ được gửi qua WhatsApp');
    form.reset();
}

// ============= NOTIFICATIONS =============
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 300;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ============= PRODUCTS GRID =============
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    productsGrid.innerHTML = products.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price.toLocaleString('vi-VN')}đ</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    `).join('');
}

// ============= INITIALIZE =============
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartIcon = document.querySelector('.cart-icon');
        
        if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target) && cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    });
});

// Add smooth scrolling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
