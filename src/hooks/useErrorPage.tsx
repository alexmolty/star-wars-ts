import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {StarWarsContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";

export const useErrorPage = () => {
    const {heroId} = useParams();
    const {changeHero} = useContext(StarWarsContext);
    const selectedHero = heroId ?? defaultHero;

    useEffect(() => {
        if (!(selectedHero in characters)) {
            return;
        }
        changeHero(selectedHero);
    }, [selectedHero]);

    return {
        isError: (!(selectedHero in characters)),
        selectedHero,
        headerError: "Error",
    }
}