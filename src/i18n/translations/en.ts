export interface ProductItemTranslation {
  category: string;
  shortDescription: string;
  description: string;
  applications: string[];
  specifications?: Record<string, string>;
}

export const en = {
  // Navigation
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    industries: "Industries",
    manufacturingQuality: "Manufacturing & Quality",
    contact: "Contact",
    requestQuote: "Request a Quote",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    selectLanguage: "Select language",
  },

  // Common buttons and badges
  common: {
    requestQuote: "Request a Quote",
    viewProductRange: "View product range",
    browseProducts: "Browse products",
    learnMore: "Learn More",
    allPackagingSolutions: "All Packaging Solutions",
    backToAllProducts: "Back to All Products",
    contactUs: "Contact Us",
    submitAnotherRequest: "Submit Another Request",
    submitQuoteRequest: "Submit Quotation Request",
    processingRequest: "Processing Request...",
    error404: "Error 404",
    pageNotFound: "Page Not Found",
    returnHome: "Return to Homepage",
    allRightsReserved: "All rights reserved.",
    privacyPolicyDemo: "Privacy Policy (Demo)",
    contactAndQuote: "Contact & Quote",
    explore: "Explore",
    specificationsNotice: "Standard industrial product overview. Actual specifications tailored to order.",
  },

  // Hero Section
  hero: {
    eyebrow: "Vihani Transoceanic / Industrial Packaging",
    title: "Packaging that carries the load.",
    description: "Woven polypropylene bags, FIBC containers, flexible packaging, and technical fabrics for demanding supply chains.",
    requestQuote: "Request a quote",
    viewProductRange: "View product range",
    badge: "Bulk packaging / woven systems",
  },

  // Company Intro Section
  companyIntro: {
    eyebrow: "The company",
    title: "A precise link between production and supply.",
    paragraph1Prefix: " supplies woven polypropylene, flexible packaging, and geotextile solutions for agriculture, construction, chemicals, and infrastructure.",
    paragraph2: "The work is practical: select the right fabric, barrier, closure, and load performance for the way a product is filled, moved, and stored.",
    aboutLink: "About Vihani ↗",
  },

  // Product Portfolio Section (Homepage)
  productPortfolio: {
    eyebrow: "Product range",
    title: "Manufactured for bulk transport and surface protection.",
    browseAll: "Browse all products ↗",
    exploreAllBanner: "Explore our full technical catalogue including custom sizing, liner configurations, and multi-color flexographic or gravure print options.",
    allProductsLink: "All products ↗",
  },

  // Industries Section (Homepage)
  industriesSection: {
    eyebrow: "Sectors served",
    title: "Engineered around the demands of the cargo.",
    exploreAll: "Explore industries ↗",
  },

  // Capabilities Section (Homepage)
  capabilitiesSection: {
    eyebrow: "Manufacturing & quality",
    title: "Control is part of the product.",
    description: "Vihani’s manufacturing and sourcing guidelines focus on consistent denier extrusion, load-bearing calculations, and packaging that arrives ready for the packing cycle.",
    item1Number: "01",
    item1Title: "Material selection",
    item1Description: "Polypropylene and polyethylene constructions selected for the load, barrier, and handling conditions of the application.",
    item2Number: "02",
    item2Title: "Quality verification",
    item2Description: "Fabric tensile loads, dimensional tolerances, stitching, liners, and print finish are checked against the agreed specification.",
    item3Number: "03",
    item3Title: "Containerized dispatch",
    item3Description: "Bale-packed or palletized goods are coordinated for domestic and sea-freight delivery schedules.",
    linkText: "Manufacturing & quality ↗",
  },

  // CTA Section
  ctaSection: {
    eyebrow: "Start a conversation",
    title: "Tell us what the packaging has to do.",
    description: "Share the product, load, filling method, and destination. Our team can help shape the right specification.",
    requestQuote: "Request a quote ↗",
    browseProducts: "Browse products",
  },

  // Footer
  footer: {
    description: "Vihani Transoceanic is an industrial packaging supplier and manufacturer specializing in woven polypropylene, flexible packaging, and geotextile solutions for demanding industries.",
    products: "Products",
    explore: "Explore",
    contact: "Contact",
    about: "About",
    manufacturingQuality: "Manufacturing & Quality",
    privacyPolicy: "Privacy Policy (Demo)",
    contactQuote: "Contact & Quote",
    copyright: "All rights reserved.",
  },

  // About Page
  about: {
    eyebrow: "About Vihani",
    title: "Packaging that works beyond the warehouse.",
    description: "Vihani Transoceanic is an industrial packaging supplier focused on woven polypropylene products, FIBC bags, flexible packaging, and technical fabrics for modern supply chains.",
    p1Prefix: " is an industrial packaging provider focused on polypropylene woven products, flexible intermediate bulk containers (FIBC), and protective technical textiles.",
    p2: "Industrial packaging demands rigorous standards. A tear, seam burst, or moisture ingress can compromise valuable cargo, halt manufacturing processes, or cause hazardous contamination during sea transport. We bridge procurement needs with vetted manufacturing operations to deliver packaging that meets strict mechanical tolerances.",
    p3: "Our philosophy prioritizes structural integrity over shortcuts: selecting appropriate denier and virgin polypropylene resins, optimizing weave densities, and providing tailored barrier liners for sensitive chemicals and food-grade bulk products.",
    pillarsHeading: "Core Operational Principles",
    pillarsSubtitle: "How we coordinate packaging procurement, technical specification, and export delivery.",
    pillar1Title: "Vetted Manufacturing",
    pillar1Desc: "Production partnerships audit extruder yarn consistency, circular weaving looms, and clean-room packaging facilities.",
    pillar2Title: "Export-Grade Logistics",
    pillar2Desc: "Containerized packing in standardized bales or shrink-wrapped wooden pallets ready for ocean freight and multi-modal handling.",
    pillar3Title: "Technical Specification",
    pillar3Desc: "Matching fabric GSM, UV stabilizer percentage, safety factors (5:1 / 6:1), and moisture barriers to exact transport profiles.",
    specsHeading: "Standard Engineering Tolerances",
    spec1Label: "Polypropylene Raw Material",
    spec1Val: "100% Virgin PP Resin",
    spec2Label: "FIBC Safety Factor (SF)",
    spec2Val: "5:1 (Single-Trip) / 6:1 (Multi-Trip)",
    spec3Label: "UV Resistance Stabilisation",
    spec3Val: "200 to 1200 KLY (tailored to geography)",
    spec4Label: "Quality Assurance Standard",
    spec4Val: "ISO 9001 / FSSC 22000 aligned partners",
    whyHeading: "Why Global Buyers Partner with Us",
    whyPoint1: "Direct access to large-scale Indian extrusion and weaving capacity.",
    whyPoint2: "Strict mechanical testing for tensile, elongation, and drop resistance.",
    whyPoint3: "Tailored food-grade and hazardous goods (UN certified) packaging configurations.",
    whyPoint4: "Responsive communication, export documentation, and container load optimization.",
  },

  // Products Page & Detail
  productsPage: {
    eyebrow: "Our products",
    title: "Materials made for movement.",
    description: "Explore bulk bags, PP woven sacks, BOPP bags, flexible packaging, fabric rolls, tarpaulins, and technical textile products for industrial supply chains.",
    heading: "All Packaging Solutions",
    subtitle: "Browse through our core product categories. Custom dimensions, prints, and liner specifications available on request.",
    breadcrumbProducts: "Products",
    recommendedApplications: "Recommended Applications",
    technicalParameters: "Technical Parameters",
    requestQuoteForThis: "Request a Quote for This Product",
    backToAll: "Back to All Products",
    specNotice: "Standard industrial product overview. Actual specifications tailored to order.",
  },

  // Product descriptions and applications (descriptions translated; product names protected)
  productItems: {
    "fibc-jumbo-bags": {
      category: "Bulk Packaging",
      shortDescription: "Flexible intermediate bulk containers for safe transport of granular and powdered materials.",
      description: "Our FIBC (Flexible Intermediate Bulk Container) bags are engineered for the efficient storage and transportation of bulk granular, powdered, and semi-flowable materials. Available in a range of capacities from 500 kg to 2,000 kg, they are manufactured using high-tenacity woven polypropylene fabric and can be supplied with a variety of filling and discharge options including top and bottom spouts, duffle tops, and full open tops. UN-certified variants are available for hazardous goods transport.",
      applications: [
        "Cement and building materials",
        "Chemical powders and granules",
        "Agricultural grains and seeds",
        "Mining and mineral ores",
        "Food-grade bulk ingredients"
      ],
      specifications: {
        "Capacity Range": "500 kg – 2,000 kg",
        "Bag Types": "U-panel, Circular, Baffle, Cross-corner",
        "Closure Options": "Spout top, Duffle top, Full open top",
        "Coating": "Laminated / Unlaminated"
      }
    },
    "pp-woven-sacks": {
      category: "Standard Packaging",
      shortDescription: "Durable woven polypropylene sacks suitable for a wide range of industrial and agricultural applications.",
      description: "PP Woven Sacks are a versatile, cost-effective packaging solution manufactured from high-quality polypropylene tape yarn. These bags offer excellent tensile strength, moisture resistance, and breathability. They are available in plain, printed, laminated, and unlaminated configurations and can be customized in size, color, and closure style to meet specific packing requirements.",
      applications: [
        "Fertilizers and agrochemicals",
        "Cement and dry mortar",
        "Animal feed and pet food",
        "Sugar and food grains",
        "Polymer resins and pellets"
      ],
      specifications: {
        "Material": "Woven polypropylene (PP)",
        "Surface Finish": "Laminated / Unlaminated",
        "Printing": "Up to 8-color flexographic",
        "Closure Options": "Sewn, Heat-sealed, Open mouth"
      }
    },
    "pp-pouches-flexible-packaging": {
      category: "Flexible Packaging",
      shortDescription: "Lightweight, customizable flexible packaging for retail and semi-bulk applications.",
      description: "Our PP pouches and flexible packaging solutions cater to applications where presentation, shelf appeal, and product protection are equally important. These lighter-weight packages are suitable for food, consumer goods, and industrial components. Options include stand-up pouches, gusseted bags, and wicketed packs with multi-color gravure or flexographic printing.",
      applications: [
        "Retail food products",
        "Consumer goods packaging",
        "Small-volume industrial parts",
        "Seed and spice pouches",
        "Promotional and sample packs"
      ]
    },
    "pp-fabric-rolls": {
      category: "Raw Materials",
      shortDescription: "Woven polypropylene fabric supplied in roll form for converters and downstream manufacturers.",
      description: "PP Fabric Rolls are flat or tubular woven polypropylene fabric supplied in continuous rolls. They serve as the base material for bag converters, fabricators, and manufacturers who cut and sew their own packaging products. Available in a range of widths, weave densities, and GSM weights, and can be supplied laminated or unlaminated.",
      applications: [
        "Bag conversion and fabrication",
        "Packaging manufacturers",
        "Protective wrapping material",
        "Industrial lining applications"
      ],
      specifications: {
        "Form": "Flat / Tubular rolls",
        "Coating Options": "Laminated / Unlaminated"
      }
    },
    "bopp-bags": {
      category: "Premium Packaging",
      shortDescription: "Biaxially oriented polypropylene bags offering superior print quality and brand visibility.",
      description: "BOPP (Biaxially Oriented Polypropylene) bags combine the strength of a woven PP substrate with a high-clarity BOPP film overlay, delivering photographic-quality graphics and excellent shelf presence. They are widely used where brand visibility and product aesthetics are priorities, such as retail-facing cement, fertilizer, pet food, and specialty chemical packaging.",
      applications: [
        "Branded cement and building products",
        "Retail fertilizer bags",
        "Pet food and animal nutrition",
        "Specialty chemicals",
        "Rice and premium food grains"
      ],
      specifications: {
        "Outer Layer": "BOPP laminated film",
        "Inner Layer": "Woven PP substrate",
        "Printing": "Rotogravure – photo-quality, up to 10 colors",
        "Closure Options": "Pinch bottom, Open mouth sewn"
      }
    },
    "tarpaulins": {
      category: "Protective Covers",
      shortDescription: "Heavy-duty, UV-stabilized tarpaulins for outdoor protection and industrial covering.",
      description: "Our tarpaulins are manufactured from high-density woven polyethylene or polypropylene with reinforced edges and UV stabilization for extended outdoor life. They are used as protective covers for open-truck cargo, construction sites, agricultural storage, and industrial yards. Available in standard and custom sizes with options for reinforced grommets and heat-sealed seams.",
      applications: [
        "Truck and cargo covering",
        "Construction site protection",
        "Agricultural produce storage",
        "Industrial yard covers",
        "Temporary shelter and ground sheets"
      ],
      specifications: {
        "Material": "HDPE / PP woven laminated",
        "UV Stabilization": "Yes – rated for extended outdoor exposure",
        "Edge Finish": "Reinforced hem with aluminium grommets"
      }
    },
    "hdpe-ldpe-products": {
      category: "Polyethylene Products",
      shortDescription: "Polyethylene-based packaging products including liners, sheets, and bags for diverse applications.",
      description: "Our HDPE (High-Density Polyethylene) and LDPE (Low-Density Polyethylene) product range includes liner bags, shrink films, stretch wraps, and flat or gusseted poly bags. These products provide moisture barriers, chemical resistance, and flexibility, making them suitable for inner liners in FIBC and woven sacks as well as standalone packaging for industrial components.",
      applications: [
        "FIBC inner liners",
        "Industrial shrink wrapping",
        "Moisture-barrier packaging",
        "Pallet stretch wrapping",
        "General-purpose poly bags"
      ]
    },
    "geotextiles": {
      category: "Infrastructure Materials",
      shortDescription: "Woven and non-woven geotextile fabrics for soil stabilization, drainage, and erosion control.",
      description: "Geotextile fabrics from Vihani Transoceanic are designed for civil engineering and infrastructure applications including soil stabilization, erosion control, drainage, separation, and reinforcement. Available in both woven and non-woven constructions, these fabrics conform to applicable engineering standards and are supplied in roll form for ease of deployment on-site.",
      applications: [
        "Road and highway construction",
        "Railway embankment stabilization",
        "Erosion control on slopes and embankments",
        "Landfill and drainage systems",
        "Foundation reinforcement"
      ]
    }
  },

  // Industries Page & Content (industry names protected)
  industriesPage: {
    eyebrow: "Industries we serve",
    title: "Different industries. Different demands.",
    description: "Packaging requirements vary by material, handling method, storage environment, and transportation needs. We organise the product range around those practical differences.",
    recommendedProductsPrefix: "Recommended Packaging Products for ",
  },

  industryItems: {
    "agriculture": {
      description: "Durable packaging solutions for seeds, fertilizers, animal feed, and harvested produce. Our woven sacks and FIBC bags are designed to protect agricultural inputs and outputs during storage and transport across varying climate conditions."
    },
    "cement": {
      description: "High-strength, moisture-resistant bags engineered for the cement and building materials industry. Available in block-bottom, pinch-bottom, and open-mouth configurations with premium BOPP print options for brand differentiation."
    },
    "chemicals": {
      description: "Safe, reliable packaging for chemical powders, granules, and hazardous materials. Our FIBC bags include UN-certified options, and PE liners provide additional moisture and contamination barriers."
    },
    "food-grains": {
      description: "Food-safe packaging for rice, wheat, pulses, sugar, and other consumable grains. Our bags meet food-contact standards and are available with breathable or laminated constructions to suit different storage needs."
    },
    "mining": {
      description: "Heavy-duty bulk containers and sacks for mineral ores, aggregates, and industrial powders. Engineered for high fill weights and rough handling conditions typical of mining and quarry operations."
    },
    "construction": {
      description: "Packaging and protective materials for the construction sector including cement bags, tarpaulins for site protection, and geotextiles for soil stabilization, drainage, and erosion control."
    }
  },

  // Manufacturing & Quality Page
  manufacturing: {
    eyebrow: "Manufacturing & quality",
    title: "Built around material performance.",
    description: "Our packaging and manufacturing-related capabilities focus on material selection, load-bearing construction, consistent extrusion, and verification against agreed specifications.",
    heading: "Quality Driven by Industrial Reality",
    philosophyParagraph: "When bulk bags hold two metric tons of cargo suspended overhead or undergo weeks of ocean humidity, packaging cannot fail. Our manufacturing and sourcing guidelines adhere strictly to load-bearing calculations, virgin polymer formulation, and consistent denier extrusion.",
    rawMaterialTitle: "Raw Material Control",
    rawMaterialDesc: "Utilizing high-grade polypropylene and polyethylene polymers with controlled melt flow indexes (MFI) and UV stabilizer masterbatches to maintain tensile stability under sunlight.",
    tensileTestingTitle: "Tensile & Burst Testing",
    tensileTestingDesc: "Warp and weft fabric strips undergo calibrated tensile testing to confirm tear resistance and elongation thresholds match designated Safe Working Loads (SWL).",
    seamIntegrityTitle: "Seam & Stitch Integrity",
    seamIntegrityDesc: "Heavy-duty lock stitching, chain stitches, and dust-proof filler cords are systematically audited to prevent powder leakage and structural stress failures at loop attachment points.",
    checklistHeading: "Production Verification Checklist",
    checklistSubtitle: "Parameters verified before packaging consignments receive shipping clearance.",
    checkItem1Title: "Dimensional & GSM Verification",
    checkItem1Desc: "Tolerances on width, cut length, fabric weight per square meter, and loop dimensions audited per lot.",
    checkItem2Title: "Tensile & Elongation Thresholds",
    checkItem2Desc: "Electronic load-cell validation of warp, weft, and lifting loop breaking strengths according to ISO 21898 standards.",
    checkItem3Title: "UV Stabilizer Consistency",
    checkItem3Desc: "Accelerated weathering audit to ensure polymer stabilization conforms to regional solar radiation levels (KLY ratings).",
    checkItem4Title: "Drop & Cyclic Load Testing",
    checkItem4Desc: "Rig test simulations for cyclic lifting and vertical drop impact for FIBC bulk bags carrying designated payload ratings.",
    checkItem5Title: "Seam & Stitch Audit",
    checkItem5Desc: "Verification of stitch pitch, tension, dust-proof cord presence, and double-fold hem construction.",
    checkItem6Title: "Moisture & Cleanliness Inspection",
    checkItem6Desc: "Food-grade and pharmaceutical-grade inner liners audited for pinholes, static charge, and micro-contaminants.",
    complianceNote: "Production facilities aligned with international manufacturing standards. Specific technical data sheets (TDS), test certificates, and compliance documentation are provided directly upon quotation for specific order specifications."
  },

  // Contact Page & Form
  contact: {
    eyebrow: "Contact",
    title: "Let's discuss your packaging requirements.",
    description: "Share your product type, specifications, quantity, and intended application so our team can understand the right packaging direction.",
    infoHeading: "Contact Details",
    phoneLabel: "Phone",
    emailLabel: "Email Addresses",
    addressLabel: "Registered Office Address",
    hoursLabel: "Business Hours",
    hoursValue: "Monday – Saturday: 9:30 AM – 6:30 PM (IST)",
    whyChooseTitle: "Direct Technical Consultation",
    whyChooseDesc: "Our team assists procurement teams with liner selection, tensile calculations, print artwork, and optimized container packing plans.",
    formHeading: "Request a Commercial Quote",
    formSubtitle: "Specify your packaging dimensions, quantities, or technical requirements.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "e.g. John Doe",
    companyNameLabel: "Company Name",
    companyNamePlaceholder: "e.g. Global Logistics Ltd.",
    emailInputLabel: "Business Email",
    emailInputPlaceholder: "e.g. john@company.com",
    phoneInputLabel: "Phone Number",
    phoneInputPlaceholder: "e.g. +1 555 123 4567",
    productCategoryLabel: "Product Category",
    selectCategory: "Select a category",
    quantityLabel: "Estimated Quantity",
    quantityPlaceholder: "e.g. 5,000 units / 1 FCL",
    destinationLabel: "Destination Port / Delivery Location",
    destinationPlaceholder: "e.g. Mundra, Nhava Sheva, or City, Country",
    specificationsLabel: "Technical Specifications / Fabric GSM / Dimensions",
    specificationsPlaceholder: "Specify GSM, loops, liner requirements, printing layers, etc.",
    remarksLabel: "Additional Remarks",
    submitButton: "Submit Quotation Request",
    submittingButton: "Processing Request...",
    errorName: "Full name is required",
    errorCompany: "Company name is required",
    errorEmailRequired: "Business email is required",
    errorEmailInvalid: "Please provide a valid email format",
    errorPhoneRequired: "Phone number is required",
    errorPhoneInvalid: "Please enter a valid contact phone number",
    errorProduct: "Please select a product category",
    successTitle: "Inquiry Simulated Successfully",
    successMessagePart1: "Thank you, ",
    successMessagePart2: " from ",
    successMessagePart3: ". Your quotation request for ",
    successMessagePart4: " has been received by this interactive demo.",
    demoNoticeTitle: "Demonstration Notice:",
    demoNoticeBody: "This website currently functions in demonstration mode. No live email or CRM transmission has occurred. For active commercial inquiries, please contact ",
    demoNoticeOr: " or ",
    submitAnother: "Submit Another Request",
  },

  // Privacy Policy Page
  privacy: {
    heroTitle: "Privacy Policy (Demonstration Notice)",
    heroSubtitle: "Standard data protection disclosure and interactive preview notice.",
    demoNoticeTitle: "Demonstration Notice:",
    demoNoticeText: "This website is currently presented as a commercial preview and portfolio demo. Prior to formal enterprise deployment, this policy should be reviewed and approved by qualified legal counsel in accordance with applicable regional data privacy regulations (e.g., Digital Personal Data Protection Act / GDPR).",
    s1Title: "1. Information Collection",
    s1Text: "When utilizing our inquiry or quotation submission forms, users may optionally submit business contact information including full names, company names, business email addresses, telephone numbers, and technical packaging specifications.",
    s2Title: "2. Purpose of Processing",
    s2Text: "Submitted details are used solely to assess commercial requirements, calculate freight estimates, generate quotation sheets, or coordinate packaging physical samples.",
    s3Title: "3. Data Retention & Third Parties",
    s3Text: "We do not sell, rent, or trade commercial inquiry data with unrelated third-party marketing entities. Technical specifications may be shared with authorized manufacturing and logistics partners strictly for production validation and shipping arrangements.",
    s4Title: "4. Security Safeguards",
    s4Text: "Appropriate technical and operational standards are maintained to protect transmitted information against unauthorized alteration, exposure, or loss.",
  },

  // 404 Page
  notFound: {
    eyebrow: "Error 404",
    title: "Page Not Found",
    description: "The industrial packaging resource or page you requested could not be located. It may have moved or been renamed.",
    returnButton: "Return to Homepage",
  },
};


export interface ProductItemTranslation {
  category: string;
  shortDescription: string;
  description: string;
  applications: string[];
  specifications?: Record<string, string>;
}

export type TranslationDictionary = Omit<typeof en, "productItems"> & {
  productItems: Record<string, ProductItemTranslation>;
};
