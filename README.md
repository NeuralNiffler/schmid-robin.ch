# schmid-robin.ch

Persönliche Seite von Robin Schmid mit Projektportfolio. Statisch gebaut mit [Astro](https://astro.build/), ausgeliefert über Cloudflare Workers Static Assets. Keine Cookies, kein Tracking, keine externen Ressourcen.

## Neues Projekt hinzufügen

1. `projects/_vorlage.md` kopieren und umbenennen, z. B. `projects/mein-projekt.md`. Der Dateiname wird zur URL `/projekte/mein-projekt/`.
2. Frontmatter ausfüllen, darunter die ausführliche Beschreibung in Markdown.
3. Optional ein Bild nach `public/projects/` legen und im Feld `bild` eintragen, z. B. `bild: "/projects/mein-projekt.png"` (Seitenverhältnis 16:9).
4. `npm run build` lokal prüfen, dann pushen. Cloudflare deployt automatisch.

Fehlt ein Pflichtfeld oder ist ein Wert ungültig, bricht der Build mit einer Meldung ab, welches Feld betroffen ist. Das Schema steht in `src/content.config.ts`.

Die Reihenfolge ergibt sich aus `featured` (zuerst) und `order` (kleiner = weiter vorne). Dateien mit führendem Unterstrich erscheinen nicht auf der Seite.

## Foto

`public/portrait.jpg` ablegen (quadratisch, mindestens 640 × 640 px). Ohne Datei zeigt die Seite die Initialen.

## Texte ändern

- Name, Positionierung, Profiltext und Links: `src/site.config.ts`
- Werdegang: `src/components/Werdegang.astro`
- Diagramme für Projekte ohne Bild: `src/components/Diagramm.astro`

Schreibweise: Schweizer Deutsch (ss statt Eszett), keine Gedankenstriche im Fliesstext, zeitlos formuliert (kein "aktuell", keine Verfügbarkeit).

## Lokal entwickeln

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # Typprüfung
npm run build    # statische Seite nach ./dist/
```

## Einmalige Einrichtung

1. **GitHub:** Repository `NeuralNiffler/schmid-robin.ch` anlegen und pushen.
2. **Domain:** In Cloudflare `schmid-robin.ch` als Website hinzufügen und die Nameserver bei hosttech auf die von Cloudflare angezeigten umstellen.
3. **Deploy:** In Cloudflare unter Workers & Pages ein Projekt aus dem GitHub-Repo erstellen. Der Projektname muss `schmid-robin-ch` sein (wie in `wrangler.jsonc`). Build-Befehl `npm run build`, Deploy-Befehl `npx wrangler deploy`. Die Custom Domains `schmid-robin.ch` und `www.schmid-robin.ch` legt Wrangler über die Routen in `wrangler.jsonc` selbst an. Vorher die alten A- und AAAA-Einträge von hosttech löschen (`*`, Hauptdomain, `www`). `www` leitet `worker/index.js` per 301 auf die Hauptdomain um.
4. **E-Mail:** Unter Email Routing die Adresse `kontakt@schmid-robin.ch` anlegen und an die private Adresse weiterleiten. Die Zieladresse muss einmal bestätigt werden.
