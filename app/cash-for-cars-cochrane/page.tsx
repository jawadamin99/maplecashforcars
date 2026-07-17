import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CityLeadForm from "../components/city-lead-form";
import CityDetailSections, { type CityDetailSection } from "../components/city-detail-sections";
import CityPageJsonLd from "../components/city-page-json-ld";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import TrustindexSection from "../components/trustindex-section";

const phoneDisplay = "(403) 477-1383";
const phoneHref = "tel:+14034771383";

const services = [
  {
    title: "Cash for Cars Cochrane",
    image: "/images/cities/bmw-3-series-sedan-front.jpeg",
    alt: "Cash for cars service in Cochrane",
    text: "Maple Cash for Cars offers a fair offer, free towing, and payment on the spot. Whether your vehicle is in showroom condition or hasn't run since the last Cochrane Rodeo, we want it.",
  },
  {
    title: "Junk Car Removal Cochrane",
    image: "/images/cities/ford-explorer-suv-side.jpeg",
    alt: "Junk car removal in Cochrane",
    text: "Our junk car removal service includes free tow truck dispatch to your exact location, on-site payment, paperwork support, and responsible recycling following Alberta environmental regulations.",
  },
];

const whatWeBuy = [
  "Used vehicles in good condition",
  "High-mileage vehicles",
  "Winter-damaged vehicles",
  "Accident or hail-damaged vehicles",
  "Non-running and dead vehicles",
  "Old and abandoned vehicles",
  "Trucks, vans, and commercial vehicles",
];

const steps = [
  "Tell us about the vehicle. Call us or fill out the quick online form with the year, make, model, and condition. Photos are helpful but never required.",
  "Receive a cash offer. We review the details and send you a clear offer - typically the same day, often within a few hours.",
  "Book a pickup time. We schedule around your availability, including mornings, afternoons, evenings, and weekends.",
  "Get paid on the spot. Our driver completes a quick inspection, handles the ownership transfer paperwork, and pays you immediately.",
];

const neighbourhoods = [
  "Heartland",
  "Riviera",
  "Sunset Ridge",
  "Heritage Hills",
  "Fireside",
  "Bow Ridge",
  "Gleneagles",
  "West Pointe",
  "Downtown Cochrane",
  "Glenbow",
  "River Heights",
  "Precedence",
  "Jumping Pound Ridge",
];

const nearbyCommunities = [
  "Springbank",
  "Bragg Creek",
  "Redwood Meadows",
  "Morley",
  "Dead Man's Flats",
  "Highway 1A",
  "Highway 22",
  "Rocky View County",
];

const reasons = [
  "Same-day offers whenever scheduling allows",
  "Free towing from Cochrane and nearby rural addresses",
  "Cash or e-transfer on pickup",
  "No private listing hassles",
  "We buy running, damaged, junk, and scrap vehicles",
  "Responsible recycling and disposal",
];

const faqs = [
  {
    q: "Do you pick up from rural addresses near Cochrane?",
    a: "Yes. We serve Cochrane and the surrounding Rocky View County area, including properties along Highway 1A, Highway 22, and rural addresses near Jumping Pound, Redwood Meadows, and Bragg Creek.",
  },
  {
    q: "My car is in a townhome complex with limited parking access. Is that a problem?",
    a: "Not usually. Let us know the parking situation and we will bring the right equipment.",
  },
  {
    q: "Do you buy vehicles with liens on them?",
    a: "If there is an outstanding lien, you will need to settle it with your lender before completing the sale. We can walk you through the process.",
  },
  {
    q: "How does the offer process work if my car is stripped or missing parts?",
    a: "We factor in the vehicle's condition honestly. A stripped vehicle has less value than an intact one, but it almost always still has scrap value.",
  },
  {
    q: "Can you pick up the same day I call?",
    a: "In many cases, yes. Cochrane is a quick drive from our Calgary base, so same-day pickup is frequently available depending on schedule.",
  },
];

