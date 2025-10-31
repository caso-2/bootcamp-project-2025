export type Blog = { // type also works
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    content: string
    source: string
	
}

const blogs: Blog[] = [
	{
        title: "Warriors' Jonathan Kuminga fined $35K for actions toward official",
        date: "October 16, 2025",
        description: "The NBA fined Golden State Warriors forward Jonathan Kuminga $35,000 for the actions that led to his ejection late in the first half of a preseason win in Portland on Tuesday night.",
        image: "/images/kuminga.jpeg",
        imageAlt: "Jonathan Kuminga",
        slug: "kuminga-fined",
        content: "The NBA fined Golden State Warriors forward Jonathan Kuminga $35,000 for the actions that led to his ejection late in the first half of a preseason win in Portland on Tuesday night. Kuminga was upset after he didn't receive a whistle on a shot attempt with seven seconds left in the second quarter. Kuminga stumbled while attempting a barreling transition drive through two defenders, missed the layup and immediately went after nearby official Rodney Mott, clapping in Mott's face. Mott ejected Kuminga.",
        source: "ESPN"

    },

    {
        title: "How the NBA has evolved into a 'media and technology company'",
        date: "October 16, 2025",
        description: "For most of the first eight decades of its existence, the NBA was a basketball league and built it into a multi-billion-dollar behemoth. Over the last few years, however, the league has begun to think of itself in a different light inside of its midtown Manhattan offices.",
        image: "/images/adamsilver.jpg",
        imageAlt: "Commissioner Adam Silver",
        slug: "nba-evolve",
        content: "Every year, the NBA likes to roll out a skit at its annual Technology Summit during All-Star Weekend. Last year, in San Francisco, it was a robotic shooting coach for Steph Curry; the year before in Indianapolis it was Victor Wembanyama using something called NB-AI as his own personal basketball Siri. The ideas change — though Ahmad Rashad is a constant — and while they are mostly (presumably) tongue-in-cheek, they also are a peek into how the league views itself. For most of the first eight decades of its existence, the NBA was a basketball league and built it into a multi-billion-dollar behemoth. Over the last few years, however, the league has begun to think of itself in a different light inside of its midtown Manhattan offices. NBA executives say this evolution in mission and perspective is not a redirection of what the league has traditionally done, but an outgrowth of it. The league now needs to not only sell its media rights, but also get involved in producing games.",
        source: "New York Times"

    }, 
];

export default blogs; // This will allow us to access this data anywhere!