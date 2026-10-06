"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { MaterialIcon } from "./MaterialIcon";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getTagStyle = () => {
    switch (product.tag.variant) {
      case "compostable":
        return "bg-emerald-50 text-emerald-800 border border-emerald-200";
      case "bagasse":
        return "bg-amber-50 text-amber-800 border border-amber-200";
      case "coldchain":
        return "bg-blue-50 text-blue-800 border border-blue-200";
      default:
        return "bg-slate-100 text-slate-800 border border-slate-200";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-[0_2px_12px_rgba(15,40,84,0.06)] overflow-hidden flex flex-col justify-between border border-slate-200 hover:border-[#C59B27] transition-all group"
    >
      <div className="p-5 flex flex-col gap-3">
        {/* Card Header: HS Code & Category Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 bg-slate-100 text-[#0F2854] font-label-sm text-xs rounded uppercase font-bold tracking-wider">
            {product.hsCode}
          </span>
          <span
            className={`px-2 py-0.5 font-label-sm text-xs rounded-full flex items-center gap-1 font-semibold ${getTagStyle()}`}
          >
            <MaterialIcon name={product.tag.icon} size={13} />
            <span>{product.tag.label}</span>
          </span>
        </div>

        {/* Product Image */}
        <Link
          href={`/products/${product.slug}`}
          className="h-52 overflow-hidden rounded-lg mt-1 relative block bg-slate-50 cursor-pointer"
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Product Title & Subtitle */}
        <div className="mt-1">
          <Link
            href={`/products/${product.slug}`}
            className="group-hover:text-[#0F2854]"
          >
            <h3 className="font-headline-md text-lg sm:text-xl text-[#0F2854] font-bold leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="font-label-sm text-xs font-semibold text-[#C59B27] uppercase tracking-wider mt-0.5">
            {product.subtitle}
          </p>
          <p className="font-body-sm text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Badges / Specification Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {product.badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-slate-100 font-label-sm text-[11px] text-slate-700 rounded border border-slate-200/60 font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Packaging & Action Links */}
      <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3">
        <span className="font-label-sm text-xs text-slate-700 font-semibold truncate">
          {product.packaging}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-semibold text-[#0F2854] hover:underline"
          >
            Details
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C59B27] hover:text-[#9e7b1a] transition-colors"
          >
            <span>RFQ</span>
            <MaterialIcon name="arrow_forward" size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
