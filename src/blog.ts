type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Warriors' Jonathan Kuminga fined $35K for actions toward official",
        date: "October 16, 2025",
        description: "The NBA fined Golden State Warriors forward Jonathan Kuminga $35,000 for the actions that led to his ejection late in the first half of a preseason win in Portland on Tuesday night.",
        image: "images/kuminga.jpeg",
        imageAlt: "Jonathan Kuminga",
        slug: "kuminga-fined",
    },

    {
        title: "How the NBA has evolved into a 'media and technology company'",
        date: "October 16, 2025",
        description: "For most of the first eight decades of its existence, the NBA was a basketball league and built it into a multi-billion-dollar behemoth. Over the last few years, however, the league has begun to think of itself in a different light inside of its midtown Manhattan offices.",
        image: "images/adamsilver.jpg",
        imageAlt: "Commissioner Adam Silver",
        slug: "nba-evolve",

    },
]

const blogContainer = document.getElementById('blog-container');
// Only list blogs if container exists
if (blogContainer !== null) {
    blogs.forEach((blog) => {

        const div = document.createElement("div");
        div.className = "card";

        const title = document.createElement("h1");
        title.textContent = blog.title;

        const date = document.createElement("p");
        date.textContent = blog.date;

        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;

        const description = document.createElement("p");
        description.textContent = blog.description;

        const slug = document.createElement("a");
        slug.href = "blogs/" + blog.slug + ".html";
        slug.textContent = "Read More";

        div.appendChild(title);
        div.appendChild(image);
        div.appendChild(date);
        div.appendChild(description);
        div.appendChild(slug);

        blogContainer.appendChild(div);
    });
}
