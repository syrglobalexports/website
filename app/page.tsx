import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductCatalog } from "@/components/sections/ProductCatalog";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Certifications } from "@/components/sections/Certifications";
import { Sustainability } from "@/components/sections/Sustainability";
import { QuoteForm } from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "SYR Global Exports — Global Sustainable Products & Export Solutions",
  description:
    "Government Registered Indian Export Merchant House supplying 100% natural round Areca leaf plates, fresh G4/Teja green chilli, and biodegradable sugarcane bagasse cutlery to global buyers.",
  alternates: {
    canonical: "https://syrglobalexport.com",
  },
  openGraph: {
    title: "SYR Global Exports — Global Sustainable Products & Export Solutions",
    description:
      "Government Registered Indian Export Merchant House supplying 100% natural round Areca leaf plates, fresh G4/Teja green chilli, and biodegradable sugarcane bagasse cutlery to global buyers.",
    url: "https://syrglobalexport.com",
    siteName: "SYR Global Exports",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "SYR Global Exports Logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* 1. Hero with Global/Worldwide Positioning */}
      <HeroSection />

      {/* 2. Core Featured Products Catalog (Areca Leaf Plates, Green Chilli, Biodegradable Cutlery) */}
      <ProductCatalog
        title="Featured Export Lines"
        subtitle="Sourced directly from Indian farms and certified rural manufacturers for buyers worldwide."
        showComingSoon={true}
        showForwardCTA={false}
      />

      {/* 3. Why Choose Us / Commercial Superiority */}
      <WhyChooseUs />

      {/* 4. Export Compliance Assured (IEC, FIEO, GST, UDYAM & Third-Party Inspection) */}
      <Certifications showTitle={true} />

      {/* 5. Sustainability Stewardship */}
      <Sustainability showFullPageLink={true} />

      {/* 6. B2B Quotation & Direct Export Desk */}
      <QuoteForm />
    </main>
  );
}
