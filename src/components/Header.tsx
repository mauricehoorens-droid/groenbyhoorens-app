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
          <Link href="/boeken" className="btn" onClick={() => setOpen(false)} style={{ padding: "12px 22px" }}>
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
