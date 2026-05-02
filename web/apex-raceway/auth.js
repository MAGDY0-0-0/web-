let currentUser = null;
let isSignUp = false;

window.showToast = (msg, type = "error") => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '🏁' : '⚠️'}</span> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
};

window.openAuth = () => { document.getElementById('authModal').style.display = 'flex'; };

document.getElementById('switchText').addEventListener('click', () => {
    isSignUp = !isSignUp;
    document.getElementById('modalTitle').innerText = isSignUp ? 'JOIN THE TEAM' : 'SIGN IN';
    document.getElementById('switchText').innerText = isSignUp ? 'Already a member? Sign In' : 'New to the track? Join the Team';
});

document.getElementById('cancelAuthBtn').addEventListener('click', () => {
    document.getElementById('authModal').style.display = 'none';
});

document.getElementById('sign-in-link').addEventListener('click', (e) => {
    e.preventDefault();
    openAuth();
});

document.getElementById('authActionBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const action = isSignUp ? 'register' : 'login';
    
    try {
        const res = await fetch(`api/auth.php?action=${action}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        
        if (data.error) throw new Error(data.error);
        
        currentUser = { email: data.email };
        showToast(isSignUp ? "Account Created - Welcome to Apex" : "Engine Started - Signed In", "success");
        document.getElementById('authModal').style.display = 'none';
        updateNavState();
    } catch (err) {
        showToast(err.message);
    }
});

window.handleLogout = async () => {
    try {
        await fetch('api/auth.php?action=logout', { method: 'POST' });
        currentUser = null;
        updateNavState();
    } catch(err) {
        showToast("Error logging out");
    }
};

function updateNavState() {
    const nav = document.getElementById('main-nav');
    if (currentUser) {
        const userName = currentUser.email.split('@')[0].toUpperCase();
        nav.innerHTML = `
            <span class="driver-label">DRIVER: ${userName}</span>
            <a href="#" onclick="showHome()">PADDOCK</a>
            <a href="#" onclick="showDashboard()">MY GARAGE</a>
            <a href="#" onclick="showMaintenance()">MAINTENANCE</a>
            <a href="#" onclick="showParts()">PARTS SHOP</a>
            <button class="auth-btn" onclick="handleLogout()">LOGOUT</button>
        `;
    } else {
        nav.innerHTML = `
            <a href="#" onclick="showHome()">PADDOCK</a>
            <a href="#" onclick="showMaintenance()">MAINTENANCE</a>
            <a href="#" onclick="showParts()">PARTS SHOP</a>
            <a href="#" onclick="openAuth()">SIGN IN</a>
        `;
    }
    if (window.loadUserCars) window.loadUserCars();
}

// Check auth state on load
async function checkAuth() {
    try {
        const res = await fetch('api/auth.php?action=me');
        const data = await res.json();
        if (data.email) {
            currentUser = { email: data.email };
        }
        updateNavState();
    } catch (err) {
        updateNavState();
    }
}
checkAuth();

window.submitInquiry = async (carId) => {
    if (!currentUser) {
        showToast("Authentication Required to Inquire");
        openAuth();
        return;
    }

    const car = window.cars.find(c => c.id === carId);

    try {
        const res = await fetch('api/inquiries.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                carName: `${car.brand} ${car.name}`,
                carPrice: car.price,
                selectedColor: car.selectedColor
            })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        
        showToast(`Inquiry sent for the ${car.brand}!`, "success");
    } catch (error) {
        showToast("Transmission Error - Try again.");
    }
};

window.loadDashboard = async () => {
    const prompt = document.getElementById('dash-auth-prompt');
    const content = document.getElementById('dash-content');
    if (!currentUser) {
        prompt.style.display = 'block';
        content.style.display = 'none';
        return;
    }
    prompt.style.display = 'none';
    content.style.display = 'block';

    // Inquiries
    try {
        const res = await fetch('api/inquiries.php');
        const docs = await res.json();
        const el = document.getElementById('dash-inquiries');
        if (!docs.length) { el.innerHTML = '<p class="dash-empty">No inquiries yet — browse the Paddock</p>'; }
        else {
            const seen = new Set();
            el.innerHTML = docs
                .filter(d => { const n = d.car_name; return seen.has(n) ? false : seen.add(n); })
                .map(r => `
                    <div class="dash-card">
                        <div><div class="dash-card-title">${r.car_name}</div>
                        <div class="dash-card-detail">${r.selected_color}</div></div>
                        <div class="dash-card-price">${r.car_price}</div>
                    </div>`).join('');
        }
    } catch(e) { document.getElementById('dash-inquiries').innerHTML = '<p class="dash-empty">Error loading</p>'; }

    // Maintenance
    try {
        const res = await fetch('api/maintenance.php');
        const docs = await res.json();
        const el = document.getElementById('dash-maintenance');
        if (!docs.length) { el.innerHTML = '<p class="dash-empty">No maintenance scheduled yet</p>'; }
        else {
            el.innerHTML = docs.map(r => `
                <div class="dash-card">
                    <div><div class="dash-card-title">${r.car_name}</div>
                    <div class="dash-card-detail">${r.service_type} &mdash; ${r.date} &middot; ${r.time_slot}</div></div>
                    <span class="dash-status status-${(r.status || 'pending').toLowerCase()}">${r.status || 'Pending'}</span>
                </div>`).join('');
        }
    } catch(e) { document.getElementById('dash-maintenance').innerHTML = '<p class="dash-empty">Error loading</p>'; }

    // Orders
    try {
        const res = await fetch('api/orders.php');
        const docs = await res.json();
        const el = document.getElementById('dash-orders');
        if (!docs.length) { el.innerHTML = '<p class="dash-empty">No parts orders yet</p>'; }
        else {
            el.innerHTML = docs.map(r => `
                <div class="dash-card">
                    <div><div class="dash-card-title">${r.items.length} part${r.items.length > 1 ? 's' : ''} ordered</div>
                    <div class="dash-card-detail">${r.items.map(i => i.partName).join(', ')}</div></div>
                    <div style="display:flex;gap:10px;align-items:center">
                        <span class="dash-card-price">$${parseFloat(r.total).toLocaleString()}</span>
                        <span class="dash-status status-${(r.status || 'processing').toLowerCase()}">${r.status || 'Processing'}</span>
                    </div>
                </div>`).join('');
        }
    } catch(e) { document.getElementById('dash-orders').innerHTML = '<p class="dash-empty">Error loading</p>'; }
};

window.loadUserCars = async () => {
    const select = document.getElementById('maintenance-car');
    const formWrap = document.getElementById('maintenance-form-wrap');
    const prompt = document.getElementById('maintenance-signin-prompt');
    if (!currentUser) {
        formWrap.style.display = 'none';
        prompt.style.display = 'block';
        return;
    }
    formWrap.style.display = 'block';
    prompt.style.display = 'none';
    select.innerHTML = '<option value="">Loading your vehicles...</option>';
    try {
        const res = await fetch('api/inquiries.php');
        const docs = await res.json();
        if (!docs.length) {
            select.innerHTML = '<option value="">No vehicles on record — make an inquiry first</option>';
            return;
        }
        const seen = new Set();
        select.innerHTML = docs
            .filter(d => { const n = d.car_name; return seen.has(n) ? false : seen.add(n); })
            .map(d => `<option value="${d.car_name}">${d.car_name}</option>`)
            .join('');
    } catch(e) {
        select.innerHTML = '<option value="">Error loading vehicles</option>';
    }
};

window.submitMaintenance = async (e) => {
    e.preventDefault();
    if (!currentUser) { showToast('Sign in to schedule maintenance'); openAuth(); return; }
    const car = document.getElementById('maintenance-car').value;
    const service = document.getElementById('service-type').value;
    const date = document.getElementById('service-date').value;
    const timeSlot = document.getElementById('service-time').value;
    const notes = document.getElementById('service-notes').value;
    if (!car || !date) { showToast('Please select a vehicle and date'); return; }
    try {
        const res = await fetch('api/maintenance.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ carName: car, serviceType: service, date, timeSlot, notes })
        });
        const data = await res.json();
        if (data.error) throw new Error();
        showToast('Service scheduled — see you at the track!', 'success');
        document.getElementById('maintenance-form').reset();
    } catch(err) { showToast('Scheduling failed — please try again'); }
};

window.placePartsOrder = async () => {
    if (!currentUser) { showToast('Sign in to place an order'); openAuth(); return; }
    if (!window.cart || cart.length === 0) { showToast('Your cart is empty'); return; }
    try {
        const items = cart.map(i => ({ partId: i.part.id, partName: i.part.name, category: i.part.category, qty: i.qty, unitPrice: i.part.price, subtotal: i.part.price * i.qty }));
        const total = cart.reduce((s, i) => s + i.part.price * i.qty, 0);
        const res = await fetch('api/orders.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items, total })
        });
        const data = await res.json();
        if (data.error) throw new Error();
        
        showToast('Order placed — parts en route! 🏁', 'success');
        window.cart = [];
        if (window.renderCart) renderCart();
        if (window.updateCartCount) updateCartCount();
        if (window.closeCartModal) closeCartModal();
    } catch(err) { showToast('Order failed — please try again'); }
};
