// Läuft vor den statischen Dateien: leitet www auf die Hauptdomain um,
// alles andere geht unverändert an die Astro-Ausgabe in ./dist.
const HAUPTDOMAIN = "schmid-robin.ch";

export default {
  /**
   * @param {Request} request
   * @param {{ ASSETS: { fetch: (request: Request) => Promise<Response> } }} env
   */
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === `www.${HAUPTDOMAIN}`) {
      url.hostname = HAUPTDOMAIN;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
