import {NavLink} from "react-router";
import {useContext} from "react";
import {StarWarsContext} from "../../utils/context.ts";
import {defaultHero} from "../../utils/constants.ts";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {hero = defaultHero} = useContext(StarWarsContext);

    return (
        <NavLink
            to={`/${itemTitle}/${hero}`}
            className={"border-amber-500 border-b-red-500" +
                " backdrop-blur-lg border" +
                " font-sw rounded-md px-2 py-1\n" +
                "cursor-pointer hover:bg-red-800"}>
            {itemTitle}
        </NavLink>
    )
};

export default NavItem;