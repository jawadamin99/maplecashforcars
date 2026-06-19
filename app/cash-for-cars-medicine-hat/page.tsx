import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Medicine Hat",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Service truck for Medicine Hat cash pickup" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for Medicine Hat vehicle sale" },
    { src: "/images/cities/audi-a4-sedan-rear.jpeg", alt: "Used sedan for Medicine Hat cash offer" },
    { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Junk car removal in Medicine Hat" },
  ],
  eyebrow: "Medicine Hat vehicle buyers",
  title: "Cash for Cars Medicine Hat - Top Dollar, Free Towing & Same-Day Offers",
  intro: [
    "Medicine Hat does not need anyone to introduce it. The Gas City, named for the natural gas reserves discovered beneath its soil in the late 1800s, is one of Alberta's most self-sufficient, sun-soaked, and proudly independent cities.",
    "Situated along the South Saskatchewan River in the southeast corner of Alberta, just kilometres from the Saskatchewan border, Medicine Hat is a city of around 65,000 people that has always operated on its own terms.",
    "It has more hours of sunshine than almost any other Canadian city, one of the lowest tax burdens in the country, and a manufacturing and energy economy that gives it resilience most cities its size do not possess.",
    "Residents here value straight talk, practical solutions, and services that deliver what they promise without padding the bill.",
    <>
      If you have an unwanted vehicle sitting on your Medicine Hat property,{" "}
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      is ready to solve that problem today with a genuine same-day offer,
      completely free towing, and cash in your hand before our driver leaves.
    </>,
  ],
  whyTitle: "We serve all of Medicine Hat",
  whyHeading: "Every neighbourhood and every corner",
  whyParagraphs: [
    "Medicine Hat stretches across both sides of the South Saskatchewan River, connected by bridges and divided into distinct communities that give the city a layered, neighbourhood-by-neighbourhood character.",
    <>
      <Link
        href="/cash-for-cars-medicine-hat"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        We serve all of Medicine Hat
      </Link>
      , from Ross Glen, Riverside, Crescent Heights, and Norwood to newer
      developments in Southridge, Crestwood, Vista, and Ranchlands.
    </>,
    "We also serve the surrounding Cypress County rural area, including acreage and agricultural properties along Highway 1, Highway 3, Highway 41, Highway 523, and the range road network connecting Medicine Hat to Redcliff, Dunmore, Irvine, Ralston, Seven Persons, and the Cypress Hills corridor.",
    "Whether your vehicle is in a Southridge driveway, a Medicine Hat Industrial Park property, a rural acreage near Cypress County, or anywhere else in or around the city, you tell us where it is and we handle everything.",
  ],
  painPoints: [
    "Free towing with no Medicine Hat distance surcharge.",
    "Energy, industrial, farm, fleet, and hail-damaged vehicles accepted.",
    "Scheduled pickup windows for southeastern Alberta runs.",
    "Cash or e-transfer paid at pickup.",
  ],
  services: [
    {
      title: "Cash for Cars Medicine Hat",
      image: "/images/cities/ford-escape-suv-front.jpeg",
      alt: "Cash for cars service in Medicine Hat",
      text: "Medicine Hat's economy is driven by energy, manufacturing, agriculture, and logistics. We buy running cars, trucks, SUVs, energy sector and industrial vehicles, high-mileage commuters, agricultural trucks, non-running vehicles, write-offs, hail-damaged vehicles, fleet vehicles, and commercial units.",
    },
    {
      title: "Junk Car Removal Medicine Hat",
      image: "/images/cities/toyota-matrix-hatchback-side.jpeg",
      alt: "Junk car removal in Medicine Hat",
      text: "Our junk car removal in Medicine Hat includes free towing with zero distance surcharge, properly scheduled service, cash or e-transfer paid on the spot, all paperwork completed at your location, and licensed responsible recycling.",
    },
  ],
  scrapTitle: "Scrap Car Removal Medicine Hat",
  scrapText:
    "Even a completely dead vehicle contains materials the salvage and recycling market actively pays for: structural steel, aluminum alloys, copper wiring and electrical harnesses, catalytic converter metals including platinum, palladium, and rhodium, plus intact mechanical components.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Medicine Hat?",
  whatWeBuyText:
    "We buy everything from family vehicles to non-running industrial trucks, priced with full awareness of southeastern Alberta's climate and economy. Offers range from $200 to $20,000 based on make, model, year, mileage, and condition.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "Energy sector and industrial vehicles",
    "High-mileage commuter vehicles",
    "Agricultural and farm trucks",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail and weather-damaged vehicles",
    "Fleet and commercial vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Medicine Hat - Reliable Service That Makes the Distance",
      paragraphs: [
        "The honest reality about junk car removal in Medicine Hat is that distance matters. Medicine Hat is nearly 300 kilometres southeast of Calgary, far enough that many vehicle removal services either do not come or quote steep distance surcharges.",
        "Maple Cash for Cars approaches it differently. Medicine Hat is a city of 65,000 people with real vehicle turnover, real scrap and salvage value, and residents who deserve the same quality of service available in Calgary.",
        "We dispatch a tow truck to your Medicine Hat address at no additional cost. There is no fuel surcharge for the 300-kilometre drive from Calgary, no southeastern Alberta remote area fee, and no rural property charge for Cypress County addresses.",
        "Medicine Hat runs are scheduled in advance so we can give you a confirmed pickup window and show up within it.",
        "The moment paperwork is signed, you are paid by cash or e-transfer. Vehicle ownership transfer and liability release are completed on-site before we leave.",
        "Whether the vehicle is in Crescent Heights, Dunmore, Medicine Hat Industrial Park, or a rural acreage near Seven Persons, one call takes care of everything.",
      ],
    },
    {
      title: "Scrap Car Removal Medicine Hat - Your Old Vehicle Has Real Market Value",
      paragraphs: [
        "One of the most consistent conversations we have with Medicine Hat residents starts with the assumption that a non-running, weathered, or long-dormant vehicle is not worth anything.",
        "Medicine Hat residents understand raw materials have value, and your old vehicle is full of them.",
        "At Maple Cash for Cars, every offer is calculated using actual current market rates for those materials. You receive a fair and meaningful share of that value, not a token amount designed to justify logistics.",
      ],
    },
    {
      title: "The Real Cost of Keeping an Unwanted Vehicle in Medicine Hat",
      bullets: [
        "Insurance overhead: parked vehicles often still require basic storage coverage.",
        "Property and space: driveways, yards, and outbuilding bays have better uses.",
        "City of Medicine Hat bylaws: inoperable, unregistered, or unsightly vehicles can attract attention.",
        "Cypress County rural property regulations: derelict vehicles on private land can be followed up on.",
        "Hail damage blocks private resale: scrap and salvage value is unaffected by cosmetic hail damage.",
        "The sunshine trap: UV exposure accelerates degradation of rubber, plastics, and upholstery.",
        "Value decreases every month as scrap prices fluctuate and components degrade.",
      ],
    },
    {
      title: "Why Private Selling in Medicine Hat Has Real Limitations",
      paragraphs: [
        "Medicine Hat has around 65,000 people, large enough to support a private vehicle market, but with specific dynamics that make selling harder than it appears.",
        "The energy sector creates irregular employment cycles. When activity is high, buyers are plentiful; when it contracts, the market gets quiet fast.",
        "For vehicles with hail damage, high mileage, mechanical issues, significant age, or hard industrial use, local private buyer interest is thin.",
        "With Maple Cash for Cars, market conditions do not affect your outcome. One call, one confirmed offer, one pickup, and one payment completes the sale.",
      ],
    },
    {
      title: "Serving Medicine Hat and Southeastern Alberta",
      paragraphs: [
        "Beyond Medicine Hat and Cypress County, we serve Redcliff, Dunmore, Irvine, Ralston, Seven Persons, Walsh, Bow Island, Taber, and communities along Highway 1, Highway 3, Highway 41, and the Trans-Canada corridor connecting Medicine Hat to Lethbridge and the Saskatchewan border.",
        "If you are in southeastern Alberta and wondering whether we reach you, reach out and ask. We cover more of the province than most people expect.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Medicine Hat - Four Simple Steps",
  steps: [
    "Share your vehicle details. Call (403) 477-1383 or complete our quick online form with year, make, model, and an honest description. Photos help sharpen the offer but are never required.",
    "Receive a confirmed cash offer. We review your information and return a real offer the same day, typically within a couple of hours. It is fixed, not a range.",
    "Schedule your pickup. Morning, afternoon, evening, or weekend. Medicine Hat runs are planned in advance, and rural or industrial pickups are welcome.",
    "Get paid when we arrive. Our driver visually confirms the vehicle, completes ownership transfer paperwork on-site, and pays you immediately before leaving.",
  ],
  areasTitle: "Serving Medicine Hat and Cypress County",
  areasText:
    "We pick up vehicles from Medicine Hat neighbourhoods, industrial properties, rural acreages, farms, Cypress County properties, and nearby southeastern Alberta communities.",
  areaGroups: [
    {
      title: "Medicine Hat pickup areas",
      tone: "gold",
      areas: ["Ross Glen", "Riverside", "Crescent Heights", "Norwood", "Southridge", "Crestwood", "Vista", "Ranchlands", "Medicine Hat Industrial Park"],
    },
    {
      title: "Nearby communities",
      tone: "green",
      areas: ["Redcliff", "Dunmore", "Irvine", "Ralston", "Seven Persons", "Walsh", "Bow Island", "Taber", "Highway 1", "Highway 3", "Highway 41"],
      note: "Tell us the access requirements for gated industrial sites, rural acreages, farm properties, or Cypress County pickups.",
    },
  ],
  whyMapleText:
    "Medicine Hat service without hidden distance fees: same-day offers, scheduled pickup, free towing, payment on pickup, and responsible recycling.",
  reasons: [
    "Same-day offers",
    "Free towing in Medicine Hat",
    "No distance surcharges",
    "Industrial vehicles accepted",
    "Fleet vehicles accepted",
    "Hail-damaged vehicles accepted",
  ],
  faqTitle: "Medicine Hat-Specific FAQs",
  faqs: [
    {
      q: "Do you actually come to Medicine Hat from Calgary, and is there a distance fee?",
      a: "Yes. Medicine Hat is a scheduled destination in our southeastern Alberta service territory, and there is no distance fee.",
    },
    {
      q: "How far in advance do I need to schedule a pickup in Medicine Hat?",
      a: "Because Medicine Hat is a planned run, we typically schedule 24 to 72 hours in advance. For urgent situations, reach out and we will do our best to accommodate.",
    },
    {
      q: "Do you serve Redcliff, Dunmore, Irvine, and other communities near Medicine Hat?",
      a: "Yes. Redcliff, Dunmore, Irvine, Ralston, Seven Persons, Walsh, and Cypress County communities are part of our Medicine Hat service area.",
    },
    {
      q: "Do you buy hail-damaged vehicles in Medicine Hat?",
      a: "Yes. We buy hail-damaged vehicles regularly, including insurance write-offs. Cosmetic hail damage does not reduce the scrap and salvage value we calculate.",
    },
    {
      q: "Do you buy energy sector fleet vehicles from Medicine Hat businesses?",
      a: "Absolutely. Service trucks, crew cabs, utility vehicles, and commercial fleet vehicles from energy and manufacturing sectors are common purchases.",
    },
    {
      q: "What if my vehicle is at an industrial or commercial property in Medicine Hat?",
      a: "We handle commercial and industrial property pickups regularly, including gated facilities and locations with specific access requirements.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Medicine Hat vehicle today",
  ctaTitle:
    "Call (403) 477-1383 or fill out our quick online form for a confirmed same-day cash offer, with pickup scheduled within 24 to 72 hours anywhere in Medicine Hat and surrounding Cypress County.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Medicine Hat | Free Towing & Same-Day Pay",
  description:
    "Get top cash for cars in Medicine Hat with free towing & same-day pickup. We buy junk, scrap & used vehicles in Cypress County. Call Maple Cash for Cars today!",
  alternates: { canonical: "/cash-for-cars-medicine-hat" },
  openGraph: {
    title: "Cash for Cars Medicine Hat | Free Towing & Same-Day Pay",
    description:
      "Get top cash for cars in Medicine Hat with free towing & same-day pickup. We buy junk, scrap & used vehicles in Cypress County. Call Maple Cash for Cars today!",
    url: "/cash-for-cars-medicine-hat",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Medicine Hat" }],
  },
};

export default function CashForCarsMedicineHatPage() {
  return <LocationPage data={data} />;
}
