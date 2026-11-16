import { BEDRIJF, VRAGEN } from "@/lib/bedrijf";
import { REVIEWS, RATING, TOTAL } from "@/components/Reviews";

/** Gegevens voor Google, Google AI Overviews en AI-assistenten (ChatGPT,
 *  Perplexity, Gemini...). Ze lezen dit om te begrijpen WIE we zijn, WAT we
 *  doen en WAAR, en om ons aan te bevelen. Alle waarden komen uit
 *  src/lib/bedrijf.ts en de reviews uit components/Reviews.tsx. */
export default function Schema() {
  const b = BEDRIJF;
  const bedrijf = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${b.url}/#bedrijf`,
    name: b.naam,
    alternateName: ["Groen by Hoorens", "GroenByHoorens", "Tuinonderhoud Maurice Hoorens"],
    description:
      "Tuinman in Brakel, Zottegem en omstreken: tuinonderhoud, snoeiwerk van hagen en struiken, en schors leggen. Altijd dezelfde vakman, Maurice Hoorens.",
    url: b.url,
    logo: `${b.url}/logo/logo.png`,
    image: [
      `${b.url}/img/verzorgde-tuin-oost-vlaanderen-groen-by-hoorens.jpg`,
      `${b.url}/img/haag-snoeien-snoeiwerk-groen-by-hoorens.jpg`,
      `${b.url}/img/tuinonderhoud-gazon-maaien-groen-by-hoorens.jpg`,
    ],
    telephone: b.telefoon,
    email: b.email,
    vatID: b.btw,
    founder: { "@type": "Person", name: b.eigenaar },
    address: {
      "@type": "PostalAddress",
      addressLocality: b.plaats,
      postalCode: b.postcode,
      addressRegion: b.provincie,
      addressCountry: "BE",
    },
    areaServed: [
      ...b.gemeenten.map((g) => ({ "@type": "City", name: g })),
      { "@type": "AdministrativeArea", name: b.provincie },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    hasMap: b.googleMaps,
    sameAs: [b.googleMaps, b.instagram, b.facebook],
    knowsAbout: ["tuinonderhoud", "snoeiwerk", "haag snoeien", "schors leggen", "gras maaien", "borders"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tuinwerken",
      itemListElement: b.diensten.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d.naam, description: d.uitleg, areaServed: b.provincie },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING,
      reviewCount: TOTAL,
      bestRating: 5,
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: VRAGEN.map((q) => ({
      "@type": "Question",
      name: q.v,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bedrijf) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
