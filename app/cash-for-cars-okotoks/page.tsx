import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Okotoks",
  sectionImages: [
    { src: "/images/cities/audi-a4-sedan-rear.jpeg", alt: "Used Audi sedan for vehicle pickup" },
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Used Nissan truck for junk removal" },
    { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used BMW sedan for cash offer" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used Ford SUV for scrap removal" },
  ],
  eyebrow: "Okotoks vehicle buyers",
  title: "Cash for Cars Okotoks - Fast, Fair & Hassle-Free Vehicle Sales",
  intro: [
    "Okotoks has grown into one of Alberta's most thriving mid-sized towns, and if you have a vehicle you no longer need, there is a better option than private listings or dealership trade-in deductions.",
    <>
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      offers transparent cash for cars in Okotoks: a real same-day offer, free
      towing straight to your door, and cash in your hand before we leave.
    </>,
  ],
  whyTitle: "Okotoks residents, we come to your door",
  whyHeading: "Fast pickup across town and acreage properties",
  whyParagraphs: [
    "We know Okotoks well, from the established neighbourhoods near Elizabeth Street and Sheep River to D'Arcy Ranch, Wedderburn, Air Ranch, Cimarron, and Crystal Shores.",
    "Whether you are in a newer subdivision, tucked near historic downtown, or on an acreage along Highway 2A toward High River, we come to you.",
  ],
  painPoints: [
    "No strangers test-driving your vehicle.",
    "Free tow truck pickup included.",
    "Cash or e-transfer on the spot.",
    "Ownership paperwork handled before we leave.",
  ],
  services: [
    {
      title: "Cash for Cars Okotoks",
      image: "/images/cities/toyota-matrix-hatchback-side.jpeg",
      alt: "Cash for cars service in Okotoks",
      text: "We buy running cars, trucks, SUVs, high-mileage commuter vehicles, write-offs, non-running vehicles, rust and weather-damaged vehicles, old farm trucks, commercial vans, and light trucks.",
    },
    {
      title: "Junk Car Removal Okotoks",
      image: "/images/cities/ford-escape-suv-front.jpeg",
      alt: "Junk car removal in Okotoks",
      text: "Our junk car removal in Okotoks eliminates the hard parts: free towing, cash paid on the spot, paperwork handled on-site, and responsible recycling through licensed Alberta facilities.",
    },
  ],
  scrapTitle: "Scrap Car Removal Okotoks",
  scrapText:
    "Even a completely non-running, rusted-out vehicle contains valuable materials such as structural steel, aluminum, copper wiring, catalytic converter metals, and reusable mechanical parts. We calculate offers based on current market rates.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Okotoks?",
  whatWeBuyText:
    "Okotoks is truck-and-SUV country, and the average driveway often holds working vehicles that get used hard. We factor that in when making offers.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "High-mileage commuter vehicles",
    "Accident-damaged and insurance write-offs",
    "Non-running and seized vehicles",
    "Rust and weather-damaged vehicles",
    "Old farm trucks and utility vehicles",
    "Commercial vans and light trucks",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Okotoks - We Handle the Whole Thing",
      paragraphs: [
        "The number one reason people in Okotoks put off getting rid of a junk vehicle is simple: they do not know where to start, and every option seems to involve more effort than it is worth.",
        "Our junk car removal in Okotoks service eliminates every one of those steps. We dispatch to your Okotoks address at no charge. No towing fee, no fuel surcharge, no fine print.",
        "You do not wait for processing or a cheque in the mail. Our driver pays you the moment the paperwork is signed - cash or e-transfer, your choice.",
        "Vehicle ownership transfer, release of liability, and related paperwork are completed on-site before we leave, so there is no lingering administrative loose end.",
        "We process removed vehicles through licensed Alberta recycling facilities, with fluids properly drained, usable parts salvaged, and metals recycled in compliance with provincial environmental standards.",
      ],
    },
    {
      title: "Scrap Car Removal Okotoks - Old Metal Has Real Value",
      paragraphs: [
        "A lot of Okotoks residents assume that a scrap vehicle is basically worthless. That is rarely the case.",
        "Even a completely non-running, rusted-out vehicle contains materials the recycling and salvage market wants: structural steel, aluminum components, copper wiring and harnesses, catalytic converter metals, and reusable mechanical parts.",
        "At Maple Cash for Cars, we calculate offers based on real current market rates for those materials, which means a fair portion of that value goes into your pocket.",
      ],
    },
    {
      title: "The Real Cost of Letting a Vehicle Sit in Okotoks",
      bullets: [
        "Insurance: even a parked vehicle in Alberta often requires basic coverage to protect against liability.",
        "Driveway and property space: a dead vehicle in a garage bay means you cannot use that bay.",
        "Municipal and county bylaws: Okotoks and Foothills County regulate inoperable and unsightly vehicles.",
        "Decreasing value: scrap prices shift and components degrade every season.",
        "Mental overhead: getting the vehicle gone clears one more thing off your list.",
      ],
    },
    {
      title: "Why Private Selling in Okotoks Is Harder Than It Looks",
      paragraphs: [
        "Okotoks has a solid community feel, but the private buyer market is still limited, especially for vehicles that are not in great condition.",
        "Serious buyers want clean, well-maintained vehicles. Anything with high mileage, mechanical issues, cosmetic damage, or age sees private interest drop off fast.",
        <>
          With Maple Cash for Cars, one call, one offer, one pickup, and the
          transaction is complete. For most Okotoks sellers, especially with
          anything less than pristine,{" "}
          <Link
            href="/cash-for-cars-okotoks"
            className="font-black text-[var(--brand-red)] underline underline-offset-4"
          >
            we deliver more value
          </Link>{" "}
          when you account for your time.
        </>,
      ],
    },
  ],
  processTitle: "Scrap Car Removal Okotoks - Four Simple Steps",
  steps: [
    "Tell us about the vehicle with year, make, model, and condition.",
    "Get a confirmed cash offer the same day, typically within a few hours.",
    "Schedule pickup at your convenience, including morning, afternoon, evening, or weekend options.",
    "Get paid when we arrive after a quick visual confirmation and ownership paperwork.",
  ],
  areasTitle: "Serving Okotoks and the Foothills Region",
  areasText: (
    <>
      <Link
        href="/cash-for-cars-okotoks"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        We serve Okotoks
      </Link>{" "}
      and the surrounding Foothills County area, including rural properties and
      communities south of Calgary.
    </>
  ),
  areaGroups: [
    {
      title: "Okotoks neighbourhoods",
      tone: "gold",
      areas: ["D'Arcy Ranch", "Wedderburn", "Air Ranch", "Cimarron", "Crystal Shores", "Downtown Okotoks", "Sheep River", "Milligan Drive"],
    },
    {
      title: "Nearby Foothills communities",
      tone: "green",
      areas: ["High River", "Black Diamond", "Turner Valley", "Nanton", "Aldersyde", "Highway 2", "Highway 2A"],
      note: "If you are south of Calgary and wondering whether we reach you, we almost certainly do.",
    },
  ],
  whyMapleText:
    "A real offer the same day, free pickup anywhere in Okotoks, and cash in your hand before we leave.",
  reasons: [
    "Same-day offers",
    "Free towing in Okotoks",
    "Acreage pickup available",
    "Cash or e-transfer on pickup",
    "No hidden fees",
    "Responsible recycling",
  ],
  faqTitle: "Okotoks-Specific FAQs",
  faqs: [
    {
      q: "Do you serve acreage properties outside Okotoks?",
      a: "Yes. We regularly serve properties in Foothills County around Okotoks, including acreages along Highway 2A, Highway 7, and rural roads south and east of town.",
    },
    {
      q: "Can you pick up from a condo or townhome complex?",
      a: "In most cases yes. Let us know the parking situation and we will confirm access requirements ahead of time.",
    },
    {
      q: "My truck has been sitting on my acreage for years. Will you still buy it?",
      a: "Absolutely. Long-dormant vehicles on rural properties are a regular part of our business.",
    },
    {
      q: "Does the drive from Calgary affect my offer or towing fee?",
      a: "No. Our quotes are all-inclusive for the Okotoks service area.",
    },
    {
      q: "What if my registration has lapsed?",
      a: "That does not prevent the sale. You will need your Alberta Certificate of Title and valid photo ID.",
    },
    {
      q: "How quickly can you pick up in Okotoks?",
      a: "Same-day pickup is often possible depending on scheduling, and next-day pickup is almost always available.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Okotoks vehicle today",
  ctaTitle:
    "Stop letting that unwanted vehicle cost you space, money, and mental energy. We will send a confirmed offer the same day, with pickup available within 24 hours in Okotoks and the surrounding Foothills region.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Okotoks | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Okotoks with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
  alternates: { canonical: "/cash-for-cars-okotoks" },
  openGraph: {
    title: "Cash for Cars Okotoks | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Okotoks with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
    url: "/cash-for-cars-okotoks",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Okotoks" }],
  },
};

export default function CashForCarsOkotoksPage() {
  return <LocationPage data={data} />;
}
