export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr" style={{ textAlign: "center" }}>
      <div
        className="wrap"
        style={{ padding: "72px 28px 46px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}
      >
        <img src="/logo/logo-white.svg" alt="Groen By Hoorens" style={{ height: 56, width: "auto" }} />

        <p style={{ color: "var(--color-beige)" }}>
          Tuinonderhoud, snoeiwerk en schors leggen in Oost-Vlaanderen
        </p>

        <div style={{ display: "flex", gap: 18, alignItems: "center", color: "var(--color-creme)" }}>
          <a
            href="https://www.instagram.com/hoorens_maurice/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            style={{ display: "inline-flex", color: "inherit" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
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
            style={{ display: "inline-flex", color: "inherit" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.85c0-2.48 1.48-3.85 3.74-3.85 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.55V12h2.74l-.44 2.9h-2.3v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
        </div>

        <p style={{ fontSize: 14, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <a href="https://www.groenbyhoorens.be/privacybeleid" className="link-underline">Privacybeleid</a>
          <span style={{ color: "var(--color-goud)" }}>·</span>
          <a href="https://www.groenbyhoorens.be/algemene-voorwaarden" className="link-underline">Algemene voorwaarden</a>
          <span style={{ color: "var(--color-goud)" }}>·</span>
          <a href="https://www.groenbyhoorens.be/juridische-vermeldingen" className="link-underline">Juridische vermeldingen</a>
        </p>

        <p style={{ fontSize: 13, color: "var(--color-beige)", opacity: 0.85 }}>Groen By Hoorens {year}</p>
      </div>
    </footer>
  );
}
