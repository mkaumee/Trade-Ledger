# Trader Ledger - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture](#architecture)
4. [Project Structure](#project-structure)
5. [Database Design](#database-design)
6. [Backend Implementation](#backend-implementation)
7. [Frontend Implementation](#frontend-implementation)
8. [Authentication System](#authentication-system)
9. [Features Breakdown](#features-breakdown)
10. [Deployment](#deployment)
11. [Development Workflow](#development-workflow)
12. [API Documentation](#api-documentation)

---

## Project Overview

Trader Ledger is a full-stack web application designed for small to medium businesses to track sales, purchases, customer debts, and supplier debts with real-time analytics and visualizations.

### Purpose
- Track sales transactions with customer information
- Record purchases from suppliers
- Monitor unpaid customer balances (accounts receivable)
- Track outstanding supplier payments (accounts payable)
- Visualize business metrics through interactive charts
- Send payment reminders to customers via email

### Target Users
Small to medium businesses, particularly in retail, wholesale, services, and manufacturing sectors.

---

## Technology Stack

### Backend
- **Runtime**: Node.js (v14+)
- **Framework**: Express.js v4.18.2
- **Database**: SQLite3 v5.1.6
- **Authentication**: bcryptjs v2.4.3 (password hashing)
- **CORS**: cors v2.8.5 (cross-origin resource sharing)

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with gradients, animations, flexbox, and grid
- **JavaScript**: Vanilla JS (ES6+)
- **Charts**: Chart.js v4.4.0 (data visualization)
- **Icons**: Font Awesome v6.4.0

### Development Tools
- **nodemon** v3.0.1: Auto-restart server during development

### Deployment
- **Platform**: Railway.app
- **Build System**: Nixpacks
- **Process Manager**: Procfile configuration


---

## Architecture

### Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT SIDE                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  login.html  │  │   app.html   │  │  index.html  │     │
│  │   auth.js    │  │   main.js    │  │  (redirect)  │     │
│  │   auth.css   │  │   main.css   │  │              │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│         │                  │                                │
│         └──────────────────┴────────────────────────────────┤
│                            │                                │
│                    localStorage (session)                   │
└────────────────────────────┬────────────────────────────────┘
                             │
                    HTTP/REST API (JSON)
                             │
┌────────────────────────────┴────────────────────────────────┐
│                        SERVER SIDE                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Express.js Server                       │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   Auth     │  │   Sales    │  │ Purchases  │    │  │
│  │  │  Routes    │  │  Routes    │  │  Routes    │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  │  ┌────────────┐                                     │  │
│  │  │ Dashboard  │                                     │  │
│  │  │  Routes    │                                     │  │
│  │  └────────────┘                                     │  │
│  └──────────────────────────────────────────────────────┘  │
│                            │                                │
│                    SQLite3 Database                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  ┌──────┐  ┌──────┐  ┌───────────┐                 │  │
│  │  │users │  │sales │  │ purchases │                 │  │
│  │  └──────┘  └──────┘  └───────────┘                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Request Flow

1. **User Authentication**:
   - User visits `index.html` → redirects to `login.html`
   - User submits credentials → `auth.js` sends POST to `/api/auth/login`
   - Server validates credentials → returns user object
   - Client stores user in `localStorage` → redirects to `app.html`

2. **Data Operations**:
   - User interacts with forms in `app.html`
   - `main.js` captures form submissions
   - AJAX requests sent to Express API endpoints
   - Server queries SQLite database
   - Server returns JSON response
   - Client updates UI dynamically

3. **Session Management**:
   - User data stored in browser's `localStorage`
   - Each page checks for valid session on load
   - Logout clears `localStorage` and redirects to login


---

## Project Structure

```
trader-ledger/
│
├── database/
│   ├── schema.sql              # Database schema definition
│   └── trader_ledger.db        # SQLite database file (auto-created)
│
├── server/
│   └── server.js               # Express.js backend server
│
├── node_modules/               # Dependencies (auto-generated)
│
├── index.html                  # Entry point (redirects to login)
├── login.html                  # Authentication page
├── app.html                    # Main application interface
│
├── auth.js                     # Authentication logic
├── auth.css                    # Authentication page styles
├── main.js                     # Main application logic
├── main.css                    # Main application styles
│
├── favicon.svg                 # Application icon
│
├── package.json                # Node.js dependencies and scripts
├── package-lock.json           # Locked dependency versions
│
├── nixpacks.toml               # Nixpacks build configuration
├── Procfile                    # Process definition for deployment
├── railway.json                # Railway platform configuration
├── .railwayignore              # Files to ignore during deployment
├── .gitignore                  # Git ignore rules
│
├── start.sh                    # Linux/Mac startup script
├── start.bat                   # Windows startup script
│
└── README.md                   # Project documentation
```

### File Descriptions

#### Core Application Files

- **index.html**: Simple redirect page that sends users to login
- **login.html**: Authentication interface with login and registration forms
- **app.html**: Main application with dashboard, sales, purchases, and debt tracking
- **auth.js**: Handles login/registration logic and API communication
- **main.js**: Core application logic for all features (983 lines)
- **auth.css**: Styling for authentication pages
- **main.css**: Comprehensive styling for main application

#### Backend Files

- **server/server.js**: Express server with all API routes and database logic
- **database/schema.sql**: SQL schema for creating tables and indexes
- **database/trader_ledger.db**: SQLite database file (created on first run)

#### Configuration Files

- **package.json**: Defines dependencies, scripts, and project metadata
- **nixpacks.toml**: Configures build process for Railway deployment
- **Procfile**: Specifies the command to start the application
- **railway.json**: Railway-specific configuration (currently empty)

#### Utility Scripts

- **start.sh**: Bash script for starting the server on Unix systems
- **start.bat**: Batch script for starting the server on Windows


---

## Database Design

### Schema Overview

The application uses SQLite3 with three main tables:

#### 1. Users Table
Stores business/user account information.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    business_name VARCHAR(255) NOT NULL,
    business_type VARCHAR(50) NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Fields**:
- `id`: Auto-incrementing primary key
- `business_name`: Name of the business
- `business_type`: Category (retail, wholesale, services, manufacturing, other)
- `owner_name`: Full name of business owner
- `email`: Unique email for login (indexed)
- `phone`: Contact phone number
- `address`: Business address
- `password`: Bcrypt hashed password
- `created_at`, `updated_at`: Timestamps

#### 2. Sales Table
Records all sales transactions.

```sql
CREATE TABLE sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    item VARCHAR(255) NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    price_per_unit DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    amount_paid DECIMAL(10, 2) DEFAULT 0,
    balance DECIMAL(10, 2) DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
    sale_date DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

**Fields**:
- `id`: Auto-incrementing primary key
- `user_id`: Foreign key to users table
- `customer_name`: Name of customer
- `customer_email`: Customer email (for notifications)
- `item`: Product/service sold
- `quantity`: Amount sold
- `unit`: Unit of measurement (kg, pcs, liters, etc.)
- `price_per_unit`: Price per unit
- `total`: Total amount (quantity × price_per_unit)
- `amount_paid`: Amount paid so far
- `balance`: Remaining balance
- `status`: Payment status (paid, unpaid, partial)
- `sale_date`: Date of sale
- `created_at`: Record creation timestamp

#### 3. Purchases Table
Records all purchase transactions.

```sql
CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    supplier_name VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    quantity DECIMAL(10, 2) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    price_per_unit DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    amount_paid DECIMAL(10, 2) DEFAULT 0,
    balance DECIMAL(10, 2) DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
    purchase_date DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

**Fields**: Similar to sales table but for purchases from suppliers.

### Indexes

Performance optimization indexes:

```sql
CREATE INDEX idx_sales_user_id ON sales(user_id);
CREATE INDEX idx_sales_status ON sales(status);
CREATE INDEX idx_purchases_user_id ON purchases(user_id);
CREATE INDEX idx_purchases_status ON purchases(status);
CREATE INDEX idx_users_email ON users(email);
```

### Data Isolation

- Each business (user) has isolated data via `user_id` foreign key
- Cascade delete ensures data cleanup when user is deleted
- Email uniqueness prevents duplicate accounts


---

## Backend Implementation

### Server Setup (server/server.js)

#### Dependencies and Configuration

```javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
```

#### Middleware Stack

1. **CORS**: Enables cross-origin requests
   ```javascript
   const corsOptions = {
       origin: process.env.CORS_ORIGIN || '*',
       credentials: true
   };
   app.use(cors(corsOptions));
   ```

2. **JSON Parser**: Parses incoming JSON payloads
   ```javascript
   app.use(express.json());
   ```

3. **Static Files**: Serves frontend files
   ```javascript
   app.use(express.static(path.join(__dirname, '..')));
   ```

#### Database Initialization

```javascript
// Ensure database directory exists
const dbDir = path.join(__dirname, '../database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Connect to database
const dbPath = process.env.DATABASE_PATH || 
               path.join(__dirname, '../database/trader_ledger.db');
const db = new sqlite3.Database(dbPath);

// Execute schema
const schemaPath = path.join(__dirname, '../database/schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');
db.exec(schema);
```

#### Helper Functions

Three promise-based wrappers for SQLite operations:

```javascript
// Execute INSERT/UPDATE/DELETE
const runQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function(err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, changes: this.changes });
        });
    });
};

// Get single row
const getQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.get(query, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
};

// Get multiple rows
const allQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};
```

#### Graceful Shutdown

```javascript
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function shutdown() {
    server.close(() => {
        db.close((err) => {
            if (err) {
                console.error('Error closing database:', err);
                process.exit(1);
            } else {
                console.log('Database connection closed');
                process.exit(0);
            }
        });
    });
}
```


---

## API Documentation

### Authentication Endpoints

#### POST /api/auth/register
Register a new business account.

**Request Body**:
```json
{
  "businessName": "ABC Store",
  "businessType": "retail",
  "ownerName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St",
  "password": "securepassword"
}
```

**Response** (Success - 200):
```json
{
  "success": true,
  "message": "Registration successful",
  "userId": 1
}
```

**Response** (Error - 400):
```json
{
  "error": "Email already registered"
}
```

**Implementation**:
- Checks if email already exists
- Hashes password using bcrypt (10 salt rounds)
- Inserts user into database
- Returns user ID

---

#### POST /api/auth/login
Authenticate user and get session data.

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response** (Success - 200):
```json
{
  "success": true,
  "user": {
    "id": 1,
    "business_name": "ABC Store",
    "business_type": "retail",
    "owner_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "123 Main St",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Response** (Error - 401):
```json
{
  "error": "Invalid credentials"
}
```

**Implementation**:
- Queries user by email
- Compares password hash using bcrypt
- Returns user object (password excluded)

---

### Sales Endpoints

#### GET /api/sales/:userId
Get all sales for a specific user.

**Parameters**:
- `userId` (path): User ID

**Response** (200):
```json
[
  {
    "id": 1,
    "user_id": 1,
    "customer_name": "Jane Smith",
    "customer_email": "jane@example.com",
    "item": "Product A",
    "quantity": 10,
    "unit": "pcs",
    "price_per_unit": 50.00,
    "total": 500.00,
    "amount_paid": 500.00,
    "balance": 0,
    "status": "paid",
    "sale_date": "2024-01-15",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
]
```

---

#### POST /api/sales
Add a new sale.

**Request Body**:
```json
{
  "userId": 1,
  "customer": "Jane Smith",
  "email": "jane@example.com",
  "item": "Product A",
  "quantity": 10,
  "unit": "pcs",
  "pricePerUnit": 50.00,
  "total": 500.00,
  "status": "paid",
  "date": "2024-01-15"
}
```

**Response** (200):
```json
{
  "success": true,
  "id": 1
}
```

---

#### PUT /api/sales/:id
Update sale status.

**Parameters**:
- `id` (path): Sale ID

**Request Body**:
```json
{
  "status": "paid"
}
```

**Response** (200):
```json
{
  "success": true
}
```

---

#### PUT /api/sales/customer/:userId/:customerName
Mark all unpaid sales for a customer as paid.

**Parameters**:
- `userId` (path): User ID
- `customerName` (path): Customer name

**Response** (200):
```json
{
  "success": true
}
```


---

### Purchase Endpoints

#### GET /api/purchases/:userId
Get all purchases for a specific user.

**Parameters**:
- `userId` (path): User ID

**Response** (200):
```json
[
  {
    "id": 1,
    "user_id": 1,
    "supplier_name": "Supplier XYZ",
    "item": "Raw Material",
    "quantity": 100,
    "unit": "kg",
    "price_per_unit": 10.00,
    "total": 1000.00,
    "amount_paid": 1000.00,
    "balance": 0,
    "status": "paid",
    "purchase_date": "2024-01-10",
    "created_at": "2024-01-10T09:00:00.000Z"
  }
]
```

---

#### POST /api/purchases
Add a new purchase.

**Request Body**:
```json
{
  "userId": 1,
  "supplier": "Supplier XYZ",
  "item": "Raw Material",
  "quantity": 100,
  "unit": "kg",
  "pricePerUnit": 10.00,
  "total": 1000.00,
  "status": "paid",
  "date": "2024-01-10"
}
```

**Response** (200):
```json
{
  "success": true,
  "id": 1
}
```

---

#### PUT /api/purchases/supplier/:userId/:supplierName
Mark all unpaid purchases for a supplier as paid.

**Parameters**:
- `userId` (path): User ID
- `supplierName` (path): Supplier name

**Response** (200):
```json
{
  "success": true
}
```

---

### Dashboard Endpoint

#### GET /api/dashboard/:userId
Get aggregated statistics for dashboard.

**Parameters**:
- `userId` (path): User ID

**Response** (200):
```json
{
  "sales": {
    "total_sales": 5000.00,
    "total_collected": 4500.00,
    "total_unpaid": 500.00
  },
  "purchases": {
    "total_purchases": 3000.00,
    "total_paid": 2800.00,
    "total_unpaid": 200.00
  }
}
```

**Implementation**:
- Uses SQL aggregate functions (SUM, CASE)
- Calculates totals based on status
- Returns separate objects for sales and purchases


---

## Frontend Implementation

### Authentication System (auth.js)

#### API URL Detection
Automatically detects environment:

```javascript
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : `${window.location.origin}/api`;
```

#### Login Flow

1. User submits login form
2. `handleLogin()` captures form data
3. Sends POST request to `/api/auth/login`
4. On success:
   - Stores user object in `localStorage`
   - Redirects to `app.html`
5. On failure:
   - Shows error alert

```javascript
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        window.location.href = 'app.html';
    } else {
        alert(data.error || 'Invalid email or password');
    }
}
```

#### Registration Flow

1. User fills registration form
2. `handleRegistration()` validates passwords match
3. Sends POST request to `/api/auth/register`
4. On success:
   - Shows success message
   - Switches to login form
5. On failure:
   - Shows error alert

#### Session Check

On page load:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = 'app.html';
        return;
    }
    // Show login form
});
```

---

### Main Application (main.js)

#### Application Initialization

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    loadApp(currentUser);
});
```

#### Navigation System

Single-page application navigation:

```javascript
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.screen').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active state from nav buttons
    document.querySelectorAll('#nav button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Activate corresponding nav button
    document.getElementById(`nav-${sectionId}`).classList.add('active');
}
```

Sections:
- `home`: Dashboard with metrics and charts
- `sales`: Record sales form and history
- `purchases`: Record purchases form and history
- `customer-debts`: View and manage customer debts
- `supplier-debts`: View and manage supplier debts


#### Sales Management

**Adding a Sale**:

```javascript
async function addSale(event) {
    event.preventDefault();
    
    // Collect form data
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
    let amountPaid = 0;
    let balance = total;
    
    // Handle partial payment
    if (status === 'partial') {
        amountPaid = parseFloat(document.getElementById('sale-amount-paid').value) || 0;
        if (amountPaid <= 0 || amountPaid >= total) {
            alert('Partial payment must be greater than 0 and less than total');
            return;
        }
        balance = total - amountPaid;
    } else if (status === 'paid') {
        amountPaid = total;
        balance = 0;
    }
    
    // Create sale object
    const sale = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        customer,
        email,
        item,
        quantity,
        unit,
        pricePerUnit,
        total,
        amountPaid,
        balance,
        status
    };
    
    // Save to localStorage
    const sales = loadData('sales');
    sales.push(sale);
    saveData('sales', sales);
    
    // Update UI
    document.getElementById('sale-form').reset();
    displaySales();
    updateCustomerDebts();
    updateDashboard();
}
```

**Displaying Sales**:

```javascript
function displaySales() {
    const sales = loadData('sales');
    const tbody = document.getElementById('sales-tbody');
    tbody.innerHTML = '';
    
    sales.forEach(sale => {
        const row = document.createElement('tr');
        const amountPaid = sale.amountPaid || 
                          (sale.status === 'paid' ? sale.total : 0);
        const balance = sale.balance !== undefined ? sale.balance : 
                       (sale.status === 'paid' ? 0 : sale.total);
        
        row.innerHTML = `
            <td>${sale.date}</td>
            <td>${sale.customer}</td>
            <td>${sale.email || 'N/A'}</td>
            <td>${sale.item}</td>
            <td>${sale.quantity}</td>
            <td>${sale.unit}</td>
            <td>₦${sale.pricePerUnit.toFixed(2)}</td>
            <td>₦${sale.total.toFixed(2)}</td>
            <td>₦${amountPaid.toFixed(2)}</td>
            <td>₦${balance.toFixed(2)}</td>
            <td><span class="status-badge status-${sale.status}">
                ${sale.status}
            </span></td>
        `;
        tbody.appendChild(row);
    });
}
```

**Partial Payment Toggle**:

```javascript
function togglePartialPayment(type) {
    const statusSelect = document.getElementById(`${type}-status`);
    const partialDiv = document.getElementById(`${type}-partial-payment`);
    const amountPaidInput = document.getElementById(`${type}-amount-paid`);
    
    if (statusSelect.value === 'partial') {
        partialDiv.style.display = 'block';
        amountPaidInput.required = true;
    } else {
        partialDiv.style.display = 'none';
        amountPaidInput.required = false;
        amountPaidInput.value = '';
    }
}
```


#### Customer Debt Tracking

**Updating Customer Debts**:

```javascript
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
```

**Email Notification System**:

```javascript
function notifyCustomer(email, customerName, amount) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const businessName = currentUser.business_name || currentUser.businessName;
    const ownerName = currentUser.owner_name || currentUser.ownerName;
    
    const subject = `Payment Reminder - ${businessName}`;
    const body = `Dear ${customerName},

This is a friendly reminder that you have an outstanding balance of 
₦${amount.toFixed(2)} with ${businessName}.

Please arrange payment at your earliest convenience.

Payment can be made to:
Business: ${businessName}
Contact: ${ownerName}
Email: ${currentUser.email}
Phone: ${currentUser.phone}
Address: ${currentUser.address}

Thank you for your business!

Best regards,
${ownerName}
${businessName}`;

    // Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mailto URL
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show options
    const choice = confirm(
        `Send payment reminder to ${customerName} (${email})?\n\n` +
        `Amount: ₦${amount.toFixed(2)}\n` +
        `From: ${businessName}\n\n` +
        `Click OK to open Gmail in browser\n` +
        `Click Cancel to use default email client`
    );
    
    if (choice) {
        window.open(gmailUrl, '_blank');
    } else {
        const mailtoLink = document.createElement('a');
        mailtoLink.href = mailtoUrl;
        mailtoLink.click();
    }
    
    // Offer clipboard copy
    setTimeout(() => {
        if (confirm('Would you like to copy the email details to clipboard?')) {
            const emailText = `To: ${email}\nSubject: ${subject}\n\n${body}`;
            navigator.clipboard.writeText(emailText).then(() => {
                alert('Email details copied to clipboard!');
            });
        }
    }, 500);
}
```

**Mark Customer as Paid**:

```javascript
function markCustomerPaid(customerName) {
    const sales = loadData('sales');
    
    // Update all unpaid sales for this customer
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
```


#### Dashboard and Charts

**Chart Initialization**:

Uses Chart.js library for three types of visualizations:

1. **Sales vs Purchases Bar Chart**:
```javascript
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
        scales: {
            y: { beginAtZero: true }
        }
    }
});
```

2. **Payment Status Doughnut Chart**:
```javascript
paymentStatusChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Collected', 'Customer Unpaid', 
                 'Paid to Suppliers', 'Supplier Unpaid'],
        datasets: [{
            data: [0, 0, 0, 0],
            backgroundColor: [
                'rgba(67, 160, 71, 0.8)',
                'rgba(255, 193, 7, 0.8)',
                'rgba(251, 140, 0, 0.8)',
                'rgba(229, 57, 53, 0.8)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});
```

3. **Cash Flow Line Chart**:
```javascript
cashFlowChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Total Sales', 'Collected', 'Total Purchases', 
                 'Paid to Suppliers', 'Net Profit'],
        datasets: [{
            label: 'Amount',
            data: [0, 0, 0, 0, 0],
            borderColor: 'rgba(67, 160, 71, 1)',
            backgroundColor: 'rgba(67, 160, 71, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    }
});
```

**Dashboard Update**:

```javascript
function updateDashboard() {
    // Calculate metrics
    const totalSales = calculateSalesTotal();
    const totalCollected = calculateSalesPaid();
    const totalCustomerUnpaid = calculateSalesUnpaid();
    const totalPurchases = calculatePurchasesTotal();
    const totalPaidSuppliers = calculatePurchasesPaid();
    const totalSupplierUnpaid = calculatePurchasesUnpaid();
    const netProfit = totalCollected - totalPaidSuppliers;
    const totalPending = totalCustomerUnpaid + totalSupplierUnpaid;
    
    // Update DOM elements
    document.getElementById('total-sales').textContent = 
        '₦' + totalSales.toFixed(2);
    document.getElementById('total-purchases').textContent = 
        '₦' + totalPurchases.toFixed(2);
    document.getElementById('net-profit').textContent = 
        '₦' + netProfit.toFixed(2);
    document.getElementById('total-pending').textContent = 
        '₦' + totalPending.toFixed(2);
    
    // Update charts
    updateCharts();
}
```

**Chart Updates**:

```javascript
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
        salesPurchasesChart.data.datasets[0].data = 
            [totalSales, totalPurchases];
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
```


---

## Styling and UI Design

### Design System

**Color Palette**:
- Primary Green: `#2e7d32`, `#43a047`, `#66bb6a`
- Secondary Orange: `#fb8c00`, `#ffe0b2`
- Teal: `#00897b`, `#b2dfdb`
- Red: `#e53935`, `#ffcdd2`
- Yellow: `#ffc107`, `#fff9c4`
- Neutral: `#636e72`, `#2d3436`
- Background: `#e8f5e9`, `#f1f8f4`

**Typography**:
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Headings: Bold, green color scheme
- Body: 1.6 line-height for readability

### Key CSS Features

**Gradients**:
```css
background: linear-gradient(135deg, #2e7d32 0%, #388e3c 100%);
```

**Animations**:
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.screen.active {
    animation: fadeIn 0.4s ease-in;
}
```

**Hover Effects**:
```css
.metric-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
```

**Responsive Grid**:
```css
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}
```

### Component Styles

**Navigation Bar**:
- Sticky positioning at top
- Gradient background
- Active state highlighting
- Hover animations

**Forms**:
- Light green background (`#f8fdf9`)
- Green borders on focus
- Full-width inputs
- Gradient submit buttons

**Tables**:
- Alternating row colors
- Hover effects on rows
- Gradient header
- Rounded corners with overflow hidden

**Metric Cards**:
- Icon + content layout
- Colored left border
- Gradient backgrounds
- Shadow on hover

**Status Badges**:
- Rounded pills
- Color-coded by status:
  - Paid: Green
  - Unpaid: Red
  - Partial: Yellow

### Responsive Design

**Breakpoints**:

1. **Desktop** (> 768px):
   - Multi-column grids
   - Full navigation bar
   - Large metric cards

2. **Tablet** (≤ 768px):
   ```css
   @media (max-width: 768px) {
       .metrics-grid {
           grid-template-columns: 1fr;
       }
       #nav button {
           flex: 1 1 calc(50% - 0.5rem);
       }
   }
   ```

3. **Mobile** (≤ 480px):
   ```css
   @media (max-width: 480px) {
       #nav button {
           flex: 1 1 100%;
       }
       table {
           font-size: 0.8rem;
       }
   }
   ```


---

## Deployment

### Railway Platform

Railway is a modern platform-as-a-service (PaaS) that simplifies deployment.

#### Configuration Files

**1. nixpacks.toml**
Defines the build process using Nixpacks:

```toml
[phases.setup]
nixPkgs = ["nodejs", "npm"]

[phases.install]
cmds = ["npm ci"]

[phases.build]
cmds = ["npm run build"]

[start]
cmd = "npm start"
```

**Phases**:
- `setup`: Installs Node.js and npm
- `install`: Runs `npm ci` (clean install from package-lock.json)
- `build`: Runs build script (currently just echoes "No build step required")
- `start`: Starts the server with `npm start`

**2. Procfile**
Defines the process to run:

```
web: npm start
```

This tells Railway to run `npm start` as a web process.

**3. railway.json**
Currently empty, but can contain Railway-specific configuration like:
- Environment variables
- Build settings
- Health check endpoints

#### Deployment Steps

1. **Connect Repository**:
   - Push code to GitHub
   - Connect GitHub repo to Railway
   - Railway auto-detects Node.js project

2. **Automatic Build**:
   - Railway reads `nixpacks.toml`
   - Installs dependencies
   - Runs build commands

3. **Environment Variables**:
   Set in Railway dashboard:
   - `PORT`: Auto-set by Railway
   - `DATABASE_PATH`: Optional custom path
   - `CORS_ORIGIN`: Set to your domain or `*`
   - `NODE_ENV`: Set to `production`

4. **Database Persistence**:
   - SQLite file stored in Railway volume
   - Persists across deployments
   - Automatic backups available

5. **Domain**:
   - Railway provides default domain: `*.railway.app`
   - Custom domain can be configured

#### Environment Detection

The frontend automatically detects environment:

```javascript
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : `${window.location.origin}/api`;
```

- Local: Uses `http://localhost:3000/api`
- Production: Uses same origin (Railway domain)

### Alternative Deployment Options

#### 1. Heroku
Similar to Railway:
- Use `Procfile`
- Set environment variables
- Add SQLite buildpack or use PostgreSQL

#### 2. DigitalOcean App Platform
- Connect GitHub repo
- Configure build command: `npm install`
- Configure run command: `npm start`

#### 3. AWS EC2
Manual deployment:
- Launch EC2 instance
- Install Node.js
- Clone repository
- Run with PM2 or systemd

#### 4. Docker
Create `Dockerfile`:

```dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t trader-ledger .
docker run -p 3000:3000 trader-ledger
```


---

## Development Workflow

### Local Setup

#### Prerequisites
- Node.js v14 or higher
- npm v6 or higher
- Git (optional)

#### Installation Steps

1. **Clone or Download**:
   ```bash
   git clone <repository-url>
   cd trader-ledger
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

   This installs:
   - express
   - sqlite3
   - cors
   - bcryptjs
   - nodemon (dev dependency)

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   
   Or for production mode:
   ```bash
   npm start
   ```

4. **Access Application**:
   - Open browser to `http://localhost:3000`
   - Redirects to `login.html`
   - Register a new business account
   - Start using the application

### NPM Scripts

Defined in `package.json`:

```json
{
  "scripts": {
    "start": "node server/server.js",
    "dev": "nodemon server/server.js",
    "build": "echo 'No build step required'"
  }
}
```

- `npm start`: Production mode (manual restart required)
- `npm run dev`: Development mode (auto-restart on file changes)
- `npm run build`: Placeholder for build step

### Startup Scripts

#### Linux/Mac (start.sh)

```bash
#!/bin/bash

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    exit 1
fi

# Create database directory
if [ ! -d "database" ]; then
    mkdir -p database
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    npm install
fi

# Start server
PORT=${1:-3000} npm start
```

Usage:
```bash
chmod +x start.sh
./start.sh          # Default port 3000
./start.sh 8080     # Custom port
```

#### Windows (start.bat)

```batch
@echo off
echo Starting Trader Ledger...

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed!
    pause
    exit /b 1
)

if not exist "database" mkdir database
if not exist "node_modules" npm install

npm start
```

Usage:
```cmd
start.bat
```

### Development Best Practices

#### Code Organization

1. **Backend** (`server/server.js`):
   - Group routes by feature (auth, sales, purchases)
   - Use helper functions for database operations
   - Implement error handling
   - Add logging for debugging

2. **Frontend** (`main.js`):
   - Organize by feature sections
   - Use JSDoc comments for functions
   - Keep functions small and focused
   - Separate concerns (data, UI, logic)

3. **Styling** (`main.css`, `auth.css`):
   - Use CSS variables for colors
   - Group related styles
   - Mobile-first approach
   - Consistent naming conventions

#### Testing Workflow

1. **Manual Testing**:
   - Register new account
   - Add sales and purchases
   - Test payment status changes
   - Verify calculations
   - Test email notifications
   - Check responsive design

2. **Database Testing**:
   - Verify data persistence
   - Test foreign key constraints
   - Check indexes performance
   - Test concurrent users

3. **Browser Testing**:
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari
   - Mobile browsers

#### Debugging

**Server-side**:
```javascript
console.log('Debug info:', variable);
console.error('Error:', error);
```

**Client-side**:
```javascript
console.log('Debug info:', variable);
// Use browser DevTools
// Check Network tab for API calls
// Check Console for errors
```

**Database**:
```bash
# Open SQLite database
sqlite3 database/trader_ledger.db

# Run queries
SELECT * FROM users;
SELECT * FROM sales WHERE user_id = 1;
```


---

## Features Breakdown

### 1. User Authentication

**Registration**:
- Business information collection
- Password hashing with bcrypt
- Email uniqueness validation
- Automatic account creation

**Login**:
- Email/password authentication
- Session management via localStorage
- Automatic redirect on success
- Error handling for invalid credentials

**Session Management**:
- Client-side session storage
- Automatic logout on session expiry
- Protected routes (redirect to login if not authenticated)

### 2. Sales Management

**Features**:
- Record sales with customer details
- Track quantity, unit, and pricing
- Support for partial payments
- Payment status tracking (paid, unpaid, partial)
- Sales history table
- Real-time calculations

**Data Captured**:
- Customer name and email
- Item description
- Quantity and unit of measurement
- Price per unit
- Total amount
- Amount paid
- Balance remaining
- Payment status
- Sale date

### 3. Purchase Management

**Features**:
- Record purchases from suppliers
- Track inventory costs
- Support for partial payments
- Payment status tracking
- Purchase history table
- Real-time calculations

**Data Captured**:
- Supplier name
- Item description
- Quantity and unit
- Price per unit
- Total amount
- Amount paid
- Balance remaining
- Payment status
- Purchase date

### 4. Customer Debt Tracking

**Features**:
- Automatic debt aggregation by customer
- View all unpaid customer balances
- Mark customer debts as paid (bulk update)
- Email notification system
- Last transaction date tracking

**Email Notifications**:
- Pre-formatted payment reminder
- Business details included
- Multiple sending options (Gmail, default client)
- Clipboard copy option
- Professional template

### 5. Supplier Debt Tracking

**Features**:
- Automatic debt aggregation by supplier
- View all unpaid supplier balances
- Mark supplier debts as paid (bulk update)
- Last transaction date tracking

### 6. Dashboard Analytics

**Metrics Displayed**:
- Total Sales
- Total Purchases
- Net Profit (collected - paid to suppliers)
- Total Pending (customer + supplier unpaid)
- Total Collected from customers
- Customer Unpaid amount
- Total Paid to suppliers
- Supplier Unpaid amount

**Visualizations**:

1. **Sales vs Purchases Bar Chart**:
   - Compares total sales to total purchases
   - Color-coded bars

2. **Payment Status Doughnut Chart**:
   - Shows distribution of:
     - Collected from customers
     - Customer unpaid
     - Paid to suppliers
     - Supplier unpaid

3. **Cash Flow Line Chart**:
   - Displays trend across:
     - Total sales
     - Collected amount
     - Total purchases
     - Paid to suppliers
     - Net profit

**Real-time Updates**:
- All metrics update automatically
- Charts refresh on data changes
- No page reload required

### 7. Data Persistence

**LocalStorage** (Client-side):
- User session data
- Temporary data caching

**SQLite Database** (Server-side):
- Permanent data storage
- Relational data structure
- ACID compliance
- File-based (no separate server needed)

### 8. Responsive Design

**Mobile Support**:
- Touch-friendly interface
- Responsive navigation
- Stacked layouts on small screens
- Readable tables on mobile

**Tablet Support**:
- Optimized grid layouts
- Balanced spacing
- Touch-optimized buttons

**Desktop Support**:
- Multi-column layouts
- Large charts
- Hover effects
- Keyboard navigation


---

## Security Considerations

### Implemented Security Measures

1. **Password Security**:
   - Bcrypt hashing with 10 salt rounds
   - Passwords never stored in plain text
   - Passwords not returned in API responses

2. **SQL Injection Prevention**:
   - Parameterized queries throughout
   - No string concatenation in SQL
   - SQLite3 prepared statements

3. **CORS Configuration**:
   - Configurable origin
   - Credentials support
   - Production-ready settings

4. **Data Isolation**:
   - User-specific data queries
   - Foreign key constraints
   - Cascade delete for data cleanup

5. **Session Management**:
   - Client-side session storage
   - Automatic session checks
   - Logout functionality

### Security Limitations & Recommendations

**Current Limitations**:

1. **No JWT/Token Authentication**:
   - Uses localStorage for session
   - No token expiration
   - No refresh tokens

   **Recommendation**: Implement JWT with:
   ```javascript
   const jwt = require('jsonwebtoken');
   
   // Generate token
   const token = jwt.sign(
       { userId: user.id }, 
       process.env.JWT_SECRET, 
       { expiresIn: '24h' }
   );
   
   // Verify token middleware
   function authenticateToken(req, res, next) {
       const token = req.headers['authorization'];
       if (!token) return res.sendStatus(401);
       
       jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
           if (err) return res.sendStatus(403);
           req.user = user;
           next();
       });
   }
   ```

2. **No HTTPS Enforcement**:
   - HTTP allowed in development
   - Credentials sent in plain text

   **Recommendation**: 
   - Use HTTPS in production
   - Railway provides HTTPS by default
   - Add redirect middleware:
   ```javascript
   app.use((req, res, next) => {
       if (req.header('x-forwarded-proto') !== 'https' && 
           process.env.NODE_ENV === 'production') {
           res.redirect(`https://${req.header('host')}${req.url}`);
       } else {
           next();
       }
   });
   ```

3. **No Rate Limiting**:
   - Vulnerable to brute force attacks
   - No API throttling

   **Recommendation**: Add express-rate-limit:
   ```javascript
   const rateLimit = require('express-rate-limit');
   
   const limiter = rateLimit({
       windowMs: 15 * 60 * 1000, // 15 minutes
       max: 100 // limit each IP to 100 requests per windowMs
   });
   
   app.use('/api/', limiter);
   ```

4. **No Input Validation**:
   - Basic client-side validation only
   - No server-side sanitization

   **Recommendation**: Add express-validator:
   ```javascript
   const { body, validationResult } = require('express-validator');
   
   app.post('/api/auth/register',
       body('email').isEmail(),
       body('password').isLength({ min: 6 }),
       async (req, res) => {
           const errors = validationResult(req);
           if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() });
           }
           // Process registration
       }
   );
   ```

5. **No CSRF Protection**:
   - Vulnerable to cross-site request forgery

   **Recommendation**: Add csurf middleware:
   ```javascript
   const csrf = require('csurf');
   const csrfProtection = csrf({ cookie: true });
   
   app.use(csrfProtection);
   ```

6. **Sensitive Data in Logs**:
   - Passwords might appear in error logs

   **Recommendation**: 
   - Never log request bodies containing passwords
   - Use environment-based logging levels

### Best Practices for Production

1. **Environment Variables**:
   ```bash
   NODE_ENV=production
   JWT_SECRET=your-secret-key-here
   DATABASE_PATH=/data/trader_ledger.db
   CORS_ORIGIN=https://yourdomain.com
   ```

2. **Database Backups**:
   - Regular automated backups
   - Test restore procedures
   - Store backups securely

3. **Monitoring**:
   - Error logging (e.g., Sentry)
   - Performance monitoring
   - Uptime monitoring

4. **Updates**:
   - Keep dependencies updated
   - Monitor security advisories
   - Regular security audits


---

## Future Enhancements

### Potential Features

1. **Advanced Reporting**:
   - PDF export of reports
   - Date range filtering
   - Profit/loss statements
   - Tax reports
   - Custom report builder

2. **Multi-Currency Support**:
   - Currency selection
   - Exchange rate integration
   - Multi-currency transactions

3. **Inventory Management**:
   - Stock tracking
   - Low stock alerts
   - Reorder points
   - Inventory valuation

4. **Invoice Generation**:
   - Professional invoice templates
   - PDF generation
   - Email invoices to customers
   - Invoice numbering system

5. **Payment Integration**:
   - Stripe/PayPal integration
   - Online payment acceptance
   - Payment gateway webhooks
   - Automatic payment recording

6. **User Roles & Permissions**:
   - Admin, manager, staff roles
   - Permission-based access
   - Multi-user support
   - Activity logging

7. **Mobile App**:
   - React Native app
   - Offline support
   - Push notifications
   - Barcode scanning

8. **Advanced Analytics**:
   - Predictive analytics
   - Trend analysis
   - Customer segmentation
   - Supplier performance metrics

9. **Automated Reminders**:
   - Scheduled email reminders
   - SMS notifications
   - WhatsApp integration
   - Reminder templates

10. **Data Export/Import**:
    - CSV export
    - Excel export
    - Bulk import
    - Data migration tools

### Technical Improvements

1. **Database Migration**:
   - Move to PostgreSQL for scalability
   - Better concurrent user support
   - Advanced query capabilities

2. **API Versioning**:
   - Version API endpoints
   - Backward compatibility
   - API documentation (Swagger)

3. **Testing**:
   - Unit tests (Jest)
   - Integration tests
   - E2E tests (Cypress)
   - Test coverage reports

4. **Performance Optimization**:
   - Database query optimization
   - Caching layer (Redis)
   - CDN for static assets
   - Lazy loading

5. **Code Quality**:
   - ESLint configuration
   - Prettier formatting
   - TypeScript migration
   - Code documentation

6. **CI/CD Pipeline**:
   - Automated testing
   - Automated deployment
   - Staging environment
   - Rollback capabilities


---

## Troubleshooting

### Common Issues

#### 1. Server Won't Start

**Error**: `Cannot find module 'express'`

**Solution**:
```bash
npm install
```

**Error**: `EADDRINUSE: address already in use`

**Solution**:
```bash
# Find process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -i :3000
kill -9 <PID>

