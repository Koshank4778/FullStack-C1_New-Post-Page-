import "./App.css";
import Header from "./components/Header";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main>
        <FeaturedArticles />
        <FeaturedTutorials />
      </main>

      <Footer />
    </div>
  );
}

export default App;