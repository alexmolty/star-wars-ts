import {createContext} from "react";
import {navItems} from "./constants.ts";
import type {SWContextValue} from "./types";

export const StarWarsContext = createContext<SWContextValue>({
    page: navItems[0],
    changePage: (page: string) => console.log(page),
});