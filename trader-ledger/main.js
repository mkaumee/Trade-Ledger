/**
 * Navigation Logic
 * Handles switching between different sections of the app
 */

/**
 * Shows a specific section and hides all others
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.screen');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active state from all nav buttons
    const navButtons = document.querySelectorAll('#nav button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Add active state to the corresponding nav button
    const activeButton = document.getElementById(`nav-${sectionId}`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

/**
 * Initializes navigation event listeners
 * Sets up click handlers for all navigation buttons
 */
function initNavigation() {
    // Add click event listeners to navigation buttons
    document.getElementById('nav-home').addEventListener('click', () => showSection('home'));
    document.getElementById('nav-sales').addEventListener('click', () => showSection('sales'));
    document.getElementById('nav-purchases').addEventListener('click', () => showSection('purchases'));
    document.getElementById('nav-customer-debts').addEventListener('click', () => showSection('customer-debts'));
    document.getElementById('nav-supplier-debts').addEventListener('click', () => showSection('supplier-debts'));

    // Show home screen by default
    showSection('home');
}

/**
 * Authentication Functions
 */

// API Base URL
const API_URL = 'http://localhost:3000/api';

/**
 * Shows the login form
 */
function showLogin() {
    document.getElementById('login-section').classList.add('active');
    document.getElementById('register-section').classList.remove('active');
}

/**
 * Shows the registration form
 */
function showRegistration() {
    document.getElementById('register-section').classList.add('active');
    document.getElementById('login-section').classList.remove('active');
}

/**
 * Handles user login
 */
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            // Store current session
            saveData('currentUser', data.user);
            loadApp(data.user);
        } else {
            alert(data.error || 'Invalid email or password. Please try again.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Failed to connect to server. Please make sure the server is running.');
    }
}

/**
 * Handles user registration
 */
