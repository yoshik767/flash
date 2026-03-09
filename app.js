const GOOGLE_CLIENT_ID = "976848195359-cr75430rapa4kd4lidljhvo1tq5mqboq.apps.googleusercontent.com";

// ===== THEME TOGGLE =====
function toggleTheme(checkbox) {
    const thumb = document.getElementById('toggleThumb');
    if (checkbox.checked) {
        document.body.classList.add('dark');
        thumb.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        thumb.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

function applyStoredTheme() {
    const stored = localStorage.getItem('theme');
    const toggle = document.getElementById('themeToggle');
    const thumb = document.getElementById('toggleThumb');
    if (stored === 'dark') {
        document.body.classList.add('dark');
        toggle.checked = true;
        thumb.textContent = '🌙';
    } else {
        thumb.textContent = '☀️';
    }
}

// ===== DATA =====
const products = [
    { id: 1, name: "Heritage Milk", price: 33, originalPrice: 35, weight: "500 ml", category: "Dairy", img: "https://m.media-amazon.com/images/I/815V9EawbJL._AC_UF894,1000_QL80_.jpg" },
    { id: 2, name: "Eggoz Brown Eggs", price: 85, originalPrice: 99, weight: "6 pcs", category: "Dairy", img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Farm Fresh Potato", price: 20, originalPrice: 30, weight: "500 g", category: "Veg", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "Lays Potato Chips", price: 20, originalPrice: 20, weight: "50 g", category: "Munchies", img: "https://m.media-amazon.com/images/I/717Ve0m8BXL.jpg" },
    { id: 5, name: "Coco Cola", price: 45, originalPrice: 45, weight: "250 ml", category: "Drinks", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80" },
    { id: 6, name: "Fresh Alphonso Mangoes", price: 199, originalPrice: 250, weight: "1 kg", category: "Veg", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=300&q=80" },
    { id: 7, name: "Vanilla Bean Tub", price: 240, originalPrice: 300, weight: "700 ml", category: "Ice Cream", img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=300&q=80" },
    { id: 8, name: "Bread", price: 60, originalPrice: 80, weight: "400 g", category: "Dairy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9r-lTbqJKsW1nwiQTdVftDfHtIbyqbzyPQ&s" },
    { id: 9, name: "Chocolate Smoothie", price: 200, originalPrice: 240, weight: "500ml", category: "Dairy", img: "https://abeautifulmess.com/wp-content/uploads/2023/04/chocolate-smoothie-recipe.--scaled.jpg" },
    { id: 10, name: "Kitkat", price: 55, originalPrice: 80, weight: "70g", category: "Munchies", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTaRzYbzvYjRihhE5g7alIvF-0og5KB6eFWY5qM-5osLY_slSSAoxKZtgkYSXWV1DgbGYfThRmtORA0JDwyb6A8gRZzGkvxvQoArQsuz0Hrk46XO-Z-Lsv2EZV" },
    { id: 11, name: "iPhone 17 Pro Max", price: 149999, originalPrice: 150000, weight: "242g", category: "Electronics", img: "https://backend.paiinternational.in/media/images/2_pJld4tp.webp" },
    { id: 12, name: "AirPods Pro 3", price: 25000, originalPrice: 26000, weight: "55g", category: "Electronics", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181" },
    { id: 13, name: "Victus Gaming Laptop", price: 63000, originalPrice: 73000, weight: "2.3kg", category: "Electronics", img: "https://m.media-amazon.com/images/I/71p8Hn5XcsL.jpg" },
    { id: 14, name: "Apple Watch Ultra 3", price: 80000, originalPrice: 90000, weight: "61.6g", category: "Electronics", img: "https://m.media-amazon.com/images/I/71UenT9AO6L._AC_UF1000,1000_QL80_.jpg" },
    { id: 15, name: "iPhone 15", price: 50000, originalPrice: 80000, weight: "171g", category: "Electronics", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLe_hSKnPLx_HZ_sDemoAlp5TUoloz6uUN3vsLBpTct8aUhD4AEyf0FOUUh0y9XZGPTFAbr-HydqkVuhUmsjZ94iu7D2Na" },
    { id: 16, name: "Sony WH-1000XM6", price: 35000, originalPrice: 50000, weight: "252.6g", category: "Electronics", img: "https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Primary_image_Black?$S7Product$&fmt=png-alpha" },
    { id: 17, name: "iPad Pro M5", price: 110000, originalPrice: 130000, weight: "579g", category: "Electronics", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgInFzSDYuMSraHM9N-QCxqdlFDfPEPKFv5eZTuTl3-qKk6Q6SKLwKFmNGx-I-EozpPCibfGQbXADS31pjjDUqGPV0km3xhpoMBTfW0ch-pl7YvUU4T25zvWg" }
];

const categories = [
    { name: "Dairy", icon: "https://cdn-icons-png.flaticon.com/128/3050/3050212.png" },
    { name: "Veg", icon: "https://cdn-icons-png.flaticon.com/128/2329/2329865.png" },
    { name: "Munchies", icon: "https://cdn-icons-png.flaticon.com/128/2553/2553642.png" },
    { name: "Drinks", icon: "https://cdn-icons-png.flaticon.com/128/992/992747.png" },
    { name: "Ice Cream", icon: "https://cdn-icons-png.flaticon.com/128/938/938063.png" },
    { name: "Electronics", icon: "https://cdn-icons-png.flaticon.com/128/3659/3659899.png" }
];

let cart = {};
let currentCategory = 'All';
let isLoggedIn = false;
let user = { name: "Guest", img: "" };

// ===== GOOGLE AUTH =====
function initializeGoogleSignIn() {
    if (GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID_HERE") {
        document.getElementById('demoLoginBtn').style.display = 'flex';
        return;
    }
    document.getElementById('demoLoginBtn').style.display = 'none';
    google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleCallback });
    google.accounts.id.renderButton(document.getElementById("googleButtonContainer"), { theme: document.body.classList.contains('dark') ? "filled_black" : "outline", size: "large", width: 320 });
}

function handleGoogleCallback(response) {
    document.getElementById('loginLoader').classList.remove('hidden');
    document.getElementById('loginLoader').style.display = 'flex';
    const userObject = parseJwt(response.credential);
    setTimeout(() => {
        isLoggedIn = true;
        user = { name: userObject.given_name || userObject.name, email: userObject.email, img: userObject.picture };
        updateAuthUI(); toggleLoginModal();
        localStorage.setItem('google_token', response.credential);
    }, 800);
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')));
}

function handleDemoLogin() {
    document.getElementById('loginLoader').classList.remove('hidden');
    document.getElementById('loginLoader').style.display = 'flex';
    setTimeout(() => {
        isLoggedIn = true;
        user = { name: "Rahul", email: "rahul@example.com", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" };
        updateAuthUI(); toggleLoginModal();
    }, 1500);
}

function updateAuthUI() {
    document.getElementById('authContainer').innerHTML = `
    <div onclick="toggleProfileMenu()" class="relative flex items-center gap-2 cursor-pointer rounded-full pr-2 py-1 pl-1 transition" style="border:1px solid transparent;"
        onmouseover="this.style.borderColor='var(--border)';this.style.background='var(--bg-elevated)'"
        onmouseout="this.style.borderColor='transparent';this.style.background='transparent'">
        <img src="${user.img}" class="w-8 h-8 rounded-full border t-border" style="background:var(--bg-elevated);">
        <span class="text-xs font-bold hidden md:block t-text">Hi, ${user.name}</span>
        <div id="profileDropdown" class="hidden absolute top-full right-0 mt-2 rounded-xl shadow-xl p-2 w-48 z-50 t-surface border t-border">
            <button onclick="handleLogout()" class="w-full text-left px-3 py-2 text-xs rounded-lg font-bold flex items-center gap-2 transition" style="color:#f87171;"
                onmouseover="this.style.background='var(--bg-elevated)'" onmouseout="this.style.background='transparent'">
                <i data-lucide="log-out" class="w-3 h-3"></i>Logout
            </button>
        </div>
    </div>`;
    lucide.createIcons();
}

function toggleProfileMenu() { document.getElementById('profileDropdown').classList.toggle('hidden'); }

function handleLogout() {
    isLoggedIn = false; user = { name: "Guest", img: "" };
    localStorage.removeItem('google_token');
    document.getElementById('authContainer').innerHTML = `<button onclick="toggleLoginModal()" class="font-bold text-xs px-3 py-2 t-muted transition">Login</button>`;
}

// ===== UPI =====
const upiIds = ["7396894544@fam"];

function showUpiQR() {
    const amount = Object.keys(cart).reduce((sum, id) => {
        const p = products.find(p => p.id == id);
        return sum + (p.price * cart[id]);
    }, 0);
    const upi = upiIds[0];
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(`upi://pay?pa=${upi}&pn=Flash&am=${amount}&cu=INR`)}`;
    document.getElementById("upiQrImage").src = qrUrl;
    document.getElementById("upiIdText").innerText = upi;
    document.getElementById("upiModal").classList.remove("hidden");
}

function completePayment() {
    document.getElementById("upiModal").classList.add("hidden");
    showSuccessScreen();
}

function closeUpiModal() {
    document.getElementById("upiModal").classList.add("hidden");
    renderCartDrawer(); // Reset the loader on the Checkout button
}

// ===== INIT =====
function init() {
    applyStoredTheme();
    const savedToken = localStorage.getItem('google_token');
    if (savedToken) {
        try {
            const u = parseJwt(savedToken);
            isLoggedIn = true;
            user = { name: u.given_name || u.name, email: u.email, img: u.picture };
            updateAuthUI();
        } catch(e) { localStorage.removeItem('google_token'); }
    }
    renderSidebar(); renderProducts(products); lucide.createIcons();
    setTimeout(() => { if (typeof google !== 'undefined') initializeGoogleSignIn(); }, 1000);
    document.querySelectorAll('.search-input').forEach(input => {
        input.addEventListener('input', e => {
            const term = e.target.value.toLowerCase();
            renderProducts(products.filter(p => p.name.toLowerCase().includes(term)));
        });
    });
}

// ===== RENDER =====
function renderSidebar() {
    const container = document.getElementById('categoryList');
    const mobileContainer = document.getElementById('mobileCategoryList');
    const activeBase = 'background:var(--brand-soft,#e0e7ff); color:var(--brand);';
    const inactiveBase = 'color:var(--text-secondary);';
    
    const renderItems = (isMobile) => {
        let borderStyle = isMobile ? 'border-bottom:3px solid var(--brand);' : 'border-left:3px solid var(--brand);';
        let html = `<div onclick="filterCategory('All')" class="cursor-pointer flex ${isMobile ? 'flex-col min-w-[60px]' : 'flex-col lg:flex-row'} items-center gap-2 lg:gap-3 px-2 py-3 lg:px-3 rounded-xl transition mb-1 flex-shrink-0" style="${currentCategory === 'All' ? activeBase + borderStyle : inactiveBase}">
            <div class="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full" style="background:var(--bg-elevated)"><i data-lucide="layout-grid" class="w-4 h-4"></i></div>
            <span class="text-[10px] lg:text-sm font-bold">All</span>
        </div>`;
        categories.forEach(cat => {
            const isActive = currentCategory === cat.name;
            html += `<div onclick="filterCategory('${cat.name}')" class="cursor-pointer flex ${isMobile ? 'flex-col min-w-[60px]' : 'flex-col lg:flex-row'} items-center gap-2 lg:gap-3 px-2 py-3 lg:px-3 rounded-xl transition mb-1 flex-shrink-0" style="${isActive ? activeBase + borderStyle : inactiveBase}">
                <img src="${cat.icon}" class="w-8 h-8 object-contain" style="${isActive ? '' : 'filter:grayscale(1) opacity(0.5);'}">
                <span class="text-[10px] lg:text-sm ${isActive ? 'font-bold' : 'font-medium'}">${cat.name}</span>
            </div>`;
        });
        return html;
    };

    if (container) container.innerHTML = renderItems(false);
    if (mobileContainer) mobileContainer.innerHTML = renderItems(true);
    lucide.createIcons();
}

function renderProducts(productList) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = productList.length ? '' : `<div class="col-span-full text-center py-10 t-faint">No products found.</div>`;
    productList.forEach(p => {
        const qty = cart[p.id] || 0;
        const addBtn = `<button onclick="updateQuantity(${p.id}, 1)" class="px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition w-20" style="border:1px solid var(--accent)40; color:var(--accent); background:var(--accent-soft);" onmouseover="this.style.background='var(--accent)';this.style.color='white'" onmouseout="this.style.background='var(--accent-soft)';this.style.color='var(--accent)'">ADD</button>`;
        const qtyBtn = `<div class="flex items-center rounded-lg text-white text-xs font-bold h-8 w-20" style="background:var(--accent);">
            <button onclick="updateQuantity(${p.id}, -1)" class="w-1/3 h-full rounded-l-lg flex items-center justify-center hover:brightness-90">-</button>
            <span class="w-1/3 text-center">${qty}</span>
            <button onclick="updateQuantity(${p.id}, 1)" class="w-1/3 h-full rounded-r-lg flex items-center justify-center hover:brightness-90">+</button>
        </div>`;
        grid.innerHTML += `
        <div class="rounded-2xl p-3 transition duration-300 flex flex-col justify-between h-full relative group card-hover cursor-pointer border" style="background:var(--bg-card); border-color:var(--border);">
            <div class="relative w-full aspect-[4/3] mb-2 flex items-center justify-center rounded-xl overflow-hidden" style="background:var(--bg-elevated);">
                <img src="${p.img}" class="product-img h-full object-contain transform group-hover:scale-110 transition duration-500">
            </div>
            <div>
                <h4 class="text-xs md:text-sm font-bold leading-tight mb-1 line-clamp-2 t-text">${p.name}</h4>
                <p class="text-[10px] mb-2 t-faint">${p.weight}</p>
            </div>
            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <span class="text-sm font-bold t-text">₹${p.price}</span>
                    ${p.price < p.originalPrice ? `<span class="text-[10px] line-through t-faint">₹${p.originalPrice}</span>` : ''}
                </div>
                ${qty === 0 ? addBtn : qtyBtn}
            </div>
        </div>`;
    });
}

// ===== CART =====
function updateQuantity(id, change) {
    if (!cart[id]) cart[id] = 0;
    cart[id] += change;
    if (cart[id] <= 0) delete cart[id];
    filterCategory(currentCategory);
    updateCartHeader();
    renderCartDrawer();
}

function updateCartHeader() {
    const total = Object.values(cart).reduce((a, b) => a + b, 0);
    const badge = document.getElementById('headerCartCount');
    badge.innerText = total;
    total > 0 ? badge.classList.remove('hidden') : badge.classList.add('hidden');
}

function renderCartDrawer() {
    const container = document.getElementById('cartItemsContainer');
    const footer = document.getElementById('cartFooter');
    const itemIds = Object.keys(cart);
    let total = 0;
    if (itemIds.length === 0) {
        container.innerHTML = `<div class="flex flex-col items-center justify-center h-full t-faint">
            <i data-lucide="shopping-bag" class="w-12 h-12 mb-2 opacity-50"></i>
            <p class="text-sm">Your cart is empty</p>
            <button onclick="toggleCart()" class="mt-4 font-bold text-sm t-brand">Start Shopping</button>
        </div>`;
        footer.classList.add('hidden');
    } else {
        container.innerHTML = '';
        itemIds.forEach(id => {
            const p = products.find(prod => prod.id == id);
            const qty = cart[id]; total += p.price * qty;
            container.innerHTML += `
            <div class="flex gap-3 p-3 rounded-xl border t-border" style="background:var(--bg-card);">
                <div class="w-16 h-16 rounded-lg flex items-center justify-center" style="background:var(--bg-elevated);">
                    <img src="${p.img}" class="product-img h-12 w-12 object-contain">
                </div>
                <div class="flex-1 flex flex-col justify-between">
                    <h4 class="text-xs font-bold t-text">${p.name}</h4>
                    <div class="flex items-center justify-between mt-2">
                        <span class="font-bold text-xs t-text">₹${p.price * qty}</span>
                        <div class="flex items-center rounded text-white text-[10px] font-bold h-6" style="background:var(--accent);">
                            <button onclick="updateQuantity(${p.id}, -1)" class="px-2 h-full rounded-l hover:brightness-90">-</button>
                            <span class="px-2">${qty}</span>
                            <button onclick="updateQuantity(${p.id}, 1)" class="px-2 h-full rounded-r hover:brightness-90">+</button>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        document.getElementById('billItemTotal').innerText = '₹' + total;
        document.getElementById('billGrandTotal').innerText = '₹' + total;
        document.getElementById('payButtonTotal').innerText = '₹' + total;
        footer.classList.remove('hidden');
    }
    lucide.createIcons();
}

function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    document.getElementById('loginLoader').classList.add('hidden');
    modal.classList.toggle('hidden');
    if (!modal.classList.contains('hidden') && typeof google !== 'undefined') initializeGoogleSignIn();
}

function initiateCheckout() {
    if (!isLoggedIn) { toggleCart(); setTimeout(() => toggleLoginModal(), 300); return; }
    const btn = document.querySelector('#cartFooter button');
    btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin mx-auto"></i>`;
    lucide.createIcons();
    setTimeout(() => showUpiQR(), 1000);
}

function showSuccessScreen() {
    const overlay = document.getElementById('successOverlay');
    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
    toggleCart();
    cart = {}; updateCartHeader(); renderProducts(products);
    let minutes = 8, seconds = 0;
    const timerEl = document.getElementById('countdownTimer');
    const interval = setInterval(() => {
        if (seconds === 0) { if (minutes === 0) { clearInterval(interval); return; } minutes--; seconds = 59; } else seconds--;
        timerEl.innerText = `0${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }, 1000);
    for (let i = 0; i < 50; i++) {
        const c = document.createElement('div');
        c.classList.add('confetti');
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = ['#818cf8','#ec4899','#4ade80','#fbbf24'][Math.floor(Math.random()*4)];
        c.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('confettiContainer').appendChild(c);
    }
}

function resetApp() { window.location.reload(); }

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    const isOpen = !drawer.classList.contains('translate-x-full');
    if (isOpen) { drawer.classList.add('translate-x-full'); overlay.classList.add('hidden'); }
    else { renderCartDrawer(); drawer.classList.remove('translate-x-full'); overlay.classList.remove('hidden'); }
}

function filterCategory(cat) {
    currentCategory = cat;
    renderSidebar();
    document.getElementById('sectionTitle').innerText = cat === 'All' ? 'Trending Near You' : cat + ' Corner';
    renderProducts(cat === 'All' ? products : products.filter(p => p.category === cat));
}

init();
