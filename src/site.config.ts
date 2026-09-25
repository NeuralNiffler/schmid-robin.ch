/**
 * Zentrale Seitenkonfiguration. Name, Links und Profiltext stehen nur hier,
 * alle Seiten und Komponenten lesen von hier.
 */
export const siteConfig = {
  name: "Robin Schmid",
  /** Basis-URL ohne abschliessenden Slash. Für Sitemap, Canonical und og:url. */
  baseUrl: "https://schmid-robin.ch",
  lang: "de-CH",
  /** Eine Zeile Positionierung, angelehnt an die CV-Kopfzeile. */
  positionierung: "Daten, Datenqualität und ERP, mit Erfahrung als Product Owner",
  /** Meta-Description der Startseite. */
  description:
    "Robin Schmid, Wirtschaftsinformatiker aus Aarau. Projekte rund um Datenqualität, Datenflüsse, ERP und Automatisierung.",
  /** Profiltext im Einstieg. Zeitlos formuliert: keine Stelle, keine Verfügbarkeit, kein Semester. */
  profil: [
    "Ich arbeite dort, wo Fachbereich und System aufeinandertreffen: Stammdaten, Datenmodelle und die Prozesslogik ERP-naher Systeme.",
    "Als Product Owner war ich fachlich verantwortlich für die Datenqualität eines operativen Kernsystems. Entscheidungen stütze ich auf eigene SQL-Analysen, und ich baue Monitorings für die Kennzahlen, die ein Unternehmen tatsächlich steuern.",
  ],
  ort: "Aarau, Schweiz",
  /** Foto unter public/. Fehlt die Datei, zeigt der Einstieg einen Platzhalter mit Initialen. */
  portrait: "/portrait.jpg",
  links: {
    email: "kontakt@schmid-robin.ch",
    linkedin: "https://www.linkedin.com/in/robin-schmid-b7857a28b",
    github: "https://github.com/neuralniffler",
  },
} as const;
