import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    type: z.enum(["Landing Page", "Website", "Web App", "API", "Mobile App"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    links: z.object({
      live: z.string().url(),
      code: z.string().url(),
    }),
    services: z.array(z.string()),
    tech: z.array(z.string()),
    timeframe: z.number(),
  }),
});

export const collections = {
  projects: projectCollection,
};
