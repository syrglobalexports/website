import type { Metadata } from "next";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { EXPORT_COMPLIANCE_ITEMS, THIRD_PARTY_INSPECTION_NOTE } from "@/data/certifications";
import { COMPANY } from "@/data/company";
import { ForwardBookingCTA } from "@/components/sections/ForwardBookingCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Export Compliance & Certifications | SYR Global Exports",
  description:
    "Export Compliance Assured: IEC, FIEO, GST, UDYAM Registered. Third-party inspection can be facilitated upon buyer request. View our certifications.",
  alternates: {
    canonical: "https://syrglobalexport.com/export-compliance",
  },
  openGraph: {
    title: "Export Compliance & Certifications | SYR Global Exports",
    description:
      "IEC, FIEO, GST, UDYAM registered merchant exporter. Full pre-shipment documentation and third-party inspection assurance.",
    url: "https://syrglobalexport.com/export-compliance",
    siteName: "SYR Global Exports",
    images: [{ url: "/logo.png", width: 600, height: 600, alt: "SYR Global Exports Compliance" }],
  },
};

export default function ExportCompliancePage() {
  return (
    <main className="w-full bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Export Compliance", url: "/export-compliance" },
        ]}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#001337] via-[#0F2854] to-[#0A1C3B] text-white py-10 lg:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-emerald-300 rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-white/10">
              <MaterialIcon name="gavel" size={14} />
              <span>International Trade Governance</span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold tracking-tight">
              Export Compliance Assured
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold font-label-md text-[#FECE57]">
              <span className="px-3 py-1 bg-white/10 rounded border border-white/15">[ IEC ]</span>
              <span className="px-3 py-1 bg-white/10 rounded border border-white/15">[ FIEO ]</span>
              <span className="px-3 py-1 bg-white/10 rounded border border-white/15">[ GST ]</span>
              <span className="px-3 py-1 bg-white/10 rounded border border-white/15">[ UDYAM Registered ]</span>
            </div>
            <p className="font-body-lg text-base sm:text-lg text-slate-300 leading-relaxed mt-1">
              Fully accredited and registered to execute cross-border commercial transactions under Indian DGFT and international customs frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Compliance Cards Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C59B27] font-label-sm text-xs uppercase tracking-wider font-bold">
              Statutory Registrations
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-[#0F2854] mt-1">
              Verified Legal Credentials
            </h2>
            <p className="font-body-md text-sm text-slate-600 mt-2">
              Official registration profiles maintaining commercial validity across customs authorities and international maritime shipping lines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPORT_COMPLIANCE_ITEMS.map((item) => (
              <div
                key={item.code}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-2xl font-extrabold text-[#0F2854]">
                      {item.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-sm font-bold text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="font-body-sm text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{item.authority}</span>
                  <MaterialIcon name="verified_user" size={16} className="text-[#C59B27]" />
                </div>
              </div>
            ))}
          </div>

          {/* Third-Party Inspection Highlight Card */}
          <div className="mt-10 p-6 sm:p-8 bg-white border border-[#C59B27] rounded-2xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FECE57]/20 text-[#775a00] flex items-center justify-center shrink-0">
                <MaterialIcon name="fact_check" size={26} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] font-label-sm">
                  Independent Quality Verification
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-[#0F2854] mt-0.5">
                  {THIRD_PARTY_INSPECTION_NOTE}
                </h3>
                <p className="font-body-sm text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  We welcome independent third-party inspection agencies (such as SGS, Intertek, Bureau Veritas, or buyer-appointed inspection surveyors) to verify batch counts, dimensions, visual purity, moisture percentage, and container stuffing at our packhouse or warehouse prior to final container sealing.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0F2854] hover:bg-[#001337] text-white font-label-lg font-bold text-sm rounded-md shadow shrink-0 transition-colors"
            >
              Request Inspection Terms
            </Link>
          </div>

          {/* Shipping & Customs Operational Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2854] text-[#FECE57] flex items-center justify-center">
                <MaterialIcon name="description" size={22} />
              </div>
              <h3 className="font-headline-sm text-base font-bold text-[#0F2854]">
                Export Documentation Package
              </h3>
              <p className="font-body-sm text-xs text-slate-600 leading-relaxed">
                Full documentation set provided with every dispatch: Commercial Invoice, Packing List, Bill of Lading (B/L) or Air Waybill (AWB), Certificate of Origin (COO), and Phytosanitary Certificate where applicable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2854] text-[#FECE57] flex items-center justify-center">
                <MaterialIcon name="directions_boat" size={22} />
              </div>
              <h3 className="font-headline-sm text-base font-bold text-[#0F2854]">
                Commercial Incoterms (2020)
              </h3>
              <p className="font-body-sm text-xs text-slate-600 leading-relaxed">
                We accommodate FOB (Free on Board from Chennai / Ennore), CIF (Cost, Insurance & Freight to your destination seaport), CFR (Cost & Freight), and EXW (Ex-Works) per your procurement preference.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2854] text-[#FECE57] flex items-center justify-center">
                <MaterialIcon name="inventory" size={22} />
              </div>
              <h3 className="font-headline-sm text-base font-bold text-[#0F2854]">
                Container Stuffing Protocols
              </h3>
              <p className="font-body-sm text-xs text-slate-600 leading-relaxed">
                Rigid master cartons palletized with corner protectors, heavy-duty strapping, container moisture absorption desiccants, and photographic proof provided prior to container sealing.
              </p>
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