# Or use different port:
PORT=8080 npm start
```

#### 2. Database Issues

**Error**: `SQLITE_CANTOPEN: unable to open database file`

**Solution**:
```bash
# Create database directory
mkdir -p database

# Check permissions
chmod 755 database
```

**Error**: `SQLITE_CORRUPT: database disk image is malformed`

**Solution**:
```bash
# Backup current database
cp database/trader_ledger.db database/trader_ledger.db.backup

# Try to recover
sqlite3 database/trader_ledger.db ".recover" | sqlite3 database/trader_ledger_recovered.db

# Or start fresh (WARNING: loses data)
rm database/trader_ledger.db
npm start
```

#### 3. Login Issues

**Problem**: Can't login after registration

**Solution**:
- Check browser console for errors
- Verify server is running
- Check API URL in auth.js
- Clear localStorage and try again:
  ```javascript
  localStorage.clear();
  ```

#### 4. Charts Not Displaying

**Problem**: Charts show as blank

**Solution**:
- Check browser console for Chart.js errors
- Verify Chart.js CDN is accessible
- Check if canvas elements exist
- Verify data is being calculated correctly

#### 5. Email Notifications Not Working

**Problem**: Email button doesn't work

**Solution**:
- Ensure customer has valid email
- Check browser popup blocker
- Try different email client option
- Use clipboard copy as fallback

### Development Issues

#### Hot Reload Not Working

**Solution**:
```bash
# Make sure nodemon is installed
npm install --save-dev nodemon

