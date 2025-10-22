# Fluxion — Netflix‑style Student Project

This project satisfies the listed requirements:

- Minimum 5 different pages: `home.html`, `movies.html`, `series.html`, `playlist.html`, `contact.html` — all load within the master frame on `index.html` and are excluded from the navigation and other parts.
- CSS properties using all three methods:
  - External file: `assets/css/styles.css` (theme, layout, components)
  - Internal style tag: in `index.html` (e.g., `.pill`) and `contact.html` section style
  - Inline style attributes: small notes and spacing across pages
  - Property coverage examples:
    - Background: gradients, colors
    - Text/Font: color, letter-spacing, font-weight, font-size
    - Dimension: padding, border-radius, width/height
    - Positioning: grid, flex, absolute, sticky
- Forms and validation on `contact.html` containing: text input, password input, textarea, radio, checkbox, select, and submit. Client-side validation in `assets/js/validate.js`.
- Lists and table:
  - Table: on `movies.html`
  - Ordered lists: two (on `home.html` and `playlist.html`)
  - Unordered lists: two (on `home.html` and `movies.html`/`playlist.html`)

## How to run
Open `index.html` in a browser. Use the left navigation; pages will load inside the main frame.

## Code overview

### index.html
- Header with brand and a small `.pill` badge styled via an internal `<style>` block.
- Sidebar navigation uses links targeted to the `iframe` named `content`. This is the required master frame.
- The main content contains the `<iframe>` with `src="home.html"` so the site has a default landing page.

### assets/css/styles.css
- Implements a dark, Netflix‑inspired theme using CSS variables.
- Demonstrates background (gradients), text/font (font-weight, color, letter-spacing), dimension (padding, border-radius, aspect-ratio), and positioning (grid, flex, sticky).
- Provides reusable classes for grids, cards, posters, forms, buttons, tables, and utilities.

### home.html
- Hero section introducing the site with CTA buttons linking to `movies.html` and `series.html` (targeted to the frame).
- Cards grid for trending titles and two ordered lists explaining benefits.

### movies.html
- Data table listing movies with hover styles.
- Two unordered lists for notes and quick links interconnecting pages.

### series.html
- Grid of series cards with badges and a link to playlist.

### playlist.html
- Contains an ordered list (watch plan) and an unordered list (tasks). Interlinks to `contact.html`.

### contact.html + assets/js/validate.js
- Full form: text, password, textarea, radio, checkbox, select, submit. Inline section styling demonstrates the second CSS method.
- Validation script checks required fields, email format, min password length, region select, and radio choice; displays error messages next to inputs.

---
Tip: If you move the project, keep relative paths intact or update them.
