import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { deleteEvent } from "@/lib/google-calendar";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ ok: false, error: "Ongeldige link." }, { status: 400 });
    }

    // Markeert de boeking als geannuleerd (security-definer functie) en geeft het event-id terug
    const { data, error } = await supabase.rpc("annuleer_boeking", { p_token: token });
    if (error) {
      console.error("Annuleren mislukt:", error.message);
      return NextResponse.json({ ok: false, error: "Er ging iets mis." }, { status: 500 });
    }

    const rows = (data ?? []) as { google_event_id: string | null; naam: string }[];
    if (rows.length === 0) {
      // Token onbekend of afspraak was al geannuleerd
      return NextResponse.json({ ok: true, alreadyCancelled: true });
    }

    // Event uit de Google-agenda verwijderen
    const eventId = rows[0].google_event_id;
    if (eventId) {
      try {
        await deleteEvent(eventId);
      } catch (e) {
        console.warn("Event verwijderen uit agenda mislukt:", (e as Error).message);
      }
    }

    return NextResponse.json({ ok: true, naam: rows[0].naam });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Er ging iets mis." }, { status: 500 });
  }
}
