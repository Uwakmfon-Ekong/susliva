import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.fullName}`,
    template: `%s | ${SITE.name}`,
  },
  icons: {
    icon: "/suslogo.svg",
  },
  description:
    "SUSLIVA is a non-governmental organisation improving living conditions for vulnerable groups — orphans, women, youth, and persons with disabilities — across Akwa Ibom State, Nigeria since 2009.",
  keywords: ["NGO Nigeria", "Akwa Ibom", "vulnerable children", "livelihood", "donate Nigeria"],
  metadataBase: new URL("https://susliva.org"),
  openGraph: {
    type: "website",
    url: "https://susliva.org",
    siteName: "SUSLIVA",
    title: "SUSLIVA — Sustainable Livelihood for All",
    description:
      "A non-governmental organisation improving living conditions for vulnerable groups across Akwa Ibom State, Nigeria since 2009.",
    images: [
      {
        url: "/susog-image.png",
        width: 1200,
        height: 630,
        alt: "SUSLIVA — Sustainable Livelihood for All",
      },
      {
        url: "/suslogo.svg",
        width: 512,
        height: 512,
        alt: "SUSLIVA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUSLIVA — Sustainable Livelihood for All",
    description:
      "A non-governmental organisation improving living conditions for vulnerable groups across Akwa Ibom State, Nigeria since 2009.",
    images: ["/susog-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}