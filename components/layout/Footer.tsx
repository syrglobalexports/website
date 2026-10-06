import React from "react";
import Link from "next/link";
import { COMPANY } from "@/data/company";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Logo } from "@/components/ui/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#001337] text-slate-300 border-t border-slate-800">
      {/* Top Compliance Assurance Strip */}
      <div className="w-full bg-[#0F2854] text-white py-3.5 px-4 sm:px-6 lg:px-8 border-b border-primary-container/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-label-md">
          <div className="flex items-center gap-2">
            <MaterialIcon name="verified" size={18} className="text-secondary-fixed shrink-0" />
            <span className="font-semibold tracking-wide">
              Export Compliance Assured: IEC • FIEO • GST • UDYAM Registered
            </span>
          </div>
          <span className="text-surface-dim italic text-xs hidden md:inline-block">
            “{COMPANY.motto}”
          </span>
        </div>
      </div>

      {/* Main 4-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Company Profile (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo variant="light" size="md" showText={true} />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-1">
              Government Registered Indian Export Merchant House supplying sustainable agricultural commodities and 100% natural, biodegradable products to international trade partners and commercial buyers worldwide.
            </p>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex flex-col gap-1 max-w-sm">
              <span className="text-xs font-bold text-secondary-fixed uppercase tracking-wider font-label-sm">
                Executive Trade Desk
              </span>
              <p className="text-sm font-semibold text-white">
                {COMPANY.personnel.name} — {COMPANY.personnel.title}
              </p>
              <p className="text-xs text-slate-400">
                {COMPANY.personnel.desk}
              </p>
            </div>
          </div>

          {/* Column 2: Core Product Lines (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-label-sm border-b border-slate-800 pb-2">
              Products
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/products/areca-leaf-plates"
                  className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5"
                >
                  <MaterialIcon name="chevron_right" size={16} className="text-secondary-fixed" />
                  <span>Areca Leaf Plates (Round Only)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/green-chilli"
                  className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5"
                >
                  <MaterialIcon name="chevron_right" size={16} className="text-secondary-fixed" />
                  <span>Green Chilli (G4 & Teja)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/biodegradable-cutlery"
                  className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5"
                >
                  <MaterialIcon name="chevron_right" size={16} className="text-secondary-fixed" />
                  <span>Biodegradable Cutlery (Sugarcane Bagasse)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products#coming-soon"
                  className="hover:text-secondary-fixed transition-colors flex items-center gap-1.5 text-slate-400"
                >
                  <MaterialIcon name="chevron_right" size={16} className="text-secondary-fixed/70" />
                  <span>More Products — Coming Soon</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xs text-secondary-fixed hover:underline font-semibold mt-1 flex items-center gap-1"
                >
                  <span>Explore Full Catalog</span>
                  <MaterialIcon name="arrow_forward" size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business & Institutional (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-label-sm border-b border-slate-800 pb-2">
              Business
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary-fixed transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-secondary-fixed transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/export-compliance" className="hover:text-secondary-fixed transition-colors">
                  Export & Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-fixed transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?intent=forward-booking"
                  className="text-secondary-fixed font-semibold hover:underline"
                >
                  Register Forward Interest
                </Link>
              </li>
            </ul>

            <div className="mt-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5 font-label-sm">
                Compliance
              </span>
              <div className="flex flex-wrap gap-1">
                <span className="bg-slate-800 text-secondary-fixed px-2 py-0.5 rounded text-[11px] font-bold">
                  IEC
                </span>
                <span className="bg-slate-800 text-secondary-fixed px-2 py-0.5 rounded text-[11px] font-bold">
                  FIEO
                </span>
                <span className="bg-slate-800 text-secondary-fixed px-2 py-0.5 rounded text-[11px] font-bold">
                  GST
                </span>
                <span className="bg-slate-800 text-secondary-fixed px-2 py-0.5 rounded text-[11px] font-bold">
                  UDYAM
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Export Secretariat Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-label-sm border-b border-slate-800 pb-2">
              Export Secretariat
            </h3>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MaterialIcon name="business" size={18} className="text-secondary-fixed shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {COMPANY.office.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MaterialIcon name="call" size={18} className="text-secondary-fixed shrink-0 mt-0.5" />
                <span className="text-xs font-medium">
                  {COMPANY.phones.join(" • ")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="mail" size={18} className="text-secondary-fixed shrink-0" />
                <a
                  href={`mailto:${COMPANY.emails.primary}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {COMPANY.emails.primary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="schedule" size={18} className="text-secondary-fixed shrink-0" />
                <span className="text-xs">
                  {COMPANY.hours}
                </span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/919566592183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 rounded-md text-xs font-semibold transition-colors"
                >
                  <MaterialIcon name="chat" size={16} />
                  <span>WhatsApp Trade Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright 2026 */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {COMPANY.copyrightYear} {COMPANY.name}. All rights reserved. Registered Export Entity.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/products" className="hover:text-slate-200 transition-colors">
              Products
            </Link>
            <span>•</span>
            <Link href="/export-compliance" className="hover:text-slate-200 transition-colors">
              Export & Compliance
            </Link>
            <span>•</span>
            <Link href="/sustainability" className="hover:text-slate-200 transition-colors">
              Sustainability
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
