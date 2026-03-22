// API Base URL - automatically detects environment
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : `${window.location.origin}/api`;

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
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            // Redirect to main app
            window.location.href = 'app.html';
        } else {
            alert(data.error || 'Invalid email or password. Please try again.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Failed to connect to server. Please make sure the server is running on port 3000.');
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
        alert('Failed to connect to server. Please make sure the server is running on port 3000.');
    }
}

/**
 * Initialize authentication page
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check if already logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        // Redirect to app
        window.location.href = 'app.html';
        return;
    }
    
    // Set up form event listeners
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegistration);
    
    // Set up navigation between login and register
    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        showRegistration();
    });
    
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });
    
    // Show login by default
    showLogin();
});
