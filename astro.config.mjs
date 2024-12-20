// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://alumnium.ai",
  image: {
    service: sharpImageService({ limitInputPixels: false }),
  },
  integrations: [
    starlight({
      logo: {
        src: "./public/favicon.svg",
        alt: "Alumnium",
      },
      title: "Alumnium",
      social: {
        github: "https://github.com/alumnium-hq/alumnium",
        slack: "https://seleniumhq.slack.com/channels/alumnium",
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
          label: "Getting Started",
          items: [
            {
              label: "Overview",
              slug: "docs",
            },
            {
              label: "Installation",
              slug: "docs/getting-started/installation",
            },
            {
              label: "Configuration",
              slug: "docs/getting-started/configuration",
            },
            {
              label: "Writing First Test",
              slug: "docs/getting-started/writing-first-test",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Do Actions",
              slug: "docs/guides/actions",
            },
            {
              label: "Check Verifications",
              slug: "docs/guides/verifications",
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
