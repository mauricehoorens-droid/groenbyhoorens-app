import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groen By Hoorens | Tuinonderhoud in Oost-Vlaanderen",
  description:
    "Tuinonderhoud, snoeiwerk en schors leggen in Oost-Vlaanderen. Ik doe elke tuin zelf, met een prijs die op voorhand vastligt.",
  themeColor: "#1a4a2e",
  icons: {
    icon: "/logo/favicon-32-v2.png",
    apple: "/logo/favicon-v2.png",
  },
  openGraph: {
    title: "Groen By Hoorens",
    description:
      "Tuinonderhoud, snoeiwerk en schors leggen in Oost-Vlaanderen.",
    locale: "nl_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
