import Link from "next/link";

export const metadata = { title: "Privacybeleid | Groen By Hoorens", robots: { index: false } };

const wrap: React.CSSProperties = { maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px", fontFamily: "'Lato',sans-serif", color: "#3d5442", lineHeight: 1.7 };
const h1: React.CSSProperties = { fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(30px,5vw,44px)", color: "#1a4a2e", marginBottom: 8 };
const h2: React.CSSProperties = { fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, color: "#1a4a2e", margin: "36px 0 12px" };

export default function Page() {
  return (
    <main style={{ background: "#faf7f2", minHeight: "100vh" }}>
      <div style={wrap}>
        <Link href="/" style={{ color: "#2d6e47", fontWeight: 700, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none" }}>&larr; Terug naar de site</Link>
        <h1 style={h1}>Privacybeleid</h1>
        <p style={{ fontSize: 14, marginBottom: 40 }}>Laatst bijgewerkt op 25 juli 2026</p>
        <p>Groen By Hoorens hecht veel belang aan uw privacy. In dit beleid leest u welke persoonsgegevens ik verzamel, waarom ik dat doe en welke rechten u hebt. Dit beleid is opgesteld conform de Algemene Verordening Gegevensbescherming (AVG/GDPR).</p>
        <h2 style={h2}>1. Wie is verantwoordelijk?</h2>
        <p>Maurice Hoorens, handelend onder de naam Groen By Hoorens.<br />Ondernemingsnummer (KBO/BTW): BE 1027.265.335<br />Adres: Noordhoek 18, 9660 Brakel<br />E-mail: <a href="mailto:groenbyhoorens@gmail.com">groenbyhoorens@gmail.com</a> &middot; Telefoon: <a href="tel:+32498439811">0498 43 98 11</a></p>
        <h2 style={h2}>2. Welke gegevens verzamel ik?</h2>
        <p>Wanneer u het contactformulier invult of mij contacteert, verwerk ik: uw naam, telefoonnummer, e-mailadres, de gekozen dienst en de inhoud van uw bericht. Als u een afspraak boekt via Calendly, worden uw naam en contactgegevens via Calendly verwerkt.</p>
        <h2 style={h2}>3. Waarvoor gebruik ik uw gegevens?</h2>
        <p>Om uw vraag of offerte-aanvraag te beantwoorden, om een tuinbezoek in te plannen en om de overeengekomen werken uit te voeren en op te volgen. Ik gebruik uw gegevens niet voor reclame en verkoop ze nooit aan derden.</p>
        <h2 style={h2}>4. Hoe lang bewaar ik uw gegevens?</h2>
        <p>Ik bewaar uw gegevens niet langer dan nodig voor het doel waarvoor ze verzameld zijn, en maximaal zolang wettelijk vereist (bijvoorbeeld voor facturatie en boekhouding).</p>
        <h2 style={h2}>5. Delen met derden</h2>
        <p>Voor de werking van de website en boekingen doe ik beroep op: de hostingprovider, Calendly (afspraken) en Google Maps (het tonen van reviews). Deze partijen verwerken enkel de gegevens die nodig zijn voor hun dienst.</p>
        <h2 style={h2}>6. Uw rechten</h2>
        <p>U hebt het recht op inzage, verbetering, verwijdering en beperking van uw gegevens, en het recht om bezwaar te maken. Stuur hiervoor een e-mail naar <a href="mailto:groenbyhoorens@gmail.com">groenbyhoorens@gmail.com</a>. U kunt ook een klacht indienen bij de Gegevensbeschermingsautoriteit (www.gegevensbeschermingsautoriteit.be).</p>
        <h2 style={h2}>7. Cookies</h2>
        <p>Deze website plaatst geen tracking- of advertentiecookies. Voor het tonen van Google-reviews wordt lokale opslag in uw browser gebruikt om reviews tijdelijk te bewaren; dit deelt geen gegevens met derden voor reclame.</p>
      </div>
    </main>
  );
}
