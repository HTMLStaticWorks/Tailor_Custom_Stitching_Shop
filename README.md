# Atelier Bespoke — Tailor & Custom Stitching Shop HTML Template

**Atelier Bespoke** is a premium, commercial-grade HTML5/CSS3 template engineered for bespoke tailors, custom stitching studios, fashion ateliers, alteration experts, and luxury suiting brands. Inspired by Savile Row and European haute couture houses, it features editorial typography, dark mode integration, interactive fitting booking UIs, and before/after alteration showcases.

---

## 🌟 Key Features

- **14 Production-Ready HTML Pages**:
  - `index.html` — Homepage 1 (Editorial Bespoke Experience)
  - `home-2.html` — Homepage 2 (Atelier & Fashion Studio Variant)
  - `services.html` — Categorized Tailoring & Stitching Services Grid
  - `service-details.html` — In-Depth Bespoke Suiting Process & Specifications
  - `alterations.html` — Garment Repairs, Reshaping & Before/After Showcase
  - `fabric-collection.html` — Luxury Textile Mill Showcase & Swatch Selector
  - `appointment.html` — Interactive Measurement & Fitting Booking UI
  - `about.html` — Studio Heritage, Craftsmanship & Master Tailor Bios
  - `blog.html` — Sartorial Style Journal & Garment Maintenance Articles
  - `blog-details.html` — Single Journal Article Page with Author Profile
  - `contact.html` — Studio Location, Opening Hours, Map Container & WhatsApp UI
  - `login.html` — Client Portal Login UI
  - `signup.html` — Patron Account Registration UI
  - `404.html` — Custom Miscut Pattern Error Page

- **Design System & Tech Stack**:
  - **HTML5 & Custom CSS3 Variables**: Easily customize brand colors across light and dark modes.
  - **Bootstrap 5 Grid System**: Clean, responsive layout grid structure.
  - **Vanilla JavaScript**: Lightweight interactions (no jQuery dependency).
  - **Persistent Dark/Light Mode**: Automatic theme detection with manual toggle stored in `localStorage`.
  - **GSAP Animations**: Refined scroll-reveal animations (`fade-up`, `gallery-reveal`, animated stat counters).
  - **Interactive Features**:
    - Drag-to-compare Before & After alteration slider
    - Stitched Garment Turnaround & Cost Calculator
    - Category-filtered luxury fabric swatch gallery
    - Interactive appointment booking form

---

## 📁 Directory Structure

```text
Tailor_Custom_Stitching_Shop/
│
├── index.html
├── home-2.html
├── services.html
├── service-details.html
├── alterations.html
├── fabric-collection.html
├── appointment.html
├── about.html
├── blog.html
├── blog-details.html
├── contact.html
├── login.html
├── signup.html
├── 404.html
├── README.md
│
└── assets/
    ├── css/
    │   ├── bootstrap.min.css
    │   ├── style.css
    │   ├── dark.css
    │   └── animations.css
    ├── js/
    │   ├── main.js
    │   ├── theme-toggle.js
    │   └── animations.js
    └── images/
        ├── hero/
        ├── tailoring/
        ├── fabrics/
        ├── gallery/
        ├── team/
        ├── testimonials/
        ├── blog/
        └── banners/
```

---

## 🎨 Customizing Color Tokens

You can customize the color palette by editing the CSS custom properties in `assets/css/style.css` (Light Mode) and `assets/css/dark.css` (Dark Mode):

```css
:root {
  --primary: #1F2937;        /* Tailor Navy */
  --secondary: #6B7280;      /* Slate Gray */
  --accent: #B68D40;         /* Tailor Gold */
  --highlight: #8B5E3C;      /* Leather Brown */
  --bg-main: #F9FAFB;
  --surface: #FFFFFF;
}
```

---

## 💻 Browser Compatibility & Responsiveness

Fully tested and optimized for:
- Chrome, Edge, Firefox, Safari, and Mobile Browsers.
- Viewports: 320px, 360px, 375px, 390px, 414px, 425px, 768px, 820px, 1024px, 1280px, 1440px, 1920px.

---

## 📄 License & Credits

- **Fonts**: Google Fonts (`Playfair Display`, `Inter`, `Manrope`)
- **Icons**: Bootstrap Icons
- **Imagery**: Unsplash Premium Tailoring & Fashion Photography
