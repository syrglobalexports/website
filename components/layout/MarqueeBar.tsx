import React from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface MarqueeBarProps {
  className?: string;
}

export const MarqueeBar: React.FC<MarqueeBarProps> = ({ className = "" }) => {
  const taglineItems = [
    { text: "GLOBAL SOURCING", icon: "public" },
    { text: "RESPONSIBLE MANUFACTURING", icon: "factory" },
    { text: "EXPORT READY", icon: "verified" },
    { text: "QUALITY ASSURED", icon: "inventory" },
    { text: "BUILT FOR GLOBAL TRADE", icon: "anchor" },
    { text: "100% BIODEGRADABLE SOLUTIONS", icon: "eco" },
  ];

  return (
    <aside
      aria-label="Export trade highlights and company credentials"
      className={`w-full bg-[#001337] text-slate-300 border-b border-white/10 overflow-hidden relative select-none h-7 flex items-center z-50 ${className}`}
    >
      <div className="w-full overflow-hidden flex items-center">
        {/* Animated Marquee Track */}
        <div className="animate-marquee-track flex items-center gap-8 whitespace-nowrap">
          {/* Repeating Set 1 */}
          <div className="flex items-center gap-8 shrink-0">
            {taglineItems.map((item, idx) => (
              <span
                key={`m1-${idx}`}
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase font-label-sm text-slate-300 hover:text-white transition-colors"
              >
                <MaterialIcon
                  name={item.icon}
                  size={12}
                  className="text-[#FECE57] shrink-0"
                />
                <span>{item.text}</span>
                <span className="text-[#FECE57]/40 font-bold ml-4">•</span>
              </span>
            ))}
          </div>

          {/* Repeating Set 2 */}
          <div aria-hidden="true" className="flex items-center gap-8 shrink-0">
            {taglineItems.map((item, idx) => (
              <span
                key={`m2-${idx}`}
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase font-label-sm text-slate-300 hover:text-white transition-colors"
              >
                <MaterialIcon
                  name={item.icon}
                  size={12}
                  className="text-[#FECE57] shrink-0"
                />
                <span>{item.text}</span>
                <span className="text-[#FECE57]/40 font-bold ml-4">•</span>
              </span>
            ))}
          </div>

          {/* Repeating Set 3 */}
          <div aria-hidden="true" className="flex items-center gap-8 shrink-0">
            {taglineItems.map((item, idx) => (
              <span
                key={`m3-${idx}`}
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase font-label-sm text-slate-300 hover:text-white transition-colors"
              >
                <MaterialIcon
                  name={item.icon}
                  size={12}
                  className="text-[#FECE57] shrink-0"
                />
                <span>{item.text}</span>
                <span className="text-[#FECE57]/40 font-bold ml-4">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
