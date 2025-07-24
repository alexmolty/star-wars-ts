import {useContext} from "react";
import {StarWarsContext} from "../utils/context.ts";
interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}:NavItemProps) => {
    const {changePage} = useContext(StarWarsContext);
    return (
        <li onClick={() => changePage(itemTitle)}
            className="bg-red-color border-black border-2 rounded-md px-3 py-2
             cursor-pointer hover:bg-red-800">{itemTitle}</li>
    );
};

export default NavItem;