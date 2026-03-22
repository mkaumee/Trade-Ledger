@echo off
REM Trader Ledger Startup Script for Windows

echo ==================================
echo   Trader Ledger - Starting Server
echo ==================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js version:
node --version
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo X npm is not installed!
    pause
    exit /b 1
)

echo [OK] npm version:
npm --version
echo.

REM Create database directory if it doesn't exist
if not exist "database" (
    echo [*] Creating database directory...
    mkdir database
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo [*] Installing dependencies...
    call npm install
    echo.
)

REM Set port (default 3000)
if "%1"=="" (
    set PORT=3000
) else (
    set PORT=%1
)

echo [*] Starting Trader Ledger on port %PORT%...
echo.
echo Access the application at:
echo    http://localhost:%PORT%
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the server
set PORT=%PORT%
npm start
