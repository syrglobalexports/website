import React from "react";
import { COMPANY } from "@/data/company";

const SITE_URL = "https://syrglobalexport.com";

export const RootJsonLd: React.FC = () => {
  // Sitelinks navigation items for Google rich results
  const navigationItems = [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "Export Products Catalog",
      "description":
        "Explore verified product lines: natural Round Areca Leaf Plates, Sugarcane Bagasse Cutlery, and fresh G4/Teja Green Chillies.",
      "url": `${SITE_URL}/products`,
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "About SYR Global Exports",
      "description":
        "Government Registered Indian Export Merchant House bridging sustainable agriculture with global commercial buyers.",
      "url": `${SITE_URL}/about`,
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "Export Compliance & Certifications",
      "description":
        "Statutory registrations: IEC, FIEO, GST, and UDYAM Registered. Third-party pre-shipment inspections facilitated upon buyer request.",
      "url": `${SITE_URL}/export-compliance`,
    },
    {
      "@type": "SiteNavigationElement",
      "position": 4,
      "name": "Round Areca Leaf Plates",
      "description":
        "100% natural, chemical-free Round Areca Leaf Plates in 8, 10, and 12-inch sizes for zero-plastic commercial catering.",
      "url": `${SITE_URL}/products/areca-leaf-plates`,
    },
    {
      "@type": "SiteNavigationElement",
      "position": 5,
      "name": "Biodegradable Cutlery",
      "description":
        "100% upcycled sugarcane bagasse tableware and cutlery sets offering high thermal stability and rapid soil compostability.",
      "url": `${SITE_URL}/products/biodegradable-cutlery`,
    },
    {
      "@type": "SiteNavigationElement",
      "position": 6,
      "name": "Fresh Green Chilli (G4 & Teja)",
      "description":
        "Export-grade Indian fresh green chillies sorted in pre-cooled packhouses with cold-chain reefer transit.",
      "url": `${SITE_URL}/products/green-chilli`,
    },
    {
      "@type": "SiteNavigationElement",
      "position": 7,
      "name": "Sustainability Stewardship",
      "description":
        "Zero-plastic mission utilizing naturally shed palm fronds and agricultural bagasse residues for sustainable global supply.",
      "url": `${SITE_URL}/sustainability`,
    },
    {
      "@type": "SiteNavigationElement",
      "position": 8,
      "name": "Contact & Commercial RFQ",
      "description":
        "Direct export desk for FOB/CIF proforma pricing, container bookings, and trade inquiries in Ponneri, Tamil Nadu.",
      "url": `${SITE_URL}/contact`,
    },
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": COMPANY.name,
        "alternateName": ["SYR Global", "SYR Global Exports India", "SYR Exports"],
        "description":
          "Government Registered Export Merchant House supplying sustainable agricultural produce and 100% biodegradable Areca Palm Leaf plates and Sugarcane Bagasse cutlery worldwide.",
        "inLanguage": "en-US",
        "publisher": {
          "@id": `${SITE_URL}/#organization`,
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/products?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": COMPANY.name,
        "legalName": COMPANY.legalName,
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`,
          "width": "600",
          "height": "600",
          "caption": "SYR Global Exports Official Emblem",
        },
        "image": `${SITE_URL}/logo.png`,
        "description":
          "Government Registered Indian Export Merchant House (IEC, FIEO, GST, UDYAM registered) based near Chennai ports, supplying eco-friendly biodegradable tableware and agricultural produce worldwide.",
        "email": COMPANY.emails.primary,
        "telephone": COMPANY.phones[0],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "6, MPA Church Street, NGO Nagar",
          "addressLocality": COMPANY.office.city,
          "addressRegion": COMPANY.office.state,
          "postalCode": COMPANY.office.pincode,
          "addressCountry": "IN",
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": COMPANY.phones[0],
            "contactType": "sales",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Tamil", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            "telephone": COMPANY.phones[1],
            "contactType": "customer service",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Tamil"],
          },
        ],
        "knowsAbout": [
          "Areca Palm Leaf Plates",
          "Sugarcane Bagasse Biodegradable Cutlery",
          "Fresh Green Chilli G4 and Teja Export",
          "International Freight Incoterms FOB CIF CFR",
          "Eco-Friendly Sustainable Tableware",
        ],
      },
      ...navigationItems,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbJsonLd: React.FC<{ items: BreadcrumbItem[] }> = ({
  items,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  sku: string;
  url: string;
  category: string;
}

export const ProductJsonLd: React.FC<ProductJsonLdProps> = ({
  name,
  description,
  image,
  sku,
  url,
  category,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "sku": sku,
    "url": url.startsWith("http") ? url : `${SITE_URL}${url}`,
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": COMPANY.name,
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "price": "Contact for bulk FOB/CIF quote",
      "url": `${SITE_URL}/contact`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
