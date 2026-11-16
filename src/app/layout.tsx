import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toestemming from "@/components/Toestemming";
import Schema from "@/components/Schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* SEO (16 nov 2026): dienst + plaats vooraan in titel en beschrijving, want zo
   zoeken mensen ("tuinman Brakel", "haag snoeien Zottegem"). Titel < ~60
   tekens, beschrijving < ~160. Geen "aanplanting" meer: dat staat niet bij de
   diensten. */
export const metadata: Metadata = {
  metadataBase: new URL("https://groenbyhoorens.be"),
  alternates: { canonical: "/" },
  title: {
    default: "Tuinman Brakel & Zottegem · tuinonderhoud en snoeiwerk | Groen By Hoorens",
    template: "%s | Groen By Hoorens",
  },
  description:
    "Tuinonderhoud, haag snoeien en schors leggen in Brakel, Zottegem, Lierde, Zwalm en omstreken. Altijd dezelfde tuinman, Maurice. Vrijblijvend een prijs na bezoek.",
  openGraph: {
    title: "Groen By Hoorens · tuinman in Brakel, Zottegem en omstreken",
    description: "Tuinonderhoud, snoeiwerk en schors leggen in Oost-Vlaanderen. Altijd dezelfde vakman.",
    siteName: "Groen By Hoorens",
    locale: "nl_BE",
    type: "website",
    url: "/",
    images: [{ url: "/img/verzorgde-tuin-oost-vlaanderen-groen-by-hoorens.jpg" }],
  },
  /* Domeinverificatie voor Meta (bedrijfsportfolio Groen By Hoorens >
     Merkveiligheid > Domeinen). Laten staan, anders vervalt de verificatie. */
  verification: {
    other: { "facebook-domain-verification": "q6gft3xva628bvahk48xs3ttb0uch6" },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/logo/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo/favicon-192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Toestemming />
        <Schema />
      </body>
    </html>
  );
}
