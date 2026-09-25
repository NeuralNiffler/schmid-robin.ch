---
titel: "Migration Navision auf Business Central"
kurz: "Migration der Buchhaltung von Navision on-prem auf Business Central SaaS, inklusive Umbau der Schnittstellen zum eigenen Kernsystem."
kontext: "Beruf"
zeitraum: "09.2022–02.2023"
problem: "Die Buchhaltung von Carvolution lief auf Navision on-prem mit eigenen Customizations und Extensions. Das eigene ERP-nahe Kernsystem tauschte Daten mit der Buchhaltung über XML-Files aus."
rolle: "Entwickler und Projektleiter: Umbau der Schnittstellen und Koordination der Migration."
ergebnis: "Die Buchhaltung läuft auf Microsoft Dynamics 365 Business Central als SaaS, mit übernommenen Customizations und Extensions. Der Datenaustausch mit dem Kernsystem läuft über eine REST-API statt über XML-Files."
stack:
  - "Business Central"
  - "Navision"
  - "REST-API"
  - "Java / Spring Boot"
  - "SQL"
diagramm: "bc365"
order: 2
featured: true
---

## Kontext

Carvolution betreibt ein eigenes ERP-nahes Kernsystem, in dem die operativen Prozesse abgebildet sind. Die Buchhaltung lief daneben auf Navision. Die Datenflüsse zwischen den beiden Systemen kannte ich aus meiner Zeit als Software Engineer, weil ich Architektur und Schnittstellen dieses Kernsystems mitgebaut hatte.

## Worauf es ankam

Bei einer Migration dieser Art ist das neue System selten das Schwierige. Heikel sind die Übergänge: welche Daten in welcher Form aus dem Kernsystem kommen, welche Felder die Buchhaltung erwartet und was passiert, wenn ein Datensatz nicht passt.

- Die Schnittstellen wurden von dateibasiertem Austausch über XML auf eine REST-API umgebaut. Damit sind Fehler direkt beim Aufruf sichtbar und nicht erst beim Einlesen einer Datei.
- Customizations und Extensions aus Navision mussten für Business Central SaaS neu bewertet und übernommen werden.
- Als Projektleiter habe ich die Migration geplant und die Beteiligten koordiniert.

_Interne Details und Kennzahlen des Projekts sind hier bewusst nicht aufgeführt._
