import Navigation from "./Navigation.tsx";
import {StarWarsContext} from "../../utils/context.ts";
import {useContext} from "react";
import {characters} from "../../utils/constants.ts";

const Header = () => {
    const {hero} = useContext(StarWarsContext)
    return (
        <header className="rounded-t-1xl bg-gray-color">
            <Navigation/>
            <h1 className="text-center text-3xl py-6">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;