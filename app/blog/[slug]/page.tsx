import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt,
  };
}

// Placeholder content map
const CONTENT: Record<string, string> = {
  "cooperative-farming-ukanafun": `
Smallholder farming in Ukanafun LGA has long been a solitary, resource-constrained enterprise. Farmers working alone rarely had the capital for quality inputs, the labour for larger plots, or the market access to sell at fair prices.

SUSLIVA's cooperative farming initiative changed that.

## How the Cooperative Works

Through our Agriculture & Food Security program, SUSLIVA has facilitated the formation of structured farming cooperatives — groups of smallholder farmers who pool labour, tools, knowledge, and sometimes land to grow food more effectively.

Each cooperative receives:
- Training in improved planting techniques
- Access to a shared seed bank
- Connections to local markets and buyers
- Financial literacy education to manage group resources

## The Results

In the most recent farming season, cooperatives facilitated by SUSLIVA reported a 40% average increase in yield compared to individual plots. Families who previously struggled to produce enough food for home consumption are now selling surplus at local markets.

"I grew more yam this year than in the past three years combined," one cooperative member told our field team. "Because we all worked the land together."

## What's Next

SUSLIVA is expanding the cooperative model to two additional communities in Ukanafun LGA, with plans to introduce agroforestry techniques that improve soil health over the long term.

Your donations help fund the training, inputs, and field staff that make this work possible.
  `,
  "ovc-support-program": `
In November, a SUSLIVA team visited a Motherless Babies Home in Akwa Ibom State. What we found shaped everything we're doing next.

## What We Found

The home is run by a dedicated staff stretched thin across 40+ children. Resources are limited. Basic educational materials, nutritional food, and psychological support are in short supply — not from lack of care, but from lack of funds.

The children ranged in age from infants to teenagers. Several older ones have been there for years, navigating adolescence without stable family structures.

## What We're Doing

Following the visit, SUSLIVA committed to:

- Monthly donation drives to provide food items, clothes, and school supplies
- Organising volunteer visits for community members who can spend time with the children
- Advocating for increased government and private sector support for OVC facilities

## How You Can Help

A donation of ₦5,000 provides a child with school supplies for a term. ₦20,000 funds a month of nutritional meals for one child.

No amount is too small. Every contribution tells these children that the community sees them.
  `,
  "human-rights-workshop": `
On a Saturday morning in Uyo, over 80 community members gathered in a hall for a workshop most of them had never attended before — one focused entirely on their own rights.

## The Workshop

SUSLIVA's Human Rights Awareness & Advocacy program organised a full-day capacity building workshop, bringing in facilitators to walk participants through the basics of Nigerian constitutional rights, international human rights standards, and how to access legal support when those rights are violated.

## Who Attended

The room was a mix: market traders, farmers, community leaders, women from the WomenRise network, and young people still in secondary school. Many had never discussed human rights in a structured setting before.

"I didn't know I had the right to refuse an illegal search," one attendee noted during the open discussion segment. "I just always cooperated because I thought I had no choice."

## The Conversation That Followed

The workshop's open discussion segment ran 45 minutes over schedule. Participants shared experiences of rights violations they had either witnessed or experienced personally — and facilitators helped them understand what recourse existed.

SUSLIVA plans to hold follow-up community sessions in three local government areas, taking this knowledge directly to where people live and work.
  `,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--forest)" }}>
            Post not found
          </h1>
          <Link href="/blog" className="text-sm text-[var(--accent)]">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const content = CONTENT[slug] || "";

  return (
    <>
      <section className="pt-32 pb-16" style={{ background: "var(--forest)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-80"
            style={{ color: "var(--mint)" }}
          >
            <ArrowLeft size={14} /> All Posts
          </Link>
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mint)" }}>
            {post.category}
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "var(--cream)" }}>
            {post.title}
          </h1>
          <div className="text-sm flex gap-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span>
              {new Date(post.date).toLocaleDateString("en-NG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
                  if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;
                  if (line.trim() === "") return "";
                  return `<p>${line}</p>`;
                })
                .join(""),
            }}
          />

          <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--sand)" }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--forest)" }}>
              <ArrowLeft size={14} /> Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
