import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: "page",
      source: { include: "pages/*.md", prefix: "/" },
      schema: z.object({
        check: z.string(),
        cta: z
          .object({ heading: z.string(), button_label: z.string(), button_url: z.string() })
          .optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
    mdc: defineCollection({
      type: "page",
      source: { include: "mdc/*.md", prefix: "/mdc" },
    }),
  },
});
