import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CityLeadForm from "../components/city-lead-form";
import CityDetailSections, { type CityDetailSection } from "../components/city-detail-sections";
import CityPageJsonLd from "../components/city-page-json-ld";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const phoneDisplay = "(403) 477-1383";
const phoneHref = "tel:+14034771383";

const services = [
  {
    title: "Cash for Cars Lethbridge",
    image: "/images/cities/ford-escape-suv-front.jpeg",
    alt: "Cash for cars service in Lethbridge",
    text: "We buy all makes and models in almost any condition and pay fair cash on pickup. Sedans, SUVs, crossovers, pickup trucks, vans, minivans, and commercial trucks - running or not. If you're searching for cash for cars in Lethbridge, you get a transparent quote, same-day scheduling, and immediate payment when we collect the vehicle. No bank transfers that clear later, no IOUs.",
  },
  {
    title: "Junk Car Removal Lethbridge",
    image: "/images/cities/audi-a4-sedan-rear.jpeg",
    alt: "Junk car removal in Lethbridge",
    text: "Got a vehicle that's reached the end of the road? Our junk car removal in Lethbridge service handles free towing and responsible removal of non-running and end-of-life vehicles from your home, acreage, or business. We tow from neighbourhoods across all three sides of the city and out to the surrounding farms and acreages, so you don't have to arrange a tow truck or pay to haul it yourself.",
  },
];

const whatWeBuy = [
  "Cars, sedans, and hatchbacks",
  "SUVs and crossovers",
  "Pickup trucks and vans",
  "Buses and minivans",
  "Commercial and farm trucks",
  "Damaged, salvage, and write-off vehicles",
  "Non-running, junk, and scrap vehicles",
];

const steps = [
  "Share your vehicle details. Call us or fill out the form with your name, contact info, vehicle make/model, and current condition. You can upload up to three photos for a more accurate quote.",
  "Get a fair offer. Our team sends a clear cash offer the same day - usually within a few hours - with no hidden charges and no towing fees.",
  "Schedule your pickup. Choose a time that works for you anywhere in Lethbridge or the surrounding communities. We come to you.",
  "Get paid on pickup. We inspect the vehicle, handle the paperwork, and pay you immediately when we collect the car. Done.",
];

const westLethbridge = [
  "Copperwood",
  "Riverstone",
  "Heritage Heights",
  "Mountain Heights",
  "University Heights",
  "Indian Battle Heights",
  "West Highlands",
  "Canyon Crest",
  "Paradise Canyon",
  "SunRidge",
  "Garry Station",
  "The Crossings",
  "Varsity Village",
];

const northLethbridge = [
  "Uplands",
  "Legacy Ridge",
  "BlackWolf",
  "Hardieville",
  "Staffordville",
  "Westminster",
  "Senator Buchanan",
  "Winston Churchill",
  "Park Meadows",
];

const southLethbridge = [
  "London Road",
  "Agnes Davidson",
  "Lakeview",
  "Henderson Lake",
  "Fairmont",
  "Southgate",
  "Southbrook",
  "Southridge",
  "Tudor Estates",
  "Victoria Park",
  "Redwood",
  "Tartan",
];

const nearbyCommunities = [
  "Coaldale",
  "Coalhurst",
  "Taber",
  "Raymond",
  "Magrath",
  "Picture Butte",
  "Nobleford",
  "Fort Macleod",
  "Cardston",
];

const reasons = [
  "8+ years of experience buying vehicles across Alberta",
  "Same-day offers and fast, flexible pickup",
  "Free towing included on every purchase - no surprise fees",
  "Top dollar for running, damaged, junk, and scrap vehicles",
  "Immediate payment on pickup, not days later",
  "Responsible recycling of scrap and end-of-life vehicles",
];

