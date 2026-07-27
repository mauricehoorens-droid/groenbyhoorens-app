"use client";
// @ts-nocheck
import { useEffect } from "react";

export default function SiteScripts() {
  useEffect(() => {

/* ═══════════════════════════════════════════════════════════════
   1. CONFIGURATIE — hier vul je je Google-gegevens in
   ═══════════════════════════════════════════════════════════════
   apiKey  : je Google Maps JavaScript API-sleutel.
             → console.cloud.google.com → APIs & Services
             → schakel "Maps JavaScript API" én "Places API (New)" in
             → maak een API-sleutel en BEPERK die tot je domein
   placeId : optioneel. Laat leeg en de site zoekt de zaak zelf op.
═══════════════════════════════════════════════════════════════ */
const GBH = {
  apiKey:      'VUL_HIER_JE_GOOGLE_MAPS_API_KEY_IN',
  placeId:     '',
  searchQuery: 'Groen By Hoorens, Oost-Vlaanderen, België',
  maxReviews:  6,
  minRating:   4,
  cacheHours:  12,
  /* Vaste reviews die meteen getoond worden zolang er geen Google API-sleutel
     is ingevuld. Nieuwe reviews kun je hier onderaan de lijst bijzetten en
     'total' + 'rating' aanpassen. */
  seed: {
    rating: 5,
    total: 1,
    mapsUri: 'https://maps.google.com/?cid=9432449784224368385',
    reviews: [
      {
        author: 'Annelies Decrame',
        rating: 5,
        when:   'juli 2026',
        text:   'Heel beleefde jongen! Ik ben ook zeer tevreden over hoe mijn hagen geschoren zijn, en proper opgeruimd!! Chapeau voor deze jonge man.'
      }
    ]
  }
};

/* ── NAV & ANIMATIES ── */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));

const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
}, { threshold: 0.10 });
document.querySelectorAll('.fu').forEach(el => obs.observe(el));

['hero-eyebrow','hero-title','hero-intro','hero-btns'].forEach((cls, i) => {
  const el = document.querySelector('.' + cls);
  if (!el) return;
  el.style.cssText = `opacity:0;transform:translateY(18px);transition:opacity .7s ease ${i*0.13}s,transform .7s ease ${i*0.13}s`;
  setTimeout(() => el.style.cssText += ';opacity:1;transform:translateY(0)', 80);
});

/* ═══════════════════════════════════════════════════════════════
   2. GOOGLE REVIEWS — automatisch ophalen & tonen
   ═══════════════════════════════════════════════════════════════ */
const rvGrid     = document.getElementById('rv-grid');
const rvSkeleton = document.getElementById('rv-skeleton');
const rvState    = document.getElementById('rv-state');
const rvSummary  = document.getElementById('rv-summary');

function starsHTML(rating, size) {
  const r = Math.round(rating);
  let out = '';
  for (let i = 1; i <= 5; i++) {
    out += `<svg viewBox="0 0 24 24" style="width:${size}px;height:${size}px" aria-hidden="true">
      <path class="${i <= r ? 'star-full' : 'star-empty'}" d="M12 2.2l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.26l-5.91 3.1 1.13-6.57L2.45 9.14l6.6-.96z"/></svg>`;
  }
  return out;
}
const esc = s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderReviews(data) {
  if (rvSkeleton.isConnected) rvSkeleton.remove();

  if (data.rating) {
    document.getElementById('rv-score-num').textContent = data.rating.toFixed(1).replace('.', ',');
    document.getElementById('rv-count').textContent     = data.total || 0;
    document.getElementById('rv-summary-stars').innerHTML = starsHTML(data.rating, 16);
    rvSummary.classList.remove('hidden');

    const heroBox = document.getElementById('hero-rating');
    document.getElementById('hero-stars').innerHTML     = starsHTML(data.rating, 15);
    document.getElementById('hero-rating-num').textContent   = data.rating.toFixed(1).replace('.', ',');
    document.getElementById('hero-rating-count').textContent = data.total || 0;
    heroBox.classList.add('on');

    gbhInjectRatingSchema(data.rating, data.total);
  }

  if (data.mapsUri) document.getElementById('rv-link-all').href = data.mapsUri;
  /* De reviewknop wijst naar de vaste g.page-link uit Google Bedrijfsprofiel,
     die laten we staan en niet overschrijven. */

  const list = (data.reviews || []).filter(r => !r.rating || r.rating >= GBH.minRating).slice(0, GBH.maxReviews);
  if (!list.length) { rvState.hidden = false; rvState.textContent = 'Er staan nog geen reviews online. Bent u klant geweest? Ik zou het hard appreciëren.'; return; }

  rvGrid.innerHTML = list.map(r => {
    const initial = (r.author || '?').trim().charAt(0).toUpperCase();
    const avatar = r.photo
      ? `<img class="rv-avatar" src="${esc(r.photo)}" alt="" loading="lazy" referrerpolicy="no-referrer" />`
      : `<div class="rv-avatar-fallback">${esc(initial)}</div>`;
    const full = (r.text || '').trim();
    const short = full.length > 240 ? full.slice(0, 240).trim() + '…' : full;
    const body = full.length > 240
      ? `<span class="rv-short">${esc(short)}</span><span class="rv-full" hidden>${esc(full)}</span><button class="rv-more" type="button">Lees meer</button>`
      : esc(full);
    return `<article class="rv-card">
      <div class="rv-top">
        ${avatar}
        <div class="rv-who">
          <span class="rv-name">${esc(r.author || 'Google-gebruiker')}</span>
          <span class="rv-when">${esc(r.when || '')}</span>
        </div>
      </div>
      <span class="stars">${starsHTML(r.rating || 5, 15)}</span>
      <p class="rv-text">${body}</p>
    </article>`;
  }).join('');
  rvGrid.hidden = false;

  rvGrid.querySelectorAll('.rv-more').forEach(btn => btn.addEventListener('click', () => {
    const p = btn.closest('.rv-text');
    const shortEl = p.querySelector('.rv-short'), fullEl = p.querySelector('.rv-full');
    const expanded = !fullEl.hidden;
    fullEl.hidden = expanded; shortEl.hidden = !expanded;
    btn.textContent = expanded ? 'Lees meer' : 'Toon minder';
  }));
}

