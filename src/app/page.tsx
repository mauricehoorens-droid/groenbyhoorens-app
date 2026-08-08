import Link from "next/link";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";

const diensten = [
  { num: "01", img: "/img/tuinonderhoud.jpg", alt: "Vers gemaaid gazon met maaisporen", titel: "Tuinonderhoud", desc: "Ik kom op vaste momenten langs: gras, kanten afsteken, wieden en wat er die maand nodig is. U hoeft er zelf niet meer aan te denken." },
  { num: "02", img: "/img/snoeiwerk.jpg", alt: "Haag snoeien met de heggenschaar", titel: "Snoeiwerk", desc: "Hagen, struiken en kleiner houtwerk. Ik snoei in het seizoen dat de plant het aankan en neem het snoeisel mee, zodat u geen hoop takken overhoudt." },
  { num: "03", img: "/img/borders.jpg", alt: "Verse laag boomschors klaar om te leggen", titel: "Schors leggen", desc: "Schors houdt onkruid tegen en de grond langer vochtig. Ik maak de bedden eerst proper en leg daarna een gelijke laag, tot netjes tegen de randen." },
];

const redenen = [
  { num: "01", titel: "Ik doe dit graag", tekst: "Ik ben hiermee gestart naast mijn studies omdat buiten werken me ligt. Dat scheelt op een lange dag." },
  { num: "02", titel: "U krijgt altijd mij", tekst: "Geen onbekend gezicht dat plots voor de deur staat." },
  { num: "03", titel: "Ik werk dicht bij huis", tekst: "Omdat ik in de streek blijf, kan ik er tussendoor eens langs als er iets dringend is. Dat lukt niet als je een uur moet rijden." },
  { num: "04", titel: "Ik kom op voorhand eens langs als u dat wenst", tekst: "Ik kom eerst kijken en zeg dan wat het kost." },
];

const gemeenten = ["Brakel", "Lierde", "Zottegem", "Sint-Lievens-Houtem", "Velzeke", "Ronse", "Oudenaarde", "Zwalm"];

