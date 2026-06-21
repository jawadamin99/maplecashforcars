"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

const steps = [
  {
    title: "Share Vehicle Details",
    text: "Tell us your name, contact info, and your vehicle's make, model, year, and condition.",
  },
  {
    title: "Get a Fair Offer",
    text: "We send a clear cash offer the same day, usually within a few hours. No hidden charges, no towing fees in the fine print.",
  },
  {
    title: "Schedule Pickup",
    text: "Choose a pickup time and a Calgary location that works for you: home, work, wherever the car sits.",
  },
  {
    title: "Get Paid on Pickup",
    text: "We inspect, complete the paperwork, and pay you immediately when we collect the car.",
  },
];

const faqs = [
  {
    q: "How fast can I get a cash offer for my car in Calgary?",
    a: "Most offers go out the same day you share your vehicle details, often within a few hours.",
  },
  {
    q: "Do you buy junk or non-running vehicles?",
    a: "Yes. We buy running, damaged, junk, and non-running vehicles anywhere in Calgary, with free towing included.",
  },
  {
    q: "Are there any towing or hidden fees?",
    a: "None. Our quotes include free pickup across Calgary and surrounding areas; the number we quote is the number you get.",
  },
  {
    q: "Do you buy hail-damaged cars?",
    a: "Absolutely. Hail-damaged vehicles and insurance write-offs are some of the most common cars we buy in Calgary.",
  },
  {
    q: "What documents do I need to sell my vehicle?",
    a: "A valid photo ID and proof of ownership. We help you complete the bill of sale on pickup.",
  },
];

type ServiceCard = {
  title: string;
  image: string;
  alt: string;
  text: string;
  tone: "red" | "green";
  linkText?: string;
  linkHref?: string;
  textAfter?: string;
};

const services = [
  {
    title: "Cash for Cars Calgary",
    image: "/images/cash-for-cars.webp",
    alt: "Cash for cars Calgary",
    text: "We buy all makes and models in almost any condition and pay fair cash on pickup, from daily drivers to write-offs. If it has four wheels and a VIN, we want to make you an offer.",
    tone: "red",
  },
  {
    title: "Junk Car Removal Calgary",
    image: "/images/junk-car-removal.webp",
    alt: "Junk car removal Calgary",
    text: "A non-running car taking up space can earn you a bylaw notice or cost you a monthly parking stall for nothing. Our ",
    linkText: "junk car removal in Calgary",
    linkHref: "/junk-car-removal",
    textAfter: " clears it out fast with free towing and responsible removal.",
    tone: "green",
  },
  {
    title: "Scrap Car Removal Calgary",
    image: "/images/tow-scrap.webp",
    alt: "Scrap car removal Calgary",
    text: "When a vehicle reaches the end of the road, ",
    linkText: "scrap car removal",
    linkHref: "/scrap-car-removal",
    textAfter: " done right means you get paid for the metal and the car is recycled responsibly, with fluids drained and disposed of correctly.",
    tone: "red",
  },
  {
    title: "Free Towing",
    image: "/images/cash-for-cars-calgary.webp",
    alt: "Free towing Calgary",
    text: "Calgary is a big city, but the tow is always on us, from a Beltline parkade to an acreage past Tuscany.",
    tone: "green",
  },
] satisfies ServiceCard[];

const calgaryReasons = [
  {
    title: "Hail happens here.",
    text: "Calgary sits in one of Canada's most hail-prone corridors. If hail damage left you with a dented vehicle you cannot sell, we buy it as-is.",
  },
  {
    title: "Salt and Chinooks are hard on metal.",
    text: "The freeze-thaw swing of a Calgary Chinook plus winter road salt accelerates rust faster than most cities see.",
  },
  {
    title: "Winter kills cars dead.",
    text: "A car that will not start at -30°C and is not worth repairing is a perfect same-day cash offer. We tow non-runners for free.",
  },
];

const vehicleTypes = [
  "SUVs and crossovers",
  "Cars, sedans, and hatchbacks",
  "Pickup trucks and vans",
  "Buses and minivans",
  "Commercial trucks",
  "All other vehicle types",
];

const calgaryQuadrants = [
  {
    title: "Northwest (NW)",
    areas: "Tuscany, Bowness, Brentwood, Kensington, Country Hills, Evanston",
  },
  {
    title: "Northeast (NE)",
    areas: "Bridgeland, Marlborough, Saddle Ridge, Skyview, Coral Springs",
  },
  {
    title: "Southwest (SW)",
    areas: "Beltline, Marda Loop, Signal Hill, Aspen Woods, Glenmore-area communities",
  },
  {
    title: "Southeast (SE)",
    areas: "Forest Lawn, McKenzie Towne, Mahogany, Auburn Bay, Cranston, Seton",
  },
];

