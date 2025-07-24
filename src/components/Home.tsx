import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";

const Home = () => {
    return (
        <main className="clear-both">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    );
};

export default Home;