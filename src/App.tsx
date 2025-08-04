import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {useState} from "react";
import {StarWarsContext} from "./utils/context.ts";
import {defaultHero} from "./utils/constants.ts";

function App() {
    const [hero, setHero] = useState<string | undefined>(defaultHero);

    return (
        <div className="flex flex-col min-h-screen">
            <StarWarsContext value={{hero, changeHero: setHero}}>
                <Header/>
                <Main/>
                <Footer/>
            </StarWarsContext>
        </div>

    )
}

export default App
