import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Use | Maple Cash For Cars",
  description:
    "View the Terms of Use for Maple Cash For Cars. Learn about our vehicle buying process, inspection requirements, and 48-hour quote validity in Edmonton.",
};

const sections = [
  {
    title: "1. Services Provided",
    body: (
      <p>
        Maple Cash For Cars is a digital platform owned and operated by{" "}
        <strong>Citywide Cash for Cars LTD</strong> for the purpose of providing
        vehicle valuations and purchasing services. All transactions, towing,
        and legal paperwork are fulfilled by Citywide Cash for Cars LTD.
      </p>
    ),
  },
  {
    title: "2. Nature of the Cash Offer",
    body: (
      <>
        <p>
          Any quote or offer generated via <strong>maplecashforcars.ca</strong>,
          whether online, by email, or by phone, is a non-binding estimate.
        </p>
        <ul>
          <li>
            <strong>Physical Inspection:</strong> A final, binding offer is only
            made after a Citywide representative has physically inspected the
            vehicle.
          </li>
          <li>
            <strong>Accuracy of Information:</strong> We reserve the right to
            adjust or rescind an offer if the vehicle&apos;s condition, mileage,
            or mechanical state differs from the information provided in the
            quote request.
          </li>
          <li>
            <strong>Offer Expiration:</strong> All quotes are valid for 48 hours
            from the time of issuance unless otherwise noted in writing.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Seller Requirements",
    body: (
      <>
        <p>By using our services to sell a vehicle, you certify that:</p>
        <ul>
          <li>
            You are the legal owner of the vehicle or are authorized by the
            owner to sell it.
          </li>
          <li>You possess a valid government-issued photo ID.</li>
          <li>
            You have disclosed all known mechanical issues, accidents, and any
            existing liens or loans on the vehicle.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Vehicle Removal & Towing",
    body: (
      <>
        <p>
          Free towing is generally included with a completed sale. However, a
          service fee or deduction may apply if:
        </p>
        <ul>
          <li>
            The vehicle is not at the specified location upon the driver&apos;s
            arrival.
          </li>
          <li>
            The vehicle is in a location that is inaccessible to a standard tow
            truck.
          </li>
          <li>
            The seller cancels the appointment without reasonable prior notice.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Limitation of Liability",
    body: (
      <p>
        Citywide Cash for Cars LTD and <strong>maplecashforcars.ca</strong>{" "}
        shall not be held liable for any indirect, incidental, or consequential
        damages arising from the use of our services or website. We do not
        guarantee that our online valuation tools will be available at all
        times.
      </p>
    ),
  },
  {
    title: "6. Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the Province of Alberta. Any
        legal disputes arising from these Terms shall be settled in the courts
        of Alberta.
      </p>
    ),
  },
  {
    title: "7. Changes to Terms",
    body: (
      <p>
        We reserve the right to modify these Terms at any time without notice.
        Continued use of the website after changes are posted signifies your
        acceptance of the updated Terms.
      </p>
    ),
  },
  {
    title: "8. Contact Information",
    body: (
      <ul>
          <li>
              <strong>Parent Company:</strong> Citywide Cash for Cars LTD
          </li>
          <li>
              <strong>Website:</strong> maplecashforcars.ca
          </li>
          <li>
              <strong>Email:</strong> maplecashforcars@gmail.com
          </li>
          <li>
              <strong>Phone:</strong> (403) 477-1383
          </li>
      </ul>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <section className="privacy-header px-4 py-6 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/maple-new-golden-logo.png"
              alt="Maple Cash for Cars"
              width={180}
              height={72}
            />
          </Link>
          <Link href="/" className="privacy-back-link">
            Back Home
          </Link>
        </div>
        <div className="mx-auto max-w-4xl pt-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Welcome to maplecashforcars.ca. These Terms of Use govern your use
            of this website and the services provided by its parent company,
            Citywide Cash for Cars LTD.
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 pt-4 md:px-8 lg:px-12">
        <div className="privacy-shell mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
          <p className="privacy-intro">
            Welcome to <strong>maplecashforcars.ca</strong>. These Terms of Use
            (&quot;Terms&quot;) govern your use of this website and the services provided
            by its parent company, <strong>Citywide Cash for Cars LTD</strong>.
            By accessing this website or requesting a vehicle quote, you agree
            to be bound by these Terms.
          </p>

          <div className="privacy-grid">
            {sections.map((section) => (
              <article key={section.title} className="privacy-card">
                <h2>{section.title}</h2>
                <div className="privacy-copy">{section.body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
