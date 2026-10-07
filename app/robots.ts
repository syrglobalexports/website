import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://syrglobalexport.com/sitemap.xml",
    host: "https://syrglobalexport.com",
  };
}
