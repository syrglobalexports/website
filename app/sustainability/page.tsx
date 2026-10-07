import type { Metadata } from "next";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ForwardBookingCTA } from "@/components/sections/ForwardBookingCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Sustainability & Natural Materials | SYR Global Exports",
  description:
    "Learn about our responsible sourcing, natural biodegradable materials, and commitment to reducing single-use plastic pollution across international supply chains.",
  alternates: {
    canonical: "https://syrglobalexport.com/sustainability",
  },
  openGraph: {
    title: "Sustainability & Natural Materials | SYR Global Exports",
    description:
      "100% natural fallen palm leaves and upcycled sugarcane bagasse fibers replacing petroleum single-use plastics.",
    url: "https://syrglobalexport.com/sustainability",
    siteName: "SYR Global Exports",
    images: [{ url: "/logo.png", width: 600, height: 600, alt: "SYR Global Exports Sustainability" }],
  },
};

export default function SustainabilityPage() {
  return (
    <main className="w-full bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Sustainability", url: "/sustainability" },
        ]}
      />
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#001911] via-[#003024] to-[#0F2854] text-white py-10 lg:py-14 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-emerald-300 rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-white/10">
              <MaterialIcon name="eco" size={14} />
              <span>Environmental Responsibility</span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold tracking-tight">
              Sustainability & Natural Materials
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-emerald-100 leading-relaxed">
              Replacing conventional single-use petroleum plastics with verified, plant-derived alternatives sourced responsibly from agricultural byproducts.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <span className="text-[#C59B27] font-label-sm text-xs uppercase tracking-wider font-bold">
                  Core Sourcing Principles
                </span>
                <h2 className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-[#0F2854] mt-1">
                  Responsible Byproduct Valorization
                </h2>
                <p className="font-body-md text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
                  At SYR Global Exports, our environmental mission focuses on the practical displacement of single-use petroleum plastics in commercial food service, hospitality, and event catering. Rather than cultivating monocultures or consuming virgin timber, our biodegradable tableware lines rely entirely on upcycling agricultural residues that would otherwise be discarded or burned.
                </p>
              </div>

              {/* Two Core Raw Material Cycles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <MaterialIcon name="park" size={22} />
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-[#0F2854]">
                    Areca Palm Fronds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Harvested only after leaves fall naturally from the palm tree during seasonal shedding cycles. Zero deforestation, zero chemical additives, and zero synthetic binders.
                  </p>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase mt-auto">
                    • 100% Fallen Leaf Fiber
                  </span>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <MaterialIcon name="recycling" size={22} />
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-[#0F2854]">
                    Sugarcane Bagasse Pulp
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovered from agricultural sugarcane pressing residues. The fibrous stalks are pulped and molded under thermal pressure into high-strength cutlery and food containers.
                  </p>
                  <span className="text-[11px] font-bold text-amber-800 uppercase mt-auto">
                    • 100% Upcycled Plant Fiber
                  </span>
                </div>
              </div>

              {/* Practical Reduction Goals */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <h3 className="font-headline-sm text-lg font-bold text-[#0F2854]">
                  Key Sustainable Commitments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MaterialIcon name="check_circle" size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Zero Plastic Formulation:</strong>
                      No polyethylene liners, wax glazes, or petroleum plastic coatings.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MaterialIcon name="check_circle" size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Soil Compostability:</strong>
                      Natural breakdown in commercial and home soil conditions within 60 to 90 days.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MaterialIcon name="check_circle" size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Recyclable Packaging:</strong>
                      Cartons constructed from multi-ply corrugated paperboard with minimal ink coverage.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MaterialIcon name="check_circle" size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Rural Artisan Livelihoods:</strong>
                      Fosters localized village-level employment for gatherers and machine operators.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Honest Environmental Facts */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#001911] text-white p-6 rounded-xl shadow-md border border-[#003024] flex flex-col gap-4">
                <span className="text-xs font-bold text-[#FECE57] uppercase tracking-wider font-label-sm">
                  Grounded Verification
                </span>
                <h3 className="font-headline-sm text-lg font-bold">
                  Our Transparency Commitment
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We believe international trade must be based on verifiable reality rather than exaggerated environmental buzzwords. We make clear, verifiable statements:
                </p>
                <div className="flex flex-col gap-3 text-xs text-emerald-100">
                  <div className="p-3 bg-[#003024] rounded-lg border border-[#1B4D3E]/60">
                    <strong className="text-white block mb-0.5">What our tableware is:</strong>
                    Natural, compostable, chemical-free, agricultural residue upcycling.
                  </div>
                  <div className="p-3 bg-[#003024] rounded-lg border border-[#1B4D3E]/60">
                    <strong className="text-white block mb-0.5">What we do not claim:</strong>
                    We avoid unsubstantiated claims such as &quot;carbon neutral shipping&quot; or &quot;zero environmental footprint&quot; which cannot be independently measured.
                  </div>
                </div>
              </div>

              {/* Port & Logistics Integration */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <h3 className="font-headline-sm text-base font-bold text-[#0F2854]">
                  Sustainable Logistics & Container Stuffing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We maximize cubic meter container utilization per shipment, avoiding empty space and optimizing ocean freight carbon efficiency per kilogram of cargo dispatched.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#C59B27] hover:underline flex items-center gap-1 mt-1"
                >
                  <span>Inquire about container volume optimization</span>
                  <MaterialIcon name="arrow_forward" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forward Booking CTA */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForwardBookingCTA />
        </div>
      </section>
    </main>
  );
}
