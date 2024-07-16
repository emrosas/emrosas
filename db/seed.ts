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
      id: 'pasteleria',
      name: 'La Pastelería de La Postreria 77',
      description:
        'Lorem ipsum dolor sit amet consectetur. Etiam bibendum morbi aliquet quis consequat maecenas. Mollis elementum massa lectus blandit vivamus in. Rutrum lacus amet sem vel eu mauris risus. Eget cras dignissim urna egestas. Velit pharetra sed adipiscing imperdiet. Nisi orci dolor at id semper pharetra.',
      shortDescription: "A Landing Page that promotes the brand's desserts and branches.",
      projectTypeId: 1,
      src: '/images/pasteleria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      id: 'party',
      name: 'Party Game Companion',
      description:
        'Lorem ipsum dolor sit amet consectetur. Etiam bibendum morbi aliquet quis consequat maecenas. Mollis elementum massa lectus blandit vivamus in. Rutrum lacus amet sem vel eu mauris risus. Eget cras dignissim urna egestas. Velit pharetra sed adipiscing imperdiet. Nisi orci dolor at id semper pharetra.',
      shortDescription:
        'A Web App that allows you to display a leaderboard and keep score locally.',
      projectTypeId: 3,
      src: '/images/pgco.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      id: 'postreria',
      name: 'La Postreria 77',
      description:
        'Lorem ipsum dolor sit amet consectetur. Etiam bibendum morbi aliquet quis consequat maecenas. Mollis elementum massa lectus blandit vivamus in. Rutrum lacus amet sem vel eu mauris risus. Eget cras dignissim urna egestas. Velit pharetra sed adipiscing imperdiet. Nisi orci dolor at id semper pharetra.',
      shortDescription: "An informative website that hosts the brand's QR menu.",
      projectTypeId: 2,
      src: '/images/postreria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      id: 'wraps',
      name: 'The Wrap Co.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Etiam bibendum morbi aliquet quis consequat maecenas. Mollis elementum massa lectus blandit vivamus in. Rutrum lacus amet sem vel eu mauris risus. Eget cras dignissim urna egestas. Velit pharetra sed adipiscing imperdiet. Nisi orci dolor at id semper pharetra.',
      shortDescription: "An informative website that hosts the brand's QR menu.",
      projectTypeId: 1,
      src: '/images/wraps.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      id: 'herrmat',
      name: 'Herrmat',
      description:
        'Lorem ipsum dolor sit amet consectetur. Etiam bibendum morbi aliquet quis consequat maecenas. Mollis elementum massa lectus blandit vivamus in. Rutrum lacus amet sem vel eu mauris risus. Eget cras dignissim urna egestas. Velit pharetra sed adipiscing imperdiet. Nisi orci dolor at id semper pharetra.',
      shortDescription: 'An e-commerce website with a clean product catalog.',
      projectTypeId: 1,
      src: '/images/pasteleria.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    },
    {
      id: 'victoria',
      name: 'Instituto Victoria',
      description:
        'Lorem ipsum dolor sit amet consectetur. Etiam bibendum morbi aliquet quis consequat maecenas. Mollis elementum massa lectus blandit vivamus in. Rutrum lacus amet sem vel eu mauris risus. Eget cras dignissim urna egestas. Velit pharetra sed adipiscing imperdiet. Nisi orci dolor at id semper pharetra.',
      shortDescription: 'A Marketing website with an integrated blog and CMS.',
      projectTypeId: 3,
      src: '/images/pgco.png',
      alt: 'An image of the La Pastelería de La Postreria 77 website.',
      projectLink: 'https://lapasteleriadelapostreria.com/',
      codeLink: 'https://github.com/emrosas/pasteleria'
    }
  ])
}
