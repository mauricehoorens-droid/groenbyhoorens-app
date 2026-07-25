import { DateTime } from "luxon";

export const TZ = "Europe/Brussels";

// Halve dagen: ochtend 08:00–12:00, namiddag 13:00–17:00 (ma–vr).
export const DAGDELEN = [
  { key: "ochtend", label: "Voormiddag (08:00 – 12:00)", startH: 8, endH: 12 },
  { key: "namiddag", label: "Namiddag (12:00 – 16:00)", startH: 12, endH: 16 },
] as const;

export type SlotKey = (typeof DAGDELEN)[number]["key"];

export interface Slot {
  dagdeel: SlotKey;
  label: string;
  dateISO: string; // yyyy-mm-dd (lokale dag)
  startLocalISO: string; // 2026-07-27T08:00:00 (zonder offset, voor Google + timeZone)
  endLocalISO: string;
  startUTC: string; // RFC3339 in UTC, voor freebusy en opslag
  endUTC: string;
}

/** Genereert alle halve-dag-slots voor de komende `weken` weken (enkel ma–vr, vanaf morgen). */
export function genereerSlots(weken = 4): Slot[] {
  const slots: Slot[] = [];
  const start = DateTime.now().setZone(TZ).plus({ days: 1 }).startOf("day");
  const einde = start.plus({ weeks: weken });

  for (let d = start; d < einde; d = d.plus({ days: 1 })) {
    const weekday = d.weekday; // 1 = ma ... 7 = zo
    if (weekday > 5) continue; // enkel ma–vr
    for (const dd of DAGDELEN) {
      const s = d.set({ hour: dd.startH, minute: 0, second: 0, millisecond: 0 });
      const e = d.set({ hour: dd.endH, minute: 0, second: 0, millisecond: 0 });
      slots.push({
        dagdeel: dd.key,
        label: dd.label,
        dateISO: d.toISODate() as string,
        startLocalISO: s.toISO({ includeOffset: false }) as string,
        endLocalISO: e.toISO({ includeOffset: false }) as string,
        startUTC: s.toUTC().toISO() as string,
        endUTC: e.toUTC().toISO() as string,
      });
    }
  }
  return slots;
}

/** Nederlandse weergave van een dag, bv. "maandag 27 juli". */
export function toonDag(dateISO: string): string {
  return DateTime.fromISO(dateISO, { zone: TZ })
    .setLocale("nl")
    .toFormat("cccc d LLLL");
}

/** Overlapt een slot met een bezette periode? */
export function overlaptBezet(
  slotStartUTC: string,
  slotEndUTC: string,
  busy: { start?: string | null; end?: string | null }[]
): boolean {
  const s = DateTime.fromISO(slotStartUTC).toMillis();
  const e = DateTime.fromISO(slotEndUTC).toMillis();
  return busy.some((b) => {
    if (!b.start || !b.end) return false;
    const bs = DateTime.fromISO(b.start).toMillis();
    const be = DateTime.fromISO(b.end).toMillis();
    return s < be && e > bs; // klassieke overlap-test
  });
}
