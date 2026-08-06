"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#over", label: "Over mij" },
  { href: "/#diensten", label: "Diensten" },
  { href: "/#werk", label: "Werk" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap hdr-inner">
        <Link href="/" aria-label="Groen By Hoorens" onClick={() => setOpen(false)}>
          {/* Logo wisselt niet van kleur; op transparante hero staat de crème-variant */}
          <img
            className="hdr-logo"
            src={scrolled ? "/logo/logo.png" : "/logo/logo-light.png"}
            alt="Groen By Hoorens"
          />
        </Link>

        <nav className={`nav ${open ? "open" : ""}`} style={!scrolled ? { color: "var(--color-creme)" } : {}}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={!scrolled && !open ? { color: "var(--color-creme)" } : {}}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/hoorens_maurice/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            onClick={() => setOpen(false)}
            style={{ display: "inline-flex", alignItems: "center", ...(!scrolled && !open ? { color: "var(--color-creme)" } : {}) }}
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/people/Groen-By-Hoorens/100069720080569/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            onClick={() => setOpen(false)}
            style={{ display: "inline-flex", alignItems: "center", ...(!scrolled && !open ? { color: "var(--color-creme)" } : {}) }}
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.85c0-2.48 1.48-3.85 3.74-3.85 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.55V12h2.74l-.44 2.9h-2.3v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <Link href="/boeken" className="btn" onClick={() => setOpen(false)} style={{ padding: "12px 22px", color: "#fff" }}>
            Afspraak maken
          </Link>
        </nav>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={!scrolled ? { color: "var(--color-creme)" } : {}}
        >
          <span style={!scrolled && !open ? { background: "var(--color-creme)" } : {}} />
          <span style={!scrolled && !open ? { background: "var(--color-creme)" } : {}} />
          <span style={!scrolled && !open ? { background: "var(--color-creme)" } : {}} />
        </button>
      </div>
    </header>
  );
}
