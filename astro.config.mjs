// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/deploy/
  site: "https://alumnium.ai",
  integrations: [
    starlight({
      logo: {
        src: "./public/favicon.svg",
        alt: "Alumnium",
      },
      title: "Alumnium",
      social: {
        github: "https://github.com/alumnium-hq/alumnium",
      },
      favicon: "./public/favicon.svg",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "32x32",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.svg",
            type: "image/svg+xml",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
          },
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
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
