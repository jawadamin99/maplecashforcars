import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Strathmore",
  sectionImages: [
    { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Used Toyota hatchback for cash pickup" },
    { src: "/images/cities/ford-escape-suv-front.jpeg", alt: "Used Ford Escape for vehicle removal" },
    { src: "/images/cities/audi-a4-sedan-rear.jpeg", alt: "Used Audi sedan for scrap car removal" },
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Used Nissan truck for cash for cars" },
  ],
  eyebrow: "Strathmore vehicle buyers",
  title: "Cash for Cars Strathmore - Same-Day Offers, Free Towing & Cash on Pickup",
  intro: [
    "Strathmore sits along the Trans-Canada Highway 1 corridor east of Calgary in the heart of Wheatland County. It is a practical community, and unwanted vehicle removal should be practical too.",
    <>
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      offers transparent cash for cars in Strathmore with a real same-day offer,
      free towing to your door, and cash paid before we leave your property.
    </>,
  ],
  whyTitle: "We serve all of Strathmore",
  whyHeading: "No-fuss pickup across town and Wheatland County",
  whyParagraphs: [
    <>
      <Link
        href="/cash-for-cars-strathmore"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        We serve Strathmore
      </Link>
      , from established residential streets near downtown and Wheatland Trail
      to newer developments like Lakewood, Hillview Estates, Westmount, and
      Strathaven.
    </>,
    "We also serve rural properties throughout Wheatland County, including acreages, farm operations, and properties along Highway 564, Highway 9, Range Road 240, and nearby township roads.",
  ],
  painPoints: [
    "Completely free towing.",
    "Same-day or next-day pickup often available.",
    "Cash or e-transfer before we leave.",
    "Paperwork handled completely on-site.",
  ],
  services: [
    {
      title: "Cash for Cars Strathmore",
      image: "/images/cities/hyundai-santa-fe-suv-front.jpeg",
      alt: "Cash for cars service in Strathmore",
      text: "We buy running cars, trucks, SUVs, high-mileage commuter vehicles, farm and agricultural trucks, non-running vehicles, write-offs, hail-damaged vehicles, and commercial vans or utility vehicles.",
    },
    {
      title: "Junk Car Removal Strathmore",
      image: "/images/cities/bmw-3-series-sedan-front.jpeg",
      alt: "Junk car removal in Strathmore",
      text: "Our junk car removal in Strathmore includes free tow truck dispatch, no rural property fee, same-day or next-day pickup when available, payment on the spot, and paperwork handled before we leave.",
    },
  ],
  scrapTitle: "Scrap Car Removal Strathmore",
  scrapText:
    "A non-running or weathered vehicle still has market value in steel, aluminum, copper wiring, catalytic converter metals, and intact mechanical components. We use current market rates to provide fair scrap and salvage offers.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Strathmore?",
  whatWeBuyText:
    "Strathmore's agriculture, trades, and family lifestyle put vehicles to work. We buy all types, in all conditions, and price with Prairie Alberta wear in mind.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "High-mileage commuter vehicles",
    "Farm and agricultural trucks",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail-damaged vehicles",
    "Commercial vans, work trucks, and utility vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Strathmore - One Call and It Is Gone",
      paragraphs: [
        "The single biggest barrier to getting rid of a junk vehicle in Strathmore is inertia. The vehicle has sat long enough that dealing with it feels like a project rather than a task.",
        "Our junk car removal in Strathmore is completely free. We dispatch a tow truck to your address with no towing fee, fuel surcharge, or rural property fee.",
        "Strathmore is a regular and efficient service stop for our team, so same-day pickup is often available depending on schedule, and next-day pickup is almost always possible.",
        "When our driver arrives, you get paid before we leave. Cash or e-transfer - your choice. Vehicle ownership transfer and liability release are completed on-site.",
        "Every vehicle we remove is processed through licensed Alberta recycling facilities with proper fluid drainage, parts salvage where viable, and metal recycling.",
      ],
    },
    {
      title: "Scrap Car Removal Strathmore - Your Old Vehicle Has Real Market Value",
      paragraphs: [
        "A completely non-running, weathered, partially stripped vehicle still has genuine market value.",
        "The recycling and salvage industry pays real rates for structural steel, aluminum alloys, copper wiring and harness systems, catalytic converter metals including platinum, palladium, and rhodium, and intact mechanical components.",
        "At Maple Cash for Cars, we calculate offers using actual current market rates for those materials, so you receive a fair portion of the vehicle's true salvage value.",
      ],
    },
    {
      title: "The Real Cost of Keeping an Unwanted Vehicle in Strathmore",
      bullets: [
        "Insurance overhead: storage coverage can become a monthly cost for something earning you nothing.",
        "Space on your property: a dead vehicle takes up a driveway spot, garage bay, or yard space.",
        "Town and county bylaws: inoperable, unregistered, and unsightly vehicles can attract notices and complaints.",
        "Hail damage and resale reality: private resale value drops heavily, but scrap and salvage value can remain.",
        "Decreasing value over time: scrap metal prices fluctuate and parts degrade with every prairie winter.",
      ],
    },
    {
      title: "Why Private Selling in Strathmore Is Harder Than It Seems",
      paragraphs: [
        "Strathmore's population gives you a real but limited local buyer pool for private vehicle sales.",
        "Serious private buyers want clean, low-mileage, mechanically sound vehicles they can drive away immediately. Anything with hail damage, high kilometres, mechanical issues, or age sees dramatically reduced interest.",
        "With Maple Cash for Cars, one confirmed offer, one pickup, and the transaction is complete. For many Strathmore sellers, we deliver faster results with less effort and comparable or better net value.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Strathmore - Four Simple Steps",
  steps: [
    "Share your vehicle details with year, make, model, and condition.",
    "Get a confirmed cash offer the same day, typically within a few hours.",
    "Schedule pickup at your convenience. Rural and acreage properties are welcome.",
    "Get paid when we arrive after visual confirmation and ownership transfer paperwork.",
  ],
  areasTitle: "Serving Strathmore and All of Wheatland County",
  areasText:
    "We serve Strathmore and the surrounding Wheatland County region east of Calgary.",
  areaGroups: [
    {
      title: "Strathmore neighbourhoods",
      tone: "gold",
      areas: ["Downtown Strathmore", "2nd Avenue", "Wheatland Trail", "Lakewood", "Hillview Estates", "Westmount", "Strathaven", "Ag Grounds area"],
    },
    {
      title: "Wheatland County communities",
      tone: "green",
      areas: ["Carseland", "Gleichen", "Bassano", "Standard", "Rockyford", "Cheadle", "Highway 1", "Highway 9", "Highway 56"],
      note: "If you are in the eastern Calgary region and wondering whether we reach you, we do.",
    },
  ],
  whyMapleText:
    "A confirmed offer the same day, free pickup anywhere in Strathmore, and cash in your hand before we leave.",
  reasons: [
    "Same-day offers",
    "Free towing in Strathmore",
    "Rural and acreage pickup",
    "Cash or e-transfer on pickup",
    "Hail-damaged vehicles accepted",
    "Responsible recycling",
  ],
  faqTitle: "Strathmore-Specific FAQs",
  faqs: [
    {
      q: "Do you buy hail-damaged vehicles in Strathmore?",
      a: "Yes. Hail-damaged vehicles, including insurance write-offs, still have real salvage and scrap value.",
    },
    {
      q: "Do you serve rural properties and acreages in Wheatland County?",
      a: "Absolutely. We serve acreages and farm operations throughout Wheatland County.",
    },
    {
      q: "My farm truck has not run in four years. Is it still worth anything?",
      a: "Almost certainly yes. Long-dormant farm vehicles contain materials with real market value.",
    },
    {
      q: "Can you pick up from storage facilities or the Ag Grounds area?",
      a: "Yes, as long as you have authorization to release the vehicle and there is tow truck access.",
    },
    {
      q: "Does the drive from Calgary add a towing fee?",
      a: "No. Our quotes for Strathmore are all-inclusive.",
    },
    {
      q: "What documents do I need?",
      a: "A valid government-issued photo ID and your Alberta Certificate of Title.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Strathmore vehicle today",
  ctaTitle:
    "Stop letting an unwanted vehicle sit and lose value season after season. We will send a confirmed offer the same day, with pickup available within 24 hours in Strathmore and Wheatland County.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Strathmore | Free Towing & Same-Day Pay",
  description:
    "Get top cash for cars in Strathmore with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
  alternates: { canonical: "/cash-for-cars-strathmore" },
  openGraph: {
    title: "Cash for Cars Strathmore | Free Towing & Same-Day Pay",
    description:
      "Get top cash for cars in Strathmore with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
    url: "/cash-for-cars-strathmore",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Strathmore" }],
  },
};

export default function CashForCarsStrathmorePage() {
  return <LocationPage data={data} />;
}
