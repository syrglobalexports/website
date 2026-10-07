import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { PRODUCTS } from "@/data/products";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { ForwardBookingCTA } from "@/components/sections/ForwardBookingCTA";
import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Fresh Green Chilli for Global Buyers (G4 & Teja) | SYR Global Exports",
  description:
    "Export grade Indian fresh green chillies (G4 & Teja cultivars). Pre-cooled packhouse sorting, ventilated CFB cartons, and cold-chain reefer transit for buyers worldwide.",
  alternates: {
    canonical: "https://syrglobalexport.com/products/green-chilli",
  },
  openGraph: {
    title: "Fresh Green Chilli for Global Buyers (G4 & Teja) | SYR Global Exports",
    description:
      "Export grade Indian fresh green chillies (G4 & Teja cultivars). Pre-cooled packhouse sorting and reefer container dispatch.",
    url: "https://syrglobalexport.com/products/green-chilli",
    siteName: "SYR Global Exports",
    images: [{ url: "/logo.png", width: 600, height: 600, alt: "Fresh Green Chilli" }],
  },
};

export default function GreenChilliPage() {
  const product = PRODUCTS.find((p) => p.slug === "green-chilli")!;

  return (
    <main className="w-full bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: "Fresh Green Chilli", url: "/products/green-chilli" },
        ]}
      />
      <ProductJsonLd
        name="Fresh Green Chilli (G4 & Teja)"
        description="Export grade Indian fresh green chillies sorted in pre-cooled packhouses with cold-chain reefer transit."
        image={product.image}
        sku="SYR-CHL-G4TEJA"
        url="/products/green-chilli"
        category="Agricultural Produce"
      />
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-r from-[#001337] via-[#0F2854] to-[#0A1C3B] text-white py-8 lg:py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-300 font-label-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#FECE57] font-semibold">{product.name}</span>
          </nav>

          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-blue-300 rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-white/10">
              <MaterialIcon name="ac_unit" size={14} />
              <span>Cold Chain Export Ready</span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold tracking-tight">
              {product.name} (G4 & Teja Cultivars)
            </h1>
            <p className="font-headline-md text-base sm:text-xl text-[#FECE57] font-semibold">
              Fresh Export Grade Indian Chillies for Global Buyers
            </p>
            <p className="font-body-md text-sm sm:text-base text-slate-300 mt-1 leading-relaxed">
              Hand-picked and sorted under strict packhouse protocols. Uniform grading, vibrant gloss, and extended transit shelf life for wholesale importers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Product Photography & Packhouse Standards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-[#0F2854]/90 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                  HS CODE: 070960
                </div>
              </div>

              {/* Cultivars & Packhouse Standards */}
              <div className="p-5 bg-emerald-50/90 border border-emerald-200 rounded-xl flex flex-col gap-3">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider font-label-sm flex items-center gap-1.5">
                  <MaterialIcon name="verified" size={16} className="text-emerald-700" />
                  Cultivars & Packaging Options
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-emerald-200">
                    <span className="text-sm font-bold text-[#0F2854] block">G4 Cultivar</span>
                    <span className="text-xs text-slate-600">Medium pungency, 9–12 cm length, bright dark green, excellent shelf life.</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-emerald-200">
                    <span className="text-sm font-bold text-[#0F2854] block">Teja Cultivar</span>
                    <span className="text-xs text-slate-600">High pungency, 7–9 cm length, slender shape, high capsaicin content.</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-emerald-950 pt-1">
                  <span className="px-2 py-1 bg-white rounded border border-emerald-200">Ventilated CFB Cartons</span>
                  <span className="px-2 py-1 bg-white rounded border border-emerald-200">3.5kg / 4.0kg / 5.0kg Packs</span>
                  <span className="px-2 py-1 bg-white rounded border border-emerald-200">Stem-On or Stem-Off</span>
                </div>
              </div>

              {/* Overview & Agricultural Sourcing */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <h3 className="font-headline-sm text-lg font-bold text-[#0F2854]">
                  Agricultural Sourcing & Cold Chain Control
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {product.overview}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.badges.map((b, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-md border border-slate-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commercial Applications */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <h3 className="font-headline-sm text-lg font-bold text-[#0F2854]">
                  Commercial Wholesale Applications
                </h3>
                <ul className="flex flex-col gap-2.5 text-sm text-slate-700">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <MaterialIcon name="check_circle" size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Specifications Table & Inquiry Form */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Technical Specifications Table */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-[#0F2854] text-white flex items-center justify-between">
                  <h3 className="font-headline-sm text-base font-bold">
                    Produce Specifications
                  </h3>
                  <span className="text-xs text-[#FECE57] font-semibold">
                    HS CODE: 070960
                  </span>
                </div>
                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {product.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-1 sm:grid-cols-3 p-3.5 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                      }`}
                    >
                      <span className="font-bold text-slate-800 sm:col-span-1">
                        {spec.label}
                      </span>
                      <span className="text-slate-600 sm:col-span-2 mt-0.5 sm:mt-0 font-medium">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quotation Form with Green Chilli Pre-selected */}
              <EnquiryForm
                defaultProduct="Green Chilli"
                title="Request Fresh Green Chilli Quotation"
                subtitle="Specify cultivar (G4 or Teja), required tonnage, packaging size, and target seaport or airport."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forward Booking Notice */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForwardBookingCTA />
        </div>
      </section>
    </main>
  );
}
