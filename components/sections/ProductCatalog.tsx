"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ComingSoonSection } from "./ComingSoonSection";
import { ForwardBookingCTA } from "./ForwardBookingCTA";

interface ProductCatalogProps {
  showComingSoon?: boolean;
  showForwardCTA?: boolean;
  title?: string;
  subtitle?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  showComingSoon = true,
  showForwardCTA = true,
  title = "Our Core Product Lines",
  subtitle = "Rigidly inspected natural tableware and export-sorted fresh agricultural produce for buyers worldwide.",
}) => {
  const [filter, setFilter] = useState<"all" | "biodegradable" | "agricultural">("all");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50" id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeIn">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#C59B27] font-label-sm text-xs uppercase tracking-wider font-bold">
                Export Catalog
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-[#0F2854] font-extrabold mt-1 tracking-tight">
                {title}
              </h2>
              <p className="font-body-md text-sm sm:text-base text-slate-600 max-w-xl mt-1 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md font-label-md text-xs font-bold transition-all shadow-sm cursor-pointer ${
                  filter === "all"
                    ? "bg-[#0F2854] text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                All Products ({PRODUCTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("biodegradable")}
                className={`px-4 py-2 rounded-md font-label-md text-xs font-bold transition-all shadow-sm cursor-pointer ${
                  filter === "biodegradable"
                    ? "bg-[#0F2854] text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Biodegradable Tableware
              </button>
              <button
                type="button"
                onClick={() => setFilter("agricultural")}
                className={`px-4 py-2 rounded-md font-label-md text-xs font-bold transition-all shadow-sm cursor-pointer ${
                  filter === "agricultural"
                    ? "bg-[#0F2854] text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Fresh Agricultural Produce
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 3 Core Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Forward Booking Highlight CTA */}
        {showForwardCTA && (
          <div className="mt-12">
            <ForwardBookingCTA />
          </div>
        )}

        {/* Coming Soon Expansion Section */}
        {showComingSoon && (
          <div className="mt-12">
            <ComingSoonSection />
          </div>
        )}
      </div>
    </section>
  );
};
