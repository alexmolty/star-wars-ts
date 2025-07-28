import {NavLink} from "react-router";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    return (
        <NavLink to={itemTitle} className={"border-amber-500 border-b-red-500 backdrop-blur-lg border font-sw rounded-md px-2 py-1\n" +
            "cursor-pointer hover:bg-red-800"}>{itemTitle}</NavLink>
    )
};

export default NavItem;