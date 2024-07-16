import { column, defineTable, defineDb } from 'astro:db'

const ProjectType = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text()
  }
})

const Projects = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    shortDescription: column.text(),
    projectTypeId: column.number({ references: () => ProjectType.columns.id }),
    src: column.text(),
    alt: column.text(),
    projectLink: column.text(),
    codeLink: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Projects, ProjectType }
})
