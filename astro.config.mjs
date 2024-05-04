import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  site: 'https://santimc.github.io/lts-sim-check/',
  base: '/lts-sim-check',
});