# Fluxion — Modern Movie Streaming Platform

A Netflix-style web streaming platform built with traditional HTML frameset architecture and modern design principles.

## 🎯 Project Overview

Fluxion is a complete movie and series streaming web application featuring a modern dark theme with vibrant green accents. The platform uses traditional frameset architecture with seamless navigation and includes a comprehensive sign-up system with HTML5 validation.

## 📋 Project Requirements

✅ **Minimum 5 Different Pages**
- `home.html` - Landing page with hero section and trending content
- `movies.html` - Movie listings with data table
- `series.html` - TV series grid layout
- `playlist.html` - User's watchlist and playlists
- `signup.html` - Registration page with complete form validation

✅ **CSS Implementation (All Three Methods)**
- **External CSS**: `assets/css/styles.css` (main theme & components)
- **Internal CSS**: Style tags in `header.html`, `nav.html`, `footer.html`
- **Inline CSS**: Specific styling for signup page, watch pages, and responsive adjustments

✅ **Form with All Required Elements** (in `signup.html`)
- Text Input (Username with pattern validation)
- Password Input (with complexity requirements)
- Textarea (Bio field with character limit)
- Radio Buttons (Subscription plan selection)
- Checkboxes (Interest selection)
- Select/Dropdown (Country selection)
- Submit Button (with HTML5 validation)

✅ **Lists and Tables**
- **Table**: Movie data table in `movies.html`
- **Ordered Lists**: Multiple instances across pages
- **Unordered Lists**: Navigation menus and content lists

## 🏗️ Architecture

### Master Frameset (`index.html`)
The application uses traditional `<frameset>` architecture with four main sections:
- **Header Frame** (80px): `header.html` with branding and Sign Up button
- **Navigation Frame** (250px): `nav.html` with sidebar menu
- **Content Frame**: Main content area loading pages dynamically
- **Footer Frame** (60px): `footer.html` with footer information

### Page Structure

```
index.html (master frameset)
├── header.html (top navigation bar)
│   └── Sign Up button opens signup.html in new tab
├── nav.html (sidebar navigation)
│   ├── Home
│   ├── Movies
│   ├── Series
│   └── My Playlist
├── content area (dynamic loading)
│   ├── home.html
│   ├── movies.html
│   ├── series.html
│   ├── playlist.html
│   └── watch-*.html (individual title pages)
└── footer.html (footer section)
```

### Sign Up Page (`signup.html`)
A standalone page (opens in new tab) featuring:
- **Two-column responsive form layout**
- **Complete HTML5 validation** (no JavaScript required)
- **Visual feedback** with green/red borders on field validation
- **Form elements**:
  - Username (min 3, max 20 chars, alphanumeric + underscore)
  - Email (standard email validation)
  - Password (min 8 chars, uppercase, lowercase, number)
  - Confirm Password (pattern matching)
  - Bio (optional, max 200 chars)
  - Subscription Plan (radio buttons: Basic, Premium, Ultimate)
  - Interests (checkboxes: Movies, Series, Documentaries)
  - Country (dropdown selection)
  - Terms & Conditions (required checkbox)
- **Redirect**: Form submits to `index.html` on successful validation

## 🎨 Design System

### Color Scheme
- **Primary Background**: Deep black (#0a0a0a, #1a1a1a)
- **Accent Color**: Vibrant green (#00ff88)
- **Text**: White (#ffffff) and gray (#b0b0b0)
- **Card Background**: Dark gradient (#1a1a1a to #2d2d2d)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing** across all breakpoints

### Components
- **Hero Banners**: Gradient backgrounds with overlays
- **Movie Cards**: Hover effects with transform and box-shadow
- **Buttons**: Gradient backgrounds with smooth transitions
- **Forms**: Rounded inputs with focus states
- **Navigation**: Sticky positioning with smooth transitions

## 🚀 How to Run

### Method 1: Direct Browser (Simple)
1. Open `index.html` in any modern web browser
2. The frameset will load with all components
3. Use the sidebar navigation to navigate between pages
4. Click "Sign Up" in the header to open the registration form

### Method 2: Docker (Recommended for Production in MacOS/Linux User Only)
```bash
# Start the application
./start.sh

# Stop the application
./stop.sh
```

The Docker setup includes:
- Nginx web server
- Automatic configuration
- Port mapping for easy access

## 📁 File Structure

```
fluxion/
├── index.html              # Master frameset
├── header.html             # Top navigation
├── nav.html                # Sidebar navigation
├── footer.html             # Footer section
├── home.html               # Landing page
├── movies.html             # Movie listings
├── series.html             # Series listings
├── playlist.html           # User playlist
├── signup.html             # Registration page
├── watch-*.html            # Individual title pages (10 pages)
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   └── img/                # Image assets
├── nginx/
│   └── default.conf.template
├── Dockerfile
├── docker-compose.yml
├── start.sh
└── stop.sh
```

## 🔧 Technical Details

### CSS Properties Used
- **Background**: Gradients, colors, patterns
- **Text/Font**: color, font-size, font-weight, letter-spacing, text-transform
- **Dimension**: width, height, padding, margin, border-radius
- **Positioning**: grid, flex, absolute, sticky, fixed
- **Effects**: transition, transform, box-shadow, opacity

### Form Validation (signup.html)
Pure HTML5 validation without JavaScript:
- `required` attribute for mandatory fields
- `pattern` attribute for complex validation (username, password)
- `minlength` and `maxlength` for character limits
- `type="email"` for email validation
- Visual feedback through CSS `:valid` and `:invalid` pseudo-classes

## 🌟 Features

- **Frameset Architecture**: Traditional HTML frameset with seamless navigation
- **Modern UI**: Dark theme with neon green accents
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Form Validation**: HTML5-native validation without JavaScript
- **Dynamic Content**: 10+ individual movie/series pages
- **Professional Design**: Netflix-inspired interface
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: Semantic HTML and proper form labels

