import { column, defineTable, defineDb } from 'astro:db';

const Projects = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text(),
    desccription: column.text(),
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