const detailImages = [
  { src: "/images/cities/audi-a4-sedan-rear.jpeg", alt: "Used sedan for Cochrane vehicle pickup" },
  { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Used pickup truck for Cochrane junk removal" },
  { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Used SUV for Cochrane cash offer" },
  { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Used hatchback for Cochrane scrap removal" },
  { src: "/images/cities/ford-escape-suv-front.jpeg", alt: "Used SUV for Cochrane vehicle sale" },
];

const detailSections: CityDetailSection[] = [
  {
    title: "Cochrane Drivers, We Come to You",
    paragraphs: [
      "Cochrane is one of Alberta's most scenic small cities - nestled along the Bow River at the foot of the Rocky Mountains, with Highway 1A threading through its heart and Highway 22 connecting it south toward Bragg Creek and the foothills.",
      "It's a city that's grown rapidly, with communities like Heartland, Riviera, Sunset Ridge, Heritage Hills, Fireside, and Bow Ridge now home to thousands of families.",
      "We serve every one of those neighbourhoods. Whether you're near Griffin Road, tucked into a cul-de-sac off Gleneagles Drive, or on the outskirts heading toward Springbank, we'll come to your exact location. You do not drive to us - we drive to you.",
      "And we know Cochrane isn't Calgary. It's a town where people value their time, do not want strangers testing their vehicles, and want the job done cleanly and professionally. That's exactly the experience we deliver.",
    ],
  },
  {
    title: "Junk Car Removal Cochrane - We Handle Everything",
    paragraphs: [
      "Most people who reach out for junk car removal in Cochrane have been putting it off for one simple reason: they do not know where to start. Do you need to drain the fluids yourself? Do you need to pull it to the road? Do you pay for the tow?",
      "The answer to all of those is no - at least when you call us.",
      "Our junk car removal service in Cochrane includes free tow truck dispatch to your exact location, on-site cash payment, all paperwork related to the vehicle transfer, and responsible recycling and disposal following Alberta environmental regulations.",
      "You do not need to clean it out obsessively before we arrive - just grab your personal belongings and any documents. We take care of the rest.",
      "If the vehicle is inside a garage, we can coordinate that too, as long as there's reasonable access for a tow truck. Just mention it when you book and we'll plan accordingly.",
    ],
  },
  {
    title: "Scrap Car Removal Cochrane - Your Old Car Has More Value Than You Think",
    paragraphs: [
      "A lot of Cochrane residents are surprised when they hear what their rusted-out, non-running vehicle is worth. The assumption is that a scrap car is worth nothing. In reality, the steel frame, aluminum components, copper wiring, catalytic converter, and any salvageable parts all have genuine market value - and we make sure you see a fair share of that.",
      "Our scrap car removal in Cochrane works exactly the same as any other vehicle pickup: tell us about the vehicle, receive a clear same-day offer, book a pickup time, and get paid on the spot.",
      "When our driver arrives, they do a quick visual inspection, complete the ownership transfer paperwork with you, and pay you immediately - cash or e-transfer, whichever you prefer. From start to finish, the on-site process takes roughly 20-30 minutes.",
    ],
  },
  {
    title: "The Real Cost of Keeping a Junk Car Around",
    bullets: [
      "Insurance: even a parked, non-running vehicle often needs to be insured in Alberta to protect you from liability.",
      "Space: in Cochrane's newer subdivisions, driveways and garage spots are at a premium.",
      "Depreciation: a vehicle that isn't running isn't gaining value, and every month it sits can reduce the offer.",
      "Neighbour and bylaw issues: Rocky View County and the Town of Cochrane both regulate inoperable vehicles stored on property.",
    ],
  },
  {
    title: "Why Cochrane Sellers Choose Us Over Private Listings",
    paragraphs: [
      "Posting on Kijiji or Facebook Marketplace might seem like the obvious move, but most private buyers in the Cochrane area are looking for clean, newer vehicles they can drive immediately.",
      "For anything with high mileage, mechanical issues, body damage, or age, the pool of interested buyers shrinks fast. And even when someone does show interest, you're dealing with scheduling test drives, strangers coming to your home, negotiating, and hoping the payment clears.",
      "With Maple Cash for Cars, you skip every one of those steps. One call, one offer, one pickup, and it's done. For a running vehicle in decent condition, you might net slightly more through a private sale - but for most situations, the time, effort, and uncertainty of private selling isn't worth the marginal difference.",
    ],
  },
  {
    title: "Serving Cochrane and the Surrounding Foothills Region",
    paragraphs: [
      "In addition to all Cochrane neighbourhoods, we regularly serve the broader area including Springbank, Bragg Creek, Redwood Meadows, Morley, Dead Man's Flats, and communities along Trans-Canada Highway 1 heading west from Calgary.",
      "If you're in the foothills and wondering whether we come out to you - the answer is almost certainly yes.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cash for Cars Cochrane | Free Towing & Instant Cash",
  description:
    "Get top cash for cars in Cochrane with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
  alternates: {
    canonical: "/cash-for-cars-cochrane",
  },
  openGraph: {
    title: "Cash for Cars Cochrane | Free Towing & Instant Cash",
    description:
      "Get top cash for cars in Cochrane with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
    url: "/cash-for-cars-cochrane",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maple Cash for Cars Cochrane",
      },
    ],
  },
};

export default function CashForCarsCochranePage() {
  return (
    <div className="bg-white text-slate-900">
      <CityPageJsonLd
        city="Cochrane"
        title="Cash for Cars Cochrane - Fast Pickup, Fair Offers & Free Towing"
        description="Maple Cash for Cars offers straightforward cash for cars in Cochrane with a fair offer, free towing, and payment on the spot."
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
                Cochrane vehicle buyers
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Cash for Cars Cochrane - Fast Pickup, Fair Offers & Free Towing
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                There&apos;s a certain kind of frustration that builds slowly. You
                park the car thinking you&apos;ll deal with it next week, then the
                registration lapses, the battery dies, and the snow buries it
                for the winter. Now it is costing driveway space, mental energy,
                and possibly bylaw headaches.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                <Link
                  href="/"
                  className="font-black text-[var(--brand-red)] underline underline-offset-4"
                >
                  Maple Cash for Cars
                </Link>{" "}
                offers straightforward cash for cars in Cochrane - a fair offer,
                free towing, and payment on the spot. Whether your vehicle is in
                showroom condition or hasn&apos;t run since the last Cochrane Rodeo,
                we want it.
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

            <CityLeadForm city="Cochrane" />
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-red)]">
                Cochrane drivers, we come to you
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Local pickup across town and the foothills
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                Cochrane is nestled along the Bow River at the foot of the Rocky
                Mountains, with Highway 1A through its heart and Highway 22
                connecting it south toward Bragg Creek and the foothills.
              </p>
              <p>
                We serve communities like Heartland, Riviera, Sunset Ridge,
                Heritage Hills, Fireside, and Bow Ridge. Whether you&apos;re near
                Griffin Road, Gleneagles Drive, or heading toward Springbank, we
                come to your exact location.
              </p>
              <ul className="grid gap-3 text-base font-semibold text-slate-800 md:grid-cols-2">
                <li>No strangers test driving from your driveway.</li>
                <li>We buy high-mileage and winter-damaged vehicles.</li>
                <li>Free towing from accessible locations.</li>
                <li>Simple payment and paperwork at pickup.</li>
              </ul>
            </div>
          </div>
        </section>

        <TrustindexSection />

        <section className="section-green-tint px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-black text-slate-950">
              Our Services in Cochrane
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
                Scrap Car Removal Cochrane
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                A rusted-out, non-running vehicle still has value. The steel
                frame, aluminum components, copper wiring, catalytic converter,
                and salvageable parts all have genuine market value, and we make
                sure you see a fair share of that.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                What Vehicles Do We Buy in Cochrane?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We buy virtually every type of vehicle in virtually every
                condition, with offers from $200 to $20,000 depending on make,
                model, year, mileage, and condition.
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
              Scrap Car Removal Cochrane - Four Simple Steps
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
              Serving Cochrane and the Surrounding Foothills Region
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              <Link
                href="/cash-for-cars-cochrane"
                className="font-black text-[var(--brand-red)] underline underline-offset-4"
              >
                We serve Cochrane neighbourhoods
              </Link>{" "}
              and nearby Rocky View County communities, including rural
              addresses when tow access is available.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-black text-[var(--brand-red)]">
                  Cochrane neighbourhoods
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
                  If you&apos;re in the foothills and wondering whether we come out
                  to you, the answer is almost certainly yes.
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
                One call, one offer, one pickup, and it&apos;s done.
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
              Cochrane-Specific FAQs
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
            <p className="cta-eyebrow">Get your free cash offer today</p>
            <h2 className="cta-title">
              Call or fill out our quick online form with your vehicle details.
              We&apos;ll have an offer back to you the same day and can typically
              arrange pickup within 24 hours anywhere in Cochrane.
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
