---
titel: "5000ratshuus.ch"
kurz: "Ein automatisierter, quellenverlinkter Blog zur Aarauer Kommunalpolitik. Aus jedem Newsletter der Stadt entsteht ohne manuellen Schritt ein Artikel."
kontext: "privat"
zeitraum: "seit 2026"
problem: "Beschlüsse und Mitteilungen der Stadt Aarau erscheinen im städtischen Newsletter, sind dort aber schwer nachzuverfolgen und nicht nach Thema auffindbar. Wer wissen will, was entschieden wurde, muss die amtlichen Quellen selbst zusammensuchen."
rolle: "Idee, Konzept und Umsetzung allein. Datenmodell, Prüfregeln, Pipeline, Hosting und Betrieb. Der Code ist in Zusammenarbeit mit KI entstanden."
ergebnis: "Die Seite ist live. Jede Newsletter-Ausgabe durchläuft automatisch Eingang, Kategorisierung, Artikelerzeugung, Prüfungen und Deploy. Jeder Eintrag verlinkt auf die tiefstmögliche amtliche Quelle."
stack:
  - "Astro"
  - "TypeScript"
  - "Zod"
  - "SQLite"
  - "Cloudflare Workers"
  - "Email Routing"
  - "GitHub Actions"
  - "Claude API"
links:
  - label: "Live-Seite"
    url: "https://5000ratshuus.ch"
  - label: "Repository"
    url: "https://github.com/NeuralNiffler/5000ratshuus.ch"
diagramm: "5000ratshuus"
order: 1
featured: true
---

## Ablauf

Der Newsletter der Stadt kommt per Mail an eine Adresse der Domain. Ein Cloudflare Email Worker prüft den Absender und stösst eine GitHub Action an. Die Action kategorisiert die einzelnen Geschäfte, löst die Quellen auf und erzeugt mit der Claude API den Artikel. Das Ergebnis wird committet, und Cloudflare baut und deployt die Seite.

## Datenqualität vor der Publikation

Weil kein Mensch jeden Artikel liest, bevor er erscheint, liegt die Qualitätssicherung in der Pipeline selbst:

- Jede Ausgabe ist ein eigener Ordner mit dem Artikel und den einzelnen Geschäften als strukturierte Daten. Zod prüft beim Einlesen die Struktur. Fehlt ein Pflichtfeld, bricht der Build ab.
- Vor der Publikation laufen eigene Prüfungen, unter anderem auf die Erreichbarkeit der verlinkten Quellen. Ein Fristdatum im Text blockiert die Publikation, weil hier ein Fehler besonders teuer wäre.
- Eine zweite GitHub Action schlägt Alarm, wenn eine erwartete Ausgabe ausbleibt. So fällt auf, wenn der Eingang still kaputtgeht.
- Für die Archivseiten nach Thema und Art entsteht bei jedem Build ein SQLite-Index aus denselben geprüften Daten.

## Transparenz

Die Seite publiziert mit einem klaren KI-Hinweis statt mit manuellem Review und bietet einen Weg, Fehler zu melden. Architekturentscheide sind datiert im Repository dokumentiert.
