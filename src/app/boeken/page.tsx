"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Optie { dagdeel: string; label: string }
interface Dag { dateISO: string; dag: string; opties: Optie[] }

export default function Boeken() {
  const [dagen, setDagen] = useState<Dag[]>([]);
  const [laden, setLaden] = useState(true);
  const [gekozen, setGekozen] = useState<{ dateISO: string; dagdeel: string; label: string; dag: string } | null>(null);
  const [form, setForm] = useState({ naam: "", adres: "", email: "", telefoon: "", bericht: "" });
  const [status, setStatus] = useState<"idle" | "bezig" | "klaar" | "fout">("idle");
  const [fout, setFout] = useState("");

  useEffect(() => {
    fetch("/api/book")
      .then((r) => r.json())
      .then((d) => setDagen(d.dagen ?? []))
      .catch(() => setDagen([]))
      .finally(() => setLaden(false));
  }, []);

  async function verstuur(e: React.FormEvent) {
    e.preventDefault();
    if (!gekozen) return;
    setStatus("bezig");
    setFout("");
    try {
      const r = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dateISO: gekozen.dateISO, dagdeel: gekozen.dagdeel, ...form }),
      });
      const d = await r.json();
      if (!r.ok || !d.ok) throw new Error(d.error || "Er ging iets mis.");
      setStatus("klaar");
    } catch (err) {
      setFout((err as Error).message);
      setStatus("fout");
    }
  }

  const groen = "#1a4a2e";
  const mid = "#2d6e47";

  return (
    <main style={{ background: "#faf7f2", minHeight: "100vh", fontFamily: "'Lato',sans-serif", color: "#1c2b1e" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 96px" }}>
        <Link href="/" style={{ color: mid, fontWeight: 700, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none" }}>&larr; Terug naar de site</Link>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(30px,5vw,44px)", color: groen, margin: "16px 0 8px" }}>Plan uw tuinwerken</h1>
        <p style={{ color: "#3d5442", marginBottom: 32 }}>Kies een voormiddag of namiddag die u past. Ik bevestig de afspraak meteen in mijn agenda en kom op het afgesproken moment langs.</p>

        {status === "klaar" ? (
          <div style={{ background: "#e8f0e9", border: `1px solid ${mid}`, borderRadius: 12, padding: "28px 24px" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", color: groen, fontSize: 24, marginBottom: 8 }}>Afspraak bevestigd ✓</h2>
            <p style={{ color: "#3d5442" }}>Bedankt, {form.naam}. Ik heb <strong>{gekozen?.dag}</strong> — {gekozen?.label} ingepland en kom langs op {form.adres}. U hoort van mij als er iets wijzigt.</p>
          </div>
        ) : (
          <>
            {/* Stap 1: moment kiezen */}
            <h2 style={{ fontFamily: "'Playfair Display',serif", color: groen, fontSize: 20, margin: "8px 0 14px" }}>1. Kies een moment</h2>
            {laden ? (
              <p style={{ color: "#3d5442" }}>Beschikbare momenten laden…</p>
            ) : dagen.length === 0 ? (
              <p style={{ color: "#3d5442" }}>Er zijn momenteel geen vrije momenten. Neem gerust contact op via de site.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {dagen.map((dag) => (
                  <div key={dag.dateISO}>
                    <div style={{ fontWeight: 700, textTransform: "capitalize", marginBottom: 6 }}>{dag.dag}</div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {dag.opties.map((o) => {
                        const actief = gekozen?.dateISO === dag.dateISO && gekozen?.dagdeel === o.dagdeel;
                        return (
                          <button
                            key={o.dagdeel}
                            type="button"
                            onClick={() => setGekozen({ dateISO: dag.dateISO, dagdeel: o.dagdeel, label: o.label, dag: dag.dag })}
                            style={{
                              cursor: "pointer",
                              border: `1.5px solid ${actief ? groen : "#cdbfa6"}`,
                              background: actief ? groen : "#fff",
                              color: actief ? "#fff" : "#1c2b1e",
                              borderRadius: 10,
                              padding: "10px 16px",
                              fontSize: 14,
                              fontWeight: 700,
                            }}
                          >
                            {o.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Stap 2: gegevens */}
            <h2 style={{ fontFamily: "'Playfair Display',serif", color: groen, fontSize: 20, margin: "8px 0 14px" }}>2. Uw gegevens</h2>
            <form onSubmit={verstuur} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Veld label="Uw naam *" value={form.naam} onChange={(v) => setForm({ ...form, naam: v })} required />
              <Veld label="Adres van de tuin *" value={form.adres} onChange={(v) => setForm({ ...form, adres: v })} required placeholder="Straat en nummer, postcode, gemeente" />
              <Veld label="E-mail *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <Veld label="Telefoon" type="tel" value={form.telefoon} onChange={(v) => setForm({ ...form, telefoon: v })} />
              <Veld label="Extra info (optioneel)" value={form.bericht} onChange={(v) => setForm({ ...form, bericht: v })} textarea placeholder="Wat zou er moeten gebeuren?" />

              {status === "fout" && <p style={{ color: "#b3261e" }}>{fout}</p>}

              <button
                type="submit"
                disabled={!gekozen || status === "bezig"}
                style={{
                  marginTop: 8,
                  cursor: !gekozen || status === "bezig" ? "not-allowed" : "pointer",
                  background: !gekozen ? "#9db3a3" : groen,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 22px",
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: ".02em",
                }}
              >
                {status === "bezig" ? "Bezig met inplannen…" : gekozen ? `Afspraak bevestigen — ${gekozen.dag}` : "Kies eerst een moment"}
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}

function Veld(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const stijl: React.CSSProperties = {
    border: "1.5px solid #cdbfa6",
    borderRadius: 10,
    padding: "11px 14px",
    fontSize: 15,
    fontFamily: "inherit",
    background: "#fff",
    width: "100%",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontWeight: 700, fontSize: 14, color: "#3d5442" }}>
      {props.label}
      {props.textarea ? (
        <textarea rows={3} value={props.value} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} style={stijl} />
      ) : (
        <input type={props.type || "text"} value={props.value} required={props.required} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} style={stijl} />
      )}
    </label>
  );
}
