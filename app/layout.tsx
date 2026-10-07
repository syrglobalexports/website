import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { RootJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syrglobalexport.com"),
  title: {
    default: "SYR Global Exports — Global Sustainable Products & Export Solutions",
    template: "%s | SYR Global Exports",
  },
  description:
    "Government Registered Export Merchant House supplying sustainable agricultural commodities and 100% biodegradable Areca Palm Leaf plates and Sugarcane Bagasse cutlery from India to global markets worldwide.",
  keywords: [
    "SYR Global Exports",
    "Areca Leaf Plates",
    "Round Areca Palm Leaf Tableware",
    "Biodegradable Cutlery Set Made from Sugarcane Bagasse",
    "Fresh Green Chilli G4 Teja",
    "Global Trade Solutions",
    "Agricultural Exporter India",
    "IEC FIEO GST UDYAM Registered",
    "Sustainable Tableware Manufacturer",
    "Compostable Palm Leaf Plates Exporter",
  ],
  authors: [{ name: "SYR Global Exports", url: "https://syrglobalexport.com" }],
  creator: "SYR Global Exports",
  publisher: "SYR Global Exports",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://syrglobalexport.com",
  },
  openGraph: {
    title: "SYR Global Exports — Global Sustainable Products & Export Solutions",
    description:
      "Government Registered Export Merchant House supplying sustainable agricultural commodities and biodegradable tableware to buyers worldwide.",
    url: "https://syrglobalexport.com",
    siteName: "SYR Global Exports",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "SYR Global Exports Official Emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYR Global Exports — Global Sustainable Products & Export Solutions",
    description:
      "Government Registered Export Merchant House supplying sustainable agricultural commodities and biodegradable tableware to buyers worldwide.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <RootJsonLd />
      </head>
      <body className="bg-slate-50 font-body-md text-slate-800 min-h-screen flex flex-col selection:bg-[#FECE57] selection:text-[#251a00]">
        <ScrollToTop />
        <Header />
        <div className="flex-1 w-full pt-[96px] flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
