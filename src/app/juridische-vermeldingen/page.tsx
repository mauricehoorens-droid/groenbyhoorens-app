import Link from "next/link";

export const metadata = { title: "Juridische vermeldingen | Groen By Hoorens", robots: { index: false } };

const wrap: React.CSSProperties = { maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px", fontFamily: "'Lato',sans-serif", color: "#3d5442", lineHeight: 1.7 };
const h1: React.CSSProperties = { fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(30px,5vw,44px)", color: "#1a4a2e", marginBottom: 8 };
const h2: React.CSSProperties = { fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, color: "#1a4a2e", margin: "36px 0 12px" };

export default function Page() {
  return (
    <main style={{ background: "#faf7f2", minHeight: "100vh" }}>
      <div style={wrap}>
        <Link href="/" style={{ color: "#2d6e47", fontWeight: 700, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none" }}>&larr; Terug naar de site</Link>
        <h1 style={h1}>Juridische vermeldingen</h1>
        <p style={{ fontSize: 14, marginBottom: 40 }}>Laatst bijgewerkt op 25 juli 2026</p>
        <h2 style={h2}>Uitbater</h2>
        <p>Maurice Hoorens, zelfstandige, handelend onder de handelsnaam Groen By Hoorens.</p>
        <h2 style={h2}>Contactgegevens</h2>
        <p>E-mail: <a href="mailto:groenbyhoorens@gmail.com">groenbyhoorens@gmail.com</a><br />Telefoon: <a href="tel:+32498439811">0498 43 98 11</a><br />Werkgebied: Oost-Vlaanderen, België</p>
        <h2 style={h2}>Ondernemingsgegevens</h2>
        <p>Ondernemingsnummer (KBO): 1027.265.335<br />BTW-nummer: BE 1027.265.335<br />Maatschappelijke zetel: Noordhoek 18, 9660 Brakel</p>
        <h2 style={h2}>Intellectuele eigendom</h2>
        <p>De teksten, foto&apos;s en het logo op deze website zijn eigendom van Groen By Hoorens en mogen niet zonder toestemming worden overgenomen.</p>
        <h2 style={h2}>Aansprakelijkheid</h2>
        <p>Ik streef ernaar de informatie op deze website correct en up-to-date te houden. Groen By Hoorens kan niet aansprakelijk worden gesteld voor onjuistheden of voor schade voortvloeiend uit het gebruik van de website.</p>
      </div>
    </main>
  );
}
