---
titel: "Bildung und Religiosität in der Schweiz"
kurz: "Analyse der BFS-Strukturerhebung und der Volkszählung zu Bildungsabschluss und Religionszugehörigkeit über mehrere Jahre."
kontext: "Studium"
zeitraum: "09.2025–02.2026"
problem: "Wie hängen höchster Bildungsabschluss und Religiosität in der Schweiz zusammen, und wie haben sich beide über die Jahre entwickelt? Zusätzlich nach Gemeindetypologie und Sprachregion."
rolle: "Data Analyst und Projektleiter im Team."
ergebnis: "Die Analyse zeigt über mehrere Erhebungsjahre eine abnehmende Religiosität und eine zunehmende Akademisierung, aufbereitet in einer Serie finaler Visualisierungen."
stack:
  - "R"
  - "tidyverse"
  - "renv"
order: 5
featured: false
---

## Daten

Die Grundlage bilden die BFS-Strukturerhebung (2010 bis 2022) und die Volkszählung, ergänzt um öffentliche BFS-Daten zu Sprachregionen und Gemeindetypologien. Die Strukturerhebungsdaten sind gross und nicht öffentlich. Sie liegen deshalb nicht im Repository und müssen lokal in einer festen Ordnerstruktur abgelegt werden.

## Vorgehen

Ein eigenes Preprocessing führt die Erhebungsjahre in eine einheitliche Struktur zusammen und muss einmal vollständig durchlaufen, bevor Exploration und finale Grafiken darauf aufbauen.

_Das Repository ist nicht öffentlich, weil es mit nicht öffentlichen BFS-Daten arbeitet._
