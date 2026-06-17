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
    q: "How much cash will I get for my scrap car in Calgary?",
    a: "Offers typically run $200 to $20,000 depending on weight, year, make, condition, completeness, and current Alberta scrap metal pricing.",
  },
  {
    q: "Is the tow really free?",
    a: "Yes. Free towing is included anywhere in Calgary and across our standard Alberta service area. The quote you accept is the cash you receive.",
  },
  {
    q: "Do you buy scrap cars without a registration or title?",
    a: "Often, yes. Alberta law allows scrap sales with ID and proof of ownership. If your situation is unusual, call us and we will tell you what is needed.",
  },
  {
    q: "How fast can you actually pick up?",
    a: "Most Calgary pickups happen the same day you accept the offer, especially calls placed before noon. We are flexible on evenings and weekends.",
  },
  {
    q: "What do I need to have ready at pickup?",
    a: "Government-issued photo ID, your ownership document or bill of sale, both sets of keys if you have them, and the licence plates removed.",
  },
  {
    q: "Will you pay more if I deliver the car myself?",
    a: "Sometimes, yes. Call us and ask. For most Calgarians, the value of free towing and same-day cash outweighs the small delivery bump.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/cash-for-scrap-cars#webpage`,
      url: `${siteUrl}/cash-for-scrap-cars`,
      name: "Cash for Scrap Cars Calgary | Same-Day Pickup | $200-$20,000",
      description:
        "Get cash for scrap cars in Calgary today. Free towing, same-day pickup, honest offers from $200-$20,000.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/cash-for-scrap-cars#service` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/cash-for-scrap-cars#service`,
      name: "Cash for Scrap Cars Calgary",
      serviceType: "Cash for scrap cars",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: ["Calgary", "Airdrie", "Cochrane", "Chestermere", "Okotoks", "High River", "Strathmore", "Canmore", "Banff", "Red Deer", "Lethbridge", "Medicine Hat"],
      offers: {
        "@type": "AggregateOffer",
        lowPrice: 200,
        highPrice: 20000,
        priceCurrency: "CAD",
        url: `${siteUrl}/cash-for-scrap-cars`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/cash-for-scrap-cars#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: "Cash for Scrap Cars Calgary | Same-Day Pickup | $200-$20,000",
  description:
    "Get cash for scrap cars in Calgary today. Free towing, same-day pickup, honest offers from $200-$20,000. Running or not. Call (403) 477-1383.",
  alternates: { canonical: "/cash-for-scrap-cars" },
  openGraph: {
    title: "Cash for Scrap Cars Calgary | Same-Day Pickup | $200-$20,000",
    description:
      "Get cash for scrap cars in Calgary today. Free towing, same-day pickup, honest offers from $200-$20,000.",
    url: "/cash-for-scrap-cars",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Cash for Scrap Cars Calgary" }],
  },
};

export default function CashForScrapCarsPage() {
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
                Cash for Scrap Cars Calgary
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Cash for Scrap Cars in Calgary — Same-Day Pickup, Honest Offers
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                If a rusted-out sedan has been sitting in your driveway since
                the last Chinook, or a non-running pickup is taking up half your
                garage in Bridgeland, you already know the truth: a scrap car
                loses value every week you wait.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Maple Cash for Cars pays Calgarians real cash for scrap cars,
                running or not, complete or stripped, plated or unplated, and we
                haul it away the same day at no cost to you.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn btn-red" href="/#lead-form">
                  Get My Scrap Car Quote
                </Link>
                <a className="btn btn-outline-dark" href={phoneHref}>
                  Call {phoneDisplay}
                </a>
              </div>
            </div>
            <CityLeadForm city="Calgary" />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Image
              src="/images/tow-scrap.webp"
              alt="Cash for scrap cars Calgary"
              width={900}
              height={700}
              className="h-[360px] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
            />
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                Why Calgarians Trust Us for Cash for Scrap Cars
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                <p>
                  Calgary is hard on vehicles. Between -30°C cold snaps, road
                  salt eating through frame rails, gravel chips on Deerfoot, and
                  the moisture swings every Chinook brings, even well-maintained
                  cars reach the end of their road.
                </p>
                <p>
                  Private buyers ghost you, scrap yards quote one price on the
                  phone and another on arrival, and towing fees eat whatever
                  cash you were going to walk away with. We built Maple Cash for
                  Cars to fix those problems.
                </p>
                <p>
                  Our quote is the price you get paid. Our tow truck is free.
                  And we pay in cash the moment we hook your scrap vehicle to
                  the deck.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-slate-950">
              What Counts as a Scrap Car in Calgary?
            </h2>
            <p className="mt-4 max-w-5xl text-lg leading-8 text-slate-700">
              A scrap car is not just a wreck on blocks. In Alberta, your
              vehicle is realistically scrap when the cost to repair, register,
              or insure it is higher than what it would sell for running.
            </p>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                "Failed out-of-province inspections",
                "Blown engines or transmissions on older vehicles",
                "Frame rot from Calgary winters and road brine",
                "Hail-totalled vehicles and collision write-offs",
                "Abandoned project cars",
                "Vehicles with expired registration you cannot legally drive",
              ].map((item) => (
                <li key={item} className="rounded-xl bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="process-block px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              How Our Cash for Scrap Cars Process Works
            </h2>
            <div className="process-grid mt-10">
              {[
                "Tell us about the vehicle. Send your make, model, year, and a quick description of the condition. Photos help but are not required.",
                "Get a firm cash offer. We quote based on Alberta scrap prices, salvageable parts, and demand, with offers from $200 to $20,000.",
                "We tow it free anywhere in Calgary. From Tuscany to Mahogany, Forest Lawn to Signal Hill, our flatbed comes to you.",
                "Cash in hand, same day. We handle the paperwork, take the keys, and pay you on the spot. Most pickups are done in under 30 minutes.",
              ].map((step, index) => (
                <article key={step} className="process-card">
                  <div className={`process-number ${index % 2 === 0 ? "process-green" : "process-gold"}`}>
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-red-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-slate-950">
              Calgary Problems We Actually Solve
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {[
                "My scrap car has been sitting all winter and will not start.",
                "My condo board or community association is fining me.",
                "I lost the registration. Can I still sell it for scrap?",
                "I am moving out of Calgary and do not want to take the old car.",
                "The insurance write-off cheque did not cover the loan.",
                "I tried Kijiji and Facebook Marketplace and got scammers.",
              ].map((problem) => (
                <article key={problem} className="rounded-xl bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                  <h3 className="font-black text-[var(--brand-red)]">Problem: {problem}</h3>
                  <p className="mt-2 leading-7 text-slate-700">
                    One call, one offer, one pickup. We handle non-runners,
                    paperwork questions, urgent pickups, write-offs, and private
                    sale headaches every day.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                What We Pay Cash For
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We buy every type of end-of-life vehicle Calgarians own. If it
                has wheels and a VIN, get a quote.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Cars, sedans, hatchbacks, and coupes",
                "SUVs and crossovers",
                "Pickup trucks: half-ton, three-quarter, one-ton",
                "Minivans and full-size vans",
                "Commercial trucks, cube vans, and box trucks",
                "Buses and shuttle vehicles",
                "Hail, flood, and fire-damaged vehicles",
                "Vehicles with branded titles",
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-slate-950">
              Responsible Scrap Car Recycling in Alberta
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-700">
              Every vehicle we buy is processed through Alberta-licensed auto
              recyclers. Fluids are drained safely, batteries and tires are
              diverted from landfill, reusable parts are pulled for the local
              repair market, and the remaining steel and aluminum is recycled.
              Roughly 80% of an average scrap car gets recycled.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-slate-950">
              Areas We Cover Across Calgary and Beyond
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-700">
              We provide same-day or next-day cash for scrap car pickup across
              Downtown, NW, NE, SW, SE, and every community in between including
              Beltline, Kensington, Bowness, Bridlewood, McKenzie Towne,
              Cranston, Auburn Bay, Tuxedo Park, and Country Hills.
            </p>
            <p className="mt-4 max-w-5xl text-lg leading-8 text-slate-700">
              We also serve Airdrie, Cochrane, Chestermere, Okotoks, High River,
              Strathmore, Canmore, Banff, Red Deer, Lethbridge, Medicine Hat,
              and surrounding Alberta communities.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              Frequently Asked Questions
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
            <p className="cta-eyebrow">Get Your Cash Offer for Your Scrap Car Today</p>
            <h2 className="cta-title">
              Stop paying to insure, register, or store a vehicle at the end of its life.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-200">
              Calgary&apos;s scrap market is moving, and the longer you wait, the
              less your car is worth. Most quotes are returned within the hour.
            </p>
            <div className="cta-actions">
              <a className="btn btn-red" href={phoneHref}>
                Call {phoneDisplay}
              </a>
              <Link className="btn btn-outline-white" href="/#lead-form">
                Request Free Cash Offer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
