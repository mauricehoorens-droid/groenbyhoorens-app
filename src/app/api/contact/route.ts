import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { naam, telefoon, email, dienst, bericht } = await req.json();

    if (!naam || !email) {
      return NextResponse.json(
        { ok: false, error: "Naam en e-mail zijn verplicht." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("aanvragen").insert({
      naam,
      telefoon: telefoon || null,
      email,
      dienst: dienst || null,
      bericht: bericht || null,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
