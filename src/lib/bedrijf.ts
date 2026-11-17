/** Eén plek voor de bedrijfsgegevens van Groen By Hoorens.
 *  Gebruikt door de schema.org-gegevens (layout), de veelgestelde vragen,
 *  robots/sitemap en public/llms.txt. Wijzigt er iets (telefoon, gemeenten,
 *  diensten), pas het HIER aan en vergeet llms.txt niet. */
export const BEDRIJF = {
  naam: "Groen By Hoorens",
  url: "https://www.groenbyhoorens.be",
  eigenaar: "Maurice Hoorens",
  telefoon: "+32498439811",
  telefoonLeesbaar: "0498 43 98 11",
  email: "groenbyhoorens@gmail.com",
  btw: "BE1027265335",
  plaats: "Brakel",
  postcode: "9660",
  provincie: "Oost-Vlaanderen",
  gemeenten: ["Brakel", "Lierde", "Zottegem", "Sint-Lievens-Houtem", "Velzeke", "Ronse", "Oudenaarde", "Zwalm"],
  diensten: [
    { naam: "Tuinonderhoud", uitleg: "Gras maaien, kanten afsteken, wieden en wat er die maand nodig is, op vaste momenten." },
    { naam: "Snoeiwerk", uitleg: "Hagen, struiken en kleiner houtwerk snoeien in het juiste seizoen, snoeisel wordt meegenomen." },
    { naam: "Schors leggen", uitleg: "Bedden proper maken en een gelijke laag schors leggen tegen onkruid en uitdroging." },
  ],
  uren: "Maandag tot vrijdag van 08:00 tot 18:00",
  instagram: "https://www.instagram.com/hoorens_maurice/",
  facebook: "https://www.facebook.com/people/Groen-By-Hoorens/100069720080569/",
  googleMaps: "https://maps.google.com/?cid=9432449784224368385",
} as const;

/** Veelgestelde vragen, geformuleerd zoals mensen ze aan Google of ChatGPT
 *  stellen. Het antwoord staat telkens in de eerste zin (AEO). Alleen feiten
 *  die elders op de site al staan; niets bijverzinnen. Beleefdheidsvorm (u). */
export const VRAGEN: { v: string; a: string }[] = [
  {
    v: "Ik zoek een tuinman in de buurt van Brakel of Zottegem. Komt u ook bij mij?",
    a: `Ja, Groen By Hoorens werkt in ${BEDRIJF.gemeenten.slice(0, -1).join(", ")} en ${BEDRIJF.gemeenten.at(-1)}, en verder in Oost-Vlaanderen als het te combineren valt. Twijfelt u of u in de buurt valt? Bel gerust naar ${BEDRIJF.telefoonLeesbaar}.`,
  },
  {
    v: "Welke tuinwerken doet Groen By Hoorens?",
    a: "Tuinonderhoud (gras maaien, kanten afsteken, wieden), snoeiwerk van hagen, struiken en kleiner houtwerk, en schors leggen in borders. Het snoeisel neem ik mee, zodat u geen hoop takken overhoudt.",
  },
  {
    v: "Wat kost tuinonderhoud of het snoeien van een haag?",
    a: "Dat hangt af van uw tuin, daarom kom ik eerst even kijken en zeg ik daarna wat het kost. Zo krijgt u een prijs die klopt, zonder verrassingen achteraf.",
  },
  {
    v: "Wie komt er bij mij werken?",
    a: "Altijd ik, Maurice Hoorens. Ik ben student bedrijfsmanagement en onderhoud daarnaast tuinen. U krijgt dus nooit een onbekend gezicht aan de deur.",
  },
  {
    v: "Kan ik vaste tuinonderhoud laten doen?",
    a: "Ja, ik kom op vaste momenten langs en doe wat er die maand nodig is. U hoeft er zelf niet meer aan te denken.",
  },
  {
    v: "Hoe maak ik een afspraak?",
    a: `Kies online een moment op groenbyhoorens.be/boeken, of bel of mail: ${BEDRIJF.telefoonLeesbaar}, ${BEDRIJF.email}. Ik ben bereikbaar van maandag tot vrijdag van 8 tot 18 uur en antwoord meestal dezelfde dag.`,
  },
];
