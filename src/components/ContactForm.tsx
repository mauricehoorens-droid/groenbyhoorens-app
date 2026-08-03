"use client";

import { useState } from "react";

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState({ naam: "", telefoon: "", email: "", dienst: "", bericht: "", website: "" });
  const [status, setStatus] = useState<"idle" | "bezig" | "klaar" | "fout">("idle");
  const [fout, setFout] = useState("");
  const fieldCls = dark ? "field field-dark" : "field";
  const btnCls = dark ? "btn btn-translucent" : "btn";

  async function verstuur(e: React.FormEvent) {
    e.preventDefault();
    if (form.website) return;
    setStatus("bezig");
    setFout("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const d = await r.json();
      if (!r.ok || !d.ok) throw new Error(d.error || "Er ging iets mis.");
      setStatus("klaar");
    } catch (err) {
      setFout((err as Error).message);
      setStatus("fout");
    }
  }

  if (status === "klaar") {
    return (
      <div style={{ background: dark ? "rgba(255,255,255,0.06)" : "var(--color-wit)", border: `1px solid ${dark ? "rgba(255,255,255,0.2)" : "var(--color-groen-mid)"}`, borderRadius: 4, padding: 30 }}>
        <h3 className="display-md" style={{ color: dark ? "#fff" : "var(--color-groen)", fontSize: 24 }}>Bedankt{form.naam ? `, ${form.naam}` : ""}! ✓</h3>
        <p style={{ color: dark ? "var(--color-beige)" : "#3a463b", marginTop: 10 }}>Ik heb uw bericht ontvangen en kom er zo snel mogelijk op terug.</p>
      </div>
    );
  }

  return (
    <form onSubmit={verstuur} style={{ display: "grid", gap: 16 }}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <label className={fieldCls}>Uw naam
          <input required placeholder="Jan Janssen" value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })} />
        </label>
        <label className={fieldCls}>Telefoonnummer
          <input type="tel" placeholder="0499 00 00 00" value={form.telefoon} onChange={(e) => setForm({ ...form, telefoon: e.target.value })} />
        </label>
      </div>
      <label className={fieldCls}>E-mailadres
        <input type="email" required placeholder="jan@voorbeeld.be" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </label>
      <label className={fieldCls}>Waarvoor zoekt u iemand?
        <select value={form.dienst} onChange={(e) => setForm({ ...form, dienst: e.target.value })}>
          <option value="">Kies een dienst</option>
          <option>Tuinonderhoud</option>
          <option>Snoeiwerk</option>
          <option>Schors leggen</option>
          <option>Combinatie van diensten</option>
          <option>Iets anders</option>
        </select>
      </label>
      <label className={fieldCls}>Uw bericht
        <textarea rows={4} placeholder="Hoe groot is de tuin, en wat zou er moeten gebeuren?" value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })} />
      </label>
      {status === "fout" && <p style={{ color: "#b3261e", fontSize: 14 }}>{fout}</p>}
      <button type="submit" className={btnCls} disabled={status === "bezig"} style={{ justifyContent: "center" }}>
        {status === "bezig" ? "Versturen…" : "Versturen"}
      </button>
    </form>
  );
}
