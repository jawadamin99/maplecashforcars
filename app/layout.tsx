import type { Metadata } from "next";
import { Geist_Mono, Lato, Maven_Pro } from "next/font/google";
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
    images: ["/images/maple-cash-for-cars.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Cash for Cars Calgary",
    description:
      "Sell your vehicle fast in Calgary. Get top cash offers with easy pickup and junk car removal.",
    images: ["/images/maple-cash-for-cars.png"],
  },
  icons: {
    icon: "/images/maple-cash-for-cars.png",
    apple: "/images/maple-cash-for-cars.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mavenPro.variable} ${lato.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
