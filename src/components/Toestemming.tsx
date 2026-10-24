"use client";

import { useEffect, useState } from "react";
import { OPEN_EVENT, PIXEL_ID, bewaarKeuze, leesKeuze } from "@/lib/toestemming";

type Fbq = ((...a: unknown[]) => void) & {
  callMethod?: (...a: unknown[]) => void;
  queue: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
};
type W = Window & { fbq?: Fbq; _fbq?: Fbq };

function laadMeta() {
  if (!PIXEL_ID) return;
  const w = window as W;
  if (w.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  w.fbq = fbq;
  if (!w._fbq) w._fbq = fbq;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  fbq("init", PIXEL_ID);
  fbq("track", "PageView");
}

/** Cookiebanner voor de Meta-pixel. Verschijnt tot de bezoeker kiest. */
export default function Toestemming() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    const k = leesKeuze();
    if (k) {
      if (k.marketing) laadMeta();
    } else {
      setOpen(true);
    }
    const heropen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, heropen);
    return () => window.removeEventListener(OPEN_EVENT, heropen);
  }, []);

  if (!open) return null;

  function kies(m: boolean) {
    bewaarKeuze(m);
    if (m) laadMeta();
    setOpen(false);
  }

  return (
    <div className="gbh-tst" role="region" aria-label="Cookie-instellingen">
      <div className="gbh-tst-in">
        <p className="gbh-tst-kop">Cookies</p>
        <p className="gbh-tst-tekst">
          Met uw toestemming gebruiken we de Meta-pixel om te meten of onze advertenties op
          Facebook en Instagram werken. Weigert u, dan wordt er niets geladen.{" "}
          <a href="/privacybeleid#cookies">Meer info</a>
        </p>
        <div className="gbh-tst-knoppen">
          <button type="button" className="gbh-tst-knop gbh-tst-weiger" onClick={() => kies(false)}>
            Weigeren
          </button>
          <button type="button" className="gbh-tst-knop" onClick={() => kies(true)}>
            Aanvaarden
          </button>
        </div>
      </div>
    </div>
  );
}

/** Link in de voettekst om de keuze te wijzigen. */
export function CookieKnop() {
  return (
    <button
      type="button"
      className="link-underline gbh-cookie-knop"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      Cookie-instellingen
    </button>
  );
}
