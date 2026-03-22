const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration for production
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Ensure database directory exists
const dbDir = path.join(__dirname, '../database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Database setup
const dbPath = process.env.DATABASE_PATH || path.join(__dirname, '../database/trader_ledger.db');
const db = new sqlite3.Database(dbPath);

// Initialize database with schema
const schemaPath = path.join(__dirname, '../database/schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

db.exec(schema, (err) => {
    if (err) {
        console.error('Error initializing database:', err);
    } else {
        console.log('Database initialized successfully');
    }
});

// Helper function to run queries
const runQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function(err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, changes: this.changes });
        });
    });
};

const getQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.get(query, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
};

const allQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

// ==================== AUTH ROUTES ====================

// Register new user/business
app.post('/api/auth/register', async (req, res) => {
    try {
        const { businessName, businessType, ownerName, email, phone, address, password } = req.body;

        // Check if user exists
        const existingUser = await getQuery('SELECT id FROM users WHERE email = ?', [email]);
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        const result = await runQuery(
            `INSERT INTO users (business_name, business_type, owner_name, email, phone, address, password)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [businessName, businessType, ownerName, email, phone, address, hashedPassword]
        );

        res.json({ 
            success: true, 
            message: 'Registration successful',
            userId: result.id 
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await getQuery('SELECT * FROM users WHERE email = ?', [email]);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Don't send password back
        delete user.password;

        res.json({ success: true, user });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

// ==================== SALES ROUTES ====================

// Get all sales for a user
app.get('/api/sales/:userId', async (req, res) => {
    try {
        const sales = await allQuery(
            'SELECT * FROM sales WHERE user_id = ? ORDER BY sale_date DESC',
            [req.params.userId]
        );
        res.json(sales);
    } catch (error) {
        console.error('Error fetching sales:', error);
        res.status(500).json({ error: 'Failed to fetch sales' });
    }
});

// Add new sale
app.post('/api/sales', async (req, res) => {
    try {
        const { userId, customer, email, item, quantity, unit, pricePerUnit, total, status, date } = req.body;

        const result = await runQuery(
            `INSERT INTO sales (user_id, customer_name, customer_email, item, quantity, unit, price_per_unit, total, status, sale_date)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, customer, email, item, quantity, unit, pricePerUnit, total, status, date]
        );

        res.json({ success: true, id: result.id });
    } catch (error) {
        console.error('Error adding sale:', error);
        res.status(500).json({ error: 'Failed to add sale' });
    }
});

// Update sale status
app.put('/api/sales/:id', async (req, res) => {
    try {
        const { status } = req.body;
        await runQuery('UPDATE sales SET status = ? WHERE id = ?', [status, req.params.id]);
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating sale:', error);
        res.status(500).json({ error: 'Failed to update sale' });
    }
});

// Mark customer sales as paid
app.put('/api/sales/customer/:userId/:customerName', async (req, res) => {
    try {
        await runQuery(
            'UPDATE sales SET status = ? WHERE user_id = ? AND customer_name = ? AND status = ?',
            ['paid', req.params.userId, req.params.customerName, 'unpaid']
        );
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating customer sales:', error);
        res.status(500).json({ error: 'Failed to update sales' });
    }
});

// ==================== PURCHASES ROUTES ====================

// Get all purchases for a user
app.get('/api/purchases/:userId', async (req, res) => {
    try {
        const purchases = await allQuery(
            'SELECT * FROM purchases WHERE user_id = ? ORDER BY purchase_date DESC',
            [req.params.userId]
        );
        res.json(purchases);
    } catch (error) {
        console.error('Error fetching purchases:', error);
        res.status(500).json({ error: 'Failed to fetch purchases' });
    }
});

// Add new purchase
app.post('/api/purchases', async (req, res) => {
    try {
        const { userId, supplier, item, quantity, unit, pricePerUnit, total, status, date } = req.body;

        const result = await runQuery(
            `INSERT INTO purchases (user_id, supplier_name, item, quantity, unit, price_per_unit, total, status, purchase_date)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, supplier, item, quantity, unit, pricePerUnit, total, status, date]
        );

        res.json({ success: true, id: result.id });
    } catch (error) {
        console.error('Error adding purchase:', error);
        res.status(500).json({ error: 'Failed to add purchase' });
    }
});

// Mark supplier purchases as paid
app.put('/api/purchases/supplier/:userId/:supplierName', async (req, res) => {
    try {
        await runQuery(
            'UPDATE purchases SET status = ? WHERE user_id = ? AND supplier_name = ? AND status = ?',
            ['paid', req.params.userId, req.params.supplierName, 'unpaid']
        );
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating supplier purchases:', error);
        res.status(500).json({ error: 'Failed to update purchases' });
    }
});

// ==================== DASHBOARD ROUTES ====================

// Get dashboard statistics
app.get('/api/dashboard/:userId', async (req, res) => {
    try {
        const salesStats = await getQuery(
            `SELECT 
                SUM(total) as total_sales,
                SUM(CASE WHEN status = 'paid' THEN total ELSE 0 END) as total_collected,
                SUM(CASE WHEN status = 'unpaid' THEN total ELSE 0 END) as total_unpaid
             FROM sales WHERE user_id = ?`,
            [req.params.userId]
        );

        const purchaseStats = await getQuery(
            `SELECT 
                SUM(total) as total_purchases,
                SUM(CASE WHEN status = 'paid' THEN total ELSE 0 END) as total_paid,
                SUM(CASE WHEN status = 'unpaid' THEN total ELSE 0 END) as total_unpaid
             FROM purchases WHERE user_id = ?`,
            [req.params.userId]
        );

        res.json({
            sales: salesStats || { total_sales: 0, total_collected: 0, total_unpaid: 0 },
            purchases: purchaseStats || { total_purchases: 0, total_paid: 0, total_unpaid: 0 }
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ error: 'Failed to fetch statistics' });
    }
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 Trader Ledger Server running on http://localhost:${PORT}`);
    console.log(`📊 Database: ${dbPath}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`\nPress Ctrl+C to stop the server\n`);
});

// Graceful shutdown
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function shutdown() {
    console.log('\n⏳ Shutting down gracefully...');
    server.close(() => {
        db.close((err) => {
            if (err) {
                console.error('Error closing database:', err);
                process.exit(1);
            } else {
                console.log('✅ Database connection closed');
                process.exit(0);
            }
        });
    });
}
