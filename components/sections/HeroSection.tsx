import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { COMPANY } from "@/data/company";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-slate-50 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Clean, Authoritative B2B Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-[#0F2854] font-label-md text-xs rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
              <span className="font-semibold uppercase tracking-wider">
                Government Registered Export Merchant House
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-display-lg text-3xl sm:text-5xl lg:text-6xl text-[#0F2854] font-extrabold tracking-tight leading-[1.12]">
                Exporting Sustainable Products for Global Trade
              </h1>
              <p className="font-headline-md text-lg sm:text-xl text-[#C59B27] font-bold">
                100% Biodegradable Tableware & Fresh Agricultural Commodities
              </p>
            </div>

            <p className="font-body-md text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              We supply wholesale importers and distributors worldwide with natural Areca leaf plates, sugarcane bagasse cutlery, and export-grade fresh green chillies—sourced directly from certified Indian farms and rural manufacturers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-[#FECE57] hover:bg-[#ffdf98] text-[#251a00] font-bold text-sm rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 border border-[#eec14b]"
              >
                <MaterialIcon name="request_quote" size={18} />
                <span>Request a Quote</span>
              </Link>
              <Link
                href="/products"
                className="px-6 py-3.5 bg-[#0F2854] hover:bg-[#001337] text-white font-semibold text-sm rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <MaterialIcon name="grid_view" size={18} />
                <span>Explore Products</span>
              </Link>
              <a
                href="https://wa.me/919566592183"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-slate-700 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1.5 transition-colors"
              >
                <MaterialIcon name="chat" size={18} className="text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Clean Trust Pillars (Single horizontal line, uncluttered) */}
            <div className="pt-4 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <MaterialIcon name="verified" size={16} className="text-emerald-600" />
                IEC • FIEO • GST • UDYAM
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <MaterialIcon name="eco" size={16} className="text-emerald-600" />
                100% Plant-Derived
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <MaterialIcon name="anchor" size={16} className="text-[#C59B27]" />
                Port Hub: Chennai / Ennore
              </span>
            </div>
          </div>

          {/* Right: Clean, Crisp Showcase Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyxfZQaWrJ1--o5ZG6EGi0rHwXv46d9DhC09ltiljnHDjOTiH0-Qi4Va9GkcEur-jJ-ruNg_2Gr4w8tX6xERRwB0px8ivGkTfg_SOC6PLRyoG9VuOLaohDnEHqESl1rmsXVcUMwU2EJSXA45K5aRACcM2PsjvcD8F0DX7BxeBJ9LMV1aF2fGIsatJqjwxRTvLV1M28-RqdhWVD3i3dyydhl3y0CMnULLTgG-ZwRO4DdrH0OkXGPyf2"
                  alt="Biodegradable Areca Palm Leaf and Sugarcane Bagasse tableware products"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0F2854]/95 backdrop-blur-md rounded-xl text-white flex items-center justify-between border border-white/10 shadow-lg">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FECE57] font-label-sm block">
                    Zero-Plastic Commercial Solutions
                  </span>
                  <p className="font-headline-sm text-sm sm:text-base font-bold mt-0.5">
                    Sustainable Tableware & Agri Produce
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MaterialIcon name="eco" size={22} className="text-[#FECE57]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
