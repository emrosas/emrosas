import { db, Project } from 'astro:db'

// https://astro.build/db/seed
export default async function () {
	await db.insert(Project).values([
		{
			id: 1,
			name: 'La Postreria 77',
			description: 'Here goes the description for this project.',
			date: new Date('2022-01-30')
		},
		{
			id: 2,
			name: 'The Wrap Co.',
			description: 'Here goes the description for this project.',
			date: new Date('2024-03-20')
		},
		{
			id: 3,
			name: 'La Pasteleria de La Postreria 77',
			description: 'Here goes the description for this project.',
			date: new Date('2024-03-20')
		},
		{
			id: 4,
			name: 'Herrmat',
			description: 'Here goes the description for this project.',
			date: new Date('2024-03-20')
		},
		{
			id: 5,
			name: 'Party Game Companion',
			description: 'Here goes the description for this project.',
			date: new Date('2024-03-20')
		},
		{
			id: 6,
			name: 'Jammming',
			description: 'Here goes the description for this project.',
			date: new Date('2024-03-20')
		}
	])
}
