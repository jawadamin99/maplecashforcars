"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const locationLinks = [
  { name: "Airdrie", href: "/cash-for-cars-airdrie" },
  { name: "Banff", href: "/cash-for-cars-banff" },
  { name: "Canmore", href: "/cash-for-cars-canmore" },
  { name: "Chestermere", href: "/cash-for-cars-chestermere" },
  { name: "Cochrane", href: "/cash-for-cars-cochrane" },
  { name: "Lethbridge", href: "/cash-for-cars-lethbridge" },
  { name: "Okotoks", href: "/cash-for-cars-okotoks" },
  { name: "Red Deer", href: "/cash-for-cars-red-deer" },
  { name: "Strathmore", href: "/cash-for-cars-strathmore" },
];

type SiteHeaderProps = {
  variant?: "default" | "hero";
};

export default function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const w = window as typeof window & { gtagSendEvent?: (url: string) => void };
    if (typeof w.gtagSendEvent === "function") {
      e.preventDefault();
      w.gtagSendEvent("tel:+14034771383");
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsLocationsOpen(false);
  };

  const handleLocationsClick = () => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 760px)").matches) {
      setIsLocationsOpen((open) => !open);
    }
  };

  return (
    <header
      className={[
        "site-header",
        variant === "hero" ? "site-header-hero" : "site-header-card",
        isMenuOpen ? "site-header-open" : "",
        isLocationsOpen ? "site-locations-open" : "",
      ].filter(Boolean).join(" ")}
    >
      <Link href="/" className="site-header-logo" aria-label="Maple Cash for Cars home" onClick={closeMobileMenu}>
        <Image
          src="/images/maple-new-golden-logo.png"
          alt="Maple Cash for Cars"
          width={220}
          height={88}
          priority={variant === "hero"}
        />
      </Link>

      <button
        type="button"
        className="site-menu-toggle"
        aria-expanded={isMenuOpen}
        aria-label="Open navigation menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" onClick={closeMobileMenu}>Home</Link>
        <div className="site-nav-dropdown">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={isLocationsOpen}
            onClick={handleLocationsClick}
          >
            <span>Locations</span>
            <svg className="site-nav-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="site-nav-menu">
            {locationLinks.map((location) => (
              <Link key={location.href} href={location.href} onClick={closeMobileMenu}>
                {location.name}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/contact" onClick={closeMobileMenu}>Contact</Link>
      </nav>

      <a href="tel:+14034771383" onClick={handlePhoneClick} className="topbar-call" aria-label="Call now">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5.5c0-.8.7-1.5 1.5-1.5h2.2c.7 0 1.2.4 1.4 1l.8 2.6c.2.6 0 1.3-.5 1.7l-1.2 1c1.1 2.2 2.9 4 5.1 5.1l1-1.2c.4-.5 1.1-.7 1.7-.5l2.6.8c.6.2 1 .7 1 1.4v2.2c0 .8-.7 1.5-1.5 1.5H18C10.8 20 4 13.2 4 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </header>
  );
}
