import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { PRODUCTS } from "@/data/products";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { ForwardBookingCTA } from "@/components/sections/ForwardBookingCTA";
import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Round Areca Leaf Plates (8, 10 & 12 Inch) | SYR Global Exports",
  description:
    "100% natural, chemical-free Round Areca Leaf Plates available strictly in 8 inch, 10 inch, and 12 inch sizes for commercial catering and zero-plastic food service.",
  alternates: {
    canonical: "https://syrglobalexport.com/products/areca-leaf-plates",
  },
  openGraph: {
    title: "Round Areca Leaf Plates (8, 10 & 12 Inch) | SYR Global Exports",
    description:
      "100% natural, chemical-free Round Areca Leaf Plates in 8, 10, and 12 inch sizes. Direct farmgate sourcing and export packaging.",
    url: "https://syrglobalexport.com/products/areca-leaf-plates",
    siteName: "SYR Global Exports",
    images: [{ url: "/logo.png", width: 600, height: 600, alt: "Areca Leaf Plates" }],
  },
};

export default function ArecaLeafPlatesPage() {
  const product = PRODUCTS.find((p) => p.slug === "areca-leaf-plates")!;

  return (
    <main className="w-full bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: "Areca Leaf Plates", url: "/products/areca-leaf-plates" },
        ]}
      />
      <ProductJsonLd
        name="Round Areca Leaf Plates (8, 10, 12 Inch)"
        description="100% natural, chemical-free Round Areca Leaf Plates for commercial catering and zero-plastic dining."
        image={product.image}
        sku="SYR-ALP-ROUND"
        url="/products/areca-leaf-plates"
        category="Biodegradable Tableware"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-emerald-300 rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-white/10">
              <MaterialIcon name="eco" size={14} />
              <span>100% Biodegradable & Compostable</span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold tracking-tight">
              {product.name}
            </h1>
            <p className="font-headline-md text-base sm:text-xl text-[#FECE57] font-semibold">
              Round Plates Only — 8 Inch, 10 Inch & 12 Inch Diameters
            </p>
            <p className="font-body-md text-sm sm:text-base text-slate-300 mt-1 leading-relaxed">
              Crafted from naturally shed Areca palm leaves without cutting trees. Chemical-free, microwave-safe, and fully compostable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Product Photography & Key Features */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Main Image Showcase */}
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
                  HS CODE: 460219
                </div>
              </div>

              {/* Critical Requirement: Round Only & Exact Sizes Banner */}
              <div className="p-5 bg-amber-50/90 border border-amber-200 rounded-xl flex flex-col gap-2">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider font-label-sm flex items-center gap-1.5">
                  <MaterialIcon name="verified" size={16} className="text-[#C59B27]" />
                  Verified Export Specifications
                </span>
                <p className="text-sm font-bold text-amber-950">
                  Available Shape: Round Only
                </p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="p-3 bg-white rounded-lg border border-amber-200 text-center shadow-sm">
                    <span className="text-lg font-extrabold text-[#0F2854] block">8&quot;</span>
                    <span className="text-[11px] font-semibold text-slate-600">Round Plate</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-amber-200 text-center shadow-sm">
                    <span className="text-lg font-extrabold text-[#0F2854] block">10&quot;</span>
                    <span className="text-[11px] font-semibold text-slate-600">Round Plate</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-amber-200 text-center shadow-sm">
                    <span className="text-lg font-extrabold text-[#0F2854] block">12&quot;</span>
                    <span className="text-[11px] font-semibold text-slate-600">Round Plate</span>
                  </div>
                </div>
                <p className="text-xs text-amber-800 mt-1">
                  * Note: Only round shapes are offered for export containers. Square or compartmental variants are not in production.
                </p>
              </div>

              {/* Product Overview & Material Info */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <h3 className="font-headline-sm text-lg font-bold text-[#0F2854]">
                  Product Overview & Material Origin
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {product.overview}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {product.materialDetails}
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
                  Target Applications
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

            {/* Right Column: Technical Specifications & B2B Inquiry Form */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Specification Table */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-[#0F2854] text-white flex items-center justify-between">
                  <h3 className="font-headline-sm text-base font-bold">
                    Technical Specifications
                  </h3>
                  <span className="text-xs text-[#FECE57] font-semibold">
                    HS CODE: 460219
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

              {/* Direct Inquiry Form with Areca Leaf Plates pre-selected */}
              <EnquiryForm
                defaultProduct="Areca Leaf Plates"
                title="Request Areca Leaf Plates Quotation"
                subtitle="Specify required plate sizes (8, 10, or 12 inch), carton counts, and destination port."
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
