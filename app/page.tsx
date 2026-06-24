import Link from "next/link";
import { ArrowRight, Heart, Users, Sprout, BookOpen } from "lucide-react";
import { STATS, PROGRAMS, BLOG_POSTS, IMPACT_STORIES } from "@/lib/data";
 import { Scale, Wheat, Trees, HandHeart, Gavel, Accessibility, Landmark, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
     <section
  className="relative min-h-screen flex items-center"
  style={{ background: "var(--forest)" }}
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/betterworld.jpg')" }}
  />

  {/* Dark overlay so text stays readable */}
  <div
    className="absolute inset-0"
    style={{ background: "rgba(27, 67, 50, 0.9)" }}
  />

  {/* Subtle dot texture */}
  <div
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage:
        "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  <div className="relative max-w-6xl mx-auto px-6 py-32">
    <div className="max-w-3xl">
      <h1
        className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
        style={{ color: "var(--cream)" }}
      >
        A better world{" "}
        <span style={{ color: "var(--mint)" }}>for the</span>
        <br />
        less privileged.
      </h1>

      <p
        className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        SUSLIVA works with orphans, vulnerable children, women, unemployed
        youth, and persons with disabilities across Akwa Ibom — improving
        livelihoods and opening doors.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: "var(--accent)", color: "white" }}
        >
          <Heart size={16} />
          Donate Now
        </Link>
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-colors"
          style={{
            borderColor: "rgba(255,255,255,0.3)",
            color: "var(--cream)",
          }}
        >
          Our Programs
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  </div>

  {/* Bottom curve */}
  <div
    className="absolute bottom-0 left-0 right-0 h-16"
    style={{
      background: "var(--cream)",
      clipPath: "ellipse(55% 100% at 50% 100%)",
    }}
  />
</section>

      {/* STATS */}
      <section style={{ background: "var(--cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display text-4xl md:text-5xl font-bold mb-1"
                  style={{ color: "var(--forest)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ background: "var(--sand)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Who We Serve
            </div>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "var(--forest)" }}
            >
              Every person deserves a fair chance.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Users size={20} />, label: "Orphans & Vulnerable Children" },
              { icon: <Heart size={20} />, label: "Women & Widows" },
              { icon: <Sprout size={20} />, label: "Unemployed Youth" },
              { icon: <BookOpen size={20} />, label: "Persons with Disabilities" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start gap-3 p-5 rounded-2xl"
                style={{ background: "var(--cream)" }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{ background: "var(--mint)", color: "var(--forest)" }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-sm font-medium leading-snug"
                  style={{ color: "var(--charcoal)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section style={{ background: "var(--cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                What We Do
              </div>
              <h2
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ color: "var(--forest)" }}
              >
                Our Programs
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--forest)" }}
            >
              View all programs <ArrowRight size={15} />
            </Link>
          </div>

        

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {PROGRAMS.slice(0, 6).map((program) => {
    const Icon = program.icon;
    return (
      <div
        key={program.id}
        className="p-6 rounded-2xl border transition-shadow hover:shadow-md"
        style={{ borderColor: "var(--sand)", background: "white" }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: "var(--mint)", color: "var(--forest)" }}
        >
          <Icon size={20} />
        </div>
        <h3
          className="font-semibold text-base mb-2"
          style={{ color: "var(--forest)" }}
        >
          {program.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {program.shortDesc}
        </p>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section style={{ background: "var(--forest)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--mint)" }}
            >
              Real Stories
            </div>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "var(--cream)" }}
            >
              The faces behind the numbers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {IMPACT_STORIES.map((story) => (
              <div
                key={story.name}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="text-3xl font-display mb-4"
                  style={{ color: "var(--mint)" }}
                >
                  "
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {story.quote}
                </p>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--cream)" }}
                  >
                    {story.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {story.location} · {story.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ background: "var(--sand)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                Latest News
              </div>
              <h2
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ color: "var(--forest)" }}
              >
                Stories from the field.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--forest)" }}
            >
              Read all posts <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-6 rounded-2xl transition-shadow hover:shadow-md"
                style={{ background: "var(--cream)" }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-wide mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  {post.category}
                </div>
                <h3
                  className="font-semibold text-base leading-snug mb-3 group-hover:text-[var(--forest-light)] transition-colors"
                  style={{ color: "var(--charcoal)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6 flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {post.excerpt}
                </p>
                <div
                  className="text-xs flex justify-between"
                  style={{ color: "var(--muted)" }}
                >
                  <span>{new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DONATE */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
        
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--forest)" }}
          >
            Your donation changes lives.
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--muted)" }}
          >
            Every naira you give goes directly toward supporting vulnerable
            communities across Akwa Ibom. No life is too small to matter.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            <Heart size={16} />
            Give Today
          </Link>
        </div>
      </section>
    </>
  );
}
