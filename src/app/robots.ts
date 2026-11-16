import type { MetadataRoute } from "next";
import { BEDRIJF } from "@/lib/bedrijf";

/** Iedereen mag binnen, ook de AI-zoekmachines (ChatGPT, Claude, Perplexity,
 *  Gemini, Copilot): die moeten de site kunnen lezen om ons aan te bevelen.
 *  /api/ en de annuleerpagina horen niet in een zoekmachine. */
export default function robots(): MetadataRoute.Robots {
  const dicht = ["/api/", "/annuleren"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: dicht },
      {
        userAgent: [
          "OAI-SearchBot", "ChatGPT-User", "GPTBot",
          "ClaudeBot", "Claude-SearchBot", "Claude-User",
          "PerplexityBot", "Perplexity-User",
          "Google-Extended", "Applebot-Extended", "Bingbot",
        ],
        allow: "/",
        disallow: dicht,
      },
    ],
    sitemap: `${BEDRIJF.url}/sitemap.xml`,
  };
}
