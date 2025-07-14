import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://lukaskulig.fr",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
