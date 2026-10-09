/* ============================================
   VAPE'D — Main Script
============================================ */

/* ============================================
   HERO — VIDEO BACKGROUND
   
   Point this to your own video file.
   1. Upload your video to the repo in "videos/"
   2. Name it "hero.mp4"
   3. The path below already points to it.
============================================ */
const HERO_VIDEO_URL = "videos/hero.mp4";
const HERO_POSTER_URL = "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80";

/* ============================================
   PRODUCTS — 48 items
============================================ */
const products = [
    // DISPOSABLES
    { id: 1, name: "Blue Razz Ice 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "💨", img: "https://images.unsplash.com/photo-1567453060956-904e0e4a95dc?w=600&q=80", puffs: "3500", flavour: "Blue Raspberry", nicotine: "20mg", badge: "Best Seller", inStock: true, description: "Elf Bar's signature blue raspberry with an icy finish." },
    { id: 2, name: "Watermelon Cherry 5000", brand: "Lost Mary", category: "disposables", price: 280, emoji: "🍉", img: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=600&q=80", puffs: "5000", flavour: "Watermelon Cherry", nicotine: "20mg", badge: "New", inStock: true, description: "Juicy watermelon meets ripe cherry." },
    { id: 3, name: "Mango Peach 6000", brand: "Hayati Pro", category: "disposables", price: 320, emoji: "🥭", img: "https://images.unsplash.com/photo-1608885872204-6c1e05e4c8d4?w=600&q=80", puffs: "6000", flavour: "Mango Peach", nicotine: "20mg", badge: null, inStock: true, description: "Tropical mango blended with sweet peach." },
    { id: 4, name: "Strawberry Kiwi 3000", brand: "Elf Bar", category: "disposables", price: 200, emoji: "🍓", img: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=600&q=80", puffs: "3000", flavour: "Strawberry Kiwi", nicotine: "20mg", badge: null, inStock: true, description: "Sweet strawberries with tangy kiwi." },
    { id: 5, name: "Cola Ice 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "🥤", img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=600&q=80", puffs: "3500", flavour: "Cola", nicotine: "20mg", badge: null, inStock: false, description: "Classic cola with a cool finish." },
    { id: 6, name: "Pink Lemonade 4000", brand: "Lost Mary", category: "disposables", price: 250, emoji: "🍋", img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80", puffs: "4000", flavour: "Pink Lemonade", nicotine: "20mg", badge: null, inStock: true, description: "Sweet and tart pink lemonade." },
    { id: 7, name: "Blueberry Ice 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "🫐", img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&q=80", puffs: "3500", flavour: "Blueberry", nicotine: "20mg", badge: null, inStock: true, description: "Frozen blueberries with a cool finish." },
    { id: 8, name: "Cherry Cola 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "🍒", img: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=600&q=80", puffs: "3500", flavour: "Cherry Cola", nicotine: "20mg", badge: null, inStock: true, description: "Cherry meets cola." },

    // PODS
    { id: 9, name: "Xros 3 Pod Kit", brand: "Vaporesso", category: "pods", price: 480, emoji: "🔋", img: "https://images.unsplash.com/photo-1602524997561-6dd1b6dd5a1f?w=600&q=80", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: "Popular", inStock: true, description: "Compact pod system with adjustable airflow." },
    { id: 10, name: "Caliburn G3 Kit", brand: "Uwell", category: "pods", price: 550, emoji: "⚡", img: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&q=80", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: "Best Seller", inStock: true, description: "Uwell's most refined pod system yet." },
    { id: 11, name: "Luxe X Pro Pod", brand: "Vaporesso", category: "pods", price: 620, emoji: "🚀", img: "https://images.unsplash.com/photo-1628120066184-ba3be7cebb0d?w=600&q=80", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: null, inStock: true, description: "High-end pod with adjustable wattage." },
    { id: 12, name: "Aegis Pod 2 Kit", brand: "GeekVape", category: "pods", price: 580, emoji: "🛡️", img: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: "Rugged", inStock: true, description: "Waterproof, shockproof, dustproof." },
    { id: 13, name: "Novo 5 Kit", brand: "Smok", category: "pods", price: 420, emoji: "💧", img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=600&q=80", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: null, inStock: true, description: "Smok's latest Novo device." },
    { id: 14, name: "Wenax Q Kit", brand: "GeekVape", category: "pods", price: 380, emoji: "✨", img: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?w=600&q=80", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: null, inStock: true, description: "Sleek pod kit with 1100mAh battery." },

    // MODS
    { id: 15, name: "Drag 4 Box Mod", brand: "VooPoo", category: "mods", price: 950, emoji: "📦", img: "https://images.unsplash.com/photo-1503341562589-d2b17c3b2ad5?w=600&q=80", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: "Pro", inStock: true, description: "200W of pure power with GENE.FAN chip." },
    { id: 16, name: "Aegis Legend 3", brand: "GeekVape", category: "mods", price: 1100, emoji: "🦾", img: "https://images.unsplash.com/photo-1571498679101-e4d9d3b9c8f5?w=600&q=80", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: null, inStock: true, description: "The toughest mod on the market." },
    { id: 17, name: "Gen 200 Kit", brand: "Vaporesso", category: "mods", price: 850, emoji: "🔧", img: "https://images.unsplash.com/photo-1595433562696-a8b2cdc8e9c8?w=600&q=80", puffs: "220W", flavour: "Mod", nicotine: "0mg", badge: null, inStock: true, description: "Featherlight 220W mod." },
    { id: 18, name: "Centaurus M200", brand: "Lost Vape", category: "mods", price: 1250, emoji: "👑", img: "https://images.unsplash.com/photo-1585144860131-8a8ff8d2f6a6?w=600&q=80", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: "Premium", inStock: true, description: "Luxury mod with DNA-style chip." },
    { id: 19, name: "Thelema Quest 200W", brand: "Lost Vape", category: "mods", price: 1080, emoji: "🏆", img: "https://images.unsplash.com/photo-1517672651691-24622a91b550?w=600&q=80", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: null, inStock: true, description: "Premium mod with Quest 2.0 chipset." },

    // E-LIQUIDS
    { id: 20, name: "Slow Blow 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🧪", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80", puffs: "60ml", flavour: "Pineapple Lemonade", nicotine: "3mg", badge: "Best Seller", inStock: true, description: "Nasty Juice's signature." },
    { id: 21, name: "Lemon Tart 60ml", brand: "Dinner Lady", category: "liquids", price: 300, emoji: "🍋", img: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&q=80", puffs: "60ml", flavour: "Lemon Tart", nicotine: "3mg", badge: null, inStock: true, description: "Award-winning British liquid." },
    { id: 22, name: "Heisenberg 60ml", brand: "Vampire Vape", category: "liquids", price: 270, emoji: "💜", img: "https://images.unsplash.com/photo-1581010842429-2d6e25d6a9c4?w=600&q=80", puffs: "60ml", flavour: "Mixed Berries", nicotine: "3mg", badge: "Classic", inStock: true, description: "The legendary Heisenberg." },
    { id: 23, name: "Blueberry Sour 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🫐", img: "https://images.unsplash.com/photo-1595872018838-295e5f5a4e9c?w=600&q=80", puffs: "60ml", flavour: "Blueberry Sour", nicotine: "3mg", badge: null, inStock: true, description: "Tart blueberry with a sour twist." },
    { id: 24, name: "Mango Ice 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🥭", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80", puffs: "60ml", flavour: "Mango", nicotine: "3mg", badge: null, inStock: true, description: "Sweet ripe mango." },
    { id: 25, name: "Pink Lemonade 60ml", brand: "Dinner Lady", category: "liquids", price: 300, emoji: "🌸", img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&q=80", puffs: "60ml", flavour: "Pink Lemonade", nicotine: "3mg", badge: null, inStock: true, description: "Sweet pink lemonade." },
    { id: 26, name: "Strawberry Whip 60ml", brand: "Dinner Lady", category: "liquids", price: 300, emoji: "🍨", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", puffs: "60ml", flavour: "Strawberry Cream", nicotine: "3mg", badge: null, inStock: true, description: "Creamy strawberry milkshake." },
    { id: 27, name: "Grape Ice 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🍇", img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=80", puffs: "60ml", flavour: "Grape", nicotine: "3mg", badge: null, inStock: true, description: "Sweet dark grapes with icy finish." },

    // SALTS
    { id: 28, name: "Blue Lemonade Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🔵", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80", puffs: "30ml", flavour: "Blue Lemonade", nicotine: "30mg", badge: "Best Seller", inStock: true, description: "Smooth nicotine salt." },
    { id: 29, name: "Frozen Blueberry Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "❄️", img: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&q=80", puffs: "30ml", flavour: "Frozen Blueberry", nicotine: "50mg", badge: null, inStock: true, description: "Icy blueberry nic salt." },
    { id: 30, name: "Lime Twist Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🍈", img: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&q=80", puffs: "30ml", flavour: "Lime Twist", nicotine: "30mg", badge: null, inStock: true, description: "Zesty lime nic salt." },
    { id: 31, name: "Pink Avalanche Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🌸", img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=80", puffs: "30ml", flavour: "Pink Lemonade", nicotine: "50mg", badge: null, inStock: true, description: "Sweet pink lemonade nic salt." },
    { id: 32, name: "Zero Kelvin Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🧊", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80", puffs: "30ml", flavour: "Menthol", nicotine: "30mg", badge: null, inStock: true, description: "Pure icy menthol." },

    // COILS
    { id: 33, name: "GTX Mesh Coils (5-pack)", brand: "Vaporesso", category: "coils", price: 180, emoji: "🔩", img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&q=80", puffs: "0.6Ω", flavour: "Coil", nicotine: "0mg", badge: null, inStock: true, description: "Genuine Vaporesso GTX coils." },
    { id: 34, name: "Caliburn G3 Pods (4-pack)", brand: "Uwell", category: "coils", price: 200, emoji: "🎯", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80", puffs: "0.9Ω", flavour: "Pod", nicotine: "0mg", badge: "Best Seller", inStock: true, description: "Replacement pods for Caliburn G3." },
    { id: 35, name: "Aegis Boost Coils", brand: "GeekVape", category: "coils", price: 190, emoji: "⚙️", img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80", puffs: "0.4Ω", flavour: "Coil", nicotine: "0mg", badge: null, inStock: true, description: "GeekVape B Series coils." },
    { id: 36, name: "Novo 5 Replacement Pods", brand: "Smok", category: "coils", price: 160, emoji: "💧", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80", puffs: "0.8Ω", flavour: "Pod", nicotine: "0mg", badge: null, inStock: true, description: "3-pack replacement pods for Novo 5." },
    { id: 37, name: "Xros Replacement Pods", brand: "Vaporesso", category: "coils", price: 170, emoji: "🔋", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80", puffs: "1.0Ω", flavour: "Pod", nicotine: "0mg", badge: null, inStock: true, description: "2-pack pods for Xros 3." },

    // TANKS
    { id: 38, name: "Zeus X RTA", brand: "GeekVape", category: "tanks", price: 480, emoji: "⚡", img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80", puffs: "5ml", flavour: "RTA", nicotine: "0mg", badge: null, inStock: true, description: "Top-airflow rebuildable tank." },
    { id: 39, name: "Drop V2 RDA", brand: "Digiflavor", category: "tanks", price: 450, emoji: "💧", img: "https://images.unsplash.com/photo-1581092335871-3a0e8dd5e8f0?w=600&q=80", puffs: "24mm", flavour: "RDA", nicotine: "0mg", badge: null, inStock: true, description: "Dual-coil RDA." },
    { id: 40, name: "Dead Rabbit V3 RDA", brand: "Hellvape", category: "tanks", price: 520, emoji: "🐇", img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80", puffs: "24mm", flavour: "RDA", nicotine: "0mg", badge: "Popular", inStock: true, description: "Legendary flavour." },
    { id: 41, name: "Profile RDTA", brand: "Wotofo", category: "tanks", price: 550, emoji: "📊", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80", puffs: "6ml", flavour: "RDTA", nicotine: "0mg", badge: null, inStock: true, description: "Mesh build deck." },
    { id: 42, name: "Valyrian 3 Sub-Ohm Tank", brand: "Uwell", category: "tanks", price: 480, emoji: "👑", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80", puffs: "6ml", flavour: "Sub-Ohm", nicotine: "0mg", badge: null, inStock: true, description: "Flagship sub-ohm tank." },
    { id: 43, name: "Falcon King Tank", brand: "HorizonTech", category: "tanks", price: 450, emoji: "🦅", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&q=80", puffs: "5.5ml", flavour: "Sub-Ohm", nicotine: "0mg", badge: null, inStock: true, description: "Premium sub-ohm tank." },

    // MTL
    { id: 44, name: "MTL Tank Pro", brand: "Innokin", category: "mtl", price: 420, emoji: "🎯", img: "https://images.unsplash.com/photo-1581092918484-8313ee3ec5dd?w=600&q=80", puffs: "2ml", flavour: "Tank", nicotine: "0mg", badge: null, inStock: true, description: "Precision MTL tank." },
    { id: 45, name: "Zlide MTL Tank", brand: "Innokin", category: "mtl", price: 380, emoji: "💨", img: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=600&q=80", puffs: "2ml", flavour: "Tank", nicotine: "0mg", badge: "Popular", inStock: true, description: "Slide-fill MTL tank." },
    { id: 46, name: "Berserker V3 MTL RTA", brand: "Vandy Vape", category: "mtl", price: 520, emoji: "🏆", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80", puffs: "2ml", flavour: "RTA", nicotine: "0mg", badge: null, inStock: true, description: "Award-winning MTL tank." },

    // ACCESSORIES
    { id: 47, name: "VAPE'D Carry Case", brand: "VAPE'D", category: "accessories", price: 220, emoji: "🧳", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80", puffs: "Universal", flavour: "Case", nicotine: "0mg", badge: "New", inStock: true, description: "Premium carry case." },
    { id: 48, name: "18650 Battery (Pair)", brand: "Samsung", category: "accessories", price: 250, emoji: "🔋", img: "https://images.unsplash.com/photo-1619641805634-b867f535071c?w=600&q=80", puffs: "3000mAh", flavour: "Battery", nicotine: "0mg", badge: null, inStock: true, description: "Genuine Samsung 30Q batteries." }
];

/* ============================================
   STATE
============================================ */
let cart = JSON.parse(localStorage.getItem('vapedCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('vapedWishlist')) || [];
let activeFilters = { categories: [], brands: [], nicotine: [], minPrice: 0, maxPrice: 99999, inStock: false };
let currentSort = 'latest';

/* ============================================
   AGE GATE
============================================ */
function initAgeGate() {
    const gate = document.getElementById('age-gate');
    if (!gate) return;
    if (localStorage.getItem('vapedAgeVerified') === 'true') gate.classList.add('hidden');
}
function confirmAge() {
    localStorage.setItem('vapedAgeVerified', 'true');
    const gate = document.getElementById('age-gate');
    if (gate) gate.classList.add('hidden');
}
function denyAge() {
    alert('You must be 18 or older to enter VAPE\'D.');
    window.location.href = 'https://www.google.com';
}

/* ============================================
   HERO VIDEO
============================================ */
function initHeroVideo() {
    const video = document.querySelector('.hero-video');
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    video.addEventListener('canplay', () => video.classList.add('loaded'));

    const tryPlay = () => {
        const p = video.play();
        if (p !== undefined) {
            p.then(() => video.classList.add('loaded')).catch(() => {
                console.info('Video autoplay blocked — poster showing');
            });
        }
    };
    tryPlay();
    document.addEventListener('touchstart', tryPlay, { once: true });
    document.addEventListener('click', tryPlay, { once: true });
    video.addEventListener('error', () => { video.style.display = 'none'; });
}

/* ============================================
   CART
============================================ */
function saveCart() { localStorage.setItem('vapedCart', JSON.stringify(cart)); updateCartUI(); }

function addToCart(productId, event) {
    if (event) { event.stopPropagation(); event.preventDefault(); }
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    saveCart();
    showToast(`${product.name} added`);
    if (event?.currentTarget) {
        const btn = event.currentTarget;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = 'var(--ice-bright)';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 1000);
    }
}
function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); saveCart(); }
function updateQuantity(productId, newQty) {
    const qty = parseInt(newQty);
    if (qty <= 0) return removeFromCart(productId);
    const item = cart.find(i => i.id === productId);
    if (item) { item.quantity = qty; saveCart(); }
}
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.quantity, 0); }
function getCartCount() { return cart.reduce((s, i) => s + i.quantity, 0); }

function updateCartUI() {
    document.querySelectorAll('#cart-count').forEach(b => {
        const count = getCartCount();
        b.textContent = count;
        b.style.display = count > 0 ? 'flex' : 'none';
    });
    const container = document.getElementById('cart-items');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn" onclick="closeCart()">Browse Shop</a>
            </div>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">${item.img ? `<img src="${item.img}" alt="${item.name}">` : item.emoji}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">P${item.price.toFixed(2)}</p>
                    <div class="cart-item-qty">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-times"></i></button>
            </div>
        `).join('');
    }
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `P${getCartTotal().toFixed(2)}`;
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer) return;
    drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}
function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}
function checkoutCart() {
    if (cart.length === 0) { alert('Your cart is empty.'); return; }
    const items = cart.map(i => `• ${i.quantity}× ${i.name} (${i.brand}) — P${(i.price * i.quantity).toFixed(2)}`).join('\n');
    const total = `P${getCartTotal().toFixed(2)}`;
    const message = `Hi VAPE'D! 🛒\n\nI'd like to order:\n\n${items}\n\nTotal: ${total}\n\nPlease confirm stock and delivery.`;
    const phone = '26771234567';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

/* ============================================
   WISHLIST
============================================ */
function toggleWishlist(productId, event) {
    if (event) { event.stopPropagation(); event.preventDefault(); }
    const idx = wishlist.indexOf(productId);
    if (idx > -1) wishlist.splice(idx, 1);
    else wishlist.push(productId);
    localStorage.setItem('vapedWishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    showToast(idx > -1 ? 'Removed from wishlist' : 'Added to wishlist');
}
function updateWishlistUI() {
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
        const id = parseInt(btn.dataset.wishlist);
        btn.classList.toggle('active', wishlist.includes(id));
    });
}

/* ============================================
   FILTERS + SORT
============================================ */
function getFilteredProducts() {
    let list = [...products];
    if (activeFilters.categories.length > 0) list = list.filter(p => activeFilters.categories.includes(p.category));
    if (activeFilters.brands.length > 0) list = list.filter(p => activeFilters.brands.includes(p.brand));
    if (activeFilters.nicotine.length > 0) list = list.filter(p => activeFilters.nicotine.includes(p.nicotine));
    if (activeFilters.inStock) list = list.filter(p => p.inStock);
    list = list.filter(p => p.price >= activeFilters.minPrice && p.price <= activeFilters.maxPrice);
    if (currentSort === 'price-low') list.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') list.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => b.id - a.id);
    return list;
}
function applyFilters() { renderShop(); updateFilterCounts(); }
function toggleFilterCheckbox(type, value, checked) {
    if (checked) activeFilters[type].push(value);
    else activeFilters[type] = activeFilters[type].filter(v => v !== value);
    applyFilters();
}
function applyPriceFilter() {
    activeFilters.minPrice = parseFloat(document.getElementById('min-price')?.value) || 0;
    activeFilters.maxPrice = parseFloat(document.getElementById('max-price')?.value) || 99999;
    applyFilters();
}
function clearFilters() {
    activeFilters = { categories: [], brands: [], nicotine: [], minPrice: 0, maxPrice: 99999, inStock: false };
    document.querySelectorAll('.filter-option input').forEach(i => i.checked = false);
    const minEl = document.getElementById('min-price');
    const maxEl = document.getElementById('max-price');
    if (minEl) minEl.value = '';
    if (maxEl) maxEl.value = '';
    applyFilters();
}
function changeSort(value) { currentSort = value; renderShop(); }
function updateFilterCounts() {
    document.querySelectorAll('[data-count-category]').forEach(el => {
        el.textContent = products.filter(p => p.category === el.dataset.countCategory).length;
    });
    document.querySelectorAll('[data-count-brand]').forEach(el => {
        el.textContent = products.filter(p => p.brand === el.dataset.countBrand).length;
    });
}

/* ============================================
   RENDER SHOP GRID
============================================ */
function renderShop(limit) {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    let list = getFilteredProducts();
    if (limit) list = list.slice(0, limit);
    grid.innerHTML = '';
    if (list.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--silver);padding:80px 20px;font-family:var(--mono);font-size:0.85rem;letter-spacing:0.15em;">NO PRODUCTS MATCH YOUR FILTERS</p>`;
        updateResultsCount(0);
        return;
    }
    list.forEach(p => {
        const isWished = wishlist.includes(p.id);
        let badgeHTML = '';
        if (!p.inStock) badgeHTML = '<span class="product-badge danger">Sold Out</span>';
        else if (p.badge) badgeHTML = `<span class="product-badge">${p.badge}</span>`;
        grid.innerHTML += `
            <div class="product-card" onclick="goToProduct(${p.id})">
                <div class="product-img">
                    ${badgeHTML}
                    <button class="product-wishlist ${isWished ? 'active' : ''}" data-wishlist="${p.id}" onclick="toggleWishlist(${p.id}, event)" aria-label="Wishlist">
                        <i class="fa${isWished ? 's' : 'r'} fa-heart"></i>
                    </button>
                    ${p.img
                        ? `<img src="${p.img}" alt="${p.name}" loading="lazy" class="product-real-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                           <span class="product-emoji" style="display:none;">${p.emoji}</span>`
                        : `<span class="product-emoji">${p.emoji}</span>`
                    }
                </div>
                <div class="product-info">
                    <span class="product-brand">${p.brand}</span>
                    <h3>${p.name}</h3>
                    <div class="product-meta">
                        <span class="product-tag-pill">${p.puffs}</span>
                        <span class="product-tag-pill">${p.nicotine}</span>
                    </div>
                    <div class="product-footer">
                        <div class="product-price">P${p.price.toFixed(0)}</div>
                        <button class="product-add" onclick="addToCart(${p.id}, event)" ${!p.inStock ? 'disabled' : ''} aria-label="Add to cart">
                            <i class="fas fa-${p.inStock ? 'plus' : 'times'}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    updateResultsCount(list.length);
    updateWishlistUI();
}
function updateResultsCount(count) {
    document.querySelectorAll('[data-results]').forEach(el => el.textContent = count);
}
function goToProduct(id) { window.location.href = `product.html?id=${id}`; }

/* ============================================
   MOBILE
============================================ */
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.mobile-overlay');
    if (nav) nav.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
}
function toggleMobileFilters() {
    const filters = document.querySelector('.filters-sidebar');
    if (filters) filters.classList.toggle('open');
}

/* ============================================
   PRODUCT DETAIL
============================================ */
function initProductDetail() {
    const container = document.getElementById('product-detail');
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const p = products.find(x => x.id === id);
    if (!p) { window.location.href = 'shop.html'; return; }

    document.getElementById('bc-category').textContent = p.category;
    document.getElementById('bc-product').textContent = p.name;
    document.getElementById('product-emoji').innerHTML = p.img
        ? `<img src="${p.img}" alt="${p.name}">`
        : p.emoji;
    document.getElementById('product-name').textContent = p.name;
    document.getElementById('product-brand').textContent = p.brand;
    document.getElementById('product-price').textContent = `P${p.price.toFixed(2)}`;
    document.getElementById('product-description').textContent = p.description;

    document.getElementById('product-specs').innerHTML = `
        <div class="spec-item"><span class="label">Puffs / Size</span><span class="value">${p.puffs}</span></div>
        <div class="spec-item"><span class="label">Nicotine</span><span class="value">${p.nicotine}</span></div>
        <div class="spec-item"><span class="label">Flavour</span><span class="value">${p.flavour}</span></div>
        <div class="spec-item"><span class="label">Stock</span><span class="value" style="color:${p.inStock ? 'var(--ice)' : 'var(--danger)'}">${p.inStock ? 'In Stock' : 'Sold Out'}</span></div>
    `;

    const addBtn = document.getElementById('product-add-btn');
    if (addBtn) {
        if (!p.inStock) {
            addBtn.disabled = true;
            addBtn.innerHTML = '<i class="fas fa-times"></i> Sold Out';
        } else {
            addBtn.onclick = (e) => addToCart(p.id, e);
        }
    }
    const wishBtn = document.getElementById('product-wishlist-btn');
    if (wishBtn) {
        wishBtn.dataset.wishlist = p.id;
        if (wishlist.includes(p.id)) wishBtn.classList.add('active');
        wishBtn.onclick = (e) => toggleWishlist(p.id, e);
    }

    const related = document.getElementById('related-grid');
    if (related) {
        products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4).forEach(r => {
            related.innerHTML += `
                <div class="product-card" onclick="goToProduct(${r.id})">
                    <div class="product-img">
                        ${r.img
                            ? `<img src="${r.img}" alt="${r.name}" loading="lazy" class="product-real-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                               <span class="product-emoji" style="display:none;">${r.emoji}</span>`
                            : `<span class="product-emoji">${r.emoji}</span>`
                        }
                    </div>
                    <div class="product-info">
                        <span class="product-brand">${r.brand}</span>
                        <h3>${r.name}</h3>
                        <div class="product-footer" style="border:none;padding-top:8px;">
                            <div class="product-price">P${r.price.toFixed(0)}</div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    document.title = `${p.name} | VAPE'D`;
}

/* ============================================
   TOAST
============================================ */
function showToast(message) {
    let toast = document.getElementById('vaped-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'vaped-toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ============================================
   FORMS
============================================ */
function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value || 'friend';
    alert(`Thanks, ${name}! Your message has been sent to VAPE'D.\n\nWe'll reply within 24 hours.`);
    e.target.reset();
}

/* ============================================
   INIT
============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initAgeGate();
    initHeroVideo();
    if (document.getElementById('shop-grid')) {
        const limit = document.body.dataset.limit ? parseInt(document.body.dataset.limit) : undefined;
        renderShop(limit);
    }
    initProductDetail();
    updateCartUI();
    updateWishlistUI();
    updateFilterCounts();
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                const nav = document.querySelector('nav');
                const overlay = document.querySelector('.mobile-overlay');
                if (nav) nav.classList.remove('open');
                if (overlay) overlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });
});
