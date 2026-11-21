// ---------------------------------------------------------------------------
// Centralized Asset Registry
// ---------------------------------------------------------------------------
// Every image reference in the project should go through this registry so
// paths and alt-text stay consistent and easy to update.
// ---------------------------------------------------------------------------

export interface AssetEntry {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type AssetKey =
  | "logo"
  | "logoWhite"
  | "hero"
  | "fibcBags"
  | "ppWovenBags"
  | "flexiblePackaging"
  | "ppFabricRolls"
  | "boppBags"
  | "tarpaulins"
  | "hdpeLdpeProducts"
  | "geotextiles"
  | "manufacturing"
  | "company"
  | "industryAgriculture"
  | "industryCement"
  | "industryChemicals"
  | "industryFoodGrains"
  | "industryMining"
  | "industryConstruction"
  | "placeholder";

export const assets: Record<AssetKey, AssetEntry> = {
  logo: {
    src: "/images/logo/vihani-logo.png",
    alt: "Vihani Transoceanic Pvt. Ltd. logo",
    width: 922,
    height: 325,
  },
  logoWhite: {
    src: "/images/logo/vihani-logo-white.png",
    alt: "Vihani Transoceanic Pvt. Ltd. logo",
    width: 922,
    height: 325,
  },
  hero: {
    src: "/replacable%20images/hero.png",
    alt: "Industrial packaging products arranged in a bright warehouse",
    width: 1586,
    height: 992,
  },

  // ── Product Images ───────────────────────────────────────────────────────
  fibcBags: {
    src: "/replacable%20images/FIBC%20Bulk%20bags.png",
    alt: "Large white polypropylene FIBC bulk bags with lifting loops",
    width: 1254,
    height: 1254,
  },
  ppWovenBags: {
    src: "/replacable%20images/PP%20woven%20bags.png",
    alt: "Stacked polypropylene woven sacks with visible woven texture",
    width: 1086,
    height: 1448,
  },
  flexiblePackaging: {
    src: "/replacable%20images/Flexible%20packaging.png",
    alt: "Stand-up pouches and laminated flexible packaging formats",
    width: 1448,
    height: 1086,
  },
  ppFabricRolls: {
    src: "/replacable%20images/PP%20woven%20fabric%20rolls.png",
    alt: "Rolls of woven polypropylene fabric with visible grid texture",
    width: 1254,
    height: 1254,
  },
  boppBags: {
    src: "/replacable%20images/BOPP%20Bags.png",
    alt: "Glossy BOPP laminated woven packaging bags",
    width: 1254,
    height: 1254,
  },
  tarpaulins: {
    src: "/replacable%20images/DPE%20Tarpaulins%20.png",
    alt: "Folded HDPE tarpaulin sheets with reinforced edges and grommets",
    width: 1254,
    height: 1254,
  },
  hdpeLdpeProducts: {
    src: "/replacable%20images/HDPE%20%3A%20LDPE%20Products.png",
    alt: "Industrial polyethylene film rolls and flexible liner sheets",
    width: 1254,
    height: 1254,
  },
  geotextiles: {
    src: "/replacable%20images/Geotextiles.png",
    alt: "Industrial geotextile fabric rolls with woven textile texture",
    width: 1254,
    height: 1254,
  },

  // ── Misc ─────────────────────────────────────────────────────────────────
  manufacturing: {
    src: "/replacable%20images/Manufacturing%20facility.png",
    alt: "Illustrative polypropylene woven-fabric production machinery",
    width: 1254,
    height: 1254,
  },
  company: {
    src: "/replacable%20images/Company%3A%20About%20us.png",
    alt: "Assortment of woven packaging materials arranged on a neutral background",
    width: 1672,
    height: 941,
  },
  industryAgriculture: {
    src: "/replacable%20images/Agriculture%20industry.png",
    alt: "Woven sacks used for agricultural grain and fertilizer packaging",
    width: 1254,
    height: 1254,
  },
  industryCement: {
    src: "/replacable%20images/Cement.png",
    alt: "Industrial cement packaging sacks stacked in a warehouse setting",
    width: 1536,
    height: 1024,
  },
  industryChemicals: {
    src: "/replacable%20images/chemicals.png",
    alt: "Industrial bulk packaging for dry chemical materials",
    width: 1536,
    height: 1024,
  },
  industryFoodGrains: {
    src: "/replacable%20images/food%20grains.png",
    alt: "Woven bulk sacks used for rice, wheat, and dry grains",
    width: 1536,
    height: 1024,
  },
  industryMining: {
    src: "/replacable%20images/Mining%20.png",
    alt: "Industrial bulk bags for transporting dry mineral materials",
    width: 1448,
    height: 1086,
  },
  industryConstruction: {
    src: "/replacable%20images/Construction.png",
    alt: "Heavy-duty woven sacks and bulk packaging for construction materials",
    width: 1536,
    height: 1024,
  },
  placeholder: {
    src: "/images/placeholders/product-placeholder.svg",
    alt: "Image coming soon",
    width: 600,
    height: 400,
  },
};

/** Helper – look up an asset by key with a fallback to the generic placeholder. */
export function getAsset(key: string): AssetEntry {
  return (assets as Record<string, AssetEntry>)[key] ?? assets.placeholder;
}
