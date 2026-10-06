import React from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export const AnnounceBar: React.FC = () => {
  return (
    <div className="w-full bg-primary text-on-primary py-2 px-margin border-b border-primary-container/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm tracking-wider">
        <div className="flex items-center gap-space-md">
          <span className="flex items-center gap-1 text-secondary-fixed">
            <MaterialIcon name="anchor" size={15} />
            CHENNAI PORT CORRIDOR • TAMIL NADU, INDIA
          </span>
          <span className="hidden md:inline-block text-surface-container-highest/60">
            |
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-tertiary-fixed">
            <MaterialIcon name="verified_user" size={15} />
            FIEO MEMBER • IEC COMPLIANT EXPORTER
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="text-surface-variant font-medium">
            Trade Desk Active: Mon–Sat 09:00–18:00 IST
          </span>
          <a
            href="#quotation"
            className="text-secondary-fixed hover:underline flex items-center gap-0.5"
          >
            Inquire Direct <MaterialIcon name="arrow_outward" size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
