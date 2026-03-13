"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const w = window as typeof window & { gtagSendEvent?: (url: string) => void };
    if (typeof w.gtagSendEvent === "function") {
      e.preventDefault();
      w.gtagSendEvent("tel:+15877009806");
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src="/images/maple-cash-for-cars.webp"
            alt="Maple Cash for Cars"
            width={200}
            height={60}
          />
          <p>
            Fast, straightforward cash offers for vehicles across Calgary and
            surrounding areas.
          </p>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <a href="tel:+15877009806" onClick={handlePhoneClick}>
            (587) 700-9806
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