# Use dev script
npm run dev
```

#### CORS Errors

**Error**: `Access to fetch at '...' from origin '...' has been blocked by CORS policy`

**Solution**:
```javascript
// In server.js, update CORS config
const corsOptions = {
    origin: '*', // Or specific origin
    credentials: true
};
```

#### Database Locked

**Error**: `SQLITE_BUSY: database is locked`

**Solution**:
- Close other connections to database
- Restart server
- Check for long-running queries
- Consider connection pooling

### Production Issues

#### Application Crashes

**Check logs**:
```bash
# Railway
railway logs

# Or check server logs
tail -f logs/error.log
```

**Common causes**:
- Out of memory
- Unhandled promise rejections
- Database connection issues

**Solutions**:
- Add error handling
- Implement graceful shutdown
- Monitor resource usage

#### Slow Performance

**Diagnosis**:
- Check database query performance
- Monitor API response times
- Check network latency

**Solutions**:
- Add database indexes
- Implement caching
- Optimize queries
- Use CDN for static assets


---

## Glossary

### Technical Terms

**API (Application Programming Interface)**: Interface that allows frontend and backend to communicate using HTTP requests.

**bcrypt**: Password hashing library that uses salt rounds to securely hash passwords.

**CORS (Cross-Origin Resource Sharing)**: Security feature that controls which domains can access your API.

**Express.js**: Minimal and flexible Node.js web application framework.

**Foreign Key**: Database constraint that links records between tables.

**JWT (JSON Web Token)**: Compact token format for securely transmitting information between parties.

**localStorage**: Browser storage mechanism for persisting data on client-side.

**Middleware**: Functions that execute during the request-response cycle in Express.

**Node.js**: JavaScript runtime built on Chrome's V8 engine for server-side execution.

**Parameterized Query**: SQL query that uses placeholders to prevent SQL injection.

**REST API**: Architectural style for designing networked applications using HTTP methods.

**SQLite**: Lightweight, file-based relational database management system.

**SPA (Single Page Application)**: Web application that loads a single HTML page and dynamically updates content.

### Business Terms

**Accounts Payable**: Money owed to suppliers (supplier debts).

**Accounts Receivable**: Money owed by customers (customer debts).

**Balance**: Remaining amount to be paid after partial payment.

**Cash Flow**: Movement of money in and out of business.

**Net Profit**: Total collected from customers minus total paid to suppliers.

**Partial Payment**: Payment of less than the full amount owed.

**Purchase**: Transaction where business buys from supplier.

**Sale**: Transaction where business sells to customer.

**Supplier**: Entity that provides goods or services to the business.

**Unit**: Measurement type (pieces, kilograms, liters, etc.).

---

## Conclusion

Trader Ledger is a comprehensive business management solution built with modern web technologies. It provides essential features for tracking sales, purchases, and debts while maintaining simplicity and ease of use.

### Key Strengths

1. **Simple Setup**: No complex configuration required
2. **Lightweight**: SQLite database, no separate database server
3. **Modern UI**: Responsive design with interactive charts
4. **Easy Deployment**: Railway-ready with one-click deployment
5. **Self-contained**: All features in a single application

### Learning Outcomes

By studying this project, developers can learn:

- Full-stack JavaScript development
- RESTful API design
- Database design and SQL
- Authentication and security
- Frontend state management
- Chart.js data visualization
- Responsive CSS design
- Deployment to cloud platforms

### Support and Contribution

For issues, questions, or contributions:
- Check the README.md file
- Review this documentation
- Test locally before deploying
- Follow security best practices

---

**Project**: Trader Ledger  
**Version**: 1.0.0  
**License**: MIT  
**Documentation Last Updated**: 2024

---

## Quick Reference

### Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Access application
http://localhost:3000
```

### File Locations

- Backend: `server/server.js`
- Database Schema: `database/schema.sql`
- Frontend Logic: `main.js`, `auth.js`
- Styling: `main.css`, `auth.css`
- HTML Pages: `index.html`, `login.html`, `app.html`

### API Endpoints Summary

- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/sales/:userId` - Get sales
- `POST /api/sales` - Add sale
- `GET /api/purchases/:userId` - Get purchases
- `POST /api/purchases` - Add purchase
- `GET /api/dashboard/:userId` - Get stats

### Default Credentials

No default credentials. Register a new account on first use.

---

**End of Documentation**
