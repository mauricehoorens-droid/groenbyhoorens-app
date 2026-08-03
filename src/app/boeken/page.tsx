"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Optie { dagdeel: string; label: string }
interface Dag { dateISO: string; dag: string; opties: Optie[] }

export default function Boeken() {
  const [dagen, setDagen] = useState<Dag[]>([]);
  const [laden, setLaden] = useState(true);
  const [gekozen, setGekozen] = useState<{ dateISO: string; dagdeel: string; label: string; dag: string } | null>(null);
  const [form, setForm] = useState({ naam: "", adres: "", email: "", telefoon: "", bericht: "", website: "" });
  const [status, setStatus] = useState<"idle" | "bezig" | "klaar" | "fout">("idle");
  const [fout, setFout] = useState("");
  const [cancelUrl, setCancelUrl] = useState("");

  useEffect(() => {
    fetch("/api/book")
      .then((r) => r.json())
      .then((d) => setDagen(d.dagen ?? []))
      .catch(() => setDagen([]))
      .finally(() => setLaden(false));
  }, []);

  async function verstuur(e: React.FormEvent) {
    e.preventDefault();
    if (!gekozen || form.website) return;
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
      if (d.cancelToken) setCancelUrl(`${window.location.origin}/annuleren?token=${d.cancelToken}`);
      setStatus("klaar");
    } catch (err) {
      setFout((err as Error).message);
      setStatus("fout");
    }
  }

  return (
    <section style={{ padding: "150px 0 110px" }}>
      <div className="wrap-narrow">
        <Link href="/" className="link-underline" style={{ color: "var(--color-groen-mid)", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase" }}>← Terug naar de site</Link>
        <p className="eyebrow" style={{ margin: "26px 0 14px" }}>Plan uw tuinwerken</p>
        <h1 className="display-lg" style={{ color: "var(--color-groen)" }}>Kies een moment dat u past</h1>
        <p className="lead" style={{ marginTop: 18 }}>
          Kies een voormiddag (8–12u) of namiddag (12–16u). Ik bevestig de afspraak
          meteen in mijn agenda en kom op het afgesproken moment langs.
        </p>

        {status === "klaar" ? (
          <div style={{ background: "var(--color-wit)", border: "1px solid var(--color-groen-mid)", borderRadius: 6, padding: "30px", marginTop: 34 }}>
            <h2 className="display-md" style={{ color: "var(--color-groen)", fontSize: 26 }}>Afspraak bevestigd ✓</h2>
            <p style={{ color: "#3a463b", marginTop: 10 }}>
              Bedankt, {form.naam}. Ik heb <strong>{gekozen?.dag}</strong> — {gekozen?.label} ingepland
              en kom langs op {form.adres}.
            </p>
            {cancelUrl && (
              <p style={{ color: "#3a463b", marginTop: 16, fontSize: 14 }}>
                Toch niet nodig? U kunt zelf annuleren via deze persoonlijke link (bewaar hem goed):<br />
                <a href={cancelUrl} className="link-underline" style={{ color: "var(--color-groen-mid)", wordBreak: "break-all" }}>{cancelUrl}</a>
              </p>
            )}
          </div>
        ) : (
          <>
            <h2 className="display-md" style={{ color: "var(--color-groen)", fontSize: 22, margin: "40px 0 16px" }}>1. Kies een moment</h2>
            {laden ? (
              <p style={{ color: "#3a463b" }}>Beschikbare momenten laden…</p>
            ) : dagen.length === 0 ? (
              <p style={{ color: "#3a463b" }}>Er zijn momenteel geen vrije momenten. Neem gerust contact op via de site.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
                {dagen.map((dag) => (
                  <div key={dag.dateISO}>
                    <div style={{ fontWeight: 600, textTransform: "capitalize", marginBottom: 8 }}>{dag.dag}</div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {dag.opties.map((o) => {
                        const actief = gekozen?.dateISO === dag.dateISO && gekozen?.dagdeel === o.dagdeel;
                        return (
                          <button key={o.dagdeel} type="button"
                            onClick={() => setGekozen({ dateISO: dag.dateISO, dagdeel: o.dagdeel, label: o.label, dag: dag.dag })}
                            style={{
                              cursor: "pointer", border: `1.5px solid ${actief ? "var(--color-groen)" : "rgba(23,32,26,0.22)"}`,
                              background: actief ? "var(--color-groen)" : "var(--color-wit)", color: actief ? "var(--color-creme)" : "var(--color-inkt)",
                              borderRadius: 999, padding: "11px 20px", fontSize: 14, fontWeight: 600, fontFamily: "inherit",
                            }}>
                            {o.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <h2 className="display-md" style={{ color: "var(--color-groen)", fontSize: 22, margin: "8px 0 16px" }}>2. Uw gegevens</h2>
            <form onSubmit={verstuur} style={{ display: "grid", gap: 16 }}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })}
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
              <label className="field">Uw naam *
                <input required value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })} />
              </label>
              <label className="field">Adres van de tuin *
                <input required placeholder="Straat en nummer, postcode, gemeente" value={form.adres} onChange={(e) => setForm({ ...form, adres: e.target.value })} />
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <label className="field">E-mail *
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
                <label className="field">Telefoon
                  <input type="tel" value={form.telefoon} onChange={(e) => setForm({ ...form, telefoon: e.target.value })} />
                </label>
              </div>
              <label className="field">Extra info (optioneel)
                <textarea rows={3} value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })} placeholder="Wat zou er moeten gebeuren?" />
              </label>
              {status === "fout" && <p style={{ color: "#b3261e", fontSize: 14 }}>{fout}</p>}
              <button type="submit" className="btn" disabled={!gekozen || status === "bezig"} style={{ justifyContent: "center", background: !gekozen ? "#9db3a3" : undefined, borderColor: !gekozen ? "#9db3a3" : undefined }}>
                {status === "bezig" ? "Bezig met inplannen…" : gekozen ? `Afspraak bevestigen — ${gekozen.dag}` : "Kies eerst een moment"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
