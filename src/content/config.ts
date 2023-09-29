import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    //    description: z.string(),
    ghlink: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional()
  })
});

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    start: z.string(),
    end: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    order: z.number().optional()
  })
});

const education = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    start: z.string(),
    end: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    order: z.number().optional()
  })
});

const about = defineCollection({
  schema: z.object({
    title: z.string(),
    isPublished: z.boolean().optional(),
    skills: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional()
  })
});

export const collections = { blog, experience, education, about };
