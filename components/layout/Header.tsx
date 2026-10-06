"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { COMPANY } from "@/data/company";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Logo } from "@/components/ui/Logo";
import { MarqueeBar } from "./MarqueeBar";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 1. Slim Marquee Tagline (28px) */}
      <MarqueeBar />

      {/* 2. Sleek, Unified Main Navbar (68px) */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_2px_12px_rgba(15,40,84,0.08)] border-b border-slate-200"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">
          {/* Logo with official logo.png */}
          <Logo size="md" showText={true} />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const hasSub = !!item.subItems;
              const isCurrent =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (hasSub) {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      aria-expanded={productsDropdownOpen}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2854] cursor-pointer ${
                        isCurrent
                          ? "text-[#0F2854] font-bold bg-slate-100"
                          : "text-slate-700 hover:text-[#0F2854] hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <MaterialIcon
                        name="expand_more"
                        size={16}
                        className={`transition-transform duration-200 text-slate-400 ${
                          productsDropdownOpen ? "rotate-180 text-[#0F2854]" : ""
                        }`}
                      />
                    </button>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 flex flex-col gap-1 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-label-sm">
                              Product Catalog
                            </span>
                            <Link
                              href="/products"
                              className="text-[11px] font-bold text-[#C59B27] hover:underline"
                            >
                              View All →
                            </Link>
                          </div>

                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`p-2.5 rounded-lg transition-colors flex flex-col gap-0.5 group/sub hover:bg-slate-50 ${
                                pathname === sub.href
                                  ? "bg-slate-100 text-[#0F2854]"
                                  : "text-slate-800"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-sm group-hover/sub:text-[#0F2854]">
                                  {sub.label}
                                </span>
                                {sub.badge && (
                                  <span
                                    className={`px-1.5 py-0.2 rounded text-[10px] font-bold uppercase ${
                                      sub.badge === "Available"
                                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                        : "bg-amber-50 text-amber-800 border border-amber-200"
                                    }`}
                                  >
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <span className="text-xs text-slate-500 line-clamp-1">
                                  {sub.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2854] ${
                    isCurrent
                      ? "text-[#0F2854] font-bold bg-slate-100"
                      : "text-slate-700 hover:text-[#0F2854] hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phones[0].replace(/\s+/g, "")}`}
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0F2854] transition-colors"
            >
              <MaterialIcon name="call" size={15} className="text-[#C59B27]" />
              <span>{COMPANY.phones[0]}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#FECE57] hover:bg-[#ffdf98] text-[#251a00] font-bold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all border border-[#eec14b]"
            >
              <MaterialIcon name="request_quote" size={17} />
              <span>Enquire Now</span>
            </Link>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0F2854] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2854]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <MaterialIcon
                name={mobileMenuOpen ? "close" : "menu"}
                size={24}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 max-h-[calc(100vh-100px)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const isCurrent =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.subItems) {
                return (
                  <div key={item.href} className="flex flex-col gap-1 py-1">
                    <div className="px-3 py-1.5 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>{item.label}</span>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[#C59B27] font-semibold"
                      >
                        All Products →
                      </Link>
                    </div>
                    <div className="pl-2 flex flex-col gap-1 border-l-2 border-slate-200 ml-3">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between ${
                            pathname === sub.href
                              ? "bg-slate-100 text-[#0F2854] font-bold"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{sub.label}</span>
                          {sub.badge && (
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                sub.badge === "Available"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-amber-50 text-amber-800"
                              }`}
                            >
                              {sub.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    isCurrent
                      ? "bg-slate-100 text-[#0F2854] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0F2854]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#FECE57] text-[#251a00] text-center font-bold text-sm rounded-lg shadow-sm"
              >
                Enquire Now / Request RFQ
              </Link>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 flex flex-col gap-0.5">
                <span className="font-bold text-slate-800">Export Desk: {COMPANY.personnel.name}</span>
                <span>Phone: {COMPANY.phones[0]}</span>
                <span>Email: {COMPANY.emails.primary}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
