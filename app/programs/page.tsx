import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { PROGRAMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore SUSLIVA's 8 thematic programs focused on building sustainable livelihoods in Akwa Ibom.",
};

const programImages: Record<string, string> = {
  equity: "/equity.jpg",
  agriculture: "/foodsecurity.jpg",
  agroforestry: "/agroforestry.jpg",
  ovc: "/children.jpg",
  humanrights: "/trcc7.jpg",
  disability: "/children.jpg",
  governance: "/environment6.jpg",
  capacity: "/trcc 5.jpg",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="relative pt-32 pb-24" style={{ minHeight: 440 }}>
        <div className="absolute inset-0">
          <Image src="/team.jpg" alt="Programs" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.9)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mint)" }}>What We Do</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-2xl mb-6" style={{ color: "var(--cream)" }}>Our Programs</h1>
          <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.7)" }}>
            Eight thematic areas guide our work — each one targeting a critical gap in the lives of vulnerable communities across Akwa Ibom State.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-16">
            {PROGRAMS.map((program, i) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative h-72 rounded-2xl overflow-hidden">
                    <Image src={programImages[program.id]} alt={program.title} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.25)" }} />
                    <div
                      className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--mint)", color: "var(--forest)" }}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: "var(--accent)", color: "white" }}>
                      Program {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "var(--mint)", color: "var(--forest)" }}
                    >
                      <Icon size={22} />
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--forest)" }}>{program.title}</h2>
                    <p className="text-base mb-5 leading-relaxed" style={{ color: "var(--muted)" }}>{program.shortDesc}</p>
                    <ul className="flex flex-col gap-2">
                      {program.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm" style={{ color: "var(--charcoal)" }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--forest-light)" }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/donate.jpg" alt="Community" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.82)" }} />
        </div>
        <div className="relative max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--cream)" }}>Support a program you care about.</h2>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Your donation helps us run these programs and reach more communities across Akwa Ibom State.</p>
          <Link href="/donate" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--accent)" }}>
            <Heart size={16} /> Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}