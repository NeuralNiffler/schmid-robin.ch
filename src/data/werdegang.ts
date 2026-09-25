/**
 * Werdegang als Daten: Grundlage für Gantt, Detailliste und Kennzahlen.
 * Nur Highlights. Der vollständige Werdegang steht auf LinkedIn.
 * Jahre als Zahl, `bis: null` = laufend. Ohne `bis` und mit `meilenstein` = einzelner Zeitpunkt.
 */
export type Kontext = "Beruf" | "Studium" | "privat";

export interface Station {
  von: number;
  bis: number | null;
  titel: string;
  ort: string;
  kontext: Kontext;
  text?: string;
  /** Technologien der Station. Fliessen ins Technologie-Diagramm ein. */
  stack?: string[];
  meilenstein?: boolean;
}

export const beruf: Station[] = [
  {
    von: 2022,
    bis: 2025,
    titel: "Product Owner",
    ort: "Carvolution",
    kontext: "Beruf",
    text: "Fachlich verantwortlich für Datenqualität und Prozesslogik des internen ERP-nahen Kernsystems mit über 80 Nutzenden in vier Fachbereichen. Operatives Dashboard mit automatisierten Alerts auf rund zehn Finanzkennzahlen.",
    stack: ["SQL", "Jira", "Slack"],
  },
  {
    von: 2019,
    bis: 2021,
    titel: "Software Engineer Fullstack",
    ort: "Carvolution",
    kontext: "Beruf",
    text: "Java/Spring Boot, Angular und SQL am Kernsystem. Architektur, Schnittstellen und Datenflüsse zwischen Drittsystemen und dem eigenen ERP-ähnlichen System.",
    stack: ["Java / Spring Boot", "Angular", "SQL", "Navision"],
  },
  {
    von: 2017,
    bis: 2019,
    titel: "Application Engineer, Bereich Finanzieren",
    ort: "Basler Kantonalbank",
    kontext: "Beruf",
    text: "Analyse und Bereitstellung strukturierter Daten für fachspezifische Reports im Finanzumfeld.",
  },
];

export const ausbildung: Station[] = [
  { von: 2025, bis: null, titel: "Studium BSc Data Science & AI", ort: "FHNW", kontext: "Studium" },
  { von: 2014, bis: 2017, titel: "BSc Wirtschaftsinformatik", ort: "FHNW", kontext: "Studium" },
  { von: 2019, bis: 2019, titel: "Professional Scrum Master (PSM I)", ort: "Scrum.org", kontext: "Studium", meilenstein: true },
];

/** Zeitraum als Text, z. B. "2017–2019", "seit 2025" oder "2019". */
export function zeitraum(s: Station): string {
  if (s.bis === null) return `seit ${s.von}`;
  if (s.bis === s.von) return String(s.von);
  return `${s.von}–${s.bis}`;
}
