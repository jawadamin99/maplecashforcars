import type { Metadata } from "next";
import { Geist_Mono, Lato, Maven_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import JsonLd from "./components/json-ld";
import "./globals.css";
import "animate.css";

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://maplecashforcars.ca";
const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AutomotiveBusiness"],
      "@id": `${siteUrl}/#business`,
      name: "Maple Cash for Cars",
      legalName: "Citywide Cash for Cars LTD",
      url: siteUrl,
      logo: `${siteUrl}/images/maple-new-golden-logo.png`,
      image: `${siteUrl}/images/og-image.png`,
      telephone: "+14034771383",
      email: "maplecashforcars@gmail.com",
      priceRange: "$200-$20000",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      areaServed: [
        "Calgary",
        "Airdrie",
        "Banff",
        "Black Diamond",
        "Bragg Creek",
        "Brooks",
        "Canmore",
        "Chestermere",
        "Cochrane",
        "Diamond Valley",
        "High River",
        "Lethbridge",
        "Okotoks",
        "Red Deer",
        "Strathmore",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Citywide Cash for Cars LTD",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Maple Cash for Cars",
      alternateName: "Maple Cash For Cars",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      inLanguage: "en-CA",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maplecashforcars.ca"),
  applicationName: "Maple Cash for Cars",
  title: "Maple Cash for Cars",
  description:
    "Sell your vehicle fast in Calgary. Get top cash offers with easy pickup and junk car removal.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maple Cash for Cars",
    description:
      "Sell your vehicle fast in Calgary. Get top cash offers with easy pickup and junk car removal.",
    url: "/",
    siteName: "Maple Cash for Cars",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maple Cash for Cars Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Cash for Cars",
    description:
      "Sell your vehicle fast in Calgary. Get top cash offers with easy pickup and junk car removal.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maple Cash for Cars Calgary",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={businessSchema} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17815203674"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17815203674');
function gtagSendEvent(url) {
  var callback = function () {
    if (typeof url === 'string') {
      window.location = url;
    }
  };
  gtag('event', 'phone_click', {
    'event_callback': callback,
    'event_timeout': 2000,
  });
  return false;
}`}
        </Script>
        <Script id="inspectlet-init" strategy="afterInteractive">
          {`(function() {
window.__insp = window.__insp || [];
__insp.push(['wid', 1957509052]);
var ldinsp = function(){
if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1957509052&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
setTimeout(ldinsp, 0);
})();`}
        </Script>
      </head>
      <body
        className={`${mavenPro.variable} ${lato.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