const faqs = [
  {
    q: "How fast can I get a cash offer for my car in Lethbridge?",
    a: "Most offers go out the same day after you share your vehicle details - often within a few hours. Pickup can frequently be scheduled the same day or the next.",
  },
  {
    q: "Do you buy junk or non-running vehicles in Lethbridge?",
    a: "Yes. We buy running, damaged, and non-running vehicles, including junk and scrap cars, and provide free towing throughout Lethbridge and surrounding communities.",
  },
  {
    q: "Are there any towing or hidden fees?",
    a: "No. Our quotes are transparent and include free pickup. There are no surprise towing charges for our standard service area.",
  },
  {
    q: "What documents do I need to sell my vehicle?",
    a: "Usually a valid photo ID and proof of vehicle ownership. Our team will tell you exactly what to prepare before pickup.",
  },
  {
    q: "Do you offer scrap car removal in Lethbridge?",
    a: "Yes. We pay cash for scrap cars and handle responsible, eco-friendly removal and recycling of end-of-life vehicles.",
  },
  {
    q: "How much can I get for my car?",
    a: "We pay between $200 and $20,000 depending on the year, make, model, condition, and current scrap and parts values.",
  },
];

const detailImages = [
  { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Used truck for Lethbridge junk car removal" },
  { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used sedan for Lethbridge vehicle pickup" },
  { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for Lethbridge cash offer" },
  { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Used SUV for Lethbridge scrap removal" },
  { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Used hatchback for Lethbridge cash for cars" },
];

const detailSections: CityDetailSection[] = [
  {
    title: "Why Lethbridge Drivers Sell to Us",
    paragraphs: [
      "Lethbridge sits in southern Alberta on the Oldman River, split into three sides by the river valley and the Crowsnest Highway.",
      "It's one of the sunniest - and windiest - cities in Canada, and those famous chinook winds bring dramatic freeze-thaw temperature swings that are hard on any vehicle.",
      "Combine that with hailstorms, dusty prairie roads, and the long climbs in and out of the coulees, and a lot of cars here end up as write-offs, high-kilometre trade-ins the dealer won't take, or vehicles that cost more to repair than they're worth.",
      <>
        <Link
          href="/cash-for-cars-lethbridge"
          className="font-black text-[var(--brand-red)] underline underline-offset-4"
        >
          We make selling your vehicle in Lethbridge
        </Link>{" "}
        easy: no classifieds, no flaky buyers, and no waiting weeks for payment.
      </>,
    ],
    bullets: [
      "No more lowballers and no-shows. Private buyers on Kijiji and Facebook Marketplace cancel, haggle, and waste your time. We give one clear offer and stick to it.",
      "We buy non-running and damaged vehicles. A battery that died in a cold snap, hail damage, a blown transmission, accident write-offs - none of it stops us.",
      "You stop paying for a car you don't drive. Insurance and registration on a vehicle parked in the driveway is money down the drain. We get it gone fast.",
      "Free towing, anywhere in the city. From Riverstone and Heritage Heights on the west side to Uplands and Legacy Ridge in the north and London Road in the south, pickup is always included.",
    ],
  },
  {
    title: "Cash for Cars, Junk Removal, and Scrap Removal in Lethbridge",
    paragraphs: [
      "We buy all makes and models in almost any condition and pay fair cash on pickup. Sedans, SUVs, crossovers, pickup trucks, vans, minivans, and commercial trucks - running or not.",
      "If you're searching for cash for cars in Lethbridge, you get a transparent quote, same-day scheduling, and immediate payment when we collect the vehicle. No bank transfers that clear later, no IOUs.",
      "Our junk car removal in Lethbridge service handles free towing and responsible removal of non-running and end-of-life vehicles from your home, acreage, or business. We tow from neighbourhoods across all three sides of the city and out to the surrounding farms and acreages, so you do not have to arrange a tow truck or pay to haul it yourself.",
      "When a vehicle is only worth its weight in metal and parts, our scrap car removal in Lethbridge service still puts cash in your hand. We pay fair value for cash for scrap cars, then recycle and dispose of them responsibly - fluids drained, parts recovered, and steel sent for recycling instead of leaking into the ground or cluttering your property.",
    ],
  },
  {
    title: "What We Buy - and What We Pay in Lethbridge",
    paragraphs: [
      "We buy everything on wheels, whether it runs or not, and pay between $200 and $20,000.",
      "Your final offer depends on the year, make, model, condition, mileage, and current scrap and parts values. Newer or in-demand models naturally fetch more, while older junk and scrap vehicles are still worth real money.",
    ],
  },
  {
    title: "Lethbridge Pickup Coverage",
    paragraphs: [
      "We provide cash for cars, junk car removal, and scrap car removal across all three sides of Lethbridge - West, North, and South - and throughout southern Alberta.",
      "West Lethbridge pickup areas include Copperwood, Riverstone, Heritage Heights, Mountain Heights, University Heights, Indian Battle Heights, West Highlands, Canyon Crest, Paradise Canyon, SunRidge, Garry Station, The Crossings, and Varsity Village.",
      "North Lethbridge pickup areas include Uplands, Legacy Ridge, BlackWolf, Hardieville, Staffordville, Westminster, Senator Buchanan, Winston Churchill, and Park Meadows.",
      "South Lethbridge pickup areas include London Road, Agnes Davidson, Lakeview, Henderson Lake, Fairmont, Southgate, Southbrook, Southridge, Tudor Estates, Victoria Park, Redwood, and Tartan.",
      "Nearby communities include Coaldale, Coalhurst, Taber, Raymond, Magrath, Picture Butte, Nobleford, Fort Macleod, and Cardston. If you're near the High Level Bridge, University of Lethbridge, Lethbridge Polytechnic, Park Place Mall, the Enmax Centre, or anywhere along Highway 3 (Crowsnest), Highway 4, Highway 5, Whoop-Up Drive, or Scenic Drive, we'll come to you.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cash for Cars Lethbridge | Top Dollar, Free Towing",
  description:
    "Get top cash for cars in Lethbridge. We buy used, junk & scrap vehicles - free towing, same-day pickup & fair offers. Call (403) 477-1383.",
  alternates: {
    canonical: "/cash-for-cars-lethbridge",
  },
  openGraph: {
    title: "Cash for Cars Lethbridge | Top Dollar, Free Towing",
    description:
      "Get top cash for cars in Lethbridge. We buy used, junk & scrap vehicles - free towing, same-day pickup & fair offers. Call (403) 477-1383.",
    url: "/cash-for-cars-lethbridge",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maple Cash for Cars Lethbridge",
      },
    ],
  },
};

export default function CashForCarsLethbridgePage() {
  return (
    <div className="bg-white text-slate-900">
      <CityPageJsonLd
        city="Lethbridge"
        title="Cash for Cars Lethbridge - Fast Offers, Free Pickup, Real Payment"
        description="Maple Cash for Cars makes selling a vehicle in Lethbridge simple with same-day offers, free towing, and cash on pickup."
        faqs={faqs}
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
                Lethbridge vehicle buyers
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Cash for Cars Lethbridge - Fast Offers, Free Pickup, Real Payment
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Selling a vehicle in Lethbridge shouldn&apos;t mean weeks of
                waiting, endless Marketplace messages, or no-shows in a parking
                lot off Mayor Magrath Drive.{" "}
                <Link
                  href="/"
                  className="font-black text-[var(--brand-red)] underline underline-offset-4"
                >
                  Maple Cash for Cars
                </Link>{" "}
                makes it simple: tell us about your vehicle, get a fair offer
                the same day, and we&apos;ll come to you anywhere in the city -
                West, North, or South Lethbridge - with free towing and cash on
                pickup.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Whether your car is running, broken down, hail-battered, or
                sitting unused in a Copperwood driveway, we buy it. We&apos;ve
                spent 8+ years buying used, old, damaged, junk, and scrap
                vehicles across Alberta, and we pay between $200 and $20,000
                depending on make, model, and condition.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="btn btn-red" href="/#lead-form">
                  Get My Cash Offer
                </Link>
                <a className="btn btn-outline-dark" href={phoneHref}>
                  Call {phoneDisplay}
                </a>
              </div>
            </div>

            <CityLeadForm city="Lethbridge" />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-red)]">
                Why Lethbridge drivers sell to us
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Local vehicle selling without the usual headaches
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Lethbridge sits in southern Alberta on the Oldman River, split
                into three sides by the river valley and the Crowsnest Highway.
                It&apos;s one of the sunniest and windiest cities in Canada, and
                those famous chinook winds bring dramatic freeze-thaw
                temperature swings that are hard on any vehicle.
              </p>
              <p>
                Combine that with hailstorms, dusty prairie roads, and the long
                climbs in and out of the coulees, and a lot of cars here end up
                as write-offs, high-kilometre trade-ins the dealer won&apos;t take,
                or vehicles that cost more to repair than they&apos;re worth.
              </p>
              <ul className="grid gap-3 text-base font-semibold text-slate-800 md:grid-cols-2">
                <li>No more lowballers and no-shows.</li>
                <li>We buy non-running and damaged vehicles.</li>
                <li>You stop paying for a car you don&apos;t drive.</li>
                <li>Free towing anywhere in the city.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              Our Services in Lethbridge
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="service-card service-card-green">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={900}
                    height={700}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-[var(--brand-red)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-700">{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <article className="mt-8 rounded-2xl border-2 border-[color-mix(in_srgb,var(--brand-red)_35%,white)] bg-white p-7 shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
              <h3 className="text-2xl font-black text-[var(--brand-red)]">
                Scrap Car Removal Lethbridge
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                When a vehicle is only worth its weight in metal and parts, our
                scrap car removal in Lethbridge service still puts cash in your
                hand. We pay fair value for cash for scrap cars, then recycle
                and dispose of them responsibly - fluids drained, parts
                recovered, and steel sent for recycling instead of leaking into
                the ground or cluttering your property.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                What We Buy - and What We Pay
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We buy everything on wheels, whether it runs or not, and pay
                between $200 and $20,000. Your final offer depends on the year,
                make, model, condition, mileage, and current scrap and parts
                values.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {whatWeBuy.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CityDetailSections sections={detailSections} images={detailImages} />

        <section className="process-block px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              How It Works - Four Simple Steps
            </h2>
            <div className="process-grid mt-10">
              {steps.map((step, index) => (
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
              Areas We Serve in Lethbridge
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              We provide cash for cars, junk car removal, and scrap car removal
              across all three sides of Lethbridge - West, North, and South -
              and throughout southern Alberta.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-black text-[var(--brand-red)]">
                  West Lethbridge
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {westLethbridge.map((area) => (
                    <span key={area} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-[var(--brand-green)]">
                  North Lethbridge
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {northLethbridge.map((area) => (
                    <span key={area} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-[var(--brand-red)]">
                  South Lethbridge
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {southLethbridge.map((area) => (
                    <span key={area} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-[var(--brand-green)]">
                  Nearby communities & southern Alberta
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {nearbyCommunities.map((area) => (
                    <span key={area} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-6 leading-7 text-slate-700">
                  If you&apos;re near the High Level Bridge, University of
                  Lethbridge, Lethbridge Polytechnic, Park Place Mall, the Enmax
                  Centre, or anywhere along Highway 3, Highway 4, Highway 5,
                  Whoop-Up Drive, or Scenic Drive, we&apos;ll come to you.
                </p>
              </div>
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
                We give Lethbridge a fast, straightforward way to sell a vehicle
                and walk away with cash the same day.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
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
            <p className="cta-eyebrow">Ready to turn your vehicle into cash?</p>
            <h2 className="cta-title">
              Stop paying for a car you don&apos;t drive. Get a fair, same-day offer
              for cash for cars in Lethbridge and let us handle the towing,
              paperwork, and payment.
            </h2>
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
