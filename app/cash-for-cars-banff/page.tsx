import type { Metadata } from "next";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Banff",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Used pickup truck for vehicle removal" },
    { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used sedan for cash for cars" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for junk car pickup" },
    { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Used Hyundai SUV for vehicle sale" },
  ],
  eyebrow: "Banff vehicle buyers",
  title: "Cash for Cars Banff - Get Top Dollar for Your Vehicle, Fast",
  intro: [
    "Banff residents deal with the same vehicle headaches as anyone else: cars that will not start, trucks that cost more to fix than they are worth, and old SUVs they have simply outgrown.",
    "Maple Cash for Cars offers genuine cash for cars in Banff with fair market offers, free towing, same-day payment, and the experience needed to serve a mountain town inside a national park corridor.",
  ],
  whyTitle: "Why selling in Banff is different",
  whyHeading: "National park town service without the runaround",
  whyParagraphs: [
    "Banff sits within Banff National Park, which means limited space, unique municipal rules, and a small year-round population. Private resale can take weeks or months while the vehicle keeps occupying valuable parking.",
    "Our process is built to move quickly, respect the town's unique environment, and get money into your hands without making you jump through hoops.",
  ],
  painPoints: [
    "Free towing with no distance surcharge.",
    "Reliable pickup times for busy Banff schedules.",
    "Paperwork and payment completed on-site.",
    "Environmentally responsible vehicle recycling.",
  ],
  services: [
    {
      title: "Cash for Cars Banff",
      image: "/images/cities/ford-escape-suv-front.jpeg",
      alt: "Cash for cars service in Banff",
      text: "We buy running vehicles, high-mileage vehicles, cold and winter-damaged vehicles, write-offs, non-running vehicles, older trucks and SUVs, and commercial or utility vehicles used by Banff's hospitality and trades industries.",
    },
    {
      title: "Junk Car Removal Banff",
      image: "/images/cities/audi-a4-sedan-rear.jpeg",
      alt: "Junk car removal in Banff",
      text: "Our junk car removal service in Banff includes tow truck dispatch, vehicle inspection, ownership transfer paperwork, and payment at your location before we leave.",
    },
  ],
  scrapTitle: "Scrap Car Removal Banff",
  scrapText:
    "Even a weathered, stripped, or non-running vehicle contains valuable materials such as steel, aluminum, copper wiring, catalytic converter metals, and usable parts. We pass a fair share of that value back to you.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Banff?",
  whatWeBuyText:
    "Banff vehicles show the effects of mountain living: extreme cold, road salt, steep grades, and seasonal use. We price accordingly and do not penalize normal regional wear.",
  whatWeBuy: [
    "Running vehicles",
    "High-mileage commuter vehicles",
    "Cold and winter-damaged vehicles",
    "Accident-damaged and insurance write-offs",
    "Non-running and seized vehicles",
    "Older trucks and SUVs",
    "Commercial and utility vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Banff - Reliable Pickup in a National Park Town",
      paragraphs: [
        "Finding reliable junk car removal in Banff is genuinely harder than it sounds. Many towing and scrap services operate out of Calgary or Cochrane and do not prioritize the Banff run.",
        "Our junk car removal service in Banff is free, reliable, complete, and environmentally responsible. There is no towing fee, fuel surcharge, or hidden distance charge for the drive from Calgary.",
        "We set a pickup time and show up for it. Banff residents often work tourism and hospitality jobs with irregular schedules, and we respect that by being on time.",
        "We handle tow truck dispatch, on-site inspection, ownership transfer paperwork, and payment at your location. You do not wait for a cheque or follow up after pickup.",
        "Responsible disposal matters more in Banff than almost anywhere. We process removed vehicles through licensed Alberta recycling facilities with proper fluid drainage, parts salvage, and metal recycling.",
      ],
    },
    {
      title: "Scrap Car Removal Banff - Real Value From Your Old Vehicle",
      paragraphs: [
        "The assumption that a scrap vehicle has no value is one of the most common misconceptions we encounter, and it costs people money.",
        "Even a completely non-running, stripped-down, weathered vehicle contains materials the recycling and salvage market wants: structural steel, aluminum alloys, copper wiring, catalytic converter metals, and intact mechanical parts.",
        "Our scrap car removal in Banff service is built around passing a fair share of that value back to you, not absorbing it entirely as margin.",
      ],
    },
    {
      title: "The Real Cost of a Sitting Vehicle in Banff",
      bullets: [
        "Space is genuinely scarce in Banff's limited town footprint and leasehold property model.",
        "Town of Banff bylaws regulate inoperable and unsightly vehicles on private and public property.",
        "Insurance overhead can continue even when a vehicle is parked and unused.",
        "Scrap metal prices fluctuate and vehicle parts degrade with every freeze-thaw cycle.",
        "Wildlife considerations matter in Banff because the town sits in an active wildlife corridor.",
      ],
    },
    {
      title: "Serving Banff and the Surrounding Bow Valley",
      paragraphs: [
        "In addition to the Banff townsite, we serve Lake Louise, Field near the BC border, Canmore, Dead Man's Flats, Exshaw, and the Trans-Canada Highway 1 corridor heading east toward Calgary.",
        "If you are in the Rockies and wondering whether we reach you, call and ask. The answer is almost always yes.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Banff - Four Simple Steps",
  steps: [
    "Contact us with your vehicle details, including year, make, model, and condition.",
    "Receive a real cash offer, typically the same day and often within a few hours.",
    "Choose your pickup time. We schedule around morning, afternoon, evening, or weekend availability.",
    "Get paid on the spot after quick visual confirmation and ownership transfer paperwork.",
  ],
  areasTitle: "Serving Banff and the Surrounding Bow Valley",
  areasText:
    "We serve the Banff townsite and the surrounding Bow Valley and Rockies corridor.",
  areaGroups: [
    {
      title: "Banff pickup areas",
      tone: "gold",
      areas: ["Banff Avenue", "Muskrat Street", "Banff industrial compound", "Townsite", "Shared lots", "Residential properties"],
    },
    {
      title: "Nearby Rockies communities",
      tone: "green",
      areas: ["Lake Louise", "Field", "Canmore", "Dead Man's Flats", "Exshaw", "Highway 1 corridor"],
      note: "If you are in the Rockies and wondering whether we reach you, call and ask. The answer is almost always yes.",
    },
  ],
  whyMapleText:
    "Same-day offers, free towing, cash on pickup, and responsible vehicle processing for Banff and the Canadian Rockies.",
  reasons: [
    "Free towing to Banff",
    "No fuel surcharge or distance fee",
    "Pickup times that respect tourism schedules",
    "Cash or e-transfer on pickup",
    "Licensed recycling facilities",
    "No private listing delays",
  ],
  faqTitle: "Banff-Specific FAQs",
  faqs: [
    {
      q: "Do you actually service Banff inside a national park?",
      a: "Yes. We service Banff regularly and are familiar with accessing the townsite.",
    },
    {
      q: "Can you pick up from a shared condo lot?",
      a: "Yes, as long as you have authorization to release the vehicle and there is reasonable tow truck access.",
    },
    {
      q: "Can you accommodate hospitality work schedules?",
      a: "Yes. We schedule pickups seven days a week, including early mornings and evenings when available.",
    },
    {
      q: "Does the distance from Calgary affect the offer or towing fee?",
      a: "No. Our quotes are all-inclusive for Banff pickups.",
    },
    {
      q: "What documents do I need?",
      a: "A valid government-issued photo ID and your Alberta Certificate of Title.",
    },
    {
      q: "My vehicle has not been registered in years. Can you still buy it?",
      a: "Yes. A lapsed registration does not prevent the sale if you have the title and ID.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Banff vehicle today",
  ctaTitle:
    "Call or fill out the quick online form with your vehicle details. We will send a confirmed cash offer the same day and can typically schedule pickup within 24 hours anywhere in Banff.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Banff | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Banff with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
  alternates: { canonical: "/cash-for-cars-banff" },
  openGraph: {
    title: "Cash for Cars Banff | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Banff with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
    url: "/cash-for-cars-banff",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Banff" }],
  },
};

export default function CashForCarsBanffPage() {
  return <LocationPage data={data} />;
}
