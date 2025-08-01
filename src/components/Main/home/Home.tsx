import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {characters, defaultHero} from "../../../utils/constants.ts";
import {StarWarsContext} from "../../../utils/context.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";

const Home = () => {
    const {heroId} = useParams();
    const {changeHero} = useContext(StarWarsContext);
    const selectedHero = heroId ?? defaultHero;

    useEffect(() => {
        if (!(selectedHero in characters)) return;
        changeHero(selectedHero);
    }, [selectedHero]);
    return (
        <main className="clear-both">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    );
};

export default Home;