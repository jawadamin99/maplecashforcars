import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | Maple Cash For Cars",
  description:
    "Read the Privacy Policy for Maple Cash For Cars. Learn how Citywide Cash for Cars LTD protects your data when selling your vehicle in Calgary and surrounding areas.",
};

const sections = [
  {
    title: "1. Scope of This Policy",
    body: (
      <p>
        This policy applies to <strong>maplecashforcars.ca</strong> and all
        digital properties managed by the parent company,{" "}
        <strong>Citywide Cash for Cars LTD</strong>, including{" "}
        <strong>citywidecashforcars.ca</strong>,{" "}
        By using this website, you consent to the data practices described in
        this statement.
      </p>
    ),
  },
  {
    title: "2. Collection of Your Personal Information",
    body: (
      <>
        <p>
          In order to provide you with vehicle valuation and purchasing
          services, we may collect personally identifiable information, such as
          your:
        </p>
        <ul>
          <li>
            <strong>Contact Details:</strong> Name, email address, and phone
            number.
          </li>
          <li>
            <strong>Service Location:</strong> Address for vehicle inspection
            or towing.
          </li>
          <li>
            <strong>Vehicle Data:</strong> Year, make, model, VIN, mileage, and
            condition details.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Use of Your Personal Information",
    body: (
      <>
        <p>
          Maple Cash For Cars, via Citywide Cash for Cars LTD, collects and uses
          your information to:
        </p>
        <ul>
          <li>Generate and deliver the cash offers you have requested.</li>
          <li>Coordinate vehicle inspections and towing or removal services.</li>
          <li>Process legal ownership transfer and bill of sale paperwork.</li>
          <li>Inform you of other services or promotions available across our network.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Sharing Information with Third Parties",
    body: (
      <p>
        We do not sell or rent customer lists to third parties. We share data
        only with trusted partners, such as towing contractors or provincial
        legal authorities, when necessary to complete your vehicle sale or as
        required by law.
      </p>
    ),
  },
  {
    title: "5. Communication Consent (Email & SMS)",
    body: (
      <>
        <p>
          By submitting a quote request on <strong>maplecashforcars.ca</strong>,
          you provide express consent for <strong>Citywide Cash for Cars LTD</strong>{" "}
          to contact you via phone, email, and SMS, including automated
          messages.
        </p>
        <p>
          <strong>To Opt-Out:</strong> Reply &quot;STOP&quot; to any SMS or click the
          &quot;unsubscribe&quot; link in any marketing email. Standard message and data
          rates may apply.
        </p>
      </>
    ),
  },
  {
    title: "6. Technical Data & Cookies",
    body: (
      <p>
        We automatically collect technical data, including IP addresses,
        browser type, and access times, to improve website performance and
        security. We use cookies to personalize your online experience. You can
        manage cookie settings through your individual browser.
      </p>
    ),
  },
  {
    title: "7. Security & SSL",
    body: (
      <p>
        We secure your personal information from unauthorized access using SSL
        protocol encryption. While we take high-level security measures to
        protect your data, no transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    title: "8. Changes to This Statement",
    body: (
      <p>
        We reserve the right to update this policy from time to time. Your
        continued use of <strong>maplecashforcars.ca</strong> after updates
        constitutes your agreement to the new terms.
      </p>
    ),
  },
  {
    title: "9. Contact Information",
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <section className="privacy-header px-4 py-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
        </div>
        <div className="mx-auto max-w-4xl pt-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            To keep your branding consistent while satisfying legal
            requirements, this version for Maple Cash For Cars specifically
            identifies Citywide Cash for Cars LTD as the parent company and
            data controller.
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 pt-4 md:px-8 lg:px-12">
        <div className="privacy-shell mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
          <p className="privacy-intro">
            Protecting your private information is our priority. This Statement
            of Privacy applies to <strong>https://maplecashforcars.ca</strong>{" "}
            and governs data collection and usage. For the purposes of this
            Privacy Policy, this website is owned and operated by{" "}
            <strong>Citywide Cash for Cars LTD</strong>.
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
