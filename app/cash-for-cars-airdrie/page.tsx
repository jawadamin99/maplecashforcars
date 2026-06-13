import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CityLeadForm from "../components/city-lead-form";
import CityDetailSections, { type CityDetailSection } from "../components/city-detail-sections";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const phoneDisplay = "(403) 477-1383";
const phoneHref = "tel:+14034771383";

const services = [
  {
    title: "Cash for Cars Airdrie",
    image: "/images/cities/audi-a4-sedan-rear.jpeg",
    alt: "Cash for cars service in Airdrie",
    text: "We buy running vehicles, damaged vehicles, high-mileage vehicles, old vehicles, commercial vans, trucks, and light commercial equipment. We pay between $200 and $20,000 depending on the make, model, year, mileage, and condition. Every offer is calculated fairly and explained clearly - no mystery numbers.",
  },
  {
    title: "Junk Car Removal Airdrie",
    image: "/images/cities/nissan-titan-truck-rear.jpeg",
    alt: "Junk car removal in Airdrie",
    text: "Got a vehicle that's truly done? Rusted out, parts missing, or sitting on flat tires in your driveway? Our junk car removal in Airdrie service is completely free. We send a tow truck to your location, load up the vehicle, and pay you on the spot.",
  },
];

const whatWeBuy = [
  "Running vehicles - cars, SUVs, trucks, and vans",
  "Non-running and damaged vehicles",
  "Accident-damaged or written-off vehicles",
  "High-mileage vehicles",
  "Old and vintage vehicles",
  "Commercial vehicles",
  "Junk and scrap vehicles",
];

const steps = [
  "Share your vehicle details. Give us your name, phone number, and basic vehicle information: make, model, year, and a brief description of the condition. Photos help us give you the most accurate offer upfront.",
  "Get a clear cash offer. Our team reviews your information and sends back a real offer - no vague ranges, no surprises when we arrive.",
  "Choose your pickup time. Morning, afternoon, evening, weekdays, or weekends. We serve all of Airdrie and work around your schedule.",
  "Get paid when we arrive. Our driver completes a quick inspection, handles the transfer paperwork with you, and pays you immediately.",
];

const neighbourhoods = [
  "Coopers Crossing",
  "Bayside",
  "Windsong",
  "Kings Heights",
  "Reunion",
  "Ravenswood",
  "Southwinds",
  "Silver Creek",
  "Canals",
  "Sagewood",
  "Hillcrest",
  "Meadowbrook",
  "Thorburn",
  "Waterstone",
  "Prairie Springs",
  "Morningside",
];

const nearbyCommunities = [
  "Crossfield",
  "Beiseker",
  "Cochrane",
  "Balzac",
  "Rocky View County",
  "Highway 2",
  "Highway 567",
];

const reasons = [
  "Same-day offers and fast pickup",
  "Free towing across Airdrie",
  "No test drives with strangers",
  "Real offers without back-and-forth negotiating",
  "Cash or e-transfer on pickup",
  "Responsible vehicle recycling and scrapping",
];

const faqs = [
  {
    q: "Do you serve all neighbourhoods in Airdrie?",
    a: "Yes. We pick up from every part of Airdrie - from Reunion and Ravenswood in the north to Southwinds and Silver Creek in the south, and everywhere in between.",
  },
  {
    q: "How quickly can you pick up in Airdrie?",
    a: "In most cases, we can schedule pickup on the same day or the next morning. Airdrie is a short drive from our Calgary base, so there is no delay waiting for a distant crew.",
  },
  {
    q: "My car hasn't run in two years. Will you still buy it?",
    a: "Absolutely. Non-running and long-dormant vehicles are a regular part of our business. As long as the vehicle is accessible, we can tow it away.",
  },
  {
    q: "Can you pick up from a storage facility or private lot in Airdrie?",
    a: "Yes, as long as you have authorization to release the vehicle from that location. Just let us know the address when you book.",
  },
  {
    q: "Do Airdrie winters affect what you'll pay?",
    a: "We take condition into account, but Alberta vehicles have Alberta wear. We factor that in fairly and explain your offer clearly.",
  },
];

