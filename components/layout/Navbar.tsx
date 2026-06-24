"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={
              scrolled ? "/suslivalogolight.svg" : "/suslivalogotransparent.svg"
            }
            alt="SUSLIVA"
            height={160}
            width={300}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[var(--charcoal)] "
                  : "text-[var(--white)] hover:text-[var(--accent)]"
              } ${pathname === link.href ? "text-[var(--charcoal)]" : "text-[var(--accent)] hover:text-[var(--accent)]"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--charcoal)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 text-center h-[100vh] py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--charcoal)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold px-4 py-2 rounded-full text-white text-center"
            style={{ background: "var(--accent)" }}
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
