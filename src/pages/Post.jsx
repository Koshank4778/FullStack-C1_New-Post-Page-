import { useState } from "react";

function Post() {
    const [postType, setPostType] = useState("question");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [abstract, setAbstract] = useState("");
    const [articleText, setArticleText] = useState("");
    const [tags, setTags] = useState("");

    const handlePost = (event) => {
        event.preventDefault();

        const tagList = tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "");

        if (!title.trim()) {
            alert("Please enter a title.");
            return;
        }

        if (postType === "question" && !description.trim()) {
            alert("Please describe your problem.");
            return;
        }

        if (
            postType === "article" &&
            (!abstract.trim() || !articleText.trim())
        ) {
            alert("Please enter the abstract and article text.");
            return;
        }

        if (tagList.length > 3) {
            alert("You can add a maximum of 3 tags.");
            return;
        }

        if (tagList.some((tag) => tag.length === 0)) {
            alert("Please enter valid tags.");
            return;
        }

        alert("Your post has been submitted successfully!");

        setTitle("");
        setDescription("");
        setAbstract("");
        setArticleText("");
        setTags("");
    };

    return (
        <main className="post-page">
            <form className="post-form" onSubmit={handlePost}>
                <h2 className="post-heading">New Post</h2>

                <div className="post-type">
                    <span>Select Post Type:</span>

                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="question"
                            checked={postType === "question"}
                            onChange={() => setPostType("question")}
                        />
                        Question
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="article"
                            checked={postType === "article"}
                            onChange={() => setPostType("article")}
                        />
                        Article
                    </label>
                </div>

                <section className="post-section">
                    <h3>What do you want to ask or share</h3>

                    <p className="post-instruction">
                        This section is designed based on the type of the post.
                        It changes depending on your selection.
                    </p>

                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder={
                            postType === "question"
                                ? "Start your question with how, what, why, etc."
                                : "Enter a descriptive title"
                        }
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />

                    {postType === "question" ? (
                        <>
                            <label htmlFor="description">Describe your problem</label>
                            <textarea
                                id="description"
                                className="large-textarea"
                                placeholder="Explain your question or problem"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                required
                            />
                        </>
                    ) : (
                        <>
                            <label htmlFor="abstract">Abstract</label>
                            <textarea
                                id="abstract"
                                className="small-textarea"
                                placeholder="Enter a 1-paragraph abstract"
                                value={abstract}
                                onChange={(event) => setAbstract(event.target.value)}
                                required
                            />

                            <label htmlFor="articleText">Article Text</label>
                            <textarea
                                id="articleText"
                                className="large-textarea"
                                placeholder="Write your article here"
                                value={articleText}
                                onChange={(event) => setArticleText(event.target.value)}
                                required
                            />
                        </>
                    )}

                    <label htmlFor="tags">Tags</label>
                    <input
                        id="tags"
                        type="text"
                        placeholder="Add up to 3 comma-separated tags, e.g. Java, React"
                        value={tags}
                        onChange={(event) => setTags(event.target.value)}
                    />

                    <p className="tag-help">
                        Separate your tags with commas. You can add up to 3 tags.
                    </p>
                </section>

                <button className="post-button" type="submit">
                    Post
                </button>
            </form>
        </main>
    );
}

export default Post;
