import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)]" style={{ background: "var(--forest)", color: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-1">{SITE.name}</div>
            <div
              className="text-xs mb-4"
              style={{ color: "var(--mint)", opacity: 0.8 }}
            >
              {SITE.fullName}
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              A non-governmental organisation improving living conditions for
              vulnerable groups across Akwa Ibom State since {SITE.founded}.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--mint)" }}
            >
              Quick Links
            </div>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--mint)" }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Mail size={15} className="mt-0.5 shrink-0" />
                {SITE.email}
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Phone size={15} className="mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  {SITE.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s|\(|\)/g, "")}`}
                      className="hover:text-white transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{SITE.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 text-xs flex flex-col sm:flex-row justify-between gap-2"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span>
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </span>
          <span>Registered NGO · Uyo, Akwa Ibom State, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
