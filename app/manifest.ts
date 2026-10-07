import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SYR Global Exports",
    short_name: "SYR Global",
    description:
      "Government Registered Indian Export Merchant House supplying sustainable agricultural commodities and 100% biodegradable Areca Palm Leaf plates and Sugarcane Bagasse cutlery.",
    start_url: "/",
    display: "standalone",
    background_color: "#001337",
    theme_color: "#0F2854",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192 512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "192x192 512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
