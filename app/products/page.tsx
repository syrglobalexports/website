import type { Metadata } from "next";
import { ProductCatalog } from "@/components/sections/ProductCatalog";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ForwardBookingCTA } from "@/components/sections/ForwardBookingCTA";

export const metadata: Metadata = {
  title: "Export Products & Sourcing Catalog | SYR Global Exports",
  description:
    "Explore verified export lines: 100% natural Round Areca Leaf Plates (8, 10, 12 inch), Sugarcane Bagasse Cutlery, and fresh G4/Teja Green Chilli from India.",
  alternates: {
    canonical: "https://syrglobalexport.com/products",
  },
  openGraph: {
    title: "Export Products & Sourcing Catalog | SYR Global Exports",
    description:
      "Explore verified export lines: 100% natural Round Areca Leaf Plates, Sugarcane Bagasse Cutlery, and fresh green chilli.",
    url: "https://syrglobalexport.com/products",
    siteName: "SYR Global Exports",
    images: [{ url: "/logo.png", width: 600, height: 600, alt: "SYR Global Exports" }],
  },
};

export default function ProductsPage() {
  return (
    <main className="w-full bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ]}
      />
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-[#001337] via-[#0F2854] to-[#0A1C3B] text-white py-10 lg:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FECE57] rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-white/10">
              <MaterialIcon name="inventory_2" size={14} />
              <span>International Export Portfolio</span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold tracking-tight">
              Export Products Catalog
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our verified product lines: natural compostable tableware fabricated from shed palm leaves and upcycled sugarcane bagasse pulp, alongside export-sorted fresh agricultural commodities.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid with 3 Products in exact order + Coming Soon */}
      <ProductCatalog
        title="Current Export Offerings"
        subtitle="1. Areca Leaf Plates (Round only) • 2. Fresh Green Chilli (G4 & Teja) • 3. Biodegradable Cutlery Made from Sugarcane Bagasse"
        showComingSoon={true}
        showForwardCTA={false}
      />

      {/* Forward Booking Announcement */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForwardBookingCTA />
        </div>
      </section>
    </main>
  );
}
