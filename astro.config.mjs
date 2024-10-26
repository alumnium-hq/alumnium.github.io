// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        src: "./src/assets/alumnium-icon.png",
        alt: "Alumnium",
      },
      title: "Alumnium",
      social: {
        github: "https://github.com/p0deje/alumnium",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "How to set up Alumnium in your tests",
              slug: "guides/example",
            },
          ],
        },
      ],
    }),
  ],
});
