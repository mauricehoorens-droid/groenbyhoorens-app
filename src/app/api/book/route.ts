import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getBusy, createEvent } from "@/lib/google-calendar";
import { genereerSlots, overlaptBezet, toonDag, type Slot } from "@/lib/slots";

export const dynamic = "force-dynamic";

async function beschikbareSlots(): Promise<Slot[]> {
  const alle = genereerSlots(4);
  if (alle.length === 0) return [];

  const van = alle[0].startUTC;
  const tot = alle[alle.length - 1].endUTC;

  // 1) Bezette periodes uit Google-agenda (valt terug op leeg bij fout)
  let busy: { start?: string | null; end?: string | null }[] = [];
  try {
    busy = await getBusy(van, tot);
  } catch (e) {
    console.warn("Freebusy niet beschikbaar:", (e as Error).message);
  }

  // 2) Reeds geboekte slots uit onze database
  const geboekt = new Set<string>();
  try {
    const { data } = await supabase.rpc("bezette_slots", { van, tot });
    (data ?? []).forEach((r: { slot_start: string }) =>
      geboekt.add(new Date(r.slot_start).getTime().toString())
    );
  } catch (e) {
    console.warn("bezette_slots niet beschikbaar:", (e as Error).message);
  }

  return alle.filter((s) => {
    const alGeboekt = geboekt.has(new Date(s.startUTC).getTime().toString());
    return !alGeboekt && !overlaptBezet(s.startUTC, s.endUTC, busy);
  });
}

// GET: beschikbare slots, gegroepeerd per dag
export async function GET() {
  try {
    const slots = await beschikbareSlots();
    const perDag: Record<string, { dag: string; opties: { dagdeel: string; label: string }[] }> = {};
    for (const s of slots) {
      if (!perDag[s.dateISO]) perDag[s.dateISO] = { dag: toonDag(s.dateISO), opties: [] };
      perDag[s.dateISO].opties.push({ dagdeel: s.dagdeel, label: s.label });
    }
    const dagen = Object.entries(perDag).map(([dateISO, v]) => ({ dateISO, ...v }));
    return NextResponse.json({ ok: true, dagen });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}

// POST: een boeking aanmaken
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { dateISO, dagdeel, naam, adres, email, telefoon, bericht } = body;

    if (!dateISO || !dagdeel || !naam || !adres || !email) {
      return NextResponse.json(
        { ok: false, error: "Vul uw naam, adres, e-mail en een gekozen moment in." },
        { status: 400 }
      );
    }

    // Slot opnieuw berekenen op de server (nooit de tijden van de client vertrouwen)
    const slot = genereerSlots(4).find((s) => s.dateISO === dateISO && s.dagdeel === dagdeel);
    if (!slot) {
      return NextResponse.json({ ok: false, error: "Dit moment is niet (meer) geldig." }, { status: 400 });
    }

    // Nog vrij? (dubbele boeking vermijden)
    const nogVrij = (await beschikbareSlots()).some(
      (s) => s.dateISO === dateISO && s.dagdeel === dagdeel
    );
    if (!nogVrij) {
      return NextResponse.json(
        { ok: false, error: "Dit moment is net volgeboekt. Kies een ander moment." },
        { status: 409 }
      );
    }

    // Event in Google-agenda
    const eventId = await createEvent({
      startISO: slot.startLocalISO,
      endISO: slot.endLocalISO,
      naam,
      adres,
      email,
      telefoon,
      bericht,
      dagdeel,
    });

    // Opslaan in database
    const { error } = await supabase.from("boekingen").insert({
      slot_start: slot.startUTC,
      slot_end: slot.endUTC,
      dagdeel,
      naam,
      adres,
      email,
      telefoon: telefoon || null,
      bericht: bericht || null,
      google_event_id: eventId,
    });
    if (error) console.warn("DB-insert waarschuwing:", error.message);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Boeking mislukt:", (e as Error).message);
    return NextResponse.json({ ok: false, error: "Er ging iets mis bij het boeken." }, { status: 500 });
  }
}
