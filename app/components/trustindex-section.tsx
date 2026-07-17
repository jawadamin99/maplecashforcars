import Script from "next/script";

type TrustindexSectionProps = {
  title?: string;
};

export default function TrustindexSection({
  title = "See What Our Clients Say About Us",
}: TrustindexSectionProps) {
  return (
    <section className="section-red-tint px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">
            Customer Reviews
          </p>
          <h2 className="mt-3 text-4xl font-black text-slate-900">{title}</h2>
        </div>
        <div className="trustindex-inline-shell mx-auto mt-10 max-w-6xl rounded-[28px] border border-[color-mix(in_srgb,var(--brand-red)_18%,white)] bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.08)] md:p-7">
          <Script src="https://cdn.trustindex.io/loader.js" strategy="afterInteractive" />
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<div src='https://cdn.trustindex.io/loader.js?910be93777ed0328f0269693ad9'></div>",
            }}
          />
        </div>
      </div>
    </section>
  );
}
