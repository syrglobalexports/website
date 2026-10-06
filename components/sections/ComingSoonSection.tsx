import React from "react";
import Link from "next/link";
import { UPCOMING_PRODUCTS } from "@/data/products";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export const ComingSoonSection: React.FC = () => {
  return (
    <section id="coming-soon" className="w-full py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#001337] via-[#0F2854] to-[#0A1C3B] text-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden border border-slate-700/60">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#FECE57]/10 pointer-events-none blur-2xl" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-[#1B4D3E]/20 pointer-events-none blur-2xl" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FECE57]/20 text-[#ffdf98] font-label-sm text-xs font-bold uppercase tracking-wider rounded border border-[#FECE57]/30">
                <MaterialIcon name="schedule" size={14} />
                <span>Export Pipeline Expansion</span>
              </div>
              <span className="text-xs text-slate-300 font-label-sm uppercase tracking-wider">
                Upcoming Trade Lines
              </span>
            </div>

            <div className="max-w-3xl flex flex-col gap-3">
              <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                More Products Coming Soon
              </h2>
              <p className="font-body-md text-base sm:text-lg text-slate-200 leading-relaxed">
                We are continuously expanding our range of sustainable and export-ready products. Stay connected to discover our upcoming product categories.
              </p>
            </div>

            {/* Upcoming Product Teasers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {UPCOMING_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#001337]/70 backdrop-blur-sm p-5 rounded-xl border border-slate-700/70 flex flex-col gap-2 hover:border-[#FECE57]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F2854] text-[#FECE57] flex items-center justify-center">
                    <MaterialIcon name={prod.icon} size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-label-sm">
                    {prod.category}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Advance Contracts & Forward Booking Notice Bar */}
            <div className="mt-6 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-headline-sm text-lg sm:text-xl font-bold text-[#ffdf98]">
                  Advance contracts and forward booking now accepted
                </span>
                <span className="text-xs text-slate-300">
                  Plan ahead with scheduled container shipments and stable procurement rates.
                </span>
              </div>

              <Link
                href="/contact?intent=forward-booking"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FECE57] hover:bg-[#ffdf98] text-[#251a00] font-headline-sm text-sm sm:text-base font-bold rounded-lg shadow-md transition-all shrink-0 border border-[#eec14b]"
              >
                <span>Register Forward Interest</span>
                <MaterialIcon name="arrow_forward" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
