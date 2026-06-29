import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, formatPostDate } from "../lib/blog";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Maple Cash for Cars Blog | Calgary Vehicle Selling Guides",
  description:
    "Read Maple Cash for Cars guides on selling junk, scrap, damaged, and non-running vehicles in Calgary and across Alberta.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Maple Cash for Cars Blog | Calgary Vehicle Selling Guides",
    description:
      "Practical guides for selling junk, scrap, damaged, and non-running vehicles in Calgary and across Alberta.",
    url: "/blog",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Blog" }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white text-slate-900">
      <div className="border-b border-slate-200 bg-white px-4 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
        </div>
      </div>

      <main>
        <section className="section-red-tint px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">
              Maple Cash for Cars blog
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              Vehicle selling guides for Calgary and Alberta drivers
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Straight answers on cash for cars, junk car removal, scrap value,
              towing, paperwork, and what your unwanted vehicle may be worth.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            {posts.length === 0 ? (
              <p className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
                No posts yet. Add MDX files to <code>content/blog</code>.
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article key={post.slug} className="blog-card">
                    {post.cover ? (
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={post.cover}
                          alt={post.title}
                          width={1200}
                          height={700}
                          className="h-56 w-full object-cover"
                        />
                      </Link>
                    ) : null}
                    <div className="p-7">
                      {post.date ? (
                        <p className="text-sm font-bold text-[var(--brand-green)]">
                          {formatPostDate(post.date)}
                        </p>
                      ) : null}
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      {post.description ? (
                        <p className="mt-3 leading-7 text-slate-700">{post.description}</p>
                      ) : null}
                      <Link className="mt-5 inline-flex font-black text-[var(--brand-red)]" href={`/blog/${post.slug}`}>
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
