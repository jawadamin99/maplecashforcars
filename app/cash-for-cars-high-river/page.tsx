import type { Metadata } from "next";
import Link from "next/link";
import LocationPage, { type LocationPageData } from "../components/location-page";

const data: LocationPageData = {
  city: "High River",
  sectionImages: [
    { src: "/images/cities/ford-explorer-suv-side.jpeg", alt: "Used SUV for High River cash pickup" },
    { src: "/images/cities/nissan-titan-truck-rear.jpeg", alt: "Used truck for High River junk removal" },
    { src: "/images/cities/hyundai-santa-fe-suv-front.jpeg", alt: "Used SUV for High River vehicle sale" },
    { src: "/images/cities/bmw-3-series-sedan-front.jpeg", alt: "Used sedan for High River scrap car removal" },
  ],
  eyebrow: "High River vehicle buyers",
  title: "Cash for Cars High River - Fast Pickup, Fair Offers & Free Towing",
  intro: [
    "High River is a town that knows resilience. From its roots as a ranching and agricultural hub along the Highwood River to rebuilding stronger after the devastating 2013 Alberta floods, this community has always faced challenges head-on.",
    "It is a town of hardworking people who do not have time for complicated processes or companies that waste their time.",
    <>
      If you have an unwanted vehicle sitting on your property, whether it is a
      truck that finally gave up, a flood-damaged car you never got around to
      dealing with, or a family SUV you have replaced,{" "}
      <Link
        href="/"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        Maple Cash for Cars
      </Link>{" "}
      is ready to take it off your hands today.
    </>,
    "We offer straightforward cash for cars in High River, with a fair same-day offer, completely free towing, and cash paid directly to you before our truck leaves your property.",
    "No waiting. No nonsense. Just a clean, fast transaction that respects your time.",
  ],
  whyTitle: "We know High River",
  whyHeading: "Every corner of town and Foothills County",
  whyParagraphs: [
    "High River sits at the heart of Foothills County, about 60 kilometres south of Calgary along Highway 2. It is a town of around 15,000 people with a strong sense of identity.",
    <>
      From the storefronts along Centre Street and MacLeod Trail to residential
      neighbourhoods like Montrose, Emerson Lake, Hampton Hills, Sunrise
      Meadows, and Happy Trails,{" "}
      <Link
        href="/cash-for-cars-high-river"
        className="font-black text-[var(--brand-red)] underline underline-offset-4"
      >
        we serve every neighbourhood in High River
      </Link>
      .
    </>,
    "We also serve rural acreage properties throughout the surrounding Foothills County area, because in this part of Alberta, not every vehicle is parked on a tidy suburban driveway.",
    "Whether your vehicle is in a garage off 12 Avenue SE, sitting in a field on an acreage outside town, or parked at a storage facility near Highway 2A, we come to you. You do not arrange transport. You do not figure out logistics. That is our job.",
  ],
  painPoints: [
    "Free towing across High River and Foothills County.",
    "Flood-damaged and water-affected vehicles accepted.",
    "Cash or e-transfer before our truck leaves.",
    "Same-day or next-day pickup is frequently available.",
  ],
  services: [
    {
      title: "Cash for Cars High River",
      image: "/images/cities/audi-a4-sedan-rear.jpeg",
      alt: "Cash for cars service in High River",
      text: "High River is working-truck country. We buy running cars, trucks, SUVs, high-mileage commuter vehicles, farm and ranch trucks, flood-affected vehicles, write-offs, non-running vehicles, winter-damaged vehicles, commercial vans, work trucks, and utility vehicles.",
    },
    {
      title: "Junk Car Removal High River",
      image: "/images/cities/toyota-matrix-hatchback-side.jpeg",
      alt: "Junk car removal in High River",
      text: "Our junk car removal service in High River includes free towing with no hidden distance fee, cash on the spot, paperwork handled on-site, and responsible licensed disposal through certified Alberta recycling facilities.",
    },
  ],
  scrapTitle: "Scrap Car Removal High River",
  scrapText:
    "Even a vehicle that has not moved in three years contains real market value: structural steel, aluminum alloys, copper wiring, catalytic converter metals such as palladium, rhodium, and platinum, plus intact mechanical components that can be cleaned and resold.",
  whatWeBuyTitle: "What Vehicles Do We Buy in High River?",
  whatWeBuyText:
    "We buy it all, and we price with full awareness of what Alberta's rural south throws at a vehicle. Offers range from $200 to $20,000 depending on make, model, year, mileage, and condition.",
  whatWeBuy: [
    "Running cars, trucks, and SUVs",
    "High-mileage commuter vehicles",
    "Farm and ranch trucks",
    "Flood-affected vehicles",
    "Accident-damaged and insurance write-offs",
    "Non-running and seized vehicles",
    "Winter and weather-damaged vehicles",
    "Commercial vans, work trucks, and utility vehicles",
  ],
  extraSections: [
    {
      title: "Junk Car Removal High River - Finally Get Rid of It",
      paragraphs: [
        "Most High River residents who reach out about junk car removal tell us the same thing: they have been putting it off for months, sometimes years, because they were not sure where to start or who to trust.",
        "The vehicle keeps sitting, the problem does not go away, and every season that passes, the offer gets a little smaller.",
        "We dispatch a tow truck to your High River address at zero cost. There is no fuel surcharge for the drive from Calgary, no hidden distance fee, and no fine print. The pickup is fully included in your offer.",
        "Our driver pays you the moment the paperwork is complete, by cash or e-transfer, whichever you prefer. Vehicle ownership transfer and liability release are completed before we leave your property.",
        "Every removed vehicle is processed through certified Alberta recycling facilities. Fluids are properly drained, reusable parts are salvaged, and metals are recycled in full compliance with provincial environmental regulations.",
        "This applies whether the vehicle is in your driveway in Montrose, on an acreage along Tongue Creek Road, tucked in a storage unit near the High River Regional Airport, or anywhere else in and around town.",
      ],
    },
    {
      title: "Scrap Car Removal High River - Your Old Vehicle Still Has Value",
      paragraphs: [
        "It is easy to assume that a completely non-running, weathered vehicle is worth nothing. That assumption costs people money every day.",
        "At Maple Cash for Cars, we calculate offers based on actual current salvage and scrap market rates, which means a fair share of that value flows back to you.",
        "Our scrap car removal in High River follows a clean process: contact us with vehicle details, receive a confirmed cash offer, book a pickup time that works for you, and get paid when we arrive.",
      ],
    },
    {
      title: "The Real Cost of a Sitting Vehicle in High River",
      bullets: [
        "Ongoing insurance costs: parked, non-running vehicles often still require basic liability protection.",
        "Property and storage space: garage bays, driveway spots, and acreage space have better uses than storing a dead vehicle.",
        "Town of High River bylaws: vehicles without valid registration can attract notices and complaints.",
        "Flood history matters for value: private resale value drops, but scrap and salvage value remains real.",
        "The longer you wait, the less it is worth: scrap markets fluctuate and components degrade through freeze-thaw cycles.",
      ],
    },
    {
      title: "Why Private Selling Rarely Works for High River Vehicles",
      paragraphs: [
        "High River's population of around 15,000 means the local private buyer pool is real but limited, especially for anything that is not clean and ready to drive.",
        "Serious buyers want clean vehicles they can drive away immediately. For trucks with high mileage, mechanical issues, flood history, or age, private buyer interest drops off fast.",
        "When a buyer does appear, you still manage test drives, negotiate price, handle payment uncertainty, and complete the registration transfer paperwork on your own.",
        "For most High River sellers, especially those with working trucks, older vehicles, or anything with a complicated history, Maple Cash for Cars delivers faster results, less hassle, and comparable or better net value when your time is factored in.",
      ],
    },
    {
      title: "Serving High River and the Foothills Region",
      paragraphs: [
        "Beyond High River, we serve the surrounding Foothills County region including Okotoks, Black Diamond, Turner Valley, Nanton, Cayley, Stavely, and communities along Highway 2, Highway 2A, and Highway 22 through the foothills.",
        "If you are in southern Alberta and wondering whether we reach you, we almost certainly do.",
      ],
    },
  ],
  processTitle: "Scrap Car Removal High River - Four Simple Steps",
  steps: [
    "Contact us with your vehicle details. Call (403) 477-1383 or fill out our online form with the year, make, model, and an honest description of the condition. Photos help sharpen the number but are never required.",
    "Receive a confirmed cash offer. We review your information and return a real, confirmed offer, typically the same day and often within a couple of hours. It is the number we pay.",
    "Book a pickup time that works for you. We schedule mornings, afternoons, evenings, and weekends. High River is a regular service stop, so same-day or next-day pickup is frequently available.",
    "Get paid when we arrive. Our driver confirms the vehicle, completes ownership transfer paperwork on-site, and pays you immediately. The on-site process usually takes 20 to 30 minutes.",
  ],
  areasTitle: "Serving High River and Foothills County",
  areasText:
    "We serve High River neighbourhoods, storage facilities, acreage properties, and surrounding Foothills County communities.",
  areaGroups: [
    {
      title: "High River pickup areas",
      tone: "gold",
      areas: ["Centre Street", "MacLeod Trail", "Montrose", "Emerson Lake", "Hampton Hills", "Sunrise Meadows", "Happy Trails", "12 Avenue SE", "Highway 2A", "High River Regional Airport"],
    },
    {
      title: "Nearby foothills communities",
      tone: "green",
      areas: ["Okotoks", "Black Diamond", "Turner Valley", "Nanton", "Cayley", "Stavely", "Pekisko", "Highway 2", "Highway 2A", "Highway 543"],
      note: "Confirm the address when booking rural, storage, agricultural, or acreage pickups.",
    },
  ],
  whyMapleText:
    "Same-day offers, free towing, cash on pickup, no hidden fees, and no surprises for High River and Foothills County.",
  reasons: [
    "Same-day offers",
    "Free towing in High River",
    "Flood-damaged vehicles accepted",
    "Farm and ranch trucks accepted",
    "Cash or e-transfer on pickup",
    "Licensed responsible recycling",
  ],
  faqTitle: "High River-Specific FAQs",
  faqs: [
    {
      q: "Do you buy flood-damaged vehicles in High River?",
      a: "Yes. Water-damaged vehicles, whether from the 2013 floods or more recent events, are something we handle regularly.",
    },
    {
      q: "Do you serve acreage properties and rural addresses around High River?",
      a: "Absolutely. We serve properties throughout Foothills County including acreages along Highway 2, Highway 2A, Highway 543, and rural roads around Cayley, Nanton, Vulcan County, and Pekisko.",
    },
    {
      q: "My truck has been sitting since the flood and has not run since. Is it worth anything?",
      a: "Almost certainly yes. Even long-dormant, flood-affected vehicles contain metals and parts with real market value.",
    },
    {
      q: "Can you pick it up from a storage facility or agricultural property near High River?",
      a: "Yes, as long as you have authorization to release the vehicle and there is reasonable tow truck access.",
    },
    {
      q: "What documents do I need to complete the sale?",
      a: "A valid government-issued photo ID and your Alberta Certificate of Title. If the title is misplaced, we can walk you through obtaining a replacement.",
    },
    {
      q: "How quickly can you get to High River?",
      a: "High River is a regular service route. Same-day pickup is often available, and next-day service is almost always possible.",
    },
  ],
  ctaEyebrow: "Get your free cash offer for your High River vehicle today",
  ctaTitle:
    "High River people do not have time for complicated things. Call or fill out our quick online form for a confirmed same-day cash offer, with pickup available within 24 hours anywhere in High River and the surrounding Foothills area.",
};

export const metadata: Metadata = {
  title: "Cash for Cars High River | Free Towing & Same-Day Pay",
  description:
    "Get top cash for cars in High River with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
  alternates: { canonical: "/cash-for-cars-high-river" },
  openGraph: {
    title: "Cash for Cars High River | Free Towing & Same-Day Pay",
    description:
      "Get top cash for cars in High River with free towing & same-day pickup. We buy junk, scrap & used vehicles. Call Maple Cash for Cars for a free offer today!",
    url: "/cash-for-cars-high-river",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Maple Cash for Cars High River" }],
  },
};

export default function CashForCarsHighRiverPage() {
  return <LocationPage data={data} />;
}
