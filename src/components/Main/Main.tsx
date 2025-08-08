import DreamTeamMain from "./DreamTeam/DreamTeamMain.tsx";
import AboutMe from "./aboutMe/AboutMe.tsx";
import StarWars from "./starWars/StarWars.tsx";
import Contact from "./contact/Contact.tsx";
import {navItems} from "../../utils/constants.ts";
import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage/ErrorPage.tsx";
import {Home} from "./Home/Home.tsx";

const Main = () => {
    return (
        <div className="flex-grow">
        <Routes>
            {['/',navItems[0], `${navItems[0]}/:heroId`].map(path => <Route key={path} path={path} element={<Home/>} />)}
            {[navItems[1], `${navItems[1]}/:heroId`].map(path => <Route key={path} path={path} element={<DreamTeamMain/>} />)}
            {[navItems[2], `${navItems[2]}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe/>} />)}
            {[navItems[3], `${navItems[3]}/:heroId`].map(path => <Route key={path} path={path} element={<StarWars/>} />)}
            {[navItems[4], `${navItems[4]}/:heroId`].map(path => <Route key={path} path={path} element={<Contact/>} />)}
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
        </div>
    )
}

export default Main;