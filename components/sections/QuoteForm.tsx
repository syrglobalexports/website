"use client";

import React from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/data/company";
import { EnquiryForm } from "./EnquiryForm";

export const QuoteForm: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-20 bg-white" id="quotation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#001337] via-[#0F2854] to-[#0A1C3B] text-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Context & Direct Contact */}
            <AnimateOnScroll animation="slideRight" className="lg:col-span-5 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 bg-[#FECE57] text-[#251a00] font-label-sm text-xs uppercase font-extrabold rounded-full w-fit">
                  B2B International Procurement
                </span>
                <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Ready to Source Sustainable Products?
                </h2>
                <p className="font-body-md text-sm sm:text-base text-slate-300 leading-relaxed">
                  Please reach out to us for a competitive quotation. We offer customized CIF/FOB pricing, sample dispatch, and container optimization for destination ports worldwide.
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 rounded bg-[#0F2854] text-[#FECE57] flex items-center justify-center shrink-0">
                      <MaterialIcon name="person" size={20} />
                    </div>
                    <div>
                      <p className="font-label-sm text-xs text-[#FECE57] uppercase font-bold">
                        Key Export Executive
                      </p>
                      <p className="font-headline-sm text-sm font-semibold text-white">
                        {COMPANY.personnel.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 rounded bg-[#0F2854] text-[#FECE57] flex items-center justify-center shrink-0">
                      <MaterialIcon name="schedule" size={20} />
                    </div>
                    <div>
                      <p className="font-label-sm text-xs text-[#FECE57] uppercase font-bold">
                        Response SLA
                      </p>
                      <p className="font-headline-sm text-sm font-semibold text-white">
                        Within 12 Hours Guaranteed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-10 h-10 rounded bg-[#0F2854] text-[#FECE57] flex items-center justify-center shrink-0">
                      <MaterialIcon name="verified_user" size={20} />
                    </div>
                    <div>
                      <p className="font-label-sm text-xs text-[#FECE57] uppercase font-bold">
                        Compliance Standards
                      </p>
                      <p className="font-headline-sm text-xs font-semibold text-white">
                        IEC • FIEO • GST • UDYAM Registered
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Instant Contact Action */}
              <div className="pt-6 mt-6 border-t border-slate-700 flex flex-col gap-2">
                <span className="font-label-sm text-xs text-slate-400">
                  Prefer instant communication?
                </span>
                <a
                  href={`https://wa.me/919566592183?text=${encodeURIComponent(
                    "Hello SYR Global Exports, I would like to request an export quotation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-md font-label-lg text-sm font-bold flex items-center justify-center gap-2 shadow transition-all border border-emerald-700"
                >
                  <MaterialIcon name="chat" size={18} />
                  <span>Direct WhatsApp RFQ (+91 9566592183)</span>
                </a>
              </div>
            </AnimateOnScroll>

            {/* Right Column: Interactive Quotation Form */}
            <AnimateOnScroll animation="slideLeft" className="lg:col-span-7">
              <EnquiryForm
                title="Submit Request for Quotation"
                subtitle="Fill in your procurement specifications and our trade desk will reply with proforma rates."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
