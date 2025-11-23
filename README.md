# Fluxion — Modern Movie Streaming Platform

A Netflix-style web streaming platform built with traditional HTML frameset architecture, modern design principles, and complete authentication system.

## 👥 Project Credits

This project is developed by **Group 6** for the Web Design course.

### Group Members

1. **Bagas Pratama Junianika**
2. **Naufal Fayyaz Ilham**
3. **Radella Hafiza Gehan**
4. **Saw Innacent Sine**
5. **Mohammad Naufal Pranantya**

## 🎯 Project Overview

Fluxion is a complete movie and series streaming web application featuring a modern dark theme with vibrant green accents. The platform uses traditional frameset architecture with seamless navigation and includes a comprehensive authentication system with localStorage integration, functional purchase flow, and jQuery-powered interactive forms.

## 📋 Project Requirements

✅ **Minimum 5 Different Pages**
- `home.html` - Landing page with hero section and trending content
- `movies.html` - Movie listings with data table
- `series.html` - TV series grid layout
- `playlist.html` - User's watchlist and playlists
- `register.html` - Registration page with 3-column layout
- `login.html` - User login page
- `forgot-password.html` - Password recovery page
- `purchase.html` - Subscription purchase with payment processing
- `contact.html` - Contact support form

✅ **CSS Implementation (All Three Methods)**
- **External CSS**: `assets/css/styles.css` (main theme & components)
- **Internal CSS**: Style tags in `header.html`, `nav.html`, `footer.html`, auth pages
- **Inline CSS**: Specific styling for forms, modals, and responsive adjustments

✅ **Interactive Forms with jQuery**
- **5 Event Types Implemented**:
  1. **Click Events**: Button submissions, plan selection, password visibility toggle
  2. **Change Events**: Dropdown validation, radio button selection, file uploads
  3. **Mouse Move Events**: Interactive background effects, password strength indicators
  4. **Keypress/Keyup Events**: Real-time validation, character counters, card formatting
  5. **Focus Events**: Field hints, glow effects, validation triggers

