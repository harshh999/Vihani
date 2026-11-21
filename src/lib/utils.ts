// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

import { products, type Product } from "@/data/products";

/**
 * Merge class names, filtering out falsy values.
 *
 * A lightweight alternative to `clsx` / `classnames` – keeps the bundle
 * small since we don't need complex object-syntax support.
 */
export function cn(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a phone number string for display.
 *
 * If the string already contains formatting (spaces, dashes, parens) it is
 * returned as-is.  Otherwise digits are grouped as +XX XXXX XXXX XX for
 * Indian numbers (13 digits incl. country code) or returned unchanged.
 */
export function formatPhoneNumber(phone: string): string {
  // If already formatted (contains non-digit separators), return as-is.
  if (/[^\d+]/.test(phone)) {
    return phone;
  }

  const digits = phone.replace(/\D/g, "");

  // Indian mobile: 91 + 10 digits → +91 XXXXX XXXXX
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }

  // With leading +
  if (phone.startsWith("+") && digits.length >= 10) {
    const cc = digits.slice(0, digits.length - 10);
    const rest = digits.slice(digits.length - 10);
    return `+${cc} ${rest.slice(0, 5)} ${rest.slice(5)}`;
  }

  return phone;
}

/**
 * Look up a product by its URL-friendly slug.
 *
 * Re-exported here as a convenience so consumers don't need to import
 * the products module directly.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
