import { column, defineTable, defineDb } from 'astro:db';

const Projects = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    description: column.text(),
    src: column.text(),
    alt: column.text(),
    projectLink: column.text(),
    codeLink: column.text(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Projects }
});
