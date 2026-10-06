import React from "react";
import { EXPORT_COMPLIANCE_ITEMS, THIRD_PARTY_INSPECTION_NOTE } from "@/data/certifications";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface CertificationsProps {
  showTitle?: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ showTitle = true }) => {
  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50" id="compliance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <AnimateOnScroll animation="fadeIn" className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-[#0F2854] font-label-sm text-xs uppercase tracking-wider font-bold rounded-full mb-3 shadow-sm">
              <MaterialIcon name="verified" size={15} className="text-[#C59B27]" />
              <span>Statutory Trade Credentials</span>
            </div>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-[#0F2854] font-extrabold tracking-tight">
              Export Compliance Assured
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs sm:text-sm font-bold text-slate-700 font-label-md">
              <span className="px-3 py-1 bg-[#0F2854] text-white rounded-md">IEC</span>
              <span className="px-3 py-1 bg-[#0F2854] text-white rounded-md">FIEO</span>
              <span className="px-3 py-1 bg-[#0F2854] text-white rounded-md">GST</span>
              <span className="px-3 py-1 bg-[#0F2854] text-white rounded-md">UDYAM Registered</span>
            </div>
            <p className="font-body-md text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Authorized and fully registered under Indian and international commerce regulations to conduct global export transactions.
            </p>
          </AnimateOnScroll>
        )}

        {/* 4 Compliance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {EXPORT_COMPLIANCE_ITEMS.map((item) => (
            <AnimateOnScroll key={item.code} animation="slideUp" className="h-full">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2.5">
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

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-label-sm">
                  <span>{item.authority}</span>
                  <MaterialIcon name="verified_user" size={15} className="text-[#C59B27]" />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Third-Party Inspection Statement Box (Mandatory Requirement 16) */}
        <AnimateOnScroll animation="fadeIn" className="mt-8">
          <div className="p-4 sm:p-5 bg-white border border-[#C59B27]/40 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FECE57]/20 text-[#775a00] flex items-center justify-center shrink-0">
                <MaterialIcon name="fact_check" size={22} />
              </div>
              <div>
                <p className="font-headline-sm text-sm sm:text-base font-bold text-[#0F2854]">
                  {THIRD_PARTY_INSPECTION_NOTE}
                </p>
                <p className="font-body-sm text-xs text-slate-600 mt-0.5">
                  Independent international survey agencies (such as SGS, Intertek, or buyer-nominated inspectors) can inspect batch weight, count, dimensions, and moisture prior to container sealing.
                </p>
              </div>
            </div>
            <span className="shrink-0 px-3 py-1.5 bg-slate-100 text-slate-800 text-xs font-semibold rounded-md border border-slate-200 self-start sm:self-center">
              Buyer Facilitated
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
