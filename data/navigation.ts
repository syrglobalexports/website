export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    subItems: [
      {
        label: "Areca Leaf Plates",
        href: "/products/areca-leaf-plates",
        description: "Round Plates only (8\", 10\", 12\")",
        badge: "Available",
      },
      {
        label: "Green Chilli",
        href: "/products/green-chilli",
        description: "Fresh G4 & Teja cultivars",
        badge: "Available",
      },
      {
        label: "Biodegradable Cutlery",
        href: "/products/biodegradable-cutlery",
        description: "Made from Sugarcane Bagasse",
        badge: "Available",
      },
      {
        label: "Other Products — Coming Soon",
        href: "/products#coming-soon",
        description: "Spices, Pulses & Agri commodities",
        badge: "Upcoming",
      },
    ],
  },
  { label: "Export & Compliance", href: "/export-compliance" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];
