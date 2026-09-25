---
titel: "Persönliches Arbeitssystem mit Claude Cowork"
kurz: "Eigene Skills und Workflows, die wiederkehrende Arbeit mit Daten aus mehreren Quellen automatisieren, zum Beispiel den Abgleich der Zeiterfassung."
kontext: "privat"
zeitraum: "seit 2026"
problem: "Viele kleine, wiederkehrende Aufgaben verlangen, Informationen aus mehreren Systemen zusammenzutragen und gegeneinander zu prüfen. Von Hand ist das langsam und fehleranfällig."
rolle: "Konzept und Aufbau der Struktur, der Skills und der Regeln, nach denen sie arbeiten."
ergebnis: "Ein strukturierter Workspace mit eigenen Skills, die Quellen zusammenführen, Abweichungen markieren und konkrete Vorschläge liefern, statt nur Daten anzuzeigen."
stack:
  - "Claude Cowork"
  - "Claude Code"
  - "Markdown"
  - "Jira"
  - "Slack"
  - "Gmail"
diagramm: "cowork"
order: 3
featured: false
---

## Beispiel: Zeiterfassung abgleichen

Ein Skill vergleicht die erfasste Arbeitszeit mit den Buchungen in Jira für einen Zeitraum. Er zeigt Lücken und vermutete Erfassungsfehler und leitet aus Kalender, Slack, Gmail und Jira-Aktivität ab, welche Stunden auf welches Ticket gehören. Im Kern ist das ein Datenqualitätsproblem: zwei Quellen, die übereinstimmen sollten, und eine Regel, was als Abweichung gilt.

## Beispiel: Newsletter zu Artikel

Ein weiterer Skill baut aus einer Ausgabe des Newsletters der Stadt Aarau einen quellenverlinkten Artikel. Er war der Prototyp für die automatisierte Pipeline von [5000ratshuus.ch](/projekte/5000ratshuus/).

## Aufbau

Der Workspace trennt Referenzwissen, Projekte und Skills. Regeln zur Tonalität und zu Quellen sind einmal festgehalten und gelten für alle Skills. So bleiben die Ergebnisse nachvollziehbar und lassen sich prüfen.
