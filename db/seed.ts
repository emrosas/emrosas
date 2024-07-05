import { db, Projects, ProjectType } from 'astro:db'

export default async function() {
  await db.insert(ProjectType).values([
    {
      id: 1,
      name: 'Landing Page'
    },
    {
      id: 2,
      name: 'Website'
    },
    {
      id: 3,
      name: 'Web App'
    }
  ])

  await db.insert(Projects).values([
    {
      name: 'La Pastelería de La Postreria 77',
      description: 'This is the short description for this project.',
      projectTypeId: 1,
      src: '/images/pasteleria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      name: 'Party Game Companion',
      description: 'This is the short description for this project.',
      projectTypeId: 3,
      src: '/images/pgco.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      name: 'La Postreria 77',
      description: 'This is the short description for this project.',
      projectTypeId: 2,
      src: '/images/postreria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      name: 'The Wrap Co.',
      description: 'This is the short description for this project.',
      projectTypeId: 1,
      src: '/images/wraps.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      name: 'La Pastelería de La Postreria 77',
      description: 'This is the short description for this project.',
      projectTypeId: 1,
      src: '/images/pasteleria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      name: 'Party Game Companion',
      description: 'This is the short description for this project.',
      projectTypeId: 3,
      src: '/images/pgco.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      name: 'La Postreria 77',
      description: 'This is the short description for this project.',
      projectTypeId: 2,
      src: '/images/postreria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      name: 'The Wrap Co.',
      description: 'This is the short description for this project.',
      projectTypeId: 1,
      src: '/images/wraps.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
  ])
}
