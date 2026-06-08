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
          <span>Calgary, AB</span>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <span>Cash for Cars</span>
          <span>Junk Car Removal</span>
          <span>Free Towing</span>
        </div>
        <div className="footer-links">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maple Cash for Cars. All rights reserved.</span>
      </div>
    </footer>
  );
}
