import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Olds",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Farm truck for Olds cash pickup" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for Olds vehicle sale" },
    { src: "/images/cities/audi-a4-sedan-rear.jpeg", alt: "Used sedan for Olds cash for cars" },
    { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Junk car removal in Olds" },
  ],
  eyebrow: "Olds vehicle buyers",
  title: "Cash for Cars Olds - Same-Day Offers, Free Towing & Cash Paid on Pickup",
  intro: [
    "Olds is the kind of Alberta town that does not need to prove itself. Sitting right along the Queen Elizabeth II Highway corridor in Mountain View County, about 80 kilometres north of Calgary, it has built a quiet reputation as one of central Alberta's most complete communities.",
    "Olds is a real agricultural and educational hub with Olds College, the Olds Cowboy Festival, the Mountain View Ag Society, and a main street that still actually functions as a main street.",
    "People who live in Olds chose it because it works. It has what you need without the noise you do not. Farmers, tradespeople, students, families, and everyone in between tend to be practical people who want practical solutions to practical problems.",
    <>
      If you have an unwanted vehicle sitting in your driveway, yard, garage, or
      acreage,{" "}
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      makes turning it into cash simple and fast.
    </>,
    "We offer straightforward cash for cars in Olds, with a real same-day offer, completely free towing to your location, and cash in your hand before we leave your property. No city-company runaround. No surprise distance fees. No waiting around for a buyer who never shows.",
  ],
  whyTitle: "We serve all of Olds",
  whyHeading: "Olds and the surrounding Mountain View County area",
  whyParagraphs: [
    "Olds has grown steadily into a city of around 10,000 people, anchored by 50th Street, 46th Avenue, and the commercial and residential corridors spreading out from the Olds College campus and downtown core.",
    <>
      <Link
        href="/cash-for-cars-olds"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        We serve all of Olds
      </Link>
      , from the established residential streets near Uptowne Olds to the newer
      developments along the city&apos;s northern and eastern edges, and properties
      near the Olds Airport and industrial areas along Highway 27.
    </>,
    "We also serve rural properties throughout Mountain View County, including farm and ranch operations along Highway 2, Highway 27, Highway 54, Township Road 332, and the range road network connecting Olds to Didsbury, Carstairs, Sundre, Innisfail, and Red Deer.",
    "If your vehicle is on a rural property north of Calgary and you are wondering whether we come out this way, we do, regularly. You tell us where the vehicle is. We handle everything from there.",
  ],
  painPoints: [
    "Free towing in Olds and Mountain View County.",
    "Farm trucks, student vehicles, and hail-damaged units accepted.",
    "Cash or e-transfer paid on the spot.",
    "No distance fees or surprise deductions.",
  ],
  services: [
    {
      title: "Cash for Cars Olds",
      image: "/images/cities/ford-escape-suv-front.jpeg",
      alt: "Cash for cars service in Olds",
      text: "Olds is agricultural country, and agricultural country runs on trucks, utility vehicles, and equipment that gets genuinely used. We buy running cars, trucks, SUVs, agricultural and farm trucks, high-mileage commuter vehicles, non-running vehicles, write-offs, hail-damaged vehicles, commercial vans, work trucks, and student starter vehicles.",
    },
    {
      title: "Junk Car Removal Olds",
      image: "/images/cities/hyundai-santa-fe-suv-front.jpeg",
      alt: "Junk car removal in Olds",
      text: "Our junk car removal in Olds includes free tow truck dispatch with zero distance charge, reliable on-time service, cash or e-transfer paid on the spot, paperwork handled completely on-site, and licensed responsible recycling.",
    },
  ],
  scrapTitle: "Scrap Car Removal Olds",
  scrapText:
    "Even a completely non-operational, heavily rusted vehicle sitting in a field contains materials the recycling and salvage market pays for: structural steel, aluminum alloys, copper wiring, electrical harnesses, catalytic converter metals including platinum, palladium, and rhodium, plus intact mechanical components.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Olds?",
  whatWeBuyText:
    "We price with full awareness of what agricultural and central Alberta use does to a vehicle. Offers range from $200 to $20,000 based on make, model, year, mileage, and condition.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "Agricultural and farm trucks",
    "High-mileage commuter vehicles",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail and weather-damaged vehicles",
    "Old and long-dormant vehicles",
    "Commercial vans, work trucks, and student vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Olds - Done Properly, Done Fast",
      paragraphs: [
        "Finding reliable junk car removal in Olds sounds simple until you start making calls. Many services operate out of Calgary or Red Deer and treat Olds as a distant outlier.",
        "We send a tow truck to your Olds address at no cost to you. No fuel surcharge for the drive from Calgary, no rural property fee, and no additional charge for an acreage address or gravel lane.",
        "Olds is a regular stop for our team. We schedule accurately and show up when we say we will.",
        "When the paperwork is signed, you are paid immediately by cash or e-transfer. Vehicle ownership transfer and liability release are completed at your location before we drive away.",
        "Every removed vehicle is processed through certified Alberta recycling facilities with proper fluid drainage, salvageable parts recovered, and metals recycled in compliance with provincial environmental standards.",
        "Whether the vehicle is near 50th Street, stored in a Quonset on a Mountain View County farm, parked near Olds College, or tucked behind an outbuilding on your acreage, one call takes care of it.",
      ],
    },
    {
      title: "Scrap Car Removal Olds - Your Old Vehicle Is Worth More Than You Think",
      paragraphs: [
        "The most common reaction we get from Olds residents after an offer for a long-dormant or non-running vehicle is that they did not think it would be worth that much.",
        "At Maple Cash for Cars, every offer is calculated using current market rates for salvage and scrap materials. You receive a fair portion of that value, not a token amount designed only to justify the pickup.",
        "Our process is simple: share your vehicle details, receive a confirmed same-day offer, book pickup at your convenience, and get paid when we arrive.",
      ],
    },
    {
      title: "The Real Cost of Keeping an Unwanted Vehicle in Olds",
      bullets: [
        "Ongoing insurance: parked vehicles often still require basic storage coverage.",
        "Property and operational space: garage bays, yards, and farm space have better uses than storing a dead vehicle.",
        "Town of Olds bylaws: inoperable or unregistered vehicles can attract complaints and enforcement.",
        "Mountain View County rural regulations: derelict vehicles on rural land can be followed up by county officials.",
        "Hail damage compounds over time: private resale value drops further with exposure and freeze-thaw cycles.",
        "Olds College vehicle turnover: students and graduates often need a faster path than waiting on Kijiji.",
      ],
    },
    {
      title: "Why Private Selling in Olds Has Real Limitations",
      paragraphs: [
        "Olds has an active community, but a population of around 10,000 means the private buyer pool is real but limited, especially for vehicles that are not clean and ready to drive.",
        "The typical experience is a week of weak inquiries, lowball offers, maybe one serious buyer from Red Deer, and a transaction that takes longer than expected.",
        "For vehicles with mechanical issues, hail damage, high mileage, or age, the process gets slower and less certain.",
        "With Maple Cash for Cars, one call creates one confirmed offer, one pickup, one payment, and the vehicle is gone.",
      ],
    },
    {
      title: "Serving Olds and All of Mountain View County",
      paragraphs: [
        "Beyond Olds, we serve Didsbury, Carstairs, Sundre, Bergen, Cremona, Water Valley, and communities along Highway 2, Highway 27, Highway 22, and Highway 54 north of Calgary.",
        "We also serve the corridor connecting Olds to Innisfail and Red Deer to the north. If you are in central Alberta between Calgary and Red Deer, we almost certainly reach you.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Olds - Four Simple Steps",
  steps: [
    "Share your vehicle details. Call (403) 477-1383 or fill out our quick online form with year, make, model, and an honest description. Photos help sharpen the number but are never required.",
    "Receive a confirmed cash offer. We review your details and return a real offer the same day, typically within a couple of hours. What we quote is what we pay.",
    "Book pickup at your convenience. Morning, afternoon, evening, or weekend. Farm operations have irregular hours, and we accommodate that without complaint.",
    "Get paid when we arrive. Our driver does a quick visual check, completes ownership transfer paperwork on-site, and pays you immediately. Most pickups take 20 to 30 minutes.",
  ],
  areasTitle: "Serving Olds and Mountain View County",
  areasText:
    "We pick up from Olds neighbourhoods, Olds College area properties, industrial areas, storage sites, farms, acreages, and surrounding Mountain View County communities.",
  areaGroups: [
    {
      title: "Olds pickup areas",
      tone: "gold",
      areas: ["50th Street", "46th Avenue", "Uptowne Olds", "Olds College", "Olds Airport", "Highway 27", "Industrial areas", "Township Road 332"],
    },
    {
      title: "Nearby communities",
      tone: "green",
      areas: ["Didsbury", "Carstairs", "Sundre", "Innisfail", "Red Deer", "Bergen", "Cremona", "Water Valley", "Highway 2", "Highway 54"],
      note: "Confirm the address and access situation for farm, acreage, Quonset, or storage facility pickups.",
    },
  ],
  whyMapleText:
    "Same-day offers, free towing, no distance charges, cash on pickup, and practical service for Olds and Mountain View County.",
  reasons: [
    "Same-day offers",
    "Free towing in Olds",
    "Farm trucks accepted",
    "Hail-damaged vehicles accepted",
    "Student vehicles accepted",
    "Licensed responsible recycling",
  ],
  faqTitle: "Olds-Specific FAQs",
  faqs: [
    {
      q: "Do you come all the way to Olds, and is there a distance fee?",
      a: "Yes, we come to Olds regularly, and there is no distance fee. Our Olds quotes are fully all-inclusive.",
    },
    {
      q: "Do you serve farm and rural properties in Mountain View County around Olds?",
      a: "Absolutely. We serve farm and ranch operations along Highway 2, Highway 27, Highway 54, and rural roads connecting Olds to Didsbury, Carstairs, Sundre, and Innisfail.",
    },
    {
      q: "My farm truck has been sitting in a Quonset since the last harvest. Is it still worth anything?",
      a: "Almost certainly. Farm trucks, even dormant for years inside a building, usually contain steel, aluminum, and other materials with genuine market value.",
    },
    {
      q: "Do you buy hail-damaged vehicles in Olds?",
      a: "Yes. Central Alberta hail-damaged vehicles, including insurance write-offs, still have real scrap and salvage value.",
    },
    {
      q: "Can you pick up from a Quonset, outbuilding, or storage facility near Olds?",
      a: "Yes, as long as there is reasonable tow truck access and you have authorization to release the vehicle.",
    },
    {
      q: "Can you accommodate an Olds College student selling an older vehicle quickly?",
      a: "Absolutely. We understand semester timelines, moves, and fast vehicle turnover, and can often arrange same-day or next-day pickup.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Olds vehicle today",
  ctaTitle:
    "Olds people are practical people. Call (403) 477-1383 or fill out our quick form for a confirmed same-day cash offer, free towing, and pickup within 24 hours anywhere in Olds and Mountain View County.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Olds | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Olds with free towing & same-day pickup. We buy junk, scrap & used vehicles in Mountain View County. Call Maple Cash for Cars today!",
  alternates: { canonical: "/cash-for-cars-olds" },
  openGraph: {
    title: "Cash for Cars Olds | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Olds with free towing & same-day pickup. We buy junk, scrap & used vehicles in Mountain View County. Call Maple Cash for Cars today!",
    url: "/cash-for-cars-olds",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Olds" }],
  },
};

export default function CashForCarsOldsPage() {
  return <LocationPage data={data} />;
}
