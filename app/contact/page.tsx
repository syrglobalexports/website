import type { Metadata } from "next";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { COMPANY } from "@/data/company";
import { ContactSection } from "@/components/sections/ContactSection";
import { ForwardBookingCTA } from "@/components/sections/ForwardBookingCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us & Commercial RFQ | SYR Global Exports",
  description:
    "Direct export inquiries, overseas distributor partnerships, and FOB/CIF proforma requests with SYR Global Exports. Reach our trade desk in Ponneri, Tamil Nadu.",
  alternates: {
    canonical: "https://syrglobalexport.com/contact",
  },
  openGraph: {
    title: "Contact Us & Commercial RFQ | SYR Global Exports",
    description:
      "Direct export inquiries, bulk container bookings, and compliance verification with SYR Global Exports trade desk.",
    url: "https://syrglobalexport.com/contact",
    siteName: "SYR Global Exports",
    images: [{ url: "/logo.png", width: 600, height: 600, alt: "SYR Global Exports Contact" }],
  },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
        ]}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#001337] via-[#0F2854] to-[#0A1C3B] text-white py-10 lg:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#FECE57] rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-white/10">
              <MaterialIcon name="support_agent" size={14} />
              <span>International Trade Desk</span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact & Commercial RFQ
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our export secretariat for CIF/FOB proforma pricing, commercial container bookings, sample requests, and compliance verification.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Contact Information & Form */}
      <ContactSection showForm={true} />

      {/* Advance Contracts & Forward Booking CTA */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForwardBookingCTA />
        </div>
      </section>
    </main>
  );
}
