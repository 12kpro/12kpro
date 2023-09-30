import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://maurosimoni.me",
  integrations: [mdx(), sitemap(), compress()],
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    }
  }
});
