import { defineDb, defineTable, column } from 'astro:db';

const Projects = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        title: column.text({ optional: false }),
        summary: column.text({ optional: false }),
        documentation: column.text({ optional: false }),
        tags: column.json({ optional: true }),
        image: column.text({ optional: false }),
        featured: column.boolean({ optional: true, default: false }),
        date: column.date({ optional: true }),
    },
})

const Blogs = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        title: column.text({ optional: false }),
        summary: column.text({ optional: false }),
        image: column.text({optional: false }),
        postContent: column.text( { optional: false } ),
        tags: column.json({ optional: true }),
        date: column.date({ optional: true }),
    },
})

// https://astro.build/db/config
export default defineDb({
    tables: {
        Projects,
        Blogs,
    }
});

