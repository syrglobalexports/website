import React from "react";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface ForwardBookingCTAProps {
  className?: string;
  variant?: "banner" | "card";
}

export const ForwardBookingCTA: React.FC<ForwardBookingCTAProps> = ({
  className = "",
  variant = "banner",
}) => {
  return (
    <section
      aria-label="Advance contracts and forward booking"
      className={`w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#001337] via-[#0F2854] to-[#001911] text-white border border-[#C59B27]/40 shadow-xl ${className}`}
    >
      <div className="max-w-6xl mx-auto p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B4D3E] text-emerald-200 rounded-full w-fit text-xs font-bold uppercase tracking-wider font-label-sm border border-emerald-500/30">
            <MaterialIcon name="schedule" size={15} />
            <span>Forward Supply Program</span>
          </div>

          {/* Prominent Headline as required */}
          <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Advance contracts and forward booking now accepted
          </h2>

          <p className="font-body-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Secure seasonal crop allocations and commercial manufacturing capacity with locked-in export rates, scheduled dispatch containers, and direct port dispatch.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 items-start md:items-end">
          {/* Prominent CTA Button as required */}
          <Link
            href="/contact?intent=forward-booking"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FECE57] hover:bg-[#ffdf98] text-[#251a00] font-headline-sm text-base sm:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-[#eec14b] group"
          >
            <span>Register Forward Interest</span>
            <MaterialIcon
              name="arrow_forward"
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <span className="text-xs text-slate-400 font-label-sm tracking-wide">
            Flexible IncoTerms • Direct Port Dispatch
          </span>
        </div>
      </div>
    </section>
  );
};
