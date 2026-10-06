import React from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface Pillar {
  number: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

const PILLARS: Pillar[] = [
  {
    number: "1",
    title: "1. Eco-Conscious Business",
    description:
      "We focus strictly on sustainable and biodegradable alternatives that systematically reduce global environmental impact and curb landfill burden.",
    highlight: "Zero Synthetic Additives",
    icon: "compost",
  },
  {
    number: "2",
    title: "2. Trusted Supplier Network",
    description:
      "Products sourced directly from primary farmers, regional agricultural clusters, and verified green tableware manufacturing units.",
    highlight: "Farm-to-Container Traceability",
    icon: "handshake",
  },
  {
    number: "3",
    title: "3. Quality Assurance",
    description:
      "Multi-tier quality inspections evaluate dimensions, thickness, rigidity, moisture percentage (< 10%), and clean visual aesthetics prior to container sealing.",
    highlight: "Rigorous Pre-Shipment QC",
    icon: "verified",
  },
  {
    number: "4",
    title: "4. Export Packaging Standards",
    description:
      "Export-grade master corrugated cartons, food-grade shrink wrap, moisture desiccants, and container stuffing optimization for safe oceanic transit.",
    highlight: "Custom Packing & Barcoding",
    icon: "package_2",
  },
  {
    number: "5",
    title: "5. Global Logistics & Port Proximity",
    description:
      "Immediate arterial road proximity to major deep-water seaports (Chennai Seaport ~35 km & Ennore/Kattupalli Ports ~28 km) minimizes domestic transit time.",
    highlight: "FOB, CIF, CFR & Air Cargo",
    icon: "directions_boat",
  },
  {
    number: "6",
    title: "6. Direct Commercial Pricing",
    description:
      "Direct farmgate and producer sourcing ensures competitive, stable pricing structures for long-term international procurement contracts.",
    highlight: "Direct Manufacturer Rates",
    icon: "price_check",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeIn" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#C59B27] font-label-sm text-xs uppercase tracking-wider font-bold">
            Built for Global Trade
          </span>
          <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-[#0F2854] font-extrabold mt-1 tracking-tight">
            Why Choose SYR Global Exports
          </h2>
          <p className="font-body-md text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Strict export quality standards, verified statutory compliance, and reliable supply chains serving buyers worldwide.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <AnimateOnScroll
              key={pillar.number}
              animation="slideUp"
              delay={idx * 0.08}
              className="p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0F2854] text-[#FECE57] flex items-center justify-center shrink-0">
                <MaterialIcon name={pillar.icon} size={24} />
              </div>
              <h3 className="font-headline-md text-base sm:text-lg text-[#0F2854] font-bold">
                {pillar.title}
              </h3>
              <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
              <div className="mt-auto pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-[#C59B27]">
                <MaterialIcon name="check" size={14} />
                <span>{pillar.highlight}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
