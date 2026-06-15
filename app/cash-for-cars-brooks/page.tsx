import type { Metadata } from "next";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Brooks",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Used truck for Brooks cash pickup" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for Brooks junk removal" },
    { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Used SUV for Brooks vehicle sale" },
    { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Used hatchback for Brooks scrap removal" },
  ],
  eyebrow: "Brooks vehicle buyers",
  title: "Cash for Cars Brooks - Fair Offers, Free Towing & Cash Paid on Pickup",
  intro: [
    "Brooks sits at the geographic and agricultural heart of southern Alberta, positioned along the Trans-Canada Highway 1 corridor in Newell County, roughly 185 kilometres southeast of Calgary.",
    "The Eastern Irrigation District, the JBS Canada beef processing facility, Lake Newell, and the surrounding agricultural economy make Brooks one of the most economically active mid-sized cities in rural Alberta.",
    "It is a hardworking city. And hardworking cities run on vehicles.",
    "When those vehicles reach the end of their useful life, whether it is a fleet truck from a local operation, a family SUV that finally gave out, or an old pickup sitting since the last good crop year, Maple Cash for Cars is ready to step in.",
    "We offer dependable cash for cars in Brooks with a genuine same-day offer, completely free towing to your location, and cash paid directly into your hands before we leave.",
  ],
  whyTitle: "We come to Brooks",
  whyHeading: "Every neighbourhood and rural property",
  whyParagraphs: [
    "Brooks is a city of around 15,000 people anchored by 2nd Street West, Sutherland Drive, and the commercial corridors connecting residential communities to its agricultural and industrial base.",
    "We serve every part of Brooks, from established neighbourhoods near Uplands and College Park, to streets around Heritage Lake, properties near Eastbrook, and newer developments expanding along the city's edges.",
    "We also serve rural properties throughout Newell County, including farm and ranch operations along Highway 1, Highway 36, Highway 539, Range Road 140, and the township roads connecting Brooks to Bassano, Tilley, Duchess, Patricia, Rolling Hills, and Scandia.",
    "If your vehicle is in a Brooks driveway, on a Newell County acreage, parked at an agricultural operation east of the city, or sitting at a storage facility near the Brooks Airport, we come to you.",
  ],
  painPoints: [
    "Free towing with no distance surcharge.",
    "Farm, fleet, business, and residential pickups.",
    "Cash or e-transfer paid on the spot.",
    "Pickup available within 24 to 48 hours when scheduling allows.",
  ],
  services: [
    {
      title: "Cash for Cars Brooks",
      image: "/images/cities/audi-a4-sedan-rear.jpeg",
      alt: "Cash for cars service in Brooks",
      text: "Brooks runs on trucks, fleet vehicles, and working equipment. We buy running cars, trucks, SUVs, fleet and commercial vehicles, farm and ranch trucks, high-mileage commuters, non-running vehicles, write-offs, hail-damaged vehicles, flood and moisture-damaged vehicles, and long-dormant vehicles.",
    },
    {
      title: "Junk Car Removal Brooks",
      image: "/images/cities/bmw-3-series-sedan-front.jpeg",
      alt: "Junk car removal in Brooks",
      text: "Our junk car removal in Brooks includes free towing with no distance surcharge, reliable scheduling, cash or e-transfer on the spot, paperwork handled at your location, and responsible vehicle recycling through certified Alberta facilities.",
    },
  ],
  scrapTitle: "Scrap Car Removal Brooks",
  scrapText:
    "Old metal still has real market value. Even a completely non-operational, heavily weathered, partially stripped vehicle contains structural steel, aluminum alloys, copper wiring, catalytic converter metals, and mechanical components that may be salvageable.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Brooks?",
  whatWeBuyText:
    "We buy every make and condition, priced with full awareness of what rural southern Alberta puts a vehicle through. Offers range from $200 to $20,000 based on make, model, year, mileage, and overall condition.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "Fleet and commercial vehicles",
    "Farm and ranch trucks",
    "High-mileage commuter vehicles",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail and weather-damaged vehicles",
    "Flood and moisture-damaged vehicles",
    "Old and long-dormant vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Brooks - We Make the Trip",
      paragraphs: [
        "Brooks is far enough from Calgary that many services either do not come, charge premium distance fees, or show up unreliably. Many residents hear that a company does not service the area or receive a quote that barely covers the vehicle after towing fees.",
        "Our junk car removal in Brooks is built on a simple commitment: we make the trip, we do it properly, and we do not charge you for the distance.",
        "We dispatch a tow truck to your Brooks address at zero cost, with no fuel fee for the drive from Calgary, no rural property surcharge, and no hidden charge in the fine print.",
        "Brooks is a regular service stop for our team. We schedule with accuracy, arrive on time, pay cash or e-transfer when paperwork is signed, and complete ownership transfer and liability release on-site.",
        "Whether the vehicle is parked near Sutherland Drive, sitting on an irrigation district property near Lake Newell, stored at a farm operation in Duchess or Tilley, or anywhere else around Brooks, one call handles it.",
      ],
    },
    {
      title: "Scrap Car Removal Brooks - Old Metal Still Has Real Market Value",
      paragraphs: [
        "One of the most common conversations we have with Brooks residents starts with: it has been sitting for years, it does not run, and they assumed it was worthless.",
        "Even a non-operational vehicle contains materials the recycling and salvage market pays for, including steel, aluminum, copper wiring, catalytic converter metals, and intact mechanical parts.",
        "At Maple Cash for Cars, every offer is calculated using real current market rates for those materials, so you receive a fair portion of that value.",
      ],
    },
    {
      title: "The Real Cost of a Sitting Vehicle in Brooks",
      bullets: [
        "Insurance costs: even minimal storage coverage costs money month after month.",
        "Property and operational space: dead vehicles block garage bays, driveways, farm yards, and equipment access.",
        "City of Brooks bylaws: inoperable and unregistered vehicles can attract municipal attention.",
        "Newell County regulations: rural properties face similar provisions for abandoned or derelict vehicles.",
        "Hail and weather accelerate depreciation: private resale value drops while scrap value remains payable.",
        "Market value moves: scrap prices fluctuate and components degrade through prairie winters.",
      ],
    },
    {
      title: "Why Private Selling in Brooks Has Real Limitations",
      paragraphs: [
        "Brooks has a strong community, but its regional population means the private buyer pool for anything that is not clean and ready-to-drive is genuinely limited.",
        "Serious private buyers want low-mileage, mechanically sound vehicles. Farm trucks with heavy use, hail-damaged vehicles, non-running units, high-mileage commuters, and complicated history vehicles see interest drop sharply.",
        "With Maple Cash for Cars, one call, one confirmed offer, one pickup, and the transaction is complete with cash in your hand.",
      ],
    },
    {
      title: "Serving Brooks and All of Newell County",
      paragraphs: [
        "Beyond Brooks itself, we serve Bassano, Tilley, Duchess, Patricia, Rolling Hills, Scandia, Rainier, and communities along Highway 1, Highway 36, Highway 539, and Highway 873.",
        "We also serve the corridor connecting Brooks to Medicine Hat to the east and Strathmore to the west. If you are in southeastern Alberta and wondering whether we reach your location, we almost certainly do.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Brooks - Four Simple Steps",
  steps: [
    "Share your vehicle details. Call (403) 477-1383 or complete our quick online form with the year, make, model, and honest condition description. Photos help sharpen the offer but are never required.",
    "Get a confirmed cash offer. We review your details and return a confirmed same-day offer, typically within a few hours. This is the number we pay.",
    "Schedule pickup at your convenience. Morning, afternoon, evening, or weekend. Farm and agricultural operations have irregular hours, and rural or acreage properties are always welcome.",
    "Get paid when we arrive. Our driver confirms the vehicle, completes ownership transfer paperwork on-site, and pays you immediately. The full process usually takes 20 to 30 minutes.",
  ],
  areasTitle: "Serving Brooks and Newell County",
  areasText:
    "We serve Brooks, Newell County, southeastern Alberta, and rural addresses along major highway and county road corridors.",
  areaGroups: [
    {
      title: "Brooks pickup areas",
      tone: "gold",
      areas: ["2nd Street West", "Sutherland Drive", "Uplands", "College Park", "Heritage Lake", "Eastbrook", "Brooks Airport", "Lake Newell area"],
    },
    {
      title: "Newell County communities",
      tone: "green",
      areas: ["Bassano", "Tilley", "Duchess", "Patricia", "Rolling Hills", "Scandia", "Rainier", "Highway 1", "Highway 36", "Highway 539"],
      note: "Confirm the address and access situation when booking rural, farm, or commercial pickups.",
    },
  ],
  whyMapleText:
    "Same-day offers, free towing, cash on pickup, no hidden fees, no distance charges, and dependable scheduling for Brooks and Newell County.",
  reasons: [
    "No distance surcharge",
    "Fleet and commercial vehicles accepted",
    "Farm and ranch trucks accepted",
    "Hail-damaged vehicles accepted",
    "Cash or e-transfer on pickup",
    "Licensed responsible recycling",
  ],
  faqTitle: "Brooks-Specific FAQs",
  faqs: [
    {
      q: "Do you actually make the trip to Brooks from Calgary, and is there a distance fee?",
      a: "Yes, we come to Brooks regularly, and no, there is no distance fee. Brooks quotes are fully all-inclusive.",
    },
    {
      q: "Do you buy fleet and commercial vehicles from Brooks businesses?",
      a: "Absolutely. Fleet vehicles, service trucks, cargo vans, and commercial equipment are a regular part of what we purchase in the Brooks area.",
    },
    {
      q: "Do you serve rural properties in Newell County?",
      a: "Yes. We serve properties throughout Newell County, including Bassano, Duchess, Tilley, Patricia, Scandia, and rural addresses along Highway 1 and Highway 36.",
    },
    {
      q: "My farm truck has been sitting for years. Is it still worth calling about?",
      a: "Without question. Long-dormant farm and ranch vehicles almost always have real scrap and salvage value.",
    },
    {
      q: "Do you buy hail-damaged vehicles in Brooks?",
      a: "Yes. Southern Alberta's hail belt runs through this region, and insurance write-offs due to hail are common vehicles we purchase.",
    },
    {
      q: "Can you coordinate pickup from commercial or industrial properties?",
      a: "Yes, as long as you have authorization to release the vehicle and there is reasonable tow truck access.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Brooks vehicle today",
  ctaTitle:
    "Brooks people do not have time for complicated things. Call or fill out our quick online form for a confirmed same-day cash offer, with pickup available within 24 to 48 hours anywhere in Brooks and surrounding Newell County.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Brooks | Free Towing & Same-Day Offer",
  description:
    "Get top cash for cars in Brooks with free towing & same-day pickup. We buy junk, scrap & used vehicles in Newell County. Call Maple Cash for Cars today!",
  alternates: { canonical: "/cash-for-cars-brooks" },
  openGraph: {
    title: "Cash for Cars Brooks | Free Towing & Same-Day Offer",
    description:
      "Get top cash for cars in Brooks with free towing & same-day pickup. We buy junk, scrap & used vehicles in Newell County. Call Maple Cash for Cars today!",
    url: "/cash-for-cars-brooks",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Brooks" }],
  },
};

export default function CashForCarsBrooksPage() {
  return <LocationPage data={data} />;
}
