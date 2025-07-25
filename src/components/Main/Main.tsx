import Home from "./home/Home.tsx";
import AboutMe from "./aboutMe/AboutMe.tsx";
import StarWars from "./starWars/StarWars.tsx";
import Contact from "./contact/Contact.tsx";
import {navItems} from "../../utils/constants.ts";
import {useContext} from "react";
import {StarWarsContext} from "../../utils/context.ts";

const Main = () => {
    const {page} = useContext(StarWarsContext);
    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }
}

export default Main;