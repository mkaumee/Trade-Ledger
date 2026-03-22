# Trader Ledger - Profit & Debt Tracking System

A modern web application for businesses to track sales, purchases, customer debts, and supplier debts with real-time analytics and visualizations.

## Features

- 🔐 **User Authentication** - Secure login and registration for businesses
- 💰 **Sales Management** - Track sales with customer information and payment status
- 🛒 **Purchase Management** - Record purchases from suppliers
- 📊 **Dashboard** - Visual analytics with charts and key metrics
- 👥 **Customer Debts** - Track unpaid customer balances with email notifications
- 🏢 **Supplier Debts** - Monitor outstanding supplier payments
- 📧 **Email Notifications** - Send payment reminders to customers
- 💾 **SQLite Database** - Persistent data storage per business

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
```bash
cd trader-ledger
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### On Linux/Mac:
```bash
chmod +x start.sh
./start.sh
```

Or specify a custom port:
```bash
./start.sh 8080
```

### On Windows:
```cmd
start.bat
```

Or specify a custom port:
```cmd
start.bat 8080
```

### Manual Start:
```bash
npm start
```

## Access the Application

Once the server is running, open your browser and navigate to:
```
http://localhost:3000
```

## Default Port

The application runs on port **3000** by default. You can change this by:
- Passing a port number to the startup script
- Setting the PORT environment variable: `PORT=8080 npm start`

## Database

The application uses SQLite database stored in:
```
trader-ledger/database/trader_ledger.db
```

The database is automatically created on first run with the following tables:
- `users` - Business/user accounts
- `sales` - Sales transactions
- `purchases` - Purchase transactions

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new business
- `POST /api/auth/login` - Login to account

### Sales
- `GET /api/sales/:userId` - Get all sales for user
- `POST /api/sales` - Add new sale
- `PUT /api/sales/:id` - Update sale status
- `PUT /api/sales/customer/:userId/:customerName` - Mark customer as paid

### Purchases
- `GET /api/purchases/:userId` - Get all purchases for user
- `POST /api/purchases` - Add new purchase
- `PUT /api/purchases/supplier/:userId/:supplierName` - Mark supplier as paid

### Dashboard
- `GET /api/dashboard/:userId` - Get dashboard statistics

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Charts**: Chart.js
- **Icons**: Font Awesome
- **Security**: bcryptjs for password hashing

## Project Structure

```
trader-ledger/
├── database/
│   ├── schema.sql          # Database schema
│   └── trader_ledger.db    # SQLite database (auto-created)
├── server/
│   └── server.js           # Express API server
├── index.html              # Main application
├── main.css                # Styles
├── main.js                 # Frontend logic
├── package.json            # Dependencies
├── start.sh                # Linux/Mac startup script
├── start.bat               # Windows startup script
└── README.md               # This file
```

## Security Notes

- Passwords are hashed using bcrypt before storage
- Each business has isolated data access
- CORS is enabled for development (configure for production)

## Development

To run in development mode with auto-restart:
```bash
npm run dev
```

## License

MIT License

## Support

For issues or questions, please create an issue in the project repository.
