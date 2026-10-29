// ---------------------------------------------------------------------------
// Industry Data – Vihani Transoceanic Pvt. Ltd.
// ---------------------------------------------------------------------------

export interface Industry {
  slug: string;
  name: string;
  description: string;
  /** Product slugs from @/data/products that are commonly used in this industry. */
  relatedProducts: string[];
  /** Lucide React icon name (PascalCase). */
  iconName: string;
  /** Key into the centralized asset registry (@/data/assets). */
  imageKey: string;
}

export const industries: Industry[] = [
  {
    slug: "agriculture",
    name: "Agriculture",
    description:
      "Durable packaging solutions for seeds, fertilizers, animal feed, and harvested produce. Our woven sacks and FIBC bags are designed to protect agricultural inputs and outputs during storage and transport across varying climate conditions.",
    relatedProducts: [
      "fibc-jumbo-bags",
      "pp-woven-sacks",
      "bopp-bags",
      "hdpe-ldpe-products",
      "tarpaulins",
    ],
    iconName: "Wheat",
    imageKey: "industryAgriculture",
  },
  {
    slug: "cement",
    name: "Cement",
    description:
      "High-strength, moisture-resistant bags engineered for the cement and building materials industry. Available in block-bottom, pinch-bottom, and open-mouth configurations with premium BOPP print options for brand differentiation.",
    relatedProducts: [
      "pp-woven-sacks",
      "bopp-bags",
      "fibc-jumbo-bags",
    ],
    iconName: "Building2",
    imageKey: "industryCement",
  },
  {
    slug: "chemicals",
    name: "Chemicals",
    description:
      "Safe, reliable packaging for chemical powders, granules, and hazardous materials. Our FIBC bags include UN-certified options, and PE liners provide additional moisture and contamination barriers.",
    relatedProducts: [
      "fibc-jumbo-bags",
      "pp-woven-sacks",
      "hdpe-ldpe-products",
      "pp-pouches-flexible-packaging",
    ],
    iconName: "FlaskConical",
    imageKey: "industryChemicals",
  },
  {
    slug: "food-grains",
    name: "Food Grains",
    description:
      "Food-safe packaging for rice, wheat, pulses, sugar, and other consumable grains. Our bags meet food-contact standards and are available with breathable or laminated constructions to suit different storage needs.",
    relatedProducts: [
      "pp-woven-sacks",
      "bopp-bags",
      "fibc-jumbo-bags",
      "pp-pouches-flexible-packaging",
    ],
    iconName: "Grain",
    imageKey: "industryFoodGrains",
  },
  {
    slug: "mining",
    name: "Mining",
    description:
      "Heavy-duty bulk containers and sacks for mineral ores, aggregates, and industrial powders. Engineered for high fill weights and rough handling conditions typical of mining and quarry operations.",
    relatedProducts: [
      "fibc-jumbo-bags",
      "pp-woven-sacks",
      "tarpaulins",
      "geotextiles",
    ],
    iconName: "Pickaxe",
    imageKey: "industryMining",
  },
  {
    slug: "construction",
    name: "Construction",
    description:
      "Packaging and protective materials for the construction sector including cement bags, tarpaulins for site protection, and geotextiles for soil stabilization, drainage, and erosion control.",
    relatedProducts: [
      "tarpaulins",
      "geotextiles",
      "fibc-jumbo-bags",
      "pp-woven-sacks",
      "pp-fabric-rolls",
    ],
    iconName: "HardHat",
    imageKey: "industryConstruction",
  },
];

/** Retrieve a single industry by its URL slug. */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
