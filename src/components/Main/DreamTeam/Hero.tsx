import {StarWarsContext} from "../../../utils/context.ts";
import {characters, defaultHero} from "../../../utils/constants.ts";
import {useContext} from "react";

const Hero = () => {
    const {hero = defaultHero} = useContext(StarWarsContext)
    return (
        <section className="float-left w-[20%] mr-3">
            <img className="w-full shadow-hero" src={characters[hero].img} alt="Hero"/>
        </section>
    );
};

export default Hero;