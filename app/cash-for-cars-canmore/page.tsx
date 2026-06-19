import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "Canmore",
  sectionImages: [
    { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used BMW sedan for cash pickup" },
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used Ford SUV for scrap car removal" },
    { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Used Hyundai SUV for cash for cars" },
    { src: "/images/cities/toyota-matrix-hatchback-side.jpeg", alt: "Used Toyota hatchback for vehicle removal" },
  ],
  eyebrow: "Canmore vehicle buyers",
  title: "Cash for Cars Canmore - Turn Your Unwanted Vehicle Into Instant Cash",
  intro: [
    "Living in Canmore means you're surrounded by some of the most breathtaking scenery in Canada. The Three Sisters, Ha Ling Peak, the Bow River winding through town - it's a place people move to on purpose, and once they're here, they tend to stay.",
    "But even in paradise, life gets cluttered. And sometimes that clutter comes in the form of a vehicle sitting in your driveway that you no longer want, need, or can afford to fix.",
    "Maybe it's a truck that took one too many trips up Spray Lakes Road. Maybe it's an old SUV that served you well through a dozen Banff winters but finally gave up. Maybe you just downsized or upgraded and the old vehicle is simply in the way.",
    <>
      Whatever the story,{" "}
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      is here to give it a clean ending. We offer the fastest, fairest cash for
      cars Canmore - with free towing, same-day offers, and payment in your hand
      before we leave your driveway.
    </>,
  ],
  whyTitle: "We know Canmore",
  whyHeading: "Mountain-town pickup without the hassle",
  whyParagraphs: [
    "Canmore is unique. It's a mountain town, not a suburb. Driveways are tucked along Benchlands Trail, Three Sisters Drive, Railway Avenue, and winding residential streets in areas like Peaks of Grassi, Silvertip, Stewart Creek, and Three Sisters Mountain Village.",
    "Properties here aren't cookie-cutter, and neither is our service. We regularly serve all neighbourhoods in Canmore, from the older character homes near Main Street and 8th Street to the newer developments climbing the benchlands above town.",
    "We also serve the corridor communities along Trans-Canada Highway 1, including Exshaw, Lac des Arcs, and properties heading east toward Deadman's Flats and Canmore's eastern industrial area.",
    "You do not need to arrange transport or drive anywhere. We come to your exact location, load the vehicle, pay you, and handle the paperwork - all at your home, your storage unit, or wherever the vehicle is sitting.",
  ],
  painPoints: [
    "Free towing from Canmore addresses.",
    "We handle tight garages and storage units with planning.",
    "Same-day or next-day pickup is often available.",
    "Mountain wear is factored in fairly.",
  ],
  services: [
    {
      title: "Cash for Cars Canmore",
      image: "/images/cities/audi-a4-sedan-rear.jpeg",
      alt: "Cash for cars service in Canmore",
      text: "We buy running vehicles, mountain-worn trucks and SUVs, winter-damaged vehicles, write-offs, high-mileage vehicles, and light commercial equipment. Offers range from $200 to $20,000 depending on condition, make, model, year, and mileage.",
    },
    {
      title: "Junk Car Removal Canmore",
      image: "/images/cities/nissan-titan-truck-rear.jpeg",
      alt: "Junk car removal in Canmore",
      text: "Our junk car removal service includes free tow truck dispatch to your Canmore address, on-site cash or e-transfer payment, paperwork handled on the spot, and responsible disposal through licensed facilities.",
    },
  ],
  scrapTitle: "Scrap Car Removal Canmore",
  scrapText:
    "Even a completely non-running vehicle contains materials with real market value, including steel, aluminum, copper wiring, catalytic converter metals, and intact mechanical parts. We calculate offers based on real salvage and scrap market rates.",
  whatWeBuyTitle: "What Vehicles Do We Buy in Canmore?",
  whatWeBuyText:
    "Mountain living is hard on vehicles. We factor cold winters, icy roads, elevation changes, gravel trails, and normal regional wear into our offers.",
  whatWeBuy: [
    "Running vehicles",
    "Mountain-worn vehicles",
    "Winter-damaged vehicles",
    "Accident or insurance write-offs",
    "Non-running and seized vehicles",
    "Older and high-mileage vehicles",
    "Recreational and utility vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal Canmore - No Hauling, No Hassle",
      paragraphs: [
        "The challenge with junk car removal in Canmore is that the town is not loaded with scrap yards or removal services that make the trip out from Calgary. Many residents deal with vehicles that sit for months simply because finding someone reliable feels like more trouble than it is worth.",
        "That is where we are different. We make the trip, and we make it worth your while.",
        "Our junk car removal service includes free tow truck dispatch to your Canmore address, on-site cash or e-transfer payment, full paperwork handled before we leave, responsible disposal in compliance with Alberta environmental standards, and no prep work beyond removing your personal belongings and documents.",
        "If your vehicle is in a tight garage, storage unit, or awkward spot on your property, just let us know when you book. We will bring the right equipment and plan accordingly.",
        "One call is genuinely all it takes. We have heard from Canmore residents who spent months dreading this process and were shocked at how quickly and smoothly it went.",
      ],
    },
    {
      title: "Scrap Car Removal Canmore - Your Old Vehicle Is Worth More Than You Think",
      paragraphs: [
        "It is a common assumption in mountain towns that the old beater in the back is basically worthless. In practice, that is rarely true.",
        "Even a completely non-running vehicle contains materials with real market value: steel, aluminum, copper wiring, catalytic converter metals, and any intact mechanical parts that can be resold.",
        "At Maple Cash for Cars, we calculate our offers based on actual salvage and scrap market rates, which means you get a fair share of that value rather than a flat lowball offer.",
      ],
    },
    {
      title: "The Hidden Costs of a Sitting Vehicle in Canmore",
      bullets: [
        "Limited parking and storage space: Canmore's mountain terrain means properties are not generous with extra space.",
        "Municipal regulations: the Town of Canmore has bylaws governing inoperable or abandoned vehicles on private and public property.",
        "Insurance costs: many Alberta residents keep basic storage insurance on parked vehicles.",
        "Depreciation does not pause: scrap markets fluctuate and parts degrade further every month.",
        "Wildlife attractants: food residue or vehicle fluids can attract wildlife near Banff National Park and active wildlife corridors.",
      ],
    },
    {
      title: "Why Canmore Sellers Choose Us Over Private Listings",
      paragraphs: [
        "Selling privately in a town like Canmore has a fundamental challenge: the local buyer pool is small. Even accounting for surrounding Bow Valley communities, you are working with a limited market of private buyers.",
        "That means longer wait times, more uncertainty, and often settling for less because the only serious offer came weeks later. If the vehicle has mechanical or cosmetic issues, the already-small pool shrinks further.",
        "With Maple Cash for Cars, there is no waiting, no listing, no test drives with strangers on mountain roads, and no hoping a buyer shows up. You get a real offer today and cash in hand within 24 hours when scheduling allows.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal Canmore - Four Simple Steps",
  steps: [
    "Share your vehicle details. Call or use the online quote form with the year, make, model, and honest condition description.",
    "Get a clear cash offer. We review your info and send back a real number the same day, usually within a couple of hours.",
    "Pick your pickup time. Early morning, weekend afternoon, or whenever suits you. We serve Canmore regularly.",
    "Get paid when we arrive. Our driver inspects the vehicle, completes paperwork, and pays you immediately.",
  ],
  areasTitle: "Serving Canmore and the Entire Bow Valley Corridor",
  areasText: (
    <>
      <Link
        href="/cash-for-cars-canmore"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        We serve Canmore
      </Link>{" "}
      itself and the full Bow Valley corridor, including nearby communities and
      properties along Highway 1 and Highway 1A.
    </>
  ),
  areaGroups: [
    {
      title: "Canmore neighbourhoods",
      tone: "gold",
      areas: ["Peaks of Grassi", "Silvertip", "Stewart Creek", "Three Sisters", "Benchlands", "Main Street", "8th Street", "Railway Avenue"],
    },
    {
      title: "Bow Valley communities",
      tone: "green",
      areas: ["Exshaw", "Lac des Arcs", "Dead Man's Flats", "Banff", "Highway 1", "Highway 1A"],
      note: "If you are in the mountains and wondering whether we reach you, reach out and ask. The answer is almost always yes.",
    },
  ],
  whyMapleText:
    "Same-day offers, free towing, cash on pickup, and no hidden fees for Canmore and the Bow Valley.",
  reasons: [
    "Regular Canmore pickups",
    "Free towing from homes, storage units, and accessible lots",
    "Cash or e-transfer on pickup",
    "Mountain vehicle wear evaluated fairly",
    "Responsible recycling",
    "No private listing delays",
  ],
  faqTitle: "Canmore-Specific FAQs",
  faqs: [
    {
      q: "Do you actually come all the way to Canmore from Calgary?",
      a: "Yes. Canmore is a regular part of our service area, and we serve Canmore clients consistently.",
    },
    {
      q: "Can you pick up from a condo complex with limited access?",
      a: "In most cases, yes. Let us know the situation when you book and we will confirm access requirements in advance.",
    },
    {
      q: "Can you remove a vehicle stored at a self-storage facility near Canmore?",
      a: "Yes, as long as you have authorization to release it from the facility.",
    },
    {
      q: "Do mountain driving conditions affect your offer?",
      a: "We evaluate Canmore vehicles knowing they have lived in a mountain environment, including normal suspension, rust, salt, and gravel wear.",
    },
    {
      q: "What if my vehicle registration has lapsed?",
      a: "A lapsed registration does not prevent the sale. You will need valid photo ID and your Certificate of Title.",
    },
    {
      q: "Can you pick up the same day I call?",
      a: "Often yes, depending on our schedule. Same-day or next-day service is frequently available.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your Canmore vehicle today",
  ctaTitle:
    "Call or fill out the quick online form with your vehicle details. We will send a real cash offer the same day and can typically schedule pickup within 24 hours anywhere in Canmore.",
};

export const metadata: Metadata = {
  title: "Cash for Cars Canmore | Free Towing & Same-Day Cash",
  description:
    "Get top cash for cars in Canmore with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
  alternates: { canonical: "/cash-for-cars-canmore" },
  openGraph: {
    title: "Cash for Cars Canmore | Free Towing & Same-Day Cash",
    description:
      "Get top cash for cars in Canmore with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
    url: "/cash-for-cars-canmore",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars Canmore" }],
  },
};

export default function CashForCarsCanmorePage() {
  return <LocationPage data={data} />;
}
