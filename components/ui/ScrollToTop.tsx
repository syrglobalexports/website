"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Instantly scroll window to top whenever route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};
