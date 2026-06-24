import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SUSLIVA's mission, vision, and history of serving vulnerable communities in Akwa Ibom State since 2009.",
};

const strategies = [
  "Promote respect for rights of vulnerable groups",
  "Community health education",
  "Ensure food availability for the less privileged",
  "Promote micro agricultural enterprises",
  "Provide care and support services",
  "Promote good governance that gives attention to vulnerable populations",
];

const targetGroups = [
  "Orphans and vulnerable children",
  "Widows and women in need",
  "Unemployed youth",
  "Physically challenged persons",
  "People living with HIV/AIDS, leprosy, TB, and diabetes",
  "Pro-poor (rural) women",
];

const TEAM = [
  {
    name: "Precious Bassey",
    role: "Executive Director",
    bio: "shes in charge of documentation in SUSLIVA.",
    image: "/whakee.jpeg",
    email: "",
    phone: "",
  },
  {
    name: "Precious Bassey",
    role: "Executive Director",
    bio: "shes in charge of documentation in SUSLIVA.",
    image: "/whakee.jpeg",
    email: "",
    phone: "",
  },
  {
    name: "Precious Bassey",
    role: "Executive Director",
    bio: "shes in charge of documentation in SUSLIVA.",
    image: "/whakee.jpeg",
    email: "",
    phone: "",
  },
  {
    name: "Precious Bassey",
    role: "Executive Director",
    bio: "shes in charge of documentation in SUSLIVA.",
    image: "/whakee.jpeg",
    email: "",
    phone: "",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24" style={{ minHeight: 440 }}>
        <div className="absolute inset-0">
          <Image src="/team.jpg" alt="About SUSLIVA" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.9)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mint)" }}>Who We Are</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-2xl mb-6" style={{ color: "var(--cream)" }}>Rooted in community since 2009.</h1>
          <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.7)" }}>
            A non-governmental organisation improving lives across Akwa Ibom State — one community at a time.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--charcoal)" }}>
                <strong>{SITE.fullName} ({SITE.name})</strong> is a non-governmental organisation that aims at improving the livelihood — the living conditions — of the less privileged across Akwa Ibom State, Nigeria.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                Since coming into existence in {SITE.founded}, SUSLIVA has worked alongside orphans and vulnerable children, widows, unemployed youth, pro-poor (rural) women, people living with HIV/AIDS, and those affected by ailments such as leprosy, TB and diabetes.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                We are headquartered in Uyo, Akwa Ibom State, with community presence in Ukanafun LGA and beyond.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl" style={{ background: "var(--sand)" }}>
                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Our Vision</div>
                <p className="font-display text-xl font-bold" style={{ color: "var(--forest)" }}>A better world for the less privileged (Pro-poor).</p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "var(--forest)" }}>
                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--mint)" }}>Our Mission</div>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                  To improve living conditions of children and the less privileged (vulnerable groups) by giving attention to those issues critically affecting them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden" style={{ background: "var(--forest)" }}>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ v: "15+", l: "Years of service" }, { v: "5,000+", l: "Lives impacted" }, { v: "8", l: "Programs running" }, { v: "3", l: "LGAs reached" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-4xl font-bold mb-1" style={{ color: "var(--mint)" }}>{s.v}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20" style={{ background: "var(--sand)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Target Population</div>
              <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "var(--forest)" }}>Who we work for.</h2>
              <div className="flex flex-col gap-3">
                {targetGroups.map((group) => (
                  <div key={group} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--cream)" }}>
                    <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: "var(--accent)" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>{group}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-80 rounded-2xl overflow-hidden">
              <Image src="/children.jpg" alt="Children we serve" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>How We Work</div>
            <h2 className="font-display text-3xl font-bold" style={{ color: "var(--forest)" }}>Our strategies.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl">
            {strategies.map((s, i) => (
              <div key={s} className="flex items-start gap-4 p-5 rounded-xl border" style={{ borderColor: "var(--sand)" }}>
                <span className="text-xs font-bold pt-0.5 shrink-0" style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: "var(--sand)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>The People</div>
            <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--forest)" }}>Meet our team.</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              The dedicated individuals behind SUSLIVA's work — committed to building a better world for vulnerable communities in Akwa Ibom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-2xl overflow-hidden border" style={{ background: "var(--cream)", borderColor: "rgba(0,0,0,0.06)" }}>
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,67,50,0.5) 0%, transparent 50%)" }} />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--accent)" }}>
                    {member.role}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: "var(--forest)" }}>
                    {member.name}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                    {member.bio}
                  </p>
                  {(member.email || member.phone) && (
                    <div className="flex flex-col gap-1.5 pt-3 border-t" style={{ borderColor: "var(--sand)" }}>
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-xs hover:underline" style={{ color: "var(--sage)" }}>
                          <Mail size={12} /> {member.email}
                        </a>
                      )}
                      {member.phone && (
                        <a href={`tel:${member.phone}`} className="inline-flex items-center gap-2 text-xs hover:underline" style={{ color: "var(--sage)" }}>
                          <Phone size={12} /> {member.phone}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/donate.jpg" alt="Women empowerment" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.82)" }} />
        </div>
        <div className="relative max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--cream)" }}>Join us in this work.</h2>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Whether you give, volunteer, or spread the word — your support makes our mission possible.</p>
          <Link href="/donate" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--accent)" }}>
            <Heart size={16} /> Support SUSLIVA
          </Link>
        </div>
      </section>
    </>
  );
}