import { db, Projects } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
    // TODO
    await db.insert(Projects).values([
        {
            id: 1,
            title: "title 1",
            summary: "this is summary 1 for my seeded database, this i sall but a test",
            documentation: {
                title: "project 1",
                paragraph1: "this is a project and im testing this out",
                paragraph2: "this i sa project and im testing out my db",
            },
            tags: ["t1", "t2", "t3", "t4"],
            image: "~/Desktop/Projects/pweb/src/assets/astro.svg"
        },
        {
            id: 2,
            title: "title 2",
            summary: "this is summary 2 for my seeded database, this i sall but a test",
            documentation: {
                title: "project 2",
                paragraph1: "this is a project and im testing this out",
                paragraph2: "this i sa project and im testing out my db",
            },
            tags: ["t1", "t2", "t3", "t4"],
            image: "~/Desktop/Projects/pweb/src/assets/astro.svg",
            featured: true,
        },
        {
            id: 3,
            title: "title 3",
            summary: "this is summary 2 for my seeded database, this i sall but a test",
            documentation: {
                title: "project 3",
                paragraph1: "this is a project and im testing this out",
                paragraph2: "this i sa project and im testing out my db",
            },
            tags: ["t1", "t2", "t3", "t4"],
            image: "~/Desktop/Projects/pweb/src/assets/astro.svg",
            featured: true,
        },
    ])
}
