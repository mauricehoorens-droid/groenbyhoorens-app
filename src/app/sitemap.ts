import type { MetadataRoute } from "next";
import { BEDRIJF } from "@/lib/bedrijf";

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  return [
    { url: `${BEDRIJF.url}/`, lastModified: nu, changeFrequency: "monthly", priority: 1 },
    { url: `${BEDRIJF.url}/boeken`, lastModified: nu, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BEDRIJF.url}/algemene-voorwaarden`, lastModified: nu, changeFrequency: "yearly", priority: 0.2 },
  ];
}
