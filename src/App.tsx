import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {StarWarsContext} from "./utils/context.ts";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className="flex flex-col min-h-screen">
            <StarWarsContext value={{page, changePage: setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </StarWarsContext>
        </div>

    )
}

export default App
