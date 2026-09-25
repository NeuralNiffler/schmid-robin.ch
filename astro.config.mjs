// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/site.config.ts";

export default defineConfig({
  site: siteConfig.baseUrl,
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith("/404") })],
});
