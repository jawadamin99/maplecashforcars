import type { Metadata } from "next";
import { Geist_Mono, Lato, Maven_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "Maple Cash for Cars Calgary",
  description:
    "Sell your vehicle fast in Calgary. Get top cash offers with easy pickup and junk car removal.",
  openGraph: {
    title: "Maple Cash for Cars Calgary",
    description:
      "Sell your vehicle fast in Calgary. Get top cash offers with easy pickup and junk car removal.",
    images: ["/images/maple-new-golden-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Cash for Cars Calgary",
    description:
      "Sell your vehicle fast in Calgary. Get top cash offers with easy pickup and junk car removal.",
    images: ["/images/maple-new-golden-logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
