

import {navItems} from "../utils/constants.js";
import StarWars from "./Star Wars.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import AboutMe from "./About me.jsx";

const Main = ({page}) => {

    switch(page) {
        case navItems[1]:
            return (<AboutMe/>)
        case navItems[2]:
            return (<StarWars/>)
        case navItems[3]:
            return (<Contact/>)
        default:
            return (<Home/>)
    }


}

export default Main;