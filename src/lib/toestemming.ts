/**
 * Cookietoestemming voor de Meta-pixel (advertenties op Facebook/Instagram).
 * Zonder toestemming wordt niets van Meta geladen. Weigeren is even makkelijk
 * als aanvaarden. De keuze wordt 6 maanden onthouden en is te wijzigen via
 * "Cookie-instellingen" onderaan elke pagina.
 * Vercel Web Analytics (bezoekersaantallen) gebruikt geen cookies.
 */
/** Meta-pixel "Groen By Hoorens website pixel" (bedrijfsportfolio Maurice Hoorens). */
export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "2700422093735278";

export type Keuze = { marketing: boolean; datum: string };
const SLEUTEL = "gbh_toestemming";
const ZES_MAANDEN = 60 * 60 * 24 * 182;
export const OPEN_EVENT = "gbh-toestemming-open";

export function leesKeuze(): Keuze | null {
  try {
    const ruw = window.localStorage.getItem(SLEUTEL);
    if (ruw) {
      const k = JSON.parse(ruw) as Keuze;
      if (Date.now() - new Date(k.datum).getTime() < ZES_MAANDEN * 1000) return k;
    }
  } catch {}
  try {
    const c = document.cookie.split("; ").find((x) => x.startsWith(`${SLEUTEL}=`));
    if (c) return { marketing: c.split("=")[1] === "1", datum: new Date().toISOString() };
  } catch {}
  return null;
}

export function bewaarKeuze(marketing: boolean): Keuze {
  const k: Keuze = { marketing, datum: new Date().toISOString() };
  try {
    window.localStorage.setItem(SLEUTEL, JSON.stringify(k));
  } catch {}
  try {
    document.cookie = `${SLEUTEL}=${marketing ? 1 : 0}; max-age=${ZES_MAANDEN}; path=/; SameSite=Lax; Secure`;
  } catch {}
  return k;
}
