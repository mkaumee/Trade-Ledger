#!/bin/bash

# Trader Ledger Startup Script

echo "=================================="
echo "  Trader Ledger - Starting Server"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Create database directory if it doesn't exist
if [ ! -d "database" ]; then
    echo "📁 Creating database directory..."
    mkdir -p database
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Set port (default 3000)
PORT=${1:-3000}

echo "🚀 Starting Trader Ledger on port $PORT..."
echo ""
echo "Access the application at:"
echo "   http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server
PORT=$PORT npm start
