import { z, defineCollection } from 'astro:content'

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		draft: z.boolean(),
		sortOrder: z.number({ default: 0 }),
		name: z.string(),
		description: z.string(),
		shortDescription: z.string(),
		type: z.enum(['Landing Page', 'Website', 'Web App', 'API', 'Mobile App']),
		image: z.object({
			src: z.string(),
			alt: z.string()
		}),
		links: z.object({
			live: z.string().url().optional(),
			code: z.string().url().optional()
		}),
		skills: z.array(z.string()),
		tech: z.array(z.string()),
		timeframe: z.object({
			weeks: z.number(),
			launched: z.string()
		})
	})
})

export const collections = { projects }
