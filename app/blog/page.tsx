import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog & News",
  description: "Stories, updates, and news from SUSLIVA's work across Akwa Ibom State.",
};

const blogImages: Record<string, string> = {
  "cooperative-farming-ukanafun": "/team.jpg",
  "ovc-support-program": "/team.jpg",
  "human-rights-workshop": "/team.jpg",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-24" style={{ minHeight: 380 }}>
        <div className="absolute inset-0">
          <Image src="/ngoblog.jpg" alt="Blog" fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: "rgba(27,67,50,0.90)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mint)" }}>News & Stories</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-2xl" style={{ color: "var(--cream)" }}>From the field.</h1>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden mb-10 border transition-shadow hover:shadow-lg" style={{ borderColor: "var(--sand)" }}>
            <div className="relative h-64 md:h-auto min-h-64">
              <Image src={blogImages[BLOG_POSTS[0].slug]} alt={BLOG_POSTS[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
              <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ background: "var(--accent)", color: "white" }}>
                Featured
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center" style={{ background: "white" }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--accent)" }}>{BLOG_POSTS[0].category}</div>
              <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-[var(--forest-light)] transition-colors" style={{ color: "var(--charcoal)" }}>{BLOG_POSTS[0].title}</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{BLOG_POSTS[0].excerpt}</p>
              <div className="text-xs flex gap-4" style={{ color: "var(--muted)" }}>
                <span>{new Date(BLOG_POSTS[0].date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>{BLOG_POSTS[0].readTime}</span>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group rounded-2xl overflow-hidden border transition-shadow hover:shadow-md" style={{ borderColor: "var(--sand)", background: "white" }}>
                <div className="relative h-52">
                  <Image src={blogImages[post.slug]} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.2)" }} />
                  <div className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ background: "var(--accent)", color: "white" }}>
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-semibold text-base leading-snug mb-3 group-hover:text-[var(--forest-light)] transition-colors" style={{ color: "var(--charcoal)" }}>{post.title}</h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{post.excerpt}</p>
                  <div className="text-xs flex justify-between" style={{ color: "var(--muted)" }}>
                    <span>{new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}