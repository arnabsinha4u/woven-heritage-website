import { defineCollection, z } from "astro:content";

const productCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string(),
    collection: z.string(),
    price_label: z.string(),
    hero_image: z.string(),
    alt: z.string(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        slot: z.number()
      })
    ),
    materials: z.array(z.string()),
    summary: z.string(),
    story: z.array(z.string()),
    technique: z.array(z.string()),
    featured: z.boolean(),
    sort_order: z.number(),
    list_name: z.string(),
    archive_note: z.string(),
    making_window: z.string(),
    quote: z.string().optional(),
    artisans: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          image: z.string(),
          alt: z.string()
        })
      )
      .optional()
  })
});

export const collections = {
  products: productCollection
};
