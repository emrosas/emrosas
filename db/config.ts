import { defineDb, defineTable, column } from 'astro:db'

const Project = defineTable({
	columns: {
		id: column.number(),
		name: column.text(),
		description: column.text(),
		date: column.date()
	}
})

// https://astro.build/db/config
export default defineDb({
	tables: { Project }
})
