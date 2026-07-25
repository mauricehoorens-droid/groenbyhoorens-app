import Link from "next/link";

export const metadata = { title: "Algemene voorwaarden | Groen By Hoorens", robots: { index: false } };

const wrap: React.CSSProperties = { maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px", fontFamily: "'Lato',sans-serif", color: "#3d5442", lineHeight: 1.7 };
const h1: React.CSSProperties = { fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(30px,5vw,44px)", color: "#1a4a2e", marginBottom: 8 };
const h2: React.CSSProperties = { fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, color: "#1a4a2e", margin: "36px 0 12px" };

export default function Page() {
  return (
    <main style={{ background: "#faf7f2", minHeight: "100vh" }}>
      <div style={wrap}>
        <Link href="/" style={{ color: "#2d6e47", fontWeight: 700, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none" }}>&larr; Terug naar de site</Link>
        <h1 style={h1}>Algemene voorwaarden</h1>
        <p style={{ fontSize: 14, marginBottom: 40 }}>Laatst bijgewerkt op 25 juli 2026</p>
        <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en werken uitgevoerd door Groen By Hoorens (Maurice Hoorens), tenzij schriftelijk anders overeengekomen.</p>
        <h2 style={h2}>1. Diensten</h2>
        <p>Groen By Hoorens verzorgt tuinonderhoud, snoeiwerk en het leggen van schors in Oost-Vlaanderen. Onkruidbestrijding met gewasbeschermingsmiddelen (fytolicentie vereist) behoort niet tot het dienstenaanbod.</p>
        <h2 style={h2}>2. Offertes</h2>
        <p>Offertes zijn vrijblijvend en gelden gedurende 30 dagen, tenzij anders vermeld. Een prijs wordt in de regel bepaald na een tuinbezoek ter plaatse. Meerwerk dat tijdens de uitvoering nodig blijkt, wordt vooraf besproken.</p>
        <h2 style={h2}>3. Afspraken en annulatie</h2>
        <p>Afspraken worden in onderling overleg vastgelegd. Bij verhindering vraag ik u de afspraak minstens 48 uur vooraf te annuleren of te verplaatsen. Werken kunnen door weersomstandigheden worden uitgesteld; ik verwittig u zo snel mogelijk.</p>
        <h2 style={h2}>4. Uitvoering</h2>
        <p>De werken worden vakkundig en met zorg uitgevoerd. U zorgt ervoor dat de tuin toegankelijk is en dat, indien nodig, water en elektriciteit beschikbaar zijn. Groei door natuurlijke of seizoensinvloeden na uitvoering valt buiten de aansprakelijkheid.</p>
        <h2 style={h2}>5. Betaling</h2>
        <p>Facturen zijn betaalbaar binnen 14 dagen na factuurdatum, tenzij anders overeengekomen. Bij laattijdige betaling kan een herinnering en de wettelijke intrest worden aangerekend.</p>
        <h2 style={h2}>6. Aansprakelijkheid</h2>
        <p>Groen By Hoorens is verzekerd voor de uitgevoerde werken. De aansprakelijkheid is beperkt tot het bedrag van de betrokken opdracht. Schade door verborgen leidingen, kabels of gebreken die niet zichtbaar of gemeld waren, valt buiten mijn aansprakelijkheid.</p>
        <h2 style={h2}>7. Klachten</h2>
        <p>Klachten over de uitgevoerde werken meldt u binnen 8 dagen na uitvoering per e-mail aan <a href="mailto:groenbyhoorens@gmail.com">groenbyhoorens@gmail.com</a>, zodat ik ze kan bekijken en, waar terecht, verhelpen.</p>
        <h2 style={h2}>8. Toepasselijk recht</h2>
        <p>Op alle overeenkomsten is het Belgisch recht van toepassing. Geschillen behoren tot de bevoegdheid van de rechtbanken van het gerechtelijk arrondissement Oost-Vlaanderen, afdeling Oudenaarde.</p>
      </div>
    </main>
  );
}
