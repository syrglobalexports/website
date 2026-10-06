export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  category: "biodegradable" | "agricultural";
  hsCode: string;
  tag: {
    label: string;
    icon: string;
    variant: "compostable" | "bagasse" | "coldchain";
  };
  image: string;
  imageAlt: string;
  overview: string;
  description: string;
  availableSizes?: string[];
  shape?: string;
  materialDetails: string;
  specifications: ProductSpecification[];
  applications: string[];
  badges: string[];
  packaging: string;
  exportReady: boolean;
}

export interface UpcomingProduct {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "areca-leaf-plates",
    slug: "areca-leaf-plates",
    name: "Areca Leaf Plates",
    shortName: "Areca Leaf Plates",
    subtitle: "100% Natural Round Plates — 8\", 10\" & 12\" Sizes",
    category: "biodegradable",
    hsCode: "HS CODE: 460219",
    tag: {
      label: "100% Natural Leaf",
      icon: "eco",
      variant: "compostable",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0fwsi-AIrM_6IsmSZajUnMOO5pA0AQSwMfVTdiViel5cTYOcfLAu2bx2n9YACv98JjEyWWdff_SPTq2yFZ7DTxPQQ6KyoAWXz_YovEciwSjuGLOJ1t1vsEZGzsQSA-5nORKvyaMMu7go-f4tgmSPWBLMJ40tD4Vq2DbjulqaBt3BAYpnIwobXbeVIesDEi5yTwB6MGBpnKreGz25bXzg3ct_bkmv_EoDyMv4Ff-CJbc6kyOKrPYi",
    imageAlt: "Natural round Areca leaf plates in 8, 10, and 12 inch sizes",
    overview:
      "Crafted exclusively from naturally shed areca palm leaves. Collected post-fall without chopping trees, thoroughly washed with freshwater, steam-pressed into sturdy round dining plates, and UV-sanitized for international commercial trade.",
    description:
      "Available strictly in round shape across three verified sizes: 8 inch, 10 inch, and 12 inch. Our areca leaf plates deliver exceptional rigidity, heat tolerance for hot and cold foods, and zero chemical leaching. Fully compostable in home and commercial soil conditions.",
    shape: "Round only",
    availableSizes: ["8 Inch Round", "10 Inch Round", "12 Inch Round"],
    materialDetails:
      "100% natural fallen Areca catechu palm fronds. No synthetic binders, no plastic coatings, no wax liners, and zero chemical bleaching.",
    specifications: [
      { label: "Form & Shape", value: "Round Plates Only" },
      { label: "Available Diameters", value: "8 Inch (200mm) • 10 Inch (250mm) • 12 Inch (300mm)" },
      { label: "Raw Material", value: "Naturally shed Areca Palm Leaf" },
      { label: "Chemical Treatment", value: "Zero chemicals, bleach, or binders" },
      { label: "Moisture Content", value: "< 10% strictly inspected" },
      { label: "Temperature Range", value: "-20°C (freezer) to 120°C (hot gravy)" },
      { label: "Biodegradability", value: "Naturally compostable within 60–90 days" },
      { label: "Standard Packing", value: "25 or 50 pcs shrink wrap with moisture desiccant; export corrugated master carton" },
    ],
    applications: [
      "Commercial catering & banquet dining",
      "Corporate hospitality & convention food service",
      "Eco-friendly wedding banquets & private events",
      "Zero-plastic restaurant takeaway and quick-service dining",
      "Outdoor festivals, camping & food truck service",
    ],
    badges: [
      "Round Shape Only",
      "8\", 10\" & 12\" Sizes",
      "100% Chemical-Free",
      "Microwave Safe",
      "Heat & Cold Resistant",
      "Zero Plastic",
    ],
    packaging: "Standard: 25 / 50 pcs shrink wrap in 5-ply export master carton",
    exportReady: true,
  },
  {
    id: "green-chilli",
    slug: "green-chilli",
    name: "Green Chilli",
    shortName: "Green Chilli",
    subtitle: "Fresh Indian G4 & Teja Cultivars for Global Buyers",
    category: "agricultural",
    hsCode: "HS CODE: 070960",
    tag: {
      label: "Cold Chain Ready",
      icon: "ac_unit",
      variant: "coldchain",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC56Zf6bX01E6PJ_modJdPNHuBHO3839IYFeG2t53j29bEOzQlRVEilpFctSiCoi-DjfQQXelGAh4qtxEZSxeEthGgS96JWDRyL1LLshwKi10cTAwl3Uj_aXkzV5iRnAw64-7VxyJ0yVlE_dmfd7GsDAU0w0Gr8S2qGg2v-gR1lzrXTB5L3w74XclPRoXJRUkvL6ge7p09GrobEPWTBPosq3nySqU8h1ZOEJRH_cIXb75YxF01qLdF_",
    imageAlt: "Export grade fresh green chillies packed for global cold chain shipping",
    overview:
      "Hand-harvested export-grade Indian fresh green chillies from verified regional farms. Sorted by length, thickness, and uniform deep-green coloration under cold packhouse conditions to guarantee extended transit shelf life.",
    description:
      "Offered in high-demand G4 and Teja cultivars with stem-on or stem-off grading. Packed in ventilated corrugated fibreboard (CFB) cartons optimized for maritime reefer containers and air-cargo freight.",
    materialDetails:
      "Premium Capsicum annuum crops sourced directly from certified agricultural clusters with strict adherence to maximum pesticide residue limits.",
    specifications: [
      { label: "Cultivars Available", value: "G4 (Medium pungent) • Teja (High pungent)" },
      { label: "Grading Criteria", value: "Stem-On / Stem-Off; Uniform Length (7cm–12cm)" },
      { label: "Color Profile", value: "Lustrous, vibrant deep green without blemishes" },
      { label: "Transit Temperature", value: "+7°C to +10°C with 85–90% Relative Humidity" },
      { label: "Pesticide Standards", value: "Compliant with international import tolerances" },
      { label: "Inspection Status", value: "Phytosanitary inspection certified prior to customs clearance" },
      { label: "Packaging Standards", value: "3.5kg, 4.0kg, or 5.0kg ventilated corrugated cartons" },
      { label: "Dispatch Logistics", value: "Air freight & temperature-controlled reefer ocean containers" },
    ],
    applications: [
      "Wholesale fresh produce distributors and food service purveyors",
      "Commercial spice processing and sauce manufacturing",
      "Supermarket retail produce departments",
      "Ethnic food chains and culinary prep kitchens",
    ],
    badges: [
      "G4 & Teja Cultivars",
      "Stem On / Off Graded",
      "Pre-Cooled Packhouse",
      "Ventilated CFB Cartons",
      "Phytosanitary Cleared",
    ],
    packaging: "Export Pack: 3.5kg / 4kg / 5kg ventilated cartons",
    exportReady: true,
  },
  {
    id: "biodegradable-cutlery",
    slug: "biodegradable-cutlery",
    name: "Biodegradable Cutlery Set Made from Sugarcane Bagasse",
    shortName: "Biodegradable Cutlery",
    subtitle: "Eco-Friendly Dining Cutlery Fabricated from Sugarcane Bagasse Pulp",
    category: "biodegradable",
    hsCode: "HS CODE: 482370",
    tag: {
      label: "Sugarcane Bagasse",
      icon: "recycling",
      variant: "bagasse",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyxfZQaWrJ1--o5ZG6EGi0rHwXv46d9DhC09ltiljnHDjOTiH0-Qi4Va9GkcEur-jJ-ruNg_2Gr4w8tX6xERRwB0px8ivGkTfg_SOC6PLRyoG9VuOLaohDnEHqESl1rmsXVcUMwU2EJSXA45K5aRACcM2PsjvcD8F0DX7BxeBJ9LMV1aF2fGIsatJqjwxRTvLV1M28-RqdhWVD3i3dyydhl3y0CMnULLTgG-ZwRO4DdrH0OkXGPyf2",
    imageAlt: "Biodegradable cutlery set made from sugarcane bagasse pulp",
    overview:
      "Fabricated from upcycled sugarcane bagasse fibers—the natural fibrous byproduct remaining after sugar extraction. Molded under high pressure into smooth, high-strength cutlery that serves as a direct, sustainable replacement for single-use plastic utensils.",
    description:
      "Our Biodegradable Cutlery Set Made from Sugarcane Bagasse provides robust tensile strength, thermal resistance for hot soups and entrees, and natural decomposition without leaving chemical traces or microplastics.",
    materialDetails:
      "100% natural sugarcane bagasse plant fiber pulp. Unbleached, zero petroleum polymers, PFAS-safe formulation.",
    specifications: [
      { label: "Product Class", value: "Biodegradable Cutlery Set (Spoons, Forks, Knives)" },
      { label: "Primary Material", value: "Upcycled Sugarcane Bagasse Fiber Pulp" },
      { label: "Plastic Content", value: "0% plastic, zero polymers, zero wax coating" },
      { label: "Thermal Stability", value: "Safe up to 100°C for hot liquids and gravies" },
      { label: "Grease & Moisture", value: "Naturally oil and water resistant without synthetic linings" },
      { label: "Disposal & Degradation", value: "Compostable in commercial & soil composting environments" },
      { label: "Packaging Formats", value: "Individually wrapped sets or bulk catering cartons (500/1000 pcs)" },
    ],
    applications: [
      "Commercial airline & rail catering",
      "Corporate cafeterias and campus dining services",
      "Quick-service restaurant (QSR) takeout & meal delivery",
      "Hospitality venues seeking zero-plastic waste compliance",
      "Outdoor catering and large-scale public gatherings",
    ],
    badges: [
      "100% Sugarcane Bagasse",
      "Zero Plastic Polymers",
      "Oil & Water Resistant",
      "Hot Food Stable",
      "Commercial Compostable",
    ],
    packaging: "Carton Pack: 500 / 1000 pcs per export case",
    exportReady: true,
  },
];

export const UPCOMING_PRODUCTS: UpcomingProduct[] = [
  {
    id: "whole-spices",
    name: "Export-Grade Whole Spices",
    category: "Agricultural Produce",
    icon: "grain",
    description: "Alleppey Finger Turmeric, Tellicherry Extra Bold Black Pepper, and whole dry spices sourced from verified South Indian growers.",
  },
  {
    id: "organic-pulses",
    name: "Selected Agricultural Pulses",
    category: "Agricultural Commodities",
    icon: "spa",
    description: "Export-sorted pulses and lentils cleaned through mechanical destoners and optical sorters.",
  },
  {
    id: "semi-husked-coconuts",
    name: "Semi-Husked Mature Coconuts",
    category: "Fresh Agricultural Produce",
    icon: "nutrition",
    description: "High-weight, mature Pollachi coconuts packed in mesh sacks for international sea shipments.",
  },
];
