"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const w = window as typeof window & { gtagSendEvent?: (url: string) => void };
    if (typeof w.gtagSendEvent === "function") {
      e.preventDefault();
      w.gtagSendEvent("tel:+14034771383");
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src="/images/maple-new-golden-logo.png"
            alt="Maple Cash for Cars"
            width={200}
            height={80}
          />
          <p>
            Fast, straightforward cash offers for vehicles across Calgary and
            surrounding areas.
          </p>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <a href="tel:+14034771383" onClick={handlePhoneClick}>
            (403) 477-1383
          </a>
          <a href="mailto:maplecashforcars@gmail.com">
            maplecashforcars@gmail.com
          </a>
          <span>Calgary, AB</span>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <span>Cash for Cars</span>
          <span>Junk Car Removal</span>
          <span>Free Towing</span>
        </div>
        <div className="footer-links footer-location-links">
          <h4>Locations</h4>
          <div className="footer-location-grid">
            <Link href="/cash-for-cars-airdrie">Airdrie</Link>
            <Link href="/cash-for-cars-banff">Banff</Link>
            <Link href="/cash-for-cars-black-diamond">Black Diamond</Link>
            <Link href="/cash-for-cars-bragg-creek">Bragg Creek</Link>
            <Link href="/cash-for-cars-brooks">Brooks</Link>
            <Link href="/cash-for-cars-canmore">Canmore</Link>
            <Link href="/cash-for-cars-chestermere">Chestermere</Link>
            <Link href="/cash-for-cars-cochrane">Cochrane</Link>
            <Link href="/cash-for-cars-diamond-valley">Diamond Valley</Link>
            <Link href="/cash-for-cars-high-river">High River</Link>
            <Link href="/cash-for-cars-irricana">Irricana</Link>
            <Link href="/cash-for-cars-red-deer">Red Deer</Link>
            <Link href="/cash-for-cars-lethbridge">Lethbridge</Link>
            <Link href="/cash-for-cars-nanton">Nanton</Link>
            <Link href="/cash-for-cars-olds">Olds</Link>
            <Link href="/cash-for-cars-okotoks">Okotoks</Link>
            <Link href="/cash-for-cars-ponoka">Ponoka</Link>
            <Link href="/cash-for-cars-strathmore">Strathmore</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maple Cash for Cars. All rights reserved.</span>
        <nav className="footer-legal" aria-label="Legal links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </nav>
      </div>
    </footer>
  );
}
