import type { StarlightRouteData } from "@astrojs/starlight/route-data";
import { getHead } from "../../node_modules/@astrojs/starlight/utils/head.ts";

const siteTitle = "Alumnium";

// This function is used to generate the Starlight-like route config for the blog posts.
export function routeConfig(data: {
  title: string;
  slug: string;
  description?: string;
  siteTitleHref?: string;
}): StarlightRouteData {
  const entry = {
    id: data.slug,
    slug: data.slug,
    filePath: data.slug,
    data: {
      title: data.title,
      description: data.description,
      head: [],
      pagefind: false,
      editUrl: false,
      template: "doc" as const,
      sidebar: { hidden: true, attrs: {} },
      draft: false,
    },
    collection: "docs" as const,
  };
  const entryMeta = { dir: "ltr" as const, lang: "en" as const, locale: "en-US" as const };
  return {
    siteTitle,
    entry,
    entryMeta,
    pagination: { prev: undefined, next: undefined },
    headings: [],
    sidebar: [],
    hasSidebar: false,
    siteTitleHref: data.siteTitleHref || "/",
    toc: undefined,
    lastUpdated: undefined,
    editUrl: undefined,
    slug: data.slug,
    id: data.slug,
    dir: "ltr",
    lang: "en",
    locale: "en-US",
    head: getHead(
      { entry, lang: "en", entryMeta, headings: [], slug: data.slug, id: data.slug, dir: "ltr", locale: "en-US" },
      { url: new URL(data.slug, "https://alumnium.ai"), generator: "Astro", site: new URL("https://alumnium.ai") },
      siteTitle,
    ),
  };
}
