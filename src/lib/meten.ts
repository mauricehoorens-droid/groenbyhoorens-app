/** Conversies doorgeven aan de Meta-pixel, enkel als die geladen is (dus na
 *  toestemming). Anders gebeurt er niets. */
type W = Window & { fbq?: (...a: unknown[]) => void };

export function meet(gebeurtenis: "Lead" | "Schedule" | "Contact", extra?: Record<string, unknown>) {
  try {
    (window as W).fbq?.("track", gebeurtenis, extra ?? {});
  } catch {}
}
