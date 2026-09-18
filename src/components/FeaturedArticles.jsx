import ArticleCard from "./ArticleCard";

function FeaturedArticles() {
    const articles = [
        {
            id: 1,
            title: "Getting Started with React",
            description: "Learn the basics of React components and JSX.",
            image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
            rating: 5,
            author: "Koshank"
        },
        {
            id: 2,
            title: "Understanding NodeJS",
            description: "Explore the fundamentals of NodeJS development.",
            image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
            rating: 5,
            author: "Alex"
        },
        {
            id: 3,
            title: "React Hooks Explained",
            description: "Understand how React Hooks make components more powerful.",
            image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
            rating: 5,
            author: "Sarah"
        }
    ];

    return (
        <section className="featured-articles">
            <h2>Featured Articles</h2>

            <div className="article-container">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                ))}
            </div>

            <button>See all articles</button>
        </section>
    );
}

export default FeaturedArticles;