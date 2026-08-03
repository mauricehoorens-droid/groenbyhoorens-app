"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Annuleren() {
  const [status, setStatus] = useState<"laden" | "klaar" | "fout">("laden");
  const [naam, setNaam] = useState("");

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) { setStatus("fout"); return; }
    fetch("/api/cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) { setNaam(d.naam || ""); setStatus("klaar"); }
        else setStatus("fout");
      })
      .catch(() => setStatus("fout"));
  }, []);

  return (
    <section style={{ padding: "160px 0 120px" }}>
      <div className="wrap-narrow" style={{ maxWidth: 640 }}>
        <Link href="/" className="link-underline" style={{ color: "var(--color-groen-mid)", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase" }}>← Terug naar de site</Link>
        <h1 className="display-lg" style={{ color: "var(--color-groen)", margin: "22px 0 16px" }}>Afspraak annuleren</h1>
        {status === "laden" && <p style={{ color: "#3a463b" }}>Bezig met annuleren…</p>}
        {status === "klaar" && (
          <div style={{ background: "var(--color-wit)", border: "1px solid var(--color-groen-mid)", borderRadius: 6, padding: 24 }}>
            <p style={{ color: "#3a463b" }}>
              Uw afspraak is geannuleerd{naam ? `, ${naam}` : ""}. Het moment is weer vrijgegeven
              en uit mijn agenda verwijderd. Bedankt om het te laten weten.
            </p>
          </div>
        )}
        {status === "fout" && (
          <p style={{ color: "#b3261e" }}>Deze annuleer-link is ongeldig of de afspraak is al geannuleerd. Neem gerust rechtstreeks contact op als er iets niet klopt.</p>
        )}
      </div>
    </section>
  );
}