const areas = [
  { name: "Calgary", href: "/"},
  { name: "Red Deer", href: "/cash-for-cars-red-deer" },
  { name: "Lethbridge", href: "/cash-for-cars-lethbridge" },
  { name: "Airdrie", href: "/cash-for-cars-airdrie" },
  { name: "Black Diamond", href: "/cash-for-cars-black-diamond" },
  { name: "Bragg Creek", href: "/cash-for-cars-bragg-creek" },
  { name: "Brooks", href: "/cash-for-cars-brooks" },
  { name: "Cochrane", href: "/cash-for-cars-cochrane" },
  { name: "Diamond Valley", href: "/cash-for-cars-diamond-valley" },
  { name: "Didsbury", href: "/cash-for-cars-didsbury" },
  { name: "Canmore", href: "/cash-for-cars-canmore" },
  { name: "Banff", href: "/cash-for-cars-banff" },
  { name: "Chestermere", href: "/cash-for-cars-chestermere" },
  { name: "Irricana", href: "/cash-for-cars-irricana" },
  { name: "Medicine Hat", href: "/cash-for-cars-medicine-hat" },
  { name: "Nanton", href: "/cash-for-cars-nanton" },
  { name: "Olds", href: "/cash-for-cars-olds" },
  { name: "Okotoks", href: "/cash-for-cars-okotoks" },
  { name: "High River", href: "/cash-for-cars-high-river" },
  { name: "Ponoka", href: "/cash-for-cars-ponoka" },
  { name: "Strathmore", href: "/cash-for-cars-strathmore" },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("pageUrl", window.location.href);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitMessage("Thanks! Your request has been sent.");
      if (typeof window !== "undefined") {
        const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
        if (typeof w.gtag === "function") {
          w.gtag("event", "form_submit");
        }
      }
      form.reset();
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const w = window as typeof window & { gtagSendEvent?: (url: string) => void };
    if (typeof w.gtagSendEvent === "function") {
      e.preventDefault();
      w.gtagSendEvent("tel:+14034771383");
    }
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="hero-redgreen relative overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt="Maple Cash for Cars Calgary"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-mask" />
        <div className="funky-blob funky-blob-red" aria-hidden="true" />
        <div className="funky-blob funky-blob-green" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8 lg:px-12 lg:pb-24 lg:pt-12">
          <div className="relative z-50">
            <SiteHeader variant="hero" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-white">
              <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Cash for Cars Calgary — Turn Your Vehicle Into <span className="text-[var(--brand-green)]">Cash Today</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-100">
                We buy used, old, damaged, junk, and scrap vehicles from Calgary
                and across Alberta. Same-day cash offers, free towing, and a
                clear process from quote to payment — running or not.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#lead-form" className="btn btn-red">
                  Get Cash Offer
                </a>
                <a href="#services" className="btn btn-outline-white">
                  View Services
                </a>
              </div>

              <div className="graphic-strip">
                <div className="graphic-chip">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2"/></svg>
                  <span>Same-Day Pickup</span>
                </div>
                <div className="graphic-chip">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2"/><path d="M14 7h6v6" stroke="currentColor" strokeWidth="2"/></svg>
                  <span>Top Dollar Value</span>
                </div>
                <div className="graphic-chip">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/></svg>
                  <span>Free Towing</span>
                </div>
              </div>
            </div>

            <form
              id="lead-form"
              className="relative z-0 rounded-2xl border-2 border-[var(--brand-green)] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] md:p-8"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-1 text-3xl font-black text-[var(--brand-red)]">Get a Free Cash Offer</h2>
              <p className="mb-5 text-sm text-slate-600">Fill in your details and we will contact you shortly.</p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="name">Name</label>
                  <input id="name" name="name" required className="field" type="text" placeholder="Full name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
                  <input id="email" name="email" required className="field" type="email" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" required className="field" type="tel" placeholder="Your Phone" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="vehicle">Vehicle Make Model</label>
                  <input id="vehicle" name="vehicle" required className="field" type="text" placeholder="Enter vehicle details" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city">City</label>
                <input id="city" name="city" required className="field" type="text" placeholder="Tell us your city/area" />
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={3} className="field" placeholder="Vehicle condition, mileage, pickup area, reason to sell" />
              </div>

              <button type="submit" className="btn btn-red mt-5 w-full">
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              {submitMessage ? (
                <p className="mt-3 text-sm text-slate-600">{submitMessage}</p>
              ) : null}
            </form>
          </div>
        </div>

        <svg className="section-divider" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C180,140 320,0 520,52 C700,100 840,40 1200,84 L1200,120 L0,120 Z" />
        </svg>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">Why Maple Cash for Cars</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900">
              Sell Your Car in Calgary <span className="text-[var(--brand-red)]">Without the Headache</span>
            </h2>
            <p className="mt-5 text-lg text-slate-700">
              That vehicle sitting in your driveway is not getting more valuable.
              Between Calgary winters that eat metal alive and the hailstorms
              that roll through every summer, a car left to sit only loses value
              while you keep paying for insurance, registration, or a parking
              stall you do not need.
            </p>
            <p className="mt-3 text-lg text-slate-700">
              <Link href="/" className="font-black text-[var(--brand-red)] underline underline-offset-4">
                Maple Cash for Cars
              </Link>{" "}
              makes the easy option obvious. We pay cash for cars in Calgary
              whether your vehicle runs perfectly or has not started since the
              last cold snap on Deerfoot Trail. You get a fair offer the same
              day, free towing anywhere in the city, and money in your hand when
              we pick it up.
            </p>
            <p className="mt-3 text-lg text-slate-700">
              No classified ads, no tire-kickers, no no-shows, and no waiting
              weeks for payment. After 8+ years buying vehicles across Calgary
              and surrounding Alberta, we have turned a frustrating chore into a
              simple 24-hour transaction.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/cash-for-cars-calgary.webp"
              alt="Vehicle pickup in Calgary"
              width={900}
              height={700}
              className="h-[430px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section-green-tint px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-slate-900">Cash for Cars and Junk Car Removal Across Calgary</h2>
          <p className="mt-3 text-center section-sub text-lg text-slate-700">Our services cover running, damaged, junk, scrap, and non-running vehicles.</p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className={`service-card ${service.tone === "red" ? "service-card-red" : "service-card-green"}`}
              >
                <Image src={service.image} alt={service.alt} width={900} height={700} className="h-72 w-full object-cover" />
                <div className="p-7">
                  <h3 className={`text-2xl font-black ${service.tone === "red" ? "text-[var(--brand-red)]" : "text-[var(--brand-green)]"}`}>
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-700">
                    {service.text}
                    {service.linkText && service.linkHref ? (
                      <Link href={service.linkHref} className="font-black text-[var(--brand-red)] underline underline-offset-4">
                        {service.linkText}
                      </Link>
                    ) : null}
                    {"textAfter" in service ? service.textAfter : null}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">Why Calgary Drivers Choose Us</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Built for the Way Calgary Treats Cars</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Calgary throws a unique set of problems at car owners, and we have
              built our service around solving exactly those.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {calgaryReasons.map((reason, index) => (
              <article
                key={reason.title}
                className={`rounded-2xl border bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${index % 2 === 0 ? "border-[color-mix(in_srgb,var(--brand-green)_30%,white)]" : "border-[color-mix(in_srgb,var(--brand-red)_30%,white)]"}`}
              >
                <h3 className={`text-2xl font-black ${index % 2 === 0 ? "text-[var(--brand-green)]" : "text-[var(--brand-red)]"}`}>
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">{reason.text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-slate-700">
            On top of that: transparent quotes with no hidden towing charges,
            immediate payment on pickup, and a team that shows up when we say we
            will across all four quadrants of the city.
          </p>
        </div>
      </section>

      <section className="process-block px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="process-hero">
            <h2>How We Work</h2>
            <p className="section-sub">
              Simple, fast, and transparent.
            </p>
          </div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <article key={step.title} className="process-card">
                <div className={`process-number ${index % 2 === 0 ? "process-green" : "process-gold"}`}>
                  {String(index + 1)}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="process-cta">
            <a className="btn btn-outline-dark" href="tel:+14034771383" onClick={handlePhoneClick}>Call Us Now: (403) 477-1383</a>
          </div>
        </div>
      </section>

      <section className="section-red-tint px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">What We Buy</p>
              <h2 className="mt-3 text-4xl font-black text-slate-900">
                We Buy Everything and Pay Between $200 – $20,000
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Whether running or not, we make an offer on hail-damaged cars,
                insurance write-offs, non-runners, high-mileage beaters, and
                rusted-out frames.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {vehicleTypes.map((type) => (
                <li key={type} className="rounded-xl bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-dark px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="cta-eyebrow">What is my car worth in Calgary?</p>
          <h2 className="cta-title">
            Every Vehicle Gets Its Own Quote
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-200">
            Offers range from $200 for scrap-only vehicles up to $20,000 for
            newer or in-demand models. The biggest factors are year, make,
            model, whether it runs, repairability, mileage, rust, hail damage,
            and current scrap metal prices. A 2008 sedan with a blown engine and
            a 2019 truck with hail dents are very different offers, so the only
            way to know your number is to ask. The quote is always free.
          </p>
          <div className="cta-actions">
            <a className="btn btn-red" href="#lead-form">Get Cash Offer</a>
            <a className="btn btn-outline-white" href="tel:+14034771383" onClick={handlePhoneClick}>Call (403) 477-1383</a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-slate-900">
            Cash for Cars Across Every Calgary Quadrant — and Beyond
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-lg leading-8 text-slate-700">
            Our coverage is city-wide and the towing is always on us. We
            regularly pick up vehicles in every Calgary quadrant.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {calgaryQuadrants.map((quadrant, index) => (
              <article
                key={quadrant.title}
                className={`rounded-2xl border bg-slate-50 p-6 ${index % 2 === 0 ? "border-[color-mix(in_srgb,var(--brand-green)_30%,white)]" : "border-[color-mix(in_srgb,var(--brand-red)_30%,white)]"}`}
              >
                <h3 className={`text-xl font-black ${index % 2 === 0 ? "text-[var(--brand-green)]" : "text-[var(--brand-red)]"}`}>
                  {quadrant.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">{quadrant.areas}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-slate-700">
            We also serve the surrounding communities Calgary commuters call
            home, including Airdrie, Cochrane, Chestermere, Okotoks, Strathmore,
            Red Deer, and Lethbridge. If you are just outside the city limits,
            you are still covered.
          </p>
        </div>
      </section>

      <section className="section-green-tint px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-slate-900">Nearby Alberta Locations</h2>
          <p className="mt-2 text-center section-sub text-slate-700">Calgary and surrounding cities</p>
          <div className="areas-grid">
            <ul className="areas-list">
              {areas.map((area) => (
                <li key={area.name}>
                  {area.href ? (
                    <Link href={area.href}>{area.name}</Link>
                  ) : (
                    area.name
                  )}
                </li>
              ))}
            </ul>
            <div className="">
              <Image
                src="/images/alberta-map.webp"
                alt="Alberta service map"
                width={520}
                height={520}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">What You Need</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900">
              What You Need to Sell Your Car in Calgary
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Selling to us is far simpler than a private sale, but Alberta
              requires a couple of basics: a valid photo ID matching the
              registered owner, proof of ownership, and a bill of sale, which we
              help you complete on pickup.
            </p>
            <p>
              Once the sale is done, remember to remove your licence plates. In
              Alberta, plates stay with you, not the vehicle. You can then cancel
              or transfer your registration through an Alberta registry agent.
              Unsure about any of it? Our team walks you through exactly what to
              prepare.
            </p>
          </div>
        </div>
      </section>

      <section className="section-red-tint px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-black text-slate-900">FAQ</h2>
          <p className="mt-2 text-center text-slate-700">Common questions about selling your vehicle with us.</p>
          <div className="mt-8 space-y-3">
            {faqs.map((item, idx) => (
              <details key={item.q} className={`faq-item ${idx % 2 === 0 ? "faq-green" : "faq-red"}`}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-dark px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="cta-eyebrow">Turn Your Calgary Car Into Cash Today</p>
          <h2 className="cta-title">
            Stop paying to store a car you will never drive again.
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-200">
            Whether it is a hail-battered SUV, a rusted-out winter beater, or a
            junk car you just want gone, Maple Cash for Cars gives you a fair
            offer, free towing, and cash in hand — same day.
          </p>
          <div className="cta-actions">
            <a className="btn btn-red" href="tel:+14034771383" onClick={handlePhoneClick}>Call (403) 477-1383</a>
            <a className="btn btn-outline-white" href="#lead-form">Request Free Cash Offer</a>
          </div>
        </div>
      </section>

      <SiteFooter />

      <a className="floating-call" href="tel:+14034771383" onClick={handlePhoneClick} aria-label="Call now">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5.5c0-.8.7-1.5 1.5-1.5h2.2c.7 0 1.2.4 1.4 1l.8 2.6c.2.6 0 1.3-.5 1.7l-1.2 1c1.1 2.2 2.9 4 5.1 5.1l1-1.2c.4-.5 1.1-.7 1.7-.5l2.6.8c.6.2 1 .7 1 1.4v2.2c0 .8-.7 1.5-1.5 1.5H18C10.8 20 4 13.2 4 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}






