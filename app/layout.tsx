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
