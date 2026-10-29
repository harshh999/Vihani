# Vihani Transoceanic Pvt. Ltd. — B2B Industrial Packaging Website

A minimal Swiss-inspired, high-performance B2B industrial packaging web platform built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **GSAP**, and **Lucide React**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v20+` or `v25+`
- npm `v10+`

### Installation & Local Development

1. Navigate to the project directory:
   ```bash
   cd /Users/harsh/.gemini/antigravity/scratch/vihani-transoceanic
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Run TypeScript check:
   ```bash
   npx tsc --noEmit
   ```

4. Run code linting:
   ```bash
   npm run lint
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 📁 Public Image Asset Architecture

All website imagery is hosted locally inside `public/images/`. **No remote image dependencies are utilized.**

```
public/images/
├── brand/
│   └── logo.svg                 # Primary company vector mark
├── logo/
│   └── vihani-logo.svg          # Inverted/header logo asset
├── hero/
│   └── industrial-packaging-hero.svg # Primary homepage hero visual
├── products/                    # Categorized product photography
│   ├── fibc-bags/
│   ├── pp-woven-bags/
│   ├── flexible-packaging/
│   ├── pp-fabric-rolls/
│   ├── bopp-bags/
│   ├── tarpaulins/
│   ├── hdpe-ldpe-products/
│   ├── geotextiles/
│   └── other/
├── industries/                  # Sector-specific photography
│   ├── agriculture/
│   ├── cement/
│   ├── chemicals/
│   ├── food-grains/
│   ├── mining/
│   └── construction/
├── manufacturing/               # Quality control & plant imagery
├── company/                     # Corporate & facility imagery
└── placeholders/                # Neutral fallback SVGs
    ├── product-placeholder.svg
    ├── industry-placeholder.svg
    ├── manufacturing-placeholder.svg
    └── company-placeholder.svg       # Retained only as an unused fallback
```

---

## 🖼️ How to Replace Images Without Editing Components

To replace any photograph or graphic across the entire website without touching React components:

### Option 1: File Replacement (Zero Code Modification)
Replace the corresponding file inside `public/images/...` keeping the same filename and format (e.g., SVG, WebP, PNG). Next.js will automatically serve the updated asset on next reload.

### Option 2: Centralized Registry Update (`src/data/assets.ts`)
Open `src/data/assets.ts` and modify the targeted asset key mapping:

```typescript
export const assets: Record<AssetKey, AssetEntry> = {
  fibcBags: {
    src: "/images/products/fibc-bags/fibc-jumbo-bags.webp", // <-- Update path here
    alt: "FIBC Bulk Bags loaded with mineral concentrates",
    width: 600,
    height: 400,
  },
  // ...
};
```
Because all components and product cards retrieve image paths dynamically via `getAsset(product.imageKey)`, updating this file updates the image across all listings and detail views instantly.

---

## 📋 Product Data & Content Management

All products, technical parameters, applications, and categories are centrally managed in:
- `src/data/products.ts` — 8 industrial packaging product families with specifications, slug routing, and feature flags.
- `src/data/industries.ts` — 6 industry sectors linked to applicable product slugs.
- `src/data/company.ts` — Verified brand name, tagline, email, and placeholders flagged for client review.
- `src/data/navigation.ts` — Main navbar and dynamic multi-column footer links.

---

## 📝 Request a Quote / Commercial Inquiry Desk

The quotation form at `/contact` features:
- Client-side validation for required fields, company credentials, business email format, and international phone numbers.
- Dynamic category pre-selection when navigating from product detail pages (`/contact?product=[slug]`).
- A simulated submission state with visual feedback and interactive reset.

> **Demonstration Notice:** The form operates in simulated mode. It validates and confirms user input locally. Connecting live email notifications, CRM ingestion (e.g. HubSpot/Salesforce), or backend database storage requires wiring an API route (e.g., `src/app/api/quote/route.ts`) or an authorized transactional mailer before production launch.

---

## 🔍 Verification & Quality Assurance Summary

| Check | Tool / Command | Result |
| :--- | :--- | :--- |
| **TypeScript Validation** | `npx tsc --noEmit` | **0 errors** (Pass) |
| **ESLint Validation** | `npm run lint` | **0 errors, 0 warnings** (Pass) |
| **Production Compilation** | `npm run build` | **Successfully compiled 19 routes** (Pass) |
| **Asset Centralization** | `src/data/assets.ts` | **100% local public SVGs** (Pass) |
