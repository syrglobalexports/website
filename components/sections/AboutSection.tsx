import React from "react";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/data/company";

interface AboutSectionProps {
  showFullProfileLink?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ showFullProfileLink = true }) => {
  return (
    <section className="w-full py-12 lg:py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <AnimateOnScroll
            animation="slideRight"
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-[#C59B27] font-label-sm text-xs uppercase tracking-wider font-bold">
              <span className="w-6 h-[2px] bg-[#C59B27]" />
              <span>Institutional Profile</span>
            </div>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-[#0F2854] font-extrabold tracking-tight">
              Welcome to SYR Global Exports
            </h2>
            <p className="font-body-md text-sm sm:text-base text-slate-700 leading-relaxed">
              SYR Global Exports is committed to promoting environmentally responsible trade by supplying high-grade agricultural commodities and biodegradable products to international markets. Our objective is to support sustainable commerce by connecting global buyers with eco-conscious products sourced directly from regional farms and verified rural industries.
            </p>

            {/* Executive Card */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0F2854] text-[#FECE57] flex items-center justify-center font-headline-md text-base font-bold shrink-0">
                YS
              </div>
              <div>
                <p className="font-headline-sm text-sm sm:text-base text-[#0F2854] font-bold">
                  {COMPANY.personnel.name}
                </p>
                <p className="font-label-md text-xs text-[#C59B27] font-bold uppercase tracking-wider">
                  {COMPANY.personnel.title} • {COMPANY.personnel.desk}
                </p>
                <p className="font-body-sm text-xs text-slate-600 mt-0.5">
                  Overseeing export compliance, customs logistics, and international commercial dispatch.
                </p>
              </div>
            </div>

            {showFullProfileLink && (
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2854] hover:text-[#C59B27] transition-colors"
                >
                  <span>Learn more about our trade philosophy</span>
                  <MaterialIcon name="arrow_forward" size={16} />
                </Link>
              </div>
            )}
          </AnimateOnScroll>

          {/* Vision & Mission Split Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <AnimateOnScroll animation="slideUp" delay={0.1} className="h-full">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F2854] text-white flex items-center justify-center">
                    <MaterialIcon name="visibility" size={22} />
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-xl text-[#0F2854] font-bold">
                    Our Vision
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To become a dependable global supplier of sustainable agricultural and biodegradable products, setting an uncompromising standard for responsible cross-border trade, zero-plastic alternatives, and transparent farm-direct supply chains.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <span className="font-label-sm text-xs uppercase font-bold text-[#C59B27]">
                    Pillar: Ecological Stewardship
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Mission */}
            <AnimateOnScroll animation="slideUp" delay={0.2} className="h-full">
              <div className="bg-[#0F2854] text-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full border border-[#0F2854]">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FECE57] text-[#251a00] flex items-center justify-center">
                    <MaterialIcon name="track_changes" size={22} />
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-xl font-bold">
                    Our Mission
                  </h3>
                  <ul className="flex flex-col gap-2 font-body-sm text-xs sm:text-sm text-slate-200 pt-1">
                    <li className="flex items-start gap-2">
                      <MaterialIcon
                        name="check_circle"
                        size={16}
                        className="text-[#FECE57] shrink-0 mt-0.5"
                      />
                      <span>Promote eco-friendly, compostable alternatives worldwide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MaterialIcon
                        name="check_circle"
                        size={16}
                        className="text-[#FECE57] shrink-0 mt-0.5"
                      />
                      <span>Empower smallholder farmers & regional rural artisans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MaterialIcon
                        name="check_circle"
                        size={16}
                        className="text-[#FECE57] shrink-0 mt-0.5"
                      />
                      <span>Drastically diminish single-use plastic waste at scale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MaterialIcon
                        name="check_circle"
                        size={16}
                        className="text-[#FECE57] shrink-0 mt-0.5"
                      />
                      <span>Deliver reliable, certified export services globally</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-700">
                  <span className="font-label-sm text-xs uppercase font-bold text-[#FECE57]">
                    Commitment: 100% Verified Quality
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
