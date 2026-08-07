import Reveal from "./Reveal";

// Zelfde review-aanpak als de live site: vaste seed die meteen toont.
// Nieuwe Google-reviews kun je hier onderaan de lijst toevoegen.
const REVIEWS = [
  {
    author: "Matthias Dieltjens",
    rating: 5,
    when: "augustus 2026",
    text: "Zeker een aanrader! Alles super netjes afgewerkt. Snelle service met goede communicatie!",
  },
  {
    author: "Wouter",
    rating: 5,
    when: "augustus 2026",
    text: "Topservice! Jonge, gemotiveerde tuinman die zijn werk met veel zorg en enthousiasme uitvoert. Werkt netjes, is betrouwbaar en levert een prachtig resultaat. Zeker een aanrader!",
  },
  {
    author: "Annelies Decrame",
    rating: 5,
    when: "juli 2026",
    text: "Heel beleefde jongen! Ik ben ook zeer tevreden over hoe mijn hagen geschoren zijn, en proper opgeruimd!! Chapeau voor deze jonge man.",
  },
];
const RATING = 5.0;
const TOTAL = 3;
const MAPS_URL = "https://maps.google.com/?cid=9432449784224368385";
const REVIEW_URL = "https://g.page/r/CQFHZ34ay-aCEBM/review";

function Stars({ n }: { n: number }) {
  return <span className="rv-stars" aria-label={`${n} van 5`}>{"★★★★★".slice(0, n)}{"☆☆☆☆☆".slice(0, 5 - n)}</span>;
}

export default function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="wrap">
        <Reveal style={{ textAlign: "center", marginBottom: 46 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Reviews</p>
          <h2 className="display-lg" style={{ color: "var(--color-groen)" }}>
            Wat klanten <em>erover zeggen</em>
          </h2>
          <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", marginTop: 16 }}>
            <Stars n={Math.round(RATING)} />
            <span style={{ color: "var(--color-muted)", fontSize: 14 }}>{RATING.toFixed(1).replace(".", ",")} · {TOTAL} Google-reviews</span>
          </div>
        </Reveal>

        <Reveal style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
          {REVIEWS.map((r) => (
            <article
              key={r.author}
              style={{
                background: "var(--color-groen-diep)", color: "var(--color-creme)",
                padding: "clamp(28px,3vw,40px)", borderRadius: 4,
                maxWidth: 620, width: "100%", display: "flex", flexDirection: "column", gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--color-creme)", color: "var(--color-groen)", display: "grid", placeItems: "center", fontWeight: 600, fontFamily: "var(--font-display)" }}>
                  {r.author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#fff" }}>{r.author}</div>
                  <div style={{ color: "var(--color-beige)", fontSize: 13 }}>{r.when}</div>
                </div>
              </div>
              <Stars n={r.rating} />
              <p style={{ color: "var(--color-beige)", fontSize: 16, lineHeight: 1.65 }}>{r.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 44, flexWrap: "wrap" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener" className="btn btn-ghost">Bekijk alles op Google</a>
          <a href={REVIEW_URL} target="_blank" rel="noopener" className="btn">Laat een review na</a>
        </Reveal>
      </div>
    </section>
  );
}
