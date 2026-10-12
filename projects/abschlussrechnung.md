---
titel: "Automatisierte Abschlussrechnungen"
kurz: "Die Positionen bei Aboende gehen direkt aus dem Kernsystem in Business Central. Die Abschlussrechnung entsteht dort ohne manuellen Zwischenschritt."
kontext: "Beruf"
zeitraum: "2024"
problem: "Bei Aboende bearbeiteten Spezialisten die offenen Positionen, zum Beispiel Mehrkilometer oder Schäden in einem Spezialistensystem, und gaben sie an die Finanzabteilung weiter. Dort wurde die Abschlussrechnung von Hand erstellt. Das kostete doppelte Arbeit und Zeit, bis die Rechnung beim Kunden war."
rolle: "Projektleitung und Datenanalyse."
ergebnis: "Die Angaben der Spezialisten fliessen per API direkt ins Buchhaltungssystem, die Rechnung wird dort gedruckt. Die Zeit bis zur Abschlussrechnung beim Kunden sank von 7 auf 2 Tage."
stack:
  - "Java / Spring Boot"
  - "REST-API"
  - "Business Central"
  - "Trevor.io"
diagramm: "abschluss"
order: 3
featured: false
---

## Ablauf vorher und nachher

Vorher lagen zwischen der Bearbeitung durch die Spezialisten und der fertigen Rechnung eine Übergabe und ein manueller Erfassungsschritt in der Finanzabteilung. Nachher erfassen die Spezialisten die Positionen im Kernsystem, und dieselben Daten gehen über die Schnittstelle direkt nach Business Central, wo die Rechnung entsteht.

## Worauf es ankam

- Die Positionen aus dem Kernsystem mussten so strukturiert sein, dass die Buchhaltung sie ohne Nachbearbeitung übernehmen kann.
- Die Schnittstelle baut auf der REST-API auf, die bei der [Migration auf Business Central](/projekte/migration-bc365/) entstanden ist.
- Mit Auswertungen in Trevor.io liess sich die Durchlaufzeit vorher und nachher messen.
