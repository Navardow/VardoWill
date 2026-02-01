import { defineDb, defineTable, column } from 'astro:db';

const Projects = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        title: column.text(),
        summary: column.text(),
        documentation: column.json(),
        tags: column.json(),
        image: column.text(),
        featured: column.boolean({optional: true}),
    },
})

// https://astro.build/db/config
export default defineDb({
    tables: {
        Projects
    }
});

