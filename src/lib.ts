import { getCollection } from "astro:content";

/** Alle Projekte, sortiert nach `order` (kleiner = weiter vorne), Featured zuerst. */
export async function getProjekte() {
  const projekte = await getCollection("projects");
  return projekte.sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || a.data.order - b.data.order,
  );
}
