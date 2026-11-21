// ---------------------------------------------------------------------------
// Navigation Data
// ---------------------------------------------------------------------------

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationGroup {
  heading: string;
  items: NavigationItem[];
}

// ── Main Navigation ────────────────────────────────────────────────────────

export const mainNav: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Manufacturing & Quality", href: "/manufacturing-quality" },
  { label: "Contact", href: "/contact" },
];

// ── Footer Navigation ─────────────────────────────────────────────────────

export const footerProductLinks: NavigationItem[] = [
  { label: "FIBC / Jumbo Bags", href: "/products/fibc-jumbo-bags" },
  { label: "PP Woven Sacks", href: "/products/pp-woven-sacks" },
  { label: "Flexible Packaging", href: "/products/pp-pouches-flexible-packaging" },
  { label: "PP Fabric Rolls", href: "/products/pp-fabric-rolls" },
  { label: "BOPP Bags", href: "/products/bopp-bags" },
  { label: "Tarpaulins", href: "/products/tarpaulins" },
  { label: "HDPE / LDPE Products", href: "/products/hdpe-ldpe-products" },
  { label: "Geotextiles", href: "/products/geotextiles" },
];

export const footerIndustryLinks: NavigationItem[] = [
  { label: "Agriculture", href: "/industries#agriculture" },
  { label: "Cement", href: "/industries#cement" },
  { label: "Chemicals", href: "/industries#chemicals" },
  { label: "Food Grains", href: "/industries#food-grains" },
  { label: "Mining", href: "/industries#mining" },
  { label: "Construction", href: "/industries#construction" },
];

export const footerNav: NavigationGroup[] = [
  { heading: "Products", items: footerProductLinks },
  { heading: "Industries", items: footerIndustryLinks },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Manufacturing & Quality", href: "/manufacturing-quality" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
