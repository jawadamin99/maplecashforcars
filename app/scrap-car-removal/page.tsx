import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CityLeadForm from "../components/city-lead-form";
import JsonLd from "../components/json-ld";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const phoneDisplay = "(403) 477-1383";
const phoneHref = "tel:+14034771383";
const siteUrl = "https://maplecashforcars.ca";

const faqs = [
  {
    q: "Do I get paid to scrap my car, or do I have to pay?",
    a: "You get paid. We give you cash for your scrap vehicle and never charge you to remove or tow it.",
  },
  {
    q: "Is scrapping with you better than going to a scrap yard?",
    a: "Usually, yes. We come to you, tow for free, and price the salvageable parts on top of the metal value rather than a flat counter rate that ignores them.",
  },
  {
    q: "Do you take cars that do not run at all?",
    a: "Yes. Most scrap cars do not run, and we bring the equipment to load and haul them.",
  },
  {
    q: "What happens to my car after pickup?",
    a: "It is recycled responsibly, with fluids drained safely, batteries and tires diverted properly, and metals recovered through legitimate recyclers.",
  },
  {
    q: "How fast can you pick it up?",
    a: "Often the same day. We move quickly to get an end-of-life vehicle off your hands.",
  },
  {
    q: "What do I need to have ready?",
    a: "A valid photo ID and proof of ownership. We help complete the bill of sale on the spot.",
  },
];

const scrapSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/scrap-car-removal#webpage`,
      url: `${siteUrl}/scrap-car-removal`,
      name: "Scrap Car Removal Calgary | Top Scrap Value, Free Tow",
      description:
        "Scrap your car in Calgary for top dollar with free towing and responsible recycling. Same-day pickup, cash on the spot.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/scrap-car-removal#service` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/scrap-car-removal#service`,
      name: "Scrap Car Removal Calgary",
      serviceType: "Scrap car removal",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: ["Calgary", "Airdrie", "Cochrane", "Chestermere", "Okotoks", "Strathmore", "Red Deer", "Lethbridge"],
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/scrap-car-removal`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/scrap-car-removal#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scrap Car Removal",
          item: `${siteUrl}/scrap-car-removal`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/scrap-car-removal#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: "Scrap Car Removal Calgary | Top Scrap Value, Free Tow",
  description:
    "Scrap your car in Calgary for top dollar with free towing and responsible recycling. Same-day pickup, cash on the spot. Call (403) 477-1383 for a free scrap offer.",
  alternates: { canonical: "/scrap-car-removal" },
  openGraph: {
    title: "Scrap Car Removal Calgary | Top Scrap Value, Free Tow",
    description:
      "Scrap your car in Calgary for top dollar with free towing and responsible recycling. Same-day pickup, cash on the spot.",
    url: "/scrap-car-removal",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Scrap Car Removal Calgary" }],
  },
};

export default function ScrapCarRemovalPage() {
  return (
    <div className="bg-white text-slate-900">
      <JsonLd data={scrapSchema} />
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
                Scrap Car Removal Calgary
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Scrap Car Removal Calgary — Top Scrap Value, Free Towing, Responsible Recycling
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                When a vehicle has reached the end of the road, you should not
                have to pay to get rid of it or wonder where it ends up. We pay
                you cash for your scrap car, tow it free, and recycle it the
                right way. Same-day pickup across Calgary.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn btn-red" href="/#lead-form">
                  Get My Scrap Car Value
                </Link>
                <a className="btn btn-outline-dark" href={phoneHref}>
                  Call {phoneDisplay}
                </a>
              </div>
              <ul className="mt-7 grid gap-3 text-base font-bold text-slate-800 md:grid-cols-3">
                <li>Paid by the Vehicle&apos;s Real Value</li>
                <li>Free Same-Day Towing</li>
                <li>Certified Responsible Recycling</li>
              </ul>
            </div>

            <CityLeadForm city="Calgary" />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-red)]">
                The problem
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Scrapping a Car Yourself Is a Bad Deal
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Most people assume the only way to scrap a car is to tow it to a
                yard, accept whatever the counter offers, and hope they do not
                get charged a drop-off fee.
              </p>
              <p>
                That route usually costs you twice: once for arranging your own
                tow on a vehicle that will not move, and again on a lowball flat
                rate that ignores what your car is actually worth in parts and
                metal.
              </p>
              <p>
                Maple Cash for Cars provides scrap car removal in Calgary that
                brings the offer and the tow truck to you. We assess your
                vehicle&apos;s real value, pay you cash on the spot, haul it away
                for free, and process it through proper recycling channels.
              </p>
            </div>
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <Image
              src="/images/tow-scrap.webp"
              alt="Scrap car towing in Calgary"
              width={900}
              height={700}
              className="h-[360px] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
            />
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                When a Vehicle Reaches End-of-Life
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                A scrap car, sometimes called an end-of-life vehicle, is one
                that is no longer worth repairing or putting back on the road.
                Even at this stage, your car holds real value, and we make sure
                you get paid for it instead of giving it away.
              </p>
              <ul className="mt-6 grid gap-3">
                {[
                  "No longer runs and the repair cost far exceeds its value",
                  "Failed a safety or out-of-province inspection beyond economical repair",
                  "Has serious rust or frame damage from Calgary salt and freeze-thaw cycles",
                  "Was written off after a collision, hail, fire, or flood",
                  "Is being parted out or stripped and only the shell remains",
                  "Is too old to register, insure, or trust",
                ].map((item) => (
                  <li key={item} className="rounded-xl bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                More Than a Flat Scrap-Yard Rate
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Scrap car offers are based on far more than weight. A true
                assessment almost always beats a generic scrap-yard quote.
                Offers range across our full scale, and the only way to know
                your number is to ask. The quote is free and there is no
                obligation.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Curb weight and current scrap steel and aluminum prices",
                "Catalytic converter, alternator, battery, rims, and reusable parts",
                "Make, model, and year, because some parts stay in demand",
                "Overall condition and how much is salvageable",
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="process-block px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              How Scrap Car Removal Works
            </h2>
            <div className="process-grid mt-10">
              {[
                "Share your vehicle details. Tell us the make, model, year, and condition, plus your contact info. Photos help us sharpen the figure.",
                "Get a transparent scrap offer. We send a clear, same-day quote with no hidden tow fees and no drop-off charges.",
                "Schedule free pickup. Choose a time anywhere in Calgary. We arrive with the right equipment for a non-running vehicle.",
                "Get paid on pickup. We finish the paperwork, load the car, and pay you cash on the spot.",
              ].map((step, index) => (
                <article key={step} className="process-card">
                  <div className={`process-number ${index % 2 === 0 ? "process-green" : "process-gold"}`}>
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </article>
              ))}
            </div>
            <div className="process-cta">
              <Link className="btn btn-red" href="/#lead-form">
                Get My Free Scrap Offer
              </Link>
            </div>
          </div>
        </section>

        <section className="section-red-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black text-slate-950">
                The Smarter Way to Scrap
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We make scrap car removal quick, transparent, and fair.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "We come to you, so you do not arrange your own tow",
                "We pay real value, not a flat rate",
                "The number we quote is the number you are paid",
                "No prep required: do not drain it, clean it, or strip it",
                "8+ years of local vehicle buying experience",
                "Free towing across Calgary quadrants and surrounding towns",
              ].map((reason) => (
                <li key={reason} className="rounded-xl bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                Responsible Recycling — Done Properly
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                <p>
                  Scrapping a car the right way matters more than most people
                  realize. An end-of-life vehicle holds fluids and materials
                  that cause real environmental harm if dumped carelessly.
                </p>
                <p>
                  We handle every vehicle through a proper end-of-life process:
                  hazardous fluids are drained and disposed of safely, batteries
                  and tires are diverted to the correct streams, recyclable
                  metals are recovered, and the remainder is processed through
                  legitimate recyclers.
                </p>
                <p>
                  You get fair cash for the scrap value and peace of mind that
                  your old car is not leaching contaminants into Calgary&apos;s soil
                  and waterways or sitting in an illegal dump.
                </p>
              </div>
            </div>
            <Image
              src="/images/junk-car-removal.webp"
              alt="Responsible scrap car recycling"
              width={900}
              height={700}
              className="h-[360px] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
            />
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-slate-950">
              What You Need to Scrap a Car in Calgary
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-700">
              The process is straightforward. You need a valid photo ID matching
              the registered owner and proof of ownership, and we help you
              complete the bill of sale at pickup. Your licence plates stay with
              you, so remove them before we tow. You should also cancel your
              registration and insurance through an Alberta registry agent once
              the car is gone.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-slate-950">
              Scrap Car Removal Across Calgary and Surrounding Areas
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-700">
              We collect scrap and end-of-life vehicles city-wide, from Tuscany
              and Bowness in the NW, Saddle Ridge and Bridgeland in the NE,
              Beltline and Signal Hill in the SW, to Mahogany and Forest Lawn in
              the SE. We also serve Airdrie, Cochrane, Chestermere, Okotoks,
              Strathmore, Red Deer, and Lethbridge. Free towing applies
              everywhere we operate.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              FAQ
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((item, index) => (
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
            <p className="cta-eyebrow">Scrap Your Car the Smart Way</p>
            <h2 className="cta-title">
              Get paid and tow it free.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-200">
              Skip the scrap-yard runaround and the lowball flat rate. One call
              gets you a fair cash offer, free same-day towing, and the peace of
              mind that your end-of-life vehicle is recycled the right way.
            </p>
            <div className="cta-actions">
              <a className="btn btn-red" href={phoneHref}>
                Call {phoneDisplay}
              </a>
              <Link className="btn btn-outline-white" href="/#lead-form">
                Request Free Scrap Car Offer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