export default function Home() {
  return (
    <>
      {/* HERO — minimalistisch, enkel logo gecentreerd */}
      <section className="hero hero-minimal">
        <img className="hero-img" src="/img/hero.jpg" alt="Verzorgde tuin in Oost-Vlaanderen" />
        <div className="hero-center">
          <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img className="hero-logo" src="/logo/logo-white.svg" alt="Groen By Hoorens" />
            <p className="eyebrow" style={{ marginTop: 30, color: "#fff" }}>Tuinonderhoud in Oost-Vlaanderen</p>
          </Reveal>
        </div>
        <a href="#over" className="scroll-hint">Ontdek ↓</a>
      </section>

      {/* WAARDEN — editorial statement */}
      <section className="section" style={{ paddingBottom: "clamp(48px,7vw,90px)" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <Reveal className="values">
            <span>Altijd dezelfde persoon</span><span className="vdot">·</span>
            <span>Afspraak = afspraak</span><span className="vdot">·</span>
            <span>Alles proper achtergelaten</span><span className="vdot">·</span>
            <span>Actief in Oost-Vlaanderen</span>
          </Reveal>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="section" id="diensten" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: 40, maxWidth: 620 }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Wat ik doe</p>
            <h2 className="display-lg" style={{ color: "var(--color-groen)" }}>Mijn diensten</h2>
          </Reveal>
          <Reveal className="svc-grid">
            {diensten.map((d) => (
              <article className="svc" key={d.num}>
                <img className="svc-img" src={d.img} alt={d.alt} />
                <div className="svc-body">
                  <span className="svc-num">{d.num}</span>
                  <h3>{d.titel}</h3>
                  <p>{d.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: 40 }}>
            <a href="#contact" className="btn">Vraag een prijs</a>
          </Reveal>
        </div>
      </section>

      {/* OVER MIJ */}
      <section className="section" id="over">
        <div className="wrap split">
          <Reveal>
            <img className="split-img split-tall" src="/img/over-mij.jpg" alt="Terras met loungezetels en aangelegde border" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Over mij</p>
            <p style={{ display: "inline-flex", gap: 8, alignItems: "center", padding: "7px 14px", background: "var(--color-beige)", borderRadius: 999, fontSize: 13, fontWeight: 600, color: "var(--color-groen)" }}>
              🎓 Student Bedrijfsmanagement
            </p>
            <p style={{ marginTop: 22, color: "#3a463b", maxWidth: "48ch" }}>Ik ben Maurice Hoorens. Ik studeer bedrijfsmanagement en daarnaast onderhoud ik tuinen.</p>
            <p style={{ marginTop: 14, color: "#3a463b", maxWidth: "48ch" }}>Ik blijf bewust in Oost-Vlaanderen werken. Zo ken ik de tuinen waar ik kom en weet ik wat er het volgende seizoen staat aan te komen.</p>
            <p style={{ marginTop: 22, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 24, color: "var(--color-groen)" }}>Maurice Hoorens</p>
          </Reveal>
        </div>
      </section>

      {/* FULL-BLEED beeld (luxe tussenbeeld) */}
      <section className="fullbleed" aria-hidden="true">
        <img className="bg" src="/img/waarom.jpg" alt="Lange haag strak afgewerkt op hoogte" />
      </section>

      {/* REDENEN — clean lijst op groen */}
      <section className="section panel-groen">
        <div className="wrap two">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Waarom kiezen voor mij?</p>
            <h2 className="display-md">Waarom mensen<br /><em>mij terugvragen</em></h2>
          </Reveal>
          <Reveal className="reasons-light" delay={120}>
            {redenen.map((r) => (
              <div className="reason-l" key={r.num}>
                <span className="rn">{r.num}</span>
                <div>
                  <h4>{r.titel}</h4>
                  <p>{r.tekst}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WERK / GALERIJ */}
      <section className="section" id="werk">
        <div className="wrap">
          <Reveal style={{ marginBottom: 40, maxWidth: 620 }}>
            <p className="eyebrow" style={{ marginBottom: 14 }}>Mijn werk</p>
            <h2 className="display-lg" style={{ color: "var(--color-groen)" }}>Werk van de voorbije maanden</h2>
          </Reveal>
          <Reveal className="gallery">
            <div className="g-item col-7 ar-16-10"><img src="/img/galerij-1.jpg" alt="Strak aangelegd terras met siergrassen en geschoren hagen" loading="lazy" /></div>
            <div className="g-item col-5 ar-16-10"><img src="/img/galerij-2.jpg" alt="Strak geschoren beukenhaag langs het gazon" loading="lazy" /></div>
            <div className="g-item col-4 ar-1-1"><img src="/img/galerij-3.jpg" alt="Bloeiende borders langs een gemaaid gazon" loading="lazy" /></div>
            <div className="g-item col-4 ar-1-1"><img src="/img/galerij-4.jpg" alt="Aanleg van een border naast het terras" loading="lazy" /></div>
            <div className="g-item col-4 ar-1-1"><img src="/img/galerij-5.jpg" alt="Op hoogte gesnoeide haag in de avondzon" loading="lazy" /></div>
            <div className="g-item col-12 ar-16-10"><img src="/img/galerij-6.jpg" alt="Ruim onderhouden gazon met volgroeide bomen" loading="lazy" /></div>
            <div className="g-item col-4 ar-1-1"><img src="/img/galerij-7.jpg" alt="Haag op hoogte snoeien bij een manege" loading="lazy" /></div>
            <div className="g-item col-4 ar-1-1"><img src="/img/galerij-8.jpg" alt="Strak gesnoeide bolboom" loading="lazy" /></div>
            <div className="g-item col-4 ar-1-1"><img src="/img/galerij-9.jpg" alt="Paarden op de wei achter een pas geschoren haag" loading="lazy" /></div>
            <div className="g-item col-12 ar-16-10"><img src="/img/galerij-10.jpg" alt="Luchtbeeld van het onderhouden domein" loading="lazy" /></div>
          </Reveal>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="section panel-groen">
        <div className="wrap split">
          <Reveal delay={120} style={{ order: 2 }}>
            <img className="split-img split-tall" src="/img/werkgebied.jpg" alt="Tuin in Oost-Vlaanderen" loading="lazy" />
          </Reveal>
          <Reveal style={{ order: 1 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Waar ik actief ben</p>
            <h2 className="display-lg">Actief in <em>Oost-Vlaanderen</em></h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Ik werk in de streek rond Brakel en Zottegem, en verder in Oost-Vlaanderen als het te
              combineren valt. Zo sta ik er snel als er iets is. Niet zeker of u in mijn buurt valt?
              Stuur me gerust een berichtje of bel me even op.
            </p>
            <div className="tags">
              {gemeenten.map((g) => <span className="tag" key={g}>{g}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <Reviews />

      {/* CONTACT — donkergroen */}
      <section className="section panel-groen" id="contact">
        <div className="wrap two">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 16, color: "var(--color-zand)" }}>Neem contact op</p>
            <h2 className="display-lg">Een prijs <em>voor uw tuin</em></h2>
            <p className="lead" style={{ marginTop: 20, color: "#fff" }}>
              Bel of mail gerust. Meestal antwoord ik dezelfde dag, anders zeker de dag erna.
              Voor een prijs kom ik eerst even kijken.
            </p>
            <p className="info-label" style={{ color: "var(--color-goud)" }}>Telefoon</p>
            <p><a href="tel:+32498439811" className="link-underline" style={{ color: "#fff" }}>0498 43 98 11</a></p>
            <p className="info-label" style={{ color: "var(--color-goud)" }}>E-mail</p>
            <p><a href="mailto:groenbyhoorens@gmail.com" className="link-underline" style={{ color: "#fff" }}>groenbyhoorens@gmail.com</a></p>
            <p className="info-label" style={{ color: "var(--color-goud)" }}>Openingsuren</p>
            <p style={{ color: "#fff" }}>Maandag tot vrijdag van 08:00 tot 18:00.</p>
            <Link href="/boeken" className="btn btn-translucent" style={{ marginTop: 28 }}>Plan uw tuinwerken</Link>
          </Reveal>
          <Reveal delay={120} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.16)", padding: "clamp(26px,3vw,40px)", borderRadius: 4 }}>
            <ContactForm dark />
          </Reveal>
        </div>
      </section>
    </>
  );
}
