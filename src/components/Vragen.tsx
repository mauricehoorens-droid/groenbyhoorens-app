import Reveal from "./Reveal";
import { VRAGEN } from "@/lib/bedrijf";

/** Veelgestelde vragen, uitklapbaar zonder JavaScript. De FAQPage-gegevens
 *  voor Google staan in components/Schema.tsx (zelfde bron: lib/bedrijf.ts). */
export default function Vragen() {
  return (
    <section className="section" id="vragen">
      <div className="wrap-narrow">
        <Reveal style={{ marginBottom: 32 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Goed om te weten</p>
          <h2 className="display-lg" style={{ color: "var(--color-groen)" }}>Veelgestelde vragen</h2>
        </Reveal>
        <Reveal>
          {VRAGEN.map((q, n) => (
            <details key={q.v} open={n === 0} style={{ borderTop: "1px solid rgba(26,74,53,0.18)", padding: "18px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, color: "var(--color-groen)", fontSize: 17 }}>{q.v}</summary>
              <p style={{ marginTop: 10, color: "#3a463b", maxWidth: "62ch" }}>{q.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
