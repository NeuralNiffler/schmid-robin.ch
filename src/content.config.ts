import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Ein Projekt = eine Markdown-Datei in projects/. Dateien mit führendem
 * Unterstrich (z. B. _vorlage.md) werden ignoriert.
 */
const projects = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./projects" }),
  schema: z.object({
    titel: z.string(),
    kurz: z.string(),
    kontext: z.enum(["Beruf", "Studium", "privat"]),
    zeitraum: z.string(),
    problem: z.string(),
    rolle: z.string(),
    ergebnis: z.string(),
    stack: z.array(z.string()).min(1),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    bild: z.string().startsWith("/projects/").optional(),
    bildAlt: z.string().optional(),
    diagramm: z.enum(["5000ratshuus", "bc365", "cowork"]).optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
