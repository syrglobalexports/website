import React from "react";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface SustainabilityProps {
  showFullPageLink?: boolean;
}

export const Sustainability: React.FC<SustainabilityProps> = ({ showFullPageLink = true }) => {
  return (
    <section className="w-full py-12 lg:py-20 bg-[#001911] text-white" id="sustainability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <AnimateOnScroll animation="slideRight" className="lg:col-span-5 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#003024] text-[#9ed1bd] font-label-md text-xs rounded-full w-fit border border-[#1B4D3E]">
              <MaterialIcon name="nature_people" size={16} />
              <span>Responsible Trade Practices</span>
            </div>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Supporting a Greener Future
            </h2>
            <p className="font-body-lg text-base text-[#9ed1bd] italic">
              “At SYR Global Exports, sustainability is an essential operational principle.”
            </p>
            <p className="font-body-md text-sm sm:text-base text-slate-300 leading-relaxed">
              Every container dispatched provides commercial food service with natural alternatives to petroleum-derived single-use plastics. By transforming naturally shed areca palm leaves and upcycling sugarcane bagasse fibers, we facilitate responsible material cycles while supporting rural manufacturing employment.
            </p>

            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#003024] rounded-lg border border-[#1B4D3E]/60 text-center">
                <span className="font-headline-md text-lg sm:text-xl font-bold text-[#FECE57] block">
                  100%
                </span>
                <span className="font-label-sm text-[11px] text-slate-300 uppercase">
                  Plant-Derived
                </span>
              </div>
              <div className="p-3 bg-[#003024] rounded-lg border border-[#1B4D3E]/60 text-center">
                <span className="font-headline-md text-lg sm:text-xl font-bold text-[#FECE57] block">
                  60–90
                </span>
                <span className="font-label-sm text-[11px] text-slate-300 uppercase">
                  Days Compost
                </span>
              </div>
              <div className="p-3 bg-[#003024] rounded-lg border border-[#1B4D3E]/60 text-center">
                <span className="font-headline-md text-lg sm:text-xl font-bold text-[#FECE57] block">
                  0%
                </span>
                <span className="font-label-sm text-[11px] text-slate-300 uppercase">
                  Plastic Resins
                </span>
              </div>
            </div>

            {showFullPageLink && (
              <div className="pt-2">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FECE57] hover:underline"
                >
                  <span>Explore our sustainability initiatives</span>
                  <MaterialIcon name="arrow_forward" size={16} />
                </Link>
              </div>
            )}
          </AnimateOnScroll>

          {/* Core Commitments */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimateOnScroll animation="slideUp" delay={0.1}>
              <div className="p-5 bg-[#003024] rounded-xl border border-[#1B4D3E]/80 flex flex-col gap-2 h-full">
                <div className="w-9 h-9 rounded-lg bg-[#001911] text-[#FECE57] flex items-center justify-center">
                  <MaterialIcon name="compost" size={20} />
                </div>
                <h3 className="font-headline-sm text-base font-bold text-white">
                  Plastic Reduction
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Replacing petroleum polystyrene disposable tableware with biodegradable palm leaf and bagasse fiber alternatives.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slideUp" delay={0.2}>
              <div className="p-5 bg-[#003024] rounded-xl border border-[#1B4D3E]/80 flex flex-col gap-2 h-full">
                <div className="w-9 h-9 rounded-lg bg-[#001911] text-[#FECE57] flex items-center justify-center">
                  <MaterialIcon name="inventory" size={20} />
                </div>
                <h3 className="font-headline-sm text-base font-bold text-white">
                  Eco-Conscious Packaging
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Utilizing recyclable corrugated boxes and unbleached inner partitions designed to reduce unnecessary plastic wraps.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slideUp" delay={0.3}>
              <div className="p-5 bg-[#003024] rounded-xl border border-[#1B4D3E]/80 flex flex-col gap-2 h-full">
                <div className="w-9 h-9 rounded-lg bg-[#001911] text-[#FECE57] flex items-center justify-center">
                  <MaterialIcon name="handshake" size={20} />
                </div>
                <h3 className="font-headline-sm text-base font-bold text-white">
                  Responsible Sourcing
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Direct commercial transactions ensuring fair compensation for smallholder agricultural growers and rural gatherers.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slideUp" delay={0.4}>
              <div className="p-5 bg-[#003024] rounded-xl border border-[#1B4D3E]/80 flex flex-col gap-2 h-full">
                <div className="w-9 h-9 rounded-lg bg-[#001911] text-[#FECE57] flex items-center justify-center">
                  <MaterialIcon name="recycling" size={20} />
                </div>
                <h3 className="font-headline-sm text-base font-bold text-white">
                  Agricultural Byproduct Valorization
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Converting agricultural byproducts (sugarcane bagasse and naturally fallen areca palm fronds) into export-grade commodities.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slideUp" delay={0.5} className="sm:col-span-2">
              <div className="p-5 bg-[#003024] rounded-xl border border-[#1B4D3E]/80 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#001911] text-[#FECE57] flex items-center justify-center shrink-0">
                  <MaterialIcon name="groups" size={22} />
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-white">
                    Supporting Farming Livelihoods & Rural Artisans
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-slate-300 leading-relaxed mt-0.5">
                    Connecting rural producing clusters directly to export markets, fostering localized value creation and village manufacturing across southern India.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
