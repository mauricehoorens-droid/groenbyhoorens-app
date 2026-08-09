import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    default: "Groen By Hoorens — tuinonderhoud, snoeiwerk & aanplanting",
    template: "%s | Groen By Hoorens",
  },
  description:
    "Professioneel tuinonderhoud in Brakel en omstreken. Onderhoud, snoeiwerk, borders en schors — met oog voor detail. Plan eenvoudig een afspraak online.",
  openGraph: {
    title: "Groen By Hoorens",
    description: "Professioneel tuinonderhoud in Brakel en omstreken.",
    siteName: "Groen By Hoorens",
    locale: "nl_BE",
    type: "website",
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
      </body>
    </html>
  );
}
