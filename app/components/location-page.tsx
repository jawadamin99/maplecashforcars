import Image from "next/image";
import Link from "next/link";
import CityLeadForm from "./city-lead-form";
import CityPageJsonLd from "./city-page-json-ld";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const phoneDisplay = "(403) 477-1383";
const phoneHref = "tel:+14034771383";
const sectionImages = [
  {
    src: "/images/junk-car-removal.webp",
    alt: "Junk car removal tow service",
  },
  {
    src: "/images/cash-for-cars.webp",
    alt: "Cash for cars service",
  },
  {
    src: "/images/tow-scrap.webp",
    alt: "Scrap car towing service",
  },
];

export type LocationPageData = {
  city: string;
  sectionImages?: Array<{
    src: string;
    alt: string;
  }>;
  eyebrow: string;
  title: string;
  intro: string[];
  whyTitle: string;
  whyHeading: string;
  whyParagraphs: string[];
  painPoints: string[];
  services: Array<{
    title: string;
    image: string;
    alt: string;
    text: string;
  }>;
  scrapTitle: string;
  scrapText: string;
  whatWeBuyTitle: string;
  whatWeBuyText: string;
  whatWeBuy: string[];
  extraSections?: Array<{
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }>;
  processTitle: string;
  steps: string[];
  areasTitle: string;
  areasText: string;
  areaGroups: Array<{
    title: string;
    tone: "gold" | "green";
    areas: string[];
    note?: string;
  }>;
  whyMapleText: string;
  reasons: string[];
  faqTitle: string;
  faqs: Array<{
    q: string;
    a: string;
  }>;
  ctaEyebrow: string;
  ctaTitle: string;
};

export default function LocationPage({ data }: { data: LocationPageData }) {
  const extraSectionImages = data.sectionImages?.length ? data.sectionImages : sectionImages;

  return (
    <div className="bg-white text-slate-900">
      <CityPageJsonLd
        city={data.city}
        title={data.title}
        description={data.intro[0]}
        faqs={data.faqs}
      />
      <div className="border-b border-slate-200 bg-white px-4 py-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
        </div>
      </div>

      <main>
        <section className="section-red-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">
                {data.eyebrow}
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                {data.title}
              </h1>
              {data.intro.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn btn-red" href="/#lead-form">
                  Get My Cash Offer
                </Link>
                <a className="btn btn-outline-dark" href={phoneHref}>
                  Call {phoneDisplay}
                </a>
              </div>
            </div>

            <CityLeadForm city={data.city} />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-red)]">
                {data.whyTitle}
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                {data.whyHeading}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              {data.whyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="grid gap-3 text-base font-semibold text-slate-800 md:grid-cols-2">
                {data.painPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              Our Services in {data.city}
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {data.services.map((service) => (
                <article key={service.title} className="service-card service-card-green">
                  <Image src={service.image} alt={service.alt} width={900} height={700} className="h-72 w-full object-cover" />
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-[var(--brand-red)]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <article className="mt-8 rounded-2xl border-2 border-[color-mix(in_srgb,var(--brand-red)_35%,white)] bg-white p-7 shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
              <h3 className="text-2xl font-black text-[var(--brand-red)]">
                {data.scrapTitle}
              </h3>
              <p className="mt-3 leading-7 text-slate-700">{data.scrapText}</p>
            </article>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                {data.whatWeBuyTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {data.whatWeBuyText}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {data.whatWeBuy.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {data.extraSections?.map((section, index) => (
          <section
            key={section.title}
            className={`${index % 2 === 0 ? "section-red-tint" : "bg-white"} px-4 py-14 md:px-8 lg:px-12`}
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                <Image
                  src={extraSectionImages[index % extraSectionImages.length].src}
                  alt={extraSectionImages[index % extraSectionImages.length].alt}
                  width={900}
                  height={700}
                  className="h-[360px] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-950">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.table ? (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                    <table className="w-full min-w-[620px] border-collapse text-left">
                      <thead className="bg-slate-50">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} className="border-b border-slate-200 px-4 py-3 text-sm font-black text-slate-900">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell) => (
                              <td key={cell} className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        <section className="process-block px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              {data.processTitle}
            </h2>
            <div className="process-grid mt-10">
              {data.steps.map((step, index) => (
                <article key={step} className="process-card">
                  <div className={`process-number ${index % 2 === 0 ? "process-green" : "process-gold"}`}>
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </article>
              ))}
            </div>
            <div className="process-cta">
              <a className="btn btn-outline-dark" href={phoneHref}>
                Call Us Now: {phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-slate-950">
              {data.areasTitle}
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              {data.areasText}
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {data.areaGroups.map((group) => (
                <div key={group.title}>
                  <h3 className={`text-xl font-black ${group.tone === "gold" ? "text-[var(--brand-red)]" : "text-[var(--brand-green)]"}`}>
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.areas.map((area) => (
                      <span key={area} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                        {area}
                      </span>
                    ))}
                  </div>
                  {group.note ? (
                    <p className="mt-6 leading-7 text-slate-700">{group.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-red-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black text-slate-950">
                Why Maple Cash for Cars
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {data.whyMapleText}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {data.reasons.map((reason) => (
                <li key={reason} className="rounded-xl bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              {data.faqTitle}
            </h2>
            <div className="mt-8 space-y-3">
              {data.faqs.map((item, index) => (
                <details key={item.q} className={`faq-item ${index % 2 === 0 ? "faq-green" : "faq-red"}`}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-dark px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="cta-eyebrow">{data.ctaEyebrow}</p>
            <h2 className="cta-title">{data.ctaTitle}</h2>
            <div className="cta-actions">
              <Link className="btn btn-red" href="/#lead-form">
                Get My Free Cash Offer
              </Link>
              <a className="btn btn-outline-white" href={phoneHref}>
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
