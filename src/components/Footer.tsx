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
