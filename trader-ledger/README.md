# Trader Ledger - Profit & Debt Tracking System

A modern web application for businesses to track sales, purchases, customer debts, and supplier debts with real-time analytics and visualizations.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/yourusername/trader-ledger)

## Features

- 🔐 **User Authentication** - Secure login and registration for businesses
- 💰 **Sales Management** - Track sales with customer information and payment status
- 🛒 **Purchase Management** - Record purchases from suppliers
- 📊 **Dashboard** - Visual analytics with charts and key metrics
- 👥 **Customer Debts** - Track unpaid customer balances with email notifications
- 🏢 **Supplier Debts** - Monitor outstanding supplier payments
- 📧 **Email Notifications** - Send payment reminders to customers
- 💾 **SQLite Database** - Persistent data storage per business
- 🌍 **Railway Deployable** - Easy deployment to Railway platform

## Quick Deploy to Railway

Click the button above or follow these steps:

1. Fork this repository
2. Go to [Railway](https://railway.app/)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your forked repository
5. Railway will automatically deploy your app!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trader-ledger.git
cd trader-ledger
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser:
```
http://localhost:3000
```

## Running the Application

### On Windows:
```cmd
.\start.bat
```

### On Linux/Mac:
```bash
chmod +x start.sh
./start.sh
```

### Manual Start:
```bash
npm start
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
DATABASE_PATH=./database/trader_ledger.db
CORS_ORIGIN=*
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Charts**: Chart.js
- **Icons**: Font Awesome
- **Security**: bcryptjs for password hashing
- **Deployment**: Railway-ready

## Project Structure

```
trader-ledger/
├── database/
│   ├── schema.sql          # Database schema
│   └── trader_ledger.db    # SQLite database (auto-created)
├── server/
│   └── server.js           # Express API server
├── index.html              # Entry point (redirects to login)
├── login.html              # Login/Registration page
├── app.html                # Main application
├── auth.js                 # Authentication logic
├── auth.css                # Auth page styles
├── main.css                # Main app styles
├── main.js                 # Main app logic
├── package.json            # Dependencies
├── railway.json            # Railway configuration
├── nixpacks.toml           # Nixpacks build config
├── Procfile                # Process file
└── README.md               # This file
```

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

## Currency

The application uses Nigerian Naira (₦) as the default currency.

## Security

- Passwords are hashed using bcrypt before storage
- Each business has isolated data access
- CORS is configured for production deployment
- SQL injection protection through parameterized queries

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License

## Support

For issues or questions:
- Create an issue in the GitHub repository
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Visit [Railway Documentation](https://docs.railway.app/) for platform-specific issues

## Acknowledgments

- Built with modern web technologies
- Designed for small to medium businesses
- Optimized for Railway deployment

