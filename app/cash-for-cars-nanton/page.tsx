import type { Metadata } from "next";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Nanton",
  sectionImages: [
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Ranch truck for Nanton cash pickup" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for Nanton sale" },
    { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used sedan for Nanton cash offer" },
    { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Junk vehicle removal in Nanton" },
  ],
  eyebrow: "Nanton vehicle buyers",
  title: "Cash for Cars Nanton - Same-Day Offers, Free Towing & Cash on Pickup",
  intro: [
    "Nanton is one of those southern Alberta towns that earns its reputation quietly.",
    "Sitting along the Queen Elizabeth II Highway corridor about 75 kilometres south of Calgary in Willow Creek No. 26 Municipal District, it is a community of around 2,500 people with remarkable character for its size.",
    "The Nanton Lancaster Society Air Museum, famous Nanton candy stores, and the wide open skies of the Porcupine Hills foothills give the town genuine identity.",
    "It is also a working agricultural and ranching community. The vehicles here tend to be trucks, and the trucks tend to get used.",
    "When those vehicles reach the end of their useful life, Maple Cash for Cars delivers dependable cash for cars in Nanton with a real same-day offer, free towing to your location, and cash paid before our truck leaves your property.",
  ],
  whyTitle: "We come to Nanton",
  whyHeading: "Every property, every road",
  whyParagraphs: [
    "Nanton is positioned directly along Highway 2, the main artery connecting Calgary to Lethbridge, making it accessible and connected to the broader southern Alberta region.",
    "We serve all of Nanton, from residential streets near 19th Street and 22nd Avenue to properties along the Nanton Airport corridor and the agricultural areas surrounding the townsite.",
    "We also serve rural properties throughout Willow Creek No. 26 Municipal District and the surrounding region, including farm and ranch operations along Highway 2, Highway 533, Highway 520, Range Road 284, and township roads connecting Nanton to Stavely, Claresholm, Vulcan, High River, Black Diamond, and Cayley.",
    "Whether the vehicle is in a residential driveway, a ranch Quonset west toward the Porcupine Hills, an acreage near Chain Lakes Provincial Park, or any rural property in the Willow Creek district, you tell us where it is and we come to you.",
  ],
  painPoints: [
    "Free towing with no southern Alberta distance fee.",
    "Ranch, farm, hail-damaged, and long-dormant vehicles accepted.",
    "Cash or e-transfer paid on pickup.",
    "Rural access and acreage pickups handled regularly.",
  ],
  services: [
    {
      title: "Cash for Cars Nanton",
      image: "/images/cities/audi-a4-sedan-rear.jpeg",
      alt: "Cash for cars service in Nanton",
      text: "Nanton and the surrounding Willow Creek district run on trucks. We buy running cars, trucks, SUVs, ranch and agricultural trucks, high-mileage commuter vehicles, non-running vehicles, write-offs, hail-damaged vehicles, long-dormant vehicles, and work trucks.",
    },
    {
      title: "Junk Car Removal Nanton",
      image: "/images/cities/toyota-matrix-hatchback-side.jpeg",
      alt: "Junk car removal in Nanton",
      text: "Our junk car removal in Nanton includes free tow truck dispatch with zero distance surcharge, reliable scheduling, cash or e-transfer paid on the spot, on-site paperwork, and licensed responsible vehicle recycling.",
    },
  ],
  scrapTitle: "Scrap Car Removal Nanton",
  scrapText:
    "Even a vehicle that has not run in five years contains materials the recycling and salvage market pays meaningful rates for: structural steel, aluminum alloys, copper wiring, electrical harnesses, catalytic converter metals, and intact mechanical components.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Nanton?",
  whatWeBuyText:
    "We buy every condition and price with full awareness of what southern Alberta ranch and prairie life puts a vehicle through. Offers range from $200 to $20,000 based on make, model, year, mileage, and condition.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "Ranch and agricultural trucks",
    "High-mileage commuter vehicles",
    "Non-running and seized vehicles",
    "Accident-damaged and insurance write-offs",
    "Hail and weather-damaged vehicles",
    "Old and long-dormant vehicles",
    "Work trucks and utility vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Nanton - Reliable Service That Makes the Drive South",
      paragraphs: [
        "The biggest challenge with junk car removal in Nanton is distance. Many services operate from Calgary and treat anything south of Okotoks as a distant inconvenience.",
        "We drive to Nanton at no cost to you. No fuel surcharge for the trip south on Highway 2, no rural property fee, and no extra charge for acreage addresses or gravel range roads.",
        "Nanton is a regular stop on our southern Alberta service route. We schedule accurately, communicate clearly, and arrive on time.",
        "When the paperwork is signed, you are paid immediately by cash or e-transfer. Vehicle ownership transfer and liability release are handled on-site.",
        "Every removed vehicle is processed through certified Alberta recycling facilities. Your old vehicle does not end up dumped on a rural road in the Willow Creek district.",
        "Whether it is near the Nanton Lancaster Air Museum, in a ranch Quonset west toward the Porcupine Hills, near Chain Lakes, or on a farm property in the surrounding district, one call handles it.",
      ],
    },
    {
      title: "Scrap Car Removal Nanton - Your Old Vehicle Has Real Metal Value",
      paragraphs: [
        "Most Nanton residents assume a completely non-operational, rusted-out ranch truck or long-dormant vehicle is worth nothing. That assumption costs real money.",
        "At Maple Cash for Cars, every offer is calculated using current market rates for scrap and salvage materials. You receive a fair portion of the value, not a minimal token.",
        "Our process is straightforward: share vehicle details, receive a confirmed cash offer, schedule pickup around your life, and get paid when we arrive.",
      ],
    },
    {
      title: "The Real Cost of a Sitting Vehicle in Nanton",
      bullets: [
        "Insurance overhead: parked vehicles often still require basic storage coverage.",
        "Ranch and property space: Quonset bays, yard sections, and outbuildings have practical value.",
        "Willow Creek Municipal District regulations: derelict vehicles can attract official attention.",
        "Hail damage hurts private resale: scrap value is not reduced by cosmetic hail dents.",
        "Museum town visibility: visible deteriorating vehicles can affect property presentation.",
        "Value decreases with every season as scrap prices move and components degrade.",
      ],
    },
    {
      title: "Why Private Selling Rarely Works in a Town Like Nanton",
      paragraphs: [
        "Nanton's population of around 2,500 means the private buyer pool is genuinely small, especially for vehicles that are not clean and ready to drive.",
        "Private listings often bring weak inquiries from people passing through on Highway 2, lowball offers, and a process that drags on longer than it should.",
        "For trucks with high mileage, hail damage, mechanical issues, or years of ranch use, private interest dries up quickly.",
        "With Maple Cash for Cars, one confirmed offer, one scheduled pickup, and one immediate payment replaces the uncertainty.",
      ],
    },
    {
      title: "Serving Nanton and the Entire Southern Alberta Corridor",
      paragraphs: [
        "Beyond Nanton, we serve Stavely, Claresholm, High River, Okotoks, Vulcan, Cayley, Champion, Fort Macleod, and communities along Highway 2, Highway 23, Highway 533, and Highway 520 between Calgary and Lethbridge.",
        "If you are in southern Alberta and wondering whether we reach your location, the answer is almost always yes.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Nanton - Four Simple Steps",
  steps: [
    "Share your vehicle details. Call (403) 477-1383 or complete our quick online form with year, make, model, and an honest condition description. Photos help sharpen the offer but are never required.",
    "Receive a confirmed cash offer. We review your details and return a real offer the same day, typically within a couple of hours. What we quote is exactly what we pay.",
    "Schedule pickup around your life. Morning, afternoon, evening, or weekend. Ranch and farm operations run on their own rhythm, and we accommodate that.",
    "Get paid when we arrive. Our driver visually confirms the vehicle, completes ownership paperwork on-site, and pays you immediately before leaving.",
  ],
  areasTitle: "Serving Nanton and Willow Creek District",
  areasText:
    "We pick up from Nanton homes, rural acreages, ranch properties, Quonsets, storage sites, and surrounding southern Alberta communities.",
  areaGroups: [
    {
      title: "Nanton pickup areas",
      tone: "gold",
      areas: ["19th Street", "22nd Avenue", "Nanton Airport", "Highway 2", "Highway 533", "Highway 520", "Range Road 284", "Chain Lakes area"],
    },
    {
      title: "Nearby communities",
      tone: "green",
      areas: ["Stavely", "Claresholm", "High River", "Okotoks", "Vulcan", "Cayley", "Champion", "Fort Macleod"],
      note: "Tell us about gates, gravel lanes, Quonset access, or uneven terrain when booking rural pickups.",
    },
  ],
  whyMapleText:
    "Straightforward service for Nanton: fair offers, free towing, no distance charges, rural pickup experience, and payment before we leave.",
  reasons: [
    "Same-day offers",
    "Free towing in Nanton",
    "Ranch trucks accepted",
    "Hail-damaged vehicles accepted",
    "No distance charges",
    "Licensed responsible recycling",
  ],
  faqTitle: "Nanton-Specific FAQs",
  faqs: [
    {
      q: "Do you actually come to Nanton from Calgary, and is there a distance fee?",
      a: "Yes, we come to Nanton regularly as part of our southern Alberta route, and there is no distance fee.",
    },
    {
      q: "Do you serve ranch and farm properties in Willow Creek Municipal District around Nanton?",
      a: "Yes. We serve agricultural and rural residential properties along Highway 2, Highway 533, Highway 520, and surrounding township and range roads.",
    },
    {
      q: "My ranch truck has been sitting in a Quonset for several years. Is it worth calling?",
      a: "Absolutely. Long-dormant ranch and farm trucks almost always have real scrap and salvage value.",
    },
    {
      q: "Do you buy hail-damaged vehicles in Nanton?",
      a: "Yes. Hail-damaged vehicles, including insurance write-offs, are among the most common vehicles we purchase in southern Alberta.",
    },
    {
      q: "Can you access ranch properties with gates, gravel lanes, or rough terrain?",
      a: "Yes, in most cases. Describe the access situation when you book and we will bring appropriate equipment.",
    },
    {
      q: "Do you serve Stavely, Claresholm, Cayley, and Vulcan nearby?",
      a: "Yes. Those communities and the southern Alberta corridor between Calgary and Lethbridge are part of our service area.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Nanton vehicle today",
  ctaTitle:
    "Call (403) 477-1383 or fill out our quick online form for a confirmed same-day cash offer, free towing, and pickup within 24 to 48 hours anywhere in Nanton and the surrounding Willow Creek district.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Nanton | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Nanton with free towing & same-day pickup. We buy junk, scrap & used vehicles in Willow Creek County. Call Maple Cash for Cars today!",
  alternates: { canonical: "/cash-for-cars-nanton" },
  openGraph: {
    title: "Cash for Cars Nanton | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Nanton with free towing & same-day pickup. We buy junk, scrap & used vehicles in Willow Creek County. Call Maple Cash for Cars today!",
    url: "/cash-for-cars-nanton",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Nanton" }],
  },
};

export default function CashForCarsNantonPage() {
  return <LocationPage data={data} />;
}
