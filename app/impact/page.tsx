import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { STATS, IMPACT_STORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "See the real difference SUSLIVA is making in communities across Akwa Ibom State, Nigeria.",
};

export default function ImpactPage() {
  return (
    <>
      <section className="relative pt-32 pb-24" style={{ minHeight: 440 }}>
        <div className="absolute inset-0">
          <Image src="/children.jpg" alt="Impact" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.90)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mint)" }}>Real Results</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-2xl mb-6" style={{ color: "var(--cream)" }}>Our Impact</h1>
          <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.7)" }}>
            Since 2009, SUSLIVA has touched thousands of lives across Akwa Ibom State.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-2xl" style={{ background: "var(--sand)" }}>
                <div className="font-display text-5xl font-bold mb-2" style={{ color: "var(--forest)" }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Stories with photos */}
          <div className="max-w-xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Voices from the Field</div>
            <h2 className="font-display text-3xl font-bold" style={{ color: "var(--forest)" }}>Stories from those we serve.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { ...IMPACT_STORIES[0], img: "/susliva-outreach.png" },
              { ...IMPACT_STORIES[1], img: "/susliva-outreach.png" },
              { ...IMPACT_STORIES[2], img: "/susliva-outreach.png" },
            ].map((story) => (
              <div key={story.name} className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--sand)" }}>
                <div className="relative h-48">
                  <Image src={story.img} alt={story.name} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.45)" }} />
                </div>
                <div className="p-6">
                  <div className="font-display text-3xl mb-3" style={{ color: "var(--mint)" }}>"</div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--charcoal)" }}>{story.quote}</p>
                  <div className="pt-4 border-t" style={{ borderColor: "var(--sand)" }}>
                    <div className="font-semibold text-sm" style={{ color: "var(--forest)" }}>{story.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{story.location} · {story.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/donate.jpg" alt="Community" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.82)" }} />
        </div>
        <div className="relative max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--cream)" }}>Help us write more stories like these.</h2>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Your gift funds the programs behind every one of these stories.</p>
          <Link href="/donate" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--accent)" }}>
            <Heart size={16} /> Give Today
          </Link>
        </div>
      </section>
    </>
  );
}