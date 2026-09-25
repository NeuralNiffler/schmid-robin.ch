---
titel: "Dashboard zur Lebenszufriedenheit"
kurz: "Interaktives Shiny-Dashboard, das zeigt, wie Lebenserwartung, Bildung und BIP pro Kopf mit der Lebenszufriedenheit zusammenhängen."
kontext: "Studium"
zeitraum: "09.2025–02.2026"
problem: "Forschungsfrage im Team: Wie wirken sich historische Indikatoren wie durchschnittliche Anzahl Schuljahre, BIP pro Kopf und Lebenserwartung auf den Happiness Score aus?"
rolle: "Teamprojekt: Datenaufbereitung, Analyse, Shiny-App und Report."
ergebnis: "Eine lauffähige Shiny-App, mit der sich die Zusammenhänge für die Jahre 2011 bis 2023 interaktiv nachvollziehen lassen, dazu ein Report zur Forschungsfrage."
stack:
  - "R"
  - "Shiny"
  - "tidyverse"
  - "Quarto"
  - "renv"
links:
  - label: "Repository"
    url: "https://github.com/NeuralNiffler/prr_dashboard"
order: 4
featured: false
---

## Daten

Grundlage sind Datensätze von Our World in Data. Die Rohdaten liegen getrennt von den bereinigten Daten im Repository. Das Preprocessing in einem Quarto-Dokument erzeugt die bereinigten CSV-Dateien, auf denen App und Report aufbauen. So lässt sich jeder Schritt von der Quelle bis zur Grafik nachvollziehen.

## Reproduzierbarkeit

Die Paketversionen sind mit renv festgehalten. Nach `renv::restore()` läuft die App ohne weitere Konfiguration.
