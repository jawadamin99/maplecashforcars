import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Ponoka",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Ranch truck for Ponoka cash pickup" },
    { src: "/images/cities/ford-escape-suv-front.jpeg", alt: "Used SUV for Ponoka vehicle sale" },
    { src: "/images/cities/audi-a4-sedan-rear.jpeg", alt: "Used sedan for Ponoka cash offer" },
    { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Junk car removal in Ponoka" },
  ],
  eyebrow: "Ponoka vehicle buyers",
  title: "Cash for Cars Ponoka - Fair Offers, Free Towing & Cash Paid on Pickup",
  intro: [
    "Ponoka sits right at the geographic midpoint of Alberta, positioned along the Queen Elizabeth II Highway corridor between Calgary and Edmonton in Ponoka County.",
    "It is about 100 kilometres south of Edmonton and 130 kilometres north of Calgary, a city of around 7,000 people with a proud identity rooted in agriculture, rodeo culture, and central Alberta community spirit.",
    "The Ponoka Stampede, Ponoka County agricultural district, grain and cattle operations, and the Battle River all anchor a community that works hard, values straight talk, and has little patience for hidden fees.",
    <>
      If you have a truck that finally gave up, an old car sitting in your yard,
      or a non-running vehicle occupying valuable property space,{" "}
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      is ready to take it off your hands today.
    </>,
    "We offer straightforward cash for cars in Ponoka with a confirmed same-day offer, completely free towing to your exact location, and cash paid directly to you before we leave your property.",
  ],
  whyTitle: "We come to Ponoka",
  whyHeading: "Town, county, and rural properties",
  whyParagraphs: [
    "Ponoka is centrally located along Highway 2A and Highway 53, with strong road connections to Wetaskiwin, Lacombe, Rimbey, and the broader central Alberta region.",
    <>
      <Link
        href="/cash-for-cars-ponoka"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        We serve all of Ponoka
      </Link>
      , from residential neighbourhoods near Bonnett Avenue and Highway 2A
      through the townsite, to properties along the Ponoka County agricultural
      corridor and rural acreages surrounding the city.
    </>,
    "We also serve farm and ranch operations along Highway 2, Highway 2A, Highway 53, Range Road 263, and township roads connecting Ponoka to Wetaskiwin, Lacombe, Rimbey, Bentley, Morningside, Millet, and Bashaw.",
    "Whether your vehicle is in a Ponoka driveway, stored in a Quonset on a county farm, sitting on an acreage near the Battle River, or anywhere in Ponoka County, you tell us where it is and we handle the rest.",
  ],
  painPoints: [
    "Free towing across Ponoka and Ponoka County.",
    "Farm, ranch, rodeo, hail-damaged, and long-dormant vehicles accepted.",
    "Cash or e-transfer paid at pickup.",
    "Central Alberta corridor service with no distance surcharge.",
  ],
  services: [
    {
      title: "Cash for Cars Ponoka",
      image: "/images/cities/bmw-3-series-sedan-front.jpeg",
      alt: "Cash for cars service in Ponoka",
      text: "Ponoka County is cattle, grain, and rodeo country. We buy running cars, trucks, SUVs, agricultural and ranch trucks, high-mileage commuter vehicles, rodeo and event vehicles, non-running vehicles, write-offs, hail-damaged vehicles, long-dormant vehicles, and commercial vans.",
    },
    {
      title: "Junk Car Removal Ponoka",
      image: "/images/cities/hyundai-santa-fe-suv-front.jpeg",
      alt: "Junk car removal in Ponoka",
      text: "Our junk car removal in Ponoka includes free tow truck dispatch with no distance surcharge, reliable scheduled pickup, cash or e-transfer on arrival, complete on-site paperwork, and licensed responsible recycling.",
    },
  ],
  scrapTitle: "Scrap Car Removal Ponoka",
  scrapText:
    "Even a completely non-operational, heavily rusted ranch truck or long-abandoned car contains structural steel, aluminum alloys, copper wiring, catalytic converter metals, and salvageable mechanical components with genuine current market value.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Ponoka?",
  whatWeBuyText:
    "We buy all conditions and price honestly for rural Alberta use. Offers range from $200 to $20,000 based on make, model, year, mileage, and overall condition.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "Agricultural and ranch trucks",
    "High-mileage commuter vehicles",
    "Rodeo and event vehicles",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail and weather-damaged vehicles",
    "Commercial vans and work trucks",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Ponoka - Dependable Service Between Two Major Cities",
      paragraphs: [
        "The challenge with junk car removal in Ponoka is that it falls into the gap between Calgary and Edmonton service areas.",
        "We cover the full Highway 2 corridor and specifically include Ponoka in our regular service area. No fuel fee, no rural property surcharge, and no hidden charge for operating outside a city radius.",
        "Ponoka is a scheduled stop in our central Alberta service rotation. We plan it, schedule accurately, and show up when we say we will.",
        "The moment paperwork is signed, you are paid by cash or e-transfer. No waiting for a cheque, no follow-up calls, and no uncertainty.",
        "Vehicle ownership transfer and liability release are completed at your property before we drive away.",
        "Whether the vehicle is off Bonnett Avenue, in a Quonset west of town, at a ranch property near the Battle River, or along Highway 53, one call handles everything.",
      ],
    },
    {
      title: "Scrap Car Removal Ponoka - Old Vehicles Carry More Value Than People Expect",
      paragraphs: [
        "The assumption that a dead, weathered, or long-dormant vehicle is worthless costs Ponoka residents real money.",
        "Steel, aluminum, copper wiring, catalytic converter metals, and intact mechanical components all have current market value.",
        "At Maple Cash for Cars, every offer is calculated using real-time market rates so you receive a fair and meaningful share of that value.",
      ],
    },
    {
      title: "The Real Cost of a Sitting Vehicle in Ponoka",
      bullets: [
        "Insurance overhead: parked vehicles often still require basic storage coverage.",
        "Property and farm space: Quonset bays, yards, and outbuildings have operational value.",
        "Town of Ponoka bylaws: unregistered or inoperable vehicles can attract complaints.",
        "Ponoka County rural regulations: derelict vehicles on private rural land can be followed up.",
        "Stampede town standards: properties visible from town or Highway 2A carry community presentation expectations.",
        "Hail damage and private resale limitations: scrap and salvage value remains real when private resale drops.",
        "Value decreases every season as scrap markets fluctuate and components degrade.",
      ],
    },
    {
      title: "Why Private Selling Rarely Delivers for Ponoka Sellers",
      paragraphs: [
        "Ponoka's population of around 7,000 means the local private buyer pool is real but limited, especially for vehicles that are not clean and ready to drive.",
        "Being between Calgary and Edmonton sounds helpful, but buyers from both cities typically want clean urban vehicles, not high-mileage ranch trucks or hail-damaged agricultural workhorses.",
        "Private listings often lead to slow inquiries, lowball offers, and weeks of uncertainty.",
        "With Maple Cash for Cars, one confirmed offer, one pickup, and one immediate payment removes the complications.",
      ],
    },
    {
      title: "Serving Ponoka and the Central Alberta Highway 2 Corridor",
      paragraphs: [
        "Beyond Ponoka, we serve Wetaskiwin, Lacombe, Rimbey, Bentley, Millet, Bashaw, Leduc, Camrose, and communities along Highway 2, Highway 2A, Highway 53, Highway 13, and Highway 611.",
        "We bridge the gap between Calgary and Edmonton, serving communities that fall between both cities with the same reliable, no-distance-fee service.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Ponoka - Four Simple Steps",
  steps: [
    "Contact us with your vehicle details. Call (403) 477-1383 or fill out our quick online form with year, make, model, and an honest description. Photos help sharpen the offer but are never required.",
    "Receive a confirmed cash offer. We review your details and return a real offer the same day, typically within a couple of hours. It is fixed, not a range.",
    "Schedule pickup at your convenience. Morning, afternoon, evening, or weekend. Ranch and farming schedules are irregular, and we accommodate that.",
    "Get paid when we arrive. Our driver confirms the vehicle, completes transfer paperwork on-site, and pays you immediately before leaving.",
  ],
  areasTitle: "Serving Ponoka and Ponoka County",
  areasText:
    "We pick up from Ponoka homes, acreages, ranches, farm properties, Quonsets, storage sites, and central Alberta Highway 2 corridor communities.",
  areaGroups: [
    {
      title: "Ponoka pickup areas",
      tone: "gold",
      areas: ["Bonnett Avenue", "Highway 2A", "Highway 53", "Battle River area", "Range Road 263", "Ponoka County", "Township roads", "Agricultural corridor"],
    },
    {
      title: "Nearby communities",
      tone: "green",
      areas: ["Wetaskiwin", "Lacombe", "Rimbey", "Bentley", "Morningside", "Millet", "Bashaw", "Leduc", "Camrose"],
      note: "Confirm the address and access details for Quonset, ranch, acreage, or farm building pickups.",
    },
  ],
  whyMapleText:
    "Straight talk, fair deals, no wasted time, free towing, no distance fees, and dependable service across Ponoka and central Alberta.",
  reasons: [
    "Same-day offers",
    "Free towing in Ponoka",
    "Ranch trucks accepted",
    "Hail-damaged vehicles accepted",
    "Central Alberta service",
    "Licensed responsible recycling",
  ],
  faqTitle: "Ponoka-Specific FAQs",
  faqs: [
    {
      q: "Do you actually come to Ponoka, and is there a distance fee from Calgary?",
      a: "Yes. Ponoka is a scheduled stop in our central Alberta service rotation, and there is no distance fee.",
    },
    {
      q: "Do you serve farm and ranch properties in Ponoka County?",
      a: "Absolutely. We serve agricultural and rural properties along Highway 2, Highway 2A, Highway 53, Range Road 263, and township roads throughout the region.",
    },
    {
      q: "My cattle truck has been sitting on the ranch since last year. Is it worth anything?",
      a: "Almost certainly. Long-dormant cattle and farm trucks contain steel, aluminum, copper, and other materials with real current market value.",
    },
    {
      q: "Do you buy hail-damaged vehicles in Ponoka?",
      a: "Yes. Hail-damaged vehicles, including insurance write-offs, are among the most common vehicles we buy in central Alberta.",
    },
    {
      q: "Can you pick up from a Quonset or farm building with limited access near Ponoka?",
      a: "Yes, in most cases. Indoor farm vehicle pickups, tight openings, low clearances, and gravel approaches are part of our regular rural service.",
    },
    {
      q: "Do you serve Wetaskiwin, Lacombe, and Rimbey as well?",
      a: "Yes. Wetaskiwin, Lacombe, Rimbey, Bentley, Millet, Bashaw, and central Alberta corridor communities are part of our service area.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Ponoka vehicle today",
  ctaTitle:
    "Call (403) 477-1383 or fill out our quick online form for a confirmed same-day cash offer, free towing, and pickup within 24 to 48 hours anywhere in Ponoka and the surrounding Ponoka County area.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Ponoka | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Ponoka with free towing & same-day pickup. We buy junk, scrap & used vehicles in Ponoka County. Call Maple Cash for Cars today!",
  alternates: { canonical: "/cash-for-cars-ponoka" },
  openGraph: {
    title: "Cash for Cars Ponoka | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Ponoka with free towing & same-day pickup. We buy junk, scrap & used vehicles in Ponoka County. Call Maple Cash for Cars today!",
    url: "/cash-for-cars-ponoka",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Ponoka" }],
  },
};

export default function CashForCarsPonokaPage() {
  return <LocationPage data={data} />;
}