✅ **Form Validation & Features**
- Real-time email and username validation
- Password strength indicator with visual feedback
- Credit card number formatting (#### #### #### ####)
- Expiry date auto-formatting (MM/YY)
- Character counters for textareas
- Promo code verification
- Required field validation
- Pattern matching for specific inputs

✅ **Lists and Tables**
- **Table**: Movie data table in `movies.html`
- **Ordered Lists**: Multiple instances across pages
- **Unordered Lists**: Navigation menus and content lists

## 🆕 New Features Added

### 🔐 Authentication System
- **localStorage-based authentication** - User data persisted across sessions
- **Register page** (`register.html`) - 3-column modern layout with clean form design
- **Login page** (`login.html`) - Centered standalone page with validation
- **Forgot password** (`forgot-password.html`) - Password recovery interface
- **Dynamic header** - Shows user info and logout button when logged in
- **Session management** - Auto-login after registration, logout functionality
- **Auth script** (`assets/js/auth.js`) - Core authentication logic

### 💳 Purchase System
- **Full payment form** with card validation
- **Plan selection** - Basic ($9.99), Premium ($14.99), Ultimate ($19.99)
- **Billing cycle** - Monthly or Annual (15% discount)
- **Auto price calculation** - Real-time subtotal, tax, and total
- **Payment validation** - Card number, CVV, expiry date verification
- **Address form** - Complete billing address fields
- **Purchase persistence** - Save to localStorage
- **Success flow** - Confirmation and redirect

### 📝 Contact Form
- **Two-column responsive layout**
- **File upload** support for attachments
- **Message textarea** with character counter
- **Category dropdown** for inquiry types
- **Real-time validation** with jQuery
- **Success notification** on submission

### 🎨 Enhanced UI Components
- **User profile display** in header (avatar with initial, username)
- **Logout button** prominently displayed next to user info
- **Standalone auth pages** - Open in new tabs for better UX
- **Removed auth links from nav** - Only accessible via header for cleaner navigation
- **Scroll-optimized layouts** - All pages properly scrollable
- **Modern card designs** - Gradient backgrounds, borders, shadows

## 🏗️ Architecture

### Master Frameset (`index.html`)
The application uses traditional `<frameset>` architecture with four main sections:
- **Header Frame** (80px): `header.html` with branding and dynamic user/auth buttons
- **Navigation Frame** (250px): `nav.html` with sidebar menu
- **Content Frame**: Main content area loading pages dynamically
- **Footer Frame** (60px): `footer.html` with footer information

### Authentication Flow

```
User Registration
├── register.html (standalone page)
├── Validate inputs (jQuery)
├── Save to localStorage (fluxion_users)
├── Auto-login (create session)
├── Save session (fluxion_user)
└── Redirect to index.html

User Login
├── login.html (standalone page)
├── Verify credentials from localStorage
├── Create session (fluxion_user)  
└── Redirect to index.html

Logged In State
├── Header shows: [Avatar] Username [Logout]
└── Logout clears session and refreshes UI
```

### File Structure

```
fluxion/
├── index.html (master frameset)
├── header.html (dynamic auth state)
├── nav.html (sidebar navigation)
├── footer.html
├── Authentication Pages (Standalone)
│   ├── register.html (3-column form layout)
│   ├── login.html (centered login form)
│   └── forgot-password.html (password recovery)
├── Content Pages (Load in frame)
│   ├── home.html
│   ├── movies.html
│   ├── series.html
│   ├── playlist.html
│   ├── purchase.html (payment processing)
│   ├── contact.html (support form)
│   └── watch-*.html (individual pages)
└── assets/
    ├── css/
    │   └── styles.css (main stylesheet)
    ├── js/
    │   ├── auth.js (authentication logic)
    │   └── form-validation.js (jQuery validation)
    └── img/ (movie/series images)
```

## 🎨 Design System

### Color Scheme
- **Primary Background**: Deep black (#0a0a0a, #1a1a1a)
- **Accent Color**: Vibrant green (#00ff88)
- **Text**: White (#ffffff) and gray (#b0b0b0)
- **Card Background**: Dark gradient (#1a1a1a to #2d2d2d)
- **Error**: Red (#ff4444)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing** across all breakpoints

### Components
- **Hero Banners**: Gradient backgrounds with overlays
- **Movie Cards**: Hover effects with transform and box-shadow
- **Buttons**: Gradient backgrounds with smooth transitions
- **Forms**: Rounded inputs with focus states and validation feedback
- **Navigation**: Sticky positioning with smooth transitions
- **Modals**: Centered with backdrop blur

## 🚀 How to Run

### Method 1: Direct Browser (Simple)
1. Open `index.html` in any modern web browser
2. The frameset will load with all components
3. Use the sidebar navigation to navigate between pages
4. Click "Sign Up" in header to register (opens in new tab)
5. After registration, you'll be logged in automatically
6. Header will show your name and logout button

### Testing Authentication
1. **Register**: Click "Sign Up" → Fill form → Submit → Auto-login → Redirect
2. **Login**: Click "Logout" → Click "Login" → Enter credentials → Submit → Logged in
3. **Purchase**: Navigate to Subscribe → Fill payment form → Complete purchase
4. **Contact**: Navigate to Contact Us → Fill form → Submit inquiry

## 🌟 Features

### Core Features
- **Frameset Architecture**: Traditional HTML frameset with seamless navigation
- **Modern UI**: Dark theme with neon green accents
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dynamic Content**: 10+ individual movie/series pages
- **Professional Design**: Netflix-inspired interface
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: Semantic HTML and proper form labels

### Authentication & Forms
- **localStorage Authentication**: Complete user management system
- **Session Persistence**: Stay logged in across page refreshes
- **jQuery Validation**: Real-time form validation with 5 event types
- **Interactive Forms**: Password strength, card formatting, character counters
- **Error Handling**: Clear error messages and visual feedback
- **Success Notifications**: Modals and alerts for user actions

### Payment System
- **Subscription Plans**: 3 tiers with monthly/annual billing
- **Card Validation**: Format checking and type detection
- **Price Calculation**: Auto-update with discounts and tax
- **Form Persistence**: Save purchase data to localStorage
- **Payment Flow**: Complete checkout experience

## 💾 Data Storage

All user data is stored in browser localStorage:

- **`fluxion_users`**: Array of all registered users
  ```json
  [{
    "id": 1234567890,
    "fullName": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "password": "********",
    "dob": "2000-01-01",
    "createdAt": "2025-11-23T..."
  }]
  ```

- **`fluxion_user`**: Current logged-in user session
  ```json
  {
    "id": 1234567890,
    "fullName": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "dob": "2000-01-01",
    "createdAt": "2025-11-23T..."
  }
  ```

- **`fluxion_purchase`**: Latest subscription purchase
  ```json
  {
    "plan": "premium",
    "billing": "annual",
    "total": "$127.50",
    "date": "2025-11-23T..."
  }
  ```

## 🔧 Technologies Used

- **HTML5**: Semantic markup, frameset architecture
- **CSS3**: External, internal, inline styling with modern properties
- **JavaScript**: ES6+ syntax for authentication and validation
- **jQuery**: Event handling, DOM manipulation, AJAX-style interactions
- **localStorage**: Client-side data persistence
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins typography

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ⚠️ Note: Framesets are legacy HTML, may not work on very old browsers

## 🔒 Security Notes

> **Note**: This is a demo project for educational purposes. In a production environment:
> - Passwords should be hashed (e.g., bcrypt, argon2)
> - Use backend authentication with JWT or sessions
> - Implement HTTPS for secure data transmission
> - Add CSRF protection
> - Validate all inputs server-side
> - Use secure payment gateways (Stripe, PayPal)

## 📝 License

This is an educational project for Web Design course. All movie/series images are used for demonstration purposes only.

---

**Developed with ❤️ by Group 6**
