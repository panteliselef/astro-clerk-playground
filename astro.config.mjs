import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import clerk from "@clerk/astro";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // ...
  output: "server",
  adapter: vercel(),
  integrations: [clerk(), react(), tailwind()]
});