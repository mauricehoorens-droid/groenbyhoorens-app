"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Annuleren() {
  const [status, setStatus] = useState<"laden" | "klaar" | "fout">("laden");
  const [naam, setNaam] = useState("");

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      setStatus("fout");
      return;
    }
    fetch("/api/cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) {
          setNaam(d.naam || "");
          setStatus("klaar");
        } else {
          setStatus("fout");
        }
      })
      .catch(() => setStatus("fout"));
  }, []);

  const groen = "#1a4a2e";
  return (
    <main style={{ background: "#faf7f2", minHeight: "100vh", fontFamily: "'Lato',sans-serif", color: "#1c2b1e" }}>
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "72px 24px" }}>
        <Link href="/" style={{ color: "#2d6e47", fontWeight: 700, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none" }}>&larr; Terug naar de site</Link>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(28px,5vw,40px)", color: groen, margin: "16px 0 16px" }}>Afspraak annuleren</h1>
        {status === "laden" && <p style={{ color: "#3d5442" }}>Bezig met annuleren…</p>}
        {status === "klaar" && (
          <div style={{ background: "#e8f0e9", border: `1px solid #2d6e47`, borderRadius: 12, padding: "24px" }}>
            <p style={{ color: "#3d5442" }}>Uw afspraak is geannuleerd{naam ? `, ${naam}` : ""}. Het moment is weer vrijgegeven en uit mijn agenda verwijderd. Bedankt om het te laten weten.</p>
          </div>
        )}
        {status === "fout" && (
          <p style={{ color: "#b3261e" }}>Deze annuleer-link is ongeldig of de afspraak is al geannuleerd. Neem gerust rechtstreeks contact op als er iets niet klopt.</p>
        )}
      </div>
    </main>
  );
}
