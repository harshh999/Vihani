// ---------------------------------------------------------------------------
// Product Data – Vihani Transoceanic Pvt. Ltd.
// ---------------------------------------------------------------------------

export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  applications: string[];
  specifications?: Record<string, string>;
  /** Key into the centralized asset registry (@/data/assets). */
  imageKey: string;
  featured: boolean;
  inquiryEnabled: boolean;
}

export const products: Product[] = [
  // 1 ── FIBC / Jumbo Bags ──────────────────────────────────────────────────
  {
    slug: "fibc-jumbo-bags",
    name: "FIBC / Jumbo Bags",
    category: "Bulk Packaging",
    shortDescription:
      "Flexible intermediate bulk containers for safe transport of granular and powdered materials.",
    description:
      "Our FIBC (Flexible Intermediate Bulk Container) bags are engineered for the efficient storage and transportation of bulk granular, powdered, and semi-flowable materials. Available in a range of capacities from 500 kg to 2,000 kg, they are manufactured using high-tenacity woven polypropylene fabric and can be supplied with a variety of filling and discharge options including top and bottom spouts, duffle tops, and full open tops. UN-certified variants are available for hazardous goods transport.",
    applications: [
      "Cement and building materials",
      "Chemical powders and granules",
      "Agricultural grains and seeds",
      "Mining and mineral ores",
      "Food-grade bulk ingredients",
    ],
    specifications: {
      "Capacity Range": "500 kg – 2,000 kg",
      "Bag Types": "U-panel, Circular, Baffle, Cross-corner",
      "Closure Options": "Spout top, Duffle top, Full open top",
      "Coating": "Laminated / Unlaminated",
    },
    imageKey: "fibcBags",
    featured: true,
    inquiryEnabled: true,
  },

  // 2 ── PP Woven Sacks ────────────────────────────────────────────────────
  {
    slug: "pp-woven-sacks",
    name: "PP Woven Sacks and Bags",
    category: "Standard Packaging",
    shortDescription:
      "Durable woven polypropylene sacks suitable for a wide range of industrial and agricultural applications.",
    description:
      "PP Woven Sacks are a versatile, cost-effective packaging solution manufactured from high-quality polypropylene tape yarn. These bags offer excellent tensile strength, moisture resistance, and breathability. They are available in plain, printed, laminated, and unlaminated configurations and can be customized in size, color, and closure style to meet specific packing requirements.",
    applications: [
      "Fertilizers and agrochemicals",
      "Cement and dry mortar",
      "Animal feed and pet food",
      "Sugar and food grains",
      "Polymer resins and pellets",
    ],
    specifications: {
      Material: "Woven polypropylene (PP)",
      "Surface Finish": "Laminated / Unlaminated",
      Printing: "Up to 8-color flexographic",
      "Closure Options": "Sewn, Heat-sealed, Open mouth",
    },
    imageKey: "ppWovenBags",
    featured: true,
    inquiryEnabled: true,
  },

  // 3 ── PP Pouches & Flexible Packaging ───────────────────────────────────
  {
    slug: "pp-pouches-flexible-packaging",
    name: "PP Pouches & Flexible Packaging",
    category: "Flexible Packaging",
    shortDescription:
      "Lightweight, customizable flexible packaging for retail and semi-bulk applications.",
    description:
      "Our PP pouches and flexible packaging solutions cater to applications where presentation, shelf appeal, and product protection are equally important. These lighter-weight packages are suitable for food, consumer goods, and industrial components. Options include stand-up pouches, gusseted bags, and wicketed packs with multi-color gravure or flexographic printing.",
    applications: [
      "Retail food products",
      "Consumer goods packaging",
      "Small-volume industrial parts",
      "Seed and spice pouches",
      "Promotional and sample packs",
    ],
    imageKey: "flexiblePackaging",
    featured: false,
    inquiryEnabled: true,
  },

  // 4 ── PP Fabric Rolls ───────────────────────────────────────────────────
  {
    slug: "pp-fabric-rolls",
    name: "PP Fabric Rolls",
    category: "Raw Materials",
    shortDescription:
      "Woven polypropylene fabric supplied in roll form for converters and downstream manufacturers.",
    description:
      "PP Fabric Rolls are flat or tubular woven polypropylene fabric supplied in continuous rolls. They serve as the base material for bag converters, fabricators, and manufacturers who cut and sew their own packaging products. Available in a range of widths, weave densities, and GSM weights, and can be supplied laminated or unlaminated.",
    applications: [
      "Bag conversion and fabrication",
      "Packaging manufacturers",
      "Protective wrapping material",
      "Industrial lining applications",
    ],
    specifications: {
      Form: "Flat / Tubular rolls",
      "Coating Options": "Laminated / Unlaminated",
    },
    imageKey: "ppFabricRolls",
    featured: false,
    inquiryEnabled: true,
  },

  // 5 ── BOPP Bags ─────────────────────────────────────────────────────────
  {
    slug: "bopp-bags",
    name: "BOPP Bags",
    category: "Premium Packaging",
    shortDescription:
      "Biaxially oriented polypropylene bags offering superior print quality and brand visibility.",
    description:
      "BOPP (Biaxially Oriented Polypropylene) bags combine the strength of a woven PP substrate with a high-clarity BOPP film overlay, delivering photographic-quality graphics and excellent shelf presence. They are widely used where brand visibility and product aesthetics are priorities, such as retail-facing cement, fertilizer, pet food, and specialty chemical packaging.",
    applications: [
      "Branded cement and building products",
      "Retail fertilizer bags",
      "Pet food and animal nutrition",
      "Specialty chemicals",
      "Rice and premium food grains",
    ],
    specifications: {
      "Outer Layer": "BOPP laminated film",
      "Inner Layer": "Woven PP substrate",
      Printing: "Rotogravure – photo-quality, up to 10 colors",
      "Closure Options": "Pinch bottom, Open mouth sewn",
    },
    imageKey: "boppBags",
    featured: true,
    inquiryEnabled: true,
  },

  // 6 ── Tarpaulins ────────────────────────────────────────────────────────
  {
    slug: "tarpaulins",
    name: "Tarpaulins",
    category: "Protective Covers",
    shortDescription:
      "Heavy-duty, UV-stabilized tarpaulins for outdoor protection and industrial covering.",
    description:
      "Our tarpaulins are manufactured from high-density woven polyethylene or polypropylene with reinforced edges and UV stabilization for extended outdoor life. They are used as protective covers for open-truck cargo, construction sites, agricultural storage, and industrial yards. Available in standard and custom sizes with options for reinforced grommets and heat-sealed seams.",
    applications: [
      "Truck and cargo covering",
      "Construction site protection",
      "Agricultural produce storage",
      "Industrial yard covers",
      "Temporary shelter and ground sheets",
    ],
    specifications: {
      Material: "HDPE / PP woven laminated",
      "UV Stabilization": "Yes – rated for extended outdoor exposure",
      "Edge Finish": "Reinforced hem with aluminium grommets",
    },
    imageKey: "tarpaulins",
    featured: true,
    inquiryEnabled: true,
  },

  // 7 ── HDPE / LDPE Products ──────────────────────────────────────────────
  {
    slug: "hdpe-ldpe-products",
    name: "HDPE / LDPE Products",
    category: "Polyethylene Products",
    shortDescription:
      "Polyethylene-based packaging products including liners, sheets, and bags for diverse applications.",
    description:
      "Our HDPE (High-Density Polyethylene) and LDPE (Low-Density Polyethylene) product range includes liner bags, shrink films, stretch wraps, and flat or gusseted poly bags. These products provide moisture barriers, chemical resistance, and flexibility, making them suitable for inner liners in FIBC and woven sacks as well as standalone packaging for industrial components.",
    applications: [
      "FIBC inner liners",
      "Industrial shrink wrapping",
      "Moisture-barrier packaging",
      "Pallet stretch wrapping",
      "General-purpose poly bags",
    ],
    imageKey: "hdpeLdpeProducts",
    featured: false,
    inquiryEnabled: true,
  },

  // 8 ── Geotextiles ───────────────────────────────────────────────────────
  {
    slug: "geotextiles",
    name: "Geotextiles",
    category: "Infrastructure Materials",
    shortDescription:
      "Woven and non-woven geotextile fabrics for soil stabilization, drainage, and erosion control.",
    description:
      "Geotextile fabrics from Vihani Transoceanic are designed for civil engineering and infrastructure applications including soil stabilization, erosion control, drainage, separation, and reinforcement. Available in both woven and non-woven constructions, these fabrics conform to applicable engineering standards and are supplied in roll form for ease of deployment on-site.",
    applications: [
      "Road and highway construction",
      "Railway embankment stabilization",
      "Erosion control on slopes and embankments",
      "Landfill and drainage systems",
      "Foundation reinforcement",
    ],
    imageKey: "geotextiles",
    featured: false,
    inquiryEnabled: true,
  },
];

/** Retrieve a single product by its URL slug. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Return only products marked as featured. */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