async function handleRegistration(event) {
    event.preventDefault();
    
    const businessName = document.getElementById('reg-business-name').value.trim();
    const businessType = document.getElementById('reg-business-type').value;
    const ownerName = document.getElementById('reg-owner-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const address = document.getElementById('reg-address').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                businessName,
                businessType,
                ownerName,
                email,
                phone,
                address,
                password
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            alert('Registration successful! Please login.');
            showLogin();
            document.getElementById('register-form').reset();
        } else {
            alert(data.error || 'Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('Failed to connect to server. Please make sure the server is running.');
    }
}

/**
 * Loads the main app after successful login
 */
function loadApp(user) {
    // Update header with business info
    document.getElementById('header-business-name').textContent = user.business_name || user.businessName;
    document.getElementById('header-user-name').textContent = user.owner_name || user.ownerName;
    
    // Set up logout button listener
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // Set up form event listeners
    document.getElementById('sale-form').addEventListener('submit', addSale);
    document.getElementById('purchase-form').addEventListener('submit', addPurchase);
    
    // Initialize app
    initNavigation();
    initCharts();
    displaySales();
    displayPurchases();
    updateCustomerDebts();
    updateSupplierDebts();
    updateDashboard();
}

/**
 * Logs out the current user
 */
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

/**
 * Checks if user is already logged in
 */
function checkAuth() {
    const currentUser = loadData('currentUser');
    if (currentUser) {
        // Verify session is still valid by checking with server
        loadApp(currentUser);
    } else {
        // Show login page
        document.getElementById('auth-container').style.display = 'flex';
        document.getElementById('app-container').style.display = 'none';
    }
}

/**
 * Local Storage Management
 * Handles persistent data storage using browser localStorage
 */

/**
 * Saves data to localStorage
 * @param {string} key - Storage key
 * @param {*} data - Data to store (will be JSON stringified)
 */
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Loads data from localStorage
 * @param {string} key - Storage key
 * @returns {Array} Parsed data or empty array if not found
 */
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

/**
 * Sales Management
 * Handles adding, displaying, and calculating sales data
 */

/**
 * Adds a new sale from the form submission
 * Validates inputs, calculates total, and saves to localStorage
 * @param {Event} event - Form submit event
 */
function addSale(event) {
    event.preventDefault();
    
    const customer = document.getElementById('sale-customer').value.trim();
    const email = document.getElementById('sale-email').value.trim();
    const item = document.getElementById('sale-item').value.trim();
    const quantity = parseFloat(document.getElementById('sale-quantity').value);
    const unit = document.getElementById('sale-unit').value.trim();
    const pricePerUnit = parseFloat(document.getElementById('sale-price').value);
    const status = document.getElementById('sale-status').value;
    
    // Validate inputs
    if (!customer || !email || !item || !unit) {
        alert('Please fill in all fields');
        return;
    }
    
    if (quantity <= 0 || pricePerUnit <= 0) {
        alert('Quantity and price must be positive numbers');
        return;
    }
    
    // Calculate total
    const total = quantity * pricePerUnit;
    const date = new Date().toLocaleDateString();
    
    const sale = {
        id: Date.now(),
        date,
        customer,
        email,
        item,
        quantity,
        unit,
        pricePerUnit,
        total,
        status
    };
    
    const sales = loadData('sales');
    sales.push(sale);
    saveData('sales', sales);
    
    document.getElementById('sale-form').reset();
    displaySales();
    updateCustomerDebts();
    updateDashboard();
}

/**
 * Displays all sales in the sales history table
 */
function displaySales() {
    const sales = loadData('sales');
    const tbody = document.getElementById('sales-tbody');
    tbody.innerHTML = '';
    
    sales.forEach(sale => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sale.date}</td>
            <td>${sale.customer}</td>
            <td>${sale.email || 'N/A'}</td>
            <td>${sale.item}</td>
            <td>${sale.quantity}</td>
            <td>${sale.unit}</td>
            <td>₦${sale.pricePerUnit.toFixed(2)}</td>
            <td>₦${sale.total.toFixed(2)}</td>
            <td>${sale.status}</td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Calculates the total of all sales (paid + unpaid)
 * @returns {number} Total sales amount
 */
function calculateSalesTotal() {
    const sales = loadData('sales');
    return sales.reduce((sum, sale) => sum + sale.total, 0);
}

/**
 * Calculates the total of paid sales
 * @returns {number} Total collected amount
 */
function calculateSalesPaid() {
    const sales = loadData('sales');
    return sales.filter(sale => sale.status === 'paid').reduce((sum, sale) => sum + sale.total, 0);
}

/**
 * Calculates the total of unpaid sales
 * @returns {number} Total customer unpaid amount
 */
function calculateSalesUnpaid() {
    const sales = loadData('sales');
    return sales.filter(sale => sale.status === 'unpaid').reduce((sum, sale) => sum + sale.total, 0);
}

/**
 * Purchases Management
 * Handles adding, displaying, and calculating purchase data
 */

/**
 * Adds a new purchase from the form submission
 * Validates inputs, calculates total, and saves to localStorage
 * @param {Event} event - Form submit event
 */
function addPurchase(event) {
    event.preventDefault();
    
    const supplier = document.getElementById('purchase-supplier').value.trim();
    const item = document.getElementById('purchase-item').value.trim();
    const quantity = parseFloat(document.getElementById('purchase-quantity').value);
    const unit = document.getElementById('purchase-unit').value.trim();
    const pricePerUnit = parseFloat(document.getElementById('purchase-price').value);
    const status = document.getElementById('purchase-status').value;
    
    // Validate inputs
    if (!supplier || !item || !unit) {
        alert('Please fill in all fields');
        return;
    }
    
    if (quantity <= 0 || pricePerUnit <= 0) {
        alert('Quantity and price must be positive numbers');
        return;
    }
    
    // Calculate total
    const total = quantity * pricePerUnit;
    const date = new Date().toLocaleDateString();
    
    const purchase = {
        id: Date.now(),
        date,
        supplier,
        item,
        quantity,
        unit,
        pricePerUnit,
        total,
        status
    };
    
    const purchases = loadData('purchases');
    purchases.push(purchase);
    saveData('purchases', purchases);
    
    document.getElementById('purchase-form').reset();
    displayPurchases();
    updateSupplierDebts();
    updateDashboard();
}

/**
 * Displays all purchases in the purchase history table
 */
function displayPurchases() {
    const purchases = loadData('purchases');
    const tbody = document.getElementById('purchases-tbody');
    tbody.innerHTML = '';
    
    purchases.forEach(purchase => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${purchase.date}</td>
            <td>${purchase.supplier}</td>
            <td>${purchase.item}</td>
            <td>${purchase.quantity}</td>
            <td>${purchase.unit}</td>
            <td>₦${purchase.pricePerUnit.toFixed(2)}</td>
            <td>₦${purchase.total.toFixed(2)}</td>
            <td>${purchase.status}</td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Calculates the total of all purchases (paid + unpaid)
 * @returns {number} Total purchases amount
 */
function calculatePurchasesTotal() {
    const purchases = loadData('purchases');
    return purchases.reduce((sum, purchase) => sum + purchase.total, 0);
}

/**
 * Calculates the total of paid purchases
 * @returns {number} Total paid to suppliers amount
 */
function calculatePurchasesPaid() {
    const purchases = loadData('purchases');
    return purchases.filter(purchase => purchase.status === 'paid').reduce((sum, purchase) => sum + purchase.total, 0);
}

/**
 * Calculates the total of unpaid purchases
 * @returns {number} Total supplier unpaid amount
 */
function calculatePurchasesUnpaid() {
    const purchases = loadData('purchases');
    return purchases.filter(purchase => purchase.status === 'unpaid').reduce((sum, purchase) => sum + purchase.total, 0);
}

/**
 * Customer Debts Management
 * Tracks and manages unpaid customer balances
 */

/**
 * Updates the customer debts display
 * Groups all unpaid sales by customer name
 */
function updateCustomerDebts() {
    const sales = loadData('sales');
    const customerDebts = {};
    
    // Group unpaid sales by customer
    sales.filter(sale => sale.status === 'unpaid').forEach(sale => {
        if (!customerDebts[sale.customer]) {
            customerDebts[sale.customer] = {
                customer: sale.customer,
                email: sale.email || 'N/A',
                totalDebt: 0,
                lastTransaction: sale.date,
                saleIds: []
            };
        }
        customerDebts[sale.customer].totalDebt += sale.total;
        customerDebts[sale.customer].saleIds.push(sale.id);
        customerDebts[sale.customer].lastTransaction = sale.date;
    });
    
    displayCustomerDebts(customerDebts);
}

/**
 * Displays customer debts in the table
 * @param {Object} customerDebts - Object containing customer debt data
 */
function displayCustomerDebts(customerDebts) {
    const tbody = document.getElementById('customer-debts-tbody');
    tbody.innerHTML = '';
    
    Object.values(customerDebts).forEach(debt => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${debt.customer}</td>
            <td>${debt.email}</td>
            <td>₦${debt.totalDebt.toFixed(2)}</td>
            <td>${debt.lastTransaction}</td>
            <td>
                <button onclick="markCustomerPaid('${debt.customer}')">Mark Paid</button>
                ${debt.email !== 'N/A' ? `<button onclick='notifyCustomer(${JSON.stringify(debt.email)}, ${JSON.stringify(debt.customer)}, ${debt.totalDebt})' class="notify-btn">
                    <i class="fas fa-envelope"></i> Notify
                </button>` : ''}
            </td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Sends email notification to customer about unpaid debt
 * @param {string} email - Customer email address
 * @param {string} customerName - Customer name
 * @param {number} amount - Debt amount
 */
function notifyCustomer(email, customerName, amount) {
    // Get current user/business details
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const businessName = currentUser.business_name || currentUser.businessName;
    const ownerName = currentUser.owner_name || currentUser.ownerName;
    const businessEmail = currentUser.email;
    const businessPhone = currentUser.phone;
    const businessAddress = currentUser.address;

    const subject = `Payment Reminder - ${businessName}`;
    const body = `Dear ${customerName},

This is a friendly reminder that you have an outstanding balance of ₦${amount.toFixed(2)} with ${businessName}.

Please arrange payment at your earliest convenience.

Payment can be made to:
Business: ${businessName}
Contact: ${ownerName}
Email: ${businessEmail}
Phone: ${businessPhone}
Address: ${businessAddress}

If you have already made the payment, please disregard this message.

Thank you for your business!

Best regards,
${ownerName}
${businessName}`;

    // Try multiple methods to send email

    // Method 1: Try Gmail compose URL (works in browser)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Method 2: Traditional mailto (works with desktop email clients)
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show options to user
    const choice = confirm(
        `Send payment reminder to ${customerName} (${email})?\n\n` +
        `Amount: ₦${amount.toFixed(2)}\n` +
        `From: ${businessName}\n\n` +
        `Click OK to open Gmail in browser\n` +
        `Click Cancel to use default email client`
    );

    if (choice) {
        // Open Gmail in new tab
        window.open(gmailUrl, '_blank');
    } else {
        // Try mailto link
        const mailtoLink = document.createElement('a');
        mailtoLink.href = mailtoUrl;
        mailtoLink.click();
    }

    // Also show a copy option
    setTimeout(() => {
        if (confirm('Would you like to copy the email details to clipboard?')) {
            const emailText = `To: ${email}\nSubject: ${subject}\n\n${body}`;
            navigator.clipboard.writeText(emailText).then(() => {
                alert('Email details copied to clipboard!');
            }).catch(() => {
                alert('Could not copy to clipboard. Please copy manually:\n\n' + emailText);
            });
        }
    }, 500);
}


/**
 * Marks all unpaid sales for a customer as paid
 * @param {string} customerName - Name of the customer
 */
function markCustomerPaid(customerName) {
    const sales = loadData('sales');
    
    // Update all unpaid sales for this customer to paid
    sales.forEach(sale => {
        if (sale.customer === customerName && sale.status === 'unpaid') {
            sale.status = 'paid';
        }
    });
    
    saveData('sales', sales);
    displaySales();
    updateCustomerDebts();
    updateDashboard();
}

/**
 * Supplier Debts Management
 * Tracks and manages unpaid supplier balances
 */

/**
 * Updates the supplier debts display
 * Groups all unpaid purchases by supplier name
 */
function updateSupplierDebts() {
    const purchases = loadData('purchases');
    const supplierDebts = {};
    
    // Group unpaid purchases by supplier
    purchases.filter(purchase => purchase.status === 'unpaid').forEach(purchase => {
        if (!supplierDebts[purchase.supplier]) {
            supplierDebts[purchase.supplier] = {
                supplier: purchase.supplier,
                totalDebt: 0,
                lastTransaction: purchase.date,
                purchaseIds: []
            };
        }
        supplierDebts[purchase.supplier].totalDebt += purchase.total;
        supplierDebts[purchase.supplier].purchaseIds.push(purchase.id);
        supplierDebts[purchase.supplier].lastTransaction = purchase.date;
    });
    
    displaySupplierDebts(supplierDebts);
}

/**
 * Displays supplier debts in the table
 * @param {Object} supplierDebts - Object containing supplier debt data
 */
function displaySupplierDebts(supplierDebts) {
    const tbody = document.getElementById('supplier-debts-tbody');
    tbody.innerHTML = '';
    
    Object.values(supplierDebts).forEach(debt => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${debt.supplier}</td>
            <td>₦${debt.totalDebt.toFixed(2)}</td>
            <td>${debt.lastTransaction}</td>
            <td><button onclick="markSupplierPaid('${debt.supplier}')">Mark Paid</button></td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Marks all unpaid purchases for a supplier as paid
 * @param {string} supplierName - Name of the supplier
 */
function markSupplierPaid(supplierName) {
    const purchases = loadData('purchases');
    
    // Update all unpaid purchases for this supplier to paid
    purchases.forEach(purchase => {
        if (purchase.supplier === supplierName && purchase.status === 'unpaid') {
            purchase.status = 'paid';
        }
    });
    
    saveData('purchases', purchases);
    displayPurchases();
    updateSupplierDebts();
    updateDashboard();
}

/**
 * Dashboard Calculations and Charts
 * Updates all dashboard statistics and visualizations in real-time
 */

// Store chart instances globally to update them
let salesPurchasesChart = null;
let paymentStatusChart = null;
let cashFlowChart = null;

/**
 * Updates all dashboard totals with current data
 * Calculates and displays sales, purchases, and profit metrics
 */
function updateDashboard() {
    // Sales metrics
    const totalSales = calculateSalesTotal();
    const totalCollected = calculateSalesPaid();
    const totalCustomerUnpaid = calculateSalesUnpaid();
    
    document.getElementById('total-sales').textContent = '₦' + totalSales.toFixed(2);
    document.getElementById('total-collected').textContent = '₦' + totalCollected.toFixed(2);
    document.getElementById('total-customer-unpaid').textContent = '₦' + totalCustomerUnpaid.toFixed(2);
    
    // Purchase metrics
    const totalPurchases = calculatePurchasesTotal();
    const totalPaidSuppliers = calculatePurchasesPaid();
    const totalSupplierUnpaid = calculatePurchasesUnpaid();
    
    document.getElementById('total-purchases').textContent = '₦' + totalPurchases.toFixed(2);
    document.getElementById('total-paid-suppliers').textContent = '₦' + totalPaidSuppliers.toFixed(2);
    document.getElementById('total-supplier-unpaid').textContent = '₦' + totalSupplierUnpaid.toFixed(2);
    
    // Calculate net profit (collected from customers - paid to suppliers)
    const netProfit = totalCollected - totalPaidSuppliers;
    document.getElementById('net-profit').textContent = '₦' + netProfit.toFixed(2);
    
    // Calculate total pending
    const totalPending = totalCustomerUnpaid + totalSupplierUnpaid;
    document.getElementById('total-pending').textContent = '₦' + totalPending.toFixed(2);
    
    // Update charts
    updateCharts();
}

/**
 * Initializes all dashboard charts
 */
function initCharts() {
    // Sales vs Purchases Bar Chart
    const ctx1 = document.getElementById('salesPurchasesChart');
    if (ctx1) {
        salesPurchasesChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Sales', 'Purchases'],
                datasets: [{
                    label: 'Amount',
                    data: [0, 0],
                    backgroundColor: [
                        'rgba(67, 160, 71, 0.8)',
                        'rgba(251, 140, 0, 0.8)'
                    ],
                    borderColor: [
                        'rgba(67, 160, 71, 1)',
                        'rgba(251, 140, 0, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Payment Status Doughnut Chart
    const ctx2 = document.getElementById('paymentStatusChart');
    if (ctx2) {
        paymentStatusChart = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ['Collected', 'Customer Unpaid', 'Paid to Suppliers', 'Supplier Unpaid'],
                datasets: [{
                    data: [0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(67, 160, 71, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(251, 140, 0, 0.8)',
                        'rgba(229, 57, 53, 0.8)'
                    ],
                    borderColor: '#fff',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Cash Flow Line Chart
    const ctx3 = document.getElementById('cashFlowChart');
    if (ctx3) {
        cashFlowChart = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: ['Total Sales', 'Collected', 'Total Purchases', 'Paid to Suppliers', 'Net Profit'],
                datasets: [{
                    label: 'Amount',
                    data: [0, 0, 0, 0, 0],
                    borderColor: 'rgba(67, 160, 71, 1)',
                    backgroundColor: 'rgba(67, 160, 71, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: 'rgba(67, 160, 71, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

/**
 * Updates all charts with current data
 */
function updateCharts() {
    const totalSales = calculateSalesTotal();
    const totalCollected = calculateSalesPaid();
    const totalCustomerUnpaid = calculateSalesUnpaid();
    const totalPurchases = calculatePurchasesTotal();
    const totalPaidSuppliers = calculatePurchasesPaid();
    const totalSupplierUnpaid = calculatePurchasesUnpaid();
    const netProfit = totalCollected - totalPaidSuppliers;

    // Update Sales vs Purchases Chart
    if (salesPurchasesChart) {
        salesPurchasesChart.data.datasets[0].data = [totalSales, totalPurchases];
        salesPurchasesChart.update();
    }

    // Update Payment Status Chart
    if (paymentStatusChart) {
        paymentStatusChart.data.datasets[0].data = [
            totalCollected,
            totalCustomerUnpaid,
            totalPaidSuppliers,
            totalSupplierUnpaid
        ];
        paymentStatusChart.update();
    }

    // Update Cash Flow Chart
    if (cashFlowChart) {
        cashFlowChart.data.datasets[0].data = [
            totalSales,
            totalCollected,
            totalPurchases,
            totalPaidSuppliers,
            netProfit
        ];
        cashFlowChart.update();
    }
}

/**
 * Application Initialization
 * Sets up event listeners and loads initial data
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Load the app with user data
    loadApp(currentUser);
});
