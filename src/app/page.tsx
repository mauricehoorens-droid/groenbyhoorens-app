import SiteScripts from "./SiteScripts";

export default function Home() {
  return (
    <>


{/* NAV */}
<nav id="navbar">
  <a href="#" className="nav-logo" aria-label="Groen By Hoorens, naar boven">
    <img src="/logo/logo-v2.png" alt="Groen By Hoorens" className="nav-logo-img" width="700" height="191" />
  </a>
  <button className="nav-burger" id="nav-burger" aria-label="Menu openen" aria-expanded="false" aria-controls="nav-links">
    <span></span><span></span><span></span>
  </button>
  <ul className="nav-links" id="nav-links">
    <li><a href="#over">Over mij</a></li>
    <li><a href="#diensten">Diensten</a></li>
    <li><a href="#reviews">Reviews</a></li>
    <li><a href="#galerij">Galerij</a></li>
    <li><a href="#contact" className="nav-cta">Offerte aanvragen</a></li>
  </ul>
</nav>

{/* HERO */}
<section className="hero">
  <div className="hero-left">
    <p className="hero-eyebrow">Tuinonderhoud in Oost-Vlaanderen</p>
    <h1 className="hero-title">Uw tuin in<br/><em>goede handen</em></h1>
    <p className="hero-intro">Ik doe elke tuin zelf, van het eerste bezoek tot het opruimen achteraf.</p>

    <a className="hero-rating" id="hero-rating" href="#reviews">
      <span className="stars" id="hero-stars"></span>
      <span><b id="hero-rating-num">0</b> op Google, <span id="hero-rating-count">0</span> reviews</span>
    </a>

    <div className="hero-btns">
      <a href="#contact" className="btn-primary">Vraag een prijs</a>
      <a href="#diensten" className="btn-secondary">Mijn diensten</a>
    </div>
  </div>
  <div className="hero-right">
    <img src="/img/hero.jpg" alt="Verzorgde tuin met gemaaid gazon en strakke haag" id="hero-img" />
  </div>
</section>

{/* STRIP */}
<div className="strip">
  <div className="strip-item">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
    <span>Altijd dezelfde persoon</span>
  </div>
  <div className="strip-item">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
    <span>Afspraak = afspraak</span>
  </div>
  <div className="strip-item">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    <span>Alles proper achtergelaten</span>
  </div>
  <div className="strip-item">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    <span>Actief in Oost-Vlaanderen</span>
  </div>
</div>

{/* OVER MIJ */}
<section className="over" id="over">
  <div className="over-imgs fu">
    <img className="over-img-main" src="/img/over-mij.jpg" alt="Terras met loungezetels en aangelegde border" id="over-main" />
    <img className="over-img-accent" src="/img/aan-het-werk.jpg" alt="Ladder en kruiwagen bij een klus in uitvoering" id="over-accent" />
  </div>
  <div className="over-content fu">
    <p className="eyebrow">Over mij</p>
    <h2 className="section-title">Liefst werk ik<br/><em>buiten</em></h2>
    <div className="student-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      <span>Student Bedrijfsmanagement</span>
    </div>
    <p className="body-text">Ik ben Maurice Hoorens. Ik studeer bedrijfsmanagement en daarnaast onderhoud ik tuinen.</p>
    <p className="body-text">Ik blijf bewust in Oost-Vlaanderen werken. Zo ken ik de tuinen waar ik kom en weet ik wat er het volgende seizoen staat aan te komen.</p>
    <p className="sig">Maurice Hoorens</p>
  </div>
</section>

{/* DIENSTEN */}
<section className="diensten" id="diensten">
  <div className="diensten-header fu">
    <p className="eyebrow">Wat ik doe</p>
    <h2 className="section-title">Mijn diensten</h2>
  </div>
  <div className="diensten-grid">
    <div className="card fu">
      <img className="card-img" src="/img/tuinonderhoud.jpg" alt="Vers gemaaid gazon met maaisporen" id="card1-img" />
      <div className="card-body">
        <div className="card-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <h3 className="card-name">Tuinonderhoud</h3>
        <p className="card-desc">Ik kom op vaste momenten langs: gras, kanten afsteken, wieden en wat er die maand nodig is. U hoeft er zelf niet meer aan te denken.</p>
      </div>
    </div>
    <div className="card fu">
      <img className="card-img" src="/img/snoeiwerk.jpg" alt="Haag snoeien met de heggenschaar" id="card2-img" />
      <div className="card-body">
        <div className="card-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/><line x1="12" y1="2" x2="12" y2="22"/></svg></div>
        <h3 className="card-name">Snoeiwerk</h3>
        <p className="card-desc">Hagen, struiken en kleiner houtwerk. Ik snoei in het seizoen dat de plant het aankan en neem het snoeisel mee, zodat u geen hoop takken overhoudt.</p>
      </div>
    </div>
    <div className="card fu">
      <img className="card-img" src="/img/borders.jpg" alt="Bloeiende border langs een gesnoeide haag" id="card3-img" />
      <div className="card-body">
        <div className="card-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
        <h3 className="card-name">Schors leggen</h3>
        <p className="card-desc">Schors houdt onkruid tegen en de grond langer vochtig. Ik maak de bedden eerst proper en leg daarna een gelijke laag, tot netjes tegen de randen.</p>
      </div>
    </div>
  </div>
</section>

{/* ══════════ REVIEWS (automatisch uit Google) ══════════ */}
<section className="reviews" id="reviews">
  <div className="reviews-header fu">
    <p className="eyebrow">Reviews</p>
    <h2 className="section-title">Wat klanten<br/><em>erover zeggen</em></h2>
  </div>

  <div className="rv-summary hidden" id="rv-summary">
    <div className="rv-google-mark">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.4h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.5 5 .5.1c4.2-3.9 6.6-9.6 6.6-15.7z"/>
        <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 40.4 15.4 46 24 46z"/>
        <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-.3l-6.8-5.3-.2.1C2.9 17.1 2 20.4 2 24s.9 6.9 2.5 9.9l7-5.5z"/>
        <path fill="#EB4335" d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.4 29.9 2 24 2 15.4 2 8 7.6 4.5 14.1l7 5.5c1.8-5.3 6.7-9.1 12.5-9.1z"/>
      </svg>
      <span>Google</span>
    </div>
    <div className="rv-score">
      <span className="rv-score-num" id="rv-score-num">0</span>
      <span className="rv-score-of">/ 5</span>
    </div>
    <div className="rv-score-meta">
      <span className="stars" id="rv-summary-stars"></span>
      <span className="rv-count"><span id="rv-count">0</span> Google-reviews</span>
    </div>
  </div>

  <div className="rv-skeleton" id="rv-skeleton">
    <div className="rv-sk"></div><div className="rv-sk"></div><div className="rv-sk"></div>
  </div>

  <div className="rv-grid" id="rv-grid" hidden></div>

  <p className="rv-state" id="rv-state" hidden>
    De reviews laden even niet. U kunt ze rechtstreeks op Google bekijken.
  </p>

  <div className="rv-actions">
    <a className="rv-btn-google" id="rv-link-all" href="https://maps.google.com/?cid=9432449784224368385" target="_blank" rel="noopener">
      <svg viewBox="0 0 48 48" style={{width:17,height:17}} aria-hidden="true">
        <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.4h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.5 5 .5.1c4.2-3.9 6.6-9.6 6.6-15.7z"/>
        <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 40.4 15.4 46 24 46z"/>
        <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-.3l-6.8-5.3-.2.1C2.9 17.1 2 20.4 2 24s.9 6.9 2.5 9.9l7-5.5z"/>
        <path fill="#EB4335" d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.4 29.9 2 24 2 15.4 2 8 7.6 4.5 14.1l7 5.5c1.8-5.3 6.7-9.1 12.5-9.1z"/>
      </svg>
      Bekijk alles op Google
    </a>
    <a className="btn-primary" id="rv-link-write" href="https://g.page/r/CQFHZ34ay-aCEBM/review" target="_blank" rel="noopener">Laat een review na</a>
  </div>
</section>

{/* GALERIJ */}
<section className="galerij" id="galerij">
  <div className="galerij-header fu">
    <p className="eyebrow">Mijn werk</p>
    <h2 className="section-title">Werk van de voorbije maanden</h2>
  </div>
  <div className="galerij-grid">
    <div className="gi wide"><img src="/img/galerij-1.jpg" id="g1" alt="Ruim gazon met zicht op het terras" loading="lazy" /></div>
    <div className="gi"><img src="/img/galerij-2.jpg" id="g2" alt="Gazon tot tegen de rand van het zwembad" loading="lazy" /></div>
    <div className="gi"><img src="/img/galerij-3.jpg" id="g3" alt="Gemaaid gazon langs een donkere haag" loading="lazy" /></div>
    <div className="gi"><img src="/img/galerij-4.jpg" id="g4" alt="Laurierhaag op hoogte gesnoeid" loading="lazy" /></div>
    <div className="gi"><img src="/img/galerij-5.jpg" id="g5" alt="Zijtuin met pad en haag" loading="lazy" /></div>
    <div className="gi wide"><img src="/img/galerij-6.jpg" id="g6" alt="Smalle tuin met haag en gazon" loading="lazy" /></div>
  </div>
</section>

{/* WERKGEBIED */}
<section className="werkgebied">
  <div className="wg-content fu">
    <p className="wg-eyebrow">Waar ik actief ben</p>
    <h2 className="wg-title">Actief in<br/>Oost-Vlaanderen</h2>
    <p className="wg-text">Ik werk in de streek rond Brakel en Zottegem, en verder in Oost-Vlaanderen als het te combineren valt. Zo sta ik er snel als er iets is. Niet zeker of u in mijn buurt valt? Stuur me gerust een berichtje of bel me even op.</p>
    <div className="wg-tags">
      <span className="wg-tag">Brakel</span>
      <span className="wg-tag">Lierde</span>
      <span className="wg-tag">Zottegem</span>
      <span className="wg-tag">Sint-Lievens-Houtem</span>
      <span className="wg-tag">Velzeke</span>
      <span className="wg-tag">Ronse</span>
      <span className="wg-tag">Oudenaarde</span>
      <span className="wg-tag">Zwalm</span>
    </div>
  </div>
  <div className="wg-image fu">
    <img src="/img/werkgebied.jpg" id="wg-img" alt="Tuin in Oost-Vlaanderen" loading="lazy" />
  </div>
</section>

{/* WAAROM */}
<section className="waarom">
  <div className="waarom-img fu">
    <img src="/img/waarom.jpg" id="waarom-img" alt="Lange haag strak afgewerkt op hoogte" loading="lazy" />
  </div>
  <div className="fu">
    <p className="eyebrow">Waarom kiezen voor mij?</p>
    <h2 className="section-title">Waarom mensen<br/><em>mij terugvragen</em></h2>
    <ul className="waarom-list">
      <li className="wi">
        <span className="wi-num">01</span>
        <div className="wi-text">
          <h4>Ik doe dit graag</h4>
          <p>Ik ben hiermee gestart naast mijn studies omdat buiten werken me ligt. Dat scheelt op een lange dag.</p>
        </div>
      </li>
      <li className="wi">
        <span className="wi-num">02</span>
        <div className="wi-text">
          <h4>U krijgt altijd mij</h4>
          <p>Geen onbekend gezicht dat plots voor de deur staat.</p>
        </div>
      </li>
      <li className="wi">
        <span className="wi-num">03</span>
        <div className="wi-text">
          <h4>Ik werk dicht bij huis</h4>
          <p>Omdat ik in de streek blijf, kan ik er tussendoor eens langs als er iets dringend is. Dat lukt niet als je een uur moet rijden.</p>
        </div>
      </li>
      <li className="wi">
        <span className="wi-num">04</span>
        <div className="wi-text">
          <h4>Ik kom op voorhand eens langs als u dat wenst</h4>
          <p>Ik kom eerst kijken en zeg dan wat het kost.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* CONTACT */}
<section className="contact" id="contact">
  <div className="fu">
    <p className="eyebrow">Neem contact op</p>
    <h2 className="section-title">Een prijs<br/><em>voor uw tuin</em></h2>
    <p className="contact-intro">Bel of mail gerust. Meestal antwoord ik dezelfde dag, anders zeker de dag erna. Voor een prijs kom ik eerst even kijken.</p>
    <p className="contact-label">Telefoon</p>
    <p><a href="tel:+32498439811">0498 43 98 11</a></p>
    <p className="contact-label">E-mail</p>
    <p><a href="mailto:groenbyhoorens@gmail.com">groenbyhoorens@gmail.com</a></p>
    <p className="contact-label">Werkgebied</p>
    <p>Oost-Vlaanderen</p>
    <p className="contact-label">Openingsuren</p>
    <p>Maandag tot vrijdag van 08:00 tot 18:00.</p>
    <a className="calendly-btn" href="/boeken">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Plan uw tuinwerken
    </a>
  </div>
  <div className="fu">
    <form className="form" id="offerte-form" name="offerte" method="POST">
      <div className="form-row">
        <div className="fg"><label htmlFor="naam">Uw naam</label><input type="text" id="naam" name="naam" autoComplete="name" placeholder="Jan Janssen" required /></div>
        <div className="fg"><label htmlFor="tel">Telefoonnummer</label><input type="tel" id="tel" name="telefoon" autoComplete="tel" placeholder="0499 00 00 00" /></div>
      </div>
      <div className="fg"><label htmlFor="email">E-mailadres</label><input type="email" id="email" name="email" autoComplete="email" placeholder="jan@voorbeeld.be" required /></div>
      <div className="fg">
        <label htmlFor="dienst">Waarvoor zoekt u iemand?</label>
        <select id="dienst" name="dienst">
          <option value="">Kies een dienst</option>
          <option>Tuinonderhoud</option>
          <option>Snoeiwerk</option>
          <option>Schors leggen</option>
          <option>Combinatie van diensten</option>
          <option>Iets anders</option>
        </select>
      </div>
      <div className="fg"><label htmlFor="bericht">Uw bericht</label><textarea id="bericht" name="bericht" placeholder="Hoe groot is de tuin, en wat zou er moeten gebeuren?"></textarea></div>
      <button className="form-btn" type="submit">Versturen</button>
    </form>
  </div>
</section>

{/* FOOTER */}
<footer>
  <div className="footer-logo">
    <img src="/logo/logo-light-v2.png" alt="Groen By Hoorens" className="footer-logo-img" width="500" height="136" />
  </div>
  <span>Tuinonderhoud, snoeiwerk en schors leggen in Oost-Vlaanderen</span>
  <span className="footer-legal">
    <a href="/privacybeleid" style={{ color: "inherit", textDecoration: "underline", opacity: 0.85 }}>Privacybeleid</a>{" · "}
    <a href="/algemene-voorwaarden" style={{ color: "inherit", textDecoration: "underline", opacity: 0.85 }}>Algemene voorwaarden</a>{" · "}
    <a href="/juridische-vermeldingen" style={{ color: "inherit", textDecoration: "underline", opacity: 0.85 }}>Juridische vermeldingen</a>
  </span>
  <span>Groen By Hoorens 2026</span>
</footer>
      <SiteScripts />
    </>
  );
}
