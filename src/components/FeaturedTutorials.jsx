import TutorialCard from "./TutorialCard";

function FeaturedTutorials() {
    const tutorials = [
        {
            id: 1,
            title: "React Fundamentals",
            description: "Learn the fundamentals of building applications with React.",
            image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
            rating: 5,
            author: "Koshank"
        },
        {
            id: 2,
            title: "JavaScript for Beginners",
            description: "Understand the core concepts of modern JavaScript.",
            image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
            rating: 4,
            author: "Alex"
        },
        {
            id: 3,
            title: "Web Development Basics",
            description: "Build a strong foundation in modern web development.",
            image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
            rating: 5,
            author: "Sarah"
        }
    ];

    return (
        <section className="featured-tutorials">
            <h2>Featured Tutorials</h2>

            <div className="tutorial-container">
                {tutorials.map((tutorial) => (
                    <TutorialCard
                        key={tutorial.id}
                        tutorial={tutorial}
                    />
                ))}
            </div>

            <button>See all tutorials</button>
        </section>
    );
}

export default FeaturedTutorials;