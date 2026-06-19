import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Didsbury",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Farm truck for Didsbury cash pickup" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for Didsbury vehicle sale" },
    { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used sedan for Didsbury cash offer" },
    { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Junk car removal in Didsbury" },
  ],
  eyebrow: "Didsbury vehicle buyers",
  title: "Cash for Cars Didsbury - Same-Day Offers, Free Towing & Cash on Pickup",
  intro: [
    "Didsbury is the kind of central Alberta town that quietly gets everything right.",
    "Situated along the Queen Elizabeth II Highway corridor in Mountain View County, about 75 kilometres north of Calgary, it sits at a comfortable distance from the city, close enough to be practical and far enough to feel genuinely different.",
    "It is a community of around 5,500 people built on agriculture, small business, and the tight-knit neighbourhood fabric that defines life in rural Alberta.",
    "The Didsbury and District Agricultural Society, the annual Didsbury Rodeo and Fair, the historic Didsbury Museum, and community anchors along 20th Street are pillars of a town that moves at its own pace and holds its own standards.",
    <>
      If you have an unwanted vehicle on your property,{" "}
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      offers dependable cash for cars in Didsbury with a real same-day offer,
      completely free towing to your exact location, and cash paid directly to
      you before we leave.
    </>,
  ],
  whyTitle: "We serve all of Didsbury",
  whyHeading: "Town properties and rural acreages",
  whyParagraphs: [
    "Didsbury sits at the junction of Highway 2 and Highway 582, making it one of the most accessible small cities in the Calgary-to-Red Deer corridor.",
    <>
      <Link
        href="/cash-for-cars-didsbury"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        We serve all of Didsbury
      </Link>
      , from established residential streets near 20th Avenue and Elkton Drive
      in the town core, to newer developments along the edges, and properties
      near the Didsbury Airport and surrounding agricultural areas.
    </>,
    "We also serve rural properties throughout Mountain View County, including farm and ranch operations along Highway 2, Highway 27, Highway 582, Township Road 320, and range roads connecting Didsbury to Carstairs, Olds, Crossfield, Sundre, Cremona, Water Valley, and Bergen.",
    "Whether your vehicle is in a Didsbury driveway, stored in a Quonset on a Mountain View County grain farm, parked on an acreage near Rosebud River, or sitting in an outbuilding anywhere nearby, you tell us where it is and we handle everything.",
  ],
  painPoints: [
    "Free towing in Didsbury and Mountain View County.",
    "Farm, grain, utility, hail-damaged, and rusted vehicles accepted.",
    "No distance charges for scheduled central Alberta pickups.",
    "Cash or e-transfer paid on pickup.",
  ],
  services: [
    {
      title: "Cash for Cars Didsbury",
      image: "/images/cities/ford-escape-suv-front.jpeg",
      alt: "Cash for cars service in Didsbury",
      text: "Didsbury and Mountain View County are agricultural at their core. We buy running cars, trucks, SUVs, farm and agricultural trucks, high-mileage commuters, non-running vehicles, write-offs, hail-damaged vehicles, long-dormant vehicles, work trucks, and recreational lifestyle vehicles.",
    },
    {
      title: "Junk Car Removal Didsbury",
      image: "/images/cities/hyundai-santa-fe-suv-front.jpeg",
      alt: "Junk car removal in Didsbury",
      text: "Our junk car removal in Didsbury includes free tow truck dispatch with no distance charge, reliable scheduled service, cash or e-transfer paid on the spot, complete on-site paperwork, and responsible licensed recycling.",
    },
  ],
  scrapTitle: "Scrap Car Removal Didsbury",
  scrapText:
    "Even a completely dead, heavily rusted vehicle contains materials the recycling and salvage market actively pays for: structural steel, aluminum alloys, copper wiring, electrical harnesses, catalytic converter metals including platinum, palladium, and rhodium, plus intact mechanical components.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Didsbury?",
  whatWeBuyText:
    "We buy all vehicle types and conditions, with pricing that reflects the real working life these vehicles have lived in central Alberta. Offers range from $200 to $20,000 based on make, model, year, mileage, and condition.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "Farm and agricultural trucks",
    "High-mileage commuter vehicles",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail and weather-damaged vehicles",
    "Old and long-dormant vehicles",
    "Work trucks, utility vehicles, and recreational vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Didsbury - Dependable Service That Comes to You",
      paragraphs: [
        "Finding reliable junk car removal in Didsbury comes with a familiar challenge: many services operate out of Calgary and treat communities north of Carstairs as outside their comfortable range.",
        "We come to Didsbury at zero additional cost. No fuel surcharge for the drive up Highway 2, no rural property fee, and no extra charge for an acreage address or gravel range road approach.",
        "Didsbury is part of our established central Alberta service route. We schedule accurately, communicate clearly, and show up when we say we will.",
        "When the paperwork is signed, you are paid immediately by cash or e-transfer. No cheques in the mail and no follow-up needed.",
        "Vehicle ownership transfer and liability release are completed at your property before we drive away, and every removed vehicle is processed through certified Alberta recycling facilities.",
        "Whether it is near 20th Street, in a Quonset near Carstairs, near the Didsbury Airport, or in a field off Highway 582, one call handles everything.",
      ],
    },
    {
      title: "Scrap Car Removal Didsbury - More Value Than You Are Expecting",
      paragraphs: [
        "The most common reaction we get from Didsbury sellers after a scrap car offer is genuine surprise, not because the number is low, but because it is higher than expected.",
        "The assumption that a completely non-running, weather-beaten vehicle has no real value is one of the most common misconceptions in rural Alberta.",
        "At Maple Cash for Cars, every offer is calculated using actual current market rates. You receive a genuinely fair portion of that value, not a token amount designed only to make the trip worthwhile for us.",
      ],
    },
    {
      title: "The Real Cost of a Sitting Vehicle in Didsbury",
      bullets: [
        "Insurance overhead: parked vehicles often still require basic storage coverage.",
        "Property and farm space: garage bays and Quonset sections have daily practical value.",
        "Town of Didsbury bylaws: inoperable and unregistered vehicles can attract bylaw attention.",
        "Mountain View County rural regulations: derelict vehicles on acreage or agricultural properties can be followed up on.",
        "Hail damage and private resale reality: scrap and salvage value remains payable even when cosmetic damage hurts private sale value.",
        "Agricultural community timing: waiting until after harvest can mean lower scrap value and more vehicle degradation.",
        "Mental weight: an unfinished vehicle task costs attention every time you see it.",
      ],
    },
    {
      title: "Why Private Selling Rarely Works Well in Didsbury",
      paragraphs: [
        "Didsbury's population of around 5,500 means the local private vehicle market is real but limited, especially for anything that is not clean and ready to drive.",
        "The broader Mountain View County audience often looks for specific agricultural equipment rather than general used vehicles.",
        "Private listings usually bring slow inquiries, lowball offers from buyers using the drive from Calgary as leverage, and a process that drags out longer than expected.",
        "With Maple Cash for Cars, one confirmed offer, one scheduled pickup, and one immediate payment removes every complication.",
      ],
    },
    {
      title: "Serving Didsbury and All of Mountain View County",
      paragraphs: [
        "Beyond Didsbury, we serve Carstairs, Olds, Crossfield, Sundre, Cremona, Water Valley, Bergen, Elkton, and communities along Highway 2, Highway 27, Highway 22, and Highway 582 between Calgary and Red Deer.",
        "The full central Alberta corridor north of Calgary is part of our regular service territory.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Didsbury - Four Simple Steps",
  steps: [
    "Share your vehicle details. Call (403) 477-1383 or complete our quick online form with year, make, model, and an honest description. Photos help sharpen the number but are never required.",
    "Receive a confirmed cash offer. We review your information and return a real offer the same day, typically within a couple of hours. What we quote is what we pay.",
    "Schedule pickup at your convenience. Morning, afternoon, evening, or weekend. Farm and ranch operations have their own rhythms, and we accommodate them.",
    "Get paid when we arrive. Our driver visually confirms the vehicle, completes ownership transfer paperwork on-site, and pays you immediately before leaving.",
  ],
  areasTitle: "Serving Didsbury and Mountain View County",
  areasText:
    "We pick up from Didsbury homes, acreages, grain farms, Quonsets, outbuildings, storage sites, and surrounding Mountain View County communities.",
  areaGroups: [
    {
      title: "Didsbury pickup areas",
      tone: "gold",
      areas: ["20th Avenue", "Elkton Drive", "20th Street", "Didsbury Airport", "Highway 2", "Highway 582", "Township Road 320", "Rosebud River area"],
    },
    {
      title: "Nearby communities",
      tone: "green",
      areas: ["Carstairs", "Olds", "Crossfield", "Sundre", "Cremona", "Water Valley", "Bergen", "Elkton"],
      note: "Tell us the access situation for Quonsets, outbuildings, soft ground, range roads, or acreage pickups.",
    },
  ],
  whyMapleText:
    "Didsbury service with same-day offers, free towing, no distance charges, rural pickup experience, payment on pickup, and responsible recycling.",
  reasons: [
    "Same-day offers",
    "Free towing in Didsbury",
    "Farm trucks accepted",
    "Hail-damaged vehicles accepted",
    "No distance charges",
    "Licensed responsible recycling",
  ],
  faqTitle: "Didsbury-Specific FAQs",
  faqs: [
    {
      q: "Do you come to Didsbury from Calgary, and is there a distance fee?",
      a: "Yes. Didsbury is a regular scheduled stop on our central Alberta route, and there is no distance fee.",
    },
    {
      q: "Do you serve farm and acreage properties in Mountain View County around Didsbury?",
      a: "Yes. We serve agricultural and rural residential properties along Highway 2, Highway 27, Highway 582, Township Road 320, and surrounding range roads.",
    },
    {
      q: "My grain truck has been sitting in a Quonset for two seasons. Is it still worth calling about?",
      a: "Absolutely. Dormant grain and farm trucks almost always have real scrap and salvage value.",
    },
    {
      q: "Do you buy hail-damaged vehicles in Didsbury and Mountain View County?",
      a: "Yes. Hail-damaged vehicles, including insurance write-offs, are among the most common vehicles we purchase from Mountain View County.",
    },
    {
      q: "Can you pick up from a Quonset or outbuilding with limited clearance?",
      a: "In most cases, yes. Describe height restrictions, entrance width, soft ground, or other access details when booking.",
    },
    {
      q: "Do you also serve Carstairs, Cremona, Water Valley, and Sundre nearby?",
      a: "Yes. Carstairs, Cremona, Water Valley, Sundre, Bergen, Olds, Crossfield, and nearby Mountain View County communities are part of our service area.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Didsbury vehicle today",
  ctaTitle:
    "Call (403) 477-1383 or fill out our quick online form for a confirmed same-day cash offer, free towing, and pickup within 24 hours anywhere in Didsbury and the surrounding Mountain View County area.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Didsbury | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Didsbury with free towing & same-day pickup. We buy junk, scrap & used vehicles in Mountain View County. Call Maple Cash for Cars!",
  alternates: { canonical: "/cash-for-cars-didsbury" },
  openGraph: {
    title: "Cash for Cars Didsbury | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Didsbury with free towing & same-day pickup. We buy junk, scrap & used vehicles in Mountain View County. Call Maple Cash for Cars!",
    url: "/cash-for-cars-didsbury",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Didsbury" }],
  },
};

export default function CashForCarsDidsburyPage() {
  return <LocationPage data={data} />;
}
