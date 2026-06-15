import JsonLd from "./json-ld";

const siteUrl = "https://maplecashforcars.ca";

type CityPageJsonLdProps = {
  city: string;
  title: string;
  description: string;
  faqs: Array<{
    q: string;
    a: string;
  }>;
};

function citySlug(city: string) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function CityPageJsonLd({ city, title, description, faqs }: CityPageJsonLdProps) {
  const pageUrl = `${siteUrl}/cash-for-cars-${citySlug(city)}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            description,
            isPartOf: {
              "@id": `${siteUrl}/#website`,
            },
            about: {
              "@id": `${siteUrl}/#business`,
            },
            inLanguage: "en-CA",
          },
          {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: `Cash for Cars ${city}`,
            serviceType: "Cash for cars, junk car removal, scrap car removal, and free towing",
            provider: {
              "@id": `${siteUrl}/#business`,
            },
            areaServed: {
              "@type": "City",
              name: city,
              addressRegion: "AB",
              addressCountry: "CA",
            },
            url: pageUrl,
            offers: {
              "@type": "Offer",
              priceCurrency: "CAD",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "CAD",
                minPrice: 200,
                maxPrice: 20000,
              },
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: `Cash for Cars ${city}`,
                item: pageUrl,
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          },
        ],
      }}
    />
  );
}
