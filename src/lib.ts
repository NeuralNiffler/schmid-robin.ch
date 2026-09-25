import { getCollection, type CollectionEntry } from "astro:content";
import { beruf, type Kontext } from "./data/werdegang";
import { familieVon, ignoriert, weitereVorhaben } from "./data/technologien";
import { siteConfig } from "./site.config";

type Projekt = CollectionEntry<"projects">;

export const kontexte: Kontext[] = ["Beruf", "Studium", "privat"];

/** Alle Projekte, sortiert nach `order` (kleiner = weiter vorne), Featured zuerst. */
export async function getProjekte() {
  const projekte = await getCollection("projects");
  return projekte.sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || a.data.order - b.data.order,
  );
}

/**
 * Kennzahlen für die KPI-Kacheln. IT-Jahre und Tools kommen aus den Daten (feste Jahre, damit
 * die Zahl nicht von selbst altert), der Rest aus siteConfig.kennzahlen.
 */
export function getKennzahlen(projekte: Projekt[]) {
  const { arbeitsjahre, projekteTotal, nutzendeKernsystem } = siteConfig.kennzahlen;
  const start = Math.min(...beruf.map((b) => b.von));
  const ende = Math.max(...beruf.map((b) => b.bis ?? b.von));
  const bereiche = getTechnologien(projekte, Infinity).length;
  return [
    { wert: arbeitsjahre, einheit: "Jahre", label: `Arbeitserfahrung, davon ${ende - start} in der IT` },
    { wert: projekteTotal, einheit: "", label: `Projekte umgesetzt`},
    { wert: String(bereiche), einheit: "", label: "Technologiebereiche in Beruf und Projekten" },
    { wert: nutzendeKernsystem, einheit: "", label: "Nutzende im betreuten Kernsystem" },
  ];
}

/**
 * Technologie-Familien nach Häufigkeit: gezählt wird, in wie vielen Projekten, Berufsstationen und weiteren Vorhaben
 * eine Familie vorkommt (je Eintrag höchstens einmal), aufgeteilt nach Kontext.
 */
export function getTechnologien(projekte: Projekt[], anzahl = 10) {
  const eintraege = [
    ...projekte.map((p) => ({ kontext: p.data.kontext, stack: p.data.stack })),
    ...beruf.map((b) => ({ kontext: b.kontext, stack: b.stack ?? [] })),
    ...weitereVorhaben,
  ].map((e) => ({ ...e, stack: e.stack.filter((t) => !ignoriert.has(t)) }));
  const zaehler = new Map<string, { jeKontext: Record<Kontext, number>; tools: Set<string> }>();
  for (const e of eintraege) {
    for (const familie of new Set(e.stack.map(familieVon))) {
      const z = zaehler.get(familie) ?? { jeKontext: { Beruf: 0, Studium: 0, privat: 0 }, tools: new Set<string>() };
      z.jeKontext[e.kontext] += 1;
      zaehler.set(familie, z);
    }
    for (const tool of e.stack) zaehler.get(familieVon(tool))!.tools.add(tool);
  }
  return [...zaehler]
    .map(([familie, { jeKontext, tools }]) => ({
      familie,
      tools: [...tools],
      jeKontext,
      total: kontexte.reduce((s, k) => s + jeKontext[k], 0),
    }))
    .sort((a, b) => b.total - a.total || a.familie.localeCompare(b.familie, "de"))
    .slice(0, anzahl);
}
