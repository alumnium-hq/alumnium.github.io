/** @type {import('tailwindcss').Config} */
import starlightPlugin from "@astrojs/starlight-tailwind";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#111827",
        },
        text: {
          light: "#111827",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [starlightPlugin()],
};
