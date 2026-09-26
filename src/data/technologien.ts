import type { Kontext } from "./werdegang";

/**
 * Fasst einzelne Stack-Einträge zu Technologie-Familien zusammen, damit z. B. renv, Quarto
 * und Shiny im Diagramm als "R" zählen und nicht als eigene Tools.
 * Nicht aufgeführte Einträge bilden eine eigene Familie unter ihrem Namen.
 */
export const familien: Record<string, string[]> = {
  R: ["R", "tidyverse", "renv", "Quarto", "Shiny", "dplyr", "openxlsx"],
  "SQL (MySQL, Oracle)": ["SQL", "SQLite", "MySQL", "Oracle"],
  "Java / Spring Boot": ["Java / Spring Boot", "Java", "Spring Boot"],
  "ERP (Navision, BC365)": ["Business Central", "Navision"],
  Schnittstellen: ["Schnittstellen", "REST-API"],
  "TypeScript, Angular": ["TypeScript", "Angular", "Astro", "Zod"],
  "Cloudflare, CI/CD": ["Cloudflare Workers", "Email Routing", "GitHub Actions"],
  "Claude / KI": ["Claude", "Claude API", "Claude Cowork", "Claude Code"],
  "Jira, Slack": ["Jira", "Slack"],
};

/** Formate statt Technologien: stehen auf den Projektkarten, zählen aber nicht im Diagramm. */
export const ignoriert = new Set(["Markdown", "Gmail"]);

/**
 * Vorhaben ohne eigene Projektkarte, die trotzdem ins Technologie-Diagramm einfliessen.
 */
export const weitereVorhaben: { titel: string; kontext: Kontext; stack: string[] }[] = [
  { titel: "schmid-robin.ch", kontext: "privat", stack: ["Astro", "TypeScript", "Cloudflare Workers"] },
];

const zuFamilie = new Map(Object.entries(familien).flatMap(([f, tools]) => tools.map((t) => [t, f] as const)));

export function familieVon(tool: string): string {
  return zuFamilie.get(tool) ?? tool;
}
