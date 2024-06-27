import { db, Projects } from 'astro:db'

export default async function() {
  await db.insert(Projects).values([
    {
      id: 'pasteleria',
      name: 'La Pastelería de La Postreria 77',
      description: 'This is the short description for this project.',
      src: '/images/pasteleria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    }
  ])
}
