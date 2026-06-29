import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownContent from "../../components/blog/markdown-content";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { formatPostDate, getAllPosts, getPostBySlug } from "../../lib/blog";

const siteUrl = "https://maplecashforcars.ca";
const blogServiceLinks = [
  { name: "Scrap Car Removal", href: "/scrap-car-removal" },
  { name: "Junk Car Removal", href: "/junk-car-removal" },
  { name: "Cash for Scrap Cars", href: "/cash-for-scrap-cars" },
];
const blogLocationLinks = [
  { name: "Airdrie", href: "/cash-for-cars-airdrie" },
  { name: "Banff", href: "/cash-for-cars-banff" },
  { name: "Black Diamond", href: "/cash-for-cars-black-diamond" },
  { name: "Bragg Creek", href: "/cash-for-cars-bragg-creek" },
  { name: "Brooks", href: "/cash-for-cars-brooks" },
  { name: "Canmore", href: "/cash-for-cars-canmore" },
  { name: "Chestermere", href: "/cash-for-cars-chestermere" },
  { name: "Cochrane", href: "/cash-for-cars-cochrane" },
  { name: "Diamond Valley", href: "/cash-for-cars-diamond-valley" },
  { name: "Didsbury", href: "/cash-for-cars-didsbury" },
  { name: "High River", href: "/cash-for-cars-high-river" },
  { name: "Irricana", href: "/cash-for-cars-irricana" },
];

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.description;
  const canonical = `/blog/${post.slug}`;
  const image = post.cover || "/images/og-image.png";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const recentPosts = getAllPosts().filter((item) => item.slug !== post.slug).slice(0, 4);
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.description,
    datePublished: post.date || undefined,
    mainEntityOfPage: canonicalUrl,
    image: post.cover ? new URL(post.cover, siteUrl).toString() : `${siteUrl}/images/og-image.png`,
    author: {
      "@type": "Organization",
      name: "Maple Cash for Cars",
    },
    publisher: {
      "@type": "Organization",
      name: "Maple Cash for Cars",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/maple-new-golden-logo.png`,
      },
    },
  };

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="border-b border-slate-200 bg-white px-4 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
        </div>
      </div>

      <main>
        <section className="section-red-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <Link href="/blog" className="text-sm font-black uppercase tracking-wide text-[var(--brand-green)]">
              Blog
            </Link>
            <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              {post.title}
            </h1>
            {post.description ? (
              <p className="mt-5 text-lg leading-8 text-slate-700">{post.description}</p>
            ) : null}
            {post.date ? (
              <p className="mt-4 text-sm font-bold text-slate-600">{formatPostDate(post.date)}</p>
            ) : null}
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.8fr)]">
            <article>
              {post.cover ? (
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={1200}
                  height={700}
                  className="mb-8 h-auto w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.14)]"
                />
              ) : null}
              <MarkdownContent content={post.content} />
            </article>

            <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
              <div className="blog-sidebar-card section-green-tint">
                <h2>Get a Cash Offer</h2>
                <p>
                  Have a junk, scrap, damaged, or non-running vehicle? Get a
                  same-day offer with free towing.
                </p>
                <Link className="btn btn-red mt-4 w-full justify-center" href="/#lead-form">
                  Request Offer
                </Link>
              </div>

              {recentPosts.length > 0 ? (
                <div className="blog-sidebar-card">
                  <h2>Recent Posts</h2>
                  <div className="mt-4 grid gap-4">
                    {recentPosts.map((item) => (
                      <Link key={item.slug} href={`/blog/${item.slug}`} className="blog-sidebar-post">
                        {item.cover ? (
                          <Image src={item.cover} alt={item.title} width={120} height={90} />
                        ) : null}
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="blog-sidebar-card">
                <h2>Services</h2>
                <div className="mt-3 grid gap-2">
                  {blogServiceLinks.map((service) => (
                    <Link key={service.href} href={service.href}>{service.name}</Link>
                  ))}
                </div>
              </div>

              <div className="blog-sidebar-card">
                <h2>Areas We Serve</h2>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {blogLocationLinks.map((location) => (
                    <Link key={location.href} href={location.href}>{location.name}</Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
