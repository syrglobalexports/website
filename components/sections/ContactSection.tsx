import React from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/data/company";
import { EnquiryForm } from "./EnquiryForm";

interface ContactSectionProps {
  showForm?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ showForm = true }) => {
  return (
    <section className="w-full py-12 lg:py-20 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Official Trade Office Details */}
          <AnimateOnScroll
            animation="slideRight"
            className={`${showForm ? "lg:col-span-5" : "lg:col-span-12"} flex flex-col gap-6`}
          >
            <div>
              <span className="text-[#C59B27] font-label-sm text-xs uppercase tracking-wider font-bold">
                Registered Headquarters & Trade Secretariat
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-[#0F2854] font-extrabold mt-1 tracking-tight">
                Get in Touch
              </h2>
              <p className="font-body-md text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Connect directly with our export operations desk for overseas procurement, container allocation, and commercial contract inquiries.
              </p>
            </div>

            {/* Official Business Card */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-[#C59B27] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-headline-md text-lg font-bold text-[#0F2854]">
                    {COMPANY.personnel.name}
                  </p>
                  <p className="font-label-md text-xs text-[#C59B27] font-bold uppercase tracking-wider">
                    {COMPANY.personnel.title} • {COMPANY.personnel.desk}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F2854] text-[#FECE57] flex items-center justify-center font-bold text-sm">
                  SYR
                </div>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wide font-label-sm pt-1">
                {COMPANY.name} • Importer | Exporter • Global Trade Solutions
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#0F2854] flex items-center justify-center shrink-0 mt-0.5">
                  <MaterialIcon name="location_on" size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#C59B27] font-label-sm block">
                    Registered Office Address
                  </span>
                  <p className="font-body-md text-sm text-slate-800 font-medium mt-0.5">
                    {COMPANY.office.address}
                  </p>
                  <span className="text-xs text-slate-500 mt-0.5 block">
                    {COMPANY.office.ports}
                  </span>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#0F2854] flex items-center justify-center shrink-0 mt-0.5">
                  <MaterialIcon name="call" size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#C59B27] font-label-sm block">
                    Direct Phone Lines & WhatsApp
                  </span>
                  <p className="font-body-md text-sm text-slate-800 font-semibold mt-0.5">
                    {COMPANY.phones.join(" • ")}
                  </p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#0F2854] flex items-center justify-center shrink-0 mt-0.5">
                  <MaterialIcon name="mail" size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#C59B27] font-label-sm block">
                    Export Inboxes
                  </span>
                  <p className="font-body-md text-sm text-slate-800 mt-0.5">
                    <a href={`mailto:${COMPANY.emails.primary}`} className="hover:underline font-semibold text-[#0F2854]">
                      {COMPANY.emails.primary}
                    </a>
                  </p>
                  <p className="font-body-md text-sm text-slate-600">
                    <a href={`mailto:${COMPANY.emails.secondary}`} className="hover:underline">
                      {COMPANY.emails.secondary}
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-[#0F2854] flex items-center justify-center shrink-0 mt-0.5">
                  <MaterialIcon name="schedule" size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#C59B27] font-label-sm block">
                    Business Hours
                  </span>
                  <p className="font-body-md text-sm text-slate-800 mt-0.5">
                    {COMPANY.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Trade Incoterms Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-md shadow-sm">
                Incoterms: FOB, CIF, CFR
              </span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-md shadow-sm">
                Letter of Credit (L/C) & T/T
              </span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-md shadow-sm">
                Ocean FCL & Air Cargo
              </span>
            </div>
          </AnimateOnScroll>

          {/* Right: Embedded Form */}
          {showForm && (
            <AnimateOnScroll animation="slideLeft" className="lg:col-span-7">
              <EnquiryForm
                title="Send Commercial Enquiry"
                subtitle="Specify your required quantities, destination port, or forward booking requirement."
              />
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </section>
  );
};