function gbhInjectRatingSchema(rating, total) {
  if (!rating || !total) return;
  try {
    const el = document.getElementById('gbh-schema');
    const json = JSON.parse(el.textContent);
    json.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": Number(rating.toFixed(1)),
      "reviewCount": total,
      "bestRating": 5,
      "worstRating": 1
    };
    el.textContent = JSON.stringify(json);
  } catch (e) { /* stil */ }
}

function rvFail(msg) {
  if (rvSkeleton.isConnected) rvSkeleton.remove();
  rvState.hidden = false;
  console.warn('[Groen By Hoorens] Reviews niet geladen:', msg);
}

const CACHE_KEY = 'gbh-google-reviews';
function readCache() {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
    if (c && Date.now() - c.t < GBH.cacheHours * 3600e3) return c.d;
  } catch (e) {}
  return null;
}
function writeCache(d) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d })); } catch (e) {}
}

async function gbhLoadReviews() {
  const cached = readCache();
  if (cached) { renderReviews(cached); return; }

  const { Place } = await google.maps.importLibrary('places');
  let place;

  if (GBH.placeId) {
    place = new Place({ id: GBH.placeId, requestedLanguage: 'nl' });
  } else {
    const { places } = await Place.searchByText({
      textQuery: GBH.searchQuery,
      fields: ['id', 'displayName'],
      maxResultCount: 1,
      language: 'nl',
      region: 'be'
    });
    if (!places || !places.length) throw new Error('Zaak niet gevonden via zoekopdracht.');
    place = places[0];
  }

  await place.fetchFields({
    fields: ['id', 'displayName', 'rating', 'userRatingCount', 'reviews', 'googleMapsURI']
  });

  const data = {
    id:      place.id,
    rating:  place.rating,
    total:   place.userRatingCount,
    mapsUri: place.googleMapsURI,
    reviews: (place.reviews || []).map(r => ({
      author: r.authorAttribution && r.authorAttribution.displayName,
      photo:  r.authorAttribution && r.authorAttribution.photoURI,
      rating: r.rating,
      when:   r.relativePublishTimeDescription,
      text:   (r.text && r.text.text) || r.text || ''
    }))
  };

  writeCache(data);
  renderReviews(data);
}

window.gbhInitReviews = function () {
  gbhLoadReviews().catch(err => rvFail(err.message || err));
};

(function loadMaps() {
  if (!GBH.apiKey || GBH.apiKey.indexOf('VUL_HIER') === 0) {
    /* Geen API-sleutel: toon de vaste reviews uit GBH.seed. */
    if (GBH.seed && GBH.seed.reviews && GBH.seed.reviews.length) {
      renderReviews(GBH.seed);
      return;
    }
    rvFail('Geen API-sleutel ingevuld. Zet je sleutel in GBH.apiKey bovenaan het script.');
    rvState.textContent = 'Er staan nog geen reviews online. Bent u klant geweest? Een korte review helpt mij enorm.';
    return;
  }
  const s = document.createElement('script');
  s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(GBH.apiKey) +
          '&libraries=places&v=weekly&language=nl&region=BE&loading=async&callback=gbhInitReviews';
  s.async = true;
  s.onerror = () => rvFail('Google Maps script kon niet geladen worden.');
  document.head.appendChild(s);
})();


  /* ── CONTACTFORMULIER → /api/contact (Supabase) ── */
  (function(){
    var form=document.getElementById('offerte-form');
    if(!form || form.dataset.bound) return;
    form.dataset.bound='1';
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      var btn=form.querySelector('.form-btn');
      var orig=btn?btn.textContent:'';
      if(btn){btn.disabled=true;btn.textContent='Versturen…';}
      var g=function(id){var el=document.getElementById(id);return el?el.value:'';};
      var payload={naam:g('naam'),telefoon:g('tel'),email:g('email'),dienst:g('dienst'),bericht:g('bericht')};
      try{
        var r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        if(!r.ok) throw new Error('fail');
        form.reset();
        if(btn){btn.textContent='Verzonden ✓';}
      }catch(err){
        if(btn){btn.textContent='Er ging iets mis — mail me gerust';}
      }finally{
        if(btn){setTimeout(function(){btn.disabled=false;btn.textContent=orig||'Versturen';},4000);}
      }
    });
  })();

  }, []);
  return null;
}
