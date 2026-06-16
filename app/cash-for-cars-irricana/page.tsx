import type { Metadata } from "next";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Irricana",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Farm truck for Irricana cash pickup" },
    { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used car for Irricana cash offer" },
    { src: "/images/cities/ford-escape-suv-front.jpeg", alt: "Used SUV for Irricana vehicle removal" },
    { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Junk car removal in Irricana" },
  ],
  eyebrow: "Irricana vehicle buyers",
  title: "Cash for Cars Irricana - Fair Offers, Free Towing & Cash Paid on Pickup",
  intro: [
    "Irricana is one of those small Alberta towns that flies under the radar, and that is exactly how most residents like it.",
    "Tucked into the rolling prairie northeast of Calgary in Rocky View County, just off Highway 9 and close to the Highway 72 corridor, Irricana is a quiet agricultural community of around 1,500 people where life moves at a sensible pace and neighbours still know each other by name.",
    "It is the kind of place where people fix things when they can, live practically when they must, and do not have time for services that waste time or pad bills with hidden charges.",
    "If an old vehicle has finally reached the end of its useful life, whether it is a truck that gave everything it had, a car that is not worth fixing, or something sitting on the property too long, Maple Cash for Cars makes it simple.",
    "We offer reliable cash for cars in Irricana with a real same-day offer, completely free towing to your exact location, and cash paid directly into your hands before we leave your property.",
  ],
  whyTitle: "We come to Irricana",
  whyHeading: "Town properties and rural acreages alike",
  whyParagraphs: [
    "Irricana sits about 55 kilometres northeast of Calgary, positioned at the junction of Highway 9 and Township Road 280, at the heart of a broad agricultural landscape spanning Rocky View County and adjacent Wheatland County areas.",
    "We serve Irricana fully: the residential streets through the townsite, acreage properties surrounding the community, and rural farm and ranch operations throughout the broader area.",
    "We also serve nearby communities connected to Irricana, including Beiseker, Crossfield, Airdrie, Strathmore, Rockyford, and properties along Highway 9, Highway 72, Highway 564, and Range Road 274.",
    "Whether the vehicle is in a town driveway, parked at a farm operation east of town, sitting in a Quonset along Range Road 270, or stored on an acreage near the Bow River corridor, you tell us where it is and we handle everything.",
  ],
  painPoints: [
    "No distance fees for Irricana pickups.",
    "Farm, grain, utility, and hail-damaged vehicles accepted.",
    "Rural property access handled regularly.",
    "Cash or e-transfer paid before we leave.",
  ],
  services: [
    {
      title: "Cash for Cars Irricana",
      image: "/images/cities/hyundai-santa-fe-suv-front.jpeg",
      alt: "Cash for cars service in Irricana",
      text: "Irricana and the surrounding agricultural area run on trucks. We buy running trucks, cars, SUVs, farm and agricultural trucks, high-mileage commuter vehicles, non-running vehicles, write-offs, hail-damaged vehicles, long-dormant vehicles, and work trucks.",
    },
    {
      title: "Junk Car Removal Irricana",
      image: "/images/cities/audi-a4-sedan-rear.jpeg",
      alt: "Junk car removal in Irricana",
      text: "Our junk car removal in Irricana includes free tow truck dispatch with no distance charge, accurate scheduling, on-site payment, complete paperwork, and responsible recycling through certified Alberta facilities.",
    },
  ],
  scrapTitle: "Scrap Car Removal Irricana",
  scrapText:
    "Almost every vehicle sitting on a property in Irricana or the surrounding area contains materials that the recycling and salvage market pays for: steel, aluminum, copper wiring, catalytic converter metals, and intact mechanical components.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Irricana?",
  whatWeBuyText:
    "We buy every make and condition, priced with full awareness of what prairie Alberta puts a vehicle through. Offers range from $200 to $20,000 based on make, model, year, mileage, and condition.",
  whatWeBuy: [
    "Running trucks, cars, and SUVs",
    "Farm and agricultural trucks",
    "High-mileage commuter vehicles",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail and weather-damaged vehicles",
    "Old and long-dormant vehicles",
    "Work trucks and utility vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Irricana - Reliable Service That Makes the Trip",
      paragraphs: [
        "The core challenge with junk car removal in Irricana is that many Calgary-based services will not come out or tack on distance fees that make the pickup barely worthwhile.",
        "We come to Irricana at zero additional cost. There is no fuel surcharge for the drive from Calgary, no rural property fee, and no extra charge for an acreage address or gravel lane.",
        "Irricana is part of our established service area, not an unusual long-distance trip. We schedule accurately and arrive on time.",
        "The moment paperwork is signed, you are paid by cash or e-transfer. Ownership transfer and liability release are completed on-site before we leave.",
        "Every removed vehicle is processed through certified Alberta recycling facilities with proper fluid drainage, parts recovery, and metal recycling.",
        "Whether the vehicle is in town, on Range Road 274, stored in an outbuilding near Beiseker, or sitting in a field that has been part of the family property for decades, one call takes care of everything.",
      ],
    },
    {
      title: "Scrap Car Removal Irricana - Old Vehicles Hold More Value Than You Expect",
      paragraphs: [
        "The assumption that a completely non-running or heavily worn vehicle is worthless is one of the most costly misconceptions we encounter from rural Alberta sellers.",
        "Structural steel, aluminum alloys, copper wiring, catalytic converter metals, and intact mechanical components all have current market value.",
        "At Maple Cash for Cars, we calculate offers based on actual market rates rather than a flat lowball.",
      ],
    },
    {
      title: "The Real Cost of a Sitting Vehicle in Irricana",
      bullets: [
        "Insurance overhead: parked vehicles often still require basic storage coverage.",
        "Property and farm space: every Quonset bay, yard section, or building bay has practical value.",
        "Rocky View County regulations: visibly derelict or unregistered vehicles can attract county attention.",
        "Hail damage limits private resale: scrap and salvage value remains payable even when cosmetic damage hurts private sale value.",
        "Value decreases with every passing season as scrap markets move and components degrade.",
      ],
    },
    {
      title: "Why Private Selling Rarely Works in a Town This Size",
      paragraphs: [
        "Irricana's population of around 1,500 means the local private buyer pool is extremely limited.",
        "Most sellers depend on buyers from Calgary, Airdrie, Strathmore, or surrounding communities, and the audience for vehicles that are not clean and ready to drive is small.",
        "Private listings often produce weak inquiries, lowball offers, and a drawn-out process. For hail-damaged, high-mileage, old, or mechanical vehicles, the outcomes get worse.",
        "With Maple Cash for Cars, one confirmed offer, one scheduled pickup, and one payment removes the uncertainty.",
      ],
    },
    {
      title: "Serving Irricana and the Northeast Calgary Prairie Region",
      paragraphs: [
        "Beyond Irricana, we serve Beiseker, Crossfield, Airdrie, Strathmore, Rockyford, Acme, Carbon, Three Hills, and communities along Highway 9, Highway 2, Highway 72, Highway 27, and Highway 564 northeast of Calgary.",
        "If you are on the prairies northeast of Calgary and wondering whether we reach you, we do.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Irricana - Four Simple Steps",
  steps: [
    "Share your vehicle details. Call (403) 477-1383 or complete our quick online form with year, make, model, and an honest description. Photos are helpful but never required.",
    "Receive a confirmed cash offer. We review your information and return a real offer the same day, typically within a couple of hours. The number we give is the number we pay.",
    "Schedule pickup at your convenience. Morning, afternoon, evening, or weekend. We accommodate farm schedules, irregular work hours, and rural property access.",
    "Get paid when we arrive. Our driver visually confirms the vehicle, completes ownership paperwork on-site, and pays you immediately before leaving.",
  ],
  areasTitle: "Serving Irricana and Northeast Rocky View County",
  areasText:
    "We pick up vehicles from Irricana, surrounding acreages, farms, Quonsets, rural lots, and nearby northeast Calgary prairie communities.",
  areaGroups: [
    {
      title: "Irricana pickup areas",
      tone: "gold",
      areas: ["Irricana townsite", "Highway 9", "Highway 72", "Township Road 280", "Range Road 270", "Range Road 274", "Highway 564", "Bow River corridor"],
    },
    {
      title: "Nearby communities",
      tone: "green",
      areas: ["Beiseker", "Crossfield", "Airdrie", "Strathmore", "Rockyford", "Acme", "Carbon", "Three Hills"],
      note: "Tell us the access details for field, pasture, Quonset, gated acreage, or soft-ground pickups.",
    },
  ],
  whyMapleText:
    "Practical service for Irricana: same-day offers, free towing, no distance charges, rural access handled, and payment on pickup.",
  reasons: [
    "Same-day offers",
    "Free towing in Irricana",
    "Farm trucks accepted",
    "Hail-damaged vehicles accepted",
    "Rural pickups handled",
    "Licensed responsible recycling",
  ],
  faqTitle: "Irricana-Specific FAQs",
  faqs: [
    {
      q: "Do you actually come to Irricana, and is there a distance fee?",
      a: "Yes, we come to Irricana regularly as part of our northeast Calgary service route, and there is no distance fee.",
    },
    {
      q: "Do you serve rural and acreage properties in Rocky View County around Irricana?",
      a: "Yes. We serve farm and rural properties along Highway 9, Highway 72, Highway 564, Range Road 270, Range Road 274, and nearby township roads.",
    },
    {
      q: "Do you also serve Beiseker, Crossfield, and Rockyford nearby?",
      a: "Yes. Beiseker, Crossfield, Rockyford, Acme, Carbon, and nearby northeast Calgary region communities are part of our service area.",
    },
    {
      q: "My grain truck has been sitting in a Quonset for three years. Is it still worth anything?",
      a: "Almost certainly. Long-dormant grain and farm trucks contain steel, aluminum, copper, and other materials with real current market value.",
    },
    {
      q: "Do you buy hail-damaged vehicles in Irricana?",
      a: "Yes. We regularly buy hail-damaged vehicles, including insurance write-offs, throughout the northeast prairie corridor.",
    },
    {
      q: "What if the vehicle is in a field or pasture that is difficult to access?",
      a: "Let us know the terrain and access situation when you book. We handle soft ground, uneven fields, and tight Quonset openings regularly.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Irricana vehicle today",
  ctaTitle:
    "Call (403) 477-1383 or fill out our quick online form for a confirmed same-day cash offer, free towing, and pickup within 24 hours anywhere in Irricana and the surrounding Rocky View and Wheatland County area.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Irricana | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Irricana with free towing & same-day pickup. We buy junk, scrap & used vehicles in Rocky View County. Call Maple Cash for Cars today!",
  alternates: { canonical: "/cash-for-cars-irricana" },
  openGraph: {
    title: "Cash for Cars Irricana | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Irricana with free towing & same-day pickup. We buy junk, scrap & used vehicles in Rocky View County. Call Maple Cash for Cars today!",
    url: "/cash-for-cars-irricana",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Irricana" }],
  },
};

export default function CashForCarsIrricanaPage() {
  return <LocationPage data={data} />;
}