const detailImages = [
  { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used sedan available for Airdrie vehicle removal" },
  { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for Airdrie junk car pickup" },
  { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Used SUV for Airdrie cash offer" },
  { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Used hatchback for Airdrie scrap car removal" },
  { src: "/images/cities/ford-escape-suv-front.jpeg", alt: "Used SUV for Airdrie cash for cars service" },
];

const detailSections: CityDetailSection[] = [
  {
    title: "Junk Car Removal in Airdrie - We Handle the Heavy Lifting",
    paragraphs: [
      "Got a vehicle that's truly done? Rusted out, parts missing, sitting on flat tires in your driveway? That's not a problem - that's literally what we specialize in.",
      "Our junk car removal in Airdrie service is completely free. We send a tow truck to your location, load up the vehicle, and pay you on the spot.",
      "You do not need to worry about arranging transport, removing every personal belonging ahead of time before we arrive, paying pickup or towing fees, or dealing with Alberta recycling and disposal paperwork.",
      "We handle responsible vehicle recycling and scrapping in compliance with Alberta environmental standards. Your old car gets processed properly - fluids drained, parts salvaged where possible, and the remainder recycled through licensed facilities.",
      "If you've been meaning to get rid of a dead vehicle in your Airdrie garage or yard for months or years, one call gets it gone.",
    ],
  },
  {
    title: "Scrap Car Removal Airdrie - Turning Metal into Money",
    paragraphs: [
      "There's a common misconception that scrap cars have no value. In reality, the steel, aluminum, copper wiring, and reusable parts in your old vehicle have real market value - and we pass a fair share of that back to you.",
      "Our scrap car removal in Airdrie service works like any other pickup: call or fill out our online form with basic vehicle details, receive a same-day cash offer, schedule pickup at a time that works for you, and get paid on the spot when we arrive.",
      "We do not make you wait until after we have processed the vehicle to pay you. You get paid at pickup, every time.",
    ],
  },
  {
    title: "What Documents Do You Need?",
    paragraphs: [
      "Alberta requires a few basic documents when selling a vehicle: valid government-issued photo ID, such as a driver's licence, and vehicle registration or ownership documents - your Certificate of Title.",
      "If you've misplaced your title, we can help walk you through the replacement process with Alberta Motor Vehicle Services before we complete the transaction. Do not let missing paperwork stop you from reaching out - just ask, and we'll guide you.",
    ],
  },
  {
    title: "Why Not Just Post It on Kijiji?",
    paragraphs: [
      "For a running car in great condition, you might get a few hundred dollars more through a private sale - but you'll spend time, effort, and deal with uncertain buyers to get there. For anything less than perfect, we're almost always the better deal when you factor in your time.",
    ],
    table: {
      headers: ["Selling factor", "Maple Cash for Cars", "Kijiji / Facebook Marketplace"],
      rows: [
        ["Time to offer", "Same day", "Days to weeks"],
        ["Guaranteed sale", "Yes", "No"],
        ["Cash on pickup", "Yes", "Depends on buyer"],
        ["Strangers at your home", "No", "Yes"],
        ["Works for junk/non-running", "Yes", "Very limited market"],
        ["Paperwork handled", "Yes", "You figure it out"],
      ],
    },
  },
  {
    title: "Serving Airdrie and All of Rocky View County",
    paragraphs: [
      "Beyond Airdrie city limits, we also serve the surrounding area including Crossfield, Beiseker, Cochrane, Balzac, and communities along Highway 2 and Highway 567.",
      "If you're just outside Airdrie's city boundary, reach out - we'll almost certainly come to you.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cash for Cars Airdrie | Free Towing & Same-Day Offers",
  description:
    "Get top cash for cars in Airdrie with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for an instant offer today!",
  alternates: {
    canonical: "/cash-for-cars-airdrie",
  },
  openGraph: {
    title: "Cash for Cars Airdrie | Free Towing & Same-Day Offers",
    description:
      "Get top cash for cars in Airdrie with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for an instant offer today!",
    url: "/cash-for-cars-airdrie",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maple Cash for Cars Airdrie",
      },
    ],
  },
};

export default function CashForCarsAirdriePage() {
  return (
    <div className="bg-white text-slate-900">
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
                Airdrie vehicle buyers
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Cash for Cars Airdrie - Get Top Dollar for Your Vehicle Today
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                You&apos;ve got a car sitting in the driveway that hasn&apos;t moved in
                months. Maybe it won&apos;t start, maybe repairs cost more than the
                car is worth, or maybe it is simply taking up space. That car is
                worth money, and Maple Cash for Cars will put that money directly
                in your hands.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We offer fast, straightforward cash for cars in Airdrie, with
                free towing, zero hidden fees, and same-day pickup available
                across the city. No dealership trade-in games. No Kijiji
                no-shows. Just a fair offer, fast pickup, and cash in your
                pocket.
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

            <CityLeadForm city="Airdrie" />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-red)]">
                Why Airdrie residents choose us
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Built around your time, not ours
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Airdrie is one of Alberta&apos;s fastest-growing cities, and with
                that growth comes a lot of vehicle turnover. Whether you&apos;re in
                Coopers Crossing, Bayside, Windsong, Kings Heights, or anywhere
                else in the city, we come to you.
              </p>
              <p>
                We know Airdrie - from the farmlands along the city&apos;s eastern
                edge to the newer subdivisions off Veterans Boulevard - and we
                serve every corner of it.
              </p>
              <ul className="grid gap-3 text-base font-semibold text-slate-800 md:grid-cols-2">
                <li>Speed - you don&apos;t want to wait a week for a buyer.</li>
                <li>Simplicity - no test drives with strangers.</li>
                <li>Certainty - a real offer, not a lowball at pickup.</li>
                <li>Convenience - handled at your home or workplace.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              Our Services in Airdrie
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {services.map((service) => (
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
                Scrap Car Removal Airdrie
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Scrap cars still have value. The steel, aluminum, copper wiring,
                and reusable parts in your old vehicle have real market value,
                and we pass a fair share of that back to you. You get paid at
                pickup - cash or e-transfer - without waiting for the vehicle to
                be processed.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                What Vehicles Do We Buy in Airdrie?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                The short answer: almost anything with wheels. We pay between
                $200 and $20,000 depending on the make, model, year, mileage,
                and condition.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {whatWeBuy.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-800">
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
              The Maple Cash for Cars Process
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
              Serving Airdrie and All of Rocky View County
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              We pick up from every part of Airdrie and also serve surrounding
              communities along Highway 2 and Highway 567.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-black text-[var(--brand-red)]">
                  Airdrie neighbourhoods
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {neighbourhoods.map((area) => (
                    <span key={area} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black text-[var(--brand-green)]">
                  Nearby communities
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {nearbyCommunities.map((area) => (
                    <span key={area} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-6 leading-7 text-slate-700">
                  If you&apos;re just outside Airdrie&apos;s city boundary, reach out.
                  We&apos;ll almost certainly come to you.
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
                Same-day offers. Free towing. Cash on pickup. That&apos;s the
                Maple promise.
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
              Airdrie-Specific FAQs
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
            <p className="cta-eyebrow">Ready to get cash for your car in Airdrie?</p>
            <h2 className="cta-title">
              Stop letting a dead or unwanted vehicle cost you space, stress,
              and money. Get your free, no-obligation cash offer today.
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
