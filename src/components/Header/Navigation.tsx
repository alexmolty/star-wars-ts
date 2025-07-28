import NavItem from "./NavItem.tsx";
import {navItems} from "../../utils/constants.ts";

const Navigation = () => {
    return (
        <nav>
            <ul className="fixed top-1 left-5 flex gap-2">
                {navItems.map(item => <NavItem itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;