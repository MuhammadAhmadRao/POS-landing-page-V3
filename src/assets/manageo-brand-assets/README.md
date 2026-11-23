# ManageO POS — Official Brand & Logo Asset Pack

Welcome! This package contains all official production-ready brand assets, vector logos, high-resolution transparent PNGs, and drop-in UI components for the **ManageO POS Project**.

---

## 1. Brand Mark Overview

The official ManageO logo comprises four harmonious elements:
1. **The Speed Cart Emblem:** Aerodynamic horizontal speed lines on the left leading into an upward-curving shopping cart basket and twin rolling wheels.
2. **The "Manage" Wordmark:** Bold geometric sans typography in obsidian navy (`#0F172A`) on light backgrounds and pure white (`#FFFFFF`) on dark surfaces.
3. **The Gradient "O" Ring:** Precision circular vector ring with a high-chroma linear gradient sweeping from Electric Royal Blue (`#0062FF`) to Sky Cyan (`#00D5FF`).
4. **The System [ POS ] Badge:** A periwinkle pill badge (`#EEF4FF` background with `#1D4ED8` bold monospace text) explicitly designating the software operating tier.

---

## 2. Color Palette Specifications

| Name | Hex Code | RGB | Role |
| :--- | :--- | :--- | :--- |
| **Electric Royal Blue** | `#0062FF` / `#0072F5` | `rgb(0, 114, 245)` | Speed cart stroke, gradient start |
| **Sky Cyan** | `#00D5FF` | `rgb(0, 213, 255)` | Gradient terminal end on 'O' |
| **Cyan Glow (Dark Mode)** | `#38BDF8` | `rgb(56, 189, 248)` | Speed cart on dark backgrounds |
| **Obsidian Navy (Text)** | `#0F172A` | `rgb(15, 23, 42)` | Primary "Manage" wordmark on light surfaces |
| **Pure White (Dark Text)** | `#FFFFFF` | `rgb(255, 255, 255)` | "Manage" wordmark on dark surfaces |
| **Pill Background (Light)**| `#EEF4FF` | `rgb(238, 244, 255)` | [ POS ] badge background |
| **Pill Text (Light)** | `#1D4ED8` | `rgb(29, 78, 216)` | [ POS ] badge typography |
| **Pill Background (Dark)** | `#1E293B` | `rgb(30, 41, 59)` | Dark [ POS ] badge background |
| **Pill Text (Dark)** | `#60A5FA` | `rgb(96, 165, 250)` | Dark [ POS ] badge typography |

---

## 3. Typography

- **Primary Font:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Weight: `800 ExtraBold`, letter-spacing: `-1.2px`)
- **System Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

To import via Google Fonts in HTML or CSS:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap" rel="stylesheet">
```

---

## 4. Directory & Asset Inventory

```
ManageO-Brand-Assets/
├── README.md                      <-- This documentation
├── svg/                           <-- Infinite scalability, razor sharp vectors
│   ├── manageo-logo-primary.svg   <-- Full logo with [ POS ] badge (Light version)
│   ├── manageo-logo-dark.svg      <-- Full logo with [ POS ] badge (Dark version)
│   ├── manageo-logo-nobadge.svg   <-- Full logo without [ POS ] badge (Light version)
│   ├── manageo-logo-nobadge-dark.svg <-- Full logo without [ POS ] badge (Dark version)
│   ├── manageo-symbol-primary.svg <-- Standalone Speed Cart icon (Blue)
│   ├── manageo-symbol-white.svg   <-- Standalone Speed Cart icon (White)
│   ├── favicon.svg                <-- Scalable browser tab icon
│   └── app-icon.svg               <-- 512x512 Squircle application icon
├── png/                           <-- Pre-rendered transparent PNGs
│   ├── 1x/                        <-- 370x64px standard display
│   ├── 2x/                        <-- 740x128px Retina / high-DPI
│   ├── 4x/                        <-- 1480x256px 4K / Splash screens / Print
│   └── favicons/                  <-- 16x16, 32x32, 48x48, 180x180, 192x192, 512x512
├── react/                         <-- Ready-to-use React / Next.js Component
│   ├── ManageOLogo.tsx            <-- Drop-in TSX component with props
│   └── index.ts
├── vue/                           <-- Ready-to-use Vue 3 / Nuxt Component
│   └── ManageOLogo.vue            <-- Drop-in SFC component with props
└── html-snippet/                  <-- Copy-paste HTML/CSS snippets
    └── logo-snippet.html
```

---

## 5. Quick Integration Guides

### React / Next.js Integration
Simply copy `react/ManageOLogo.tsx` into your POS project's `src/components/` folder:
```tsx
import { ManageOLogo } from './components/ManageOLogo';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* Light background logo with badge */}
      <ManageOLogo variant="primary" size="md" showBadge={true} />
    </header>
  );
}

export function DarkSidebar() {
  return (
    <aside className="w-64 bg-[#0F172A] p-4 text-white">
      {/* Dark background logo */}
      <ManageOLogo variant="dark" size="sm" showBadge={true} />
    </aside>
  );
}
```

### Vue 3 / Nuxt Integration
Copy `vue/ManageOLogo.vue` into your components directory:
```vue
<template>
  <ManageOLogo variant="primary" size="md" :showBadge="true" />
</template>

<script setup>
import ManageOLogo from './components/ManageOLogo.vue';
</script>
```

### Static HTML / Web App Integration
```html
<!-- In light headers: -->
<img src="/assets/svg/manageo-logo-primary.svg" alt="ManageO POS" height="36" />

<!-- In dark sidebars / footers: -->
<img src="/assets/svg/manageo-logo-dark.svg" alt="ManageO POS" height="36" />

<!-- Favicon setup in <head>: -->
<link rel="icon" type="image/svg+xml" href="/assets/svg/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/png/favicons/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/png/favicons/apple-touch-icon-180x180.png" />
```

---
*Created for the ManageO POS Engineering Team.*