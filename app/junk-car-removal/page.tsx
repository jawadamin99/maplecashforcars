import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CityLeadForm from "../components/city-lead-form";
import JsonLd from "../components/json-ld";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import TrustindexSection from "../components/trustindex-section";

const phoneDisplay = "(403) 477-1383";
const phoneHref = "tel:+14034771383";
const siteUrl = "https://maplecashforcars.ca";

const faqs = [
  {
    q: "Is junk car removal really free?",
    a: "Yes. Free towing is included, and we pay you cash. You never pay us to remove the vehicle.",
  },
  {
    q: "Do you take cars that do not run?",
    a: "That is most of what we do. Non-running, dead-engine, and immobile vehicles are all welcome, and we bring the equipment to load them.",
  },
  {
    q: "Do I need to clean or prepare the car?",
    a: "No. Leave it exactly as it is. We take it as-is.",
  },
  {
    q: "How much is my junk car worth?",
    a: "Offers depend on the vehicle's year, make, model, condition, and current scrap prices. The quote is always free.",
  },
  {
    q: "How fast can you pick it up?",
    a: "Often the same day. We aim to get a junk car off your property as quickly as you would like.",
  },
  {
    q: "What documents do I need?",
    a: "A valid photo ID and proof of ownership. We help with the bill of sale on the spot.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/junk-car-removal#webpage`,
      url: `${siteUrl}/junk-car-removal`,
      name: "Junk Car Removal Calgary | Free Towing & Cash Paid",
      description:
        "Free junk car removal in Calgary with same-day pickup and cash paid on the spot. We haul away non-running, scrap and damaged cars.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/junk-car-removal#service` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/junk-car-removal#service`,
      name: "Junk Car Removal Calgary",
      serviceType: "Junk car removal",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: ["Calgary", "Airdrie", "Cochrane", "Chestermere", "Okotoks", "Strathmore", "Red Deer", "Lethbridge"],
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/junk-car-removal`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/junk-car-removal#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: "Junk Car Removal Calgary | Free Towing & Cash Paid",
  description:
    "Free junk car removal in Calgary with same-day pickup and cash paid on the spot. We haul away non-running, scrap & damaged cars. Call (403) 477-1383 for an offer.",
  alternates: { canonical: "/junk-car-removal" },
  openGraph: {
    title: "Junk Car Removal Calgary | Free Towing & Cash Paid",
    description:
      "Free junk car removal in Calgary with same-day pickup and cash paid on the spot. We haul away non-running, scrap and damaged cars.",
    url: "/junk-car-removal",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Junk Car Removal Calgary" }],
  },
};

export default function JunkCarRemovalPage() {
  return (
    <div className="bg-white text-slate-900">
      <JsonLd data={schema} />
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
                Junk Car Removal Calgary
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Junk Car Removal Calgary — Free Towing, Cash on the Spot
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Got a car that will not start, cannot pass inspection, or costs
                more to fix than it is worth? We haul it away for free and pay
                you cash the same day. No cleaning it up, no jump-starting it,
                no pushing it out of the garage. We handle all of it.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn btn-red" href="/#lead-form">
                  Get My Junk Car Offer
                </Link>
                <a className="btn btn-outline-dark" href={phoneHref}>
                  Call {phoneDisplay}
                </a>
              </div>
              <ul className="mt-7 grid gap-3 text-base font-bold text-slate-800 md:grid-cols-3">
                <li>Free Same-Day Towing</li>
                <li>Cash Paid on Pickup</li>
                <li>Any Condition Accepted</li>
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
                A Junk Car Is Costing You More Than You Think
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                It feels harmless, that old vehicle parked beside the house or
                taking up a stall in the parkade. But a junk car quietly drains
                money and patience.
              </p>
              <p>
                You may still be paying insurance or registration on it, or
                eating a monthly parking cost for something you will never
                drive. In many Calgary communities, a derelict or non-running
                vehicle left in view can trigger a bylaw complaint and a fine.
              </p>
              <p>
                Maple Cash for Cars ends the problem in a single visit. We
                provide{" "}
                <Link href="/junk-car-removal" className="font-black text-[var(--brand-red)] underline underline-offset-4">
                  junk car removal in Calgary
                </Link>{" "}
                with free towing, a fair cash offer, and same-day pickup,
                turning the eyesore in your driveway into money in your pocket.
              </p>
            </div>
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <Image
              src="/images/junk-car-removal.webp"
              alt="Junk car removal tow truck in Calgary"
              width={900}
              height={700}
              className="h-[360px] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
            />
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                If You Are Asking, We Probably Buy It
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                A junk car is not always a rusted shell. SUVs, sedans, pickup
                trucks, vans, minivans, commercial trucks, make and model do not
                matter. If it has a VIN and you want it gone, request an offer.
              </p>
              <ul className="mt-6 grid gap-3">
                {[
                  "Non-running vehicles with dead engines or blown transmissions",
                  "Vehicles that failed inspection or cannot pass an out-of-province check",
                  "Cars not worth repairing because the repair bill is higher than value",
                  "Accident, hail, fire, or flood damaged vehicles",
                  "High-mileage or old vehicles past their useful life",
                  "Missing parts, partially dismantled, abandoned, or inherited vehicles",
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
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-slate-950">
              Three Reasons Waiting Costs You
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "It is losing value every day.",
                  text: "Scrap metal prices fluctuate, and a car exposed to Calgary's freeze-thaw cycles and road salt corrodes fast.",
                },
                {
                  title: "It is a liability where it sits.",
                  text: "Leaking fluids stain driveways, sharp rusted edges are a hazard, and a non-running vehicle can trigger a bylaw or condo board issue.",
                },
                {
                  title: "It is free money you have not claimed.",
                  text: "Even a worthless-looking junk car holds recyclable steel, aluminum, a catalytic converter, and reusable components.",
                },
              ].map((item, index) => (
                <article key={item.title} className={`rounded-2xl border bg-slate-50 p-6 ${index % 2 === 0 ? "border-[color-mix(in_srgb,var(--brand-green)_30%,white)]" : "border-[color-mix(in_srgb,var(--brand-red)_30%,white)]"}`}>
                  <h3 className={`text-xl font-black ${index % 2 === 0 ? "text-[var(--brand-green)]" : "text-[var(--brand-red)]"}`}>
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-block px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              How Our Junk Car Removal Works
            </h2>
            <div className="process-grid mt-10">
              {[
                "Tell us about the car. Send your name, contact info, and the vehicle's make, model, year, and condition.",
                "Get a free cash offer. We send a transparent quote the same day, usually within a few hours, with no hidden towing charges.",
                "Pick a pickup time. Choose a slot that suits you, anywhere in Calgary. We come to the car; you do not move it.",
                "Get paid on pickup. We complete the paperwork, load the vehicle, and hand you cash on the spot. Gone in a single visit.",
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
                Get My Free Offer Now
              </Link>
            </div>
          </div>
        </section>

        <section className="section-red-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black text-slate-950">
                We Pay You — We Do Not Charge You
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                A lot of wreckers quote a fee to take a junk car off your hands.
                <Link href="/" className="font-black text-[var(--brand-red)] underline underline-offset-4">
                  We do the opposite
                </Link>
                : we pay cash, and the tow is always free.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Free same-day towing across every Calgary quadrant and surrounding towns",
                "Any condition, no prep needed",
                "Transparent quotes with no surprise deductions",
                "Immediate cash payment when we collect the vehicle",
                "8+ years of local experience",
                "Fast, stress-free process",
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
                Your Old Car, Disposed of the Right Way
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                <p>
                  Junk car removal is not just about hauling. It is about
                  handling an end-of-life vehicle properly.
                </p>
                <p>
                  We drain and dispose of fluids like oil, coolant, and brake
                  fluid correctly, recover recyclable metals, and process the
                  rest through legitimate channels. That keeps contaminants out
                  of Calgary&apos;s soil and waterways and out of illegal dump sites.
                </p>
              </div>
            </div>
            <Image
              src="/images/tow-scrap.webp"
              alt="Responsible junk car recycling"
              width={900}
              height={700}
              className="h-[360px] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
            />
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-slate-950">
              What You Need to Remove a Junk Car in Calgary
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-700">
              It is simpler than a private sale. You need a valid photo ID
              matching the registered owner, proof of ownership, and a bill of
              sale, which we help you complete on pickup. In Alberta, licence
              plates stay with you, so remove them before we tow, and cancel or
              transfer your registration through a registry agent.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black text-slate-950">
              Junk Car Removal Across Calgary and Beyond
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-700">
              We pick up junk and scrap vehicles city-wide, from Tuscany and
              Bowness in the NW, Saddle Ridge and Bridgeland in the NE, Beltline
              and Signal Hill in the SW, to Mahogany and Forest Lawn in the SE.
              We also cover{" "}
              <Link href="/cash-for-cars-airdrie" className="font-black text-[var(--brand-red)] underline underline-offset-4">Airdrie</Link>
              ,{" "}
              <Link href="/cash-for-cars-cochrane" className="font-black text-[var(--brand-red)] underline underline-offset-4">Cochrane</Link>
              ,{" "}
              <Link href="/cash-for-cars-chestermere" className="font-black text-[var(--brand-red)] underline underline-offset-4">Chestermere</Link>
              ,{" "}
              <Link href="/cash-for-cars-okotoks" className="font-black text-[var(--brand-red)] underline underline-offset-4">Okotoks</Link>
              ,{" "}
              <Link href="/cash-for-cars-strathmore" className="font-black text-[var(--brand-red)] underline underline-offset-4">Strathmore</Link>
              ,{" "}
              <Link href="/cash-for-cars-red-deer" className="font-black text-[var(--brand-red)] underline underline-offset-4">Red Deer</Link>
              , and{" "}
              <Link href="/cash-for-cars-lethbridge" className="font-black text-[var(--brand-red)] underline underline-offset-4">Lethbridge</Link>
              . Towing is free everywhere we serve.
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

        <TrustindexSection />

        <section className="cta-dark px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="cta-eyebrow">Get That Junk Car Gone</p>
            <h2 className="cta-title">
              And get paid for it.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-200">
              Stop paying to store, insure, or look at a car you will never
              drive again. One call, one pickup, cash in hand.
            </p>
            <div className="cta-actions">
              <a className="btn btn-red" href={phoneHref}>
                Call {phoneDisplay}
              </a>
              <Link className="btn btn-outline-white" href="/#lead-form">
                Request Free Junk Car Offer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
