import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light" | "footer";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  size = "md",
  showText = true,
  className = "",
}) => {
  const isLight = variant === "light" || variant === "footer";

  const imageDimensions = {
    sm: { width: 40, height: 40, className: "w-10 h-10" },
    md: { width: 48, height: 48, className: "w-12 h-12" },
    lg: { width: 56, height: 56, className: "w-14 h-14" },
  };

  const dim = imageDimensions[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] rounded transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="SYR Global Exports — Return to Home"
    >
      {/* Official Company Logo Emblem from public/logo.png */}
      <div className={`relative shrink-0 ${dim.className} rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-slate-200/80`}>
        <Image
          src="/logo.png"
          alt="SYR Global Exports Logo"
          width={dim.width}
          height={dim.height}
          priority
          className="object-contain p-0.5 w-full h-full"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center text-left leading-tight">
          <span
            className={`font-headline-sm font-extrabold uppercase tracking-tight text-base sm:text-lg transition-colors ${
              isLight
                ? "text-white group-hover:text-[#FECE57]"
                : "text-[#0F2854] group-hover:text-[#163a77]"
            }`}
          >
            SYR Global Exports
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase font-label-sm ${
              isLight
                ? "text-slate-300"
                : "text-slate-500"
            }`}
          >
            Global Trade Solutions
          </span>
        </div>
      )}
    </Link>
  );
};
