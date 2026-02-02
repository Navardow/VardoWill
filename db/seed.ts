import { db, Projects } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
    // TODO
    if (!import.meta.env.PROD) {
        await db.insert(Projects).values([
            {
                id: 1,
                title: "title 1",
                summary: "this is summary 1 for my seeded database, this i sall but a test",
                documentation: "somefile",
                tags: ["t1", "t2", "t3", "t4"],
                image: "/src/assets/placeholder.png",
            },
            {
                id: 2,
                title: "Personal Website",
                summary: "this is summary 2 for my seeded database, this i sall but a test",
                documentation: "somefile",
                tags: ["astro", "javascript", "typescript", "html", "css", "sql"],
                image: "/src/assets/placeholder3.jpg",
                featured: true,
            },
            {
                id: 3,
                title: "~/.dotfiles",
                summary: "this is summary 2 for my seeded database, this i sall but a test",
                documentation: "somefile",
                tags: ["bash", "linux", "tmux", "git"],
                image: "/src/assets/placeholder.png",
                featured: true,
            },
        ])
    }
}
