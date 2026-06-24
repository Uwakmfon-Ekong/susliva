"use client";

import { useState } from "react";
import { Heart, ShieldCheck, Phone, Building2 } from "lucide-react";
import { SITE } from "@/lib/data";

const AMOUNTS = [1000, 2500, 5000, 10000, 25000, 50000];

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        metadata: { name: string; phone: string };
        callback: (response: { reference: string }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

export default function DonatePage() {
  const [amount, setAmount] = useState<number | "">("");
  const [custom, setCustom] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const selectedAmount = typeof amount === "number" ? amount : 0;

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustom(false);
  };

  const handlePay = () => {
    if (!email || !name || selectedAmount < 100) return;
    setLoading(true);

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => {
      const handler = window.PaystackPop.setup({
        key: SITE.paystackKey,
        email,
        amount: selectedAmount * 100, // kobo
        currency: "NGN",
        ref: `SUSLIVA-${Date.now()}`,
        metadata: { name, phone },
        callback: () => {
          setSuccess(true);
          setLoading(false);
        },
        onClose: () => {
          setLoading(false);
        },
      });
      handler.openIframe();
    };
    document.head.appendChild(script);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-md text-center px-6">
          <div className="text-5xl mb-6">🌱</div>
          <h1 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--forest)" }}>
            Thank you, {name.split(" ")[0]}!
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Your donation of <strong>₦{selectedAmount.toLocaleString()}</strong> has been received. You will get a confirmation email shortly. Every naira you gave goes directly toward changing lives in Akwa Ibom.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
            style={{ background: "var(--forest)" }}
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mint)" }}>
            Give
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-2xl mb-6" style={{ color: "var(--cream)" }}>
            Your donation changes lives.
          </h1>
          <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.7)" }}>
            Every naira you give funds our programs — from cooperative farming to OVC support to human rights education — across Akwa Ibom State.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Donate form */}
            <div className="p-8 rounded-2xl border" style={{ borderColor: "var(--sand)" }}>
              <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--forest)" }}>
                Make a donation
              </h2>

              {/* Amount selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3" style={{ color: "var(--charcoal)" }}>
                  Select amount (₦)
                </label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {AMOUNTS.map((a) => (
                    <button
                      key={a}
                      onClick={() => handleAmountClick(a)}
                      className="py-2.5 px-3 rounded-xl text-sm font-semibold border transition-colors"
                      style={{
                        borderColor: amount === a ? "var(--forest)" : "var(--sand)",
                        background: amount === a ? "var(--forest)" : "white",
                        color: amount === a ? "white" : "var(--charcoal)",
                      }}
                    >
                      ₦{a.toLocaleString()}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => { setCustom(true); setAmount(""); }}
                  className="text-sm font-medium underline"
                  style={{ color: "var(--sage)" }}
                >
                  Enter a custom amount
                </button>
                {custom && (
                  <div className="mt-3 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: "var(--muted)" }}>₦</span>
                    <input
                      type="number"
                      placeholder="0"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full pl-7 pr-4 py-3 rounded-xl border text-sm outline-none focus:ring-2"
                      style={{ borderColor: "var(--sand)" }}
                    />
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--charcoal)" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ borderColor: "var(--sand)" }}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--charcoal)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ borderColor: "var(--sand)" }}
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--charcoal)" }}>
                  Phone Number <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="+234 ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ borderColor: "var(--sand)" }}
                />
              </div>

              <button
                onClick={handlePay}
                disabled={loading || !email || !name || selectedAmount < 100}
                className="w-full py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-opacity disabled:opacity-50"
                style={{ background: "var(--accent)" }}
              >
                <Heart size={16} />
                {loading ? "Opening payment..." : `Donate ₦${selectedAmount ? selectedAmount.toLocaleString() : "..."}`}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
                <ShieldCheck size={13} />
                Secured by Paystack · 256-bit encryption
              </div>
            </div>

            {/* Bank transfer + info */}
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl" style={{ background: "var(--sand)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 size={16} style={{ color: "var(--forest)" }} />
                  <h3 className="font-semibold text-sm" style={{ color: "var(--forest)" }}>
                    Bank Transfer
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                  Prefer to donate via direct bank transfer? Send to:
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: "var(--muted)" }}>Account Name</span>
                    <span className="font-semibold" style={{ color: "var(--charcoal)" }}>SUSLIVA</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--muted)" }}>Bank</span>
                    <span className="font-semibold" style={{ color: "var(--charcoal)" }}>To be confirmed</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--muted)" }}>Account No.</span>
                    <span className="font-semibold" style={{ color: "var(--charcoal)" }}>To be confirmed</span>
                  </div>
                </div>
                <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
                  After transfer, please send proof of payment to{" "}
                  <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
                </p>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "var(--sand)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Phone size={16} style={{ color: "var(--forest)" }} />
                  <h3 className="font-semibold text-sm" style={{ color: "var(--forest)" }}>
                    Donate by Phone
                  </h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
                  Call us directly to arrange a donation:
                </p>
                <div className="flex flex-col gap-2">
                  {SITE.phone.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s|\(|\)/g, "")}`} className="text-sm font-semibold" style={{ color: "var(--forest)" }}>
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "var(--forest)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  SUSLIVA is a registered non-governmental organisation. All donations are used directly to fund programs serving vulnerable communities in Akwa Ibom State.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
