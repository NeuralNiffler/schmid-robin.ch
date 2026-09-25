---
titel: "AdBrief"
kurz: "Aus Marketing-Kennzahlen in Excel oder JSON entsteht automatisch ein interaktiver HTML-Report mit Kennzahlen und Grafiken."
kontext: "privat"
zeitraum: "2026"
problem: "Marketing-Kennzahlen landen oft als Tabelle beim Kunden. Jeder Report wird von Hand formatiert, und Kennzahlen wie Kosten pro Klick werden jedes Mal neu berechnet."
rolle: "Konzept und Umsetzung allein."
ergebnis: "Ein Kommandozeilen-Tool, das Excel- oder JSON-Daten einliest, in eine einheitliche Struktur bringt und daraus einen fertigen HTML-Report rendert."
stack:
  - "R"
  - "Quarto"
  - "dplyr"
  - "openxlsx"
links:
  - label: "Repository"
    url: "https://github.com/NeuralNiffler/AdBrief"
order: 6
featured: false
---

## Aufbau

Die Eingabe kann eine Excel-Vorlage mit festen Tabellenblättern oder eine JSON-Datei sein. Beide Formate werden in dieselbe Datenstruktur überführt, bevor der Report entsteht. Damit gibt es nur einen Weg, wie Daten in den Report kommen, egal woher sie stammen.

## Was automatisch passiert

- Berechnung von Effizienzkennzahlen wie CPM, CPC, CPL und CAC
- Zeitreihen mit Trend und Vergleich zum Vormonat
- eine kurze, programmatisch erzeugte Zusammenfassung

Zum Ausprobieren gibt es einen Testmodus mit Beispieldaten.
