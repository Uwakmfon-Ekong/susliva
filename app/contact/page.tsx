"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to API route
    setSent(true);
  };

  return (
    <>
      <section className="pt-32 pb-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mint)" }}>
            Get in Touch
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-2xl" style={{ color: "var(--cream)" }}>
            We'd love to hear from you.
          </h1>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              {sent ? (
                <div className="flex flex-col items-start gap-4 py-12">
                  <CheckCircle size={40} style={{ color: "var(--forest)" }} />
                  <h2 className="font-display text-2xl font-bold" style={{ color: "var(--forest)" }}>
                    Message received!
                  </h2>
                  <p className="text-base" style={{ color: "var(--muted)" }}>
                    Thank you, {form.name.split(" ")[0]}. We'll get back to you at {form.email} as soon as possible.
                  </p>
                  <button
                    onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setSent(false); }}
                    className="text-sm font-semibold underline"
                    style={{ color: "var(--forest)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--forest)" }}>
                    Send us a message
                  </h2>

                  {[
                    { label: "Full Name", field: "name", type: "text", placeholder: "Your full name" },
                    { label: "Email Address", field: "email", type: "email", placeholder: "you@email.com" },
                    { label: "Subject", field: "subject", type: "text", placeholder: "What is this about?" },
                  ].map(({ label, field, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "var(--charcoal)" }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                        style={{ borderColor: "var(--sand)" }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--charcoal)" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us more..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                      style={{ borderColor: "var(--sand)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white self-start"
                    style={{ background: "var(--accent)" }}
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl" style={{ background: "var(--sand)" }}>
                <h3 className="font-semibold text-sm mb-4" style={{ color: "var(--forest)" }}>
                  Office Address
                </h3>
                <div className="flex items-start gap-3 text-sm mb-3" style={{ color: "var(--charcoal)" }}>
                  <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--sage)" }} />
                  <span>{SITE.address}</span>
                </div>
                <div className="flex items-start gap-3 text-sm" style={{ color: "var(--charcoal)" }}>
                  <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--sage)" }} />
                  <span>{SITE.addressAlt}</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "var(--sand)" }}>
                <h3 className="font-semibold text-sm mb-4" style={{ color: "var(--forest)" }}>
                  Phone
                </h3>
                <div className="flex items-start gap-3">
                  <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "var(--sage)" }} />
                  <div className="flex flex-col gap-2">
                    {SITE.phone.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s|\(|\)/g, "")}`}
                        className="text-sm hover:underline"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "var(--sand)" }}>
                <h3 className="font-semibold text-sm mb-4" style={{ color: "var(--forest)" }}>
                  Email
                </h3>
                <div className="flex items-center gap-3">
                  <Mail size={15} style={{ color: "var(--sage)" }} />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "var(--forest)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  We are based in Uyo, Akwa Ibom State and operate community programs across several LGAs. If you'd like to visit us, please call ahead to schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
