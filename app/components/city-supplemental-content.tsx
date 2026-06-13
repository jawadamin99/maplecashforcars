type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

const content: Record<string, Section[]> = {
  airdrie: [
    {
      title: "Junk Car Removal in Airdrie - We Handle the Heavy Lifting",
      paragraphs: [
        "Got a vehicle that's truly done? Rusted out, parts missing, sitting on flat tires in your driveway? That's not a problem - that's literally what we specialize in.",
        "Our junk car removal in Airdrie service is completely free. We send a tow truck to your location, load up the vehicle, and pay you on the spot.",
        "You don't need to worry about arranging transport, removing personal belongings ahead of time, paying any pickup or towing fees, or dealing with Alberta Recycling or disposal paperwork.",
        "We handle responsible vehicle recycling and scrapping in compliance with Alberta environmental standards. Your old car gets processed properly - fluids drained, parts salvaged where possible, and the remainder recycled through licensed facilities.",
        "If you've been meaning to get rid of a dead vehicle in your Airdrie garage or yard for months or years, this is your sign. One call, and it's gone.",
      ],
    },
    {
      title: "Scrap Car Removal Airdrie - Turning Metal into Money",
      paragraphs: [
        "There's a common misconception that scrap cars have no value. In reality, the steel, aluminum, copper wiring, and reusable parts in your old vehicle have real market value - and we pass a fair share of that back to you.",
        "Our scrap car removal in Airdrie service works the same way as any other pickup: call or fill out our online form with basic vehicle details, receive a cash offer the same day, schedule pickup at a time that works for you including evenings and weekends, and get paid on the spot when we arrive.",
        "We don't make you wait until after we've processed the vehicle to pay you. You get paid at pickup, every time.",
      ],
    },
    {
      title: "What Documents Do You Need?",
      paragraphs: [
        "Alberta requires a few basic documents when selling a vehicle: valid government-issued photo ID, such as a driver's licence, and vehicle registration or ownership documents, including your Certificate of Title.",
        "If you've misplaced your title, we can help walk you through the replacement process with Alberta Motor Vehicle Services before we complete the transaction. Don't let missing paperwork stop you from reaching out - just ask, and we'll guide you.",
      ],
    },
    {
      title: "Why Not Just Post It on Kijiji?",
      paragraphs: [
        "It's a fair question. For a running car in great condition, you might get a few hundred dollars more through a private sale - but you'll spend time, effort, and deal with uncertain buyers to get there. For anything less than perfect, we're almost always the better deal when you factor in your time.",
      ],
      table: {
        headers: ["", "Maple Cash for Cars", "Kijiji / Facebook Marketplace"],
        rows: [
          ["Time to offer", "Same day", "Days to weeks"],
          ["Guaranteed sale", "Yes", "No"],
          ["Cash on pickup", "Yes", "Depends on buyer"],
          ["Strangers at your home", "No", "Yes"],
          ["Works for junk/non-running", "Yes", "Very limited market"],
          ["Paperwork handled", "Yes", "You figure it out"],
        ],
      },
    },
  ],
  cochrane: [
    {
      title: "Junk Car Removal Cochrane - We Handle Everything",
      paragraphs: [
        "Most people who reach out for junk car removal in Cochrane have been putting it off for one simple reason: they don't know where to start. Do you need to drain the fluids yourself? Do you need to pull it to the road? Do you pay for the tow?",
        "The answer to all of those is no - at least when you call us.",
        "Our junk car removal service in Cochrane includes free tow truck dispatch to your exact location in Cochrane, on-site cash payment, paperwork related to the vehicle transfer, and responsible recycling and disposal following Alberta environmental regulations.",
        "You don't need to clean it out obsessively before we arrive - just grab your personal belongings and any documents. We take care of the rest.",
        "If the vehicle is inside a garage, we can coordinate that too, as long as there's reasonable access for a tow truck. Just mention it when you book and we'll plan accordingly.",
      ],
    },
    {
      title: "Scrap Car Removal Cochrane - Your Old Car Has More Value Than You Think",
      paragraphs: [
        "A lot of Cochrane residents are surprised when they hear what their rusted-out, non-running vehicle is worth. The assumption is that a scrap car is worth nothing.",
        "In reality, the steel frame, aluminum components, copper wiring, catalytic converter, and any salvageable parts all have genuine market value - and we make sure you see a fair share of that.",
      ],
    },
    {
      title: "The Real Cost of Keeping a Junk Car Around",
      paragraphs: [
        "It's easy to keep delaying, but that sitting vehicle has ongoing costs most people don't think about.",
      ],
      bullets: [
        "Insurance: even a parked, non-running vehicle often needs to be insured in Alberta to protect you from liability.",
        "Space: in Cochrane's newer subdivisions, driveways and garage spots are at a premium.",
        "Depreciation: a vehicle that isn't running isn't gaining value, and every month it sits, parts degrade further.",
        "Neighbour and bylaw issues: Rocky View County and the Town of Cochrane both have regulations around inoperable vehicles stored on residential property.",
      ],
    },
    {
      title: "Why Cochrane Sellers Choose Us Over Private Listings",
      paragraphs: [
        "Posting on Kijiji or Facebook Marketplace might seem like the obvious move, but most private buyers in the Cochrane area are looking for clean, newer vehicles they can drive immediately.",
        "For anything with high mileage, mechanical issues, body damage, or age, the pool of interested buyers shrinks fast. Even when someone does show interest, you're dealing with scheduling test drives, strangers coming to your home, negotiating, and hoping the payment clears.",
        "With Maple Cash for Cars, you skip every one of those steps. One call, one offer, one pickup, and it's done. For most situations, the time, effort, and uncertainty of private selling isn't worth the marginal difference.",
      ],
    },
  ],
  lethbridge: [
    {
      title: "Junk Car Removal Lethbridge - Free Towing Across All Three Sides",
      paragraphs: [
        "Got a vehicle that's reached the end of the road? Our junk car removal in Lethbridge service handles free towing and responsible removal of non-running and end-of-life vehicles from your home, acreage, or business.",
        "We tow from neighbourhoods across all three sides of the city and out to the surrounding farms and acreages, so you don't have to arrange a tow truck or pay to haul it yourself.",
      ],
    },
    {
      title: "Scrap Car Removal Lethbridge",
      paragraphs: [
        "When a vehicle is only worth its weight in metal and parts, our scrap car removal in Lethbridge service still puts cash in your hand.",
        "We pay fair value for cash for scrap cars, then recycle and dispose of them responsibly - fluids drained, parts recovered, and steel sent for recycling instead of leaking into the ground or cluttering your property.",
      ],
    },
    {
      title: "Why Private Selling in Lethbridge Is Frustrating",
      paragraphs: [
        "Private buyers on Kijiji and Facebook Marketplace cancel, haggle, and waste your time. We give one clear offer and stick to it.",
        "We buy non-running and damaged vehicles, including dead batteries from cold snaps, hail damage, blown transmissions, and accident write-offs.",
        "You stop paying for a car you don't drive. Insurance and registration on a vehicle parked in the driveway is money down the drain. We get it gone fast.",
      ],
    },
  ],
  redDeer: [
    {
      title: "Why Red Deer Drivers Sell to Us",
      paragraphs: [
        "Red Deer sits right at the centre of the province, midway between Calgary and Edmonton on the Queen Elizabeth II Highway. That central-Alberta location is great for commuting and tough on vehicles.",
        "Long highway runs on the QEII and Highway 11, road salt through five-month winters, and freeze-thaw cycles take a real toll. Many of the cars we buy here are write-offs, high-kilometre trade-ins the dealer wouldn't touch, or vehicles that simply cost more to repair than they're worth.",
      ],
      bullets: [
        "No more lowballers and no-shows.",
        "We buy non-running and damaged vehicles.",
        "You stop paying for a car you don't drive.",
        "Free towing anywhere in the city.",
      ],
    },
    {
      title: "Scrap Car Removal Red Deer",
      paragraphs: [
        "When a vehicle is only worth its weight in metal and parts, our scrap car removal in Red Deer service still puts cash in your hand.",
        "We pay fair value for cash for scrap cars, then recycle and dispose of them responsibly - fluids drained, parts recovered, and steel sent for recycling instead of leaking into the ground or cluttering your property.",
      ],
    },
  ],
};

export default function CitySupplementalContent({ city }: { city: keyof typeof content }) {
  const sections = content[city];

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`${index % 2 === 0 ? "section-red-tint" : "bg-white"} px-4 py-14 md:px-8 lg:px-12`}
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-black text-slate-950">{section.title}</h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-xl border border-slate-200 bg-white p-4 font-bold text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.table ? (
              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[620px] border-collapse text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header} className="border-b border-slate-200 px-4 py-3 text-sm font-black text-slate-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join("-")}>
                        {row.map((cell) => (
                          <td key={cell} className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </section>
      ))}
    </>
  );
}
