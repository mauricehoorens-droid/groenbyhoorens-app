import type { Metadata } from "next";

/* De boekpagina zelf is een client-component en kan geen metadata hebben,
   daarom staat die hier. */
export const metadata: Metadata = {
  title: "Tuinbezoek of tuinwerken inplannen",
  description:
    "Kies online een moment voor een tuinbezoek of tuinwerken in Brakel, Zottegem en omstreken. Groen By Hoorens, tuinonderhoud en snoeiwerk.",
  alternates: { canonical: "/boeken" },
};

export default function BoekenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
