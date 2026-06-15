import type {Metadata} from "next";
import Link from "next/link";
import CityLeadForm from "../components/city-lead-form";
import JsonLd from "../components/json-ld";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const phoneDisplay = "(403) 477-1383";
const phoneHref = "tel:+14034771383";
const email = "maplecashforcars@gmail.com";

const contactCards = [
    {
        title: "Call for a Fast Quote",
        detail: phoneDisplay,
        href: phoneHref,
        text: "Speak with us directly for same-day vehicle offers and pickup scheduling.",
    },
    {
        title: "Email Vehicle Details",
        detail: email,
        href: `mailto:${email}`,
        text: "Send the year, make, model, condition, mileage, and pickup city.",
        type: 'email_link'
    },
    {
        title: "Service Area",
        detail: "Calgary & Alberta Cities",
        text: "We serve Calgary, Airdrie, Cochrane, Red Deer, Lethbridge, Canmore, Banff, Okotoks, Strathmore, and nearby communities.",
    },
    {
        title: "Pickup Timing",
        detail: "Same-Day When Available",
        text: "Free towing and flexible pickup windows are available for most standard service areas.",
    },
];

const steps = [
    "Share your vehicle details. Give us your name, phone number, and basic vehicle information: make, model, year, and a brief description of the condition. Photos help us give you the most accurate offer upfront.",
    "Get a clear cash offer. Our team reviews your information and sends back a real offer - no vague ranges, no surprises when we arrive.",
    "Choose your pickup time. Morning, afternoon, evening, weekdays, or weekends. We serve Airdrie and surrounding Alberta cities and work around your schedule.",
    "Get paid when we arrive. Our driver completes a quick inspection, handles the transfer paperwork with you, and pays you immediately.",
];

export const metadata: Metadata = {
    title: "Contact Maple Cash for Cars | Get a Free Cash Offer",
    description:
        "Contact Maple Cash for Cars for a free vehicle cash offer. Call (403) 477-1383 or send your car details for fast pickup and free towing.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Maple Cash for Cars | Get a Free Cash Offer",
        description:
            "Call Maple Cash for Cars or submit your vehicle details online for a free cash offer and pickup scheduling.",
        url: "/contact",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Maple Cash for Cars",
            },
        ],
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-stone-50 text-slate-900">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "@id": "https://maplecashforcars.ca/contact#webpage",
                    url: "https://maplecashforcars.ca/contact",
                    name: "Contact Maple Cash for Cars",
                    description: "Contact Maple Cash for Cars for a free vehicle cash offer, fast pickup, and free towing.",
                    isPartOf: {
                        "@id": "https://maplecashforcars.ca/#website",
                    },
                    about: {
                        "@id": "https://maplecashforcars.ca/#business",
                    },
                    mainEntity: {
                        "@id": "https://maplecashforcars.ca/#business",
                    },
                    inLanguage: "en-CA",
                }}
            />
            <section className="privacy-header px-4 py-6 md:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <SiteHeader/>
                </div>
            </section>

            <main>
                <section className="px-4 pb-14 pt-4 md:px-8 lg:px-12">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                                Contact Maple Cash for Cars
                            </p>
                            <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                                Get a Free Cash Offer for Your Vehicle
                            </h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                                Tell us what you are selling and where it is located. We will
                                review the vehicle details, send a fair offer, and schedule free
                                towing when you are ready to sell.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {contactCards.map((card) => (
                                    <article
                                        key={card.title}
                                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                                    >
                                        <h2 className="text-lg font-black text-slate-950">{card.title}</h2>
                                        {card.href ? (
                                            <a
                                                href={card.href}
                                                className="mt-2 block text-lg font-black text-[var(--brand-red)]"
                                            >
                                                {card.detail}
                                            </a>
                                        ) : (
                                            <p className={`text-xl font-black text-[var(--brand-red)]`}>
                                                {card.detail}
                                            </p>
                                        )}
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                                    </article>
                                ))}
                            </div>

                        </div>

                        <div
                            className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
                            <CityLeadForm city="Calgary"/>
                        </div>
                    </div>
                </section>

                <section className="process-block px-4 py-14 md:px-8 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="text-center text-4xl font-black text-slate-950">
                            The Maple Cash for Cars Process
                        </h2>
                        <div className="process-grid mt-10">
                            {steps.map((step, index) => (
                                <article key={step} className="process-card">
                                    <div
                                        className={`process-number ${index % 2 === 0 ? "process-green" : "process-gold"}`}>
                                        {index + 1}
                                    </div>
                                    <p>{step}</p>
                                </article>
                            ))}
                        </div>
                        <div className="process-cta">
                            <a className="btn btn-outline-dark" href={phoneHref}>
                                Call Us Now: {phoneDisplay}
                            </a>
                        </div>
                    </div>
                </section>

                <section className="section-red-tint px-4 py-14 md:px-8 lg:px-12">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">
                                Need an answer now?
                            </p>
                            <h2 className="mt-3 text-3xl font-black text-slate-950">
                                Call us directly for the fastest response.
                            </h2>
                        </div>
                        <div className="space-y-5 text-lg leading-8 text-slate-700">
                            <p>
                                Phone is the fastest way to confirm vehicle details, pickup
                                timing, access requirements, and payment options. If you prefer
                                writing, the form sends your request to our team with the page
                                details included.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a className="btn btn-red" href={phoneHref}>
                                    Call {phoneDisplay}
                                </a>
                                <Link className="btn btn-outline-dark" href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter/>
        </div>
    );
}
